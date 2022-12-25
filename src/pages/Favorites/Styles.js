import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {flex: 1, marginTop: 44, paddingHorizontal: 20},
  fs: {fontSize: 22},
  removeItem: {
    marginLeft: 14,
    flexDirection: 'row',
    padding: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',

    height: Platform.OS === 'ios' ? height / 21.1 : height / 17,
    width: Platform.OS === 'ios' ? width / 9.75 : width / 10.27,
  },
  flength: {flex: 1, marginTop: 8},
  addMovie: {color: '#010101', fontSize: 18},
  votecount: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#64676D',
  },
  votecountView: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  mv: {marginVertical: 12},
  secondmv: {flexDirection: 'row', flex: 1},
  imageStyle: {
    width: Platform.OS === 'ios' ? width / 3.9 : width / 4.11,
    height: Platform.OS === 'ios' ? height / 5.62 : height / 4.55,
    borderRadius: 10,
  },
  tPlace: {flex: 1, marginLeft: 12},
  titlePlace: {fontSize: 22, paddingRight: 16},
});

//390 844
//411 683
