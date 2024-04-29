<template>
    <Head>
        <title>la Repubblica - News in tempo reale - Le notizie e i video di politica, cronaca, economia, sport</title>
        <meta name="description" content="Repubblica è il quotidiano online aggiornato 24 ore su 24 su politica, cronaca, economia, sport, esteri, spettacoli, musica, cultura, scienza, tecnologia." />
        <meta property="og:site_name" content="la Repubblica" />
        <meta property="og:title" content="la Repubblica - News in tempo reale - Le notizie e i video di politica, cronaca, economia, sport" />
        <meta property="og:description" content="Repubblica è il quotidiano online aggiornato 24 ore su 24 su politica, cronaca, economia, sport, esteri, spettacoli, musica, cultura, scienza, tecnologia." />
        <meta property="og:image" content="https://www.repstatic.it/cless/main/nazionale/2013-v1/img/common/favicon/favicon-1500.png" />
        <meta property="og:url" content="https://www.repubbliica.it/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@repubblica" />
        <meta name="twitter:title" content="La Repubblica - News in tempo reale - Le notizie e i video di politica, cronaca, economia, sport" />
        <meta name="twitter:description" content="Repubblica è il quotidiano online aggiornato 24 ore su 24 su politica, cronaca, economia, sport, esteri, spettacoli, musica, cultura, scienza, tecnologia." />
        <meta name="twitter:image" content="https://www.repstatic.it/cless/main/nazionale/2013-v1/img/common/favicon/favicon-1500.png" />
        <meta name="twitter:url" content="https://www.repubbliica.it/" />
    </Head>
    
    <Navbar />
    <div class="body-content">
        <DetailHeader title="Cronaca" :showShare="false" />

        <List3Col
            title="In evidenza"
            titleSide="Live now"
            :list="newsList"
        />

        <List4Col
            title="Altre notizie"
            :list="newsList"
        />
    
        <br><br>
    
        <Newsletter />
    </div>

    <FooterBlock />
</template>

<script>
import Navbar from '../layout-parts/Navbar.vue';
import DetailHeader from '../layout-parts/DetailHeader.vue';
import List3Col from '../elements/News/list/List3Col.vue';
import List4Col from '../elements/News/list/List4Col.vue';
import Newsletter from '../layout-parts/Newsletter.vue';
import FooterBlock from '../layout-parts/FooterBlock.vue';
import PodcastBlock from '../elements/PodcastBlock.vue';
import Space from '../elements/Space.vue';

export default {
    name: 'Home',
    components: {
        Navbar,
        DetailHeader,
        Space,
        PodcastBlock,
        List3Col,
        List4Col,
        Newsletter,
        FooterBlock,
    },
    data() {
        return {
            newsList: []
        };
    },
    async mounted() {
        let page = 1;

        if(this.$route.params.page) {
            page = this.$route.params.page;
        }

        let data = await fetch('https://repubbliica.it:3000/get-news/' + page);
        data = await data.json();

        this.newsList = data;
    }
};
</script>

<style scoped>
</style>