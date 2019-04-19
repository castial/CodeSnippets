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
             <li>
                <a href="javascript:void(0);" @click="goDetail(3)">浮动布局</a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="goDetail(4)">相对布局</a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="goDetail(5)">绝对布局</a>
            </li>
            <li>
                <a href="javascript:void(0);" @click="goDetail(6)">弹性盒子布局</a>
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
            if (item === 3) {
                this.$router.push('float')
            }
            if (item === 4) {
                this.$router.push('relative')
            }
            if (item === 5) {
                this.$router.push('absolute')
            }
            if (item === 6) {
                this.$router.push('flexbox')
            }
        }
    }
}
</script>