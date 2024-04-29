<template>
    <Head>
        <title>{{ title }}</title>
        <meta name="description" :content="description" />
        <meta property="og:site_name" content="la Repubblica" />
        <meta property="og:title" :content="title" />
        <meta property="og:description" :content="description" />
        <meta property="og:image" :content="image" />
        <meta property="og:url" :content="url" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@repubblica" />
        <meta name="twitter:title" :content="title" />
        <meta name="twitter:description" :content="description" />
        <meta name="twitter:image" :content="image" />
        <meta name="twitter:url" :content="url" />
    </Head>

    <Navbar />

    <div class="body-content" ref="news">
        <DetailHeader
            title="Cronaca"
        />

        <div class="heading">
            <div class="boxed">
                <div class="left-zone">
                    <h1 v-if="news" class="title">{{ news.title }}</h1>
                    <div v-if="news" class="author">di {{ news.author }}</div>
                </div>
    
                <div class="right-zone">
                    <div v-if="news" class="image" :style="imageStyle">

                        <div class="image-meta">
                            <div class="triangle"></div>
                            {{ news.imageMeta }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="boxed">
                <div v-if="news" class="subtitle">{{ news.subtitle }}</div>
            </div>
        </div>

        <div class="meta-info">
            <div class="boxed">
                <div class="data">12 Aprile 2024</div>

                <div class="minuti">
                    <svg id="r-icon-time" viewBox="0 0 24 24"><path d="M12.516 6.984v5.25l4.5 2.672-0.75 1.266-5.25-3.188v-6h1.5zM12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"></path></svg>
                    1 Minuto di lettura
                </div>
            </div>
        </div>
    </div>

    <div class="main-article">
        <div class="boxed">
            <div class="sidebar">
                <div class="social-column" v-if="news">
                    <button id="facebook-link" class="social-button" data-sharer="facebook" :data-title="news.title" :data-url="news.url">
                        <svg viewBox="0 0 32 32"><path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path></svg>
                    </button>

                    <button id="twitter-link" class="social-button" data-sharer="twitter" :data-title="news.title" :data-url="news.url">
                        <svg viewBox="0 0 32 32"><path d="M24.325 3h4.411l-9.636 11.013 11.336 14.987h-8.876l-6.952-9.089-7.955 9.089h-4.413l10.307-11.78-10.875-14.22h9.101l6.284 8.308zM22.777 26.36h2.444l-15.776-20.859h-2.623z"></path></svg>
                    </button>
    
                    <button id="mail-link" class="social-button" data-sharer="email" :data-title="news.title" :data-url="news.url">
                        <svg viewBox="0 0 32 32"><path d="M16 14.688l10.688-6.688h-21.375zM26.688 24v-13.313l-10.688 6.625-10.688-6.625v13.313h21.375zM26.688 5.313c1.438 0 2.625 1.25 2.625 2.688v16c0 1.438-1.188 2.688-2.625 2.688h-21.375c-1.438 0-2.625-1.25-2.625-2.688v-16c0-1.438 1.188-2.688 2.625-2.688h21.375z"></path></svg>
                    </button>

                    <button id="linkedin-link" class="social-button" data-sharer="linkedin" :data-title="news.title" :data-url="news.url">
                        <svg viewBox="0 0 32 32"><path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path><path d="M2 12h6v18h-6v-18z"></path><path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></svg>
                    </button>
    
                    <button id="pinterest-link" class="social-button" data-sharer="pinterest" :data-title="news.title" :data-url="news.url">
                        <svg viewBox="0 0 32 32"><path d="M16 2.138c-7.656 0-13.863 6.206-13.863 13.863 0 5.875 3.656 10.887 8.813 12.906-0.119-1.094-0.231-2.781 0.050-3.975 0.25-1.081 1.625-6.887 1.625-6.887s-0.412-0.831-0.412-2.056c0-1.925 1.119-3.369 2.506-3.369 1.181 0 1.756 0.887 1.756 1.95 0 1.188-0.756 2.969-1.15 4.613-0.331 1.381 0.688 2.506 2.050 2.506 2.462 0 4.356-2.6 4.356-6.35 0-3.319-2.387-5.638-5.787-5.638-3.944 0-6.256 2.956-6.256 6.019 0 1.194 0.456 2.469 1.031 3.163 0.113 0.137 0.131 0.256 0.094 0.4-0.106 0.438-0.338 1.381-0.387 1.575-0.063 0.256-0.2 0.306-0.463 0.188-1.731-0.806-2.813-3.337-2.813-5.369 0-4.375 3.175-8.387 9.156-8.387 4.806 0 8.544 3.425 8.544 8.006 0 4.775-3.012 8.625-7.194 8.625-1.406 0-2.725-0.731-3.175-1.594 0 0-0.694 2.644-0.863 3.294-0.313 1.206-1.156 2.712-1.725 3.631 1.3 0.4 2.675 0.619 4.106 0.619 7.656 0 13.863-6.206 13.863-13.863 0-7.662-6.206-13.869-13.863-13.869z"></path></svg>
                    </button>

                    <button id="whatsapp-link" class="social-button" data-sharer="whatsapp" :data-title="news.title" :data-url="news.url">
                        <svg viewBox="0 0 32 32"><path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"></path></svg>
                    </button>
                </div>
            </div>
    
            <div v-if="news" class="content">
                <div v-html="news.content"></div>

                <br>

                <a href="https://www.facebook.com/NewKebabLaStazioneHalal" class="news-box">
                    <img src="/public/images/banner.png">
                    <svg viewBox="0 0 20 20" style="transform: scale(1.2);"><path fill-rule="evenodd" d="M8.833 4h.234c1.7 0 2.133.86 2.133 2.927C11.2 8.995 10.767 9.6 9 9.6h-.2V4h.033zm2.294 6.09c2.236-.438 3.259-1.597 3.259-3.257 0-2.255-1.566-3.633-4.761-3.633H4.8v.658c.99.062 1.086.376 1.086 1.315v9.991c0 .908-.223 1.222-1.086 1.316v.657h5.208v-.657c-.862-.063-1.086-.408-1.086-1.316v-4.76h.287c.671 0 1.215.25 1.406.845.288.971.288 3.038.671 4.385.384 1.253 1.31 1.566 2.493 1.566.926 0 1.565-.282 1.821-.438l-.032-.658c-.799.188-1.118-.125-1.47-2.35-.351-2.41-1.182-3.288-2.971-3.664zM2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm-.2.8h16.4a1 1 0 011 1v16.4a1 1 0 01-1 1H1.8a1 1 0 01-1-1V1.8a1 1 0 011-1z"></path></svg>
                </a>
            </div>

        </div>
    </div>

    <div class="reserved">
        <div class="boxed">&copy; Riproduzione riservata</div>
    </div>

    <FooterBlock />
</template>

<script>
import Navbar from '../layout-parts/Navbar.vue';
import DetailHeader from '../layout-parts/DetailHeader.vue';
import FooterBlock from '../layout-parts/FooterBlock.vue';
import Space from '../elements/Space.vue';

export default {
    name: 'Home',
    components: {
        Navbar,
        DetailHeader,
        Space,
        FooterBlock,
    },
    // head: {
    //     title: title,
    //     meta: [
    //         { name: 'description', content: description },
    //         { property: 'og:site_name', content: "la Repubblica" },
    //         { property: 'og:title', content: title },
    //         { property: 'og:description', content: description },
    //         { property: 'og:image', content: image },
    //         { property: 'og:url', content: url },

    //         { name: 'twitter:card', content: "summary_large_image" },
    //         { name: 'twitter:site', content: "@repubblica" },
    //         { name: 'twitter:title', content: title },
    //         { name: 'twitter:description', content: description },
    //         { name: 'twitter:image', content: image },
    //         { name: 'twitter:url', content: url },
    //     ],
    // },
    data() {
        return {
            news: null,
            title: 'la Repubblica - News in tempo reale - Le notizie e i video di politica, cronaca, economia, sport',
            description: 'Repubblica è il quotidiano online aggiornato 24 ore su 24 su politica, cronaca, economia, sport, esteri, spettacoli, musica, cultura, scienza, tecnologia.',
            image: 'https://www.repstatic.it/cless/main/nazionale/2013-v1/img/common/favicon/favicon-1500.png',
            url: 'https://repubbliica.it',
        };
    },
    computed: {
        imageStyle() {
            if(this.news) {
                return 'background-image: url("' + this.news.image + '");';
            }
        }
    },
    async mounted() {
        let urlblock = window.location.pathname;

        let data = await fetch("https://repubbliica.it:3000/get-news-detail", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },    
            body: new URLSearchParams({
                'url': urlblock
            })
        });

        let news = await data.json();

        if(news.error === true) {
            window.location.href = "/404/notizia-non-trovata"
        } else {
            this.news = news.data;

            this.title = news.data.title + " - La Repubblica";
            this.description = news.data.subtitle;
            this.image = news.data.image;
            this.url = 'https://repubbliica.it' + urlblock;
            this.news.url = 'https://repubblIica.it' + urlblock;

            let sharerjs = document.createElement('script');
            sharerjs.setAttribute('src', 'https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js');
            this.$refs.news.appendChild(sharerjs);
        }
    }
};
</script>

