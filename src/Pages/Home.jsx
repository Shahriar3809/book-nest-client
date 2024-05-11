import CategorySection from "../components/CategorySection";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Slider from "../components/Slider";
// import Map from "../components/Map.jsx";


const Home = () => {
    return (
        <div className="space-y-20">
            <Slider></Slider>
            <CategorySection></CategorySection>
            <Contact></Contact>
            <Faq></Faq>
        </div>
    );
};

export default Home;