import CartItem from './components/CartItem';
import './scss/index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { clickPlus } from './redux/slices/noteSlice';
import TodoEmpty from './components/addNote';
import NoteOpen from './components/NoteOpen';

function App() {
  const { items } = useSelector(state => state.noteSlice)
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(clickPlus())
  }

  return (
    <div className="page-wrapper">
      <NoteOpen />
      <TodoEmpty />
      <header className="header">
        <h1 className="header__logo">React Notes</h1>
      </header>

      <main className="main">
        <div className="container">
          <h3 className="main-title">Мои заметки</h3>

          <div className="carts">
            {items.length > 0 ? (
              items.map((obj) => <CartItem key={obj.id} {...obj} />)
            ) : (
              <div className='todo-empty'>
                <h3>Упс, тут пока пусто😕</h3>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div onClick={() => onClickPlus()} className="footer-plus">
          <img src="../img/plus.svg" alt="Добавить заметку" />
        </div>
      </footer>
    </div>
  );
}

export default App;
