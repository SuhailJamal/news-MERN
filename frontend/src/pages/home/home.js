import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import Cards from "../../Components/Cards/Cards";
import LongCards from "../../Components/Long Cards/longCards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./home.css";
import Carousel from "../../Components/Carousel/Carousel";

const Home = (props) => {
  const [articles, setArticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isMobile? 3: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };
  const carouselSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(
        `http://localhost:500/api/news/${props.endpoint}`
      );
      setArticles(response.data.articles);
    };
    fetchArticles();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as per your needs
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [props.endpoint]);

  const carouselArticles = articles.slice(0, 3).map((article, index) => {
    return (
      <Carousel
        key={index}
        imageURL={article.urlToImage}
        heading={article.title}
        description={article.description}
      />
    );
  
  });
  const topStories = articles
    .slice(4, isMobile ? 10 : 14)
    .map((article, index) => {
      return (
        <Cards
          key={index}
          title={article.title.slice(0, 55) + "..."}
          description={article.description}
          image={article.urlToImage}
        />
      );
    });
  const editorsPicks = articles.slice(14, 19).map((article, index) => {
    return (
      <LongCards
        key={index}
        heading={article.title}
        description={article.description}
        imageURL={article.urlToImage}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Slider {...carouselSettings}>{carouselArticles}</Slider>
      <div className="top-stories">
        <h2>TOP STORIES</h2>
      </div>
      <Slider {...settings}>{topStories}</Slider>
      <div className="editors-pick">
        <h2>EDITOR'S PICKS</h2>
      </div>
      {editorsPicks}
      <Footer />
    </>
  );
};

export default Home;
