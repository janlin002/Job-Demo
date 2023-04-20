module.exports = { 
    extends: ['@commitlint/config-conventional'], 
    rules: {
        'header-max-length': [2, 'always', 5],
        'type-enum': [2, 'always', [
            'upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert'
           ]],
      
    } 
}

// https://commitlint.js.org/#/reference-rules
