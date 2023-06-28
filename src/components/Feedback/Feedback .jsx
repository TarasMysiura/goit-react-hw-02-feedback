import React from 'react';
import { Button, FeedbackStyle, LiBtn, TitleH2, TitleH3, UlBtn } from './Feedback .styled';

export const Feedback = () => {
  return (
    <FeedbackStyle>
      <TitleH2>Please leave feedback</TitleH2>
      <UlBtn>
        <LiBtn>
          <Button type="button">Good</Button>
        </LiBtn>
        <LiBtn>
          <Button type="button">Neutral</Button>
        </LiBtn>
        <LiBtn>
          <Button type="button">Bad</Button>
        </LiBtn>
      </UlBtn>

      <TitleH3>Statistics</TitleH3>
    </FeedbackStyle>
  );
};
