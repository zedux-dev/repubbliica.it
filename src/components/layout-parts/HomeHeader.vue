<template>
    <div class="home-video-band" v-if="video">
        <div class="boxed">
            <a :href="video.link" class="video-thumb">
                <img v-if="video.image" :src="video.image" alt="">
                <svg v-else viewBox="0 0 20 20" style="transform: scale(1.2);"><path fill-rule="evenodd" d="M8.833 4h.234c1.7 0 2.133.86 2.133 2.927C11.2 8.995 10.767 9.6 9 9.6h-.2V4h.033zm2.294 6.09c2.236-.438 3.259-1.597 3.259-3.257 0-2.255-1.566-3.633-4.761-3.633H4.8v.658c.99.062 1.086.376 1.086 1.315v9.991c0 .908-.223 1.222-1.086 1.316v.657h5.208v-.657c-.862-.063-1.086-.408-1.086-1.316v-4.76h.287c.671 0 1.215.25 1.406.845.288.971.288 3.038.671 4.385.384 1.253 1.31 1.566 2.493 1.566.926 0 1.565-.282 1.821-.438l-.032-.658c-.799.188-1.118-.125-1.47-2.35-.351-2.41-1.182-3.288-2.971-3.664zM2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm-.2.8h16.4a1 1 0 011 1v16.4a1 1 0 01-1 1H1.8a1 1 0 01-1-1V1.8a1 1 0 011-1z"></path></svg>
                <!-- <div class="play-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 256L0 32V480L384 256z"/></svg></div> -->
            </a>

            <div class="video-info">
                <a :href="video.link" class="title">{{ video.title }}</a>
                
                <div v-if="video.author" class="author">di {{ video.author }}</div>
            </div>
        </div>
    </div>

    <div class="home-header">
        <div class="boxed">
            <div class="main-logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 35.77"><path d="M6.76,26.15V0H5.51L0,2.62V3.4L1.39,4.77V26.15C1.39,27.38,1.31,27.9,0,28v1.31h8.1V28C6.84,27.9,6.76,27.38,6.76,26.15Z"></path><path d="M22.34,25.55V16c0-4.1-2.43-6.16-7.11-6.16-3.66,0-6.13,1.86-6.13,4.42A2.64,2.64,0,0,0,11.76,17a2.14,2.14,0,0,0,2.35-2.22c0-1.57-1.4-2-1.4-2.48s.69-.82,1.58-.82c1.89,0,2.64.9,2.64,3.15v2.7L13.7,18.84C10.11,20.47,8.59,22,8.59,25a4.39,4.39,0,0,0,4.69,4.68,4.74,4.74,0,0,0,4-2.46,3.08,3.08,0,0,0,3.22,2.46,4.41,4.41,0,0,0,3.42-1.47V26.9a1.41,1.41,0,0,1-.76.24C22.62,27.14,22.34,26.66,22.34,25.55Zm-5.41-.8c0,1.2-.67,2.15-1.71,2.15s-1.59-.89-1.59-2.81c0-2.24.64-3.22,1.88-4.11l1.42-1Z"></path><path d="M49.46,22.43c-.75-5-2.43-6.8-6.06-7.55,4.49-.9,6.51-3.26,6.51-6.64,0-4.59-3.14-7.41-9.48-7.41H30.85V2.14C32.8,2.3,33,2.93,33,4.8V25.32c0,1.83-.48,2.5-2.15,2.66v1.31H41.26V28c-1.71-.16-2.15-.83-2.15-2.66v-9.8h.6a2.58,2.58,0,0,1,2.78,1.75c.55,2,.57,6.26,1.35,9s2.58,3.23,5,3.23a6.89,6.89,0,0,0,3.65-.91l-.07-1.31C50.8,27.66,50.15,27,49.46,22.43Zm-10-8.58h-.36V2.55h.49c3.27,0,4.08,1.73,4.08,5.92S42.85,13.85,39.47,13.85Z"></path><path d="M61.3,26.18c-2.44,0-4.12-2.56-4.32-8h8.66v-.6c0-4.92-2.69-7.74-6.33-7.74-4.28,0-7.62,3.89-7.62,10.25,0,6,3.18,9.64,7.5,9.64,3.22,0,5.29-1.66,6.59-4.93l-1.15-.85C63.7,25.42,62.83,26.18,61.3,26.18ZM59,11.49c1,0,1.7,1.23,1.7,4.42v.58H57C57.05,12.59,57.93,11.49,59,11.49Z"></path><path d="M77.41,9.86A5.1,5.1,0,0,0,73,12.33V9.86H71.8L66.29,12.1v.78l1.39,1.36V32.63c0,1.23-.08,1.75-1.43,1.83v1.31h8.27V34.46c-1.4-.08-1.48-.6-1.48-1.83V29.29a7,7,0,0,0,2.48.44c4.54,0,7.38-4.12,7.38-10.91C82.9,12.77,80.64,9.86,77.41,9.86ZM75,28C73.62,28,73,27,73,25.1V15.45c0-1.55.84-2.66,2-2.66,1.57,0,2.12,2.43,2.12,8.27C77.18,25.73,76.89,28,75,28Z"></path><path d="M98.87,24.88v-15H97.64l-5.33,1.26v1.11c1.08.44,1.2,1.33,1.2,2.87v9.14a2.22,2.22,0,0,1-2,2.46c-1.11,0-1.55-.75-1.55-2V9.86H88.7l-5.55,1.26v1.11c1.19.2,1.41,1.12,1.41,2.87v8.33c0,4.38,1.9,6.34,4.68,6.34a5,5,0,0,0,4.27-2.6v2.31h1.1l5.52-.82V27.34C99,27.1,98.87,26.76,98.87,24.88Z"></path><path d="M111.1,9.86a5.16,5.16,0,0,0-4.34,2.47V0h-1.25L100,2.62V3.4l1.38,1.37V27a10.45,10.45,0,0,0,7.51,2.69c4.86,0,7.71-4.12,7.71-10.91C116.62,12.77,114.36,9.86,111.1,9.86ZM108.68,28c-1.34,0-1.92-.91-1.92-2.46V15.45c0-1.55.84-2.66,2-2.66,1.57,0,2.12,2.43,2.12,8.27C110.9,25.73,110.61,28,108.68,28Z"></path><path d="M127.61,9.86a5.15,5.15,0,0,0-4.33,2.47V0H122l-5.5,2.62V3.4l1.39,1.37V27a10.45,10.45,0,0,0,7.51,2.69c4.86,0,7.71-4.12,7.71-10.91C133.14,12.77,130.88,9.86,127.61,9.86ZM125.2,28c-1.34,0-1.92-.91-1.92-2.46V15.45c0-1.55.84-2.66,2-2.66,1.58,0,2.13,2.43,2.13,8.27C127.42,25.73,127.13,28,125.2,28Z"></path><path d="M140.45,26.15V0H139.2l-5.5,2.62V3.4l1.39,1.37V26.15c0,1.23-.08,1.75-1.37,1.83v1.31h8.1V28C140.53,27.9,140.45,27.38,140.45,26.15Z"></path><path d="M146.61,7.2a2.95,2.95,0,1,0,0-5.89,3,3,0,0,0-3,3A3,3,0,0,0,146.61,7.2Z"></path><path d="M149.24,26.15V9.86H148l-5.51,2.24v.78l1.39,1.36V26.15c0,1.23-.08,1.75-1.37,1.83v1.31h8.1V28C149.32,27.9,149.24,27.38,149.24,26.15Z"></path><path d="M159.25,14.78A2.11,2.11,0,0,0,161.52,17a2.66,2.66,0,0,0,2.62-2.88c0-2.59-2.16-4.3-5.23-4.3-4.45,0-8.12,3.45-8.12,10.57,0,5.56,3,9.34,7.37,9.34,3.18,0,4.7-2.15,5.74-4.81L162.1,24c-.81,1.91-1.51,3-2.95,3-2.24,0-3.15-2.95-3.15-9.11,0-5.17,1.23-6.37,3-6.37.88,0,1.52.32,1.52.82S159.25,13.18,159.25,14.78Z"></path><path d="M179.24,27.14c-.55,0-.83-.48-.83-1.59V16c0-4.1-2.42-6.16-7.11-6.16-3.66,0-6.13,1.86-6.13,4.42A2.64,2.64,0,0,0,167.84,17a2.13,2.13,0,0,0,2.34-2.22c0-1.57-1.4-2-1.4-2.48s.7-.82,1.59-.82c1.88,0,2.63.9,2.63,3.15v2.7l-3.22,1.47c-3.6,1.63-5.12,3.19-5.12,6.17a4.39,4.39,0,0,0,4.69,4.68,4.74,4.74,0,0,0,4-2.46,3.08,3.08,0,0,0,3.22,2.46A4.41,4.41,0,0,0,180,28.22V26.9A1.41,1.41,0,0,1,179.24,27.14ZM173,24.75c0,1.2-.67,2.15-1.7,2.15s-1.59-.89-1.59-2.81c0-2.24.63-3.22,1.87-4.11L173,19Z"></path></svg>
            </div>

            <div class="under-logo">
                <div class="updated-info">10 Aprile 2024 - Aggiornato alle 15.22</div>
                <MeteoBox />
            </div>
        </div>
    </div>

    <TopMenu />

    <CategoriesMenu />
