import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import RootApi from '../../RootApi';
import CartIcon from '../cart/CartIcon';

const Product = (props) => {
  // console.log('props', props.match);
  const propsCategoryData = props?.match?.params?.catData;
  const [allProducts, setAllProducts] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [count, setCount] = useState(0);
  const getProducts = () => {
    RootApi.get(`/products/category/${propsCategoryData}`)
      .then((response) => {
        // console.log('res-pro', response?.data);
        setAllProducts(response?.data);
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
    getProducts();
  }, []);

  return (
    <>
      <div className="container all-cont">
        <h1>{propsCategoryData}</h1>

        <div className="row">
          {allProducts &&
            allProducts?.map((prodata) => (
              <div className="card card-inner" key={prodata?.id}>
                <img
                  className="card-img-top img-size"
                  src={prodata?.image}
                  alt={prodata?.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{prodata?.title}</h5>
                  <p className="card-text">{prodata?.category}</p>
                  <p className="card-text">
                    <span style={{ fontWeight: 'bolder' }}>Price:</span> &nbsp;
                    <span style={{ color: 'red' }}>${prodata?.price}</span>
                  </p>
                  <Rating ratingValue={prodata?.rating?.rate} />
                  <div className="button-inner">
                    <div className="row">
                      {' '}
                      <Link
                        to={`/viewproduct/${prodata?.id}`}
                        className="btn btn-primary"
                      >
                        View Details
                      </Link>
                      &nbsp;
                      <button
                        className="btn btn-success"
                        onClick={() => handleAddToCart(prodata)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Product;
