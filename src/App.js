import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from './pages/single/Single'
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formsource";
import './style/dark.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } =  useContext(DarkModeContext)
  
  return (
    <div className={darkMode ? "app dark" : "app"}>
     <BrowserRouter>
     <Routes>
        <Route path="/">
        <Route index element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="users">
          <Route index element={<List/>}/>
          <Route path=":userID" element={<Single />}></Route>
          <Route path="new" element={<New inputs = {userInputs} title='Create Profile'/>}></Route>
        </Route>
        <Route path="products">
          <Route index element={<List/>}/>
          <Route path=":produtId" element={<Single />}></Route>
          <Route path="new" element={<New inputs = {productInputs} title = 'Add New Product'/>}></Route>
        </Route>
        </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
