<template>
    <div class="msweep">
        <div class="header">10KV II 段母线设备监控</div>
        <div class="bigscreen">
            <div class="comesBox" v-for="item in 20">
                <img src="../assets/png.png" alt="" style="width: 200px;">
                <div>{{ '储能柜1B1' }}</div>
                <div class="flex-col justify-start items-start section">
                    <div class="smweep">
                        <span class="font">运行状态：</span>
                        <span class="font">SOC：</span>
                        <span class="font">SOH：</span>
                        <span class="font">设备电压：</span>
                        <span class="font">设备电流：</span>
                        <span class="font">有用功率：</span>
                        <span class="font">无用功率：</span>
                        <span class="font">最高电压：</span>
                        <span class="font">最低电压：</span>
                        <span class="font">平均电压：</span>
                        <span class="font">最高温度：</span>
                        <span class="font">最低温度：</span>
                        <span class="font">平均温度：</span>
                        <span class="font">累计充电：</span>
                        <span class="font">累计放电：</span>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue'
const storeList = ref([{

}])
</script>
<style scoped lang='scss'>
.msweep {
    background-color: #fff;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
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
    width: 150px;
    padding: 10px;

    background: rgb(255, 255, 255);

    span {
        line-height: 24px;
        font-size: 12px;
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

    }
}
</style>