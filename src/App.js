import './App.css';
import '@mantine/core/styles.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from './components/Layout/Layout';
import AttractionCardPagintation from './components/Attractions/AttractionCardPagination/AttractionCardPagination';
import MapWithIcon from './components/Map/Map';
import { YMaps } from 'react-yandex-maps';
import CardPagination from './components/Shop/CardPagination/CardPagination';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AuthenticationForm from './components/AutorizationComponent/AuthFormComp/AuthenticationForm';
import AuthenticationPage from './components/AutorizationComponent/AuthPage/AuthPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/welcome" element={<WelcomePage />}>
      </Route>
      <Route path="/authentication" element={<AuthenticationPage />}>
      </Route>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<YMaps><MapWithIcon /></YMaps>} />
        <Route path="/attractions" element={<AttractionCardPagintation />} />
        <Route path="/events" element={<CardPagination />} />
        <Route index element={<Navigate to="/home" />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
