import { Link } from 'react-router-dom';
import styles from './GoBackBtn.module.css';

export const GoBackBtn = () => {
  return (
    <Link className={styles.link} to="/">
      Go Back
    </Link>
  );
};
