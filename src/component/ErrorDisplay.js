import { useEffect } from 'react';
import useErrorContext from '../hook/useErrorContext';

const ErrorDisplay = ({ pageKey }) => {
  const { errors, clearErrors } = useErrorContext();

  // erase the displayed error message after 5 seconds
  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        // clear the error message
        clearErrors(pageKey);
      }, 5000); // 5000 milliseconds = 5 seconds

      // cleanup function
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
