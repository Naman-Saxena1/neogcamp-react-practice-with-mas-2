import "./Modal.css";

function Modal({ currentEvent, closeCurrentModal }) {
  const { id, name, starring, time } = currentEvent;

  return (
    <div className="modal-container">
      <div className="modal">
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
        <button onClick={closeCurrentModal}>Close</button>
      </div>
    </div>
  );
}

export { Modal };
