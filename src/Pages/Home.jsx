import Banner from "../components/Banner";
import ComingSoon from "../components/ComingSoon";
import FeaturedMovie from "../components/FeaturedMovie";
import Offer from "../components/Offer";


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <FeaturedMovie></FeaturedMovie>
        <ComingSoon></ComingSoon>
        <Offer></Offer>
        </>
    );
};

export default Home;