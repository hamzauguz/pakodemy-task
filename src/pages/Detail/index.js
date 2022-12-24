import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AnimatedHeader from 'react-native-animated-header';
import Bg from '../../assets/image/screen.png';

const Detail = props => {
  const showData = props?.route.params.item;
  console.log('showdata:', showData);
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w185' + showData?.poster_path;
  console.log(IMAGE_URL);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <AnimatedHeader
        headerMaxHeight={200}
        style={{flex: 1}}
        imageSource={{uri: IMAGE_URL}}
        toolbarColor="gray"
        disabled={false}>
        <ScrollView>
          <View
            style={{
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 22, fontWeight: '600', color: 'white'}}>
              {showData.title}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <View>
              <Text style={{color: 'white', textAlign: 'left'}}>Date</Text>
              <Text style={{color: 'white'}}>{showData.release_date}</Text>
            </View>
            <View>
              <Text style={{color: 'white', textAlign: 'right'}}>Average</Text>
              <Text style={{color: 'white', textAlign: 'right'}}>
                {showData.vote_average}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 30, margin: 5}}>
            <Text style={{color: '#fff', fontSize: 22}}>Description</Text>
            <View
              style={{
                backgroundColor: '#fff',
                height: 1,
                marginTop: 10,
                marginBottom: 10,
              }}
            />
            <Text style={{color: '#fff', fontSize: 18, margin: 5}}>
              {showData.overview}
            </Text>
          </View>
        </ScrollView>
      </AnimatedHeader>
    </View>
  );
};

export default Detail;
