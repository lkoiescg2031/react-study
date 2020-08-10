import React from 'react';
import { storiesOf } from '@storybook/react';

import input from '../04/InputWithStyles';
import withError from '../05/withError';
import Input from '../04/InputWithStyles';

const inputWithError = withError('올바르지 못한 값입니다.')(Input);

storiesOf('WithError', module)
  .addWithJSX('기본설정', () => <inputWithError name="name" hasError />)
  .addWithJSX('errorMessage 예제', () => (
    <inputWithError name="name" hasError errorMessage="필수항목입니다." />
  ));
