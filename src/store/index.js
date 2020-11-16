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

    this.clearAllCompleted = function () {
        const arr = this.getStore()
        const items = arr.filter((item) => {
            return item.checkbox === false
        })
        this.setStore(items)
    }
    this.getNumberActiveItems = function () {
        const arr = this.getStore()
        const items = arr.filter((item) => {
            return item.checkbox === false
        })
        return items
    }

    this.getItemObj = function (id) {
        const arr = this.getStore()
        const item = arr.find((item) => {
            return item.id === id
        })
        return item
    }

    this.deleteItemCheckbox = function (id) {
        const storeArr = this.getStore()
        let indexId

        storeArr.forEach((item, index) => {
            if (item.id === +id) {
                indexId = index
            }
        })
        storeArr.splice(indexId, 1)
        if (this.getStore().length) {
            this.setStore(storeArr)
        } else {
            this.deleteStore()
        }
    }

    this.selectItemCheckbox = function (id) {
        const storeArr = this.getStore()
        storeArr.forEach((item) => {
            if (item.id === +id) {
                item.checkbox = !item.checkbox
            }
        })
        this.setStore(storeArr)
    }

    this.selectAllItems = function () {
        const arrStore = this.getStore()
        const isAnyCheckFalse = arrStore.find((item) => item.checkbox === false)
        if (isAnyCheckFalse) {
            arrStore.forEach((item) => {
                item.checkbox = true
            })
        } else {
            arrStore.forEach((item) => {
                item.checkbox = false
            })
        }
        this.setStore(arrStore)
    }

    this.setItemData = function (arg, id) {
        const arrStore = this.getStore()
        arrStore.forEach((item) => {
            if (item.id === id) {
                item.value = arg
            }
        })
        this.setStore(arrStore)
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
