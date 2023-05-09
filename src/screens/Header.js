import React from 'react';
import {View, Text} from 'react-native';

const Header = () => {
  return (
    <View style={{margin: 10}}>
      <Text
        style={{
          fontSize: 25,
          padding: 5,
          textAlign: 'right',
          backgroundColor: 'gray',
        }}>
        0
      </Text>
    </View>
  );
};

export default Header;
