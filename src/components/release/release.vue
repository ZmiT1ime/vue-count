<template>
    <div class="rel-container">
        <x-header :left-options="{backText: ''}" style="background-color: #008de1;">发布信息</x-header>
        <group>
            <x-input title="萌宠姓名：" placeholder="请输入萌宠姓名"></x-input>
        </group>
        <group>
            <selector placeholder="请选择萌宠类别" title="萌宠类别：" :options="classifyList"></selector>
        </group>
        <group>
            <v-editor></v-editor>
        </group>
        <group>
            <x-button type="primary" text="提交" style="background-color: #008de1;" @click.native="releaseBtn"></x-button>
        </group>
    </div>
</template>

<script>
    import { XInput, Group, Selector, XHeader, XButton } from 'vux'
    import vEditor from '../common/editor/editor.vue'
    export default {
        components: {
            XInput,
            Group,
            Selector,
            XHeader,
            vEditor,
            XButton
        },
        data() {
            return {
                classifyList: [
                    {key: '1', value: '狗类'},
                    {key: '2', value: '鼠类'},
                    {key: '3', value: '猫类'},
                    {key: '4', value: '猪类'}
                ]
            }
        },
        methods: {
          releaseBtn: function() {
            console.log(123);
          }
        }
    }
</script>

<style lang="less">

</style>
