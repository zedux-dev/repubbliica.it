<template>
    <div class="newsletter-wrapper">
        <div class="boxed">
            <div class="title">Newsletter <svg xmlns="http://www.w3.org/2000/svg" id="r-icon-newsletter-plane" viewBox="0 0 32 31"><g stroke="#F56100" fill="#F56100" fill-rule="evenodd" stroke-linejoin="round"><path d="M1 15.8717949L30 1l-3.8157895 23.7948718-13.7368421-4.4615385L26.1842105 4.71794872 9.39473684 18.8461538zM12.4473684 22.5641026V30l4.5789474-5.9487179z"/></g></svg></div>
    
            <div class="row">
                <div class="col">
                    <div class="top">
                        <a href="https://quotidiano.repubblica.it/edicola/profilo/newsletter.jsp" class="subtitle">Scopri tutte le newsletter per gli abbonati premium</a>
                        <svg xmlns="http://www.w3.org/2000/svg" id="r-icon-newsletter-plane" viewBox="0 0 32 31"><g stroke="#F56100" fill="#F56100" fill-rule="evenodd" stroke-linejoin="round"><path d="M1 15.8717949L30 1l-3.8157895 23.7948718-13.7368421-4.4615385L26.1842105 4.71794872 9.39473684 18.8461538zM12.4473684 22.5641026V30l4.5789474-5.9487179z"/></g></svg>
                    </div>

                    <div class="content">I contenuti originali sono inclusi nell'abbonamento premium</div>
                </div>

                <div class="col">
                    <div class="top">
                        <a href="https://quotidiano.repubblica.it/edicola/profilo/newsletter.jsp" class="subtitle">Toghe</a>
                    </div>

                    <div class="border"></div>

                    <div class="author">di Liana Milella</div>
                    <div class="content">Magistrati e politica, leggi e tribunali: il mondo della giustizia italiana analizzato da Liana Milella, giornalista che per Repubblica segue la cronaca giudiziaria dal 1988</div>

                    <a href="https://quotidiano.repubblica.it/edicola/profilo/newsletter.jsp" class="link">Potete iscrivervi qui</a>
                </div>

                <div class="col">
                    <div class="top">
                        <a href="https://quotidiano.repubblica.it/edicola/profilo/newsletter.jsp" class="subtitle">Outlook</a>
                    </div>

                    <div class="border"></div>

                    <div class="author">di Walter Galbiati</div>
                    <div class="content">La newsletter settimanale di Repubblica che analizza l’economia, finanza e mercati internazionali</div>

                    <a href="#" class="link">Potete iscrivervi qui</a>
                </div>

                <div class="col">
                    <div class="top">
                        <a href="https://quotidiano.repubblica.it/edicola/profilo/newsletter.jsp" class="subtitle">Storie di Storia</a>
                    </div>

                    <div class="border"></div>

                    <div class="author">di Francesco De Leo</div>
                    <div class="content">Un appuntamento quindicinale con i grandi e i piccoli eventi della Storia</div>

                    <a href="#" class="link">Le puntate precedenti</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Newsletter',
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
    .newsletter-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .newsletter-wrapper > .boxed {
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid #d5d5d5;
        border-bottom: 0;
        border-top: 0;
    }

    .newsletter-wrapper .title {
        border-top: 2px solid #f56100;
        border-bottom: 1px solid #d5d5d5;
        font-size: 32px;
        color: black;
        font-family: "Eugenio Book";
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 65px;
    }

    .newsletter-wrapper .title > svg {
        height: 24px;
        margin-left: 10px;
        margin-bottom: 2px;
    }

    .newsletter-wrapper .row {
        display: flex;
        width: 100%;
    }
    
    .newsletter-wrapper .col {
        display: flex;
        flex-direction: column;
        width: calc(100% / 4);
        border-right: 1px solid #d5d5d5;
        padding: 20px 14px;
    }

    .newsletter-wrapper .col:last-child {
        border-right: 0;
    }

    .newsletter-wrapper .col > .top {
        width: 100%;
        min-height: 80px;
        display: flex;
        justify-content: space-between;
    }
    
    .newsletter-wrapper .subtitle {
        max-width: 140px;
        margin-bottom: 20px;
        font-size: 20px;
        color: black;
        font-weight: 500;
        text-decoration: none;
        font-family: "Eugenio Book";
    }

    .newsletter-wrapper .subtitle:hover {
        color: var(--primary-color);
    }

    .newsletter-wrapper .col > .top > svg {
        height: 55px;
    }

    .newsletter-wrapper .col > .border {
        height: 2px;
        width: 100px;
        background-color: #f56100;
        margin-bottom: 14px;
    }

    .newsletter-wrapper .col .author {
        font-size: 12px;
        color: #555;
        margin-bottom: 20px;
    }

    .newsletter-wrapper .col .content {
        font-size: 14px;
        line-height: 17px;
        margin-bottom: 10px;
    }

    .newsletter-wrapper .col .link {
        color: var(--primary-color);
        font-weight: 500;
        text-decoration: none;
        font-size: 14px;
    }

    @media screen and (max-width: 780px) {
        .newsletter-wrapper {
            display: none;
        }
    }
</style>