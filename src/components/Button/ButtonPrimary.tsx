import {
  Button as NativeBaseButton,
  IButtonProps
} from 'native-base';
import React from 'react';
interface IButton extends IButtonProps {
  children: React.ReactNode;
}
export const ButtonPrimary = ({
  children,
  ...props
}: IButton) => {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      fontSize="md"
      bg="blue.500"
      _pressed={{ bg: 'blue.400' }}
      rounded="md"
      {...props}
    >
      {children}
    </NativeBaseButton>
  );
};
