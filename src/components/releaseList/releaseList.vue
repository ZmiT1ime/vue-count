<template>
    <div class="relList-container">
        <x-header :left-options="{backText: ''}" style="background-color: #008de1;">我发布的信息</x-header>

        <div v-for="item in releaseData">
            <!--{{ item.name }}-->
            <div v-html="item.content"></div>
        </div>
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
            }
        },
        computed: {
            ...mapState(['releaseData'])
        },
        mounted() {
            console.log(this.releaseData);
        }
    }
</script>

<style lang="less">

</style>
