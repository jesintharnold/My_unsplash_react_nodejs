import {ActionTypes} from "./ActionConstant";
const InitialState={
    Loading:false,
    Products:[],
    hasData:true,
    searchtext:"",
    filter:false
};


export const GetReducer=(state=InitialState,{type,payload})=>{
 
    switch (type){
        case ActionTypes.GET_ALL_DATA:
            return Object.assign({},state,{
                Loading:false,
                Products:[...payload],
                hasData:true
            });

        case ActionTypes.REMOVE_SELECTED_DATA:
            return Object.assign({},state,{
                Loading:false,
                Products:[...payload],
                hasData:payload.length===0?false:true
            });

        case ActionTypes.LOADING_DATA:
            return Object.assign({},state,{
                Loading:true
            });

        case ActionTypes.NO_DATA:
            return Object.assign({},state,{
                Loading:false,
                hasData:false
            });

        case ActionTypes.FILTER_DATA_BY_ALPHABET:
            return Object.assign({},state,{
                searchtext:payload,
                filter:(payload==null||payload==="")?false:true
            });
            
        case ActionTypes.INSERT_DATA:
            return Object.assign({},state,{
                Products:[...payload],
                Loading:false,
                hasData:true
            });
        default:
            return state;
    }

};


