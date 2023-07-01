import React from 'react'
import { SectionStyle, TitleH2 } from './Section.styled';
// import { FeedbakcOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Statistics } from 'components/Statistics/Statistics';
import PropTypes from 'prop-types';

export const Section = ( {title, children} ) => {
  return (
    <SectionStyle>
      {title && <TitleH2>{title}</TitleH2>}
      {children}
    </SectionStyle>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
