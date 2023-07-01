import React from 'react';
import { FeedbackStyle, TitleH2, TitleH3 } from './Feedback .styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbakcOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export const Feedback = ({ state }) => {
  // console.log(state);
  return (
    <FeedbackStyle>
      <Section state={state} />
    </FeedbackStyle>
  );
};

// console.log(totalResponse(data));


//
