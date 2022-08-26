import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        style={{
          width: "80%",
          position: "absolute",
          top: "255px",
          opacity: "0.85",
          display: "flex",
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
