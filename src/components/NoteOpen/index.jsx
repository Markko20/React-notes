import { useDispatch, useSelector } from 'react-redux';
import styles from './NoteOpen.module.scss';
import { clickChange, clickClose, clickDelete } from '../../redux/slices/noteSlice';

import React from 'react';

const NoteOpen = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.noteSlice.items);
  const id = useSelector((state) => state.noteSlice.idNow);
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');
  const { isNoteOpen } = useSelector((state) => state.noteSlice);

  React.useEffect(() => {
    items.map((obj) => {
      if (obj.id === id) {
        setTitle(obj.title);
        setText(obj.text);
      }
    });
  }, [id, items]);

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onChange = () => {
    dispatch(
      clickChange({
        id,
        text,
        title,
      }),
    );
  };

  const onClickClose = () => {
    dispatch(clickClose());
  };

  const onClickDelete = (objId) => {
    dispatch(clickDelete(objId));
  };

  return (
    <div className={isNoteOpen ? styles.wrapperOpen : styles.wrapperClose}>
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

      <input onChange={onChangeTitle} value={title} className={styles.title}></input>
      <textarea onChange={onChangeText} value={text} className={styles.text}></textarea>
      <div className={styles.btnGroup}>
        <img
          className={styles.deleteImg}
          onClick={() => onClickDelete(id)}
          width={20}
          height={30}
          src="../../img/delete.svg"
          alt=""
        />

        <button onClick={onChange} className={styles.btn}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default NoteOpen;
