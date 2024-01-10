[Return](../README.md)
# Ti component library - Tui
Description: Components are configured with parameters. The goal is to use a small amount of code to achieve rapid development of business interfaces and to unify the use of components.
- Development: xiaohua.tu
- Environment framework: node + vue3 + vite
- Dependent components: element plus vue3
- Note: node v16.0.0, npm v7.10.0, yarn v1.22.21, vite v2
- Component library [TiSearch](#1), [TiTable](#2)

<a id="1"></a>
## TiSearch
- Form component is used for search business-data query and form business-data saving.
- There is a close relationship between components and configurations. Cooperating with each other can make your interface development smooth, fast and convenient ^_^
[Overview](../README.md) | [#Top](#top)

### Component example
```bash
<TiSearch
    :form-model = "modeData.formInline"
    :form-config = "formConfig"
    :is-submit = "isSubmit"
    :submitLabel = "submitLabel"
    :is-back = "isBack"
    :backLabel = "backLabel"
    :is-reset = "isReset"
    :resetLabel = "resetLabel"
    :show-reset = "showReset"
    @on-submit = "onSave"
    @on-back = "onBack"
    @on-reset = "onReset"
    @onSelectionChange = "onSelectionChange"
    @onSelectionClear = "onSelectionClear"
    @onPostUploadImage = "onPostUploadImage"
>
    <template #soleName></template>
    <template #buttonSubmit></template>
</TiSearch>
```

### Detailed explanation of component properties
- form-model： response binding
- form-config： build configuration
- is-submit： whether to submit (system button-custom： button text)
- is-back： whether to go back (system button-custom button text)
- is-reset： whether to reset (system button-custom button text)
- show-reset： whether to reset (system button-button text reset)
- onPostUploadImage： image upload response (custom button)
- on-submit： submission response
- on-back： fallback response
- on-reset： reset response
- onSelectionChange： is configured as an activated component - the value change event that occurs
- onSelectionClear： is configured as an activated component - the clearing event that occurs
- onPostUploadImage： is configured as an upload component-interface to respond to events
- <template #soleName></template>： Custom slot (can be arranged voluntarily)
- <template #buttonSubmit></template>： System slot (belongs to the button area and is fixed at the bottom of the component area)

### Configuration example
```bash
export const formConfig = [
  {
    label: 'encoding',
    prop: 'code',
    type: 'el-input',
    placeholder: 'Please enter the code'
  }
]
```
### Configuration details
Define an array object and pour it into the component's properties (form-config). The component will automatically render the corresponding elements and the element's interactive capabilities according to the configuration data.
- label: The name of the parameter display
- prop: attribute corresponding to the parameter
- type: component type of parameter mapping
- placeholder: prompt for parameters
- rules: Parameter verification (expression can be set)
- options: drop-down box data (only applicable to el-select)
- defaultValue: initial value
- clearable: activate clearing function
- componentLabel: Customized display name
- requestUrl: requested path (only applicable to el-upload)
- isActive: activate interactive response event
- slotName: Custom slot name (applicable to custom layout)
- style: style configuration of rendering elements (applicable to custom layouts)
- disabled: interaction prohibited by the element (applicable to browsing details, read-only mode)

### Configuration notes
Some properties require special explanation.
#### type component type of parameter mapping
el-input, el-select, el-checkbox, el-upload, el-date-picker, el-tag, el-checkbox-group, slot, others (you can query element plus)

#### Configuration example
- Basic configuration (input elements)
```bash
export const formConfig = [
  {
    label: 'encoding',
    prop: 'code',
    type: 'el-input',
    placeholder: 'Please enter the code'
  }
]
```

- Basic configuration (select elements)
```bash
/**
 ** You can also set it like this
 ** options: ['Like', 'Super like coding']
 **/
export const formConfig = [
  {
    label: 'encoding',
    prop: 'code',
    type: 'el-select',
    placeholder: 'Please select encoding',
    options: [
        { value: '1', label: 'Like coding' },
        { value: '2', label: 'I love coding' }
    ]
  }
]
```

- Basic configuration (switch element)
```bash
// If you want to expand the attributes (you can view the el-switch attribute list)
const elSwitchMap = {
    activeValue: '1', // on
    inactiveValue: '2' // off
}
export const formConfig = [
  {
    label: 'switch',
    prop: 'code',
    type: 'el-switch',
    placeholder: 'Please select switch',
    ...elSwitchMap
  }
]
```

- Basic configuration (check elements)
```bash
// If you want to expand the attributes (you can view the el-switch attribute list)
const elCheckboxMap = {
    trueLabel: '1', // on
    falseLabel: '2' // off
}
export const formConfig = [
  {
    label: 'switch',
    prop: 'code',
    type: 'el-checkbox',
    placeholder: 'Please check',
    ...elCheckboxMap
  }
]
```

- Basic configuration (upload elements)
```bash
export const formConfig = [
  {
    label: 'upload',
    prop: 'uploadUrl',
    type: 'el-upload',
    placeholder: 'Please select a file to upload',
    requestUrl: '/uploadFile'
  }
]
```

- Basic configuration (date element)
```bash
export const formConfig = [
  {
    label: 'encoding',
    prop: 'code',
    type: 'el-date-picker',
    placeholder: 'Please enter date'
  }
]
```

- Basic configuration (label element)
```bash
/**
 ** You can also set it like this
 ** tagType attribute (info | success | warning | danger)
 **/
export const formConfig = [
  {
    label: 'encoding',
    prop: 'code',
    type: 'el-tag',
    tagType: 'info'
  }
]
```

- Basic configuration (multi-select management elements)
```bash
/**
 ** You can also set it like this
 ** options: ['Like', 'Super like coding']
 **/
export const formConfig = [
  {
    label: 'encoding',
    prop: 'code',
    type: 'el-checkbox-group',
    placeholder: 'Please select encoding',
    options: [
        { value: '1', label: 'Like coding' },
        { value: '2', label: 'I love coding' }
    ]
  }
]
```

- Special configuration (slot elements)
```bash
export const formConfig = [
  {
    label: 'encoding',
    slotName: 'my-slot',
    type: 'slot',
    style: {
        width: '100%'
    }
  }
]
```

- Special configuration (partition elements)
```bash
export const formConfig = [
  {
    style: {
      width: '100%',
      height: '0px',
      backgroundColor: 'transparent'
    }
  }
]
```

### Actual interaction
1. Configuration file completed (config.ts)
2. The component is completed in the business page file (page.vue)
3. Start writing interactive code
#### 3.1 Element drop-down box data needs to be returned by the interface
##### config.ts
```bash
export const formConfig = [
  {
    label: 'encoding',
    prop: 'code',
    type: 'el-select',
    placeholder: 'Please select encoding',
    options: []
  }
]
```
##### page.vue
```bash
<template>
  <TiSearch :form-model="formInline" :form-config="formConfig"></TiSearch>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { formConfig } from './config.ts'
  const formInline = ref<any>({})
  const onPost = async() => {
    const res = await request()
    if(res.data){
      //
      // Assign the data of the drop-down box to the corresponding attribute
      const obj = (formConfig as any).find((field: any) => field.prop === 'code')
      obj.options = res.data
      //
    }
  }
  onMounted(() => {
    onPost()
  })
</script>

```
Note: The above method can be applied to various dynamic needs, such as dynamic prohibition disabled, etc.

#### 3.1 Linkage between element drop-down boxes
##### config.ts
```bash
export const formConfig = [
  {
    label: 'encoding',
    prop: 'code',
    type: 'el-select',
    placeholder: 'Please select encoding',
    options: [
      { value: '1', label: 'Like coding' },
      { value: '2', label: 'I love coding' }
    ]
  },
  {
    label: 'Encoding problem',
    prop: 'childeQuestion',
    type: 'el-select',
    placeholder: 'Please select a sub-code',
    options: []
  },
]
```
##### page.vue
```bash
<template>
  <TiSearch :form-model="formInline" :form-config="formConfig" @onSelectionChange="onSelectionChange"></TiSearch>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { formConfig } from './config.ts'
  const formInline = ref<any>({})
  const onSelectionChange = (prop: any, value: any, item: any) => {
    if (prop && prop === 'code') {
      if (value === '2') { // Select the super favorite encoding
        //
        // According to the value selected by the encoding, set the data of the drop-down box (sub-encoding)
        const obj = (formConfig as any).find((field: any) => field.prop === 'childeQuestion')
        obj.options = [
          { value: '1-1', label: 'What's your name, you love coding so much' },
          { value: '1-2', label: 'Where are you from if you like coding so much' }
        ]
        //
      }
    }
  }
</script>

```

<a id="2"></a>
## TiTable
- Table component is used for data presentation and table business-data manipulation.
- There is a close relationship between components and configurations. Cooperating with each other can make your interface development smooth, fast and convenient ^_^
[Overview](../README.md) | [#Top](#top)

### Component example```bash
<TiTable
  :table-data="tableData"
  :table-config="tableConfig"
  :pagination="pagination"
  :is-pagination="true"
  :is-index="true"
  :is-selection="true"
  :on-pagination-size-change="onPaginationSizeChange"
  :on-pagination-current-change="onPaginationCurrentChange"
  @onClickColumn="onClickColumn"
  @onSelectionChange="onSelectionChange"
></TiTable>
```

### Detailed explanation of component properties
- table-data: response binding (table)
- table-config build configuration
- pagination: response binding (page turning)
- is-pagination: whether to turn pages
- is-index: whether the page number
- is-selection: whether to check
- on-pagination-size-change: Turn pages to set the number of pages in response to events
- on-pagination-current-change: page turning response event
- onClickColumn: Component configured as activated - click event that occurs
- onSelectionChange: The component configured as activated - the check event that occurs

### Configuration example
```bash
export const formConfig = [
  {
    prop: 'code',
    label: 'encoding'
  }
]
```
### Configuration details
Define an array object and pour it into the component's properties (table-config). The component will automatically render the corresponding elements and the element's interactive capabilities according to the configuration data.
- label: the name displayed in the table
- prop: attributes corresponding to the table
- isClickColumn: whether to activate click
- clickColumn: Click element configuration
   - key: Click the corresponding value of the element
   - label: click element description
   - className: Click the element style name
   - isSelectable: whether it is operable
- options: element value mapping table-corresponding description
- isSelectable: whether it is selectable (applicable to table multi-select operations)
- disabled: whether to disable
- controls: control events thrown up
- style: style configuration of table rendering elements
- width: table attribute (width)
- wrapperClass: table style name
- type: component type of table mapping
- unit: text after the component rendered by the table (such as unit)
- ...{}: component extended properties for table rendering

### Configuration notes
Some properties require special explanation.
#### type component type of parameter mapping
el-checkbox, el-switch, others (can query element plus)

#### Configuration example
- Basic configuration (text elements)
```bash
export const tableConfig = [
  {
    label: 'encoding',
    prop: 'code'
  }
]
```

- Basic configuration (switch element)
```bash
// If you want to expand the attributes (you can view the el-switch attribute list)
const elSwitchMap = {
    activeValue: '1', // on
    inactiveValue: '2' // off
}
export const tableConfig = [
  {
    label: 'switch',
    prop: 'code',
    type: 'el-switch',
    ...elSwitchMap
  }
]
```

- Basic configuration (check elements)
```bash
// If you want to expand the attributes (you can view the el-switch attribute list)
const elCheckboxMap = {
    trueLabel: '1', // on
    falseLabel: '2' // off
}
export const tableConfig = [
  {
    label: 'check',
    prop: 'code',
    type: 'el-checkbox',
    ...elCheckboxMap
  }
]
```

- Special configurations (operating elements)
```bash
export const tableConfig = [
  {
    label: 'operation',
    prop: 'option',
    isClickColumn: true,
    clickColumn: [
      {
        key: 'edit',
        label: 'maintenance'
      },
      {
        key: 'delete',
        label: 'delete'
      }
    ]
  }
]
```

### Actual interaction
1. Configuration file completed (config.ts)
2. The component is completed in the business page file (page.vue)
3. Start writing interactive code
#### 3.1 Table configuration operation-modification | multiple selection
##### config.ts
```bash
export const tableConfig = [
  {
    label: 'operation',
    prop: 'option',
    isClickColumn: true,
    clickColumn: [
      {
        key: 'edit',
        label: 'maintenance'
      }
    ]
  },
  {
    label: 'encoding',
    prop: 'code'
  }
]
```
##### page.vue
```bash
<template>
  <TiTable :table-data="tableData" :table-config="tableConfig" :pagination="pagination" @onSelectionChange="onSelectionChange" @onClickColumn="onClickColumn"></TiTable>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { tableConfig } from './config.ts'
  const tableData = ref<any>([])
  const tableCheckList = ref([])
  const pagination = ref<any>({
    pageIndex: 1,
    pageSize: 10,
    totalCount: 0,
    totalPage: 0
  })

  /**
  ** Multiple choice
   */
  const onSelectionChange = (args: any) => {
    // eslint-disable-next-line no-console
    tableCheckList.value = args
  }

  /**
  ** data key value of the clicked element
  ** row table data
  ** key attribute corresponding to the table
  ** celIndex cursor
  ** rowIndex cursor
   */
  const onClickColumn = async (data: String, row: any, key: any, celIndex: string, rowIndex: string) => {
    if (key === 'option') {
      if (data === 'edit') {
        //Execute modification function
      }
    }
  }
</script>




<br><br><br>

## Development

Run `yarn` to install dependencies

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)


### Follow
<img src="https://raw.githubusercontent.com/Timtance/tuijs/HEAD/follow.jpg" width="100px">