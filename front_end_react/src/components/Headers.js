import './Headers.scss';
import logosvg from "../Assests/my_unsplash_logo.svg";
import search from "../Assests/search.png";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {FilterDataByAlphabet} from "../Redux/ActionCreators";


export const Headers=({Trigger,Modal})=>{

    const [mobile,setMobile]=useState(false);
    const dispatch =useDispatch();

    useEffect(()=>{
        const {width}=document.getElementById('root').getBoundingClientRect();
        setMobile(width<480?true:false);
    },[]);
    
    return(
        <nav>
        <div className="Head">

            <div className="left">
                <img src={logosvg} alt="Not Found"/>
                <div className="input_component">
                    <button style={{backgroundImage:`url(${search})`}}/>
                    <input type="text" placeholder="Search by name" onChange={(e)=>dispatch(FilterDataByAlphabet(e.target.value.toLocaleLowerCase()))}/>
                </div>
            </div>
            <button onClick={()=>Trigger(!Modal) }>{mobile?'+':'Add a photo'}</button>
        </div>
        </nav>
    )
}




export default Headers;
