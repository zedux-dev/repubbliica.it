<template>
    <Head>
        
    </Head>

    <Navbar />
    <div class="body-content">
        <HomeHeader
            :video="video"
        />
        
        <Space :height="25" />

        <PodcastBlock />

        <List3Col
            title="In evidenza"
            titleSide="Cronaca"
            :list="newsEvidenza"
        />
    
        <List4Col
            title="Cronaca"
            :list="newsList"
        />

        <List4Col
            title="Politica"
            :list="newsList2"
        />
    
        <br><br>
    
        <Newsletter />
    </div>

    <FooterBlock />
</template>

<script>
import Navbar from '../layout-parts/Navbar.vue';
import HomeHeader from '../layout-parts/HomeHeader.vue';
import List3Col from '../elements/News/list/List3Col.vue';
import List4Col from '../elements/News/list/List4Col.vue';
import Newsletter from '../layout-parts/Newsletter.vue';
import FooterBlock from '../layout-parts/FooterBlock.vue';
import PodcastBlock from '../elements/PodcastBlock.vue';
import Space from '../elements/Space.vue';

import { Head } from "@vueuse/head";

export default {
    name: 'Home',
    components: {
        Navbar,
        HomeHeader,
        Space,
        PodcastBlock,
        List3Col,
        List4Col,
        Newsletter,
        FooterBlock,
    },
    // head: {
    //     title: 'la Repubblica - News in tempo reale - Le notizie e i video di politica, cronaca, economia, sport',
    //     meta: [
    //         { name: 'description', content: "Repubblica è il quotidiano online aggiornato 24 ore su 24 su politica, cronaca, economia, sport, esteri, spettacoli, musica, cultura, scienza, tecnologia." },
    //         { property: 'og:site_name', content: "la Repubblica" },
    //         { property: 'og:title', content: "la Repubblica - News in tempo reale - Le notizie e i video di politica, cronaca, economia, sport" },
    //         { property: 'og:description', content: "Repubblica è il quotidiano online aggiornato 24 ore su 24 su politica, cronaca, economia, sport, esteri, spettacoli, musica, cultura, scienza, tecnologia." },
    //         { property: 'og:image', content: "https://www.repstatic.it/cless/main/nazionale/2013-v1/img/common/favicon/favicon-1500.png" },
    //         { property: 'og:url', content: "https://www.repubbliica.it/" },

    //         { name: 'twitter:card', content: "summary_large_image" },
    //         { name: 'twitter:site', content: "@repubblica" },
    //         { name: 'twitter:title', content: "La Repubblica - News in tempo reale - Le notizie e i video di politica, cronaca, economia, sport" },
    //         { name: 'twitter:description', content: "Repubblica è il quotidiano online aggiornato 24 ore su 24 su politica, cronaca, economia, sport, esteri, spettacoli, musica, cultura, scienza, tecnologia." },
    //         { name: 'twitter:image', content: "https://www.repstatic.it/cless/main/nazionale/2013-v1/img/common/favicon/favicon-1500.png" },
    //         { name: 'twitter:url', content: "https://www.repubbliica.it/" },
    //     ],
    // },
    data() {
        return {
            newsList: [],
            video: null
        };
    },
    computed: {
        newsEvidenza() {
            return this.newsList.slice(0, 14);
        },
        newsList() {
            return this.newsList.slice(14, 22);
        },
        newsList2() {
            return this.newsList.slice(22, 26);
        }
    },
    async mounted() {
        for(let i=0; i<2; i++) {
            let dataNews = await fetch('https://repubbliica.it:3000/get-news/' + (i+1));
            this.newsList = this.newsList.concat(await dataNews.json());
        }

        let dataVideo = await fetch('https://repubbliica.it:3000/get-video');
        this.video = await dataVideo.json();

        for(let j=this.newsList.length-1; j>=0; j--) {
            if(this.newsList[j].author) {
                this.video.author = this.newsList[j].author;
                break;
            }
        }

    }
};
</script>

<style scoped>
</style>