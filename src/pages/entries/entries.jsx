import React from "react";
import firebase from "../../firebase";
import { Redirect, Link } from "react-router-dom";
import "./entries.scss";

export default function Entries(props) {
  const [entries, setEntries] = React.useState([]);
  const [moods, setMoods] = React.useState([
    "optimistic",
    "focused",
    "angry",
    "stressed",
    "depressed",
    "happy",
    "anxious",
    "frustrated"
  ]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection(props.userUID).get();
      setEntries(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  const selectMoods = (e) => {
    const moods = [
      "optimistic",
      "focused",
      "angry",
      "stressed",
      "depressed",
      "happy",
      "anxious",
      "frustrated"
    ];
    if (e.target.value === "all") {
      setMoods(moods);
    } else {
      setMoods(moods.filter((m) => m === e.target.value));
    }
  };

  return (
    <div className="entries">
      <Link to="/menu">
        <button className="entries__button">Back to Menu</button>
      </Link>
      <div className="entries__filter">
        <label className="entries__filter--title" htmlFor="moods">
          Filter by Mood:
        </label>
        <select
          className="entries__filter--filter"
          onChange={(e) => selectMoods(e)}
          name="moods"
        >
          <option className="entries__filter--option" value="all">
            All
          </option>
          <option className="entries__filter--option" value="optimistic">
            Optimistic
          </option>
          <option className="entries__filter--option" value="frustrated">
            Frustrated
          </option>
          <option className="entries__filter--option" value="focused">
            Focused
          </option>
          <option className="entries__filter--option" value="angry">
            Angry
          </option>
          <option className="entries__filter--option" value="stressed">
            Stressed
          </option>
          <option className="entries__filter--option" value="depressed">
            Depressed
          </option>
          <option className="entries__filter--option" value="happy">
            Happy
          </option>
          <option className="entries__filter--option" value="anxious">
            Anxious
          </option>
        </select>
      </div>
      <div className="entries--container">
        {props.isSignedIn ? (
          <div className="entry">
            {entries
              .filter(
                (entryFilter) =>
                  entryFilter.mood.filter((efm) => moods.includes(efm)).length >
                  0
              )
              .map((entry, index) => (
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
