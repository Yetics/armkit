import { JSONSchema4, JSONSchema4Type } from "json-schema";
import { CodeMaker, toPascalCase } from "codemaker";
import { constantCase } from "change-case";
import $RefParser = require("@apidevtools/json-schema-ref-parser");

export interface TypeGeneratorOptions {
  exclude?: string[];
}

export interface GeneratedConstruct {
  readonly fqn: string;
  readonly kind: string;
  readonly schema: JSONSchema4;
}

export class TypeGenerator {
  private readonly typesToEmit: { [name: string]: (code: CodeMaker) => void } = { };
  private readonly emittedTypes = new Set<string>();

  constructor(private readonly schema: $RefParser.$Refs) {}

  public emitConstruct(def: GeneratedConstruct) {
    this.emitLater(def.kind, code => {
      const schema = def.schema;
      const optionsStructName = `${def.kind}Options`;
      const options = createOptionsStructSchema();
      this.emitType(optionsStructName, options, def.fqn)

      emitConstruct();

      function createOptionsStructSchema() {
        const copy: JSONSchema4 = { ...def.schema };

        copy.required = copy.required || [];
        copy.required = copy.required.filter(x => x !== 'apiVersion' && x !== 'kind' && x !== 'status');

        return copy;
      }

      function emitConstruct() {
        code.line('/**');
        code.line(` * ${def.schema.description}`);
        code.line(` *`);
        code.line(` * @schema ${def.fqn}`)
        code.line(` */`);
        code.openBlock(`export class ${def.kind} extends ArmResource`);

        emitInitializer();

        code.closeBlock();
      }

      function emitInitializer() {

        code.line(`/**`);
        code.line(` * Defines a "${def.fqn}" Arm Template object`);
        code.line(` * @param scope the scope in which to define this object`);
        code.line(` * @param name a scope-local name for the object`);
        code.line(` * @param options configuration options`);
        code.line(` */`);

        const hasRequired = schema.required && Array.isArray(schema.required) && schema.required.length > 0;
        const defaultOptions = hasRequired ? '' : ' = {}';
        code.openBlock(`public constructor(scope: Construct, name: string, options: ${optionsStructName}${defaultOptions})`);
        emitInitializerSuper();
        code.closeBlock();
      }

      function emitInitializerSuper() {
        code.open(`super(scope, name, {`);
        code.line(`...options,`);
        code.line(`armResourceType: '${def.kind}',`);
        code.close(`});`);
      }
    });
  }

  public emitType(typeName: string, def: JSONSchema4, structFqn: string): string {
    typeName = normalizeTypeName(typeName);

    if (def.$ref) {
      return this.typeForRef(def);
    }

    // unions
    if (def.oneOf || def.anyOf) {
      const foo = def.oneOf || def.anyOf

      if (foo === undefined) {
        throw new Error("undefined shouldnt happen here")
      }

      const reducer = (accumulator: JSONSchema4[], type: JSONSchema4) => {
        if (type.$ref && type.$ref.match(/expression$/)) {
        } else {
          accumulator.push(type)
        }
        return accumulator
      }
      const cleanTypes = foo.reduce(reducer, [])

      if (cleanTypes.length > 1) {
        this.emitUnion(typeName, def, structFqn)
        return typeName;
      } else {
        return this.typeForProperty(typeName, cleanTypes[0])
      }
    }

    if (def.type === 'string' && def.format === 'date-time') {
      return `Date`;
    }

    switch (def.type) {
      case undefined: return 'string';
      case 'boolean': return 'boolean';
      case 'array': return `${this.typeForArray(typeName, def)}[]`;
      case 'any': return 'any';
      case 'null': return 'any';
    }

    if (def.type === 'number' || def.type === 'integer') {
      return 'number';
    }

    if (def.type === 'string') {
      if (def.format === 'date-time') {
        return 'Date';
      }

      if (def.pattern) {
        this.emitPattern(`${typeName}Pattern`, def, structFqn)
        return `${typeName}Pattern`
      }

      if (def.enum) {
        let cleantypeName = typeName

        if (typeName.match("#")) {
          const parts = typeName.split("#") || []
          cleantypeName = (parts[1] || '').substr('/definitions/'.length);
        }
        console.log({cleantypeName})
        return this.emitEnum(`${cleantypeName }Enum`, def.enum)
      }

      return 'string';
    }

    if (Array.isArray(def.type)) {
      return 'any';
    }

    if (def.type !== 'object') {
      throw new Error(`unexpected schema type ${def.type}. Expecting "object"`);
    }

    // map
    if (!def.properties && def.additionalProperties && typeof(def.additionalProperties) === 'object') {
      return `{ [key: string]: ${this.typeForProperty(typeName, def.additionalProperties)} }`;
    }

    // struct
    if (def.properties) {
      this.emitStruct(typeName, def, structFqn)
      return typeName;
    }

    return 'any';
  }

