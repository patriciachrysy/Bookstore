import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
