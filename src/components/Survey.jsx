import { useState } from "react";
import AnswersList from "./AnswersList"

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [data, setData] = useState({
    colour: 0,
    timeSpent: [],
    username: "",
    email: "",
    review: "",
  });

  const [answers, setAnswers] = useState([])

  const Submit = (e) => {
    e.preventDefault();
    setAnswers([...answers, data]);

    setData({
      colour: 0,
      timeSpent: [],
      username: "",
      email: "",
      review: "",
    });
  }

  const ChangeRating = (i) => {
    data.colour = i;
    setData({...data});
  }
  const ChangeTimeSpent= (i) => {
    data.timeSpent.push(i);
    setData({...data});
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers}/>
      </section>
      <section className="survey__form">
      <form className="form" onSubmit={Submit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input 
                  id="color-one" 
                  type="radio" 
                  name="color" 
                  value="1" 
                  onClick={() => ChangeRating(1)}
                  
                  />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input 
                  id="color-two" 
                  type="radio" 
                  name="color" 
                  value="2" 
                  onClick={() => ChangeRating(2)}
                  />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input 
                  id="color-three" 
                  type="radio" 
                  name="color" 
                  value="3" 
                  onClick={() => ChangeRating(3)}
                  />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input 
                  id="color-four" 
                  type="radio" 
                  name="color" 
                  value="4" 
                  onClick={() => ChangeRating(4)}
                  />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input 
                    name="spend-time" 
                    type="checkbox" 
                    value="swimming" 
                    onClick={() => ChangeTimeSpent("swimming")}
                    checked={data.timeSpent.includes("swimming")}
                    />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="spend-time" 
                    type="checkbox" 
                    value="bathing" 
                    onClick={() => ChangeTimeSpent("bathing")}
                    checked={data.timeSpent.includes("bathing")}
                    />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="spend-time"   
                    type="checkbox" 
                    value="chatting" 
                    onClick={() => ChangeTimeSpent("chatting")}
                    checked={data.timeSpent.includes("chatting")}
                    />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input 
                    name="spend-time" 
                    type="checkbox" 
                    value="brewing"
                    onClick={() => ChangeTimeSpent("brewing")}
                    checked={data.timeSpent.includes("brewing")}
                    />
                    Brewing
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea 
              name="review" 
              cols="30" 
              rows="10"
              value={data.review}
              onChange={(event) => {
                data.review = event.target.value
                setData({...data})
              }}
              ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input 
              type="text" 
              name="username" 
              value={data.username}
              onChange={(event) => {
                data.username = event.target.value
                setData({...data})
              }}
              />
          </label>
          <label>
            Leave us your email pretty please??
            <input 
              type="email" 
              name="email" 
              value={data.email}
              onChange={(event) => {
                data.email = event.target.value
                setData({...data})
              }}
              />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
