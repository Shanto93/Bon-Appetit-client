const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div>
      <img src={image} alt="Popular Menu Image" />
      <div>
        <h3>{name} </h3>
        <p>{recipe}</p>
      </div>
      <p>{price}</p>
    </div>
  );
};

export default MenuItem;
