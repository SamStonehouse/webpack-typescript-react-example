import React from 'react';

import styles from './example-component.scss';

const ExampleComponent: React.FunctionComponent<Record<string, never>> = () => (
  <p className={styles.p}>Example Component</p>
);

export default ExampleComponent;
