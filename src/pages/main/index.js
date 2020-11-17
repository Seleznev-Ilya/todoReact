import React, { useState } from 'react'

import ModalWindow from '../../components/ModalWindow/index'
import Task from '../../components/Task/index'
import ItemsList from '../../components/ItemsList/index'
import Filters from '../../components/Filters/index'
import Store from '../../store/index'
import storeFiltered from '../../store/storeFiltered/index'
import './styles.scss'

const MainPage = () => {
    const store = new Store('Storage')
    const condition = new Store('Condition')
    condition.setStore(Number(condition.getStore()))

    const [todo, setTodo] = useState('')
    const [ishide, setIsHide] = useState(!store.getStore())
    const [todoStore, setTodoStore] = useState(store.getStore())

    const [conditionState, setConditionState] = useState(condition.getStore())
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [answer, setAnswer] = useState(false)

    const onSubmitInput = (event) => {
        event.preventDefault()

        const newItem = {
            id: new Date().getTime(),
            value: todo,
            checkbox: false,
        }

        if (todo.trim() !== '') {
            store.sync([newItem])
        }

        setTodo('')
        setTodoStore(store.getStore())
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
        const itemId = e.target.parentNode.id.slice(
            e.target.parentNode.id.indexOf('k') + 1
        )

        store.selectItemCheckbox(itemId)

        setTodoStore(store.getStore())
        setIsHide(!!todoStore)
    }
    //+++++++ ==++++++ =++++++++=+++++++

    const deleteItemCheckbox = (itemObj) => {
        setAnswer(itemObj)
        closeModelWindow()
    }

    const closeModelWindow = () => {
        setConfirmDelete(!confirmDelete)
    }

    const onButtonConfirm = () => {
        store.deleteItemCheckbox(answer.id)
        setConfirmDelete(!confirmDelete)
    }
    const onButtonCansel = () => {
        setConfirmDelete(!confirmDelete)
    }
    //+++++++ ==++++++ =++++++++=+++++++

    const clearAllCompleted = () => {
        store.clearAllCompleted()

        setTodoStore(store.getStore())
        setIsHide(!!todoStore)
    }

    const handleCondition = (e) => {
        condition.setStore(+e.target.parentNode.id)

        setConditionState(+e.target.parentNode.id)
    }

    return (
        <>
            {confirmDelete ? (
                <ModalWindow
                    answer={store.getStoreItem(answer.id)}
                    closeModelWindow={closeModelWindow}
                    onButtonConfirm={onButtonConfirm}
                    onButtonCansel={onButtonCansel}
                />
            ) : null}
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
                    {store.getStore() ? (
                        <>
                            <ItemsList
                                className={'todoApp__itemlist'}
                                items={storeFiltered(
                                    store.getStore(),
                                    condition.getStore()
                                )}
                                changeItemCheckbox={changeItemCheckbox}
                                deleteItemCheckbox={deleteItemCheckbox}
                            />
                            <Filters
                                className="task__filres"
                                clearAll={clearAllCompleted}
                                handleCondition={handleCondition}
                                conditionState={conditionState}
                            />
                        </>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default MainPage