  public generate(code: CodeMaker) {
    while (Object.keys(this.typesToEmit).length) {
      const name = Object.keys(this.typesToEmit)[0];
      const emitter = this.typesToEmit[name];
      emitter(code);
      code.line();
      delete this.typesToEmit[name];
      this.emittedTypes.add(name);
    }
  }

  private emitLater(typeName: string, codeEmitter: (code: CodeMaker) => void) {
    if (this.emittedTypes.has(typeName)) {
      return;
    }

    this.typesToEmit[typeName] = codeEmitter;
  }

  private emitUnion(typeName: string, def: JSONSchema4, fqn: string) {
    this.emitLater(typeName, code => {
      this.emitDescription(code, fqn, def.description);
      let list = ''
      code.openBlock(`export class ${typeName}`);
      for (const option of def.oneOf || def.anyOf || []) {
        if (!option.enum && option.type === 'array') list = '[]';
        let type = ''
        if (option.$ref) {
          type = this.typeForRef(option);
        } else if (option.enum) {
          let cleantypeName = typeName

          if (typeName.match("#")) {
            const parts = typeName.split("#") || []
            cleantypeName = (parts[1] || '').substr('/definitions/'.length);
          }

          type = this.emitEnum(`${cleantypeName}Enum`, option.enum)
        } else if (!option.enum && option.type === 'array') {
          if (!option.items) type = 'any';
          const items = option.items as any
          if (items.$ref) {
            type = this.typeForRef(items);
          } else if (items.type) {
            type = items.type
          }
          else {
            type = 'any'
          }
        } else if (option.properties) {
          this.emitStruct(typeName, option, `${typeName}`)
        } else if (Array.isArray(option.type) || option.required) {
          type = 'any'
        } else {
          if (option.type) {
            type = option.type === 'integer' ? 'number' : option.type as string;
          } else {
            type = 'any'
          }
        }
        const methodName = 'from' + type[0].toUpperCase() + type.substr(1);
        code.openBlock(`public static ${methodName}(value: ${type}${list}): ${typeName}`);
        code.line(`return new ${typeName}(value);`);
        code.closeBlock();
      }

      code.openBlock(`private constructor(value: any)`);
      code.line(`Object.defineProperty(this, 'resolve', { value: () => value });`);
      code.closeBlock();

      code.closeBlock();
    });
  }

  private emitEnum(typeName: string, values: JSONSchema4Type[]) {
    this.emitLater(typeName, code => {
      code.openBlock(`export enum ${typeName}`);
      values.forEach((v) => {
        const validName = `${v}`.match(/^([a-zA-Z_])+$/) ? constantCase(`${v}`) : `"${constantCase(`${v}`)}"`
        console.log({validName})
        code.line(`${validName} = '${v}',`)
      })
      code.closeBlock();
    });

    return typeName
  }

  // { type: 'string',
  // pattern: '^\\[([^\\[].*)?\\]$',
  // description:
  //  'Deployment template expression. See https://aka.ms/arm-template-expressions for more details on the ARM expression syntax.' }

  private emitPattern(typeName: string, structDef: JSONSchema4, structFqn: string) {
    this.emitLater(typeName, code => {
      this.emitDescription(code, structFqn, structDef.description);
      code.openBlock(`export class ${typeName}`);
        code.openBlock(`public static pattern(value: string): string`);
          code.line(`return value;`);
        code.closeBlock();
      code.closeBlock();
    });
  }


