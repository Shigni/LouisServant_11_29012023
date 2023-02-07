import { Banner, Card } from '../../components';
import { Link } from 'react-router-dom';
import data from '../../data/logements.json';

export function Home() {
  return (
    <>
      <Banner />
      <div className="cards-container">
        {data.map((logement, id) => (
          <div className="card_logement" key={id}>
            <Link
              className="link-card-logement"
              to={`/logement/${logement.id}`}
            >
              <Card cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
