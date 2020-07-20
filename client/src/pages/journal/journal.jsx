import React from 'react'
import './journal.scss'

export default function Journal() {
    return (
        <div className="journal">  
        <div className="journal__body">
        <h1 className="journal__header">Welcome to your Journal</h1>
        <form action="">
        <h2 className="journal__subHead">Please select a mood based on how you are feeling:</h2>
        <div className="journal__container">
        <label class="journal__mood">Optimistic
        <input class="journal__mood--check" type="checkbox" />
        <span class="journal__mood--check"></span>
        </label>
        </div>
        <div className="journal__container">
        <label class="journal__mood">Focused
        <input class="journal__mood--check" type="checkbox" />
        <span class="journal__mood--check"></span>
        </label>
        </div>
        <div className="journal__container"> 
        <label class="journal__mood">Angry
        <input class="journal__mood--check" type="checkbox" />
        <span class="journal__mood--check"></span>
        </label>
        </div>
        <div className="journal__container">
        <label class="journal__mood">Stressed
        <input class="journal__mood--check" type="checkbox" />
        <span class="journal__mood--check"></span>
        </label>
        </div>
        <div className="journal__container">
        <label class="journal__mood">Depressed
        <input class="journal__mood--check" type="checkbox" />
        <span class="journal__mood--check"></span>
        </label>
        </div>
        
        
        
        <h2 className="journal__subHead">Let's take your thoughts and write them down to clear your mind, and keep a record of your these thoughts to reflect back at a later time.</h2>
        <textarea placeholder="Type here" className="journal__entry"name="entry" id="entry" wrap="soft" />
        </form> 


        <button className="journal__button">submit</button>
        </div>
        </div>
    )
}
