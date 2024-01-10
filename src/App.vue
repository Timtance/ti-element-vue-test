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
  { option: '》', code: 'Tui-Ti-TANCE-TXH', likeStatus: '2', status: '1' }
])
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
