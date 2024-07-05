import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;