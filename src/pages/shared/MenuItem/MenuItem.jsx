const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-5">
      <img
        style={{ borderRadius: '0 200px 200px 200px' }}
        className="w-[100px] md:w-[120px] lg:w-[150px] mx-auto md:mx-0"
        src={image}
        alt="Popular Menu Image"
      />
      <div className="flex-1 text-center md:text-left">
        <h3 className="uppercase font-bold text-lg md:text-xl lg:text-2xl">
          {name}
          <span className="hidden md:inline">-------------</span>
        </h3>
        <p className="mt-2 text-sm md:text-base lg:text-lg">{recipe}</p>
      </div>
      <p className="text-yellow-500 text-center md:text-left text-sm md:text-lg lg:text-xl font-bold">
        {price}
      </p>
    </div>
  );
};

export default MenuItem;
