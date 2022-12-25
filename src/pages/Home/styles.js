import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainPlace: {flex: 1, paddingHorizontal: 20},
  listPlace: {flex: 1},
  emptyView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieStyle: {
    width: Platform.OS === 'ios' ? width / 1.95 : width / 3.4,

    height: Platform.OS === 'ios' ? height / 4.22 : height / 3.4,

    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {fontSize: 20, fontWeight: '600'},
});
