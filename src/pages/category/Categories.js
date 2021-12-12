import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RootApi from '../../RootApi';
import './category.css';

const Categories = () => {
  const [allCategory, setAllCategory] = useState([]);
  const getAllCategories = () => {
    RootApi.get('/products/categories')
      .then((response) => {
        // console.log('res', response);
        setAllCategory(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="container all-cont">
      <div className="row">
        {allCategory &&
          allCategory?.data?.map((allData) => (
            <div className="col-sm-6 " key={allData}>
              <div className="card space-inn">
                <div className="card-body">
                  <h5 className="card-title">{allData}</h5>

                  <Link
                    to={`/products/category/${allData}`}
                    className="btn btn-primary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
