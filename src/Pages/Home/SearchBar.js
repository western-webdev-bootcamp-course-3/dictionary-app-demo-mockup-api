import { useState } from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import Color from '../../constant/Color';

// task 1: style the search bar - design; finished
// task 2: capture user input - functionality; finished
// task 3: trigger search API call on user input - functionality; finished

const SearchBar = ({
  setDefinition,
  searchWordServer,
  initialValue,
  definition,
}) => {
  const [text, setText] = useState(initialValue || '');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    // prevent the default behavior of the form
    // which is to refresh the page
    e.preventDefault();
    // call the searchWordServer function
    const word = text.trim();
    if (word === '') return;
    console.log(word);
    const data = await searchWordServer(word);
    setDefinition(data);
  };

  return (
    <InputForm onSubmit={handleSubmit} definition={definition}>
      <Input
        value={text}
        type='text'
        onChange={handleChange}
        placeholder='Search for any word...'
      />
      <Button type='submit'>
        <IoIosSearch size={20} color={Color.accent} />
      </Button>
    </InputForm>
  );
};

const InputForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.secondaryBackground};
  padding: 1rem; // 16px
  border-radius: 8px;

  &:focus-within {
    box-shadow: 0 0 0 2px
      ${(props) => {
        if (!props.definition) return Color.error;
        else return Color.accent;
      }}; 
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: inherit;
  width: 100%;
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 0.5rem; // 8px
`;

export default SearchBar;
