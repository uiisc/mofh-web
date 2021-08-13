module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // don't require .vue extension when importing
        camelcase: [
            0,
            {
                properties: 'always'
            }
        ],
        'linebreak-style': [0, 'error', 'windows'],
        'comma-dangle': [2, 'never'], // 对象字面量项尾不能有逗号
        'comma-spacing': [
            2,
            {
                before: false,
                after: true
            }
        ],
        'comma-style': [2, 'last'],
        'default-case': 2, // switch语句最后必须有default
        // 关闭以下两个规则， 允许import时使用@
        'import/extensions': 0,
        'import/no-unresolved': 0,
        indent: [
            // 缩进风格，4个空格
            2,
            4,
            {
                SwitchCase: 1
            }
        ],
        'arrow-parens': 0, // 箭头函数用小括号括起来
        'arrow-spacing': [
            // =>的前/后括号
            2,
            {
                before: true,
                after: true
            }
        ],
        quotes: [
            // 引号类型，单引号
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        'eol-last': 2, // 文件以单一的换行符结束
        eqeqeq: [
            // 必须使用全等
            0,
            'never',
            {
                null: 'ignore'
            }
        ],
        'generator-star-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'handle-callback-err': [2, '^(err|error)$'],
        // 'jsx-quotes': [2, 'prefer-single'],
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': [
            2,
            {
                before: true,
                after: true
            }
        ],
        'new-cap': [
            // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
            2,
            {
                newIsCap: true,
                capIsNew: false
            }
        ],
        semi: [2, 'never'], // 语句强制分号结尾
        'semi-spacing': [
            // 分号前后空格
            2,
            {
                before: false,
                after: true
            }
        ],
        'array-callback-return': 0,
        'no-alert': 0, // 禁止使用alert confirm prompt
        'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
        'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
        'no-dupe-args': 2, // 函数参数不能重复
        'no-else-return': 2, // 如果if语句里面有return,后面不能跟else语句
        'no-trailing-spaces': 2, // 一行结束后面不要有空格
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        'no-param-reassign': [
            // 禁止给参数重新赋值
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'state', // for vuex state
                    'acc', // for reduce accumulators
                    'e' // for e.returnvalue
                ]
            }
        ],
        'no-unused-vars': [
            // 不能有声明后未被使用的变量或参数
            2,
            {
                vars: 'all',
                args: 'none'
            }
        ],
        'no-use-before-define': 2, // 未定义前不能使用
        'no-irregular-whitespace': 2, // 不能有不规则的空格
        'no-multiple-empty-lines': [2, { max: 1 }], // 空行最多不能超过1行
        'operator-linebreak': [0, 'always'], // 换行时运算符在行尾还是行首
        'no-plusplus': 0,
        // allow optionalDependencies
        'import/no-extraneous-dependencies': [0],
        'max-len': ['error', { code: 300 }],
        'object-curly-newline': 0, // 关闭此规则：在对象文字或解构赋值的大括号内强制执行一致的换行符。
        'no-nested-ternary': 0, // 关闭此规则：不允许嵌套的三元表达式
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true
                },
                AssignmentExpression: {
                    array: false,
                    object: false
                }
            },
            {
                enforceForRenamedProperties: false
            }
        ]
    }
}
