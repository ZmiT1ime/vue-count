<template>
    <div class="index-container">
        <v-banner :bannerList="listImg"></v-banner>
    </div>
</template>

<script>
    import nav from '../common/nav'
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
                    {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517811482697&di=96e46da399f64cf042b8665d0ea2c003&imgtype=0&src=http%3A%2F%2Fpic40.nipic.com%2F20140423%2F9252150_180932492301_2.jpg', title: '1'},
                    {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1517811482697&di=96e46da399f64cf042b8665d0ea2c003&imgtype=0&src=http%3A%2F%2Fpic40.nipic.com%2F20140423%2F9252150_180932492301_2.jpg', title: '2'}
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