</template>

<script>
import MeteoBox from '../elements/MeteoBox.vue';
import TopMenu from '../elements/TopMenu.vue';
import CategoriesMenu from '../elements/CategoriesMenu.vue'

export default {
    name: 'HomeHeader',
    components: {
        MeteoBox,
        TopMenu,
        CategoriesMenu
    },
    props: {
        video: {
            type: Object
        }
    },
    data() {
        return {
        };
    },
};
</script>

<style>
.home-header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
}

.home-header > .boxed {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.main-logo {
    width: 430px;
    height: 90px;
}

.under-logo {
    display: flex;
    align-items: center;
}

.updated-info {
    font-family: "Eugenio Serif";
    font-size: 13px;
    font-weight: 500;
    margin-right: 30px;
}

.home-video-band {
    display: flex;
    justify-content: center;
}

.home-video-band > .boxed {
    width: 100%;
    padding: 8px 0;
    background-color: #35414f;
    display: flex;
}

.home-video-band .video-thumb {
    position: relative;
    width: 245px;
    height: 138px;
    background-color: rgba(255, 255, 255, 0.2);
}

.home-video-band .video-thumb > svg {
    position: absolute;
    top: calc(50% - 12px);
    left: calc(50% - 12px);
    fill: rgba(255, 255, 255, 0.4);
    height: 24px;
    width: 24px
}

.home-video-band .video-thumb > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 4  ;
}

