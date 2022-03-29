import "./Card.css";

function Card({ event }) {
  const { id, name, starring, time } = event;
  return (
    <div className="card">
      <p>id: {id}</p>
      <p>Movie: {name}</p>
      {starring.map((actor, index) => (
        <p key={index}>
          Actor {index}: {actor}
        </p>
      ))}
      <div>
        <p>{time.toString()}</p>
      </div>
    </div>
  );
}

export { Card };
