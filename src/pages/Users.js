import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
//import {connect} from "react-redux";

export default class Users extends React.Component{
    state={
        users:[]
    }
   
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        
        .then(res=>{
            console.log(res.data)

            this.setState({
                users: res.data

            })
        })

    }
      
      
   
    render(){
       
    return(
  
    <div className='card-post'>
        {this.state.users.map(user=> 
    <Link to= {"/Posts/" + user.id} className="form-control btn btn-primary card-margin">
             {user.name}
             
              
    </Link>
)}</div>
    );
}

}
//const mapDispatchToProps =(dispatch) =>{
 //   return{
   //     addToCart : ()=>dispatch(addToCart(productInfo,quantity) )
    //  };
//export default connect(null,mapDispatchToProps)(Details);


