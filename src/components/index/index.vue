<template>
    <div class="index-container">
        <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
    </div>
</template>

<script>
    import nav from '../common/nav'
    import { Group, Cell } from 'vux'
    import { mapState, mapMutations } from 'vuex'
    export default {
        components: {
            Group,
            Cell
        },
        data () {
            return {

            }
        },
        computed: {
            ...mapState(['isApp'])
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            ...mapMutations(['ISAPP']),
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
//                myChart.setOption({
//                    series: [
//                        {
//                            name: '中国',
//                            type: 'map',
//                            mapType: 'china',
//                            selectedMode : 'multiple',
//                            label: {
//                                normal: {
//                                    show: true
//                                },
//                                emphasis: {
//                                    show: true
//                                }
//                            },
//                            data:[
//                                {name:'广东', selected:true}
//                            ]
//                        }
//                    ]
//                });
            }
        }
    }
</script>

<style>

</style>
