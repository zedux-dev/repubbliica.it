<template>
    <div class="detail-header">
        <div class="boxed">
            <div class="follow-social">
                <div class="text">Seguici su:</div>

                <a target="_blank" href="https://www.facebook.com/Repubblica" class="icon-link">
                    <svg viewBox="0 0 32 32"><path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path></svg>
                </a>

                <a target="_blank" href="https://twitter.com/repubblica" class="icon-link">
                    <svg viewBox="0 0 32 32"><path d="M24.325 3h4.411l-9.636 11.013 11.336 14.987h-8.876l-6.952-9.089-7.955 9.089h-4.413l10.307-11.78-10.875-14.22h9.101l6.284 8.308zM22.777 26.36h2.444l-15.776-20.859h-2.623z"></path></svg>
                </a>
            </div>

            <div class="category">
                <h1>{{ title }}</h1>
                <div v-if="subtitle" class="subtitle">{{ subtitle }}</div>
            </div>

            <div class="search">
                <form action="/ricerca/repubblica" method="GET" class="search-wrapper">
                    <input name="search" class="search-input" type="text" placeholder="CERCA" required>
                    <button class="search-submit"><svg><path d="M5.792 9.792c2.208 0 4-1.792 4-4s-1.792-4-4-4-4 1.792-4 4 1.792 4 4 4zm5.333 0l4.417 4.417-1.333 1.333-4.417-4.417v-.708l-.25-.25c-1 .875-2.333 1.375-3.75 1.375C2.584 11.542 0 9.001 0 5.792A5.78 5.78 0 0 1 5.792 0c3.209 0 5.75 2.583 5.75 5.792 0 1.417-.5 2.75-1.375 3.75l.25.25h.708z"></path></svg></button>
                </form>
            </div>
        </div>
    </div>

    <div class="detail-menu">
        <div class="boxed">
            <template v-for="item in menuItems">
                <a v-if="!Array.isArray(item.links)" :href="item.links" class="menu-item">{{ item.name }}</a>

                <div v-else class="menu-item" tabindex="-1" :data-id="item.id" @focus="handleFocus" @blur="handleBlur">
                    {{ item.name }}
                    <svg version="1.1" id="svg1" width="300" height="150" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs1" /><g id="g1"><rect style="display:inline;fill:#000000;fill-opacity:0;stroke-width:6.68132;paint-order:stroke fill markers" id="rect1" width="12" height="12" x="0" y="0" /><path d="M 2.171875,3.3 6,7.0215186 9.828125,3.3 11,4.4392404 6,9.3 1,4.4392404 Z" id="path1" style="stroke-width:0.616236" /></g></svg>
                </div>
            </template>

            <div v-if="currentMenu" class="menu-list">
                <a v-for="item in currentMenu.links" :href="item.link" class="menu-link">{{ item.name }}</a>
            </div>
        </div>
    </div>

    <PodcastBlock />

    <div class="share-bar" v-if="showShare">
        <div class="boxed">
            <div class="live-now"><div class="round"></div> Live</div>

            <div class="social-row">
                <a href="#" id="facebook-link" class="social-button">
                    <svg viewBox="0 0 32 32"><path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path></svg>
                </a>
                
                <a href="#" id="twitter-link" class="social-button">
                    <svg viewBox="0 0 32 32"><path d="M24.325 3h4.411l-9.636 11.013 11.336 14.987h-8.876l-6.952-9.089-7.955 9.089h-4.413l10.307-11.78-10.875-14.22h9.101l6.284 8.308zM22.777 26.36h2.444l-15.776-20.859h-2.623z"></path></svg>
                </a>

                <a href="#" id="mail-link" class="social-button">
                    <svg viewBox="0 0 32 32"><path d="M16 14.688l10.688-6.688h-21.375zM26.688 24v-13.313l-10.688 6.625-10.688-6.625v13.313h21.375zM26.688 5.313c1.438 0 2.625 1.25 2.625 2.688v16c0 1.438-1.188 2.688-2.625 2.688h-21.375c-1.438 0-2.625-1.25-2.625-2.688v-16c0-1.438 1.188-2.688 2.625-2.688h21.375z"></path></svg>
                </a>

                <a href="#" id="linkedin-link" class="social-button">
                    <svg viewBox="0 0 32 32"><path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path><path d="M2 12h6v18h-6v-18z"></path><path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path></svg>
                </a>

                <a href="#" id="pinterest-link" class="social-button">
                    <svg viewBox="0 0 32 32"><path d="M16 2.138c-7.656 0-13.863 6.206-13.863 13.863 0 5.875 3.656 10.887 8.813 12.906-0.119-1.094-0.231-2.781 0.050-3.975 0.25-1.081 1.625-6.887 1.625-6.887s-0.412-0.831-0.412-2.056c0-1.925 1.119-3.369 2.506-3.369 1.181 0 1.756 0.887 1.756 1.95 0 1.188-0.756 2.969-1.15 4.613-0.331 1.381 0.688 2.506 2.050 2.506 2.462 0 4.356-2.6 4.356-6.35 0-3.319-2.387-5.638-5.787-5.638-3.944 0-6.256 2.956-6.256 6.019 0 1.194 0.456 2.469 1.031 3.163 0.113 0.137 0.131 0.256 0.094 0.4-0.106 0.438-0.338 1.381-0.387 1.575-0.063 0.256-0.2 0.306-0.463 0.188-1.731-0.806-2.813-3.337-2.813-5.369 0-4.375 3.175-8.387 9.156-8.387 4.806 0 8.544 3.425 8.544 8.006 0 4.775-3.012 8.625-7.194 8.625-1.406 0-2.725-0.731-3.175-1.594 0 0-0.694 2.644-0.863 3.294-0.313 1.206-1.156 2.712-1.725 3.631 1.3 0.4 2.675 0.619 4.106 0.619 7.656 0 13.863-6.206 13.863-13.863 0-7.662-6.206-13.869-13.863-13.869z"></path></svg>
                </a>

                <a href="#" id="whatsapp-link" class="social-button">
                    <svg viewBox="0 0 32 32"><path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"></path></svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import PodcastBlock from '../elements/PodcastBlock.vue';

