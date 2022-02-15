import React from 'react';


export const OrderItem = ({ date, id, item, total, buyer }) => {
  const newDate = new Date(date * 1000);

  return (
    <div className="orderStyle">
      <div className="order-flex">
        <p className=""><strong>Date: </strong>{newDate.toString()}</p>
        <p className=""><strong>Mail: </strong>{buyer.email}</p>
        <p className=""><strong>Order Id: </strong>{id}</p>
        {item.map((item) => (
          <div key={item.item.id} className="order-item">
            <hr />
            <p className=""><strong>Item:  </strong>{`${item.item.name}`}</p>
            <p className=""><strong>Quantity: </strong>{`${item.quantity}`}</p>
            <p className=""><strong>Price: </strong>{`$${item.item.price}`}</p>
          </div>
        ))}
        <hr />
        <p className="lineTotal">Total: ${total}</p>
      </div>
    </div>
  );
};

