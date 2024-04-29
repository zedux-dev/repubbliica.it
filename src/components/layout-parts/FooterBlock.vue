<template>
    <div class="footer">
        <div class="boxed">
            <div class="top">
                <div class="text">Il network</div>
            </div>
        </div>
        
        <div class="mid">
            <div class="boxed">
                <a target="_blank" class="mid-link" href="https://www.repubblica.it/static/servizi/mappasito.html?ref=hpfoot">Mappa del sito</a>
                <a target="_blank" class="mid-link" href="https://www.repubblica.it/static/servizi/gerenza.html?ref=hpfoot">Redazione</a>
                <a target="_blank" class="mid-link hide-mobile" href="https://www.repubblica.it/static/servizi/scrivi.html?ref=hpfoot">Scriveteci</a>
                <a target="_blank" class="mid-link hide-mobile" href="mailto:visualdesk@kataweb.it">Per inviare foto e video</a>
                <a target="_blank" class="mid-link hide-mobile" href="https://ilmioabbonamento.gedi.it/testata/repubblica">Servizio Clienti</a>
                <a target="_blank" class="mid-link" href="https://www.manzoniadvertising.com/it/?ref=hpfoot">Pubblicità</a>
                <a target="_blank" class="mid-link hide-mobile">Gestione Cookie</a>
                <a target="_blank" class="mid-link hide-mobile" href="https://www.repubblica.it/corporate/privacy/privacy.html">Privacy</a>
                <a target="_blank" class="mid-link" href="https://www.repubblica.it/corporate/privacy/repubblica/cookie-policy.html">Cookie Policy</a>
                <a target="_blank" class="mid-link hide-mobile" href="https://www.repubblica.it/static/trust/ethics/">Codice Etico e Best Practices</a>
            </div>
        </div>

        <div class="bottom">
            <div class="boxed">
                <a href="https://www.gedispa.it" target="_blank" class="gedi-link">GEDI News Network S.p.A.</a> - P.Iva 01578251009 - ISSN 2499-0817
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterBlock',
    components: {
    },
    props: {},
    data() {
        return {

        };
    },
};
</script>

<style scoped>
    .footer {
        overflow-x: hidden;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 2px solid #dedede;
    }

    .footer > .boxed {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .footer .top {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 50px;
    }

    .footer .top > .text {
        position: absolute;
        display: flex;
        align-items: center;
        top: -2px;
        left: 20px;
        border-top: 2px solid #454545;
        font-size: 22px;
        height: 50px;
        font-weight: 700;
        text-transform: uppercase;
        color: #454545;
    }

    .footer .mid {
        display: flex;
        justify-content: center;
        background-color: #3c3d41;
        width: 100%;
        height: 52px;
    }

    .footer .mid .boxed {
        width: 100%;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .footer .mid-link {
        text-decoration: none;
        color: #c7c7c7;
        font-size: 12px;
        font-weight: 400;
        cursor: pointer;
        margin: 0 6px;
        white-space: nowrap;
    }

    .footer .bottom {
        width: 100%;
        height: 60px;
        background-color: #4f5054;
        display: flex;
        justify-content: center;
    }

    .footer .bottom .boxed {
        width: 100%;
        padding: 0 15px;
        display: flex;
        align-items: center;
        color: rgb(215, 215, 215);
        font-size: 12px;
        letter-spacing: 0.4px;
        white-space: nowrap;
    }

    .footer .bottom .boxed > a {
        position: relative;
        color: rgb(215, 215, 215);
        font-size: 12px;
        white-space: nowrap;
        letter-spacing: 0.4px;
        text-decoration: none;
        margin-right: 4px;
        padding: 2px 5px;
    }

    .footer .bottom .boxed > a::after {
        position: absolute;
        left: 5px;
        bottom: -6px;
        content: "";
        width: calc(100% - 10px);
        height: 2px;
        background-color: #c00000;
    }

    .footer .bottom .boxed > a:hover {
        color: #c00000;
        background-color: white;
    }

    .footer .bottom .boxed > a:hover::after {
        background: none;
    }

    @media screen and (max-width: 780px) {
        .footer .top,
        .hide-mobile {
            display: none;
        }
    }
</style>