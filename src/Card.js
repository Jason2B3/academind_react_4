import styles from "./Card.module.scss";
function Card(props) {
  return <div className="card">{props.children}</div>;
}
export default Card;
