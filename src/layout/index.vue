<template>
    <div class="layout_container">
      <!-- 左侧菜单 -->
       <div class="layout_slider">
         <Logo></Logo>
         <!-- 滚动组件 -->
          <el-scrollbar class="scrollbar">
            <!-- 菜单组件 -->
            <el-menu>
              <Menu :menuList="userStore.menuRoutes"></Menu>
            </el-menu>
          </el-scrollbar>
       </div>
       <!-- 顶部 -->
       <div class="layout_tabbar">456</div>
       <!-- 内容展示 -->
       <div class="layout_main">789</div>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue';
//获取用户相关的小仓库
import  useUserStore  from '../store/modules/user';
let userStore = useUserStore();
</script>

<style lang="scss" scoped>
 .layout_container {
    width: 100%;
    height: 100vh;
    background-color: red;
    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background-color:$base-menu-background;
        .scrollbar {
            width: 100%;
            height: calc(100vh - 50px);
        }
    }
    .layout_tabbar {
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        position: fixed;
        left: $base-menu-width;
        top: 0;
        background-color: yellow;
    }
    .layout_main {
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        position: absolute;
        left: $base-menu-width;
        top: $base-tabbar-height;
        background-color: green;
        overflow-y: auto;
        padding: 20px;
    }
 }  
</style>