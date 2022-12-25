import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'black'},
  flex: {flex: 1},
  titlePlace: {
    height: Platform.OS === 'ios' ? height / 8.44 : height / 6.83,

    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {fontSize: 22, fontWeight: '600', color: 'white'},
  secondPlace: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  writel: {color: 'white', textAlign: 'left'},
  writer: {color: 'white', textAlign: 'right'},
  descPlace: {marginTop: 30, margin: 5},
  overview: {
    backgroundColor: '#fff',
    height: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  descText: {color: '#fff', fontSize: 22},
  overviewText: {color: '#fff', fontSize: 18, margin: 5},
  wcolor: {color: 'white'},
});
