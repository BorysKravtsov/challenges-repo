import "./Card.css";

export default function Card({ name, cardColor }) {
  return <p className={`card ${cardColor}`}>{name}</p>;
}
