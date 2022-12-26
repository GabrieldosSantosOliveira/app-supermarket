import { useContext } from 'react';

import { RegisterContext } from './../context/RegisterContext';

export const useRegister = () =>
  useContext(RegisterContext);
