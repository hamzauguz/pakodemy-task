import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {marginVertical: 12},
  firstPlace: {flexDirection: 'row', flex: 1},
  imageStyle: {width: 100, height: 150, borderRadius: 10},
  stringPlace: {flex: 1, marginLeft: 12},
  title: {fontSize: 22, paddingRight: 16, color: 'black'},
  iconPlace: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  countTitle: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#64676D',
  },
  addBasket: {
    marginLeft: 14,
    flexDirection: 'row',
    padding: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
});
