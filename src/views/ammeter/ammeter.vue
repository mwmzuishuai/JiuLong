<template>
    <div class="ammeter">
        <div class="ammeter-left">
            <el-anchor :container="scrolls">
                <el-anchor-link :href="`#print1`">
                    结算电表1
                </el-anchor-link>
                <el-anchor-link :href="`#print2`">
                    结算电表2
                </el-anchor-link>
            </el-anchor>
        </div>
        <div class="ammeter-right" ref="scrolls">
            <div id="print1" class="conmentsd">
                <el-descriptions title="结算电表1" border :column="2">
                    <el-descriptions-item :label="item.title" v-for="item in table">{{ ammeterTd(item.title, 1)
                        }}{{ item.value }}</el-descriptions-item>
                </el-descriptions>
            </div>
            <div id="print2" class="conmentsd">
                <el-descriptions title="结算电表2" border :column="2">
                    <el-descriptions-item :label="item.title" v-for="item in table">{{ ammeterTd(item.title, 1)
                        }}{{ item.value }}</el-descriptions-item>
                </el-descriptions>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import { getAmmeter } from '../../api/Inquire'
const scrolls = ref(null)
const table = ref([
    { title: '正向有功总电能', value: 'kWh', },
    { title: '反向有功总电能', value: 'kWh', },
    { title: '正向视在总电能', value: 'kWh', },
    { title: 'A相正向有功电能', value: 'kWh', },
    { title: 'A相反向有功电能', value: 'kWh', },
    { title: 'B相正向有功电能', value: 'kWh', },
    { title: 'B相反向有功电能', value: 'kWh', },
    { title: 'C相正向有功电能', value: 'kWh', },
    { title: 'C相反向有功电能', value: 'kWh', },
    { title: 'A相电压', value: 'V', },
    { title: 'B相电压', value: 'V', },
    { title: 'C相电压', value: 'V', },
    { title: 'A相电流', value: 'A', },
    { title: 'B相电流', value: 'A', },
    { title: 'C相电流', value: 'A', },
    { title: '瞬时总有功功率', value: 'kW', },
    { title: '瞬时A相有功功率', value: 'kW', },
    { title: '瞬时B相有功功率', value: 'kW', },
    { title: '瞬时C相有功功率', value: 'kW', },
    { title: '瞬时总无功功率', value: 'kW', },
    { title: '瞬时A相无功功率', value: 'kW', },
    { title: '瞬时B相无功功率', value: 'kW', },
    { title: '瞬时C相无功功率', value: 'kW', },
    { title: '总功率因数', value: '', },
    { title: 'A相功率因数', value: '', },
    { title: 'B相功率因数', value: '', },
    { title: 'C相功率因数', value: '', },
    { title: '电网频率', value: 'Hz', },
])
const tablelist = ref({
    list1: [],
    list2: [],
})
const ammeterTd = (title, n) => {
    let list
    if (n == 1) {
        list = tablelist.value.list1
    } else {
        list = tablelist.value.list2

    }
    const name = list.find(i => i.title === title)
    console.log(title);

    if (name) {
        return name.value
    } else {
        return ''
    }
}
onMounted(() => {
    getAmmeter(1).then(res => {
        tablelist.value.list1 = res.data
    })
    getAmmeter(2).then(res => {
        tablelist.value.list2 = res.data
    })
})
</script>
<style scoped lang='scss'>
.ammeter {
    background-color: #fff;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 10px;
}

.conmentsd {
    height: 90vh;

    .conmentsd_title {
        font-size: 20px;
        font-weight: bolder;
    }
}

.ammeter-left {
    width: 10%;
}

.ammeter-right {
    width: 90%;
    overflow-y: auto;
    height: 100%;
    // background-color: #dfe4ea;
}
</style>