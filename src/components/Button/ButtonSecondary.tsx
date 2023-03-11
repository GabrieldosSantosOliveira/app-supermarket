import { memo } from 'react';
import { Pressable, ViewProps } from 'react-native';

interface IButtonSecondary extends ViewProps {
  children: React.ReactNode;
}
const ButtonSecondaryComponent = ({
  children,

  ...props
}: IButtonSecondary) => {
  return (
    <Pressable style={{ width: '100%' }} {...props}>
      {children}
    </Pressable>
  );
};
export const ButtonSecondary = memo(ButtonSecondaryComponent);
