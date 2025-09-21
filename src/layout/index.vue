<template>
    <div class="layout_container">
      <!-- 左侧菜单 -->
       <div class="layout_slider" :class="{fold:layOutSettingStore.fold?true:false}">
         <Logo></Logo>
         <!-- 滚动组件 -->
          <el-scrollbar class="scrollbar">
            <!-- 菜单组件 -->
            <el-menu :default-active="$route.path" :collapse="layOutSettingStore.fold?true:false">
              <Menu :menuList="userStore.menuRoutes"></Menu>
            </el-menu>
          </el-scrollbar>
       </div>
       <!-- 顶部 -->
       <div class="layout_tabbar" :class="{fold:layOutSettingStore.fold?true:false}">
          <TabBar></TabBar>
       </div>
       <!-- 内容展示 -->
       <div class="layout_main" :class="{fold:layOutSettingStore.fold?true:false}">
        <Main ></Main>
       </div>
    </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue';
import Main from './main/index.vue';
import TabBar from './tabbar/index.vue';
//获取用户相关的小仓库
import  useUserStore  from '../store/modules/user';
let userStore = useUserStore();
import useLayoutSettingStore from '../store/modules/setting';
let layOutSettingStore = useLayoutSettingStore();
</script>

<style lang="scss" scoped>
 .layout_container {
    width: 100%;
    height: 100vh;
    .layout_slider {
        width: $base-menu-width;
        height: 100vh;
        background-color:$base-menu-background;
        transition: all 0.3s ease;
        .scrollbar {
            width: 100%;
            height: calc(100vh - 50px);
            .el-menu{
              border-right: none;
            }
        }
        &.fold {
            width: 70px;
        }
    }
    .layout_tabbar {
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        position: fixed;
        left: $base-menu-width;
        top: 0;
        transition: all 0.3s ease;
        &.fold {
            width: calc(100vw - 50px);
            left: 70px;
        }
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
        transition: all 0.3s ease;
        &.fold {
            width: calc(100vw - 50px);
            left: 70px;
        }
    }
 }  
</style>