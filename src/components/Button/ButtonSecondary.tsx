import {
  HStack,
  Spinner,
  Text,
  StyledProps,
  ITextProps,
  ISpinnerProps
} from 'native-base';
import { memo } from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity
} from 'react-native';

interface IButtonSecondary extends TouchableOpacityProps {
  children: React.ReactNode;
  isLoading?: boolean;
  isLoadingText?: string;
  _loading?: StyledProps;
  isLoadingTextProps?: ITextProps;
  isLoadingSpinnerProps?: ISpinnerProps;
}
const ButtonSecondaryComponent = ({
  children,
  isLoading = false,
  isLoadingText = '',
  _loading,
  isLoadingTextProps,
  isLoadingSpinnerProps,
  ...props
}: IButtonSecondary) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={{ width: '100%' }}
      {...props}
    >
      {isLoading ? (
        <HStack
          bg="blue.500"
          opacity={0.4}
          alignItems="center"
          h={14}
          rounded="md"
          justifyContent="center"
          px={4}
          {..._loading}
        >
          <Spinner
            color="white"
            {...isLoadingSpinnerProps}
          />
          <Text
            ml={2}
            color="white"
            {...isLoadingTextProps}
          >
            {isLoadingText}
          </Text>
        </HStack>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
export const ButtonSecondary = memo(
  ButtonSecondaryComponent
);
