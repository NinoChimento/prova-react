import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = { 
        counters: [
        { id : 1, value: 0},
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
        { id: 5, value: 0 },
        ],
     }

    delete = (id) =>{
       const counters = this.state.counters.filter(c => c.id !== id);
       this.setState({ counters : counters});
    }

    render() { 
        console.log(this.props);
        return ( <div >
                  {this.state.counters.map( counter => <Counter 
                  key = {counter.id}
                  counter = {counter}
                  onDelete = {this.delete} 
                  />)}
                </div> );
    }
}
 
export default Counters;
