
import "./Masonry.scss";
import {GetDataAsync,RemoveImageAsync} from "../Redux/ActionCreators"
import {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import MasonryItem from "./MasonryItem";


const Masonry=({allProducts_,GetDataAsync_,RemoveImageAsync_,loading_,hasData_,searchtext_,filter_})=>{

    const gridRef=useRef(null);
    const [gap,setGap]=useState(0);
    const [autoRow,setautoRow]=useState(0);
    let row_span;
    
    function Resize(){
        Array.from(gridRef.current.children).forEach((data)=>{
            if(data){
                const {height}=data.getBoundingClientRect();
                row_span=Math.round(Math.round((height+10))/Math.round(25));
                data.style.gridRowEnd=`span ${row_span}`;
            }

        });
    };
    
    useEffect(()=>{
        const grid_auto_row=Number.parseInt(getComputedStyle(gridRef.current).getPropertyValue('grid-auto-rows'));
        const row_gap=Number.parseInt(getComputedStyle(gridRef.current).getPropertyValue('grid-row-gap'));
        setGap(row_gap);
        setautoRow(grid_auto_row);
        GetDataAsync_();
        window.addEventListener("resize",Resize);
        return ()=>{
          window.addEventListener("resize",Resize);
        }
        //allProducts_?.length
        //allProducts_!==undefined

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
      <div className="masonry_main" ref={gridRef} id="Masonry_element" style={(hasData_===false || loading_===true)?{display:"flex",justifyContent:'center'}:{display:"grid"}}>
          {hasData_?((loading_)?
          (<div className="sec_main" style={loading_?{height:'5px',width:`50%`}:null}><div id="load"></div></div>):
          ( (filter_?allProducts_.filter(data=>data.label.toLowerCase().includes(searchtext_)):allProducts_).map((data,index)=><MasonryItem data={data} grid_auto_row={autoRow} row_gap={gap} data_dispatch={RemoveImageAsync_} key={index}/>))):
          (<div className="sec_main" style={hasData_?null:{height:'100px',width:'100%'}} ><span>No Images found.Please try to add some Images</span></div>)}
      </div>
  )
}

const mapStateToProps=state=>{
    return{
      allProducts_:state.allProducts.Products,
      loading_:state.allProducts.Loading,
      hasData_:state.allProducts.hasData,
      searchtext_:state.allProducts.searchtext,
      filter_:state.allProducts.filter
    };
}

const mapDispatchToProps=dispatch=>{
    return {
        GetDataAsync_:()=>dispatch(GetDataAsync()),
        RemoveImageAsync_:(data)=>dispatch(RemoveImageAsync(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Masonry);