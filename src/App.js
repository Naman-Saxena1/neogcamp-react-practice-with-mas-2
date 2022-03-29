import "./styles.css";
import { useEffect, useState } from "react";
import { Card } from "./Components/Card";
import { Modal } from "./Components/Modal";
import { events } from "./data/events";

export default function App() {
  const [currentEvent, setCurrentEvent] = useState({});
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setStartTime(new Date());
    }, 20000);

    endTime.setMinutes(new Date().getMinutes() + 15);

    events.forEach((eventObj) => {
      if (startTime < eventObj.time && eventObj.time <= endTime) {
        if (currentEvent.id !== eventObj.id) {
          setShowModal(true);
          setCurrentEvent(eventObj);
        }
      }
    });

    return () => {
      clearInterval(intervalId);
    };
  }, [startTime]);

  function closeCurrentModal() {
    setShowModal(false);
  }

  return (
    <div className="App">
      {events.map((event, index) => (
        <Card key={index} event={event} />
      ))}
      {JSON.stringify(currentEvent) !== JSON.stringify({}) &&
      showModal === true ? (
        <Modal
          currentEvent={currentEvent}
          closeCurrentModal={closeCurrentModal}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
