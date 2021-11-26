import React, { Component } from "react";
import { FeedbackElems } from "../FeedbackOpt/FeedbackElems";
import data from "../data/feedbackData.json";
import Statistic from "../Statistics/Statistic";
import { Section } from "../Section/Section";
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (option) => {
    this.setState({
      [option]: this.state[option] + 1,
    });
    //console.log(this.state);
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const res = good + neutral + bad;
    //console.log(res);
    return res;
  }

  countPositiveFeedbackPercentage(total) {
    const { good } = this.state;
    const result = Math.round((good / total) * 100);
    return result;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalNum = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(totalNum);
    //console.log(totalNum);
    return (
      <>
        <Section
          title="Please leave your feedback"
          child={
            <FeedbackElems
              options={data}
              incrementFunc={this.handleIncrement}
            />
          }
        ></Section>
        <Section
          title="Statistics"
          child={
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalNum}
              percentage={percentage}
            />
          }
        ></Section>
      </>
    );
  }
}

export default Feedback;
