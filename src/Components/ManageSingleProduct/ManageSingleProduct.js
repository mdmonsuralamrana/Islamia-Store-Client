import React from 'react';
// import './ManageSingleProduct.css'

const ManageSingleProduct = (props) => {
    const { _id, name, wight, price } = props.product;
    const handleDeleteProduct = (id) => {

        fetch(`http://localhost:5000/deleteProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    document.getElementById(`${id}`).style.display = 'none';
                }
            })
    

}

return (
    <div id={_id} className="products-item row">
        <p className="col-4">{name}</p>
        <p className="col-3">{wight}</p>
        <p className="col-3">${price}</p>
        <div className="col-2">
            <p className="row">
                {/* <span className="col-6 manage-icon edit-icon"><img className="" src={editIcon} alt="" /></span> */}
                <span onClick={() => handleDeleteProduct(_id)} className="col-6 manage-icon"><button>Delete</button></span>
            </p>
        </div>
    </div>
);
};

export default ManageSingleProduct;