import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import CoinList from './components/CoinList';
import CoinDetail from './components/CoinDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<CoinList />} />
          <Route path="/coin-list" element={<CoinList />} />
          
          <Route path="/coin-detail/:id" element={<CoinDetail />} />
        </Routes>
      </Layout>
    </Router>
    );
}

export default App;
