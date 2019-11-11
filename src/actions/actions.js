export const GETDATAFROMAPI = "GETDATAFROMAPI"

export function getDataFromApi(json) {

    return {
        type: GETDATAFROMAPI,
        json
    }

}