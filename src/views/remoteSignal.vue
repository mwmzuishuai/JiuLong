<template>
    <div style="height: 100%;">
        <el-tabs type="border-card" style="height: 100%;">
            <el-tab-pane label="遥信">
                <Table :type="'yx'" :title="'遥信'" :table-data="yxTableData" />
            </el-tab-pane>
            <el-tab-pane label="遥测">
                <Table :type="'yc'" :title="'遥测'" :table-data="ycTableData" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Table from '../components/table.vue'
import { getYC, getYx } from '../api/Inquire'
const yxTableData = ref([
    {
        "ip": "127.0.0.1",
        "id": 1,
        "title": "1#防孤岛低频一段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 2,
        "title": "1#防孤岛低频二段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 3,
        "title": "1#防孤岛过频一段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 4,
        "title": "1#防孤岛过频二段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 5,
        "title": "1#防孤岛低压一段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 6,
        "title": "1#防孤岛低压二段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 7,
        "title": "1#防孤岛过压一段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 8,
        "title": "1#防孤岛过压二段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 9,
        "title": "2#防孤岛低频一段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 10,
        "title": "2#防孤岛低频二段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 11,
        "title": "2#防孤岛过频一段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 12,
        "title": "2#防孤岛过频二段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 13,
        "title": "2#防孤岛低压一段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 14,
        "title": "2#防孤岛低压二段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 15,
        "title": "2#防孤岛过压一段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 16,
        "title": "2#防孤岛过压二段保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 17,
        "title": "1#故障解列低频第一轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 18,
        "title": "1#故障解列低频第二轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 19,
        "title": "1#故障解列低频第三轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 20,
        "title": "1#故障解列过频第一轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 21,
        "title": "1#故障解列过频第二轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 22,
        "title": "1#故障解列过频第三轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 23,
        "title": "1#故障解列低压第一轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 24,
        "title": "1#故障解列低压第二轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 25,
        "title": "1#故障解列低压第三轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 26,
        "title": "1#故障解列过压第一轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 27,
        "title": "1#故障解列过压第二轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 28,
        "title": "1#故障解列过压第三轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 29,
        "title": "2#故障解列低频第一轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 30,
        "title": "2#故障解列低频第二轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 31,
        "title": "2#故障解列低频第三轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 32,
        "title": "2#故障解列过频第一轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 33,
        "title": "2#故障解列过频第二轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 34,
        "title": "2#故障解列过频第三轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 35,
        "title": "2#故障解列低压第一轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 36,
        "title": "2#故障解列低压第二轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 37,
        "title": "2#故障解列低压第三轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 38,
        "title": "2#故障解列过压第一轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 39,
        "title": "2#故障解列过压第二轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 40,
        "title": "2#故障解列过压第三轮保护",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 41,
        "title": "1#逆变功装置逆变率保护一轮",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 42,
        "title": "1#逆变功装置逆变率保护二轮",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 43,
        "title": "2#逆变功装置逆变率保护一轮",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 44,
        "title": "2#逆变功装置逆变率保护二轮",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 45,
        "title": "公共测控开入1",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 46,
        "title": "公共测控开入2",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 47,
        "title": "公共测控开入3",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 48,
        "title": "公共测控开入4",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 49,
        "title": "公共测控开入5",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 50,
        "title": "公共测控开入6",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 51,
        "title": "公共测控开入7",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 52,
        "title": "公共测控开入8",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 53,
        "title": "公共测控开入9",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 54,
        "title": "公共测控开入10",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 55,
        "title": "公共测控开入11",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 56,
        "title": "公共测控开入12",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 57,
        "title": "公共测控开入13",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 58,
        "title": "公共测控开入14",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 59,
        "title": "公共测控开入15",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 60,
        "title": "公共测控开入16",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 61,
        "title": "公共测控开入17",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 62,
        "title": "公共测控开入18",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 63,
        "title": "公共测控开入19",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 64,
        "title": "公共测控开入20",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 65,
        "title": "公共测控开入21",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 66,
        "title": "公共测控开入22",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 67,
        "title": "公共测控开入23",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 68,
        "title": "公共测控开入24",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 69,
        "title": "公共测控开入25",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 70,
        "title": "公共测控开入26",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 71,
        "title": "公共测控开入27",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 72,
        "title": "公共测控开入28",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 73,
        "title": "公共测控开入29",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 74,
        "title": "公共测控开入30",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 75,
        "title": "公共测控开入31",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 76,
        "title": "公共测控开入32",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 77,
        "title": "公共测控开入33",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 78,
        "title": "公共测控开入34",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 79,
        "title": "公共测控开入35",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 80,
        "title": "公共测控开入36",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 81,
        "title": "公共测控开入37",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 82,
        "title": "公共测控开入38",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 83,
        "title": "公共测控开入39",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 84,
        "title": "公共测控开入40",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 85,
        "title": "公共测控开入41",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 86,
        "title": "公共测控开入42",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 87,
        "title": "公共测控开入43",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 88,
        "title": "公共测控开入44",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 89,
        "title": "公共测控开入45",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 90,
        "title": "公共测控开入46",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 91,
        "title": "公共测控开入47",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 92,
        "title": "公共测控开入48",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 93,
        "title": "直流屏充电方式",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 94,
        "title": "直流屏系统总故障",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 95,
        "title": "直流屏交流单元通信故障",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 96,
        "title": "直流屏绝缘单元通信故障",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 97,
        "title": "直流屏开关单元通信故障",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 98,
        "title": "直流屏开关状态单元通信故障",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 99,
        "title": "直流屏模块通信故障",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 100,
        "title": "直流屏电池单元通信",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 101,
        "title": "直流屏交流1路停电",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 102,
        "title": "直流屏交流1路缺相",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 103,
        "title": "直流屏交流1路欠压",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 104,
        "title": "直流屏交流1路过压",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 105,
        "title": "直流屏交流2路停电",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 106,
        "title": "直流屏交流2路缺相",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 107,
        "title": "直流屏交流2路欠压",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 108,
        "title": "直流屏交流2路过压",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 109,
        "title": "UPS电池高压",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 110,
        "title": "UPS主路故障",
        "isFlag": false
    },
    {
        "ip": "127.0.0.1",
        "id": 111,
        "title": "UPS旁路故障",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 112,
        "title": "UPS过载",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 113,
        "title": "UPS过温",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 114,
        "title": "直流逆变输出",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 115,
        "title": "整流逆变输出",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 116,
        "title": "旁路输出",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 117,
        "title": "水浸1状态(0=无水浸)",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 118,
        "title": "水浸2状态(0=无水浸)",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 119,
        "title": "水浸3状态(0=无水浸)",
        "isFlag": true
    },
    {
        "ip": "127.0.0.1",
        "id": 120,
        "title": "水浸4状态(0=无水浸)",
        "isFlag": true
    }
])
const ycTableData = ref([
    {
        "ip": "127.0.0.1",
        "id": 1,
        "title": "1#防孤岛UAB",
        "value": 10.345699
    },
    {
        "ip": "127.0.0.1",
        "id": 2,
        "title": "1#防孤岛UCA",
        "value": 10.4634
    },
    {
        "ip": "127.0.0.1",
        "id": 3,
        "title": "1#防孤岛IA",
        "value": 5.81
    },
    {
        "ip": "127.0.0.1",
        "id": 4,
        "title": "1#防孤岛IC",
        "value": 6.24
    },
    {
        "ip": "127.0.0.1",
        "id": 5,
        "title": "1#防孤岛P",
        "value": -20
    },
    {
        "ip": "127.0.0.1",
        "id": 6,
        "title": "1#防孤岛Q",
        "value": -64
    },
    {
        "ip": "127.0.0.1",
        "id": 7,
        "title": "1#防孤岛PF",
        "value": -3.4099998
    },
    {
        "ip": "127.0.0.1",
        "id": 8,
        "title": "1#防孤岛F",
        "value": 49.96
    },
    {
        "ip": "127.0.0.1",
        "id": 9,
        "title": "2#防孤岛UAB",
        "value": 10.3861
    },
    {
        "ip": "127.0.0.1",
        "id": 10,
        "title": "2#防孤岛UCA",
        "value": 10.4444
    },
    {
        "ip": "127.0.0.1",
        "id": 11,
        "title": "2#防孤岛IA",
        "value": 4.97
    },
    {
        "ip": "127.0.0.1",
        "id": 12,
        "title": "2#防孤岛IC",
        "value": 5.4
    },
    {
        "ip": "127.0.0.1",
        "id": 13,
        "title": "2#防孤岛P",
        "value": -21
    },
    {
        "ip": "127.0.0.1",
        "id": 14,
        "title": "2#防孤岛Q",
        "value": -60
    },
    {
        "ip": "127.0.0.1",
        "id": 15,
        "title": "2#防孤岛PF",
        "value": -3.4099998
    },
    {
        "ip": "127.0.0.1",
        "id": 16,
        "title": "2#防孤岛F",
        "value": 50.03
    },
    {
        "ip": "127.0.0.1",
        "id": 17,
        "title": "1#故障解列UAB",
        "value": 10.4535
    },
    {
        "ip": "127.0.0.1",
        "id": 18,
        "title": "1#故障解列UCA",
        "value": 10.531899
    },
    {
        "ip": "127.0.0.1",
        "id": 19,
        "title": "1#故障解列IA",
        "value": 5.5099998
    },
    {
        "ip": "127.0.0.1",
        "id": 20,
        "title": "1#故障解列IC",
        "value": 5.8399997
    },
    {
        "ip": "127.0.0.1",
        "id": 21,
        "title": "1#故障解列P",
        "value": -28
    },
    {
        "ip": "127.0.0.1",
        "id": 22,
        "title": "1#故障解列Q",
        "value": -56
    },
    {
        "ip": "127.0.0.1",
        "id": 23,
        "title": "1#故障解列PF",
        "value": -4.72
    },
    {
        "ip": "127.0.0.1",
        "id": 24,
        "title": "1#故障解列F",
        "value": 50.059998
    },
    {
        "ip": "127.0.0.1",
        "id": 25,
        "title": "2#故障解列UAB",
        "value": 10.3118
    },
    {
        "ip": "127.0.0.1",
        "id": 26,
        "title": "2#故障解列UCA",
        "value": 10.4038
    },
    {
        "ip": "127.0.0.1",
        "id": 27,
        "title": "2#故障解列IA",
        "value": 5.31
    },
    {
        "ip": "127.0.0.1",
        "id": 28,
        "title": "2#故障解列IC",
        "value": 5.18
    },
    {
        "ip": "127.0.0.1",
        "id": 29,
        "title": "2#故障解列P",
        "value": -3
    },
    {
        "ip": "127.0.0.1",
        "id": 30,
        "title": "2#故障解列Q",
        "value": -66
    },
    {
        "ip": "127.0.0.1",
        "id": 31,
        "title": "2#故障解列PF",
        "value": -0.83
    },
    {
        "ip": "127.0.0.1",
        "id": 32,
        "title": "2#故障解列F",
        "value": 50.03
    },
    {
        "ip": "127.0.0.1",
        "id": 33,
        "title": "1#逆功率装置UAB",
        "value": 10.4606
    },
    {
        "ip": "127.0.0.1",
        "id": 34,
        "title": "1#逆功率装置UCA",
        "value": 10.4247
    },
    {
        "ip": "127.0.0.1",
        "id": 35,
        "title": "1#逆功率装置IA",
        "value": 113.99
    },
    {
        "ip": "127.0.0.1",
        "id": 36,
        "title": "1#逆功率装置IC",
        "value": 117.75
    },
    {
        "ip": "127.0.0.1",
        "id": 37,
        "title": "1#逆功率装置P",
        "value": 161.59999
    },
    {
        "ip": "127.0.0.1",
        "id": 38,
        "title": "1#逆功率装置Q",
        "value": 91.399994
    },
    {
        "ip": "127.0.0.1",
        "id": 39,
        "title": "1#逆功率装置PF",
        "value": 8.71
    },
    {
        "ip": "127.0.0.1",
        "id": 40,
        "title": "1#逆功率装置F",
        "value": 50.03
    },
    {
        "ip": "127.0.0.1",
        "id": 41,
        "title": "2#逆功率装置UAB",
        "value": 10.401299
    },
    {
        "ip": "127.0.0.1",
        "id": 42,
        "title": "2#逆功率装置UCA",
        "value": 10.484
    },
    {
        "ip": "127.0.0.1",
        "id": 43,
        "title": "2#逆功率装置IA",
        "value": 98.9
    },
    {
        "ip": "127.0.0.1",
        "id": 44,
        "title": "2#逆功率装置IC",
        "value": 97.759995
    },
    {
        "ip": "127.0.0.1",
        "id": 45,
        "title": "2#逆功率装置P",
        "value": 159.2
    },
    {
        "ip": "127.0.0.1",
        "id": 46,
        "title": "2#逆功率装置Q",
        "value": -48
    },
    {
        "ip": "127.0.0.1",
        "id": 47,
        "title": "2#逆功率装置PF",
        "value": 9.55
    },
    {
        "ip": "127.0.0.1",
        "id": 48,
        "title": "2#逆功率装置F",
        "value": 50.039997
    },
    {
        "ip": "127.0.0.1",
        "id": 49,
        "title": "电能质量通道1-F",
        "value": 50.03
    },
    {
        "ip": "127.0.0.1",
        "id": 50,
        "title": "电能质量通道1-UA",
        "value": 59.82
    },
    {
        "ip": "127.0.0.1",
        "id": 51,
        "title": "电能质量通道1-UB",
        "value": 59.859997
    },
    {
        "ip": "127.0.0.1",
        "id": 52,
        "title": "电能质量通道1-UC",
        "value": 59.69
    },
    {
        "ip": "127.0.0.1",
        "id": 53,
        "title": "电能质量通道1-IA",
        "value": 6.4
    },
    {
        "ip": "127.0.0.1",
        "id": 54,
        "title": "电能质量通道1-IB",
        "value": 6.4
    },
    {
        "ip": "127.0.0.1",
        "id": 55,
        "title": "电能质量通道1-IC",
        "value": 6.4
    },
    {
        "ip": "127.0.0.1",
        "id": 56,
        "title": "电能质量通道1-A相电压偏差",
        "value": 3.57
    },
    {
        "ip": "127.0.0.1",
        "id": 57,
        "title": "电能质量通道1-B相电压偏差",
        "value": 3.6399999
    },
    {
        "ip": "127.0.0.1",
        "id": 58,
        "title": "电能质量通道1-C相电压偏差",
        "value": 3.36
    },
    {
        "ip": "127.0.0.1",
        "id": 59,
        "title": "电能质量通道1-电压不平衡度",
        "value": 0.03
    },
    {
        "ip": "127.0.0.1",
        "id": 60,
        "title": "电能质量通道1-电流不平衡度",
        "value": 0.96
    },
    {
        "ip": "127.0.0.1",
        "id": 61,
        "title": "电能质量通道1-总有功",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 62,
        "title": "电能质量通道1-总无功",
        "value": -80
    },
    {
        "ip": "127.0.0.1",
        "id": 63,
        "title": "电能质量通道1-功率因数",
        "value": 0.03
    },
    {
        "ip": "127.0.0.1",
        "id": 64,
        "title": "直流屏交流UAB",
        "value": 413
    },
    {
        "ip": "127.0.0.1",
        "id": 65,
        "title": "直流屏交流UBC",
        "value": 413
    },
    {
        "ip": "127.0.0.1",
        "id": 66,
        "title": "直流屏交流UCA",
        "value": 414
    },
    {
        "ip": "127.0.0.1",
        "id": 67,
        "title": "直流屏合母电压",
        "value": 243
    },
    {
        "ip": "127.0.0.1",
        "id": 68,
        "title": "直流屏控母电压",
        "value": 220
    },
    {
        "ip": "127.0.0.1",
        "id": 69,
        "title": "直流屏电池电流",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 70,
        "title": "直流屏控母电流",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 71,
        "title": "UPS-主路电压",
        "value": 239
    },
    {
        "ip": "127.0.0.1",
        "id": 72,
        "title": "UPS-备用1",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 73,
        "title": "UPS-备用2",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 74,
        "title": "UPS-备用3",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 75,
        "title": "UPS-旁路输入电压",
        "value": 237
    },
    {
        "ip": "127.0.0.1",
        "id": 76,
        "title": "UPS-旁路输入频率",
        "value": 50
    },
    {
        "ip": "127.0.0.1",
        "id": 77,
        "title": "UPS-输出电压",
        "value": 236
    },
    {
        "ip": "127.0.0.1",
        "id": 78,
        "title": "UPS-输出频率",
        "value": 50
    },
    {
        "ip": "127.0.0.1",
        "id": 79,
        "title": "UPS-直流电压",
        "value": 242
    },
    {
        "ip": "127.0.0.1",
        "id": 80,
        "title": "UPS-输出电流",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 81,
        "title": "机内温度",
        "value": 44
    },
    {
        "ip": "127.0.0.1",
        "id": 82,
        "title": "交流屏1路电表-UA",
        "value": 239.8
    },
    {
        "ip": "127.0.0.1",
        "id": 83,
        "title": "交流屏1路电表-UB",
        "value": 239.7
    },
    {
        "ip": "127.0.0.1",
        "id": 84,
        "title": "交流屏1路电表-UC",
        "value": 240
    },
    {
        "ip": "127.0.0.1",
        "id": 85,
        "title": "交流屏1路电表-UAB",
        "value": 415.2
    },
    {
        "ip": "127.0.0.1",
        "id": 86,
        "title": "交流屏1路电表-UBC",
        "value": 415.4
    },
    {
        "ip": "127.0.0.1",
        "id": 87,
        "title": "交流屏1路电表-UCA",
        "value": 415.5
    },
    {
        "ip": "127.0.0.1",
        "id": 88,
        "title": "交流屏1路电表-IA",
        "value": 0.048
    },
    {
        "ip": "127.0.0.1",
        "id": 89,
        "title": "交流屏1路电表-IB",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 90,
        "title": "交流屏1路电表-IC",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 91,
        "title": "交流屏1路电表-P",
        "value": 0.014
    },
    {
        "ip": "127.0.0.1",
        "id": 92,
        "title": "交流屏1路电表-Q",
        "value": 0.006
    },
    {
        "ip": "127.0.0.1",
        "id": 93,
        "title": "交流屏1路电表-PF",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 94,
        "title": "交流屏1路电表-F",
        "value": 50
    },
    {
        "ip": "127.0.0.1",
        "id": 95,
        "title": "交流屏1路电表-正向有功",
        "value": 61.2
    },
    {
        "ip": "127.0.0.1",
        "id": 96,
        "title": "交流屏1路电表-反向有功",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 97,
        "title": "交流屏1路电表-正向无功",
        "value": 24.2
    },
    {
        "ip": "127.0.0.1",
        "id": 98,
        "title": "交流屏1路电表-反向无功",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 99,
        "title": "交流屏2路电表-UA",
        "value": 238.2
    },
    {
        "ip": "127.0.0.1",
        "id": 100,
        "title": "交流屏2路电表-UB",
        "value": 238.3
    },
    {
        "ip": "127.0.0.1",
        "id": 101,
        "title": "交流屏2路电表-UC",
        "value": 238.2
    },
    {
        "ip": "127.0.0.1",
        "id": 102,
        "title": "交流屏2路电表-UAB",
        "value": 412.6
    },
    {
        "ip": "127.0.0.1",
        "id": 103,
        "title": "交流屏2路电表-UBC",
        "value": 412.6
    },
    {
        "ip": "127.0.0.1",
        "id": 104,
        "title": "交流屏2路电表-UCA",
        "value": 412.5
    },
    {
        "ip": "127.0.0.1",
        "id": 105,
        "title": "交流屏2路电表-IA",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 106,
        "title": "交流屏2路电表-IB",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 107,
        "title": "交流屏2路电表-IC",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 108,
        "title": "交流屏2路电表-P",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 109,
        "title": "交流屏2路电表-Q",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 110,
        "title": "交流屏2路电表-PF",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 111,
        "title": "交流屏2路电表-F",
        "value": 50
    },
    {
        "ip": "127.0.0.1",
        "id": 112,
        "title": "交流屏2路电表-正向有功",
        "value": 0.8
    },
    {
        "ip": "127.0.0.1",
        "id": 113,
        "title": "交流屏2路电表-反向有功",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 114,
        "title": "交流屏2路电表-正向无功",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 115,
        "title": "交流屏2路电表-反向无功",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 116,
        "title": "电能质量通道2-F",
        "value": 50.03
    },
    {
        "ip": "127.0.0.1",
        "id": 117,
        "title": "电能质量通道2-UA",
        "value": 59.96
    },
    {
        "ip": "127.0.0.1",
        "id": 118,
        "title": "电能质量通道2-UB",
        "value": 59.93
    },
    {
        "ip": "127.0.0.1",
        "id": 119,
        "title": "电能质量通道2-UC",
        "value": 59.42
    },
    {
        "ip": "127.0.0.1",
        "id": 120,
        "title": "电能质量通道2-IA",
        "value": 6
    },
    {
        "ip": "127.0.0.1",
        "id": 121,
        "title": "电能质量通道2-IB",
        "value": 6
    },
    {
        "ip": "127.0.0.1",
        "id": 122,
        "title": "电能质量通道2-IC",
        "value": 5.7000003
    },
    {
        "ip": "127.0.0.1",
        "id": 123,
        "title": "电能质量通道2-A相电压偏差",
        "value": 3.82
    },
    {
        "ip": "127.0.0.1",
        "id": 124,
        "title": "电能质量通道2-B相电压偏差",
        "value": 3.78
    },
    {
        "ip": "127.0.0.1",
        "id": 125,
        "title": "电能质量通道2-C相电压偏差",
        "value": 2.8899999
    },
    {
        "ip": "127.0.0.1",
        "id": 126,
        "title": "电能质量通道2-电压不平衡度",
        "value": 0.049999997
    },
    {
        "ip": "127.0.0.1",
        "id": 127,
        "title": "电能质量通道2-电流不平衡度",
        "value": 1.42
    },
    {
        "ip": "127.0.0.1",
        "id": 128,
        "title": "电能质量通道2-总有功",
        "value": 0
    },
    {
        "ip": "127.0.0.1",
        "id": 129,
        "title": "电能质量通道2-总无功",
        "value": -90
    },
    {
        "ip": "127.0.0.1",
        "id": 130,
        "title": "电能质量通道2-功率因数",
        "value": 0.03
    },
    {
        "ip": "127.0.0.1",
        "id": 131,
        "title": "湿度1",
        "value": 33.7
    },
    {
        "ip": "127.0.0.1",
        "id": 132,
        "title": "温度1",
        "value": 19.5
    },
    {
        "ip": "127.0.0.1",
        "id": 133,
        "title": "湿度2",
        "value": 32.9
    },
    {
        "ip": "127.0.0.1",
        "id": 134,
        "title": "温度2",
        "value": 19.9
    },
    {
        "ip": "127.0.0.1",
        "id": 135,
        "title": "湿度3",
        "value": 36
    },
    {
        "ip": "127.0.0.1",
        "id": 136,
        "title": "温度3",
        "value": 18.6
    },
    {
        "ip": "127.0.0.1",
        "id": 137,
        "title": "湿度4",
        "value": 32.600002
    },
    {
        "ip": "127.0.0.1",
        "id": 138,
        "title": "温度4",
        "value": 19.9
    }
])
var item
onMounted(() => {
    getYC().then(res => {
        ycTableData.value = res.data
    })
    getYx().then(res => {
        yxTableData.value = res.data
    })
    item = setInterval(() => {
        getYC().then(res => {
            ycTableData.value = res.data
        })
        getYx().then(res => {
            yxTableData.value = res.data
        })
    }, import.meta.env.VITE_TIMING)
})
onUnmounted(() => {
    clearInterval(item)
})
</script>
<style scoped lang='scss'></style>