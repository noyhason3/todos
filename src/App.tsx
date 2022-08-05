import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { Home } from './pages/Home/Home';
import { Todo } from './pages/Todo/Todo';
import './App.scss';

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

