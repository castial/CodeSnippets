<template>
    <div>
        <ul>
            <li>
                <a href="javascript:void(0);" @click="goDetail(0)">Vue中key的作用</a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="goDetail(1)">Vue中key用index的风险</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        goDetail(item) {
            if (item === 0) {
                this.$router.push('vue-key')
            }
            if (item === 1) {
                this.$router.push('vue-key-index')
            }
        }
    }
}
</script>