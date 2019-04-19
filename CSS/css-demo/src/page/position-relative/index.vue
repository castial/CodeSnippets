<template>
    <div>
        <h1>定位学习</h1>
        <p>这是一个基础的p元素</p>
        <p class="position-relative">这是一个相关定位的元素</p>
        <p>这是一个基础的p元素</p>
    </div>
</template>

<style scoped>

p {
    background: aqua;
    border: 3px solid blue;
    padding: 10px;
    margin: 10px;
}

.position-relative {
    position: relative;
    background: yellow;
    top: 30px;
    left: 30px;
}

</style>
