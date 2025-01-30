
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import MyCard from '../../components/MyCard/MyCard';
import './Movies.css'
import { ContextLang } from '../../Context/ContextLang';
import { axiosInstance } from "../../Network/axiosInstance";

export default function Movies() {
    const { contextLang } = useContext(ContextLang);
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        
        const MyUrl = contextLang === "Ar"
        ? `/movie/popular?language=ar&page=${currentPage}`
        :  `/movie/popular?page=${currentPage}`;

        const Url = searchQuery.trim()
        ? `/search/movie?query=${searchQuery}&page=${currentPage}&language=${contextLang === "Ar" ? "ar" : "en"}`
        : MyUrl;

        axiosInstance
            .get(Url)
            .then((response) => {
                console.log(response.data.results);
                
                setMovies(response.data.results);
                setFilteredMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [currentPage, searchQuery, contextLang]);

    const handleSearch = async (e) => {
        const term = e.target.value;
        setSearchQuery(term);
        const Url = `/search/movie?query=${searchQuery}&page=${currentPage}&language=${contextLang === "Ar" ? "ar" : "en"}`;


        if (term.trim() === '') {
            setFilteredMovies(movies);
        } else {
            try {
                const response = await axiosInstance.get(Url);
                setFilteredMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };


    


    return (
        <>
            <div className="container py-4 pt-5 mt-5">
                <h1 className='text-center text-primary mb-3'>
                    {contextLang === "Ar" ? "جميع الأفلام" : "All MOVIES"}
                </h1>
                <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder={contextLang === "Ar" ? "ابحث عن فيلم..." : "Search for movie..."}
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            <div className="row">
            {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={movie.id}>
                        <MyCard
                            id={movie.id}
                            img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            year={movie.release_date?.substring(0, 4)}
                                title={movie.title}
                                path = {`/movie/${movie.id}`}
                                rate={movie.vote_average?.toFixed(1)}
                        />
            
                    </div>
                ))
            ): (
                <p className="text-center">No movies found.</p>
            )}
            
            </div>
            <div className="pagination d-flex justify-content-center align-items-center mb-3">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    {contextLang === "Ar" ? "السابق" : "Previous"}
                </button>
                <span className="mx-3 text-secondary d-flex justify-content-center align-items-center">
                    {contextLang === "Ar" 
                                ? `صفحة ${currentPage} من ${totalPages}` 
                                : `Page ${currentPage} of ${totalPages}`}
                </span>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    {contextLang === "Ar" ? "التالي" : "Next"}
                </button>
            </div>



    </div>

        </>
);
}
