import emptyStar from '../../assets/emptyStar.svg';
import fullStar from '../../assets/star-rate.svg';

export function Rate({ score }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    //Map et ajout du nombre d'étoile nécessaire
    <div className="rate-comp">
      {stars.map((rate) =>
        score >= rate ? (
          <img
            key={rate.toString()}
            className="star"
            src={fullStar}
            alt="rating star"
          />
        ) : (
          <img
            key={rate.toString()}
            className="star"
            src={emptyStar}
            alt="rating star"
          />
        )
      )}
    </div>
  );
}
