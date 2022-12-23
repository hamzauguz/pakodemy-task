import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Detail = props => {
  const showData = props.route.params.item;
  console.log('showdata:', showData);

  return (
    <View>
      <Text>{showData.title}</Text>
    </View>
  );
};

export default Detail;
