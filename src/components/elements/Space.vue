<template>
    <div class="spacer-block">
        <div class="boxed" :style="'height: ' + height + 'px;'"></div>
    </div>
</template>

<script>
export default {
    name: "Space",
    props: {
        height: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.spacer-block {
    width: 100%;
    display: flex;
    justify-content: center;
}

.spacer-block > .boxed {
    display: flex;
    justify-content: center;
    background: transparenti;
    width: 100%;
    border-left: 1px solid #999;
    border-right: 1px solid #999;
}
</style>