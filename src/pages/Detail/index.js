import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AnimatedHeader from 'react-native-animated-header';

const Detail = props => {
  const showData = props?.route.params.item;
  console.log('showdata:', showData);
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w185' + showData?.poster_path;

  return (
    <View style={styles.mainContainer}>
      <AnimatedHeader
        headerMaxHeight={200}
        style={styles.flex}
        imageSource={{uri: IMAGE_URL}}
        toolbarColor="gray"
        disabled={false}>
        <ScrollView>
          <View style={styles.titlePlace}>
            <Text style={styles.titleText}>{showData.title}</Text>
          </View>
          <View style={styles.secondPlace}>
            <View>
              <Text style={styles.writel}>Date</Text>
              <Text style={styles.wcolor}>{showData.release_date}</Text>
            </View>
            <View>
              <Text style={styles.writer}>Average</Text>
              <Text style={styles.writer}>{showData.vote_average}</Text>
            </View>
          </View>
          <View style={styles.descPlace}>
            <Text style={styles.descText}>Description</Text>
            <View style={styles.overview} />
            <Text style={styles.overviewText}>{showData.overview}</Text>
          </View>
        </ScrollView>
      </AnimatedHeader>
    </View>
  );
};

export default Detail;
