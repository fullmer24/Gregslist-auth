import { Car } from "../Models/Car.js";
import { House } from "../Models/House.js";


export function getHouseForm(house = new House({})) {

    let submitAction = 'app.housesController.createHouse()'
    if (Car.id) {
        submitAction = `app.housesController.editHouse(${house.id})`
    }
    return `
<form class="col-10 bg-white p-3 elevation-2" onsubmit="app.houseController.createHouse()">
    <h3 class="text-primary">List Your House</h3>
    <div class="row">
        <div class="col-4">
            <label class="form-label" for="style">Style</label>
            <input class="form-control" type="text" minlength="5" id="style" name="style" value="${house.style}">
        </div>
        <div class="col-4">
            <label class="form-label" for="bdrm">Bedroom</label>
            <input class="form-control" type="number" id="bdrm" name="bdrm" value="${house.bdrm}">
        </div>
        <div class="col-4">
            <label class="form-label" for="bath">Bath</label>
            <input class="form-control" type="number" id="bath" name="bath" value="${house.bath}">
        </div>
        <div class="col-4">
            <label class="form-label" for="price">Price</label>
            <input class="form-control" type="number" min="1" id="price" name="price" value="${house.price}">
        </div>
        <div class="col-8">
            <label class="form-label" for="img">Image</label>
            <input class="form-control" type="text" id="img" name="img" value="${house.img}">
        </div>
        <div class="col-12">
            <label class="form-label" for="description">Description</label>
            <textarea class="w-100 form-control" name="description" id="description" value="${house.description}" rows="5"></textarea>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
        </div>
    </div>
</form> 
`

}





