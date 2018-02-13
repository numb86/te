import React from 'react';

import Text from './Text';
import List from './List';

export default function TestTargetComponent(props) {
  switch (props.type) {
    case 'text':
      return <Text {...props} />;
    case 'list':
      return <List {...props} />;
    default:
      throw new Error('This type is not found.');
  }
}
