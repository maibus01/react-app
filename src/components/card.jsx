function Card(props) {
  return (
    <div className="card">
        <img className="pic" src={props.img} alt="avatar_img" />
        <h2 className="name">{props.name}</h2>
        <p className="tel">{props.tel}</p>
        <p className="email">{props.email}</p>
    </div>
  );
}
export default Card;