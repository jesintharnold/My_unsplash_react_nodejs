import React, {useRef} from "react";
import './Masonry.scss';

const MasonryItem=({data,row_gap,grid_auto_row,data_dispatch})=>{
    const ImageRef=useRef(null);
    const WrapperRef=useRef(null);
    let row_span;

    const setDimensions=()=>{
        const {height}=ImageRef.current.getBoundingClientRect();
        row_span=Math.round(Math.round((height+row_gap))/Math.round(grid_auto_row+row_gap));
        WrapperRef.current.style.gridRowEnd=`span ${row_span}`;
        ImageRef.current.style.height=`100%`;
    };

    return(
        <figure className="Image_container"  ref={WrapperRef} >
            <img src={data.ImageURL} alt="Not found"  onLoad={setDimensions}  ref={ImageRef}  />
            <figcaption className="Image_caption_container">
                <button onClick={()=>data_dispatch(data._id)}>delete</button>
                <p>{data.label}</p>
            </figcaption>
        </figure>
    )
}


MasonryItem.defaultProps={
    row:8,
    grid_auto_row:8
}


export default MasonryItem;




