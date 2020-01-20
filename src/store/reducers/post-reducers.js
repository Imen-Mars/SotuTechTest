import Types from "../types"
const initial ={
    posts:[],
    loading:false
}

export default function(state =initial,action){

    switch(action.type){
        case Types.SET_POSTS: return {
            ...state,posts:action.data,loading:false
        };
        case Types.SET_LOADING:return {
            ...state,loading:true
        }
        default: return state
    }
}