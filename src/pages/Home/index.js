import {FlatList, RefreshControl, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../components/card';
import {getMovies, addFavorite, removeFavorite} from '../../redux/actions';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import Search from '../../components/search';
import Lottie from 'lottie-react-native';

const Home = () => {
  const navigation = useNavigation();
  const {movies, favorites} = useSelector(state => state.moviesReducer);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());
  const addToFavorites = movie => dispatch(addFavorite(movie));
  const removeFromFavorites = movie => dispatch(removeFavorite(movie));

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const [filterClick, setFilterClick] = useState(false);
  const [openLottie, setOpenLottie] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const pullMe = () => {
    setRefresh(true);

    setTimeout(() => {
      setRefresh(false);
      setSearch('');
      setMasterDataSource('');
      setFilteredDataSource('');
    }, 1500);
  };

  useEffect(() => {
    if (masterDataSource.length === 0) {
      setFilteredDataSource(movies);
    } else {
      setFilteredDataSource(
        movies.filter(filters =>
          masterDataSource.some(category =>
            [filters.title].flat().includes(category),
          ),
        ),
      );
    }
    if (search === '') {
      setMasterDataSource(movies);
      setFilteredDataSource(movies);
      setFilterClick(false);
    }
  }, [masterDataSource]);

  console.log('movies:', movies);

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

  const searchFilterFunction = text => {
    setMasterDataSource(movies);
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
      setFilterClick(false);
    }
  };

  return (
    <View style={styles.mainPlace}>
      <Search
        value={search}
        onChangeText={text => {
          searchFilterFunction(text);
        }}
        searchPress={() => {
          if (search) {
            setOpenLottie(true);
            setTimeout(() => {
              setOpenLottie(false);
              setFilterClick(true);
            }, 1000);
          }
        }}
      />
      <View style={styles.listPlace}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
          }
          data={filterClick && filteredDataSource}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            const IMAGE_URL =
              'https://image.tmdb.org/t/p/w185' + item.poster_path;
            return (
              <Card
                cardPress={() => navigation.navigate('Detail', {item})}
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
          ListEmptyComponent={() => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>
                Please Search Movies
              </Text>
              {openLottie && (
                <Lottie
                  style={{
                    width: 200,
                    height: 200,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  source={require('../../assets/lottie/loading.json')}
                  autoPlay
                  loop
                />
              )}
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
