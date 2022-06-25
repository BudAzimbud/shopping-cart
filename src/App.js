import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShoppingCart />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
