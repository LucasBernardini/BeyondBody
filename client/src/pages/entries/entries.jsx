import React from "react";
import firebase from "../../firebase";
import { Redirect, Link } from "react-router-dom";
import "./entries.scss";

export default function Entries(props) {
  const [entries, setEntries] = React.useState([]);
  const [moods, setMoods] = React.useState(["optimistic","focused","angry","stressed","depressed","happy","anxious"]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection(props.userUID).get();
      setEntries(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  
  const selectMoods = (e) => {
    const moods = ["optimistic","focused","angry","stressed","depressed","happy","anxious"];
    if (e.target.value === "all") {
        setMoods(moods)
      } else {
        setMoods(moods.filter(m => m === e.target.value))
      }
  }

  return (
    <div className="entries">
      <Link to="/menu">
        <button className="entries__button">Back To Menu</button>
      </Link>
      <div>
        <label htmlFor="moods">Filter by Mood</label>
        <select onChange={e => selectMoods(e)} className="" name="moods">
          <option value="all">
            All
          </option>
          <option value="optimistic">Optimistic</option>
          <option value="focused">Focused</option>
          <option value="angry">Angry</option>
          <option value="stressed">Stressed</option>
          <option value="depressed">Depressed</option>
          <option value="happy">Happy</option>
          <option value="anxious">Anxious</option>
        </select>
      </div>
      <div className="entries--container">
        {props.isSignedIn ? (
          <div className="entry">
            {entries.filter((entryFilter) => entryFilter.mood.filter(efm => moods.includes(efm)).length > 0).map((entry, index) => (
              <div key={index} className="entry__container">
                <p className="entry__mood">{entry.mood}</p>
                <p className="entry__entry">{entry.entry}</p>
              </div>
            ))}
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    </div>
  );
}
