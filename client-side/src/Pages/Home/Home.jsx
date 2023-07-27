import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import HomeProduct from "../../Components/HomeProduct/HomeProduct";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";



const Home = () => {
  return (
    <div>
        <HomeBanner></HomeBanner>
        <PopularProducts></PopularProducts>
        <HomeProduct></HomeProduct>
     
    </div>
  );
};

export default Home;
