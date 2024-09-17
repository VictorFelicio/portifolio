import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import AppRoutes from './app.routes.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
