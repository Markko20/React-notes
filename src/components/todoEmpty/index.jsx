import React from 'react'
import styles from './todoEmpty.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { clickAdd, clickClose } from '../../redux/slices/addCartSlice'
import addCartSlice from '../../redux/slices/addCartSlice'

const TodoEmpty = () => {
  const dispatch = useDispatch()
  const [titleValue, setTitleValue] = React.useState('')
  const [textValue, setTextValue] = React.useState('')
  const id =  useSelector(state => state.addCartSlice.id) 

  const onClickClose = () => {
    dispatch(clickClose())
  }

  const onChangeTitle = (event) => {
    setTitleValue(event.target.value)
  }

  const onChangeText = (event) => {
    setTextValue(event.target.value)
  }

  const onClickAdd = () => {
    if(titleValue || textValue)
    dispatch(clickAdd({
      title:titleValue,
      text:textValue, 
      id
    }))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <svg
          onClick={() => onClickClose()}
          className={styles.imgClose}
          width="37"
          height="38"
          viewBox="0 0 37 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="1.36351" y1="0.656688" x2="35.3635" y2="36.6567" stroke="#5F6368" />
          <line x1="35.7652" y1="2.35761" x2="0.349434" y2="36.9657" stroke="#5F6368" />
        </svg>
      </div>
      <input onChange={onChangeTitle} value={titleValue} type="text" className={styles.title} placeholder="Введите заголовок" />

      <textarea value={textValue} onChange={onChangeText} className={styles.text} placeholder="Введите текст заметки"></textarea>
      <div className={styles.btnGroup}>
        <button onClick={onClickAdd} className={styles.btn}>
          <h5>Сохранить</h5>
        </button>
      </div>
    </div>
  );
}

export default TodoEmpty