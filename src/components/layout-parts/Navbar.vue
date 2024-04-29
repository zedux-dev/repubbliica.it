<template>
    <div class="slim-header">
        <NavbarButton
            icon="bell"
            text="Notifiche"
        />

        <NavbarButton
            text="Abbonati"
            class="showtext"
        />

        <NavbarButton
            icon="premium"
        />
    </div>

    <div class="navbar">
        <div class="boxed">
            <div class="left-zone">
                <NavbarButton
                    icon="menu"
                    text="Menu"
                    @click="openMenu"
                />
                <NavbarButton
                    icon="search"
                    text="Cerca"
                    class="hidemobile"
                    @click="openSearch = !openSearch"
                />
                <NavbarButton
                    icon="bell"
                    text="Notifiche"
                    link="https://quotidiano.repubblica.it/edicola/profilo/newsletter.jsp"
                    class="hidemobile"
                />
            </div>

            <div class="center-zone">
                <a href="/" class="navbar-logo">
                    <svg style="width: 138px; height: 30px; overflow: hidden"><path d="M5.145 20.11V0h-.95L0 2.017v.6l1.06 1.05V20.11c0 .947-.061 1.345-1.042 1.405v1.01h6.168v-1.01c-.98-.06-1.041-.458-1.041-1.405M12.893 19.034c0 .917-.515 1.65-1.302 1.65-.817 0-1.21-.684-1.21-2.157 0-1.724.484-2.482 1.428-3.166l1.084-.752v4.425zm4.116.611v-7.328c0-3.155-1.847-4.738-5.412-4.738-2.79 0-4.667 1.437-4.667 3.405 0 1.07.727 2.12 2.028 2.12 1.18 0 1.786-.763 1.786-1.71 0-1.205-1.065-1.51-1.065-1.908 0-.427.526-.629 1.204-.629 1.435 0 2.01.69 2.01 2.42v2.079l-2.458 1.13C7.7 15.74 6.537 16.937 6.537 19.23c0 2.348 1.574 3.6 3.571 3.6 1.21 0 2.391-.733 3.057-1.894.272 1.192 1.18 1.895 2.452 1.895 1.12 0 2.118-.49 2.602-1.131v-1.014a1.063 1.063 0 0 1-.575.183c-.424 0-.635-.367-.635-1.223zM30.052 10.648h-.272V1.962h.375c2.488 0 3.105 1.326 3.105 4.548 0 3.22-.635 4.138-3.208 4.138m7.609 6.601c-.571-3.822-1.852-5.232-4.612-5.807 3.414-.69 4.957-2.506 4.957-5.104 0-3.532-2.391-5.696-7.221-5.696h-7.294v1.002c1.483.122 1.634.612 1.634 2.048v15.776c0 1.406-.362 1.925-1.634 2.048v1.008h7.923v-1.008c-1.301-.123-1.634-.642-1.634-2.048v-7.536h.454c1.029 0 1.852.403 2.119 1.35.417 1.504.434 4.81 1.029 6.907.567 1.998 1.967 2.488 3.783 2.488 1.392 0 2.39-.428 2.784-.703l-.06-1.008c-1.21.305-1.705-.215-2.228-3.717"></path><path d="M44.955 8.832c.737 0 1.295.95 1.295 3.4v.451h-2.87c.059-3.002.73-3.85 1.575-3.85m1.725 11.301c-1.858 0-3.14-1.972-3.29-6.173h6.595v-.459c0-3.783-2.052-5.953-4.824-5.953-3.257 0-5.8 2.995-5.8 7.885 0 4.615 2.422 7.408 5.709 7.408 2.451 0 4.025-1.271 5.018-3.79l-.878-.648c-.702 1.144-1.368 1.73-2.53 1.73M57.073 21.564c-1.011 0-1.453-.825-1.453-2.261v-7.42c0-1.193.635-2.048 1.531-2.048 1.199 0 1.616 1.87 1.616 6.357 0 3.594-.218 5.372-1.694 5.372m1.87-13.985c-1.453 0-2.536.727-3.323 1.901v-1.9h-.95l-4.195 1.723v.6l1.06 1.05v14.138c0 .948-.061 1.345-1.09 1.406v1.009h6.295v-1.009c-1.06-.06-1.12-.458-1.12-1.406v-2.567a5.28 5.28 0 0 0 1.882.337c3.456 0 5.623-3.167 5.623-8.393 0-4.646-1.719-6.889-4.182-6.889M75.286 19.132V7.579h-.938l-4.056.972v.856c.824.336.908 1.021.908 2.2v7.036c0 1.045-.623 1.888-1.55 1.888-.847 0-1.18-.574-1.18-1.57V7.579h-.932l-4.225.972v.856c.908.152 1.077.855 1.077 2.2v6.412c0 3.368 1.447 4.872 3.56 4.872 1.398 0 2.505-.776 3.25-1.999v1.773h.842l4.2-.63v-1.008c-.872-.19-.956-.453-.956-1.895M82.755 21.564c-1.017 0-1.459-.702-1.459-1.894v-7.787c0-1.193.636-2.048 1.532-2.048 1.198 0 1.616 1.87 1.616 6.357 0 3.594-.218 5.372-1.69 5.372m1.84-13.985c-1.428 0-2.511.752-3.298 1.901V0h-.956l-4.183 2.017v.6l1.054 1.05v17.127c1.113 1.156 3.105 2.067 5.72 2.067 3.698 0 5.87-3.167 5.87-8.393 0-4.646-1.718-6.889-4.206-6.889M95.333 21.564c-1.017 0-1.46-.702-1.46-1.894v-7.787c0-1.193.636-2.048 1.532-2.048 1.199 0 1.617 1.87 1.617 6.357 0 3.594-.218 5.372-1.69 5.372m1.84-13.985c-1.427 0-2.511.752-3.298 1.901V0h-.957l-4.182 2.017v.6l1.053 1.05v17.127c1.114 1.156 3.105 2.067 5.72 2.067 3.698 0 5.872-3.167 5.872-8.393 0-4.646-1.72-6.889-4.207-6.889M106.948 20.11V0h-.95l-4.194 2.017v.6l1.058 1.05V20.11c0 .947-.06 1.345-1.04 1.405v1.01h6.167v-1.01c-.98-.06-1.04-.458-1.04-1.405M111.64 5.538a2.254 2.254 0 0 0 2.257-2.25 2.261 2.261 0 0 0-2.258-2.28c-1.253 0-2.288 1.046-2.288 2.28 0 1.235 1.035 2.25 2.288 2.25M113.637 20.11V7.58h-.95l-4.195 1.723v.6l1.06 1.05v9.157c0 .947-.062 1.345-1.042 1.405v1.01h6.168v-1.01c-.98-.06-1.041-.458-1.041-1.405M121.263 11.363c0 .947.545 1.742 1.726 1.742 1.301 0 1.997-1.076 1.997-2.219 0-1.992-1.646-3.307-3.983-3.307-3.39 0-6.186 2.653-6.186 8.13 0 4.278 2.288 7.182 5.617 7.182 2.421 0 3.577-1.65 4.364-3.698l-1.368-.71c-.617 1.468-1.15 2.275-2.246 2.275-1.707 0-2.396-2.262-2.396-7.005 0-3.973.932-4.896 2.306-4.896.672 0 1.156.25 1.156.63 0 .397-.987.647-.987 1.876M131.735 19.034c0 .917-.515 1.65-1.302 1.65-.817 0-1.21-.684-1.21-2.157 0-1.724.484-2.482 1.428-3.166l1.084-.752v4.425zm4.751 1.834c-.423 0-.635-.367-.635-1.223v-7.328c0-3.155-1.846-4.738-5.412-4.738-2.79 0-4.666 1.437-4.666 3.405 0 1.07.726 2.12 2.027 2.12 1.18 0 1.786-.763 1.786-1.71 0-1.205-1.066-1.51-1.066-1.908 0-.427.527-.629 1.205-.629 1.434 0 2.01.69 2.01 2.42v2.079l-2.457 1.13c-2.736 1.254-3.899 2.451-3.899 4.743 0 2.348 1.574 3.6 3.571 3.6 1.211 0 2.391-.733 3.057-1.894.272 1.192 1.18 1.895 2.451 1.895 1.12 0 2.12-.49 2.603-1.131v-1.014a1.064 1.064 0 0 1-.575.183z"></path></svg>
                </a>
            </div>

            <div class="right-zone">
                <NavbarButton
                    text="Gedi Smile"
                    link="https://smile.gedidigital.it"
                    class="hidemobile"
                />

                <NavbarButton
                    icon="premium"
                    link="https://www.repubblica.it/premium"
                    class="hidemobile"
                />

                <NavbarButton
                    icon="login"
                    text="Accedi"
                    link="https://login.gedi.it/clp/login.php"
                />
            </div>

        </div>
    </div>

    <div class="search-form" :class="openSearch ? 'open' : ''">
        <div class="boxed">
            <form method="GET" action="/ricerca/repubblica" class="nav-search-form">
                <input name="search" type="text" placeholder="Cerca articoli o argomenti" class="nav-search-input">
                <button class="nav-search-submit"><svg><path d="M5.792 9.792c2.208 0 4-1.792 4-4s-1.792-4-4-4-4 1.792-4 4 1.792 4 4 4zm5.333 0l4.417 4.417-1.333 1.333-4.417-4.417v-.708l-.25-.25c-1 .875-2.333 1.375-3.75 1.375C2.584 11.542 0 9.001 0 5.792A5.78 5.78 0 0 1 5.792 0c3.209 0 5.75 2.583 5.75 5.792 0 1.417-.5 2.75-1.375 3.75l.25.25h.708z"></path></svg></button>
            </form>

            <button class="close-search" @click="openSearch = false">
                <svg id="r-icon-close"><g><path d="M13.645 1.707L2.332 13.02.917 11.606 12.231.292z"></path><path d="M13.645 11.606L2.332.292.917 1.707 12.231 13.02z"></path></g></svg>
            </button>
        </div>
    </div>
    
    <div class="navbar-updated">10 Aprile 2024 - Aggiornato alle 15.02</div>


    <div class="main-sidebar" ref="sidebar" :class="menuOpen ? 'open': ''">
        <div class="sidebar-content">
            <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 16px;">
                <div class="menu-logo">
                    <svg><path fill="#000" fill-rule="nonzero" d="M14.772 3.192h.903c5.827 0 7.221 3.03 7.221 10.48 0 7.53-1.477 9.659-7.55 9.659h-.574V3.192zm7.632 21.858c8.043-1.637 11.654-5.812 11.654-11.788C34.058 5.075 28.478 0 17.152 0H0v2.374c3.447.245 3.857 1.391 3.857 4.748v36.511c0 3.274-.82 4.42-3.857 4.748v2.374h18.547v-2.374c-3.036-.245-3.857-1.473-3.857-4.748V26.196h1.067c2.38 0 4.35.9 4.924 3.11.985 3.439 1.067 11.134 2.38 15.964 1.313 4.583 4.596 5.73 8.863 5.73 3.283 0 5.58-.982 6.483-1.637l-.163-2.374c-2.873.737-3.94-.49-5.17-8.595-1.15-8.678-4.187-11.953-10.67-13.344z"></path></svg>
                </div>

                <form action="/ricerca/repubblica" method="GET" class="search-wrapper">
                    <input name="search" class="search-input" type="text" placeholder="Cerca su Repubblica" required>
                    <button class="search-submit"><svg><path d="M5.792 9.792c2.208 0 4-1.792 4-4s-1.792-4-4-4-4 1.792-4 4 1.792 4 4 4zm5.333 0l4.417 4.417-1.333 1.333-4.417-4.417v-.708l-.25-.25c-1 .875-2.333 1.375-3.75 1.375C2.584 11.542 0 9.001 0 5.792A5.78 5.78 0 0 1 5.792 0c3.209 0 5.75 2.583 5.75 5.792 0 1.417-.5 2.75-1.375 3.75l.25.25h.708z"></path></svg></button>
                </form>

                <button class="close-search" @click="closeMenu()">
                    <svg id="r-icon-close"><g><path d="M13.645 1.707L2.332 13.02.917 11.606 12.231.292z"></path><path d="M13.645 11.606L2.332.292.917 1.707 12.231 13.02z"></path></g></svg>
                </button>
            </div>

            <div style="width: 100%; display: flex; justify-content: center; align-items: center; padding: 16px; margin-bottom: 30px;">
                <BigMeteoBox />
            </div>

            <div class="scroller">
                <a href="https://www.repubblica.it/premium/" class="striped-banda">
                    <svg viewBox="0 0 20 20" style="transform: scale(1.2);"><path fill-rule="evenodd" d="M8.833 4h.234c1.7 0 2.133.86 2.133 2.927C11.2 8.995 10.767 9.6 9 9.6h-.2V4h.033zm2.294 6.09c2.236-.438 3.259-1.597 3.259-3.257 0-2.255-1.566-3.633-4.761-3.633H4.8v.658c.99.062 1.086.376 1.086 1.315v9.991c0 .908-.223 1.222-1.086 1.316v.657h5.208v-.657c-.862-.063-1.086-.408-1.086-1.316v-4.76h.287c.671 0 1.215.25 1.406.845.288.971.288 3.038.671 4.385.384 1.253 1.31 1.566 2.493 1.566.926 0 1.565-.282 1.821-.438l-.032-.658c-.799.188-1.118-.125-1.47-2.35-.351-2.41-1.182-3.288-2.971-3.664zM2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm-.2.8h16.4a1 1 0 011 1v16.4a1 1 0 01-1 1H1.8a1 1 0 01-1-1V1.8a1 1 0 011-1z"></path></svg>
                    Contenuti per gli abbonati
                </a>

                <a href="https://smile.gedidigital.it/" class="striped-banda">
                    Gedi Smile
                </a>

                <div class="striped-banda">Sezioni</div>
                <div class="navbar-subvoices">
                    <a class="nav-sublink" href="https://quotidiano.repubblica.it/edicola/biblioteca.jsp">Biblioteca</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/commenti/">Commenti</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/cronaca/">Cronaca</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/cultura/">Cultura</a>
                    <a class="nav-sublink" href="https://design.repubblica.it/">Design</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/economia/">Economia</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/dossier/giochi-online/enigmistica">Enigmistica</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/esteri/">Esteri</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/giochi/">Giochi</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/green-and-blue/">Green&amp;Blue</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/il-gusto/">Il Gusto</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/tecnologia/">Italian Tech</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/la-zampa/">La Zampa</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/londra/">Londra</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/moda-e-beauty">Moda e Beauty</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/solidarieta/">Mondo Solidale</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/motori/">Motori</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/podcast/">Podcast</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/politica/">Politica</a>
                    <a class="nav-sublink" href="https://video.repubblica.it/">RepTv</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/rubriche/">Rubriche</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/salute">Salute</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/scienze/">Scienze</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/scuola/">Scuola</a>
                    <a class="nav-sublink" href="https://scuola.repubblica.it/">Repubblica@Scuola</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/robinson/">Robinson</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/serietv">Serie Tv</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/spettacoli/">Spettacoli</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/sport/">Sport</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/vaticano/">Vaticano</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/viaggi/">Viaggi</a><a href="#" class="navbar-sublink"></a>
                </div>

                <div class="striped-banda">Speciali</div>
                <div class="navbar-subvoices">
                    <a class="nav-sublink" href="https://www.repubblica.it/oncologia/">Oncologia</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/dossier/salute/saluteseno/">Salute Seno</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/dossier/sport/giochi-senza-barriere">Giochi senza barriere</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/dossier/esteri/fondi-strutturali-europei-progetti-italia/ ">Europa, Italia</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/dossier/cronaca/la-repubblica-dei-cavalli">Repubblica dei cavalli</a>
                </div>

                <div class="striped-banda">Inserti</div>
                <div class="navbar-subvoices">
                    <a class="nav-sublink" href="https://www.repubblica.it/economia/affari-e-finanza/">Affari&amp;Finanza</a>
                    <a class="nav-sublink" href="https://d.repubblica.it/">D</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/venerdi/">Il Venerdi</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/robinson/">Robinson</a>
                </div>

                <div class="striped-banda">Servizi</div>
                <div class="navbar-subvoices">
                    <a class="nav-sublink" href="https://annunci.repubblica.it/italia/">Annunci</a>
                    <a class="nav-sublink" href="https://www.entietribunali.kataweb.it/">Aste</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/codici-sconto/">Codici Sconto</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/giochi-e-scommesse/">Giochi e Scommesse</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/spettacoli/tv-radio/">Guida Tv</a>
                    <a class="nav-sublink" href="https://ilmiolibro.kataweb.it/">Ilmiolibro</a>
                    <a class="nav-sublink" href="https://www.repubblica.it/economia/miojob/?utm_source=hp.repubblica.it&amp;utm_medium=linktr&amp;utm_campaign=intragruppo&amp;ref=RHHD-M">Lavoro</a>
                    <a class="nav-sublink" href="https://meteo.repubblica.it/">Meteo</a>
                    <a class="nav-sublink" href="https://necrologie.repubblica.it/">Necrologie</a>
                    <a class="nav-sublink" href="https://oroscopo.d.repubblica.it/">Oroscopo</a>
                    <a class="nav-sublink" href="https://quotidiano.repubblica.it/edicola/edicola.jsp">Edicola</a>
                    <a class="nav-sublink" href="https://www.joy.it/">Joy.it</a>
                    <a class="nav-sublink" href="https://www.consigli.it/">Consigli.it</a>
                    <a class="nav-sublink" href="https://dizionari.repubblica.it/">Dizionari</a>
                    <a class="nav-sublink" href="https://la.repubblica.it/cucina/">Ricette</a>
                    <a class="nav-sublink" href="https://quotidiano.repubblica.it/edicola/profilo/newsletter.jsp?where=newsletterpremium">Newsletter</a>
                    <a class="nav-sublink" href="https://www.drivek.it/">Preventivi auto</a>
                </div>
            </div>

            <div class="navbar-subvoices" style="position: absolute; bottom: 0; width: 100%; background-color: white;">
                <a class="nav-sublink big" href="https://www.repubblica.it/static/servizi/gerenza.html">Redazione</a>
                <a class="nav-sublink big" href="https://www.repubblica.it/static/servizi/scrivi.html">Scriveteci</a>
            </div>
        </div>

        <div class="sidebar-backdrop" @click="closeMenu"></div>
    </div>
