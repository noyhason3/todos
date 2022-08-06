import { HashRouter, Route, Routes } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { Home } from './pages/Home/Home';
import './App.scss';
import { EditTodoModal } from './pages/Todo/EditTodoModal/EditTodoModal';
import { TodoPage } from './pages/Todo/TodoPage/TodoPage';
import { Header } from './cmps/Header/Header';

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoPage />} >
            <Route path=":id" element={<EditTodoModal />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

