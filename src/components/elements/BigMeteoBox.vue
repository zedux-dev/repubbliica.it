<template>
    <div class="big-meteo-box" :style="!temperatura ? 'opacity: 0;' : ''">
        <div class="top">
            <div class="icon" :class="iconClass"></div>
            <div class="gradi">{{ temperatura }}°</div>
        </div>
        
        <div class="search">
            <input type="text" @input="handleInput" ref="input">

            <div class="search-icon">
                <svg><path d="M5.792 9.792c2.208 0 4-1.792 4-4s-1.792-4-4-4-4 1.792-4 4 1.792 4 4 4zm5.333 0l4.417 4.417-1.333 1.333-4.417-4.417v-.708l-.25-.25c-1 .875-2.333 1.375-3.75 1.375C2.584 11.542 0 9.001 0 5.792A5.78 5.78 0 0 1 5.792 0c3.209 0 5.75 2.583 5.75 5.792 0 1.417-.5 2.75-1.375 3.75l.25.25h.708z"></path></svg>
            </div>
        </div>

        <div v-if="searchResults.length > 0" class="cities-list">
            <div v-for="city in searchResults" class="city" :data-lat="city.lat" :data-lon="city.lon" :data-name="city.name" v-html="city.label" @click="handleClick"></div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';

export default {
    name: 'BigMeteoBox',
    data() {
        return {
            listaCitta: [{"name":"Alessandria","lat":44.9129069,"lon":8.6153899},{"name":"Ancona","lat":43.6170137,"lon":13.5170982},{"name":"Agrigento","lat":37.3122991,"lon":13.57465},{"name":"Aosta","lat":45.7370885,"lon":7.3196649},{"name":"Ascoli Piceno","lat":42.8546185,"lon":13.5755038},{"name":"Arezzo","lat":43.4628957,"lon":11.8781675},{"name":"Avellino","lat":40.9141958,"lon":14.7888764},{"name":"Asti","lat":44.900542,"lon":8.2068876},{"name":"Bari","lat":41.1257843,"lon":16.8620293},{"name":"Barletta","lat":41.3214976,"lon":16.2868696},{"name":"Bergamo","lat":45.6944947,"lon":9.6698727},{"name":"Belluno","lat":46.1375185,"lon":12.2181711},{"name":"Biella","lat":45.5664109,"lon":8.0542758},{"name":"Benevento","lat":41.1295587,"lon":14.7824639},{"name":"Bologna","lat":44.4938203,"lon":11.3426327},{"name":"Bolzano","lat":46.4981125,"lon":11.3547801},{"name":"Brescia","lat":45.5398022,"lon":10.2200214},{"name":"Cagliari","lat":39.2171994,"lon":9.113311},{"name":"Caltanissetta","lat":37.4899412,"lon":14.0631618},{"name":"Brindisi","lat":40.6395295,"lon":17.945526},{"name":"Carbonia","lat":39.165332,"lon":8.527834},{"name":"Chieti","lat":42.3446529,"lon":14.1659738},{"name":"Campobasso","lat":41.5597935,"lon":14.6602725},{"name":"Caserta","lat":41.0820827,"lon":14.334708},{"name":"Catania","lat":37.5023612,"lon":15.0873718},{"name":"Catanzaro","lat":38.9076353,"lon":16.5960465},{"name":"Como","lat":45.8115623,"lon":9.0830353},{"name":"Cosenza","lat":39.3099931,"lon":16.2501929},{"name":"Cremona","lat":45.1334796,"lon":10.0248716},{"name":"Cuneo","lat":44.389633,"lon":7.5479007},{"name":"Enna","lat":37.5667573,"lon":14.2807473},{"name":"Fermo","lat":43.1604184,"lon":13.7161408},{"name":"Ferrara","lat":44.8372737,"lon":11.6186451},{"name":"Crotone","lat":39.0806223,"lon":17.127196},{"name":"Firenze","lat":43.7698712,"lon":11.2555757},{"name":"Forlì","lat":44.2227278,"lon":12.041273},{"name":"Foggia","lat":41.4620482,"lon":15.5432595},{"name":"Genova","lat":44.40726,"lon":8.9338624},{"name":"Frosinone","lat":41.6419807,"lon":13.3469287},{"name":"Gorizia","lat":45.9441278,"lon":13.6252288},{"name":"Grosseto","lat":42.7597261,"lon":11.1137389},{"name":"Isernia","lat":41.600175,"lon":14.2383017},{"name":"Imperia","lat":43.8862958,"lon":8.0267106},{"name":"L'Aquila","lat":42.3489203,"lon":13.3979672},{"name":"La Spezia","lat":44.11200215,"lon":9.840156327896342},{"name":"Latina","lat":41.4672827,"lon":12.9037789},{"name":"Lecce","lat":40.3570373,"lon":18.1718482},{"name":"Lodi","lat":45.3138959,"lon":9.503263},{"name":"Lecco","lat":45.8553764,"lon":9.389605},{"name":"Livorno","lat":43.5507317,"lon":10.3091256},{"name":"Lucca","lat":43.8428381,"lon":10.502876},{"name":"Macerata","lat":43.3007275,"lon":13.4535897},{"name":"Mantova","lat":45.1566683,"lon":10.7917191},{"name":"Massa","lat":44.0359323,"lon":10.1395519},{"name":"Milano","lat":45.4641943,"lon":9.1896346},{"name":"Matera","lat":40.667029,"lon":16.6063265},{"name":"Modena","lat":44.6458885,"lon":10.9255707},{"name":"Monza","lat":45.5834418,"lon":9.2735257},{"name":"Messina","lat":38.1937571,"lon":15.5542082},{"name":"Oristano","lat":39.9059497,"lon":8.5916112},{"name":"Napoli","lat":40.8358846,"lon":14.2487679},{"name":"Nuoro","lat":40.3210601,"lon":9.3297339},{"name":"Novara","lat":45.4464036,"lon":8.619655},{"name":"Palermo","lat":38.1112268,"lon":13.3524434},{"name":"Padova","lat":45.4077172,"lon":11.8734455},{"name":"Parma","lat":44.8013678,"lon":10.3280833},{"name":"Pavia","lat":45.1860043,"lon":9.1546375},{"name":"Perugia","lat":43.1119613,"lon":12.3890104},{"name":"Pesaro","lat":43.9098114,"lon":12.9131228},{"name":"Pescara","lat":42.469613,"lon":14.2059269},{"name":"Piacenza","lat":45.0534751,"lon":9.6947461},{"name":"Pisa","lat":43.7159395,"lon":10.4018624},{"name":"Pistoia","lat":43.9336213,"lon":10.9174238},{"name":"Pordenone","lat":45.9562503,"lon":12.6597197},{"name":"Potenza","lat":40.6384046,"lon":15.8022077},{"name":"Ragusa","lat":36.9219828,"lon":14.7213455},{"name":"Prato","lat":43.880598,"lon":11.0969262},{"name":"Ravenna","lat":44.4161414,"lon":12.2017617},{"name":"Reggio Emilia","lat":44.6978389,"lon":10.6304971},{"name":"Rieti","lat":42.4025143,"lon":12.8604386},{"name":"Rimini","lat":44.0593886,"lon":12.5684371},{"name":"Reggio Calabria","lat":38.1035389,"lon":15.6397556},{"name":"Rovigo","lat":45.0698166,"lon":11.78882},{"name":"Salerno","lat":40.6803601,"lon":14.7594542},{"name":"Savona","lat":44.3080251,"lon":8.4810315},{"name":"Sassari","lat":40.7232643,"lon":8.5610074},{"name":"Roma","lat":41.8933203,"lon":12.4829321},{"name":"Siena","lat":43.3185536,"lon":11.3316533},{"name":"Siracusa","lat":37.0646139,"lon":15.2907196},{"name":"Sondrio","lat":46.1713553,"lon":9.8734274},{"name":"Taranto","lat":40.4712427,"lon":17.2432278},{"name":"Teramo","lat":42.6612893,"lon":13.6983524},{"name":"Trapani","lat":38.0174321,"lon":12.515992},{"name":"Terni","lat":42.5641417,"lon":12.6405466},{"name":"Treviso","lat":45.6658505,"lon":12.2455414},{"name":"Trieste","lat":45.6496485,"lon":13.7772781},{"name":"Trento","lat":46.0664228,"lon":11.1257601},{"name":"Torino","lat":45.0677551,"lon":7.6824892},{"name":"Udine","lat":46.0634632,"lon":13.2358377},{"name":"Venezia","lat":45.4371908,"lon":12.3345898},{"name":"Verbania","lat":45.9344082,"lon":8.5580062},{"name":"Varese","lat":45.817549,"lon":8.8263532},{"name":"Vercelli","lat":45.3251557,"lon":8.4227666},{"name":"Verona","lat":45.4384958,"lon":10.9924122},{"name":"Vicenza","lat":45.5488306,"lon":11.5478825},{"name":"Vibo Valentia","lat":38.6759329,"lon":16.0998186},{"name":"Viterbo","lat":42.4168441,"lon":12.1051148}],
            wmoCodes: {
                'parzialmente-nuvoloso': [1, 2],
                'pioggia-lieve': [51, 53, 55, 56, 57],
                'temporale': [95, 96, 99],
                'nuvoloso': [3],
                'rovesci': [61, 63, 65, 80, 81, 82],
                'neve': [66, 67, 77, 85, 86, 71, 73, 75],
                'nebbia': [45, 48],
                'sereno': [0],
            },
            // cityList: [],
            searchResults: [],
            currentCity: {},
            temperatura: null,
            iconClass: []
            // offset: 0,
        };
    },
    methods: {
        handleInput(e) {
            this.searchResults = [];

            let input = this.$refs.input.value;

            if(input != '') {
                this.listaCitta.forEach(loc => {
                    if(_.startsWith(loc.name.toLowerCase(), input.toLowerCase())) {
                        if(this.searchResults.length < 10) {
                            let sub = loc.name.slice(0, input.length);

                            this.searchResults.push({
                                name: loc.name,
                                lat: loc.lat,
                                lon: loc.lon,
                                label: '<b>' + sub + '</b>' + loc.name.replace(sub, ""),
                            });
                        }
                    }
                });
            }
        },
        handleClick(e) {
            this.searchResults = [];
            this.currentCity = {
                name: e.target.dataset.name,
                lat: e.target.dataset.lat,
                lon: e.target.dataset.lon
            };
            localStorage.setItem("meteo-city", JSON.stringify(this.currentCity));
            this.getMeteo();

            this.$refs.input.value = this.currentCity.name;
        },
        async getMeteo() {
            let json = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + this.currentCity.lat + '&longitude=' + this.currentCity.lon + '&current=temperature_2m,is_day,weather_code&timezone=auto&forecast_days=1');
            json = await json.json();

            let meteo = json.current;
            let codes = Object.keys(this.wmoCodes);

            this.iconClass = [];

            codes.forEach(code => {
                if(this.wmoCodes[code].includes(meteo.weather_code)) {
                    this.iconClass.push(code);
                }
            });

            this.iconClass.push(meteo.is_day ? 'day' : 'night');
            this.temperatura = meteo.temperature_2m;
        }
    },
    async mounted() {
        let t = localStorage.getItem("meteo-city");
        if(!_.isNil(t)) {
            this.currentCity = JSON.parse(t);
        } else {
            this.currentCity = {
                name: this.listaCitta[0].name,
                lat: this.listaCitta[0].lat,
                lon: this.listaCitta[0].lon
            };
        }

        this.$refs.input.value = this.currentCity.name;

        this.getMeteo();
    }
}
</script>

