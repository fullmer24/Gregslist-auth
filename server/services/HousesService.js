// @ts-ignore
import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class HousesService {
    async getHouses() {
        //                                      v query object
        let houses = await dbContext.Houses.find()
        return houses
    }
    async getHouseById(houseId) {
        let house = await dbContext.Houses.findById(houseId)
        if (!house) {
            throw new BadRequest('Invalid House Id')
        }
        return house
    }
    async createHouse(houseData) {
        let house = await dbContext.Houses.create(houseData)
        return house
    }

    async editHouse(houseId, houseData) {
        let house = await this.getHouseById(houseId)

        house.style = houseData.style || house.style
        house.bdrm = houseData.bdrm || house.bdrm
        house.bath = houseData.bath || house.bath
        house.price = houseData.price || house.price
        house.img = houseData.img || house.img
        house.description = houseData.description || house.description

        await house.save() // never use update its dangerous
        return house
    }

    async deleteHouse(houseId) {
        let house = await this.getHouseById(houseId)

        await house.remove() // this deletes it from the database
        return house

    }
}


export const housesService = new HousesService()