import React from 'react';

export const Counter = (props) => {
  const { count } = props;

  return (
    <div>
      <span>{count}</span>
    </div>
  );
};
