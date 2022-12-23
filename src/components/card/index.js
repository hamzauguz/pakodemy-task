import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Card = ({title, IMAGE_URL, vote_count, onPress, exists, cardPress}) => {
  return (
    <TouchableOpacity onPress={cardPress} style={styles.main}>
      <View style={styles.firstPlace}>
        <Image
          source={{
            uri: IMAGE_URL,
          }}
          resizeMode="cover"
          style={styles.imageStyle}
        />
        <View style={styles.stringPlace}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.iconPlace}>
            <MaterialIcons color="green" name="thumb-up" size={32} />
            <Text style={styles.countTitle}>{vote_count}</Text>
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={0.7}
              style={styles.addBasket}>
              <MaterialIcons color="orange" size={32} name={exists} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
