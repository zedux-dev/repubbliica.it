<template>
    <div class="top-menu">
        <div class="boxed">
            <a href="#" v-for="item in menu" class="top-menu-item">{{ item.name }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopMenu',
    components: {
    },
    props: {
        
    },
    data() {
        return {
            menu: [
                {
                    id: 0,
                    name: "Sezioni",
                    links: [
                        { name: "Commenti", url: "https://www.repubblica.it/commenti" },
                        { name: "Cronaca", url: "https://www.repubblica.it/cronaca" },
                        { name: "Cultura", url: "https://www.repubblica.it/cultura" },
                        { name: "Design", url: "https://www.repubblica.it/design/" },
                        { name: "Economia", url: "https://www.repubblica.it/economia" },
                        { name: "Esteri", url: "https://www.repubblica.it/esteri" },
                        { name: "Green&Blue", url: "https://www.repubblica.it/green-and-blue" },
                        { name: "Il Gusto", url: "https://www.repubblica.it/il-gusto" },
                        { name: "Italian Tech", url: "https://www.repubblica.it/tecnologia" },
                        { name: "La Zampa", url: "https://www.repubblica.it/la-zampa" },
                        { name: "Londra", url: "https://www.repubblica.it/londra" },
                        { name: "Moda e Beauty", url: "https://www.repubblica.it/moda-e-beauty" },
                        { name: "Mondo Solidale", url: "https://www.repubblica.it/solidarieta" },
                        { name: "Motori", url: "https://www.repubblica.it/motori" },
                        { name: "Podcast", url: "https://www.repubblica.it/podcast" },
                        { name: "Politica", url: "https://www.repubblica.it/politica" },
                        { name: "Video di Repubblica.it", url: "https://video.repubblica.it" },
                        { name: "Repubblica@Scuola", url: "https://scuola.repubblica.it" },
                        { name: "Robinson", url: "https://www.repubblica.it/robinson" },
                        { name: "Rubriche", url: "https://www.repubblica.it/rubriche" },
                        { name: "Salute", url: "https://www.repubblica.it/salute" },
                        { name: "Scienze", url: "https://www.repubblica.it/scienze" },
                        { name: "Scuola", url: "https://www.repubblica.it/scuola" },
                        { name: "Serie Tv", url: "https://www.repubblica.it/serietv" },
                        { name: "Spettacoli", url: "https://www.repubblica.it/spettacoli" },
                        { name: "Sport", url: "https://www.repubblica.it/sport" },
                        { name: "Vaticano", url: "https://www.repubblica.it/vaticano" },
                        { name: "Viaggi", url: "https://www.repubblica.it/viaggi" },
                        { name: "D", url: "https://d.repubblica.it" },
                        { name: "Venerdì", url: "https://www.repubblica.it/venerdi" },
                    ]
                },
                {
                    id: 1,
                    name: "Edizioni Locali",
                    links: [
                        { name: "Bari", url: "https://bari.repubblica.it" },
                        { name: "Bologna", url: "https://bologna.repubblica.it" },
                        { name: "Firenze", url: "https://firenze.repubblica.it" },
                        { name: "Genova", url: "https://genova.repubblica.it" },
                        { name: "Milano", url: "https://milano.repubblica.it" },
                        { name: "Napoli", url: "https://napoli.repubblica.it" },
                        { name: "Palermo", url: "https://palermo.repubblica.it" },
                        { name: "Parma", url: "https://parma.repubblica.it" },
                        { name: "Roma", url: "https://roma.repubblica.it" },
                        { name: "Torino", url: "https://torino.repubblica.it" },
                    ]
                },
                {
                    id: 2,
                    name: "IL Quotidiano",
                    links: [
                        { name: "Sfoglia il giornale in pdf", url: "https://quotidiano.repubblica.it/edicola/edicola.jsp" },
                        { name: "Homepage Premium", url: "https://www.repubblica.it/premium" },
                        { name: "Giochi", url: "https://www.repubblica.it/giochi" },
                    ]
                },
                {
                    id: 3,
                    name: "Servizi",
                    links: [
                        { name: "Newsletter", url: "https://quotidiano.repubblica.it/edicola/profilo/newsletter.jsp?where=newsletterpremium" },
                        { name: "Biblioteca", url: "https://quotidiano.repubblica.it/edicola/biblioteca.jsp" },
                        { name: "Annunci", url: "https://annunci.repubblica.it/italia" },
                        { name: "Codici Sconto", url: "https://www.repubblica.it/codici-sconto" },
                        { name: "Giochi e Scommesse", url: "https://www.repubblica.it/giochi-e-scommesse" },
                        { name: "Il mio libro", url: "https://ilmiolibro.kataweb.it" },
                        { name: "Meteo", url: "https://meteo.repubblica.it" },
                        { name: "Oroscopo", url: "https://oroscopo.d.repubblica.it" },
                        { name: "Joy.it", url: "https://www.joy.it" },
                        { name: "Dizionari", url: "https://dizionari.repubblica.it" },
                        { name: "Aste", url: "https://www.entietribunali.kataweb.it" },
                        { name: "Mymovies", url: "https://www.mymovies.it" },
                        { name: "Preventivi auto", url: "https://www.drivek.it" },
                        { name: "Programmi Tv", url: "https://www.repubblica.it/spettacoli/tv-radio" },
                        { name: "Lavoro", url: "https://www.repubblica.it/economia/miojob/candidati/1427579" },
                        { name: "Necrologie", url: "https://necrologie.repubblica.it" },
                        { name: "Consigli.it", url: "https://www.consigli.it" },
                        { name: "Ricette", url: "https://la.repubblica.it/cucina" },
                    ]
                },
                {
                    id: 4,
                    name: "A-Z",
                    links: [
                        { name: "Annunci", url: "https://annunci.repubblica.it/italia/" },
                        { name: "Aste", url: "https://www.entietribunali.kataweb.it/" },
                        { name: "Bari", url: "https://bari.repubblica.it" },
                        { name: "Biblioteca", url: "https://quotidiano.repubblica.it/edicola/biblioteca.jsp" },
                        { name: "Bologna", url: "https://bologna.repubblica.it" },
                        { name: "Commenti", url: "https://www.repubblica.it/commenti/" },
                        { name: "Consigli.it", url: "https://www.consigli.it/" },
                        { name: "Cronaca", url: "https://www.repubblica.it/cronaca/" },
                        { name: "Cultura", url: "https://www.repubblica.it/cultura/" },
                        { name: "D", url: "https://d.repubblica.it/" },
                        { name: "Design", url: "https://design.repubblica.it/" },
                        { name: "Dizionari", url: "https://dizionari.repubblica.it/" },
                        { name: "Economia", url: "https://www.repubblica.it/economia/" },
                        { name: "Esteri", url: "https://www.repubblica.it/esteri/" },
                        { name: "Europa", url: "https://www.repubblica.it/dossier/esteri/fondi-strutturali-europei-progetti-italia/" },
                        { name: "Firenze", url: "https://firenze.repubblica.it" },
                        { name: "Genova", url: "https://genova.repubblica.it" },
                        { name: "Giochi", url: "https://www.repubblica.it/giochi/" },
                        { name: "Giochi senza barriere", url: "https://www.repubblica.it/dossier/sport/giochi-senza-barriere" },
                        { name: "Giochi e Scommesse", url: "https://www.repubblica.it/giochi-e-scommesse/" },
                        { name: "Green&amp;Blue", url: "https://www.repubblica.it/green-and-blue/" },
                        { name: "Homepage Premium", url: "https://www.repubblica.it/premium/" },
                        { name: "Il Gusto", url: "https://www.repubblica.it/il-gusto/" },
                        { name: "Il mio libro", url: "https://ilmiolibro.kataweb.it/" },
                        { name: "Joy.it", url: "https://www.joy.it/" },
                        { name: "La Zampa", url: "https://www.repubblica.it/la-zampa/" },
                        { name: "Lavoro", url: "https://www.repubblica.it/economia/miojob/candidati/1427579" },
                        { name: "Londra", url: "https://www.repubblica.it/londra/" },
                        { name: "Meteo", url: "https://meteo.repubblica.it/" },
                        { name: "Milano", url: "https://milano.repubblica.it" },
                        { name: "Moda e Beauty", url: "https://www.repubblica.it/moda-e-beauty" },
                        { name: "Mondo Solidale", url: "https://www.repubblica.it/solidarieta/" },
                        { name: "Motori", url: "https://www.repubblica.it/motori/" },
                        { name: "Mymovies", url: "https://www.mymovies.it/" },
                        { name: "Napoli", url: "https://napoli.repubblica.it" },
                        { name: "Necrologie", url: "https://necrologie.repubblica.it/" },
                        { name: "Newsletter", url: "https://quotidiano.repubblica.it/edicola/profilo/newsletter.jsp?where=newsletterpremium" },
                        { name: "Oncologia", url: "https://www.repubblica.it/oncologia/" },
                        { name: "Oroscopo", url: "https://oroscopo.d.repubblica.it/" },
                        { name: "Palermo", url: "https://palermo.repubblica.it" },
                        { name: "Parma", url: "https://parma.repubblica.it" },
                        { name: "Podcast", url: "https://www.repubblica.it/podcast/" },
                        { name: "Politica", url: "https://www.repubblica.it/politica/" },
                        { name: "Programmi Tv", url: "https://www.repubblica.it/spettacoli/tv-radio/" },
                        { name: "RepTv", url: "https://video.repubblica.it/" },
                        { name: "Repubblica dei cavalli", url: "https://www.repubblica.it/dossier/cronaca/la-repubblica-dei-cavalli/" },
                        { name: "Repubblica@Scuola", url: "https://scuola.repubblica.it/" },
                        { name: "Ricette", url: "https://la.repubblica.it/cucina/" },
                        { name: "Robinson", url: "https://www.repubblica.it/robinson/" },
                        { name: "Roma", url: "https://roma.repubblica.it" },
                        { name: "Rubriche", url: "https://www.repubblica.it/rubriche/" },
                        { name: "Salute", url: "https://www.repubblica.it/salute/" },
                        { name: "Salute Seno", url: "https://www.repubblica.it/dossier/salute/saluteseno/" },
                        { name: "Scienze", url: "https://www.repubblica.it/scienze/" },
                        { name: "Scuola", url: "https://www.repubblica.it/scuola/" },
                        { name: "Serie Tv", url: "https://www.repubblica.it/serietv" },
                        { name: "Sfoglia il giornale in pdf", url: "https://quotidiano.repubblica.it/edicola/edicola.jsp" },
                        { name: "Spettacoli", url: "https://www.repubblica.it/spettacoli/" },
                        { name: "Sport", url: "https://www.repubblica.it/sport/" },
                        { name: "Tecnologia", url: "https://www.repubblica.it/tecnologia/" },
                        { name: "Torino", url: "https://torino.repubblica.it" },
                        { name: "Vaticano", url: "https://www.repubblica.it/vaticano/" },
                        { name: "Venerdì", url: "https://www.repubblica.it/venerdi/" },
                        { name: "Viaggi", url: "https://www.repubblica.it/viaggi/" }
                    ]
                },
            ],
            currentMenu: null
        }
    },
    mounted() {
        this.menu.forEach((menu) => {
            
        });
    },
    methods: {
        handleFocus(e) {
            this.currentMenu = this.menu[e.target.dataset.id];
        },
        handleBlur(e) {
            this.currentMenu = null;
        }
    }
}
</script>

<style scoped>
.top-menu {
    display: flex;
    justify-content: center;
    width: 100%;
}

.top-menu > .boxed {
    position: relative;
    width: 100%;
    height: 40px;
    background-color: #eaf4ff;
    border-top: 0;
    border: 1px solid #999;
    border-bottom: 2px solid #f75b00;
    display: flex;
    align-items: center;
    justify-content: center;
}

.top-menu-item {
    margin: 0 14px;
    font-size: 14px;
    text-decoration: none;
    color: black;
}

.top-menu-item:hover {
    color: var(--primary-color);
}

@media screen and (max-width: 780px) {
    .top-menu {
        display: none;
    }
}
</style>