import { Component} from "react";
import SectionTitle from "./SectionTitle";
import Statistics from "./Statistics"
import FeedbackOptions from "./FeedbackOptions"
// import css from "./Feedback.module.css";

export default class Feed extends Component  {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

      onLeaveFeedback = (propertyName) => {
        this.setState((prev) => {
            const value = prev[propertyName];
            return {
                [propertyName]: value + 1
            }
        })
      }
    render () {
        const {good, neutral, bad} = this.state;
    return (
        <div>
            <SectionTitle 
            title="Please leave feedback">
            <FeedbackOptions 
            onLeaveFeedback={this.onLeaveFeedback}
            />

            {/* <button onClick={() => this.leaveVote("good")} className={css.feedbackBtn}>Good</button>
             <button onClick={() => this.leaveVote("neutral")} className={css.feedbackBtn}>Neutral</button>
             <button onClick={() => this.leaveVote("bad")} className={css.feedbackBtn}>Bad</button> */}
            </SectionTitle>
            <SectionTitle 
            title="Statistics">
            <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            />
            {/* <ul className={css.statisticsList}>
                 <li className={css.statisticsItem}>Good: {good}</li>
             <li className={css.statisticsItem}>Neutral: {neutral}</li>
                 <li className={css.statisticsItem}>Bad: {bad}</li>
             </ul> */}
            </SectionTitle>
        </div>
        
        // <div className={css.feedbackList}>
        //     <p className={css.feedbackTitle}>Please leave feedback</p>
        //     <button onClick={() => this.leaveVote("good")} className={css.feedbackBtn}>Good</button>
        //     <button onClick={() => this.leaveVote("neutral")} className={css.feedbackBtn}>Neutral</button>
        //     <button onClick={() => this.leaveVote("bad")} className={css.feedbackBtn}>Bad</button>
        //     <p className={css.statisticsTitle}>Statistics</p>
        //     <ul className={css.statisticsList}>
        //         <li className={css.statisticsItem}>Good: {good}</li>
        //         <li className={css.statisticsItem}>Neutral: {neutral}</li>
        //         <li className={css.statisticsItem}>Bad: {bad}</li>
        //     </ul>
        // </div>
    )
}
}