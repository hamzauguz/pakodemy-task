import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../../components/card';
import {getMovies, addFavorite, removeFavorite} from '../../redux/actions';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Home = () => {
  const navigation = useNavigation();
  const {movies, favorites} = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());
  const addToFavorites = movie => dispatch(addFavorite(movie));
  const removeFromFavorites = movie => dispatch(removeFavorite(movie));

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAddFavorite = movie => {
    addToFavorites(movie);
  };

  const handleRemoveFavorite = movie => {
    removeFromFavorites(movie);
  };

  const exists = movie => {
    if (favorites.filter(item => item.id === movie.id).length > 0) {
      return true;
    }

    return false;
  };

  return (
    <View style={styles.mainPlace}>
      <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
        <Text style={{fontSize: 22}}>Popular Movies</Text>
      </TouchableOpacity>
      <View style={styles.listPlace}>
        <FlatList
          data={movies}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            const IMAGE_URL =
              'https://image.tmdb.org/t/p/w185' + item.poster_path;
            return (
              <Card
                IMAGE_URL={IMAGE_URL}
                title={item.title}
                vote_count={item.vote_count}
                onPress={() =>
                  exists(item)
                    ? handleRemoveFavorite(item)
                    : handleAddFavorite(item)
                }
                exists={exists(item) ? 'favorite' : 'favorite-outline'}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;
