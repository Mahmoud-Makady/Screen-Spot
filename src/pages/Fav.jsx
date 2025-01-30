import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux'; 
import MyCard from '../components/MyCard/MyCard';
import { ContextLang } from '../Context/ContextLang';


export default function Favorites() {
    const favorites = useSelector((state) => state.movies); 
    const { contextLang } = useContext(ContextLang);

    return (
        <div className='container py-3 pt-5 mt-5 min-vh-100'>
            <h1 className='text-secondary text-center'>
            {contextLang === "En" ? "Favorites" : " المفضلة"}
            </h1>
            {favorites.length === 0 ? (
                <p className='text-danger text-center'>
                    {contextLang === "En" ? "No favorites added yet!" : " لم تقم باضافة اي افلا الي المفضلة"}
                </p>
            ) : (
                <div className="favorites-container">
                    <div className="row">
                    {favorites.map((movie, index) => (
                        
                            <div className="col-md-6 col-lg-4 g-3">
                            <MyCard
                                    id={movie.id}
                                    title={movie.title}
                                    img={movie.img}
                                    year={movie.year}
                                    rate={movie.rate}
                                    path={movie.path} 
                                />
                            </div>
                        
                    ))}
                    </div>
                </div>
            )}
        </div>
    );
}

