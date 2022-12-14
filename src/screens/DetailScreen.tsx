import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const DetailScreen = ({route}: Props) => {
  return (
    <View>
      <Text>DetilScreen</Text>
    </View>
  );
};
