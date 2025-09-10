<template>
    <div class="login-form">
        <el-form :model="form" ref="formRef" label-width="100px">
            <el-form-item label="用户名" prop="userName" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
                <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
                <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import useUserStore from '../../store/modules/user'
const userStore = useUserStore()

export default defineComponent({
    setup() {
        const form = ref({
            userName: '',
            password: ''
        });
        let loginForm = reactive({
            userName: 'admin',
            password: '111111'
        })
        const login = () => {
            // 处理登录逻辑
            userStore.userLogin(loginForm)
        };

        return {
            form,
            login
        }
    }
})
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