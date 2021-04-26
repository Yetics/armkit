const { JsiiProject } = require('projen');

const project = new JsiiProject({
  name: 'armkit',
  authorAddress: 'andreas.heumaier@microsoft.com',
  authorName: 'Andreas Heumaier',
  authorUrl: 'https://armkit.dev',
  repository: 'https://github.com/Yetics/armkit',
  description: 'Armkit - The Azure Cloud Development Kit (CDK)',
  keywords: [
    'azure',
    'cdk',
    'arm-templates',
    'azure-services',
  ],

  main: './src/armkit-cli/bin/armkit',
  defaultReleaseBranch: 'main',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  gitpod: true,

  devDeps: [
    '@types/fs-extra@^8',
    '@types/yargs',
  ],

  deps: [
    'constructs',
    'change-case',
    'codemaker',
    'fs-extra',
    'json-schema',
    'yargs',
  ],
});

project.gitignore.exclude('.node-version');

project.github.addMergifyRules({
  name: 'Label core contributions',
  actions: {
    label: {
      add: ['contribution/core'],
    },
  },
  conditions: [
    'author~=^(aheumaier)$',
    'label!=contribution/core',
  ],
});

project.github.addMergifyRules({
  name: 'Label core contributions',
  actions: {
    label: {
      add: ['contribution/lead'],
    },
  },
  conditions: [
    'author~=^(pgollucci|ElYusubov)$',
    'label!=contribution/lead',
  ],
});

project.github.addMergifyRules({
  name: 'Label auto-merge snyk-bot',
  actions: {
    merge: {
      method: 'squash',
      commit_message: 'title+body',
      strict: 'smart',
      strict_method: 'merge',
    },
  },
  conditions: [
    'author=snyk-bot',
    'status-success=build',
  ],
});

project.gitpod.addTasks({
  name: 'Setup',
  init: 'yarn install',
  command: 'npx projen build',
});

project.synth();
