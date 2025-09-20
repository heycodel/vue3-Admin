<template>
    <template v-for="(item) in menuList" :key="item.path">
      <!-- 没有子路由 -->
       <template v-if="!item.children">
       <el-menu-item v-if="!item.meta.hidden" :index="item.path">
        <!-- <i :class="item.icon"></i> -->
        <template #title>
          <span>{{item.meta.title}}</span>
        </template>
       </el-menu-item>
       </template>
       <!-- 有子路由但是只有一个子路由 -->
        <template v-if="item.children&&item.children.length==1" >
       <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden">
        <template #title>
          <span>{{item.children[0].meta.title}}</span>
        </template>
       </el-menu-item>
       </template>
        <!-- 有子路由并且有多个子路由 -->
       <el-sub-menu :index="item.path" v-if="item.children&&item.children.length>1">
         <template #title>
            <span>{{item.meta.title}}</span>
         </template>
         <Menu :menuList="item.children"></Menu>
       </el-sub-menu>
    </template>
</template>

<script setup lang="ts">
 defineProps(['menuList'])
</script>
<script lang="ts">
export default {
    // eslint-disable-next-line vue/no-reserved-component-names
    name:'Menu'
}
</script>
<style scoped>

</style>