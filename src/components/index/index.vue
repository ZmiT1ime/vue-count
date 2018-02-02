<template>
  <div class="index-container">
    <div id="myChart" :style="{width: '100%', height: '300px'}"></div>

    <group>

    </group>

    <v-nav></v-nav>
  </div>
</template>

<script>
  import nav from '../common/nav'
  import { Group, Cell } from 'vux'
  export default {
    components: {
      Group,
      Cell,
      'v-nav': nav
    },
    data () {
      return {

      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  }
</script>

<style>

</style>
