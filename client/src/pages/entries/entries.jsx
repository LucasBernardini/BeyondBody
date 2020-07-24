import React from "react";
import firebase from "../../firebase";
import { Redirect, Link } from "react-router-dom";
import './entries.scss'

export default function Entries(props) {
  const [entries, setEntries] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection(props.userUID).get();
      setEntries(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <div className="entries">
        <Link to="/menu">
        <button className="entries__button">Back To Menu</button>
        </Link>
      <div className="entries--container">
        {props.isSignedIn ? (
          <div className="entry">
            {entries.map((entry,index) => (
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
