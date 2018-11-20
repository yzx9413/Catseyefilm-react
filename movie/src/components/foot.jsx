import React, { Component } from 'react';

class Foot extends Component {
    constructor(props){
        super(props)
        this.state={
            footData:[
                {con:'电影',icon:'glyphicon glyphicon-facetime-video'},
                {con:'影院',icon:'glyphicon glyphicon-unchecked'},
                {con:'我的',icon:'glyphicon glyphicon-user'}
            ]
        }
    }

    render() {
        const list=this.state.footData;
        return (
            <div>{
                    list.map((item,index)=>{
                        return <dl key={index} className='text-center'>
                            <dt><i className={item.icon}></i></dt>
                            <dd className='f12'>{item.con}</dd>
                        </dl>
                    })
                }</div>
        );
    }
}

export default Foot;
