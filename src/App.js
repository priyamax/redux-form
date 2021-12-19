import logo from './logo.svg';
import './App.css';
import ContactPage from './component/Main';
import { Provider } from 'react-redux';
import store from '../src/store/index'
function App() {
  return (
    <div>
    <h1><center>Redux-Form</center></h1>
    <Provider store={store}>
    <ContactPage />
    </Provider>
    </div>
  );
}

export default App;
