<template>
    <div class="login-form">
        <el-form :model="form" ref="formRef" label-width="100px" @submit.prevent="handleSubmit">
            <el-form-item label="用户名" prop="username" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
                <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
                <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const form = ref({
            username: '',
            password: ''
        });

        const handleSubmit = () => {
            // 处理登录逻辑
            console.log('提交的表单数据:', form.value);
        };

        return {
            form,
            handleSubmit
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