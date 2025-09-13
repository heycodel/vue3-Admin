<template>
  <div class="login-form">
    <el-form :model="loginForm" ref="formRef" label-width="100px">
      <el-form-item
        label="用户名"
        prop="userName"
        :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]"
      >
        <el-input
          placeholder="请输入用户名"
          v-model="loginForm.userName"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
      >
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          native-type="submit"
          @click="login"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import useUserStore from "../../store/modules/user";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import getTime from "../../utils/time";
const userStore = useUserStore();
let $router = useRouter();
//定义变量加载按钮
let loading = ref(false);
let loginForm = reactive({
  userName: "admin",
  password: "111111",
});
const login = async () => {
  loading.value = true;
  // 处理登录逻辑
  try {
    await userStore.userLogin(loginForm);
    $router.push("/home");
    ElNotification({
      title: `HI,${getTime()} 欢迎回来`,
      message: "登录成功",
      type: "success",
    });
    loading.value = false;
  } catch (error) {
    loading.value = false;
    console.error(error);
    ElNotification({
      title: "错误",
      message: error instanceof Error ? error.message : String(error),
      type: "error",
    });
  }
};      
</script>

<style scoped>
.login-form {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
