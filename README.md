# Ti-Element-Vue
Components are configured with parameters. The goal is to use a small amount of code to achieve rapid development of business interfaces and to unify the use of components.

## building Test Project Vue3
```
nvm use 16.0.0
npm install -g @vue/cli@4.5.19
vue create ti-element-vue-test

```

### ti-element-vue-test install Ti-Element-Vue 
```
yarn add axios
yarn add element-plus
yarn add ti-element-vue
```

### modify main.ts
```bash
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import TiElement from 'ti-element-vue'
import 'ti-element-vue/lib/ti-element-vue.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/index.css'

// 中文说明 'ti-element-vue/readme/README_CN.md
// English Readme 'ti-element-vue/readme/README_EN.md

createApp(App).use(ElementPlus, { locale }).use(TiElement).mount('#app')
```

### add config.ts
```
export const status = {
  'el-switch': {
    activeValue: '1',
    inactiveValue: '2'
  }
}
export const likeStatus = [
  { value: '1', label: 'Like' },
  { value: '2', label: 'Unlike' }
]
export const formConfig = [
  {
    label: 'Code',
    prop: 'code',
    type: 'el-input',
    placeholder: 'Write code',
    rules: [{ required: true, message: 'Write code', trigger: 'blur' }]
  },
  {
    label: 'Status',
    prop: 'status',
    type: 'el-select',
    placeholder: 'Select..',
    clearable: true
  },
  {
    label: '',
    prop: 'isSetting',
    type: 'el-checkbox',
    placeholder: 'Active Settings',
    componentLabel: 'isSetting',
  },
  {
    label: 'ICON',
    prop: 'icon',
    type: 'el-upload',
    placeholder: 'selected file',
  },
  {
    type: 'slot',
    label: 'Your Place',
    slotName: 'yourself',
    style: {
      width: 'calc(100% - 130px)'
    }
  },
  {
    style: {
      width: '100%',
      height: '5px',
      backgroundColor: '#cccccc'
    }
  },
  {
    label: 'Author',
    prop: 'createPerson',
    type: 'el-input',
    rules: [],
    disabled: true
  }
]

export const tableConfig = [
  {
    prop: 'option',
    label: 'Option',
    isClickColumn: true,
    clickColumn: [
      {
        key: 'edit',
        label: 'Edit'
      },
      {
        key: 'delete',
        label: 'Delete'
      }
    ]
  },
  {
    prop: 'code',
    label: 'Code'
  },
  {
    prop: 'status',
    label: 'Status',
    type: 'el-switch',
    ...status['el-switch'],
    isSelectable: true
  },
  {
    prop: 'likeStatus',
    label: 'Like',
    options: likeStatus
  }
]

```

### modify App.vue
```
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png"/>
        <TiSearch :form-model="modeData.formInline" :form-config="formConfig" :is-submit="true" :submitLabel="'Save'">
      <template #yourself>yourself slot</template>
    </TiSearch>
    <TiTable :table-data="tableData" :table-config="tableConfig">
    </TiTable>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { formConfig, tableConfig } from './config'

const modeData = reactive<any>({
  formInline: {}
})
const tableData = ref<any>([
  { option: '》', code: 'Tui-TANCE-TXH', likeStatus: '2', status: '1' }
])
</script>
```

### add .eslintrc.js
```
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-unused-vars': 'off',
    'no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': 'off',
    'no-console': 'off',
    'no-bitwise': 'off',
    'no-param-reassign': 'off'
  }
}
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## TiElement

- TiSearch Readme.md [Chinese](./readme/README_CN.md#tisearch) | [English](./readme/README_EN.md#tisearch)
- TiTable Readme.md [Chinese](./readme/README_CN.md#titable) | [English](./readme/README_EN.md#titable)


## Development

Run `yarn` to install dependencies

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)


### Follow
<img src="https://raw.githubusercontent.com/Timtance/tuijs/HEAD/follow.jpg" width="100px">


## MIT LICENSE
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
