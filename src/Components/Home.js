import React, { Component } from 'react';
import axios from 'axios'
import '../css/home.css'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      deta: []
    };
  }

  async componentDidMount(){
    const resp= await axios.get('https://fakestoreapi.com/products/')
    this.setState({deta : resp.data})
   console.log(this.state.deta,)
  }
  
  render() {
    return (<div className="flex flex-row bg-gray-400 w-2/3 mx-auto mt-10 home-div">
     {this.state.deta.map((user) => (
       <div className="text-center w-1/4 p-2 m-2 bg-white box-wrapper">
          <img className='image' src={user.image} />
          <h1 className='Price'>PRICE</h1>
         
          <h2 className='price2'>{user.price}</h2>
           
       </div>
     ))}
    </div>
    );
  }
}





