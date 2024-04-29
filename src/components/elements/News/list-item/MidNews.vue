<template>
<div class="mid-news-container">
    <a v-if="image !== ''" :href="link" class="image">
        <img :src="image" :alt="title">
    </a>

    <div v-if="category" class="category">{{ category }}</div>
    <a :href="link" class="title">{{ title }}</a>
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

a:hover {
    color: var(--primary-color);
}

.mid-news-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 28px;
    padding-bottom: 10px;
    border-bottom: 1px solid #7d7d7d;
}

.mid-news-container > .image {
    width: 100%;
    aspect-ratio: 16 / 9;
    margin-bottom: 5px;
}

.mid-news-container > .image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 16 / 9;
}

.mid-news-container > .category {
    text-transform: uppercase;
    color: var(--primary-color);
    font-size: 12px;
    text-align: center;
    letter-spacing: 0.4px;
    font-weight: 500;
    margin: 8px 0;
}

.mid-news-container > .title {
    font-family: "Eugenio Serif";
    font-size: 18px;
    text-align: center;
    line-height: 22px;
    font-weight: 500;
    margin-bottom: 10px;
    padding: 0 20px;
}
</style>