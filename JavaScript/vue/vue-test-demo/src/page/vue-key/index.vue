<template>
    <div>
        <ul>
            <li v-for="item in dataList" :key="item.id">{{ item.name }}</li>
        </ul>
        <button @click="addData">添加数据</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [],
            startTime: 0
        }
    },
    updated() {
        const nowDate = new Date().getTime()
        console.log('update time: ' + (nowDate - this.startTime))
    },
    beforeUpdate() {
        this.startTime = new Date().getTime()
    },
    methods: {
        addData() {
            const list = []
            for(let i=0; i<100000; i++) {
                list.push({
                    name: i * 2,
                    id: i
                })
            }
            this.dataList = list
        }
    },
}
</script>