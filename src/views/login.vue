<template>
    <div class="flex-col justify-start relative page">
        <div class="section"></div>
        <img class="image pos" src="../assets/LOGO.svg" />
        <div class="flex-col section_2 pos_2">
            <span class="self-center text">玖隆后台监控系统</span>
            <div class="flex-col self-stretch mt-55">
                <div class="flex-row items-center group">
                    <el-input v-model="form.username" style="width: 100%" placeholder="请输入账号" />
                </div>
                <div class="flex-row items-center group view">
                    <el-input v-model="form.password" style="width: 100%" placeholder="请输入密码" show-password />

                </div>
                <el-button type="success" @click="userlogin" style="margin-top: 40px;">登录</el-button>
            </div>
        </div>
        <span class="text_6 pos_3"></span>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { postLogin } from '@/api/user'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const router = useRouter()
const form = ref({
    username: '',
    password: '',
    // 验证码
})
const userlogin = () => {
    console.log('登录')
    if (!form.value.username || !form.value.password) {
        ElMessage.error('请输入账号密码')
        return
    }
    if (form.value.username == 'admin' && form.value.password == 'admin') {
        router.push('/')
        localStorage.setItem('token', 'admin')
    } else {
        ElMessage.error('账号密码错误')
    }
    // postLogin(form.value).then(res => {
    //     console.log(res)
    //     if (res.code == 200) {
    //         localStorage.setItem('token', res.data.token)
    //         router.push('/home')
    //     } else {
    //         console.log('登录失败')
    //     }
    // })
}
</script>
<style scoped lang='scss'>
.mt-55 {
    margin-top: 3.44rem;
}

.ml-15 {
    margin-left: 0.94rem;
}

.ml-9 {
    margin-left: 0.56rem;
}

.page {
    background-color: #ebebeb;
    background-image: url('../assets/loginB.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
}

.section {
    // background-image: url('../assets/loginB.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 80rem;
    height: 50rem;
}

.image {
    width: 8.56rem;
    height: 3rem;
}

.pos {
    position: absolute;
    left: 2.5rem;
    top: 2.5rem;
}

.section_2 {
    padding: 2.88rem;
    border-radius: 1rem;
    border-color: #fff;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 25rem;
    background-color: #ffffff;
}

.pos_2 {
    position: absolute;
    left: 11rem;
    top: 50%;
    transform: translateY(-50%);
}

.text {
    color: #000000;
    font-size: 1.5rem;
    font-family: 阿里巴巴普惠体;
    line-height: 1.51rem;
}

.group {}

.image_2 {
    width: 1rem;
    height: 1rem;
}

.font {
    font-size: 0.88rem;
    font-family: 阿里巴巴普惠体;
    color: #8c8c8c;
}

.text_2 {
    margin-right: 10.88rem;
}

.text_3 {
    line-height: 0.8rem;
}

.view {
    margin-top: 1.44rem;
}

.text_4 {
    line-height: 0.8rem;
}

.group_2 {
    padding: 1.5rem 0;
}

.group_3 {
    padding: 0.38rem 0.88rem 0.75rem;
    border-radius: 0.25rem;
    height: 2.25rem;
    border-left: solid 0.063rem #d9d9d9;
    border-right: solid 0.063rem #d9d9d9;
    border-top: solid 0.063rem #d9d9d9;
    border-bottom: solid 0.063rem #d9d9d9;
}

.text_5 {
    line-height: 0.77rem;
}

.group_4 {
    border-radius: 0.25rem;
    width: 5.5rem;
    height: 2.25rem;
    border-left: solid 0.063rem #d9d9d9;
    border-right: solid 0.063rem #d9d9d9;
    border-top: solid 0.063rem #d9d9d9;
    border-bottom: solid 0.063rem #d9d9d9;
}

.section_3 {
    padding: 0.44rem 0 0.88rem;
    background-color: #52b0b5;
    border-radius: 0.25rem;
}

.font_2 {
    font-size: 1rem;
    font-family: 阿里巴巴普惠体;
    line-height: 0.86rem;
    color: #ffffff;
}

.text_6 {
    color: #000000;
    font-size: 0.75rem;
    font-family: 阿里巴巴普惠体;
    line-height: 0.69rem;
}

.pos_3 {
    position: absolute;
    left: 2.5rem;
    bottom: 2.87rem;
}
</style>