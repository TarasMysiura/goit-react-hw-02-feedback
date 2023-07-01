import React from 'react';
import { StatsUl, StatsLi, LabelSpan, CountSpan } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatsUl>
        <StatsLi>
          <LabelSpan>Good: </LabelSpan>
          <CountSpan>{good}</CountSpan>
        </StatsLi>
        <StatsLi>
          <LabelSpan>Neutral: </LabelSpan>
          <CountSpan>{neutral}</CountSpan>
        </StatsLi>

        <StatsLi>
          <LabelSpan>Bad: </LabelSpan>
          <CountSpan>{bad}</CountSpan>
        </StatsLi>
        <StatsLi>
          <LabelSpan>Total: </LabelSpan>
          <CountSpan>{total}</CountSpan>
        </StatsLi>
        <StatsLi>
          <LabelSpan>Positive feedback: </LabelSpan>
          <CountSpan>{positivePercentage}%</CountSpan>
        </StatsLi>
        {/* )) */}
        {/* } */}
      </StatsUl>
    </div>
  );
};
