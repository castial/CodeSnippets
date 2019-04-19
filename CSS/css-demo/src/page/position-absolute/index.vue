<template>
    <div>
        <h1>定位学习</h1>
        <p>这是一个基础的p元素</p>
        <p class="position-absolute">这是一个绝对定位的元素</p>
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

.position-absolute {
    position: absolute;
    background: yellow;
    top: 30px;
    left: 30px;
}

</style>
