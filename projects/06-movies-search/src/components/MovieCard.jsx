import PropTypes from 'prop-types';

export const MovieCard = ({ title, poster, year, id }) => {
    return (
        <article key={id} className='movieApp-movie'>
                <img src={poster} alt={title} />
                <h3>{title}</h3>
                <p>{year}</p>
        </article>
    )
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
};
