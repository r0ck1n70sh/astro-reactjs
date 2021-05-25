import axios from 'axios';
import {Component} from 'react';

import './App.css';

const api_key = '34Bsh7bCaw4tx9g0ZztPocRXHrq91svkPLfOiyBR';
const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

class Apod extends Component{
    state = {
        title: "",
        text: "",
        imgSrc: "",
    };

    componentDidMount(){
        axios.get(url).then(res =>{
            console.log(JSON.stringify(res));
            return res.data;
        }).then(res => {
            this.setState({
                title: res.title,
                text: res.explanation,
                imgSrc: res.url,
            })
        }).catch(err => {
            console.log(err);
        })
    };

    render(){
        return(
            <div>
                <h1>Astronomical Picture of the Day!</h1>
                <h2>{ this.state.title }</h2>
                <p>{ this.state.text }</p>
                <iframe src={ this.state.imgSrc } className='img-apod'/>
            </div>
        );
    };

}

export default Apod;