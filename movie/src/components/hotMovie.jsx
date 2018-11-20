import React, { Component } from 'react';
import axios from 'axios';
import Scroll from 'react-bscroll';
import 'react-bscroll/lib/react-scroll.css';

class hotMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            listData:[]
        }
        this.getData=this.getData.bind(this);
    }


    componentDidMount(){
        this.getData();
    }

    getData(){
        axios.get('/api/data').then(res=>{
            this.setState({
                listData:res.data.movieList
            })
        })
    }

    render() {
        const listData=this.state.listData;
        return (
        <div className='container'>
            <Scroll>
                <ul>{
                    listData.map((item,index)=>{
                        return <li key={index} className='clearfix'>
                            <dl className='clearfix'>
                                <dt className='col-xs-4'>
                                    <img src={item.img.replace(/w.h/,'128.180')} alt="" className='wf'/>
                                </dt>
                                <dd className='col-xs-8'>
                                    <h4 className='f16 b'>{item.nm}</h4>
                                    <span className='f12 block'>观众评分:<u className='f15 b'>{item.sc}</u></span>
                                    <span className='f12 '>主演：{item.star}</span>
                                    <p className='f12'>{item.showInfo}</p>
                                </dd>
                            </dl>
                        </li>
                    })
                }</ul>
                </Scroll>
            </div>
        );
    }
}

export default hotMovie;