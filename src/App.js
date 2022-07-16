import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import store from './redux/configureStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact="true" path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
