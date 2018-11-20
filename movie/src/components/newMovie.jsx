import React, { Component } from 'react';
import axios from 'axios';
import Scroll from 'react-bscroll';
import 'react-bscroll/lib/react-scroll.css';

import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';

class newMovie extends Component {
    constructor(props){
        super(props)
        this.state={
            mostExpectedData:[],
            comingListData:[]
        }
    }

    componentDidMount(){
        this.getMostExpectedData();
        this.getComingListData();
    }

    getMostExpectedData(){
        axios.get('/api/mostExpected').then(res=>{
            this.setState({
                mostExpectedData:res.data.coming
            })
        })
    }

    getComingListData(){
        axios.get('/api/comingList').then(res=>{
            this.setState({
                comingListData:res.data.coming
            })
        })
    }

    render() {
        const mostExpectedData=this.state.mostExpectedData;
        const comingListData=this.state.comingListData;
        return (
            <div className='container'>
                <Scroll>
                    <div>
                        <div className='most-expected'>
                            <h1 className='f14 p10'>近期最受期待</h1>
                            <ReactIScroll iScroll={iScroll} options={{mouseWheel: true, scrollbars: true, scrollX: true}}>
                                <div className='most-expected-list clearfix'>
                                {
                                    mostExpectedData.map((item,index)=>{
                                        return <div key={index} className='pl10 pr10'>
                                            <div><img src={item.img.replace(/w.h/,'128.180')} alt=""/></div>
                                            <h4 className='f16 b'>{item.nm}</h4>
                                            <p className='f12'>{item.comingTitle}</p>
                                        </div>
                                    })
                                }
                                </div>
                            </ReactIScroll>
                            
                        </div>
                        <div className='coming-list'>
                            <ul>{
                                comingListData.map((item,index)=>{
                                    return <li key={index} className='clearfix'>
                                        <h3 className='f14'>{item.comingTitle}</h3>
                                            <dl className='clearfix'>
                                                <dt className='col-xs-4'>
                                                    <img src={item.img.replace(/w.h/,'128.180')} alt="" className='wf'/>
                                                </dt>
                                                <dd className='col-xs-8'>
                                                    <h4 className='f16 b'>{item.nm}</h4>
                                                    <span className='f12 block'>
                                                        <u className='f15 b'>{item.wish}</u>人想看
                                                    </span>
                                                    <span className='f12'>主演：{item.star}</span>
                                                    <p className='f12'>{item.showInfo}</p>
                                                </dd>
                                        </dl>
                                    </li>
                                })
                            }</ul>
                        </div>
                    </div>
                </Scroll>
            </div>
        );
    }
}

export default newMovie;
