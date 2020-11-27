import React from "react";

// refactored this to a functional component
const DisplayProductData = (props) => {
  let dataIndex;
  const data = props.productData;
  if (Array.isArray(data) && data) {
    dataIndex = (
      <div id="index">
        {data.map((item) => {
          return (
            <div key={item.id}>
              {item.name},{item.description},{item.price}
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <p id="message">Sorry! Unfortunately we have issues with our menu</p>
    );
  }

  return <div>{dataIndex}</div>;
};

export default DisplayProductData;
