import Types from "../types";
import axios from "axios";
import {host} from "../../config/host";
const loadPosts = () => dispatch => {
    dispatch({type:Types.SET_LOADING ,data:true});
    axios.get(host+'/posts').then(response=>{
        dispatch({type:Types.SET_POSTS,data:response.data})
    });
}

export {
    loadPosts
}