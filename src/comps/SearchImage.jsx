import './SearchImage.css';

const SearchImage = (props) => {
    const url = props.url;
    const alt = props.alt;

    return (
        <div className='card'>
            <img src={url} alt={alt} className='card-img'/>
        </div>
    )

}

export default SearchImage;