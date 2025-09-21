<template>
    <div>
        <!-- 路由组件出口的位置 -->
        <router-view v-slot="{Component}">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.fade-enter-from{
  opacity: 0;
  transform: rotate(0deg);
} 
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
    opacity: 1;
    transform: rotate(0deg);
}

</style>