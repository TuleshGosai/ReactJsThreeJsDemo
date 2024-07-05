import React from 'react';
import CommonIcons from './commonIcons';

const Icons = (props) => {
  const {
    iconClass, id, ...rest
  } = props;
  const IconDiv = () => (
    <span
      id={id}
      style={{ cursor: 'pointer' }}
      className={iconClass}
      {...rest}
    >
      <CommonIcons {...props} />
    </span>
  );
  return (
    <>
        {IconDiv()}
    </>
  );
};

export default Icons;
