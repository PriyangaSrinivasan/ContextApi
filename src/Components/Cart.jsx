import React, { useContext } from "react";
import { mycontext } from "../App";

const Cart = () => {
  const [data, setData] = useContext(mycontext);
  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 0),
    0
  );
  const totalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 0),
    0
  );

  const handleInc = (id, quantity) => {
    setData((curr) => {
      return curr.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 1 || quantity + 1 };
        }
        return element;
      });
    });
  };
  const handleDec = (id, quantity) => {
    if (quantity > 1) {
      setData((curr) => {
        return curr.map((element) => {
          if (element.id === id) {
            return {
              ...element,
              quantity: element.quantity - 1 || quantity - 1,
            };
          }
          return element;
        });
      });
    }
  };
  const removeproduct = (element) => {
    setData((item) => item.filter((ele, index) => ele.id !== element.id));
  };
  return (
    <div>
      <div className="card-container">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
          {data.map((element, index) => {
            return (
              <div key={index}>
                <div className="col mb-5">
                  <div className="card h-100 mt-5">
                    <div className="card-header">
                      <div className="img-box">
                        {element.images.map((ele, i) => {
                          return (
                            <div key={i}>
                              <img
                                className="card-img-top"
                                src={ele}
                                alt="..."
                              />
                            </div>
                          );
                        })}
                      </div>

                      <div className="card-body">
                        <h3 className="fw-bolder">{element.title}</h3>
                        <p className="card-content px-5 text-muted">
                          <b>{element.category}</b>
                        </p>
                        <p>{element.description}</p>
                      </div>
                      <p className="card-price text-center">
                        <b>Price:</b>
                        {element.price * element.quantity || element.price}
                      </p>
                      <p className="card-stock text-center text-danger">
                        <b>Stockes:</b>
                        {element.stock - (element.quantity || 1)}
                      </p>
                      <div className="text-center">
                        <button
                          className="btn btn-outline-success mt-auto"
                          onClick={() =>
                            handleInc(element.id, element.quantity || 1)
                          }
                        >
                          +
                        </button>
                        <span>{element.quantity}</span>
                        <button
                          className="btn btn-outline-primary mt-auto "
                          onClick={() =>
                            handleDec(element.id, element.quantity || 1)
                          }
                        >
                          -
                        </button>

                        <button
                          className="btn "
                          onClick={() => removeproduct(element)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            );
          })}
        </div>
        <hr />
                <div className="quantity">Total Quantity:{totalQuantity}</div><br />
                <div className="price">Total Price:{totalPrice}</div>
                <hr />
      </div>
    </div>
  );
};

export default Cart;
