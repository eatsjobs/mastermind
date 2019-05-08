import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import { Button } from '../src/components';
const InputHistory = storiesOf('Button', module);
InputHistory.addDecorator(withKnobs);

InputHistory.add('button', () => {
  return (<Button>
    Prova
  </Button>);
});
