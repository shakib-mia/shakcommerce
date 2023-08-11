import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  Route,
  Routes,
} from "react-router-dom";
import { router } from './routes';


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        {router.map((item, key) => <Route {...item} key={key} />)}
      </Routes>
    </>
  )
}

export default App
