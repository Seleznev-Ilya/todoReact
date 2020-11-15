import React, { useState } from 'react'

import Task from '../../components/Task/index'
import ItemsList from '../../components/ItemsList/index'
import Store from '../../store/index'
import './styles.scss'

const MainPage = () => {
    const store = new Store('Storage')
    const [todo, setTodo] = useState('')

    const [ishide, setIsHide] = useState(store.getStore())
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
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setTodo(event.target.value)
    }

    const handleSwitchImg = () => {
        store.selectAllItems()
        setIsHide(!ishide)
    }

    const changeItemCheckbox = (e) => {
        let itemId = e.target.parentNode.id.slice(
            e.target.parentNode.id.indexOf('k') + 1
        )
        store.selectItemCheckbox(itemId)
        setTodoStore(store.getStore())
        // store.deleteItemCheckbox(itemId)
    }

    const deleteItemCheckbox = (e) => {
        let itemId = e.target.parentNode.id.slice(
            e.target.parentNode.id.indexOf('s') + 2
        )

        store.deleteItemCheckbox(itemId)
        setTodoStore(store.getStore())
    }

    let storeItemsListis
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
                    />

                    {storeItemsListis}
                </div>
            </div>
        </>
    )
}

export default MainPage
