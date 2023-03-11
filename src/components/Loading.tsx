import { ActivityIndicator, View } from 'react-native';
export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#040f13',
      }}
    >
      <ActivityIndicator color="white" />
    </View>
  );
};