<style scoped>
.heading {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.heading > .boxed {
    width: 100%;
    display: flex;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
}

.left-zone {
    padding: 16px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.title {
    margin: 0;
    font-family: "Eugenio Book";
    text-rendering: optimizeLegibility;
    font-weight: 500;
    font-size: 42px;
    line-height: 50px;
    margin-bottom: 30px;
}

.author {
    font-size: 14px;
    font-weight: 500;
    color: #454545;
}

.right-zone {
    display: flex;
    align-items: flex-start;
    width: 60%;
}

.image {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.image-meta {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0px;
    right: 0px;
    background-color: white;
    line-height: 16px;
    font-size: 12px;
    padding: 4px 10px;
    border-top: 2px solid #4b88ca;
}

.triangle {
    margin-right: 8px;
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid #4b88ca;
}

.subtitle {
    padding: 0 16px;
    font-size: 24px;
    line-height: 30px;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    margin-top: 10px;
    padding-bottom: 15px;
}

.meta-info {
    width: 100%;
    display: flex;
    justify-content: center;
}

.meta-info > .boxed {
    min-height: 42px;
    align-items: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid #999;
    padding: 5px 16px;
}

.data {
    font-size: 12px;
    text-transform: uppercase;
    margin: 5px 0;
}

.minuti {
    display: flex;
    align-items: center;
    font-size: 12px;
    text-transform: uppercase;
    margin: 5px 0;
}

.minuti > svg {
    height: 20px;
    width: 20px;
    margin-right: 6px;
}

.social-column {
    display: flex;
    flex-direction: column;
}

.social-button {
    border: 0;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e7e7e7;
    margin: 5px 0;
    transition: .3s ease background-color;
}

#facebook-link:hover {
    background-color: #43609c;
}

#twitter-link:hover {
    background-color: black;
}

#mail-link:hover {
    background-color: #666;
}

