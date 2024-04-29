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
        <div class="not-found">
            <div class="boxed">
                <h1 class="title">Ops! Pagina non trovata</h1>
                <div class="message">
                    Sembra che quello che stai cercando sia stato spostato o non è mai esistito.<br>
                    Controlla l'indirizzo inserito o in alternativa <a href="/" class="link-back">vai alla Homepage</a>
                </div>
            </div>

            <div class="boxed">
                <h2 class="title">Ops! Page not found</h2>
                <div class="message">
                    Looks like the content you're looking for has moved or never existed.<br>
                    Check the address you typed or <a href="/" class="link-back">go to the Homepage</a>
                </div>
            </div>
        </div>
    </div>

    <FooterBlock />
</template>

<script>
import Navbar from '../layout-parts/Navbar.vue';
import FooterBlock from '../layout-parts/FooterBlock.vue';

export default {
    name: '4040',
    components: {
        Navbar,
        FooterBlock
    },
}
</script>

<style scoped>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 51px - 165px);
}

.not-found > .boxed {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #999;
    border-top: 0;
    padding: 20px;
}

.not-found > .boxed:last-child {
    border-top: 0;
    border-bottom: 0;
}

.title {
    font-family: "Eugenio Book";
    font-weight: 500;
    font-size: 28px;
    text-align: center;
}

.message {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
}

.link-back {
    color: var(--primary-color);
    text-decoration: none;
}
</style>