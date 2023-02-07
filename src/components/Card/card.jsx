export function Card({ cover, title }) {
  return (
    //Affichage des éléments
    <article className="card-logement">
      <img src={cover} alt="location" />
      <div className="card-logement__layer">
        <p className="card-logement__title">{title}</p>
      </div>
    </article>
  );
}
