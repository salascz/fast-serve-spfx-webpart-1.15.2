import * as React from 'react';
import styles from './FastServe115.module.scss';
import { IFastServe115Props } from './IFastServe115Props';

export default class FastServe extends React.Component<IFastServe115Props, {}> {
  public render(): React.ReactElement<IFastServe115Props> {

    const clickHandler = (): void => {
      throw new Error('Error on click');
    }

    return (
      <section className={styles.fastServe115}>
        <div className={styles.welcome}>
          <div className={styles.testStyle}>FAST Serve test 1.15.1</div>
          <button onClick={clickHandler}>test link</button>
        </div>
      </section>
    );
  }
}
