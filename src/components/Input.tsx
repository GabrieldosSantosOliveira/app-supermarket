import { Input as NativeBaseInput, IInputProps } from 'native-base';

import { useTheme } from '../hooks/useTheme';
export const Input = ({ ...props }: IInputProps) => {
  const { colorMode } = useTheme();
  return (
    <NativeBaseInput
      h={14}
      fontSize="md"
      borderWidth={0}
      bg={colorMode === 'dark' ? 'muted.800' : 'trasparent'}
      color={colorMode === 'dark' ? 'text.600' : 'gray.100'}
      _focus={{
        color: colorMode === 'dark' ? 'white' : 'gray.100',
        bg: colorMode === 'dark' ? 'muted.600' : 'trasparent',
        borderWidth: 1,
        borderColor: colorMode === 'dark' ? 'blue.300' : 'gray.100',
      }}
      {...props}
    />
  );
};
