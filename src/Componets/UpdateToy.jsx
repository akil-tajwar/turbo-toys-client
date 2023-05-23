import React from 'react';

const UpdateToy = () => {
    const updateToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const url = form.photo.value;
        const tname = form.tname.value;
        const sname = form.sname.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newToy = {_id, url, tname, sname, email, category, price, rating, quantity, description}
    }
    return (
        <div>
            
        </div>
    );
};

export default UpdateToy;