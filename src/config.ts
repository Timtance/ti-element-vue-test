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
