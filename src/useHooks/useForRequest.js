import React, { useEffect, useState } from 'react';

const useForRequest = typeObject => {
  // const [ forRequest, setForRequest ] = useState(null);
  const [ forRequest, setForRequest ] = useState(() => typeObject);

  return [ forRequest, setForRequest ];
};

export default useForRequest;
