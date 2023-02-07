export function Host(props) {
  return (
    //Ajout du nom et de la photo de l'hôte
    <aside className="host-comp">
      <div className="host-name">{props.hostName}</div>
      <div className="host-picture">
        <img src={props.hostPic} alt={props.id} />
      </div>
    </aside>
  );
}
