import React from 'react';
import {NotFound} from 'material-ui-not-found/NotFound';

const className = 'custom-class';
const style = {
  width: '50%',
};

export const NotFound = () => (
  <NotFound
    className={className}
    style={style}
    text={'Unknown resource.'}
  />
);

export default Example;
