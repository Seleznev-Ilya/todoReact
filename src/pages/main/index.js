import React, { useState } from 'react'
import Modal from '../../components/Modal/index'
import Task from '../../components/Task/index'
import ItemsList from '../../components/ItemsList/index'
import Filters from '../../components/Filters/index'
import Store from '../../store/index'
import { FILTER } from '../../constants/filter'
import './styles.scss'

const MainPage = () => {
    const store = new Store('Storage')
    const condition = new Store('Condition')

    const [todo, setTodo] = useState('')
    const [ishide, setIsHide] = useState(!store.getStore())
    const [todoStore, setTodoStore] = useState(store.getStore())

    const [conditionState, setConditionState] = useState(FILTER.ALL)
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [answer, setAnswer] = useState(false)

    const onSubmitInput = (submitValue) => {
        const newItem = {
            id: new Date().getTime(),
            value: submitValue,
            checkbox: false,
        }
        if (submitValue.trim() !== '') {
            store.sync([newItem])
        }
        setTodo(todo)
        setTodoStore(store.getStore())
        setIsHide(todoStore)
    }

    const onSubmitItemsInput = () => {
        setTodoStore(store.getStore())
        setIsHide(todoStore)
        setTodo(todo)
    }

    const onChangeInputValue = (inputValue) => {
        console.log(inputValue)
        setTodo(inputValue)
        setTodoStore(store.getStore())
        setIsHide(!!todoStore)
    }

    const handleSwitchImg = () => {
        store.selectAllItems()
        setIsHide(!ishide)
        setTodoStore(store.getStore())
    }

    const deleteItemCheckbox = (itemObj) => {
        setAnswer(itemObj)
        closeModalWindow()
    }

    const onButtonConfirm = () => {
        store.deleteItemCheckbox(answer.id)
        closeModalWindow()
    }
    const closeModalWindow = () => {
        setConfirmDelete(!confirmDelete)
    }

    const clearAllCompleted = () => {
        store.clearAllCompleted()
        setTodoStore(store.getStore())
        setIsHide(!!todoStore)
    }

    const handleCondition = (currentFilter) => {
        condition.setStore(currentFilter)
        setConditionState(currentFilter)
    }

    const storeFiltered = (store, currentState) => {
        let arrStore
        currentState === 'all'
            ? (arrStore = store)
            : (arrStore = store.filter((item) => {
                  return item.checkbox === (currentState === 'completed')
              }))

        return arrStore
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
                        onChangeInputValue={onChangeInputValue}
                    />
                    {store.getStore() ? (
                        <>
                            <ItemsList
                                className={'todoApp__itemlist'}
                                items={storeFiltered(
                                    store.getStore(),
                                    condition.getStore()
                                )}
                                onSubmitItemsInput={onSubmitItemsInput}
                                deleteItemCheckbox={deleteItemCheckbox}
                            />
                            <Filters
                                className="task__filres"
                                clearAll={clearAllCompleted}
                                onSelect={handleCondition}
                                conditionState={conditionState}
                            />
                        </>
                    ) : null}
                </div>
            </div>
            {confirmDelete ? (
                <Modal
                    className={'modal'}
                    title={'Do you want to delete?'}
                    description={answer.value}
                    onClose={closeModalWindow}
                    onConfirm={onButtonConfirm}
                />
            ) : null}
        </>
    )
}

export default MainPage
