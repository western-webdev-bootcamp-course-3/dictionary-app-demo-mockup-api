import { useState } from 'react';
import { SlActionRedo } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { TiDeleteOutline } from 'react-icons/ti';
import Color from '../../constant/Color';
import useWordContext from '../../hook/useWordContext';
import useErrorContext from '../../hook/useErrorContext';

// task 1: functioning direction button; done
// task 2: functioning delete button; done
// task 3: double click the word to show the corresponding form; done
// task 4: implement all the functions of the form; done

const Row = ({ word, index }) => {
  const { deleteWord, updateWord } = useWordContext();
  const { reportErrors } = useErrorContext();

  // state variable that checks if we are in the edting mode
  const [isEditing, setIsEditing] = useState(false);
  // function that flips the isEditing state
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // state variable that stores the value of the input field
  const [inputValue, setInputValue] = useState(word);
  // function that updates the inputValue state
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = async () => {
    try {
      await deleteWord(word);
    } catch (error) {
      // error is an object, it has a few different fields, such as message, name, etc.
      reportErrors('word-list', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // sanity check
    const trimmedValue = inputValue.trim();
    if (trimmedValue === '') {
      setIsEditing(false);
      return;
    }

    await updateWord(word, inputValue);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: '2rem',
        width: 500,
        borderTop: index === 0 ? `1px solid ${Color.borderColor}` : 'none',
        borderBottom: `1px solid ${Color.borderColor}`,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={inputValue}
              onChange={handleChange}
              onBlur={handleSubmit}
              autoFocus
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.5rem',
                borderColor: Color.accent,
                borderRadius: 5,
                borderWidth: 1,
                outline: 'none',
                padding: 5,
              }}
            />
          </form>
        ) : (
          <div
            style={{ fontSize: '1.2rem', lineHeight: '1.5rem' }}
            onDoubleClick={handleDoubleClick}
          >
            {word}
          </div>
        )}
        <div>
          <Link
            to={`/?word=${word}`}
            style={{
              textDecoration: 'none',
              color: Color.primaryText,
            }}
          >
            <SlActionRedo />
          </Link>
        </div>
      </div>
      <div>
        <TiDeleteOutline
          size={25}
          color={Color.accent}
          onClick={handleDelete}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default Row;
