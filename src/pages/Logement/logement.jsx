import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import { Collapse, Carrousel, Tag, Rate, Host, Error } from '../../components';

//Scroll on top
export function Logement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();

  const logement = logements.find(({ id }) => id === params.id);
  //Affichage de la 404 si le lien n'existe pas
  if (logement === undefined) {
    return <Error />;
  }

  //map pour exploiter les id
  const framePics = logement && logement.pictures;
  const tags = logement && logement.tags;
  const equipments = logement && logement.equipments;
  const equipmentList =
    logement &&
    equipments.map((item, index) => (
      <li key={index} className="equipmentList">
        {item}
      </li>
    ));
  return (
    //Affichage des différents components
    logement && (
      <div key={params.id} className="fiche-container">
        <Carrousel frames={framePics} />
        <section className="hostInfo-container">
          <div className="title-tag-container">
            <div className="title-container redFont">
              <h1>{logement.title}</h1>
              <h3>{logement.location}</h3>
            </div>
            <div className="tag-container">
              {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
          <div className="rate-host-container">
            <div className="host-container redFont">
              <Host
                hostName={logement.host.name}
                hostPic={logement.host.picture}
              />
            </div>
            <div className="rate-container">
              <Rate score={logement.rating} />
            </div>
          </div>
        </section>
        <div className="collapse-fiche-container">
          <Collapse aboutTitle="Description" aboutText={logement.description} />
          <Collapse aboutTitle="Équipements" aboutText={equipmentList} />
        </div>
      </div>
    )
  );
}
