import React, { useState } from 'react'

import Task from '../../components/Task/index'
import ItemsList from '../../components/ItemsList/index'
import Filters from '../../components/Filters/index'
import Store from '../../store/index'
import './styles.scss'

const MainPage = () => {
    const store = new Store('Storage')
    const [todo, setTodo] = useState('')

    const [ishide, setIsHide] = useState(!store.getStore())
    const [todoStore, setTodoStore] = useState(store.getStore())

    const onSubmitInput = (event) => {
        event.preventDefault()

        const newItem = {
            id: new Date().getTime(),
            value: todo,
            checkbox: false,
        }

        if (todo.trim() !== '') {
            store.sync([newItem])
            setTodo('')
        }
        setTodoStore(store.getStore())
        setIsHide(!!todoStore)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setTodo(event.target.value)
        setTodoStore(store.getStore())
        setIsHide(!!todoStore)
    }

    const handleSwitchImg = () => {
        store.selectAllItems()
        setIsHide(!ishide)
        setTodoStore(store.getStore())
    }

    const changeItemCheckbox = (e) => {
        let itemId = e.target.parentNode.id.slice(
            e.target.parentNode.id.indexOf('k') + 1
        )
        store.selectItemCheckbox(itemId)
        setTodoStore(store.getStore())
        setIsHide(!!todoStore)
    }

    const deleteItemCheckbox = (e) => {
        let itemId = e.target.parentNode.id.slice(
            e.target.parentNode.id.indexOf('s') + 2
        )

        store.deleteItemCheckbox(itemId)
        setTodoStore(store.getStore())
        setIsHide(!!todoStore)
    }

    const clearAllCompleted = () => {
        store.clearAllCompleted()

        setTodoStore(store.getStore())
        setIsHide(!!todoStore)
    }

    let storeItemsListis, storeFilters
    if (store.getStore()) {
        storeItemsListis = (
            <ItemsList
                className={'todoApp__itemlist'}
                items={store.getStore()}
                changeItemCheckbox={changeItemCheckbox}
                deleteItemCheckbox={deleteItemCheckbox}
            />
        )
    } else {
        storeItemsListis = null
    }

    if (store.getStore()) {
        storeFilters = (
            <Filters className="task__filres" clearAll={clearAllCompleted} />
        )
    } else {
        storeFilters = null
    }

    return (
        <>
            <h1>Todo list</h1>
            <div className={'todoApp'}>
                <div className="task__wrapper">
                    <Task
                        ishide={ishide}
                        handleSwitchImg={handleSwitchImg}
                        className={'task__input'}
                        onSubmitInput={onSubmitInput}
                        handleSubmit={handleSubmit}
                        value={todo}
                        // onBlurTodo={onSubmitInput}
                    />

                    {storeItemsListis}

                    {storeFilters}
                </div>
            </div>
        </>
    )
}

export default MainPage