.home-video-band .video-thumb > .play-icon {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    border: 1px solid #d0d1d3;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.home-video-band .video-thumb > .play-icon > svg {
    fill: #d0d1d3;
    width: 14px;
    height: 14px;
    transform: translateX(1px);
}

.home-video-band .video-info {
    width: calc(100% - 245px);
    display: flex;
    flex-direction: column;
    padding: 0 16px;
}

.home-video-band .video-info .title {
    color: white;
    font-size: 22px;
    line-height: 26.4px;
    text-decoration: none;
    padding-right: 40px;
    margin-bottom: 8px;
    transition: .3s ease opacity;
}

.home-video-band .video-info .title:hover {
    opacity: 0.7;
}

.home-video-band .video-info .author {
    color: #d2d2d2;
    font-family: Georgia, Times, "Times New Roman", serif;
    font-style: italic;
    font-size: 14px;
    font-weight: 200;
    letter-spacing: 0.2px;
}

@media screen and (max-width: 780px) {
    .home-header {
        display: none;
    }

    .home-video-band .video-info {
        width: calc(100% - 148px);
    }

    .home-video-band .video-info .title {
        font-size: 14px;
        line-height: 20px;
    }

    .home-video-band .video-thumb {
        width: 140px;
        height: 100px;
    }
}
</style>