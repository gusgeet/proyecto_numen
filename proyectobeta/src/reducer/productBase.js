const ProductBase = ({data}) => {

    const {id} = data;

    return (
        <div className='product'>
            <p>{id}</p>
            
        </div>
    )
}

export default ProductBase;