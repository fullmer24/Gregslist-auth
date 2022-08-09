import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../Components/HouseForm.js";
// @ts-ignore
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawHouses() {
    let template = ''
    // @ts-ignore
    let houses = ProxyState.house
    houses.forEach(h => template += h.Template)
    // console.log('drawing cars', template)
    // @ts-ignore
    document.getElementById('listings').innerHTML = template
    // @ts-ignore
    document.getElementById('form').innerHTML = getHouseForm()
}

export class HousesController {
    constructor() {
        ProxyState.on('houses', _drawHouses)
        this.getHouses()
    }

    viewHouses() {
        _drawHouses()
        this.getHouses()
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            console.error('[Get Houses]', error)
            Pop.error(error)
        }
    }

    async createHouse() {
        try {
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            let form = window.event.target

            // @ts-ignore
            let newHouse = {
                // @ts-ignore
                style: form.style.value,
                // @ts-ignore
                bdrm: form.bdrm.value,
                // @ts-ignore
                bath: form.bath.value,
                // @ts-ignore
                price: form.price.value,
                // @ts-ignore
                imgUrl: form.img.value,
                // @ts-ignore
                description: form.description.value,
            }
            // @ts-ignore
            await housesService.createHouse(newHouse)
            // @ts-ignore
            form.reset()
        } catch (error) {
            console.error('[Create House]', error)
            Pop.error(error)
        }
    }

    async deleteHouse(houseId) {
        try {
            // @ts-ignore
            await carsService.deleteHouse(houseId)
        } catch (error) {
            console.error('[Delete House]', error)
            Pop.error(error)
        }
    }

    adjustHouse(houseId) {
        let house = ProxyState.houses.find(h => h.id == houseId)
        // @ts-ignore
        document.getElementById('form').innerHTML = getHouseForm(house)
    }

    async editHouse(houseId) {
        try {
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            let form = window.event.target
            let houseData = {
                id: houseId,
                // @ts-ignore
                style: form.style.value,
                // @ts-ignore
                bdrm: form.bdrm.value,
                // @ts-ignore
                bath: form.bath.value,
                // @ts-ignore
                price: form.price.value,
                // @ts-ignore
                imgUrl: form.img.value,
                // @ts-ignore
                description: form.description.value,
            }
            // @ts-ignore
            await housesService.editHouse(HouseData)
        } catch (error) {
            console.error('[Edit house]', error)
            Pop.error(error)
        }
    }
}