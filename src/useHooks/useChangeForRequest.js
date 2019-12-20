import React, { useCallback, useEffect } from 'react';

const useChangeForRequest = (forRequest, setForRequest) => {
  const changeForRequest = useCallback(event => {
    const node = event.target;
    const name = node.name;
    const value = node.value;
    const type = node.type;

    setForRequest(forRequest => {
      return {
        ...forRequest,
        [name]: type === 'checkbox' ? node.checked : value
      }
    });
  }, [setForRequest, ...forRequest]);
  
  return changeForRequest;
};

export default useChangeForRequest;
