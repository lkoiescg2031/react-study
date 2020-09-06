import React, { Suspense, lazy } from 'react';

import Text from '../../../doit-ui/Text';
const LazyMainPage = lazy(() => import('./MainPage'));

export default function AsyncMainPage() {
  return (
    <Suspense
      fallback={
        <Text secondary large>
          로딩중...
        </Text>
      }
    >
      <LazyMainPage />
    </Suspense>
  );
}
