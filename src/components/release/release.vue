<template>
    <div class="rel-container">
        <x-header :left-options="{backText: ''}" style="background-color: #008de1;">发布信息</x-header>
        <group>
            <x-input title="萌宠姓名：" v-model="param.name" placeholder="请输入萌宠姓名"></x-input>
        </group>
        <group>
            <selector placeholder="请选择萌宠类别" v-model="param.classify" title="萌宠类别：" :options="classifyList"></selector>
        </group>
        <group>
            <v-editor v-on:editorContent="getContent"></v-editor>
        </group>
        <group>
            <x-button type="primary" text="提交" style="background-color: #008de1;" @click.native="releaseBtn"></x-button>
        </group>
    </div>
</template>

<script>
    import { XInput, Group, Selector, XHeader, XButton } from 'vux'
    import { mapState, mapMutations } from 'vuex'
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
                    {key: '狗类', value: '狗类'},
                    {key: '鼠类', value: '鼠类'},
                    {key: '猫类', value: '猫类'},
                    {key: '猪类', value: '猪类'}
                ],
                param: {
                    name: '',
                    classify: '',
                    content: '',
                }
            }
        },
        methods: {
            ...mapMutations(['RELEASEMSG']),
            getContent: function (content) {
                this.param.content = content;
            },
            releaseBtn: function() {
                let is_param = this.param;

                if (is_param.name === '' || is_param.classify === '' || is_param.content === '') {
                    this.$vux.toast.show({
                        text: '请填写完整',
                        time: 1500,
                        type: 'text'
                    });
                    return;
                }

                this.$vux.toast.show({
                    text: '发布成功',
                    time: 1500,
                    type: 'text'
                });
                this.RELEASEMSG(is_param);
                this.$router.push({path: '/personal'})
            }
        }
    }
</script>

<style lang="less">

</style>
