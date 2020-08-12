import React from 'react';
import PropTypes from 'prop-types';

import Button from '../04/Button';
import withLoadingContextAndKey, {
  loadingPropTypes,
} from './withLoadingContextAndKey';

function ButtonWithLoadingContextAndKey({ children, loading, setLoading }) {
  return (
    <Button onPress={() => setLoading(!loading)}>
      {loading ? '로딩중' : children}
    </Button>
  );
}

ButtonWithLoadingContextAndKey.propTypes = {
  ...loadingPropTypes,
  children: PropTypes.string,
};

export const ButtonWithDefaultLoadingContext = withLoadingContextAndKey(
  'defaultLoadingKey',
)(ButtonWithLoadingContextAndKey);

export const ButtonWithLoading2Context = withLoadingContextAndKey(
  'loading2',
)(ButtonWithLoadingContextAndKey);
