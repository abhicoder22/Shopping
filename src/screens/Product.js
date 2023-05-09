import React from 'react';
import {View, Text, Button, Image, SafeAreaView} from 'react-native';
import {addToCart} from '../redux/Action';
import {useDispatch} from 'react-redux';

const Product = props => {
  const item = props.item;
  //   const dispatch = useDispatch();

  const handleAddToCart = item => {
    console.warn('called', item);
    // dispatch(addToCart(item));
  };

  return (
    <SafeAreaView style={{margin: 10}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 25}}>{item.name}</Text>
        <Text style={{fontSize: 25}}>{item.price}</Text>
        <Text style={{fontSize: 25}}>{item.color}</Text>
        <Image style={{width: 100, height: 100}} source={{uri: item.image}} />
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      </View>
    </SafeAreaView>
  );
};

export default Product;
