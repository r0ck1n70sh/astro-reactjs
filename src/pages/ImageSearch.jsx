import axios from 'axios';
import { createRef, useEffect, useState } from 'react';

import ImageList from '../comps/ImageList';
import PaginationBar from '../comps/PaginationBar'
import LoadingScreen from '../comps/LoadingScreen'

import './ImageSearch.css'
import getDataUsingQueryString from '../package/searchImageApi';

const searchInput = createRef();

const ImageSearch = (props) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)            
        }, 3000);

        window.scrollTo({
            behavior: 'smooth',
            top: '0px'
        })
    })

    const updateData = async () => {
        const queryString = searchInput.current.value;
        const queryData = await getDataUsingQueryString(queryString, page);
        setData(queryData);
        setLoading(true);
    }

    const formSubmit = async (event) => {
        event.preventDefault();
        setPage(1);
        updateData();
       

    //    const url = `https://images-api.nasa.gov/search?q=${queryString}&page=${page}&media_type=image`;

    //    axios.get(url)
    //    .then(res => {
    //        return res['data']['collection']['items'];
    //    })
    //    .then(res => {
    //        let images = res.map(e => {
    //            let image = [
    //                e.data[0].title,
    //                e.links[0].href,
    //                e.data[0].date_created
    //            ];
            
    //            return image;
    //        });
    //        setData(images);
    //    })
    //    .catch(err => {
    //         console.log(err);
    //    });
    };


    const handlePagination = async (event) => {
        const target = event.target.id;
        
        if(isNaN(target)){
            if(target === 'next'){
                setPage((page) => page + 1);
            } else if (target === 'previous'){
                setPage((page) => page - 1);
            }

        } else {
            setPage(parseInt(target));
        }

        updateData();
    };


    return (
        <div>
            <h1>Astronomy Image Search</h1>
            <form onSubmit={formSubmit}>
                <input type='text' ref = {searchInput} placeholder='e.g. Nebula'/>
                <input type='submit' value='Search'/>
            </form>

            { function() {
                if (data.length > 0 && !loading)
                    return (
                        <span>
                            <div className='search-result-div'>
                                <ImageList dataList={data}/>
                            </div>
                            <PaginationBar 
                                page={page}
                                handleClick={ handlePagination }
                            />
                        </span>
                    )
                else if (!loading)
                    return (
                        <span className='no-content'>
                            No Content Available.
                        </span>
                    )
                else 
                    return (
                        <span>
                            <LoadingScreen />
                        </span>
                    )
            }() }
        </div>
    );
}

export default ImageSearch;