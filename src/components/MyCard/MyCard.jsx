import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { addFavorite, removeFavorite } from '../../Redux/Actions'; 
import './MyCard.css';
import { ContextLang } from '../../Context/ContextLang';
import { useContext } from 'react';

export default function Cards({ id, title, img, year, rate, path }) {
    const dispatch = useDispatch();
    const { contextLang } = useContext(ContextLang);
    const favorites = useSelector((state) => state.movies);

    const isFavorite = favorites.some((movie) => movie.id === id);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFavorite(id));
        } else {
            dispatch(addFavorite({ id, title, img, year, rate, path }));
        }
    };
    
    return (
        <div className="card text-light bg-black" style={{ backgroundImage: `url(${img})` }}>
            <div className="rate">{rate}</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{year}</p>
                {path && <Link to={path} className="btn btn-outline-primary details">
                {contextLang === "En" ? "Details" : "التفاصيل"}
                </Link>}
            </div>
            <button
                className="btn border-0"
                onClick={handleFavoriteToggle}
            >
                <i className={`bi ${isFavorite ? 
                    "bi-heart-fill text-danger" :
                    "bi-heart text-light"} heart-icon`}></i>
            </button>
        </div>
    );
}
