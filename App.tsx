import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  SafeAreaView,
} from 'react-native';
import Header from './src/screens/Header';
import Product from './src/screens/Product';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'samsung',
      price: 20000,
      color: 'black',
      image: 'https://img.icons8.com/?size=512&id=ZwGNoFXGbt9n&format=png',
    },
    {
      id: 2,
      name: 'iphone',
      price: 75000,
      color: 'black',
      image: 'https://img.icons8.com/?size=512&id=ZwGNoFXGbt9n&format=png',
    },
    {
      id: 3,
      name: 'redmi',
      price: 23000,
      color: 'black',
      image: 'https://img.icons8.com/?size=512&id=ZwGNoFXGbt9n&format=png',
    },
    {
      id: 4,
      name: 'realme',
      price: 15000,
      color: 'black',
      image: 'https://img.icons8.com/?size=512&id=ZwGNoFXGbt9n&format=png',
    },
    {
      id: 5,
      name: 'oneplus',
      price: 15000,
      color: 'black',
      image: 'https://img.icons8.com/?size=512&id=ZwGNoFXGbt9n&format=png',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
