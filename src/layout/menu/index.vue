<template>
    <template v-for="(item) in menuList" :key="item.path">
      <!-- 没有子路由 -->
       <template v-if="!item.children">
       <el-menu-item v-if="!item.meta.hidden" :index="item.path" @click="goRoute">
        <!-- <i :class="item.icon"></i> -->
         <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
        <template #title>
          <span>{{item.meta.title}}</span>
        </template>
       </el-menu-item>
       </template>
       <!-- 有子路由但是只有一个子路由 -->
        <template v-if="item.children&&item.children.length==1" >
       <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden" @click="goRoute">
        <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
        <template #title>
          <span>{{item.children[0].meta.title}}</span>
        </template>
       </el-menu-item>
       </template>
        <!-- 有子路由并且有多个子路由 -->
       <el-sub-menu :index="item.path" v-if="item.children&&item.children.length>1">
         <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{item.meta.title}}</span>
         </template>
         <Menu :menuList="item.children"></Menu>
       </el-sub-menu>
    </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
defineProps(['menuList'])
let $router = useRouter();
const goRoute = (vc: { index: string }) => {
    $router.push(vc.index);
 }
</script>
<script lang="ts">
export default {
    // eslint-disable-next-line vue/no-reserved-component-names
    name:'Menu'
}
</script>
<style scoped>

</style>