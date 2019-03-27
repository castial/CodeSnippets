<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-select placeholder="请选择" v-model="value7">
        <el-option-group :key="group.label" :label="group.label" v-for="group in options3">
          <el-option
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-for="item in group.options"
          ></el-option>
        </el-option-group>
      </el-select>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      options3: [{
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        },{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }],
        value7: ''
    }
  },
};
</script>