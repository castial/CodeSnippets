<template>
    <div>
        <ul>
            <li>
                <a href="javascript:void(0);" @click="goDetail(0)">透明边框</a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="goDetail(1)">多重边框</a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="goDetail(2)">边框内圆角</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        goDetail(item) {
            if (item === 0) {
                this.$router.push('translucent-border')
            }
            if (item === 1) {
                this.$router.push('multiple-border')
            }
            if (item === 2) {
                this.$router.push('border-radius')
            }
        }
    }
}
</script>