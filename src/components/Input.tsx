import { TextInput, TextInputProps } from 'react-native';

import { useTheme } from '../hooks/useTheme';
export const Input = ({ ...props }: TextInputProps) => {
  const { colorMode } = useTheme();
  return (
    <TextInput
      style={{
        height: 56,
        fontSize: 14,
        backgroundColor: colorMode === 'dark' ? '#262626' : 'trasparent',
        color: colorMode === 'dark' ? 'black' : '#f4f4f5',
      }}
      {...props}
    />
  );
};
