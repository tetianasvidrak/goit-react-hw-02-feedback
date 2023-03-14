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

  onGoodButtonClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onNeutralButtonClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onBadButtonClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  onLeaveFeedback = option => {
    switch (option) {
      case 'Bad':
        this.onBadButtonClick();
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        break;
      case 'Good':
        this.onGoodButtonClick();
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        break;
      case 'Neutral':
        this.onNeutralButtonClick();
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={['Good', 'Neutral', 'Bad']}
              onLeaveFeedback={this.onLeaveFeedback}
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
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage() || 0}
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
