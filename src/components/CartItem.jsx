import React from 'react'
import { useDispatch } from 'react-redux';
import { clickNote } from '../redux/slices/addCartSlice';

const CartItem = ({title, text, id}) => {
  const dispatch = useDispatch()

  const onClickNote = () => {
    dispatch(clickNote(id))
  }
  return (
    <div onClick={onClickNote} className="carts-item">
      <div className="carts-item__title">{title} </div>
      <div className="carts-item__subtitle">{text}</div>
    </div>
  );
}

export default CartItem