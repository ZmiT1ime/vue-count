<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="str in bannerList" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <div>子组件</div>
    </div>

</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        props: ['bannerList'],
        mounted() {
            this.$nextTick(() => {
                let swiper = new Swiper('.swiper-container', {
                    Autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: false,
                    },
                    onTouchEnd: function() {
                        swiper.startAutoplay()
                    }
                });
            });
        },
        methods: {

        }
    }
</script>

<style lang="less">
    .swiper-container {
        width: 100%;
        height: 14rem;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:0.633rem;
            height: 0.633rem;
            display: inline-block;
            background: #008de1;
        }
    }
</style>

