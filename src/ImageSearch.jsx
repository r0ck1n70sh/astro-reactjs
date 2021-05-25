import axios from 'axios';
import { createRef, useState } from 'react';
import ImageList from './comps/ImageList';
import './App.css';

const searchInput = createRef();

const ImageSearch = (props) => {
    const [data, setData] = useState([]);

    const formSubmit = (event) => {
       event.preventDefault();
       const queryString = searchInput.current.value;
       const url = `https://images-api.nasa.gov/search?q=${queryString}&page=1&media_type=image`;

       axios.get(url)
       .then(res => {
           return res['data']['collection']['items'];
       })
       .then(res => {
           let images = res.map(e => {
               let image = [
                   e.data[0].title,
                   e.links[0].href,
                   e.data[0].date_created
               ];
            
               return image;
           });
           setData(images);
       })
       .catch(err => {
            console.log(err);
       });
    };


    return (
        <div>
            <h1>Astronomy Image Search</h1>
            <form onSubmit={formSubmit}>
                <input type='text' ref = {searchInput}/>
                <input type='submit' value='Search'/>
            </form>
            <div>
                <ImageList dataList={data} />
            </div>
        </div>
    );
}

export default ImageSearch;