import React, { Component } from 'react';

import NewMovie from './newMovie';
import HotMovie from './hotMovie';

class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            flag:true
        }
        this.IsOpen=this.IsOpen.bind(this);
    }

    IsOpen(){
        this.setState({
            flag:!this.state.flag
        })
    }

    render() {
        const {flag}=this.state;
        return (
            <div>
                <div className="nav">
                <select><option>北京</option></select>
                <div onClick={()=>{this.IsOpen()}}>正在热映</div>
                <div onClick={()=>{this.IsOpen()}}>即将上映</div>
                <i className="glyphicon glyphicon-search f18"></i>
                </div>
                {
                    flag?<NewMovie />:<HotMovie />
                }
            </div>
        );
    }
}

export default Main;