export default {
    name: 'DetailHeader',
    components: {
        PodcastBlock
    },
    props: {
        showShare: {
            type: Boolean,
            default: true
        },
        title: {
            type: String,
            default: true
        },
        subtitle: {
            type: String
        },
    },
    data() {
        return {
            menuItems: [
                {
                    id: 0,
                    name: "Home",
                    links: "#"
                },
                {
                    id: 1,
                    name: "Cronaca",
                    links: "/cronaca"
                },
                {
                    id: 2,
                    name: "Quartieri",
                    links: [
                        { link: "https://bari.repubblica.it/quartiere/Murat_-_San_Nicola", name: "Murat-S.Nicola" },
                        { link: "https://bari.repubblica.it/quartiere/Madonnella", name: "Madonnella" },
                        { link: "https://bari.repubblica.it/quartiere/Picone_-_Poggiofranco", name: "Picone-Poggiofranco" },
                        { link: "https://bari.repubblica.it/quartiere/Japigia_-_Torre_a_Mare", name: "Japigia-T.a Mare" },
                        { link: "https://bari.repubblica.it/quartiere/Palese_-_Santo_Spirito", name: "Palese-S.Spirito" },
                        { link: "https://bari.repubblica.it/quartiere/Carrassi", name: "Carrassi" }
                    ]
                },
                {
                    id: 3,
                    name: "Motori",
                    links: "https://repubblica.it/motori"
                },
                {
                    id: 4,
                    name: "Sport",
                    links: "https://repubblica.it/sport"
                },
                {
                    id: 5,
                    name: "Foto",
                    links: "https://repubblica.it/foto"
                },
                {
                    id: 6,
                    name: "Video",
                    links: "https://video.repubblica.it/"
                },
                {
                    id: 7,
                    name: "Annunci locali",
                    links: [
                        { link: "https://annunci.bari.repubblica.it/lista/bari/immobiliare/-/comune-bari.ba", name: "Immobili" },
                        { link: "https://www.entietribunali.kataweb.it/asta-vendita-immobiliare/regione-puglia", name: "Aste Giudiziare" },
                        { link: "https://www.repubblica.it/economia/miojob/offerte/lavoro/cerca/offer_location_region-puglia", name: "Lavoro" },
                        { link: "https://annunci.bari.repubblica.it/lista/bari/motori/auto", name: "Motori" },
                        { link: "https://www.autoxy.it/auto-usate/bari", name: "Offerte auto" },
                        { link: "https://necrologie.repubblica.it/", name: "Necrologie" },
                    ]
                }
            ],
            currentMenu: null,
        };
    },
    methods: {
        handleFocus(e) {
            this.menuItems.forEach(item => {
                if(item.id == e.target.dataset.id) {
                    this.currentMenu = item;
                }
            });
        },
        handleBlur(e) {
            this.currentMenu = null;
        },
    }
};
</script>

