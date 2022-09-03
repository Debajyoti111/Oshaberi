import axios from "axios";
import { useState } from "react";

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    
    try {
      setErrors(null);
      const response = await axios[method](url, {...body, ...props}, {withCredentials:true});
      if (onSuccess) {
        onSuccess(response.data);
      }
      return response.data;
    } catch (err) {
      setErrors(
        <div>
          <h4>ERRORS....</h4>
          <ul>
            {err.response.data.errors.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};

export default useRequest;