</template>

<script>
import NavbarButton from '../elements/NavbarButton.vue';
import BigMeteoBox from '../elements/BigMeteoBox.vue';

export default {
    name: 'Navbar',
    components: {
        NavbarButton,
        BigMeteoBox,
    },
    props: {},
    data() {
        return {
            openSearch: false,
            menuOpen: false,
        };
    },
    methods: {
        openMenu() {
            this.$refs.sidebar.style.display = 'flex';
            setTimeout(() => {
                this.menuOpen = true;
            }, 100);
        },
        closeMenu() {
            this.menuOpen = false;
            setTimeout(() => {
                this.$refs.sidebar.style.display = 'none';
            }, 300);
        }
    }
};
</script>

<style>
.navbar {
    position: sticky;
    top: 0;
    z-index: 99999;
    width: 100%;
    height: 50px;
    background-color: white;
    border-bottom: 1px #e9e9ee solid;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
}

.navbar > .boxed {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.left-zone,
.center-zone,
.right-zone {
    width: calc((100% - 250px) / 2);
    display: flex;
    align-items: center;
}

.left-zone {
    justify-content: flex-start;
}

.center-zone {
    justify-content: center;
    width: 150px;
}

.right-zone {
    justify-content: flex-end;
}

.left-zone > .navbar-button {
    border-right: 1px solid #e9e9ee;
}

.left-zone > .navbar-button:last-child,
.right-zone > .navbar-button:first-child {
    border: 0;
}

.right-zone > .navbar-button {
    border-left: 1px solid #e9e9ee;
}

.right-zone > .navbar-button {
    flex-direction: row-reverse;
}

.right-zone > .navbar-button > .icon {
    margin-right: 0;
    margin-left: 8px;
}

.navbar-logo {
    height: 30px;
    margin-top: 4px;
}

.navbar-logo:hover {
    fill: black;
}

.slim-header {
    display: none;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 34px;
    border-top: 1px #e9e9ee solid;
    background-color: #f9f9f9;
}

.showtext > .text {
    display: block;
    font-size: 11px;
}

.navbar-updated {
    background-color: white;
    border-top: 1px solid #ebebeb;
    display: none;
    justify-content: center;
    align-items: center;
    font-family: "Eugenio Serif";
    font-size: 13px;
    line-height: 13px;
    font-weight: 500;
    height: 46px;
}

.search-form {
    overflow: hidden;
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    max-height: 0;
    top: 50px;
    left: 0;
    z-index: 9999;
    border-bottom: 1px #e9e9ee solid;
    background-color: #f9f9f9;
    transition: .2s ease max-height;
}

.search-form.open {
    max-height: 70px;
}

.search-form > .boxed {
    display: flex;
    width: 100%;
}

.nav-search-form {
    position: relative;
    display: flex;
    height: 48px;
    width: calc(100% - 58px);
    margin-right: 10px;
}

.nav-search-input {
    width: 100%;
    border: 1px #e9e9ee solid;
    color: #4d4d4d;
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 3px;
    padding-right: 50px;
    outline: none;
}

.nav-search-submit {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 48px;
    height: 48px;
}

.nav-search-submit > svg {
    width: 20px;
    height: 20px;
    transform: translateY(2px);
}

.close-search {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    width: 48px;
    height: 48px;
    background: none;
    cursor: pointer;
}

.close-search:hover > svg {
    fill: var(--primary-color);
}

.close-search > svg {
    width: 20px;
    height: 20px;
    transition: .3s ease fill;
}

.close-search > svg > g {
    transform: translate(3px, 3px);
}

.main-sidebar {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999998;
}

.sidebar-content {
    position: absolute;
    left: -500px;
    width: 500px;
    height: 100%;
    background-color: white;
    border-right: 1px solid #000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 999999;
    transition: .3s ease left;
}

.main-sidebar.open > .sidebar-content {
    left: 0;
}

.main-sidebar.open > .sidebar-backdrop {
    opacity: 1;
}

.sidebar-content .scroller {
    overflow: auto;
    padding-bottom: 53px;
}

.menu-logo {
    width: 50px;
    height: 50px;
}

.menu-logo > svg {
    width: 50px;
    height: 50px;
}

.sidebar-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999997;
    background-color: #ffffffa1;
    opacity: 0;
    transition: .3s ease opacity;
}

