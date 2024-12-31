<template>
    <div class="common-layout">
        <el-container style="height: 100%;">
            <!-- 左侧导航栏 -->
            <el-aside style="background-color: #fff;position: relative;width: auto;overflow:visible;">
                <div>
                    <img src="../assets/LOGO.svg" alt="" style="width: auto;"></img>
                </div>

                <el-menu background-color="#fff" :collapse="isCollapse" @select="handleSelect" unique-opened
                    class="el-menu-vertical-demo" default-active="1">
                    <template v-for="item in menu">
                        <el-sub-menu v-if="item.children" :index="item.index">
                            <template #title>
                                <el-icon>
                                    <component :is='item.icon'></component>
                                </el-icon>
                                <span>{{ item.name }}</span>
                            </template>
                            <el-menu-item v-for="item in item.children" :index="item.index">{{ item.name
                                }}</el-menu-item>
                        </el-sub-menu>
                        <el-menu-item :index="item.index" v-else><el-icon>
                                <component :is='item.icon'></component>
                            </el-icon><span>{{ item.name
                                }}</span></el-menu-item>
                    </template>

                </el-menu>
            </el-aside>
            <el-main style="background:#F7F8FA">
                <div class="titleUse">
                    <el-button type="primary" text icon="Operation" @click="isCollapse = !isCollapse" />
                    <el-popover placement="bottom" trigger="click">
                        <template #reference>
                            <el-avatar :size="30"> user </el-avatar>
                        </template>
                        <el-button style="width: 100%;" @click="logout">退出登录</el-button>
                    </el-popover>
                </div>
                <!-- 路由出口 -->
                <div style="padding: 20px;height: calc(100vh - 40px);overflow-y: auto;">
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { tabs, menu } from '../tab'
import autofit from "autofit.js";
const router = useRouter()
console.log(router);

const isCollapse = ref(false)

//退出登录
const logout = () => {
    router.push('/login')
    localStorage.removeItem('token')
}

// 监听路由变化
const handleSelect = (key, keyPath) => {
    router.push(tabs[key])
}
</script>
<style scoped lang='scss'>
.common-layout {
    height: 100vh;
}

.titleUse {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e4e7ed;
    background-color: #Fff;
    box-sizing: border-box;
    padding: 0 20px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}

:deep(.el-main) {
    padding: 0;
    height: 100vh;
}
</style>