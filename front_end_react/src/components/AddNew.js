import React, { useState } from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import "./AddNew.scss";
import {InsertDataAsync} from "../Redux/ActionCreators";



const AddNewModal=({Trigger,Modal})=>{
    const dispatch=useDispatch();

    const [value,setvalue]=useState({
          label:"",
          ImageURL:""
        });

    const [error,setError]=useState({
        label:"",
        ImageURL:""
    });

    const validateForm=()=>{
        let Err={};
        
        if(!value.label){
             Err.label="* Label Required";
            }
        if(!value.ImageURL){
             Err.ImageURL="* URL Required";
            };
        let re=/(https:)(\S+\.com)(\S+)/;

        if(!re.test(value.ImageURL)){
            Err.ImageURL="* URL should be Https link";
        };
        return Err;
    };
    
    const handleChange=(event)=>{
        setvalue({
            ...value,
            [event.target.name]:event.target.value
        });
    };
       
    
    const submitBt=(event)=>{

        event.preventDefault();
        setError(validateForm());

        if(Object.keys(error).length===0){
            dispatch(InsertDataAsync(value));
            Trigger(!Modal);
            };
        };



   return ReactDom.createPortal(

       <div className="Modal_Wrapper">

       <div className="AddnewModal">
           <span id="Modal_title">Add a new photo</span>
           <div>
               <span>Label</span>
               <input type="text" placeholder="Suspendisse elit massa" name="label" onChange={handleChange} value={value.label} />
               {error.label&&<p className="red">{error.label}</p>}
           </div>
           <div>
               <span>Photo URL</span>
               <input type="text" placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..." name="ImageURL" value={value.ImageURL}  onChange={handleChange}/>
               {error.ImageURL&&<p className="red">{error.ImageURL}</p>}
           </div>

           <div className="button_sec">
               <button onClick={()=>Trigger(!Modal)}>cancel</button>
               <button onClick={(event)=>submitBt(event)}>submit</button>
           </div>
       </div>
       </div>
           ,
       document.getElementById("modal")
   )

}

export default AddNewModal;


