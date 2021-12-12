import React from 'react';

const Cart = () => {
  const getCount = JSON.parse(localStorage.getItem('cartData'));
  console.log('getCount', getCount);

  return (
    <div className="container">
      <div className="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {getCount &&
              getCount?.map((data, index) => (
                <tr key={data.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img
                      src={data.image}
                      className="view-imgs"
                      alt={data.title}
                    />
                  </td>
                  <td>{data.title}</td>
                  <td>{data.category}</td>
                  <td>{data.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
