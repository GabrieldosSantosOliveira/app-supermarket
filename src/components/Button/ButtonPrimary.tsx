import React from 'react';
import { Pressable, View, PixelRatio, ViewProps } from 'react-native';
interface IButton extends ViewProps {
  children: React.ReactNode;
}
export const ButtonPrimary = ({ children, ...props }: IButton) => {
  return (
    <Pressable>
      <View
        style={{
          borderRadius: 8,
          width: '100%',
          height: PixelRatio.getPixelSizeForLayoutSize(56),
          backgroundColor: '#3b82f6',
        }}
        {...props}
      >
        {children}
      </View>
    </Pressable>
  );
};
