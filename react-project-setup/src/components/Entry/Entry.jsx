import "./Entry.css";
export default function Entry({ titleName, date }) {
  return (
    <div className="entry__container">
      <p className="entry__date">{date}</p>
      <div className="titleContainer">
        <h3 className="entry__title">{titleName}</h3>
        <img className="entry__star" src="/star.svg" alt="Star Icon" />
      </div>
      <p className="entry__description">
        Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si
        mihi. Et quidem se repellere, idque instituit docere sic omne animal,
        simul atque.
      </p>
      <hr className="entry__line" />
    </div>
  );
}
