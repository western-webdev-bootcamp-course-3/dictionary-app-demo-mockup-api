import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import useErrorContext from '../hook/useErrorContext';

// step 1: create a context instance; done
// step 2: create a provider component; done
// step 3: wrap up the app with the provider component; done
// step 4: access the context value in the child component; create a custom hook; done

const WordContext = createContext({
  words: [], // represent all words in the database
});

const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]); // [{ id: 'hello', word: 'hello' }]

  const { reportErrors } = useErrorContext();

  useEffect(() => {
    // purpose 1: fetch all words from the database
    // purpose 2: set the words to the state
    const fetchWords = async () => {
      try {
        const response = await axios.get('http://localhost:8000/words');
        const data = response.data;
        setWords(data);
      } catch (error) {
        reportErrors('word-list', error.message);
        reportErrors('home', error.message);
      }
    };

    fetchWords();
  }, []);

  // purpose 1: add a new word to the database
  // purpose 2: update the words state
  // parameter: word - a string (e.g. 'hello')
  const addWord = async (word) => {
    const response = await axios.post('http://localhost:8000/words', {
      id: word,
      word: word,
    });
    const data = response.data;
    setWords([...words, data]);
  };

  // purpose 1: update a word in the database
  // purpose 2: update the words state
  // parameter: oldWord - a string (e.g. 'hello')
  // parameter: newWord - a string (e.g. 'hi')
  const updateWord = async (oldWord, newWord) => {
    // const response = await axios.put(
    //   `http://localhost:8000/words/${oldWord}`, // the oldWord is used an id here
    //   {
    //     id: newWord,
    //     word: newWord,
    //   }
    // );

    // make a delete request to delete the old word
    await axios.delete(`http://localhost:8000/words/${oldWord}`);

    // make a post request to add the new word
    const response = await axios.post('http://localhost:8000/words', {
      id: newWord,
      word: newWord,
    });

    const data = response.data;
    const updatedWords = words.map((word) => {
      if (word.id === oldWord) {
        return data;
      }
      return word;
    });
    setWords(updatedWords);
  };

  // delete a word
  // purpose 1: delete a word from the database
  // purpose 2: update the words state
  // parameter: word - a string (e.g. 'hello')
  const deleteWord = async (word) => {
    await axios.delete(`http://localhost:8000/words/${word}`); // the word is used an id here
    const updatedWords = words.filter((w) => w.id !== word);
    setWords(updatedWords);
  };

  return (
    <WordContext.Provider
      value={{
        words: words,
        addWord: addWord,
        updateWord: updateWord,
        deleteWord: deleteWord,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export { WordContext, WordProvider }; // import { WordContext, WordProvider } from './context/WordContext';
export default WordContext; // import WordContext from './context/WordContext';