#pinterest-link:hover {
    background-color: #cb2027;
}

#linkedin-link:hover {
    background-color: #3072b0;
}

#whatsapp-link:hover {
    background-color: #49cf06;
}

.social-button:hover > svg {
    fill: white;
}

.social-button > svg {
    height: 15px;
    transition: .3s ease fill;
}

.main-article {
    width: 100%;
    display: flex;
    justify-content: center;
}

.main-article > .boxed {
    width: 100%;
    display: flex;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
    padding: 35px 16px;
}

.sidebar {
    width: 80px;
    margin-left: 20px;
}

.content {
    width: calc(100% - 100px);
    max-width: 550px;
    font-size: 18px;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    line-height: 32px;
    color: black;
    font-family: 'Eugenio Text';
    padding-bottom: 10vh;
}

.reserved {
    width: 100%;
    display: flex;
    justify-content: center;
}

.reserved > .boxed {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 11px;
    color: #636363;
    background-color: #eaf4ff;
    border: 1px solid #999;
    padding: 10px 16px;
    border-bottom: 0;
}

.news-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 16 / 4;
    background-color: rgba(0, 0, 0, 0.1);
}

.news-box > svg {
    height: 24px;
    fill: rgba(0, 0, 0, 0.2);
}

.news-box > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 4;
}

@media screen and (max-width: 880px) {
    .sidebar {
        width: 60px;
        margin-left: 0;
    }

    .main-article > .boxed {
        padding-top: 16px;
    }

    .content {
        width: calc(100% - 60px);
        max-width: unset;
    }
}

@media screen and (max-width: 780px) {
    .heading > .boxed {
        flex-direction: column;
    }

    .right-zone {
        width: 100%;
    }

    .left-zone {
        width: 100%;
    }

    .title {
        margin-bottom: 16px;
        font-size: 26px;
        line-height: 35px;
    }

    .author {
        margin-bottom: 10px;
    }

    .sidebar {
        display: none;
    }

    .content {
        padding-top: 15px;
        width: 100%;
        padding-bottom: 10vh;
    }
}
</style>