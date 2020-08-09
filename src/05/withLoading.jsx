import React from 'react';

export default function (loadingMessgae = '로딩 중') {
  return function withLoading(WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoading({ isLoading, ...otherProps }) {
      if (isLoading) return loadingMessgae;
      return <WrappedComponent {...otherProps} />;
    }

    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    return WithLoading;
  };
}
