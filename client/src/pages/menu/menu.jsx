import React from 'react';
import firebase from '../../firebase';
import { Redirect } from 'react-router-dom';

export default function Menu() {
    const [entries, setEntries] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection("Lucas-Bernardini").get()
            setEntries(data.docs.map(doc => doc.data()))
        }
        fetchData()
    }, [])

    return (
        <div>
                <div>
                  <ul>
                      {entries.map(entry => (
                          <li>{entry.entry}</li>
                      ))}
                  </ul>
                </div>
        </div>
    )
}
