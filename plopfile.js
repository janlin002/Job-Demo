const fs = require('fs')
const path = require('path')

const TS = 'ts'
const JS = 'js'
const APP = 'app'
const PACKAGES = 'packages'
const COMPONENT_DIR = ["components", "containers", "views", "layouts"]
const COMPONENTS = 'components'

const traverseDir = (dir) => {
  try {
    return fs.readdirSync(dir)
  } catch (error) {
    return []
  }
}

const traverseScope = (parentName, packageName) => {
  if (!packageName) return
  const files = traverseDir(`./${parentName}/${packageName}/src`)
    .filter(fileName => COMPONENT_DIR.findIndex((item) => `${item}` === fileName) !== -1)
  return files
}
const PACKAGE_LIST = traverseDir(PACKAGES).filter(packageDir => traverseScope(PACKAGES, packageDir).length > 0)
const APP_LIST = traverseDir(APP).filter(packageDir => traverseScope(APP, packageDir).length > 0)

module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'what do you want to use?',
        choices: [JS, TS],
        default: JS
      },
      {
        type: 'list',
        name: 'folder',
        message: 'where to put the component folder',
        choices: [APP, PACKAGES],
        default: APP
      },
      {
        type: 'list',
        name: 'package',
        message: 'where to put the package',
        choices: PACKAGE_LIST,
        when: function (res) {
          return res.folder === PACKAGES
        },
        validate: function () {
          if (PACKAGE_LIST.length === 0) return 'package is not exist!!'
          return true
        }
      },
      {
        type: 'list',
        name: 'app',
        message: 'where to put the app',
        choices: APP_LIST,
        when: function (res) {
          return res.folder === APP
        },
        validate: function () {
          if (APP_LIST.length === 0) return 'app is not exist!!'
          return true
        }
      },
      {
        type: 'list',
        name: 'scope',
        message: 'where to put the scope',
        choices: COMPONENT_DIR,
        default: COMPONENTS
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
    ],
    actions: data => {
      let path = data.folder === PACKAGES ? 'packages/{{lowerCase package}}/src/{{pascalCase scope}}/{{pascalCase name}}' : 'app/{{lowerCase app}}/src/{{pascalCase scope}}/{{pascalCase name}}'
      return [
        {
          type: 'add',
          path: `${path}/index.{{lowerCase type}}`,
          templateFile: 'plop-templates/{{lowerCase type}}Component/index.js.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}.{{lowerCase type}}x`,
          templateFile: 'plop-templates/{{lowerCase type}}Component/Component.js.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}.style.{{lowerCase type}}`,
          templateFile: 'plop-templates/{{lowerCase type}}Component/Component.style.js.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}.stories.{{lowerCase type}}x`,
          templateFile: 'plop-templates/{{lowerCase type}}Component/Component.stories.js.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{pascalCase name}}.test.{{lowerCase type}}x`,
          templateFile: 'plop-templates/{{lowerCase type}}Component/Component.test.js.hbs',
        },
      ]
    }
  })

}