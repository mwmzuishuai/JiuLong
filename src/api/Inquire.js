import request from "./request";

const getEmsdetail = (stationNumber, id) => {
    return request({
        url: `/EmsCore/ModbusEmsCoreModels/${stationNumber}/${id}`,
        method: "get",
    });
}
const getAmmeter = (id) => {
    return request({
        url: `/Meter/MeterData?id=${id}`,
    })
}
const getYC = () => {
    return request({
        url: `/Iec104/Iec104YaoCe`,
    })
}
const getYx = () => {
    return request({
        url: `Iec104/Iec104YaoXin`,
    })
}
const getDataLine = (n) => {
    return request({
        url: `MonitorDevice/MonitorData/${n}`,
    })
}
export { getEmsdetail, getAmmeter, getYC, getYx, getDataLine }