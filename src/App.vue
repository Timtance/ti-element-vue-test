<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"/> -->
    <button @click="isSwitch=!isSwitch">切换</button>
    <template v-if="isSwitch">
      <TiSearch :form-model="modeData.formInline" :form-config="formConfig" :is-submit="true" :submitLabel="'Save'">
        <template #yourself>yourself slot</template>
      </TiSearch>
      <TiTable :table-data="tableData" :table-config="tableConfig">
      </TiTable>
    </template>
    <template v-else>
      <button @click="tuiFlowChartInput">数据导入</button>
      <button @click="tuiFlowChartOutput">数据导出</button>
      <button @click="tuiFlowChartZoomIn">放大</button>
      <button @click="tuiFlowChartZoomOut">缩小</button>
      {{ !tuiFlowChartRef && mapFlowDefault() }}
      <button @click="tuiFlowChartClear">清空</button>
      <!-- <button @click="tuiFlowChartChangeValue">改模板内容</button> -->
      <!-- <button @click="tuiFlowChartMove">移植</button> -->
      <!-- <button @click="tuiFlowChartZoomOpen">开启放大镜</button>
      <button @click="tuiFlowChartZoomClose">关闭放大镜</button> -->
      
      <div style=" border-radius: 5px; border: solid 1px #f0efee; height: 300px; display: flex; margin-top: 20px;">
        <ul id="ulBox" style="width: 150px; list-style: none; padding: 0; margin: 0; background: #ebf0fc; padding: 5px; border: solid 1px #ebf0fc; border-radius: 5px;">
          <li id="A1" class="tui" style="list-style: none; border: 1px solid #3fb41f; background-color: rgb(63 180 31 / 15%); border-radius: 5px; height: 30px; line-height: 30px; margin: 5px; color: #3fb41f;">
            模块A
          </li>
          <li id="B1" style="list-style: none; border: 1px solid #dfdddc; background-color: rgb(255 255 255 / 50%); border-radius: 5px; height: auto; line-height: 30px; margin: 5px; color: #787777;">
            <!-- <template slot-name="value"><span>title</span><div>模块B</div></template>
            <div>{{templateSpan}}</div> -->
            <ul style="display: flex; list-style: none; justify-content: space-around; padding: 0;">
              <li><span data-key="value" style="display: block; width: 70px;">{{ templateSpan }}</span></li>
              <li><span data-key="active">..</span></li>
            </ul>
            <div data-key="context">{{ templateSpan }}</div>
            <div><input data-key="state" style="width: -webkit-fill-available;"/></div>
          </li>
          <li id="C1" style="list-style: none; border: 1px solid #dfdddc; background-color: rgb(255 255 255 / 50%); border-radius: 5px; height: auto; line-height: 30px; margin: 5px; color: #787777;">
              <!-- <div slot-name="value" id="spanValue">{{ templateSpan }}</div> -->
              <!-- <my-component slot-name="value" id="spanValue"></my-component> -->
              <component :is="MyComponent" slot-name="head"></component>
          </li>
        </ul>
        <div id="mapFlow" @click="onEvent" @created="onEvent" @selected="onEvent" @change="onEvent" style="position: relative; flex: 1; background: #fafafa;"></div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref} from 'vue';
import { formConfig, tableConfig } from './config'
import { ElMessage, ElMessageBox } from 'element-plus'
import MyComponent from './components/templateInner.vue';
import 'ti-flowchart/lib/ti-flowchart.umd.js';
// import 'ti-zoom/lib/ti-zoom.umd.js'; // 导入 ti-zoom 库

const templateSpan = ref('Test'); 
const isSwitch = ref(true)
const tuiFlowChartRef = ref()
const modeData = reactive<any>({
  formInline: {}
})
const tableData = ref<any>([
  { option: '》', code: 'Tui-Ti-TANCE-TXH', likeStatus: '2', status: '1' }
])



const mapFlowDefault = () => {
  // nextTick( () => {
    // var targetItem:any = document.getElementById("23423");
    // targetItem.draggable = "true";
    // // targetItem.addEventListener("dragstart", drag);
    // targetItem.ondragstart = drag;
    // var targetBox = document.getElementById("mapFlow");
  // })
  
  setTimeout(() => {
    var w:any = window
    var t = new w.tuiFlowChart();
    var dragItemA:any = document.getElementById("A1");
    t.addDragItem(dragItemA);
    var dragItemB:any = document.getElementById("B1");
    t.addDragItem(dragItemB);
    var dragItemC:any = document.getElementById("C1");
    t.addDragItem(dragItemC);
    
    var dragBox:any = document.getElementById("mapFlow");
    // dragBox.addEventListener("click", (e:any) => {
    //   console.log(JSON.stringify(e.data));
    //   // alert(JSON.stringify(e.data));
    // });
    t.setDragBox(dragBox);
    tuiFlowChartRef.value = t;
  }, 1);
}
const onEvent = (e:any) => {
  console.log('eventName:'+e.type, JSON.stringify(e.data));
  // alert(JSON.stringify(e.data));
}
const tuiFlowChartClear = () => {
  tuiFlowChartRef.value.clear();
}
const tuiFlowChartInput = () => {
  ElMessageBox.prompt("数据导入", "数据格式：JSON", {
    confirmButtonText: '好的',
    cancelButtonText: '取消',
  }).then(({value}) => {
    let data = null;
    if(value){
      data = JSON.parse(value);
    }else{
      data = [
        {
          "sourceId":"B1",
          id: "12341234",
          x: 100,
          y: 230,
          w: 250,
          value: "12341234",
          context: "111",
          state: "OK"
        }
      ];
    }
    tuiFlowChartRef.value.load(data);
  })
}
const tuiFlowChartOutput = () => {
  const data = tuiFlowChartRef.value.getData();
  console.log("tuiFlowChartOutput:" + data.length);
  ElMessage(JSON.stringify(data));
}
const tuiFlowChartZoomIn = () => {
  tuiFlowChartRef.value.zoomIn();
}
const tuiFlowChartZoomOut = () => {
  tuiFlowChartRef.value.zoomOut();
}
const tuiFlowChartChangeValue = () => {
  templateSpan.value = Math.random().toString();
}
const tuiFlowChartMove = () => {
  const ulBox:any = document.getElementById('ulBox');
  const target:any = document.createElement('li');
  target.id = "target";
  ulBox.appendChild(target, ulBox.firstElementChild);
  const dom:any = document.getElementById('C1');
  const domClone:any = dom.$clone(); //dom.cloneNode(true);
  target.appendChild(domClone);
}
const tuiFlowChartZoomOpen = () => {
  var w:any = window;
  var t = new w.tuiZoom();
  let zoomImage = document.getElementById("mapFlow");
  t.setTarget(zoomImage);
}
const tuiFlowChartZoomClose = () => {
}
onMounted(() => {
})
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
#A1:hover, #B1:hover{
  background-color: red;
}
button{
  margin: 5px;
}
</style>