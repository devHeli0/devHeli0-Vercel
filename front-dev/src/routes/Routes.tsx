import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from '../pages/Home';
import Contato from '../pages/Contato';
import Projetos from '../pages/Projetos';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" replace />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/projetos" element={<Projetos/>} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
