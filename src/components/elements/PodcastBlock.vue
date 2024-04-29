<template>
    <div v-if="title !== 0" class="podcast-block">
        <div class="boxed">
            <div class="left-zone">
                <div class="cat">
                    <svg class="icon-audio-wave" viewBox="0 0 24 24"><path d="M7.28 9.158c1.067 1.751 1.067 3.932 0 5.684-0.356 0.585-1.182 0.695-1.688 0.225l-0.539-0.5c-0.353-0.327-0.432-0.841-0.204-1.259 0.446-0.819 0.446-1.798 0-2.616-0.228-0.418-0.149-0.931 0.204-1.259l0.539-0.5c0.506-0.47 1.332-0.359 1.688 0.225zM15.314 1.175c5.29 6.265 5.286 15.39 0 21.65-0.394 0.466-1.102 0.503-1.544 0.082l-0.51-0.486c-0.401-0.382-0.438-1.009-0.082-1.433 4.371-5.21 4.367-12.769 0-17.974-0.356-0.424-0.319-1.051 0.082-1.433l0.51-0.486c0.442-0.421 1.15-0.384 1.544 0.082zM11.269 4.94c3.213 4.042 3.218 9.699 0 13.748-0.391 0.492-1.132 0.545-1.591 0.114l-0.518-0.487c-0.392-0.368-0.445-0.968-0.115-1.39 2.365-3.016 2.365-7.205 0-10.221-0.331-0.422-0.278-1.022 0.115-1.39l0.518-0.487c0.46-0.432 1.2-0.378 1.591 0.114z"></path></svg>
                    <div class="cat-text">Podcast</div>
                </div>

                <div class="title">
                    <a :href="link"><strong>{{ category }} </strong><span v-html="title"></span></a>
                </div>

                <div class="author">di {{ author }}</div>

            </div>

            <div class="right-zone">
                <a :href="link" class="r-link">
                    <svg class="icon-headphone" viewBox="0 0 20 20"><path d="M15.5238095,0 C20.7820106,0 25.047619,4.23624612 25.047619,9.45825233 L25.047619,16.8472492 C25.047619,18.5718039 23.6095238,20 21.8730159,20 L18.6984127,20 L18.6984127,11.5758499 L22.9142857,11.5758499 L22.9142857,9.45720141 C22.9142857,5.36808365 19.6402116,2.1175976 15.5238095,2.1175976 C11.4074074,2.1175976 8.13333333,5.36913457 8.13333333,9.45720141 L8.13333333,11.5758499 L12.3492063,11.5758499 L12.3492063,20 L9.17460317,20 C7.43809524,20 6,18.5718039 6,16.8472492 L6,9.45825233 C6,4.23624612 10.2656085,0 15.5238095,0 Z" transform="translate(-6)"></path></svg>
                    <div class="link-text">Ascolta</div>
                </a>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PodcastBlock",
    data() {
        return {
            title: '',
            category: '',
            link: '',
            author: '',
        }
    },
    async mounted() {
        let data = await fetch('https://repubbliica.it:3000/get-podcast');
        data = await data.json();

        if(data != null) {
            this.title = data.title;
            this.author = data.author;
            this.category = data.category;
            this.link = data.link;
        } else {
            title = 0;
        }
    }
}
</script>

<style scoped>
.podcast-block {
    width: 100%;
    display: flex;
    justify-content: center;
}

.podcast-block > .boxed {
    display: flex;
    background-color: #2d2e2f;
    border-top: 2px solid #f56100;
    min-height: 95px;
    width: 100%;
    padding: 16px 0 16px 16px;
}

.left-zone {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
    border-right: 1px solid #5c5c5c;
    padding-right: 10px;
}

.cat {
    position: relative;
    display: flex;
    align-items: center;
    height: 18px;
    color: #da5700;
    margin-bottom: 4px;
}

.icon-audio-wave {
    fill: #da5700;
    width: 18px;
    height: 18px;
    margin-right: 5px;
}

.cat::before {
    position: absolute;
    display: block;
    content: '';
    width: 18px;
    height: 18px;
    top: 0;
    left: 0;
    background-color: #2d2e2f;
    z-index: 3;
    -webkit-animation-name: audiowave;
    animation-name: audiowave;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-delay: 0;
    animation-delay: 0;
    -webkit-transform-origin: 100%;
    transform-origin: 100%;
}

.cat-text {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
}

.right-zone {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.r-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.author {
    color: #b4b4b4;
    font-size: 13px;
    font-family: "Eugenio Serif";
    font-style: italic;
}

.title {
    margin-bottom: 8px;
    max-width: 350px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: white;
    transition: .3s ease color;
}

.title > a {
    color: white;
    font-size: 15px;
    letter-spacing: 0.4px;
    line-height: 19px;
    text-decoration: none;
}

.title:hover,
.title:hover > a {
    color: #f56100;
}

.title > a strong {
    color: var(--primary-color);
    margin-right: 7px;
}

.icon-headphone {
    fill: #da5700;
    height: 16px;
    width: 16px;
    margin-bottom: 8px;
    transition: .3s ease fill;
}

.link-text {
    color: #da5700;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    transition: .3s ease color;
}

.r-link:hover .link-text {
    color: white;
}

.r-link:hover .icon-headphone {
    fill: white;
}

@-webkit-keyframes audiowave {
    0% {
        -webkit-transform: scaleX(100%);
        transform: scaleX(100%);
        opacity: 1
    }

    50% {
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        opacity: 0
    }

    90% {
        opacity: 1
    }

    100% {
        -webkit-transform: scaleX(100%);
        transform: scaleX(100%)
    }
}

@keyframes audiowave {
    0% {
        -webkit-transform: scaleX(100%);
        transform: scaleX(100%);
        opacity: 1
    }

    50% {
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        opacity: 0
    }

    90% {
        opacity: 1
    }

    100% {
        -webkit-transform: scaleX(100%);
        transform: scaleX(100%)
    }
}

@media screen and (max-width: 800px) {
    .podcast-block .left-zone .title {
        max-width: 230px;
        overflow: hidden;
    }
}
</style>