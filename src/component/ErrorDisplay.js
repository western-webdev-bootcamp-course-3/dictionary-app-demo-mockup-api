import { useEffect } from 'react';
import useErrorContext from '../hook/useErrorContext';

const ErrorDisplay = ({ pageKey }) => {
  const { errors, clearErrors } = useErrorContext();

  // erase errors that have been displayed on a page after 5 seconds
  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        clearErrors(pageKey);
      }, 5000); // clear error message after 5 seconds

      // what if an error displays itself
      // in 3 second, the user decides to close the page
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <div
      style={{ color: 'red', paddingTop: 20, paddingBottom: 20, fontSize: 20 }}
    >
      {errors[pageKey]}
    </div>
  );
};

export default ErrorDisplay;
