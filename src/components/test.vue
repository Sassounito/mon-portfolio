<template>
    <section class="page-test">
        <p class="test">test</p>
    </section>
</template>

<script>
export default {
    name: 'MonComposant'
};
</script>

<style scoped>
.test{
    font-size: 500px;
}

@media screen and (max-width: 500px) {
    h1 {
        font-size: large;
        padding: 10%;
    }

    .desc {
        font-size: x-small;
        padding: 0% 10% 2% 10%;
    }

    img {
        padding-top: 5%;
        width: 50%;
    }
}
</style>