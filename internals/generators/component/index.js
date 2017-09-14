/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'ES6 Class',
    choices: () => ['ES6 Class', 'exit'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: '__EmptyComponent',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: (data) => {
    // Generate index.jsx and styles.js
    let componentTemplate;

    switch (data.type) {
      case 'ES6 Class': {
        componentTemplate = './component/index.jsx.hbs';
        break;
      }
      case 'exit': {
        process.exit(0)
      }
    }

    const actions = [{
      type: 'add',
      path: '../../src/components/{{properCase name}}/index.jsx',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/components/{{properCase name}}/styles.js',
      templateFile: './component/styles.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
