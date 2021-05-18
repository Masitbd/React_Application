import "./App.css";

import MyRouteAdvance from "./components/MyRouteAdvance";
import MyNavigationAdvance from "./components/MyNavigationAdvance";
import { BrowserRouter } from "react-router-dom";
import HookDemo from "./components/HookDemo";
import Son from "./components/Son";

function App() {
  return (
    <div>
      <Son />
    </div>
  );
}

export default App;

/*
<Hello name="Murad" />
      <Welcome id="10" />
      <MyFun />
      <Arrow />
      */

/*
import Arrow from "./components/Arrow";
import MyFun from "./components/Boot";
import Hello from "./components/Hello";
import Setstate from "./components/Setstate";
import StateWelcome from "./components/StateWelcome";
import Welcome from "./components/Welcome";
import Newdemo from "./components/Newdemo";
import Anotherdemo from "./components/Anotherdemo";
import Form from "./components/Form";
import Signup from "./components/Signup";
import TextArea from "./components/TextArea";
import Selectdropdown from "./components/Selectdropdown";
import Listview from "./components/Listview";
import JsonList from "./components/JsonList";

 <BrowserRouter>
        <MyNavigationAdvance />
        <MyRouteAdvance />
      </BrowserRouter>
*/
