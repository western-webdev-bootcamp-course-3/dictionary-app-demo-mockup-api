import List from './List';
import ErrorDisplay from '../../component/ErrorDisplay';

// task 1: structure the word list page into multiple components; done
// task 2: style the list of words; done
// task 3: style each row in this list; done
// task 4: style the single input-field form; done

const WordList = () => {
  return (
    <div>
      <div
        style={{
          fontSize: '4rem',
          lineHeight: '4rem',
          fontWeight: 'bold',
        }}
      >
        Saved words
      </div>
      <ErrorDisplay key='word-list' />
      <List />
    </div>
  );
};

export default WordList;
