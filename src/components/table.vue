<template>
    <div style="height: 80vh;overflow-y: auto;">
        <el-descriptions :title="type == 'yx' ? '遥信' : '遥感'" border :column="3">
            <el-descriptions-item :label="item.title" :span="1" v-for="item in tableData">
                <template v-if="type === 'yx'">
                    <el-tag type="success" v-if="item.isFlag">正常</el-tag>
                    <el-tag type="danger" v-else>异常</el-tag>
                </template>
                <template v-else>
                    <el-tag size="small">{{ item.value }}</el-tag>
                </template>
            </el-descriptions-item>
        </el-descriptions>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const { tableData, type } = defineProps({
    tableData: {
        type: Array,
        default: () => []
    },
    type: {
        type: String,
        default: 'yx'
    }
})
</script>
<style scoped lang='scss'></style>