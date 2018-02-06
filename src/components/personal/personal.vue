<template>
    <div class="personal-container">
        <div class="p-header">
            <div class="mui-flex">
                <div class="cell fixed">
                    <div class="p-avatar">
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3091698902,3708189859&fm=27&gp=0.jpg">
                    </div>
                </div>
                <div class="cell">
                    <div class="p-mes-box">
                        <p class="p-mes-list a-line">萌宠类别：狗别</p>
                        <p class="p-mes-list a-line">萌宠姓名：123</p>
                        <p class="p-mes-list a-line">萌宠年龄：2年</p>
                    </div>
                </div>
            </div>
            <i class="icon-cog"></i>
        </div>

        <group>
            <cell title="发布萌宠生活" link="/release"></cell>
        </group>

        <group>
            <cell title="title"  link="/"></cell>
        </group>
    </div>
</template>

<script>
    import { Group, Cell } from 'vux'
    export default {
        components: {
            Group,
            Cell
        },
        data() {
            return {

            }
        },
        mounted() {

        }
    }
</script>

<style lang="less">
    .p-header{
        width: 100%;
        height: 120px;
        background-color: #008de1;
        position: relative;
        .p-avatar{
            width: 84px;
            height: 84px;
            background-color: #fff;
            margin: 28px 18px 10px 18px;
            border-radius: 100%;
            img{
                width: 80px;
                height: 80px;
                margin: 2px;
                border-radius: 100%;
            }
        }
        .p-mes-box{
            margin-top: 35px;
            .p-mes-list{
                margin-bottom: 0.5rem;
                color: #fff;
                font-size: 14px;
            }
        }
        .icon-cog{
            position: absolute;
            right: 10px;
            top: 10px;
            color: #fff;
            font-size: 18px;
        }
    }
</style>