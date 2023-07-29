import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Item from '../Item/index';

const ItemList = ({ productos }) => {
  return (
    <div className="container">
      <div className="row">
        <main>
          <div className="album">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 card-outer">
                {productos.map((prod) => (
                  <Item key={prod.id} {...prod} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ItemList;
