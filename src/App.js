import { ToastContainer } from 'react-toastify';
import './App.css';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import store from './app/store'
function App() {
  return (
    <Provider store={store} >
      <AppRouter/>
      <ToastContainer/>
    </Provider>
  );
}

export default App;
