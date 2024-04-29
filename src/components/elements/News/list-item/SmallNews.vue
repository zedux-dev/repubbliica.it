<template>
<div class="small-news-container">
    <a v-if="image !== ''" :href="link" class="image">
        <img v-if="image" :src="image" :alt="title">
        <svg v-if="!image" viewBox="0 0 20 20" style="transform: scale(1.2);"><path fill-rule="evenodd" d="M8.833 4h.234c1.7 0 2.133.86 2.133 2.927C11.2 8.995 10.767 9.6 9 9.6h-.2V4h.033zm2.294 6.09c2.236-.438 3.259-1.597 3.259-3.257 0-2.255-1.566-3.633-4.761-3.633H4.8v.658c.99.062 1.086.376 1.086 1.315v9.991c0 .908-.223 1.222-1.086 1.316v.657h5.208v-.657c-.862-.063-1.086-.408-1.086-1.316v-4.76h.287c.671 0 1.215.25 1.406.845.288.971.288 3.038.671 4.385.384 1.253 1.31 1.566 2.493 1.566.926 0 1.565-.282 1.821-.438l-.032-.658c-.799.188-1.118-.125-1.47-2.35-.351-2.41-1.182-3.288-2.971-3.664zM2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm-.2.8h16.4a1 1 0 011 1v16.4a1 1 0 01-1 1H1.8a1 1 0 01-1-1V1.8a1 1 0 011-1z"></path></svg>
        <div v-if="!image" class="payblock">Contenuto riservato agli abbonati</div>
    </a>

    <div class="category">{{ category }}</div>
    <a :href="link" class="title">{{ title }}</a>
    <div v-if="author" class="author">di {{ author }}</div>
</div>
</template>

<script>
export default {
    name: 'SmallNews',
    components: {
    },
    props: {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        category: {
            type: String,
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
    },
};
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
}

.small-news-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    padding-bottom: 15px;
}

.small-news-container > .image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-bottom: 5px;
    background-color: rgba(0, 0, 0, 0.12);
}

.small-news-container > .image > .payblock {
    color: rgba(0, 0, 0, 0.4);
    font-size: 13px;
    padding: 0 20px;
    text-align: center;
}

.small-news-container > .image > svg {
    height: 24px;
    width: 24px;
    fill: rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
}

.small-news-container > .image > img {
    aspect-ratio: 16 / 9;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.small-news-container > .category {
    text-transform: uppercase;
    color: var(--primary-color);
    font-size: 14px;
    letter-spacing: 0.4px;
    font-weight: 500;
    margin: 8px 0;
}

.small-news-container > .title {
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    margin-bottom: 12px;
}

.small-news-container > .author {
    font-family: "Eugenio Serif";
    font-size: 13px;
    line-height: 14px;
    font-style: italic;
    color: #676767;
}

@media screen and (max-width: 550px) {
    .small-news-container {
        border-bottom: 1px solid #d3d3d3;
    }
}

</style>