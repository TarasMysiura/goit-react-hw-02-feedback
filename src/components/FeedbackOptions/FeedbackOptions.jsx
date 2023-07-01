import React from 'react';
import { BtnUl, BtnLi, Button } from './FeedbackOptions.styled';

export const FeedbakcOptions = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <BtnUl>
      <BtnLi>
        <Button type="button">Good</Button>
      </BtnLi>
      <BtnLi>
        <Button type="button">Neutral</Button>
      </BtnLi>
      <BtnLi>
        <Button type="button">Bad</Button>
      </BtnLi>
    </BtnUl>
  );
};
