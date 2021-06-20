import React from 'react';

import ExampleComponent from './example-component/example-component';

import styles from './app.scss';

const App: React.FunctionComponent<Record<string, never>> = () => (
  <div>
    <h2 className={styles.app}>
      Hello
    </h2>
    <ExampleComponent />
  </div>
);

export default App;
