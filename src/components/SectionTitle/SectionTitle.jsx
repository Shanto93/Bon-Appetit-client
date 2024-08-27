const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="text-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 mx-auto my-8">
      <p className="text-yellow-600 mb-2 text-sm sm:text-base md:text-lg">{subheading}</p>
      <h3 className="text-xl sm:text-2xl md:text-3xl uppercase border-y-4 py-2 sm:py-3 md:py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
