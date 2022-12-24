import {StyleSheet} from 'react-native';

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
    height: 40,
    width: 40,
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
  imageStyle: {width: 100, height: 150, borderRadius: 10},
  tPlace: {flex: 1, marginLeft: 12},
  titlePlace: {fontSize: 22, paddingRight: 16},
});
