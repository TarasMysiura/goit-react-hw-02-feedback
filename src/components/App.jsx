import { Component } from 'react';
// import { Feedback } from './Feedback/Feedback ';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { FeedbackStyle } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.totalFeedback();
    return ((good * 100) / total).toFixed();
  };

  render() {
    const totalFeedback = this.totalFeedback();
    const PositiveFeedbackPercentage = this.positiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackStyle>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
            ></FeedbackOptions>
          </Section>
          {totalFeedback !== 0 ? (
            <Section title="Statistics">
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={totalFeedback}
                positivePercentage={PositiveFeedbackPercentage}
              ></Statistics>
            </Section>
          ) : (
            <Section title="Statistics">
              <p style={{ display: 'flex', justifyContent: 'center' }}>
                There is no feedback
              </p>
            </Section>
          )}
        </FeedbackStyle>
      </div>
    );
  }
}
