import { Route, Routes } from 'react-router-dom';
import './App.css';
import GiftCardDetails from './pages/GiftCardDetails';
import GiftCardsList from './pages/GiftCardsList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GiftCardsList />} />
      <Route path="/gift-cards/:id" element={<GiftCardDetails />} />
    </Routes>
  );
}

export default App;
