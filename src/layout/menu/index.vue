<template>
    <template v-for="(item) in menuList" :key="item.path">
       <el-menu-item v-if="!item.children" :index="item.path">
        <!-- <i :class="item.icon"></i> -->
        <template #title>
          <span>{{item.meta.title}}</span>
        </template>
       </el-menu-item>
       <el-menu-item v-if="item.children&&item.children.length==1" :index="item.children[0].path">
        <template #title>
          <span>{{item.children[0].meta.title}}</span>
        </template>

       </el-menu-item>
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