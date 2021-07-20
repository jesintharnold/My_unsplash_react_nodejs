import './App.scss';
import {Headers} from "./components/Headers";
import React, {useState} from "react";
import Masonry from "./components/Masonry";
import AddNewModal from "./components/AddNew";



function App() {
    const [Modal,setModal]=useState(false);




    return (
        <div className="App">
        <Headers Trigger={setModal} Modal={Modal}/>
        <Masonry/>
        {Modal?<AddNewModal Trigger={setModal} Modal={Modal}/>:null}


        </div>
  );
}

export default App;