<style scoped>
    .big-meteo-box {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .big-meteo-box > .top {
        display: flex;
        align-items: center;
    }

    .big-meteo-box > .top > .icon {
        width: 40px;
        height: 40px;
        background-image: url('https://www.repstatic.it/cless/common/widget/meteo/2017-v1/img/sprite-meteo.svg');
        background-position: 0 -39px;
        transform: translate(-4px, -2px);
    }

    .big-meteo-box > .top > .gradi {
        font-size: 24px;
        margin-right: 8px;
    }

    .big-meteo-box > .search {
        position: relative;
        display: flex;
        height: 32px;
    }

    .big-meteo-box > .search > input {
        width: 180px;
        height: 40px;
        border: 0;
        border-bottom: 1px solid #f0f0f0;
        padding: 0 30px;
        font-size: 14px;
        outline: none;
        text-align: center;
    }

    .big-meteo-box > .search > input:focus {
        border-color: var(--primary-color);
        color: var(--primary-color);
    }

    .big-meteo-box > .search > input:focus ~ .search-icon {
        fill: var(--primary-color);
    }

    .big-meteo-box > .search > .search-icon {
        position: absolute;
        right: 0;
        top: calc(50% - 7px);
        height: 20px;
        width: 20px;
        scale: 0.9;
        cursor: pointer;
    }

    .big-meteo-box > .search > .search-icon > svg {
        width: 20px;
        height: 20px;
    }

    .cities-list {
        position: absolute;
        top: 80px;
        right: 0px;
        display: flex;
        flex-direction: column;
        z-index: 9999;
    }

    .city {
        display: flex;
        align-items: center;
        padding: 0 10px;
        width: 180px;
        height: 36px;
        border-bottom: 1px #ccc solid;
        font-size: 16px;
        font-weight: 400;
        cursor: pointer;
        background-color: white;
    }

    .city:hover {
        background-color: #e9e9e9;
    }

    .city > b {
        pointer-events: none;
    }

    .big-meteo-box > .top > .icon.parzialmente-nuvoloso { background-position: 0 -38px; }
    .big-meteo-box > .top > .icon.pioggia-lieve { background-position: 0 -76px; }
    .big-meteo-box > .top > .icon.temporale { background-position: 0 -114px; }
    .big-meteo-box > .top > .icon.nuvoloso { background-position: 0 -152px; }
    .big-meteo-box > .top > .icon.rovesci { background-position: 0 -190px; }
    .big-meteo-box > .top > .icon.neve { background-position: 0 -304px; }
    .big-meteo-box > .top > .icon.nebbia { background-position: 0 -380px; }
    .big-meteo-box > .top > .icon.sereno { background-position: 0 -608px; }
    .big-meteo-box > .top > .icon.night.sereno { background-position: 0 -456px; }
    .big-meteo-box > .top > .icon.night.parzialmente-nuvoloso { background-position: 0 -494px; }
    .big-meteo-box > .top > .icon.night.pioggia-lieve { background-position: 0 -532px; }
</style>