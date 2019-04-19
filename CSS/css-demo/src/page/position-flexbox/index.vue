<template>
    <div>
        <section>
            <div class="box" v-for="(item, index) in boxList" :key="index">{{ item }}</div>
        </section>

        <button class="create" @click="createBox">Crate Box</button>
        <button class="reset" @click="resetDemo">Reset Demo</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            boxList: ['这是一个盒子', '这是一个盒子', '这是一个盒子']
        }
    },
    methods: {
        createBox() {
            this.boxList.push('这是一个盒子')
        },
        resetDemo() {
            while (this.boxList.length == 0) {
                section.removeChild(section.firstChild)
            }
            this.boxList = ['这是一个盒子', '这是一个盒子', '这是一个盒子']
        }
    }
}
</script>
<style scoped>

section {
    width: 93%;
    height: 240px;
    margin: 20px auto;
    background: purple;
    display: flex;
}

.box {
    color: white;
    background: orange;
    flex: 1;
    margin-right: 10px;
    text-shadow: 1px 1px 1px black;
}

.box:last-child {
    margin-right: 0;
}

section, .box {
    border: 5px solid rgba(0, 0, 0, 0.85);
    padding: 10px;
}

</style>
