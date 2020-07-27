import React from "react";
import "./journal.scss";
import { Redirect, Link } from "react-router-dom";
import firebase from "../../firebase";

export default class Journal extends React.Component {
  state = {
    mood: [],
    entry: "",
  };

  journalEntry = () => {
    // console.log(event);
    const db = firebase.firestore();
    db.collection(this.props.userUID)
      .doc()
      .set({
        mood: this.state.mood,
        entry: this.state.entry,
      })
      .then(() => console.log("Document successfully written!"))
      .catch(() => console.error("Error writing document"));
  };

  valueInput = (e) => {
    this.setState({ mood: [e.target.value] });
    //   console.log(this.state.mood)
  };

  textInput = (e) => {
    this.setState({ entry: e.target.value });
    //   console.log(this.state.entry)
  };

  render() {
    return (
      <div>
        {this.props.isSignedIn ? (
          <div>
            <div className="journal">
              <div className="journal__body">
                <h1 className="journal__header">Welcome to your Journal</h1>
                <form action="">
                  <h2 className="journal__subHead">
                    Please select one mood based on how you are feeling:
                  </h2>
                  <div className="journal__container">
                    <label className="journal__mood">
                      Optimistic
                      <input
                        value="optimistic"
                        onChange={this.valueInput}
                        className="journal__mood--check"
                        type="checkbox"
                      />
                      <span className="journal__mood--check"></span>
                    </label>
                  </div>
                  <div className="journal__container">
                    <label className="journal__mood">
                      Focused
                      <input
                        value="focused"
                        onChange={this.valueInput}
                        className="journal__mood--check"
                        type="checkbox"
                      />
                      <span className="journal__mood--check"></span>
                    </label>
                  </div>
                  <div className="journal__container">
                    <label className="journal__mood">
                      Angry
                      <input
                        value="angry"
                        onChange={this.valueInput}
                        className="journal__mood--check"
                        type="checkbox"
                      />
                      <span className="journal__mood--check"></span>
                    </label>
                  </div>
                  <div className="journal__container">
                    <label className="journal__mood">
                      Stressed
                      <input
                        value="stressed"
                        onChange={this.valueInput}
                        className="journal__mood--check"
                        type="checkbox"
                      />
                      <span className="journal__mood--check"></span>
                    </label>
                  </div>
                  <div className="journal__container">
                    <label className="journal__mood">
                      Depressed
                      <input
                        value="depressed"
                        onChange={this.valueInput}
                        className="journal__mood--check"
                        type="checkbox"
                      />
                      <span className="journal__mood--check"></span>
                    </label>
                  </div>
                  <div className="journal__container">
                    <label className="journal__mood">
                      Happy
                      <input
                        value="happy"
                        onChange={this.valueInput}
                        className="journal__mood--check"
                        type="checkbox"
                      />
                      <span className="journal__mood--check"></span>
                    </label>
                  </div>
                  <div className="journal__container">
                    <label className="journal__mood">
                      Anxious
                      <input
                        value="anxious"
                        onChange={this.valueInput}
                        className="journal__mood--check"
                        type="checkbox"
                      />
                      <span className="journal__mood--check"></span>
                    </label>
                  </div>

                  <h2 className="journal__subHead">
                    Let's take your thoughts and write them down to clear your
                    mind, and keep a record of your these thoughts to reflect
                    back at a later time.
                  </h2>
                  <textarea
                    onChange={this.textInput}
                    placeholder="Type here"
                    className="journal__entry"
                    name="entry"
                    id="entry"
                    wrap="soft"
                  />
                  <Link to="/menu">
                    <button
                      onClick={this.journalEntry}
                      className="journal__button"
                    >
                      submit
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    );
  }
}
