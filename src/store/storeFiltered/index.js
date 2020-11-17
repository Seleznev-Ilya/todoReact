function storeFiltered(store, condition) {
    let arrStore

    switch (condition) {
        case 1:
            arrStore = store.filter((item) => {
                return item.checkbox === false
            })

            break
        case 2:
            arrStore = store.filter((item) => {
                return item.checkbox === true
            })

            break
        default:
            arrStore = store
    }
    return arrStore
}

export default storeFiltered
