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
        <DetailHeader title="Ricerca" :subtitle="'Risultati per: \'' + $route.query.search + '\''" :showShare="false" />

        <List4Col
            :title="totRes + ' risultati per: \'' + $route.query.search + '\''"
            :list="newsList"
            :fallbackImages="true"
        />

        <div class="pagination" v-if="totRes > 0">
            <div class="boxed">
                <template v-for="link in pagination">
                    <a v-if="link != '<' && link != '>'" :href="'/ricerca/repubblica?search=' + $route.query.search + '&page=' + link" class="pagination-btn">{{ link }}</a>
                    <a v-if="link == '<'" :href="'/ricerca/repubblica?search=' + $route.query.search + '&page=' + prevLink" class="pagination-btn prev">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M-1.9 256l17-17L207 47l17-17L257.9 64 241 81 65.9 256 241 431l17 17L224 481.9l-17-17L15 273l-17-17z"/></svg>
                    </a>
                    <a v-if="link == '>'" :href="'/ricerca/repubblica?search=' + $route.query.search + '&page=' + nextLink" class="pagination-btn next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M-1.9 256l17-17L207 47l17-17L257.9 64 241 81 65.9 256 241 431l17 17L224 481.9l-17-17L15 273l-17-17z"/></svg>
                    </a>
                </template>
            </div>
        </div>

        <div v-else class="nores">
            <div class="boxed">Nessun risultato</div>
        </div>
    
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
            newsList: [],
            totRes: 0,
            currentPage: 1
        };
    },
    computed: {
        pagination() {
            let linkArray = [];
            let npages = 24;

            if(this.currentPage == 1) linkArray = [1, 2, 3, 4, 5, 6, 7, '>'];
            if(this.currentPage == 2) linkArray = ['<', 1, 2, 3, 4, 5, 6, 7, '>'];
            if(this.currentPage == 3) linkArray = ['<', 1, 2, 3, 4, 5, 6, 7, '>'];
            if(this.currentPage == 4) linkArray = ['<', 1, 2, 3, 4, 5, 6, 7, '>'];
            if(this.currentPage >= 5) linkArray = [
                this.currentPage-3,
                this.currentPage-2,
                this.currentPage-1,
                this.currentPage
            ];
            if(this.currentPage >= 5 && this.currentPage > 1) linkArray.unshift('<');
            if(this.currentPage >= 5 && this.currentPage+1 <= npages) linkArray.push(this.currentPage+1);
            if(this.currentPage >= 5 && this.currentPage+2 <= npages) linkArray.push(this.currentPage+2);
            if(this.currentPage >= 5 && this.currentPage+3 <= npages) linkArray.push(this.currentPage+3);
            if(this.currentPage >= 5 && this.currentPage < npages) linkArray.push('>');

            return linkArray;
        },
        prevLink() {
            return parseInt(this.currentPage) - 1;
        },
        nextLink() {
            return parseInt(this.currentPage) + 1;
        },
    },
    async mounted() {
        if(this.$route.query.page) {
            this.currentPage = this.$route.query.page;
        }

        let dataSearch = await fetch('https://repubbliica.it:3000/search/' + this.$route.query.search + '/' + this.currentPage);
        dataSearch = await dataSearch.json();
        this.newsList = dataSearch.list.slice(0, 8);
        this.totRes = dataSearch.nres;
    }
};
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.pagination > .boxed {
    display: flex;
    align-items: center;
    height: 40px;
}

.pagination-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    height: 40px;
    width: 40px;
    border: 1px solid #dddddd;
    font-size: 14px;
    margin: 0 4px;
}

.pagination-btn.current {
    font-weight: 500;
    color: black;
}

.pagination-btn:hover {
    color: var(--primary-color);
}

.pagination-btn.prev > svg {
    height: 12px;
    fill: #000;
}

.pagination-btn.next > svg {
    height: 12px;
    fill: #000;
    transform: rotate(180deg);
}

.nores {
    width: 100%;
    display: flex;
    justify-content: center;
}

.nores > .boxed {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    padding: 20px;
    margin-bottom: 20px;
}
</style>