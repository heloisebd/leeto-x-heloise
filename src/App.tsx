import { Route, Routes } from 'react-router-dom';
import './App.css';
import GiftCardsList from './pages/GiftCardsList';
import GiftCardDetails from './pages/GiftCardDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GiftCardsList />} />
      <Route path="/gift-cards/:id" element={<GiftCardDetails />} />
    </Routes>
  );
}

export default App;
