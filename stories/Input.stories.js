import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import { Input } from '../src/components';
const InputHistory = storiesOf('Input', module);
InputHistory.addDecorator(withKnobs);

InputHistory.add('Input', () => {
  return (<Input
    mini={boolean('mini', true)}
    label={text('label', 'Number for attempt')}
    autoComplete={text('autoComplete', 'off')}
    placeholder={text('placeholder', null)}
    onChange={action('onChange')}
    onFocus={action('onFocus')}
    onBlur={action('onBlur')}
    autoFocus={boolean('autoFocus', false)}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    initialValue={text('initValue', '')}
    maxLength={text('maxLength', 1)}
  />);
});
