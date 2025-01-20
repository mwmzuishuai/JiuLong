<template>
    <div class="topoBox">
        <onetitle :soc="mxObj1.socList" :sockey="mxObj1.bms" :mx="false"></onetitle>
        <onetitle :mx="true" :soc="mxObj2.socList" :sockey="mxObj2.bms"></onetitle>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import onetitle from '../components/onetitle.vue';
import { emsList1, emsList2 } from '../js/ems.js'
import { getEmsdetail } from '../api/Inquire'
let item
const mxObj1 = ref({
    socList: [],
    bms: [],
})
const mxObj2 = ref({
    socList: [],
    bms: [],
})
const getEms = (n) => {
    mxObj1.value.socList = []
    mxObj1.value.bms = []
    mxObj2.value.socList = []
    mxObj2.value.bms = []
    emsList1.map(item => {
        return getEmsdetail(item.StationNumber, item.Id).then(res => {
            res.data.find(i => i.title == '簇SOC').value
            mxObj1.value.socList.push(res.data.find(i => i.title == '簇SOC').value / 1000)
            mxObj1.value.bms.push(res.data.find(i => i.title == 'BMS通讯状态').value)
        })
    })
    emsList2.map(item => {
        return getEmsdetail(item.StationNumber, item.Id).then(res => {
            res.data.find(i => i.title == '簇SOC').value
            mxObj2.value.socList.push(res.data.find(i => i.title == '簇SOC').value / 1000)
            mxObj2.value.bms.push(res.data.find(i => i.title == 'BMS通讯状态').value)
        })
    })
    clearInterval(item)
    item = setInterval(() => {
        let obj1 = {
            socList: [],
            bms: []
        }
        let obj2 = {
            socList: [],
            bms: []
        }
        const listmap = emsList1.map(item => {
            return getEmsdetail(item.StationNumber, item.Id).then(res => {
                res.data.find(i => i.title == '电池SOC').value
                obj1.socList.push(res.data.find(i => i.title == '电池SOC').value / 1000)
                obj1.bms.push(res.data.find(i => i.title == 'BMS通讯状态').value)
            })
        })
        const listmap2 = emsList1.map(item => {
            return getEmsdetail(item.StationNumber, item.Id).then(res => {
                res.data.find(i => i.title == '电池SOC').value
                obj2.socList.push(res.data.find(i => i.title == '电池SOC').value / 1000)
                obj2.bms.push(res.data.find(i => i.title == 'BMS通讯状态').value)
            })
        })
        Promise.all(listmap).then(() => {
            mxObj1.value = obj1
        })
        Promise.all(listmap2).then(() => {
            mxObj2.value = obj1
        })
    }, import.meta.env.VITE_TIMING)
}
onMounted(() => {
    getEms()
})
onUnmounted(() => {
    clearInterval(item)
})
</script>
<style scoped lang='scss'>
.topoBox {
    background-color: black;
    display: flex;
}
</style>