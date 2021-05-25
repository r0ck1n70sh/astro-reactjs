import './ImageList.css';

const ImageList = (props) => {
    const dataList = props.dataList;
    const items = dataList.map((data, idx) =>{
        return (
            <li key={idx}>
                <img src={data[1]} alt={data[0]} className='img-item'/>
            </li>
        );
    });

    return (
        <ul>
            {items}
        </ul>
    );
}

export default ImageList;