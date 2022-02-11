<template>
    <img :src="require('../assets/carousel/' + item_data.img)">
</template>

<script>
export default {
    name: "SliderItems",
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>

</style>