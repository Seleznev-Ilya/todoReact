function Store(storeName) {
    this.storage = {
        storeCur: JSON.parse(localStorage.getItem(storeName)),
    }

    this.setStore = function (arg) {
        localStorage.setItem(storeName, JSON.stringify(arg))
    }

    this.getStore = function () {
        return this.storage.storeCur
    }

    this.sync = function (arg) {
        if (this.getStore() === null) {
            this.setStore(arg)
        } else if (arg.length) {
            let a = this.getStore()
            this.setStore(a.concat(arg))
        }
    }
}

export default Store
