import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
    async editHouse(houseData) {
        let res = await api.put(`/api/houses/${houseData.id}`, houseData)
        let house = new House(res.data)
        let houseIndex = ProxyState.houses.findIndex(h => h.id == houseData.id)
        ProxyState.houses.splice(houseIndex, 1, house)
        ProxyState.houses = ProxyState.houses
    }

    async getHouses() {
        let res = await api.get('/api/houses')
        ProxyState.houses = res.data.map(h => new House(h))
    }

    async createHouse(houseFormData) {

        let res = await api.post('/api/houses', houseFormData)
        let house = new House(res.data)
        ProxyState.houses = [...ProxyState.houses, house]
    }

    async deleteHouse(HouseId) {
        let url = `/api/houses/${HouseId}`
        await api.delete(url)
        ProxyState.houses = ProxyState.houses.filter(h => h.id != HouseId)
    }

}

export const housesService = new HousesService()