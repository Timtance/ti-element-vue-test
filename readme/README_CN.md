[返回](../README.md)
# Ti组件库 - Tui
描述：组件配合参数配置化，目标用少量的代码，实现业务界面快速开发，以及能很好的统一组件使用。
- 开发：xiaohua.tu
- 环境框架：node + vue3 + vite
- 依赖组件：element plus vue3
- 备注：node v16.0.0, npm v7.10.0, yarn v1.22.21, vite v2
- 组件库  [TiSearch](#1), [TiTable](#2)

<a id="1"></a>
## TiSearch
- 表单组件 使用于搜索业务-数据查询 和 表单业务-数据保存.
- 组件和配置之间，存在着紧密的关系，相互配合能让你的界面开发很顺畅，又快又方便 ^_^ 
[总览](../README.md) | [#Top](#top)

### 组件示例
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

### 组件属性详解
- form-model： 响应绑定
- form-config： 构建配置化
- is-submit： 是否提交（系统按钮-自定义按钮文字）
- is-back： 是否回退（系统按钮-自定义按钮文字）
- is-reset： 是否重置（系统按钮-自定义按钮文字）
- show-reset： 是否重置（系统按钮-按钮文字重置）
- onPostUploadImage： 图片上传响应（自定义按钮）
- on-submit： 提交响应
- on-back： 回退响应
- on-reset： 重置响应
- onSelectionChange： 配置为激活的组件-发生的值变化事件
- onSelectionClear： 配置为激活的组件-发生的清空事件
- onPostUploadImage： 配置为上传组件-接口响应事件
- <template #soleName></template>： 自定义插槽（可以自愿布局）
- <template #buttonSubmit></template>： 系统插槽（属于按钮区域，固定于组件区域底部）

### 配置示例
```bash
export const formConfig = [
  {
    label: '编码',
    prop: 'code',
    type: 'el-input',
    placeholder: '请输入编码'
  }
]
```
### 配置详解
定义一个数组对象灌入组件的属性（form-config）, 组件会按照配置数据进行自动渲染出相应的元素以及元素的交互能力。
- label： 参数显示的名称
- prop： 参数对应的属性
- type： 参数映射的组件类型
- placeholder： 参数的提示语
- rules： 参数的校验（可设置表达式）
- options： 下拉框数据（仅适用el-select）
- defaultValue： 初始值
- clearable： 激活清空功能
- componentLabel： 自定义显示的名称
- requestUrl： 请求的路径（仅适用el-upload）
- isActive： 激活交互响应事件
- slotName： 自定义插槽名称（适用自定义布局）
- style： 渲染元素的样式配置（适用自定义布局）
- disabled： 元素禁止的交互（适用浏览详情，只读模式）

### 配置备注
个别属性需要特殊说明。
#### type 参数映射的组件类型
el-input，el-select，el-checkbox，el-upload，el-date-picker，el-tag，el-checkbox-group，slot，其他(可查询element plus）

#### 配置实例
- 基础配置（输入元素）
```bash
export const formConfig = [
  {
    label: '编码',
    prop: 'code',
    type: 'el-input',
    placeholder: '请输入编码'
  }
]
```

- 基础配置（选择元素）
```bash
/**
 ** 也可以这样设置
 ** options：['喜欢'，'超喜欢编码']
 **/
export const formConfig = [
  {
    label: '编码',
    prop: 'code',
    type: 'el-select',
    placeholder: '请选择编码',
    options: [
        { value: '1', label: '喜欢编码' },
        { value: '2', label: '超喜欢编码' }
    ]
  }
]
```

- 基础配置（开关元素）
```bash
// 如想扩充属性（可查看el-switch属性列表）
const elSwitchMap = {
    activeValue: '1', // 开
    inactiveValue: '2' // 关
}
export const formConfig = [
  {
    label: '开关',
    prop: 'code',
    type: 'el-switch',
    placeholder: '请选择开关',
    ...elSwitchMap
  }
]
```

- 基础配置（勾选元素）
```bash
// 如想扩充属性（可查看el-switch属性列表）
const elCheckboxMap = {
    trueLabel: '1', // 开
    falseLabel: '2' // 关
}
export const formConfig = [
  {
    label: '勾选',
    prop: 'code',
    type: 'el-checkbox',
    placeholder: '请勾选',
    ...elCheckboxMap
  }
]
```

- 基础配置（上传元素）
```bash
export const formConfig = [
  {
    label: '上传',
    prop: 'uploadUrl',
    type: 'el-upload',
    placeholder: '请选择上传文件',
    requestUrl: '/uploadFile'
  }
]
```

- 基础配置（日期元素）
```bash
export const formConfig = [
  {
    label: '编码',
    prop: 'code',
    type: 'el-date-picker',
    placeholder: '请输入日期'
  }
]
```

- 基础配置（标签元素）
```bash
/**
 ** 也可以这样设置
 ** tagType 属性（info | success | warning | danger）
 **/
export const formConfig = [
  {
    label: '编码',
    prop: 'code',
    type: 'el-tag',
    tagType: 'info'
  }
]
```

- 基础配置（多选管理元素）
```bash
/**
 ** 也可以这样设置
 ** options：['喜欢'，'超喜欢编码']
 **/
export const formConfig = [
  {
    label: '编码',
    prop: 'code',
    type: 'el-checkbox-group',
    placeholder: '请选择编码',
    options: [
        { value: '1', label: '喜欢编码' },
        { value: '2', label: '超喜欢编码' }
    ]
  }
]
```

- 特殊配置（插槽元素）
```bash
export const formConfig = [
  {
    label: '编码',
    slotName: 'my-slot',
    type: 'slot',
    style: {
        width: '100%'
    }
  }
]
```

- 特殊配置（隔断元素）
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

### 实战交互
1. 配置文件完成（config.ts）
2. 组件在业务页面文件完成（page.vue）
3. 开始写交互代码
#### 3.1 元素下拉框数据需要接口返回
##### config.ts
```bash
export const formConfig = [
  {
    label: '编码',
    prop: 'code',
    type: 'el-select',
    placeholder: '请选择编码',
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
      // 将下拉框的数据 赋值到相应的属性上
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
注：以上方法可以范用于各种动态需求，比如 动态禁止 disabled 等

#### 3.1 元素下拉框之间的联动
##### config.ts
```bash
export const formConfig = [
  {
    label: '编码',
    prop: 'code',
    type: 'el-select',
    placeholder: '请选择编码',
    options: [
      { value: '1', label: '喜欢编码' },
      { value: '2', label: '超喜欢编码' }
    ]
  },
  {
    label: '编码问题',
    prop: 'childeQuestion',
    type: 'el-select',
    placeholder: '请选择子编码',
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
      if (value === '2') { // 选择了超喜欢编码
        // 
        // 根据编码所选的值，进行设置（子编码）的下拉框的数据
        const obj = (formConfig as any).find((field: any) => field.prop === 'childeQuestion')
        obj.options = [
          { value: '1-1', label: '超喜欢编码的你 叫什么名字' },
          { value: '1-2', label: '超喜欢编码的你 来自哪里' }
        ]
        //
      }
    }
  }
</script>

```

<a id="2"></a>
## TiTable
- 表格组件 使用于数据呈现 和 表格业务-数据操控.
- 组件和配置之间，存在着紧密的关系，相互配合能让你的界面开发很顺畅，又快又方便 ^_^
[总览](../README.md) | [#Top](#top)

### 组件示例
```bash
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

### 组件属性详解
- table-data： 响应绑定（表格）
- table-config 构建配置化
- pagination： 响应绑定（翻页）
- is-pagination： 是否翻页
- is-index： 是否页码
- is-selection： 是否勾选
- on-pagination-size-change： 翻页设置页数响应事件
- on-pagination-current-change： 翻页响应事件
- onClickColumn： 配置为激活的组件-发生的点击事件
- onSelectionChange： 配置为激活的组件-发生的勾选事件

### 配置示例
```bash
export const formConfig = [
  {
    prop: 'code',
    label: '编码'
  }
]
```
### 配置详解
定义一个数组对象灌入组件的属性（table-config）, 组件会按照配置数据进行自动渲染出相应的元素以及元素的交互能力。
- label： 表格显示的名称
- prop： 表格对应的属性
- isClickColumn： 是否激活点击
- clickColumn： 点击元素配置
   - key： 点击元素对应值
   - label： 点击元素描述
   - className： 点击元素样式名
   - isSelectable： 是否可操作
- options： 元素值映射表-对应的描述
- isSelectable： 是否可选（适用表格多选操作）
- disabled： 是否禁止
- controls： 控制事件上抛
- style： 表渲染元素的样式配置
- width： 表格属性（宽度）
- wrapperClass： 表格样式名
- type： 表格映射的组件类型
- unit： 表格渲染的组件后的文字（如 单位）
- ...{}： 表格渲染的组件扩展属性

### 配置备注
个别属性需要特殊说明。
#### type 参数映射的组件类型
el-checkbox，el-switch，其他(可查询element plus）

#### 配置实例
- 基础配置（文字元素）
```bash
export const tableConfig = [
  {
    label: '编码',
    prop: 'code'
  }
]
```

- 基础配置（开关元素）
```bash
// 如想扩充属性（可查看el-switch属性列表）
const elSwitchMap = {
    activeValue: '1', // 开
    inactiveValue: '2' // 关
}
export const tableConfig = [
  {
    label: '开关',
    prop: 'code',
    type: 'el-switch',
    ...elSwitchMap
  }
]
```

- 基础配置（勾选元素）
```bash
// 如想扩充属性（可查看el-switch属性列表）
const elCheckboxMap = {
    trueLabel: '1', // 开
    falseLabel: '2' // 关
}
export const tableConfig = [
  {
    label: '勾选',
    prop: 'code',
    type: 'el-checkbox',
    ...elCheckboxMap
  }
]
```

- 特殊配置（操作元素）
```bash
export const tableConfig = [
  {
    label: '操作',
    prop: 'option',
    isClickColumn: true,
    clickColumn: [
      {
        key: 'edit',
        label: '维护'
      },
      {
        key: 'delete',
        label: '删除'
      }
    ]
  }
]
```

### 实战交互
1. 配置文件完成（config.ts）
2. 组件在业务页面文件完成（page.vue）
3. 开始写交互代码
#### 3.1 表格配置操作-修改 | 多选
##### config.ts
```bash
export const tableConfig = [
  {
    label: '操作',
    prop: 'option',
    isClickColumn: true,
    clickColumn: [
      {
        key: 'edit',
        label: '维护'
      }
    ]
  },
  {
    label: '编码',
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
  ** 多选
   */
  const onSelectionChange = (args: any) => {
    // eslint-disable-next-line no-console
    tableCheckList.value = args
  }

  /**
  ** data 点击元素的key值
  ** row 表格数据
  ** key 表格对应的属性
  ** celIndex 游标
  ** rowIndex 游标 
   */
  const onClickColumn = async (data: String, row: any, key: any, celIndex: string, rowIndex: string) => {
    if (key === 'option') {
      if (data === 'edit') {
        // 执行修改功能
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