<template>
    <div>
        <ul>
            <li>
                <a href="javascript:void(0);" @click="goDetail">背景和边框</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
        goDetail() {
            this.$router.push('/background-border')
        }
    }
}
</script>