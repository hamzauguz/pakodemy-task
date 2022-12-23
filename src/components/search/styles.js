import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: height / 16.88,
    marginBottom: width / 19.5,
    margin: width / 39,
    borderRadius: width / 39,
    width: '80%',
    right: width / 78,
  },
  searchIcon: {
    padding: width / 39,
  },
  input: {
    flex: 1,
    paddingTop: width / 39,
    paddingRight: width / 39,
    paddingBottom: width / 39,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  filtericon: {
    backgroundColor: '#E2DCDC',

    marginBottom: width / 39,
    borderRadius: width / 78,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width / 78,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlView: {
    height: height / 9.37777,
    backgroundColor: '#B5CCE5',
    width: '92%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 5,
  },
});

export default styles;
