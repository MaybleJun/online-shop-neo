import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price:25000, rate: 5, img:`https://www.google.com/url?sa=i&url=https%3A%2F%2Fsurgut.stores-apple.com%2Fcatalog%2Fapple-iphone-13-128-gb-belyj%2F&psig=AOvVaw1tfvb1MUo8Fw2AEyZL5oop&ust=1711367378160000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCMl7fqjIUDFQAAAAAdAAAAABAI`},
            {id: 2, name: "Iphone 12 pro", price:25000, rate: 5, img:`https://www.google.com/url?sa=i&url=https%3A%2F%2Fsurgut.stores-apple.com%2Fcatalog%2Fapple-iphone-13-128-gb-belyj%2F&psig=AOvVaw1tfvb1MUo8Fw2AEyZL5oop&ust=1711367378160000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCMl7fqjIUDFQAAAAAdAAAAABAI`},
            {id: 3, name: "Iphone 12 pro", price:25000, rate: 5, img:`https://www.google.com/url?sa=i&url=https%3A%2F%2Fsurgut.stores-apple.com%2Fcatalog%2Fapple-iphone-13-128-gb-belyj%2F&psig=AOvVaw1tfvb1MUo8Fw2AEyZL5oop&ust=1711367378160000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCMl7fqjIUDFQAAAAAdAAAAABAI`},
            {id: 4, name: "Iphone 12 pro", price:25000, rate: 5, img:`https://www.google.com/url?sa=i&url=https%3A%2F%2Fsurgut.stores-apple.com%2Fcatalog%2Fapple-iphone-13-128-gb-belyj%2F&psig=AOvVaw1tfvb1MUo8Fw2AEyZL5oop&ust=1711367378160000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCMl7fqjIUDFQAAAAAdAAAAABAI`},
        ]
        // this._selectedType = {}
        // this._selectedBrand = {}
        // this._page = 1
        // this._totalCount = 0
        // this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }

    // setSelectedType(type) {
    //     this.setPage(1)
    //     this._selectedType = type
    // }
    // setSelectedBrand(brand) {
    //     this.setPage(1)
    //     this._selectedBrand = brand
    // }
    // setPage(page) {
    //     this._page = page
    // }
    // setTotalCount(count) {
    //     this._totalCount = count
    // }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    // get selectedType() {
    //     return this._selectedType
    // }
    // get selectedBrand() {
    //     return this._selectedBrand
    // }
    // get totalCount() {
    //     return this._totalCount
    // }
    // get page() {
    //     return this._page
    // }
    // get limit() {
    //     return this._limit
    // }
}