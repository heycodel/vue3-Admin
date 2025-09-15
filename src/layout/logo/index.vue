<template>
    <div class="logo" v-if="!setting.logoHidden">
        <img :src="setting.logo" alt="logo" />
        <p>{{setting.title}}</p>
    </div>
</template>

<script setup lang="ts">
import setting from '../../setting'
</script>

<style scoped>
.logo {
    width: 100%;
    color: #333;
    display: flex;
    align-items: center;
    padding: 20px;
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    p {
        margin-left: 10px;
        font-size: 18px;
        font-weight: bold;
    }
}
</style> 