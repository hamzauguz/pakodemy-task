import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = ({value, onChangeText, onPress, controls, searchPress}) => {
  const [open, setOpen] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const {width, height} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={20}
            color="gray"
          />
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder="Search"
          />
        </View>

        <TouchableOpacity onPress={searchPress}>
          <Icon
            style={styles.filtericon}
            name="filter-sharp"
            size={35}
            color="orange"
          />
        </TouchableOpacity>
      </View>
      {open && <View style={styles.controlView}>{controls}</View>}
    </View>
  );
};

export default Search;
