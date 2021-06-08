const PaginationBar = (props) => {
    const { page, handleClick} = props;
    return (
        <div>
            { (page > 1) ? (
                <span>
                    <button id='previous' onClick={handleClick}>
                        Pre
                    </button>
                    <button id={page-1} onClick={handleClick}>
                        {page-1}
                    </button>
                    </span>
                ) 
                : <span>{null}</span>
            }
            <button id={page} onClick={handleClick}>
                {page}
            </button>
            <button id={page+1} onClick={handleClick}>
                {page+1}
            </button>
            <button id='next' onClick={handleClick}>
                Next
            </button>
        </div>
    );
}

export default PaginationBar;