<template>
    <li v-on:click="clickItem"> {{ content }} </li>
</template>

<script>
export default {
    props: ['content', 'index'],
    methods: {
        clickItem: function() {
            this.$emit('delete', this.index, this.content)
        }
    },
}
</script>