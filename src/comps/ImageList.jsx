import './ImageList.css';
import SearchImage  from './SearchImage';

const ImageList = (props) => {
    const dataList = props.dataList;
    const items = dataList.map((data, idx) =>{
        let url = data[1];
        let alt = data[0];
        return (
            <div key={idx}>
                <SearchImage url={url} alt={alt} />
            </div>
        );
    });

    return (
        <div className='wrapper'>
            {items}
        </div>
    );
}

export default ImageList;