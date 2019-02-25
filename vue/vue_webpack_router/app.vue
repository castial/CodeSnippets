<template>
    <el-container>
        <el-header>Header</el-header>
        <el-main>
            <el-row>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </el-row>
            <p>
                {{ message }}
            </p>
            <router-link to="/account">Account</router-link>
            <router-link to="/goodlist">GoodList</router-link>
            <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
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