  private emitStruct(typeName: string, structDef: JSONSchema4, structFqn: string) {
    console.log({struct: typeName})
    this.emitLater(typeName, code => {
      this.emitDescription(code, structFqn, structDef.description);
      code.openBlock(`export interface ${typeName}`);

      for (const [ propName, propSpec ] of Object.entries(structDef.properties || {})) {

        if (propName.startsWith('x-')) {
          continue; // skip extensions for now
        }

        this.emitProperty(code, propName, propSpec, structFqn, structDef);
      }

      code.closeBlock();
    });
  }

  private emitProperty(code: CodeMaker, name: string, propDef: JSONSchema4, structFqn: string, structDef: JSONSchema4) {
    const originalName = name;

    // if name is not camelCase, convert it to camel case, but this is likely to
    // produce invalid output during synthesis, so add some annotation to the docs.
    if (name[0] === name[0].toUpperCase()) {
      name = code.toCamelCase(name);
    }

    // if the name starts with '$' (like $ref or $schema), we remove the "$"
    // and it's the same deal - will produce invalid output
    if (name.startsWith('$')) {
      name = name.substring(1);
    }

    this.emitDescription(code, `${structFqn}#${originalName}`, propDef.description);
    const propertyType = this.typeForProperty(`${structFqn}.${name}`, propDef);
    const required = this.isPropertyRequired(name, structDef);
    const optional = required ? '' : '?';

    code.line(`readonly ${name}${optional}: ${propertyType};`);
    code.line();
  }

  private emitDescription(code: CodeMaker, fqn: string, description?: string, annotations: { [type: string]: string } = { }) {
    code.line('/**');

    if (description) {
      description = description.replace(/\*\//g, '_/');

      const extractDefault = /Defaults?\W+(to|is)\W+(.+)/g.exec(description);
      const def = extractDefault && extractDefault[2];

      code.line(` * ${description}`);
      if (def) {
        annotations['default'] = def;
      }

      code.line(' *');
    }

    annotations['schema'] = fqn;

    for (const [ type, value ] of Object.entries(annotations)) {
      code.line(` * @${type} ${value}`);
    }

    code.line(' */')
  }

  private typeForProperty(propertyFqn: string, def: JSONSchema4): string {
    const subtype = propertyFqn.split('.').map(x => toPascalCase(x)).join('');
    return this.emitType(subtype, def, subtype);
  }

  private typeForRef(def: JSONSchema4): string {
    if (!def.$ref) return 'any';
    const parts = def.$ref?.split("#") || []
    const typeName = (parts[1] || '').substr('/definitions/'.length);
    console.log({ref: typeName})
    const schema = this.resolveReference(def);
    return this.emitType(typeName, schema, def.$ref);
  }

  private typeForArray(propertyFqn: string, def: JSONSchema4): string {
    if (!def.items || typeof(def.items) !== 'object') {
      return 'any';
      // throw new Error(`unsupported array type ${def.items}`);
    }

    return this.typeForProperty(propertyFqn, def.items);
  }

  private resolveReference(def: JSONSchema4): JSONSchema4 {
    const ref = def.$ref;
    let found = undefined;
    if (!ref) {
      throw new Error('no reference found')
    }
    const parts = ref?.split("#") || []
    const schema = this.schema.get(parts[0] || '') as JSONSchema4
    const lookup = (parts[1] || '').substr('/definitions/'.length);

    if (!schema.definitions) {
      throw new Error(`schema does not have "definitions"`);
    }

    found = schema.definitions[lookup];

    if (!found) {
      throw new Error(`cannot resolve local reference ${ref}`);
    }

    return found;
  }

  private isPropertyRequired(property: string, structDef: JSONSchema4) {
    return Array.isArray(structDef.required) && structDef.required.includes(property);
  }
}

function normalizeTypeName(typeName: string) {
  if (!typeName.startsWith('I')) { // avoid the regex
    return typeName;
  }

  // if the type name starts with IXXXFoo then make XXX lowercase because we assume
  // it's an acromym that starts with an I, and this will be identified as an interface by JSII.
  const re = /^I([A-Z]+)([A-Z][a-z]+[A-Za-z]+)$/.exec(typeName);
  if (!re) {
    return typeName;
  }

  const group1 = re[1];
  const rest = re[2];
  const normalized = `I${group1.toLocaleLowerCase()}${rest}`;
  return normalized;
}