import {ActionTypes} from "./ActionConstant";
import axios from "axios";

export const GetData=(payload)=>{

    return{
        type: ActionTypes.GET_ALL_DATA,
        payload:payload
    };
};

export const RemoveImage=(payload)=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_DATA,
        payload:payload
    };
};

export const SetLoading=()=>{
return{
    type:ActionTypes.LOADING_DATA
}
};

export const SetNoData=()=>{
    return {
        type:ActionTypes.NO_DATA
    }
};

export const FilterDataByAlphabet=(payload)=>{
    return {
        type:ActionTypes.FILTER_DATA_BY_ALPHABET,
        payload:payload
    }
};


export const INSERTDATA=(payload)=>{
return{
        type:ActionTypes.INSERT_DATA,
        payload:payload
    }
};



export const InsertDataAsync=(payload)=>{
    return async dispatch=> {
        dispatch(SetLoading());
        await axios.post('http://127.0.0.1:5000/insert',{
            label:payload.label,
            ImageURL:payload.ImageURL
        }).then((data)=>{
           if(data.data.data.length>0){


            
               dispatch(INSERTDATA(data.data.data));   
            }else{
               dispatch(SetNoData());
            }
        });
    }
};


export const GetDataAsync=()=>{
    
    return async dispatch=>{
        dispatch(SetLoading());
        await axios.get('http://127.0.0.1:5000/all')
        .then((data)=>{
           if(data.data.data.length>0){
               dispatch(GetData(data.data.data));   
            }else{
               dispatch(SetNoData());
            }
        });
    }
};


export const RemoveImageAsync= (payload)=>{
    return async dispatch=>{
        dispatch(SetLoading());
        console.log("GetDataAsyync -"+payload);
        await axios.post(`http://127.0.0.1:5000/delete`,{
            _id:payload
        })
        .then((data)=>{
           console.log(data.data.data);
           if(data.data.data!==null||data.data.data!==undefined||data.data.data.length>0){
               console.log(data.data.data);
               dispatch(RemoveImage(data.data.data));   
            }else{
               dispatch(SetNoData());
            }
        });
    }

};
