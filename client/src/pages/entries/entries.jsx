import React from "react";
import firebase from "../../firebase";
import { Redirect, Link } from "react-router-dom";

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
    <div>
        <Link to="/menu">
        <button>Back to menu</button>
        </Link>
      <div>
        {props.isSignedIn ? (
          <div className="entry">
            {entries.map((entry) => (
              <div className="entry__container">
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
