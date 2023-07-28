import FollowUs from "../../Components/FollowUs/FollowUs";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeOilBanner from "../../Components/HomeOilBanner/HomeOilBanner";
import HomeProduct from "../../Components/HomeProduct/HomeProduct";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import HomeBlog from './../../Components/HomeBlog/HomeBlog';



const Home = () => {
  return (
    <div>

        <HomeBanner></HomeBanner>
        <PopularProducts></PopularProducts>
        <HomeProduct></HomeProduct>
        <HomeOilBanner></HomeOilBanner>
        <HomeBlog></HomeBlog>
        <FollowUs></FollowUs>
     
    </div>
  );
};

export default Home;
