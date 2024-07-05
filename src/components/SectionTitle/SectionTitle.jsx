const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="text-center md:w-4/12 mx-auto my-8">
      <p className="text-yellow-600 mb-2">{subheading}</p>
      <h3 className="text-3xl uppercase border-y-4 py-4">{heading} </h3>
    </div>
  );
};

export default SectionTitle;
