<template>
    <div class="tabbar">
        <div class="tabbar_left">
            <!-- 左侧图标 -->
            <el-icon style="margin-right: 10px;cursor: pointer;" @click="changeIcon">
                <component :is="layOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
            </el-icon>
            <!-- 左侧面包屑 -->
             <el-breadcrumb separator-icon ="ArrowRight">
                <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
                <el-breadcrumb-item>数据大屏</el-breadcrumb-item>
            </el-breadcrumb>

        </div>
        <div class="tabbar_right">
            <el-button  size="small" icon="Refresh" circle></el-button>
            <el-button  size="small" icon="FullScreen" circle></el-button>
            <el-button  size="small" icon="Setting" circle></el-button>
            <img src="../../../public/logo.png" style="width: 20px;height: 20px;margin: 0 10px;" alt="">
            <el-dropdown>
    <span class="el-dropdown-link">
      Admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '../../store/modules/setting';
let layOutSettingStore = useLayoutSettingStore();
const changeIcon = () => {
    layOutSettingStore.fold = !layOutSettingStore.fold;
}

</script>

<style scoped lang="scss">
.tabbar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #ddd;
    .tabbar_left{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .tabbar_right{
        display: flex;
        align-items: center;
        margin-right: 20px;
        &> * {
            margin-left: 10px;
        }
    }
}   
</style>