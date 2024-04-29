<template>
    <div class="overlay" ref="overlay"></div>

    <div class="main-container">
        <a href="https://www.facebook.com/NewKebabLaStazioneHalal" class="skin-left">
            <img src="/public/images/skin-side.png" alt="">
        </a>
    
        <div class="layout-container">
            <router-view />
        </div>
    
        <a href="https://www.facebook.com/NewKebabLaStazioneHalal" class="skin-right">
            <img src="/public/images/skin-side.png" alt="">
        </a>
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        setTimeout(() => {
            this.$refs.overlay.style.opacity = 0;
            setTimeout(() => {
                this.$refs.overlay.style.display = 'none';
            }, 300);
        }, 800);
    }
};
</script>

<style scoped>

</style>