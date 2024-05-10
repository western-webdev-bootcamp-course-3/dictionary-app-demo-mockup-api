import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useWordContext from '../../hook/useWordContext';
import axios from 'axios';
import SearchBar from './SearchBar';
import DefinitionArea from './DefinitionArea';
import ErrorDisplay from '../../component/ErrorDisplay';

const Home = () => {
  const [definition, setDefinition] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const { words, addWord } = useWordContext();

  console.log(words);
  console.log(addWord);

  const word = searchParams.get('word') || 'test';

  const searchWordServer = async (word) => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = response.data;
      console.log(data);
      return data[0];
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const renderInitialDefinition = async () => {
      const data = await searchWordServer(word);
      setDefinition(data);
    };

    renderInitialDefinition();
  }, []);

  return (
    <div>
      <ErrorDisplay pageKey='home' />
      <SearchBar
        setDefinition={setDefinition}
        searchWordServer={searchWordServer}
        initialValue={word}
        definition={definition}
      />
      <DefinitionArea definition={definition} />
    </div>
  );
};

export default Home;
