import request from "./request";

const getEmsdetail = (stationNumber, id) => {
    return request({
        url: `/EmsCore/ModbusEmsCoreModels/${stationNumber}/${id}`,
        method: "get",
    });
}
export { getEmsdetail }