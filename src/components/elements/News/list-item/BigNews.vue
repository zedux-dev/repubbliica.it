<template>
<div class="big-news-container">
    <a v-if="image" :href="link" class="image">
        <img :src="image" :alt="title">
    </a>

    <div v-if="category" class="category">{{ category }}</div>
    <a :href="link" class="title">{{ title }}</a>
    <div v-if="author" class="author">di {{ author }}</div>
</div>
</template>

<script>
export default {
    name: 'BigNews',
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

.big-news-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
}

.big-news-container > .image {
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-bottom: 5px;
}

.big-news-container > .image > img {
    aspect-ratio: 16 / 9;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.big-news-container > .category {
    text-transform: uppercase;
    color: var(--primary-color);
    font-size: 14px;
    letter-spacing: 0.4px;
    font-weight: 500;
    margin: 8px 0;
}

.big-news-container > .title {
    font-family: "Eugenio Serif";
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    margin-bottom: 10px;
}

.big-news-container > .author {
    font-family: "Eugenio Serif";
    font-size: 13px;
    line-height: 14px;
    font-style: italic;
    color: #676767;
}
</style>