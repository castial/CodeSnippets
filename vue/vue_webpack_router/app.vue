<template>
    <div>
        <p>
            {{ message }}
        </p>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodlist">GoodList</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: 'Hello Vue'
        }
    }
}
</script>

