<template>
    <div>
        <ul>
            <li v-for="(item, index) in dataList" :key="index">{{ item.name }}
                <button @click="removeItem(index)">删除</button>
            </li>
        </ul>   
        <button @click="insertItem">增加</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [],
            count: 0
        }
    },
    methods: {
        insertItem() {
            const item = {
                name: '测试数据' + this.count
            }
            this.dataList.push(item)
            this.count++
        },
        removeItem(index) {
            this.dataList.splice(index, 1)
        }
        
    },
}
</script>