<style scoped>
.detail-header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
}

.detail-header > .boxed {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.follow-social {
    width: calc(100% / 3);
    display: flex;
    align-items: center;
    height: 30px;
}

.follow-social > .text {
    font-size: 13px;
    margin-right: 10px;
}

.category {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
}

.category > h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Eugenio Book";
    font-size: 54px;
    text-rendering: optimizeLegibility;
    margin: 0;
}

.category > .subtitle {
    font-size: 14px;
    color: #616161;
    text-align: center;
}

.icon-link {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}

.icon-link > svg {
    width: 20px;
    height: 20px;
    transition: .3s ease fill;
}

.icon-link:hover > svg {
    fill: var(--primary-color);
}

.search {
    width: calc(100% / 3);
    display: flex;
    justify-content: flex-end;
    height: 35px;
}

.search-wrapper {
    position: relative;
}

.search-input {
    width: 194px;
    height: 35px;
    background: white;
    border: 1px solid #dedede;
    color: #616161;
    letter-spacing: .03em;
    border-radius: 3px;
    padding: 6px 12px;
    padding-right: 55px;
    outline: none;
}

.search-submit {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: 0;
    height: 35px;
    width: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.search-submit > svg {
    height: 20px;
    width: 20px;
    transform: translateY(2px);
}

.detail-menu {
    width: 100%;
    display: flex;
    justify-content: center;
}

.detail-menu > .boxed {
    position: relative;
    display: flex;
    width: 100%;
    height: 40px;
    background-color: white;
    border: 1px solid #999;
    border-top: 2px solid black;
    justify-content: center;
}

.menu-item {
    font-size: 12px;
    color: #1a1a1a;
    text-transform: uppercase;
    padding: 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: .3s ease background-color, .3s ease color;
    cursor: pointer;
}

.menu-item:hover {
    background-color: #f2f9ff;
}

.menu-item > svg {
    width: 12px;
    height: 12px;
    margin-left: 5px;
    transition: .3s ease transform, .3s ease fill;
}

.menu-item:focus {
    color: var(--primary-color);
    background-color: #f2f9ff;
}

.menu-item:focus > svg {
    transform: rotate(180deg);
    fill: var(--primary-color);
}

.menu-list {
    display: flex;
    position: absolute;
    top: 37px;
    background-color: #f2f9ff;
    left: 0;
    width: 100%;
    z-index: 9999;
    padding: 0 12px;
}

.menu-link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 13px;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    padding: 0 12px;
    height: 37px;
    transition: .3s ease color;
}

.menu-link:hover {
    color: var(--primary-color);
}

.share-bar {
    width: 100%;
    display: flex;
    justify-content: center;
}

.share-bar > .boxed {
    display: flex;
    width: 100%;
    height: 42px;
    background-color: white;
    border: 1px solid #999;
    justify-content: space-between;
}

.live-now {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #ec0000;
    text-transform: uppercase;
    font-size: 16px;
    padding: 10px 16px;
}

.live-now > .round {
    position: relative;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 999px;
    margin-right: 10px;
    -webkit-box-shadow: 0 0 0 rgba(255,255,255,.5);
    box-shadow: 0 0 0 rgba(255,255,255,.5);
    -webkit-animation: 1.5s infinite pulse;
    animation: 1.5s infinite pulse;
}

.social-row {
    display: flex;
    align-items: center;
}

.social-button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e7e7e7;
    margin: 0 5px;
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

@-webkit-keyframes pulse{
    0%, 100% {
        -webkit-box-shadow:0 0 0 0 rgba(255,255,255,.5);
        box-shadow:0 0 0 0 rgba(255,255,255,.5)
    }

    70% {
        -webkit-box-shadow:0 0 0 5px rgba(255,255,255,.5);
        box-shadow:0 0 0 5px rgba(255,255,255,.5)
    }
}

@keyframes pulse{
    0%, 100% {
        -webkit-box-shadow:0 0 0 0 rgba(255,255,255,.5);
        box-shadow:0 0 0 0 rgba(255,255,255,.5)
    }

    70% {
        -webkit-box-shadow:0 0 0 5px rgba(255,255,255,.5);
        box-shadow:0 0 0 5px rgba(255,255,255,.5)
    }
}

@media screen and (max-width: 880px) {
    .menu-item:last-child {
        display: none;
    }
}

@media screen and (max-width: 780px) {
    .detail-header,
    .detail-menu {
        display: none;
    }
}
</style>