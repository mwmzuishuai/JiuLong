<template>
    <div class="msweep">
        <el-tabs v-model="activeName" type="border-card" class="demo-tabs" @tab-change="handleClick"
            style="height: 100%;">
            <el-tab-pane label="I段" name="1">
                <div class="header">10KV I 段母线设备监控</div>
                <div class="bigscreen">
                    <div class="comesBox" v-for="i in detailList">
                        <img src="../assets/png.png" alt="" style="width: 200px;">
                        <!-- <div>{{ '储能柜1B1' }}</div> -->
                        <div class="flex-col justify-start items-start section">
                            <div class="smweep">
                                <div class="font" v-for="item in emsForm">
                                    <span>
                                        {{ item.title }}:
                                    </span>
                                    <span v-if="item.status">
                                        {{ i.find(n => n.title === item.title) ? i.find(n => n.title ===
                                            item.title).value ?
                                            '正常' : '断开' : '' }}
                                    </span>
                                    <span v-else>
                                        {{ i.find(n => n.title === item.title) ? i.find(n => n.title ===
                                            item.title).value : ''
                                        }}
                                        {{ item.unit }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </el-tab-pane>
            <el-tab-pane label="II段" name="2">
                <div class="header">10KV II 段母线设备监控</div>
                <div class="bigscreen">
                    <div class="comesBox" v-for="i in detailList">
                        <img src="../assets/png.png" alt="" style="width: 200px;">
                        <!-- <div>{{ '储能柜1B1' }}</div> -->
                        <div class="flex-col justify-start items-start section">
                            <div class="smweep">
                                <div class="font" v-for="item in emsForm">
                                    <span>
                                        {{ item.title }}:
                                    </span>
                                    <span v-if="item.status">
                                        {{ i.find(n => n.title === item.title) ? i.find(n => n.title ===
                                            item.title).value ?
                                            '正常' : '断开' : '' }}
                                    </span>
                                    <span v-else>
                                        {{ i.find(n => n.title === item.title) ? i.find(n => n.title ===
                                            item.title).value : ''
                                        }}
                                        {{ item.unit }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </el-tab-pane>
        </el-tabs>

    </div>

</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { emsList1, emsList2 } from '../js/ems.js'
import { getEmsdetail } from '../api/Inquire'
let item
const activeName = ref('1')
const detailList = ref([])
const emsForm = ref([
    { title: '液冷机组通讯状态', status: true, unit: '' },
    { title: 'PCS通讯状态', status: true, unit: '' },
    { title: 'BMS通讯状态', status: true, unit: '' },
    { title: '消防通讯状态', status: true, unit: '' },
    { title: '系统视在功率', status: false, unit: 'kW' },
    { title: '系统有功功率', status: false, unit: 'kW' },
    { title: '系统无功功率', status: false, unit: 'kW' },
    { title: 'Uab电压', status: false, unit: 'V' },
    { title: 'Ubc电压', status: false, unit: 'V' },
    { title: 'Uca电压', status: false, unit: 'V' },
    { title: '电网频率', status: false, unit: '' },
    { title: '系统输出U相电流', status: false, unit: 'A' },
    { title: '系统输出V相电流', status: false, unit: 'A' },
    { title: '系统输出W相电流', status: false, unit: 'A' },
    { title: '日充电量', status: false, unit: 'kWh' },
    { title: '日放电量', status: false, unit: 'kWh' },
    { title: '总充电量', status: false, unit: 'kWh' },
    { title: '总放电量', status: false, unit: 'kWh' },
    { title: 'PCS输出总有功功率', status: false, unit: 'kW' },
    { title: 'PCS工作状态', status: true, unit: '' },
    { title: '电池SOC', status: false, unit: '%' },
    { title: '电池最高单体电压', status: false, unit: 'V' },
    { title: '电池最低单体电压', status: false, unit: 'V' },
    { title: '电池最高单体温度', status: false, unit: '℃' },
    { title: '所在母线总有功功率', status: false, unit: 'kW' },
    { title: '所在母线总无功功率', status: false, unit: 'kW' },
    { title: '所在母线总功率因数', status: false, unit: '' },
    { title: '簇总压', status: false, unit: 'V' },
    { title: '簇总电流', status: false, unit: 'A' },
    { title: '簇SOC', status: false, unit: '%' },
    { title: '簇SOH', status: false, unit: '%' },
    { title: '簇绝缘正电阻', status: false, unit: 'Ω' },
    { title: '簇绝缘负电阻', status: false, unit: 'Ω' },
    { title: '最高单体电压BMU号', status: false, unit: '' },
    { title: '最高单体电压箱内序号', status: false, unit: '' },
    { title: '最高单体电压值', status: false, unit: 'V' },
    { title: '最低单体电压BMU号', status: false, unit: '' },
    { title: '最低单体电压箱内序号', status: false, unit: '' },
    { title: '最低单体电压值', status: false, unit: 'V' },
    { title: '最高单体温度BMU号', status: false, unit: '' },
    { title: '最高单体温度箱内序号', status: false, unit: '' },
    { title: '最高单体温度值', status: false, unit: '℃' },
    { title: '最低单体温度BMU号', status: false, unit: '' },
    { title: '最低单体温度箱内序号', status: false, unit: '' },
    { title: '最低单体温度值', status: false, unit: '℃' },
    { title: '最大单体压差值', status: false, unit: 'V' },
    { title: '平均单体电压', status: false, unit: 'V' },
    { title: '最大温度差值', status: false, unit: '℃' },
])
const getEms = (n) => {
    detailList.value = []
    let emsList = []
    if (n == 1) {
        emsList = emsList1
    } else {
        emsList = emsList2
    }
    emsList.map(item => {
        return getEmsdetail(item.StationNumber, item.Id).then(res => {
            detailList.value.push(res.data)
        })
    })
    clearInterval(item)
    item = setInterval(() => {
        let list = []
        const listmap = emsList.map(item => {
            return getEmsdetail(item.StationNumber, item.Id).then(res => {
                list.push(res.data)
            })
        })
        Promise.all(listmap).then(() => {
            detailList.value = list
        })
    }, 10000)
}
const handleClick = (tab) => {
    if (tab === '1') {
        getEms(1)
    } else {
        getEms(2)
    }
}
onMounted(() => {
    getEms(1)
})
onUnmounted(() => {
    clearInterval(item)
})
</script>
<style scoped lang='scss'>
.msweep {
    background-color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    // justify-content: center;
}

.header {
    text-align: center;
    font-weight: bolder;
    font-size: 24px;
    margin-bottom: 40px;
}

.smweep {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px dashed rgb(112, 112, 112);
    border-radius: 16px;
    width: 200px;
    padding: 10px;
    height: 400px;
    overflow-y: auto;
    background: rgb(255, 255, 255);

    .font {
        line-height: 24px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
}

.bigscreen {
    display: flex;

    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    overflow-x: auto;
    flex: 1;

    .comesBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 20px;
    }
}
</style>