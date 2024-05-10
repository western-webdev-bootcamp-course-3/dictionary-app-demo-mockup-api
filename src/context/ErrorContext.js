import { createContext, useState } from 'react';

const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState([]); // { 'home': 'error message', 'word-list': 'error message'}

  // reportErrors: add an error message to the errors state
  // error is a string
  const reportErrors = (key, error) => {
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        [key]: error,
      };
    });
  };

  // clearErrors: remove an error message from the errors state
  const clearErrors = (key) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[key];
      return newErrors;
    });
  };


  return (
    <ErrorContext.Provider
      value={{
        errors,
        reportErrors,
        clearErrors
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider }; // import { ErrorContext, ErrorProvider } from './context/ErrorContext';
export default ErrorContext; // import ErrorContext from './context/ErrorContext';
