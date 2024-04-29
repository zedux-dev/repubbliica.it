<template>
    <div class="news-layout-3">
        <div class="boxed">
            <div class="col-left">
                <div class="col-title">{{ title }}</div>

                <div class="news-row">
                    <div class="big-column">
                        <BigNews
                            v-for="item in newsList.big"
                            :title="item.title"
                            :image="item.image"
                            :link="item.link"
                            :author="item.author"
                            :category="item.category"
                        />
                    </div>

                    <div class="small-column">
                        <SmallNews
                            v-for="item in newsList.small"
                            :title="item.title"
                            :image="item.image"
                            :link="item.link"
                            :author="item.author"
                            :category="item.category"
                        />
                    </div>
                </div>
            </div>

            <div class="col-right">
                <div class="col-title">{{ titleSide }}</div>

                <MidNews
                    v-for="item in newsList.mid"
                    :title="item.title"
                    :image="item.image"
                    :link="item.link"
                    :author="item.author"
                    :category="item.category"
                />
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
import BigNews from '../list-item/BigNews.vue';
import SmallNews from '../list-item/SmallNews.vue';
import MidNews from '../list-item/MidNews.vue';

export default {
    name: 'List3Col',
    components: {
        BigNews,
        SmallNews,
        MidNews,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        titleSide: {
            type: String,
            required: true,
        },
        list: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {

        };
    },
    computed: {
        newsList() {
            let list = _.cloneDeep(this.list);
            let bigList = [];
            let smallList = [];

            let midList = list.slice(0, 4);

            list.slice(4, list.length).forEach((el, i) => {
                if(i % 2 === 0) {
                    if(bigList.length > 1) {
                        el.image = '';
                    }

                    bigList.push(el);
                } else {
                    if(smallList.length > 1) {
                        el.image = '';
                    }

                    smallList.push(el);
                }
            });

            return {
                big: bigList,
                mid: midList,
                small: smallList,
            }
        }
    }
};
</script>

<style scoped>
.news-layout-3 {
    width: 100%;
    display: flex;
    justify-content: center;
}

.news-layout-3 > .boxed {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border: 1px solid #b9b9b9;
    border-top: 0;
    border-bottom: 0;
}

.news-layout-3 .col-left {
    width: calc(100% - 334px - 20px);
}

.news-row {
    width: 100%;
    display: flex;
}

.big-column {
    display: flex;
    flex-direction: column;
    width: calc(100% - 220px - 20px);
    margin-right: 20px;
}

.small-column {
    display: flex;
    flex-direction: column;
    width: 220px;
}

.news-layout-3 .col-right {
    position: sticky;
    top: -1px;
    width: 334px;
    height: fit-content;
    background-color: #efefef;
    padding: 10px;
    margin-top: 20px;
    border-top: 1px solid #b9b9b9;
}

.news-layout-3 .col-right > .col-title {
    border: 0;
    margin-top: 0;
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

@media screen and (max-width: 900px) {
    .news-layout-3 .col-left {
        width: calc(100% - 234px - 20px);
    }

    .news-layout-3 .col-right {
        width: 234px;
    }
}

@media screen and (max-width: 780px) {
    .news-layout-3 .col-left {
        width: 100%;
    }

    .news-layout-3 .col-right {
        display: none;
    }

    .news-layout-3 > .boxed {
        flex-direction: column;
    }
}

@media screen and (max-width: 550px) {
    .news-layout-3 .col-left {
        width: 100%;;
    }

    .news-layout-3 .news-row {
        flex-direction: column
    }

    .news-layout-3 .col-left .big-column {
        width: 100%;
        margin-right: 0;
        margin-bottom: 50px;
    }

    .news-layout-3 .col-left .small-column {
        width: 100%;
    }

    .news-layout-3 .col-right {
        display: none;
    }

    .news-layout-3 > .boxed {
        flex-direction: column;
    }
}
</style>

<style>
.big-news-container:last-child,
.mid-news-container:last-child,
.small-news-container:last-child {
    border-bottom: 0;
    margin-bottom: 0;
}
</style>