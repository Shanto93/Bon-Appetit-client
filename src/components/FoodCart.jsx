const FoodCart = ({ item }) => {
  const { image, price, name, recipe } = item;

  return (
    <div className="card bg-base-100 w-72 shadow-xl">
      <figure className="">
        <img src={image} alt="Menu Items Photo" className="rounded-md" />
      </figure>
      <p className="absolute top-2 right-2 px-2 py-1 bg-slate-400 text-white rounded-md font-semibold hover:text-orange-500 hover:bg-transparent">
        {price}{" "}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name} </h2>
        <p className="text-sm">{recipe} </p>
        <div className="card-actions">
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 hover:text-orange-500 hover:border-orange-500">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
