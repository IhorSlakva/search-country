import css from './Loader.module.css';
import ClipLoader from 'react-spinners/ClipLoader';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      {' '}
      <ClipLoader
        color={'#22a6b3'}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
