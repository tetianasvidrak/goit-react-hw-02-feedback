import React from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = button => {
    this.setState(prevState => {
      return {
        [button]: prevState[button] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, curr) => acc + curr, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage() ?? 0;
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.onButtonClick}
            />
          }
        />
        <Section
          title="Statistics"
          children={
            !!this.countTotalFeedback() ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercentage={positive}
              />
            ) : (
              <Notification message="There is no given feedback" />
            )
          }
        />
      </>
    );
  }
}

// return (
//   <div
//     style={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: 40,
//       color: '#010101',
//     }}
//   >
//     sReact homework template
//   </div>
// );

export default App;
