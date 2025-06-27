import { addToCart } from "../redux/features/cart/cartSlice";
const ServiceCard = ({ service }) => {
  

  const addToCartHandler = () => {
      dispatch(addToCart({ ...product, qty }));
      navigate("/cart");
    };

  return (
    <div className="card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p className="price">${service.price.toFixed(2)}</p>
      <button onClick={() => addToCartHandler()} className="add-to-cart-btn">
        Add to Cart / Enroll
      </button>
    </div>
  );
};

export default ServiceCard;