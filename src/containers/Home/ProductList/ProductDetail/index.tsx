import React from 'react';

const ProductDetail:React.FC<any>  = (props)=> {
    alert(props.match.params.maSP)
    return (
        <div>
            <h1>Detail</h1>
        </div>
    )
}
export default ProductDetail;