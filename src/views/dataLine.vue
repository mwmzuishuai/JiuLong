<template>
    <div style="height: 100%;">
        <el-tabs type="border-card" style="height: 100%;">
            <el-tab-pane label="保护装置I">
                <Table :type="'yc'" :table-data="TableDataOne" />
            </el-tab-pane>
            <el-tab-pane label="保护装置II">
                <Table :type="'yc'" :table-data="TableDataTwo" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { getDataLine } from '../api/Inquire'
import Table from '../components/table.vue'
const TableDataOne = ref([
    {
        "title": "Ua模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 768,
        "value": "6020",
        "updateTime": "2025-01-19T20:12:10.3151722+08:00"
    },
    {
        "title": "Ipc模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 769,
        "value": "0",
        "updateTime": "2025-01-19T20:12:10.3151727+08:00"
    },
    {
        "title": "Ub模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 770,
        "value": "6135",
        "updateTime": "2025-01-19T20:12:10.3151733+08:00"
    },
    {
        "title": "Ipb模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 771,
        "value": "0",
        "updateTime": "2025-01-19T20:12:10.3151784+08:00"
    },
    {
        "title": "Uc模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 772,
        "value": "5872",
        "updateTime": "2025-01-19T20:12:10.315179+08:00"
    },
    {
        "title": "Ipa模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 773,
        "value": "0",
        "updateTime": "2025-01-19T20:12:10.3151797+08:00"
    },
    {
        "title": "U0模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 774,
        "value": "88",
        "updateTime": "2025-01-19T20:12:10.3151804+08:00"
    },
    {
        "title": "I0模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 775,
        "value": "132",
        "updateTime": "2025-01-19T20:12:10.3151812+08:00"
    },
    {
        "title": "测量IA",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 781,
        "value": "88",
        "updateTime": "2025-01-19T20:12:10.3151819+08:00"
    },
    {
        "title": "测量IC",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 782,
        "value": "132",
        "updateTime": "2025-01-19T20:12:10.3151827+08:00"
    },
    {
        "title": "测量IB",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 33106,
        "value": "181",
        "updateTime": "2025-01-19T20:12:10.3151879+08:00"
    },
    {
        "title": "Uab模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 322,
        "value": "10390",
        "updateTime": "2025-01-19T20:12:10.3151681+08:00"
    },
    {
        "title": "Ubc模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 326,
        "value": "10467",
        "updateTime": "2025-01-19T20:12:10.3151695+08:00"
    },
    {
        "title": "Uca模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 330,
        "value": "10390",
        "updateTime": "2025-01-19T20:12:10.3151705+08:00"
    },
    {
        "title": "有功功率",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 784,
        "value": "-99",
        "updateTime": "2025-01-19T20:12:10.3151837+08:00"
    },
    {
        "title": "无功功率",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 785,
        "value": "32",
        "updateTime": "2025-01-19T20:12:10.3151849+08:00"
    },
    {
        "title": "功率因素",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 786,
        "value": "95",
        "updateTime": "2025-01-19T20:12:10.3151859+08:00"
    }
])
const TableDataTwo = ref([
    {
        "title": "Ua模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 768,
        "value": "6020",
        "updateTime": "2025-01-19T20:12:10.3151722+08:00"
    },
    {
        "title": "Ipc模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 769,
        "value": "0",
        "updateTime": "2025-01-19T20:12:10.3151727+08:00"
    },
    {
        "title": "Ub模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 770,
        "value": "6135",
        "updateTime": "2025-01-19T20:12:10.3151733+08:00"
    },
    {
        "title": "Ipb模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 771,
        "value": "0",
        "updateTime": "2025-01-19T20:12:10.3151784+08:00"
    },
    {
        "title": "Uc模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 772,
        "value": "5872",
        "updateTime": "2025-01-19T20:12:10.315179+08:00"
    },
    {
        "title": "Ipa模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 773,
        "value": "0",
        "updateTime": "2025-01-19T20:12:10.3151797+08:00"
    },
    {
        "title": "U0模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 774,
        "value": "88",
        "updateTime": "2025-01-19T20:12:10.3151804+08:00"
    },
    {
        "title": "I0模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 775,
        "value": "132",
        "updateTime": "2025-01-19T20:12:10.3151812+08:00"
    },
    {
        "title": "测量IA",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 781,
        "value": "88",
        "updateTime": "2025-01-19T20:12:10.3151819+08:00"
    },
    {
        "title": "测量IC",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 782,
        "value": "132",
        "updateTime": "2025-01-19T20:12:10.3151827+08:00"
    },
    {
        "title": "测量IB",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 33106,
        "value": "181",
        "updateTime": "2025-01-19T20:12:10.3151879+08:00"
    },
    {
        "title": "Uab模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 322,
        "value": "10390",
        "updateTime": "2025-01-19T20:12:10.3151681+08:00"
    },
    {
        "title": "Ubc模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 326,
        "value": "10467",
        "updateTime": "2025-01-19T20:12:10.3151695+08:00"
    },
    {
        "title": "Uca模值",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 330,
        "value": "10390",
        "updateTime": "2025-01-19T20:12:10.3151705+08:00"
    },
    {
        "title": "有功功率",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 784,
        "value": "-99",
        "updateTime": "2025-01-19T20:12:10.3151837+08:00"
    },
    {
        "title": "无功功率",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 785,
        "value": "32",
        "updateTime": "2025-01-19T20:12:10.3151849+08:00"
    },
    {
        "title": "功率因素",
        "stationNumber": 0,
        "ip": "192.168.88.201",
        "address": 786,
        "value": "95",
        "updateTime": "2025-01-19T20:12:10.3151859+08:00"
    }
])
var item
onMounted(() => {
    getDataLine(1).then(res => {
        TableDataOne.value = res.data
    })
    getDataLine(2).then(res => {
        TableDataTwo.value = res.data
    })
    item = setInterval(() => {
        getDataLine(1).then(res => {
            TableDataOne.value = res.data
        })
        getDataLine(2).then(res => {
            TableDataTwo.value = res.data
        })
    }, import.meta.env.VITE_TIMING)
})
</script>
<style scoped lang='scss'></style>