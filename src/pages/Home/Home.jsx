import React, { useContext, useState } from "react";
import "./Home.css";
import logo from '../../assets/logo.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 

import SiloImage from "../../assets/silo-series-cast-4k-wallpaper-uhdpaper.com-369@5@a.jpg";
import punisherImage from "../../assets/the-punisher-jon-bernthal-tv-show_3840x2160.jpg";
import penguinrImage from "../../assets/penguin-minimal_3840x2160.jpg";
import vikingsImage from "../../assets/vikings-travis-fimmel-clive-standen_3840x2160.jpg";
import blacklistImage from "../../assets/the-blacklist-season-3-hd-3840x2160.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ContextLang } from "../../Context/ContextLang";

export default function Home() {
    const { contextLang } = useContext(ContextLang);
  
    const slides = [
      {
        title: "The Blacklist",
        subtitle: "2013",
        description: `${contextLang === "En" 
          ? `A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, 
                Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.` 
          : `محققة جديدة في مكتب التحقيقات الفيدرالي، إليزابيث كين، تنقلب حياتها رأسًا على عقب عندما يسلم مجرم غامض، 
                ريموند ريدينجتون، نفسه بعد عقود من الهروب، لكنه يصر على التحدث إليها فقط.`}`,
        image: blacklistImage,
      },
      {
        title: "Vikings",
        subtitle: "2013",
        description: `${contextLang === "En" 
          ? `Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior
                and farmer who yearns to explore--and raid--the distant shores across the ocean.` 
          : `يأخذنا مسلسل "فايكنج" إلى العالم القاسي والغامض للمحارب والفلاح الفايكنغ، راجنار لوثبروك، 
                الذي يطمح لاكتشاف و"غزو" الشواطئ البعيدة عبر المحيط.`}`,
        image: vikingsImage,
      },
      {
        title: "Silo",
        subtitle: "2023",
        description: `${contextLang === "En" 
          ? `Men and women live in a giant silo underground with several regulations which 
                they believe are in place to protect them from the toxic and ruined world on the surface.` 
          : `يعيش الرجال والنساء في صومعة ضخمة تحت الأرض، حيث يتبعون قوانين يعتقدون أنها موجودة لحمايتهم 
                من العالم السام والمدمر على السطح.`}`,
        image: SiloImage,
      },
      {
        title: "The Punisher",
        subtitle: "2017",
        description: `${contextLang === "En" 
          ? `After his revenge on those who murdered his family, aimless Marine veteran Frank Castle finds 
                a new meaning in life as a vigilante known as "The Punisher".` 
          : `بعد انتقامه من قتلة عائلته، يجد فرانك كاسل، الجندي السابق في البحرية، معنى جديدًا لحياته 
                كحارس قانوني يعرف باسم "ذا بانشر".`}`,
        image: punisherImage,
      },
      {
        title: "The Penguin",
        subtitle: "2024",
        description: `${contextLang === "En" 
          ? `Following the events of The Batman (2022), 
                Oz Cobb, a.k.a. the Penguin, makes a play to seize the reins of the crime world in Gotham.` 
          : `بعد أحداث فيلم "The Batman" (2022)، يحاول أوز كوب، المعروف بلقب "البطريق"، 
                السيطرة على عالم الجريمة في مدينة جوثام.`}`,
        image: penguinrImage,
      },
    ];
    

  const thumbnails = [
    { title: "The Blacklist", image: blacklistImage },
    { title: "Vikings", image: vikingsImage },
    { title: "Silo", image: SiloImage },
    { title: "The Punisher", image: punisherImage },
    { title: "The Penguin", image: penguinrImage },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const [mainSwiper, setMainSwiper] = useState(null);

  const handleThumbnailClick = (index) => {
    setActiveSlideIndex(index); 
    if (mainSwiper) {
      mainSwiper.slideTo(index); 
    }
  };

  return (
    <>
        <div className="container pt-5 mt-4">
        <div className="site-title text-center py-4">
            <img src={logo} alt="logo" />
            <p className="tagline text-light">
            {contextLang === "En" ? "Your gateway to endless cinematic adventures!" : "بوابتك إلى مغامرات سينمائية لا تنتهي!"}
            </p>
            <p className="tagline text-light">
            {contextLang === "En" ? "Your gateway to endless cinematic adventures!" : "انغمس في عالم الأفلام والمسلسلات، حيث لكل قصة أهمية."}
            </p>
            <div className="row mt-3">
            <div className="col-6 d-flex justify-content-end">
              <Button variant="outline-primary"  as={Link} to= "/login">
              {contextLang === "En" ? "Get Started" : "يلا بينا!"}
              </Button>
            </div>
            <div className="col-6 d-flex justify-content-start">
              <Button variant="outline-danger"  as={Link} to= "/Movies">
              {contextLang === "En" ? "Browse Movies" : "تصفح الافلام"}
              </Button>
            </div>
          </div>
        </div>
        <div className="container bg-dark">
            <div className="home bg-black">
          <Swiper
            key={contextLang}
            modules={[Navigation, Pagination, Autoplay]} 
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="main-slider"
            onSwiper={(swiper) => setMainSwiper(swiper)} 
            onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)} 
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="slide"
                  style={{
                    padding: 10,
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="slide-content">
                    <h1>{slide.title}</h1>
                    <h3>{slide.subtitle}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper slidesPerView={5} spaceBetween={0} className="thumbnail-slider">
            {thumbnails.map((thumb, index) => (
              <SwiperSlide key={index} onClick={() => handleThumbnailClick(index)}>
                <div
                  className={`thumbnail ${index === activeSlideIndex ? "active" : ""}`}
                >
                  <img src={thumb.image} alt={thumb.title} />
                  <p>{thumb.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
        </div>
    </>
  );
}
