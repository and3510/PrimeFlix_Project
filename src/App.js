import RoutesApp from './Routes'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <RoutesApp/>
    </div>
  );
}

export default App;
