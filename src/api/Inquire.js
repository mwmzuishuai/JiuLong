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
export { getEmsdetail, getAmmeter }