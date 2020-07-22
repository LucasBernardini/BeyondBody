import React from 'react';
import firebase from '../../firebase';
import { Redirect } from 'react-router-dom';

export default function Menu(props) {
    const [entries, setEntries] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection(props.userUID).get()
            setEntries(data.docs.map(doc => doc.data()))
        }
        fetchData()
    }, [])

    return (
        <div>
                <div>
                      {entries.map(entry => (
                          <div>
                          <p>{entry.mood}</p>
                          <p>{entry.entry}</p>
                          </div>
                      ))}
                </div>
        </div>
    )
}
