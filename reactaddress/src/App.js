import './App.css';
import Page from "./components/page"
import { DBConfig } from './components/DBConfig';
import { initDB } from 'react-indexed-db';
 
initDB(DBConfig);

function App() {
  return  <Page />
}

export default App;
