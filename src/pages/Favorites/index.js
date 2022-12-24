import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {removeFavorite} from '../../redux/actions';
import {styles} from './styles';

const Favorites = () => {
  const {favorites} = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();
  const removeFromFavorites = movie => dispatch(removeFavorite(movie));
  const handleRemoveFavorite = movie => {
    removeFromFavorites(movie);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.fs}>Favorites</Text>
      <View style={styles.flength}>
        {favorites.length === 0 ? (
          <Text style={styles.addMovie}>Add a movie to the list.</Text>
        ) : (
          <FlatList
            data={favorites}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              const IMAGE_URL =
                'https://image.tmdb.org/t/p/w185' + item.poster_path;

              return (
                <View style={styles.mv}>
                  <View style={styles.secondmv}>
                    <Image
                      source={{
                        uri: IMAGE_URL,
                      }}
                      resizeMode="cover"
                      style={styles.imageStyle}
                    />
                    <View style={styles.tPlace}>
                      <View>
                        <Text style={styles.titlePlace}>{item.title}</Text>
                      </View>
                      <View style={styles.votecountView}>
                        <MaterialIcons
                          color="green"
                          name="thumb-up"
                          size={32}
                        />
                        <Text style={styles.votecount}>{item.vote_count}</Text>
                        <TouchableOpacity
                          onPress={() => handleRemoveFavorite(item)}
                          activeOpacity={0.7}
                          style={styles.removeItem}>
                          <MaterialIcons
                            color="orange"
                            size={32}
                            name="favorite"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Favorites;
