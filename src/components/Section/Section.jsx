import React from 'react'
import { TitleH2, TitleH3 } from './Section.styled';
import { FeedbakcOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export const Section = (state) => {
  return (
    <>
        <TitleH2>Please leave feedback</TitleH2>
        <FeedbakcOptions
        // options={ } onLeaveFeedback={ }
        />

        <TitleH3>Statistics</TitleH3>
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={totalResponse(state)}
          positivePercentage={(
            (state.good * 100) /
            totalResponse(state)
          ).toFixed()}
        ></Statistics>
      
    </>
  );
}

function totalResponse(data) {
  const values = Object.values(data);

  // console.log(values);
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  // console.log(total);
  return total;
}
