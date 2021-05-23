import { Construct } from "constructs";
import { ArmElement } from "./arm-element";
import { keysToSnakeCase, deepMerge } from "./util"
import { Token } from "./tokens";

export interface ArmVariableConfig {
    readonly default?: any;
    readonly description?: string;

    /**
     * The type argument in a variable block allows you to restrict the type of value that will be accepted as the value for a variable. If no type constraint is set then a value of any type is accepted.
     * 
     * While type constraints are optional, we recommend specifying them; they serve as easy reminders for users of the module, and allow Terraform to return a helpful error message if the wrong type is used.
     * 
     * Type constraints are created from a mixture of type keywords and type constructors. The supported type keywords are:
     * 
     * - string
     * - number
     * - bool
     * 
     * The type constructors allow you to specify complex types such as collections:
     * 
     * - list(\<TYPE\>)
     * - set(\<TYPE\>)
     * - map(\<TYPE\>)
     * - object({\<ATTR NAME\> = \<TYPE\>, ... })
     * - tuple([\<TYPE\>, ...])
     * 
     * The keyword any may be used to indicate that any type is acceptable. For more information on the meaning and behavior of these different types, as well as detailed information about automatic conversion of complex types, see {@link https://www.terraform.io/docs/configuration/types.html|Type Constraints}.
     * 
     * If both the type and default arguments are specified, the given default value must be convertible to the specified type.
     */
    readonly type?: string;

    readonly sensitive?: boolean;
}

export class ArmVariable extends ArmElement {
    public readonly default?: any;
    public readonly description?: string;
    public readonly type?: string;
    public readonly sensitive?: boolean;

    constructor(scope: Construct, id: string, config: ArmVariableConfig) {
        super(scope, id);

        this.default = config.default;
        this.description = config.description;
        this.type = config.type;
        this.sensitive = config.sensitive;
    }

    public get stringValue(): string {
        return Token.asString(this.interpolation());
    }

    public get numberValue(): number {
        return Token.asNumber(this.interpolation());
    }

    public get listValue(): string[] {
        return Token.asList(this.interpolation());
    }

    public get booleanValue(): boolean {
        return Token.asString(this.interpolation()) as any as boolean
    }

    public get value(): any {
        return Token.asAny(this.interpolation());
    }

    private interpolation(): any {
        return `\${var.${this.friendlyUniqueId}}`
    }

    public synthesizeAttributes(): { [key: string]: any } {
        return {
            default: this.default,
            description: this.description,
            type: this.type,
            sensitive: this.sensitive,
        }
    }

    public toTerraform(): any {
        return {
            variable: {
                [this.friendlyUniqueId]: deepMerge(keysToSnakeCase(this.synthesizeAttributes()), this.rawOverrides)
            }
        };
    }
}