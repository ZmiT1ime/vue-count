<template>
    <div class="index-container">
        <v-banner :bannerList="listImg"></v-banner>
    </div>
</template>

<script>
    import { Group, Cell } from 'vux'
    import { mapState, mapMutations } from 'vuex'
    import swiper from './children/swiper'
    export default {
        components: {
            Group,
            Cell,
            'v-banner': swiper
        },
        data () {
            return {
                listImg: [
                    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3091698902,3708189859&fm=27&gp=0.jpg', title: '1'},
                    {url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2382154985,4022539348&fm=27&gp=0.jpg', title: '2'}
                ],
            }
        },
        computed: {
            ...mapState(['isApp'])
        },
        mounted() {

        },
        methods: {
            ...mapMutations(['ISAPP']),
        },

    }
</script>

<style>

</style>
