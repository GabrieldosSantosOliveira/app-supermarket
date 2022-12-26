import {
  Input as NativeBaseInput,
  IInputProps
} from 'native-base';

import { useTheme } from '../hooks/useTheme';
export const Input = ({ ...props }: IInputProps) => {
  const { colorMode } = useTheme();
  return (
    <NativeBaseInput
      h={14}
      borderBottomColor={
        colorMode === 'dark' ? 'amber.100' : 'gray.100'
      }
      bg={colorMode === 'dark' ? 'amber.100' : 'trasparent'}
      {...props}
    />
  );
};
