import React, { useEffect, useState } from 'react';
import RootApi from '../../RootApi';

const ViewProduct = (props) => {
  // console.log('props', props);
  const [addCart, setAddCart] = useState([]);
  const [count, setCount] = useState(0);

  const [viewProductDetails, setViewProductDetails] = useState();
  const propsProductData = props?.match?.params?.proId;
  const getProductDetails = () => {
    RootApi.get(`/products/${propsProductData}`)
      .then((response) => {
        console.log('ViewProduct', response.data);
        setViewProductDetails(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddToCart = (product) => {
    // console.log('clickedItem->', [...addCart, product]);
    setAddCart([...addCart, product]);
    console.log('count', count + 1);
    setCount(count + 1);
    const counting = count + 1;
    localStorage.setItem(
      'cartData',
      JSON.stringify([...addCart, product, counting])
    );
  };
  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <div className="container all-cont">
      <div className="row">
        {}
        <div className="card">
          <div className="card-header">
            <span style={{ fontWeight: 'bolder' }}>
              {viewProductDetails?.title}
            </span>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={viewProductDetails?.image}
                  alt={viewProductDetails?.title}
                  className="view-img"
                />
              </div>
              <div className="col-md-8">
                <p className="card-text">
                  <span style={{ fontWeight: 'bolder' }}>Description:</span>{' '}
                  &nbsp;{viewProductDetails?.description}
                </p>
                <p className="card-text">
                  <span style={{ fontWeight: 'bolder' }}>Category:</span> &nbsp;
                  {viewProductDetails?.category}
                </p>

                <p className="card-text">
                  <span style={{ fontWeight: 'bolder' }}>Price:</span> &nbsp;
                  <span style={{ color: 'red' }}>
                    ${viewProductDetails?.price}
                  </span>
                </p>
                <button
                  className="btn btn-success"
                  onClick={() => handleAddToCart(viewProductDetails)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
