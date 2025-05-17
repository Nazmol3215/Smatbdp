import React from 'react';
import pic1 from "../Images/poperty1.png";
import pic2 from "../Images/poperty.png";

const ProductCard = () => {
  const products = [
    {
      name: "Original Kausar Plate and Kausar Ring Glass Combo Set",
      price: "4,190.00৳",
      oldPrice: "4,400.00৳",
      imgSrc: pic1,
    },
    {
      name: "কাসার প্লেট, ব্রাস বাটি এবং গ্লাস সেট",
      price: "5,980.00৳",
      oldPrice: "6,000.00৳",
      imgSrc: pic2,
    },
    {
      name: "কাসার প্লেট, ব্রাস বাটি এবং গ্লাস সেট",
      price: "5,980.00৳",
      oldPrice: "6,000.00৳",
      imgSrc: pic2,
    },
    {
      name: "কাসার প্লেট, ব্রাস বাটি এবং গ্লাস সেট",
      price: "5,980.00৳",
      oldPrice: "6,000.00৳",
      imgSrc: pic2,
    },
    {
      name: "কাসার প্লেট, ব্রাস বাটি এবং গ্লাস সেট",
      price: "5,980.00৳",
      oldPrice: "6,000.00৳",
      imgSrc: pic2,
    },
    {
      name: "কাসার প্লেট, ব্রাস বাটি এবং গ্লাস সেট",
      price: "5,980.00৳",
      oldPrice: "6,000.00৳",
      imgSrc: pic2,
    },
    {
      name: "কাসার প্লেট, ব্রাস বাটি এবং গ্লাস সেট",
      price: "5,980.00৳",
      oldPrice: "6,000.00৳",
      imgSrc: pic2,
    },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-6 col-md-3 mb-3" key={index}>
            <div className="card h-100">
              <img src={product.imgSrc} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">
                  <del>{product.oldPrice}</del> <span className="fw-bold">{product.price}</span>
                </p>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary">Add To Cart</button>
                  <button className="btn btn-success">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