.search-wrapper {
    position: relative;
}

.search-input {
    width: 210px;
    height: 45px;
    background: white;
    border: 1px solid #9e9e9e;
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
    height: 45px;
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

.striped-banda {
    width: 100%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    color: inherit;
    border-top: 1px solid black;
    padding: 16px;
    font-weight: 500;
}

.striped-banda > svg {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}

.navbar-subvoices {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.nav-sublink {
    position: relative;
    color: #484646;
    font-size: 13px;
    padding: 12px 16px;
    text-decoration: none;
    border-top: 1px #efefef solid;
    width: 50%;
}

.nav-sublink:hover::after {
    width: 100%;
}

.nav-sublink::after {
    position: absolute;
    content: "";
    bottom: -1px;
    left: 0;
    height: 1px;
    width: 0%;
    background-color: var(--primary-color);
    z-index: 2;
    transition: .4s ease width;
}

.nav-sublink.big {
    font-size: 16px;
    border-top: 1px solid black;
    padding: 16px;
}

.nav-sublink.big:first-child {
    border-right: 1px solid #000;
}

.nav-sublink.big::after {
    display: none;
}

@media screen and (max-width: 780px) {
    .hidemobile {
        display: none;
    }

    .navbar-updated {
        display: flex;
    }

    .slim-header {
        display: flex;
    }

    .sidebar-content {
        width: 100%;
        left: -100%;
    }

    .sidebar-content .search-input {
        height: 34px;
        width: 180px;
        padding-right: 35px;
    }

    .sidebar-content .search-submit svg {
        transform: scale(0.8) translateY(2px);
    }

    .sidebar-content .search-submit {
        height: 34px;
        width: 34px;
    }
}
</style>