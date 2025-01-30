import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextLang } from "../Context/ContextLang";
import { axiosInstance } from "../Network/axiosInstance";

export default function MovieDetail() {
  const { id } = useParams();
  const { contextLang } = useContext(ContextLang);
  console.log(id);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?language=${contextLang === "Ar" ? "ar" : "en"}&api_key=55f4b2316c4b8c8fa71e776cab7e4a69`;

    axiosInstance
      .get(
        apiUrl
            )

      .then((data) => {
        console.log(data.data);

        setMovie(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, contextLang]);

  return (
    <div className="container py-5 mt-5">
      <h1 className="text-primary text-center mb-5">
      {contextLang === "En" ? "Movie Details" : "تفاصيل الفيلم"}
      </h1>
      <hr className="text-light" />
      <div className="row py-4 px-3">
        <div className="col-sm-12 col-md-6 mb-3">
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="movie img" />

        </div>
        <div className="col-sm-12 col-md-6 pt-3">
          <h3 className="text-primary">{movie.title}</h3>
          <h6 className="text-light">
          {contextLang === "En" ? "Release Date:" : "سنة الاصدار:"} {movie.release_date?.substring(0, 4)}</h6>
          <h6 className="text-light">{contextLang === "En" ? "Rate:" : "التقييم:"} {movie.vote_average?.toFixed(1)}</h6>
          <p className="text-light" style={{lineHeight: 1.7}}><span className="text-info fw-bold" >
          {contextLang === "En" ? "Overview:" : "نبذة:"}</span> {movie.overview}</p>
          <a href={movie.homepage} className="btn btn-outline-primary details py-2 px-2" target="_blank" rel="noopener noreferrer">
          {contextLang === "En" ? "Go to Movie Page" : "انتقل إلى صفحة الفيلم"}
          </a>
        </div>
      </div>
      
    </div>
  );
}
