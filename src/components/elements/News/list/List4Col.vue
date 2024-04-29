<template>
    <div class="news-layout-4">
        <div class="boxed">
            <div class="col-left">
                <div class="col-title">{{ title }}</div>

                <div class="news-column">
                    <SmallNews
                        v-for="item in list"
                        :title="item.title"
                        :image="item.image"
                        :link="item.link"
                        :author="item.author"
                        :category="item.category"
                        :fallbackImages="fallbackImages"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SmallNews from '../list-item/SmallNews.vue';

export default {
    name: 'List4Col',
    components: {
        SmallNews
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        list: {
            type: Array,
            required: true,
        },
        fallbackImages: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        };
    }
};
</script>

<style scoped>
.news-layout-4 {
    width: 100%;
    display: flex;
    justify-content: center;
}

.news-layout-4 > .boxed {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border: 1px solid #b9b9b9;
    border-top: 0;
    border-bottom: 0;
}

.news-layout-4 .col-left {
    width: 100%;
}

.news-column {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}

.col-title {
    font-size: 18px;
    font-weight: 500;
    height: 37px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #b9b9b9;
    margin-top: 20px;
}
</style>

<style>
.big-news-container:last-child,
.mid-news-container:last-child,
.small-news-container:last-child {
    border-bottom: 0;
    margin-bottom: 0;
}

.news-column > .small-news-container {
    width: calc((100% / 4) - 8px);
    margin-right: 10px;
}

.news-column > .small-news-container:nth-child(4n) {
    margin-right: 0;
}

@media screen and (max-width: 780px) {
    .news-column > .small-news-container {
        width: calc((100% / 3) - 8px);
        margin-right: 10px;
    }

    .news-column > .small-news-container:nth-child(3n) {
        margin-right: 0;
    }

    .news-column > .small-news-container:nth-child(4n) {
        margin-right: 10px;
    }
}

@media screen and (max-width: 550px) {
    .news-column > .small-news-container {
        width: 100%;
        margin-right: 0;
    }
}
</style>