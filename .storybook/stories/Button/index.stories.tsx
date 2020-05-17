import React from 'react';
import { action } from '@storybook/addon-actions';
import CustomButton from './../../../src/components/CustomButton';

import { View, Text, StyleSheet} from 'react-native';

export default {
  title: 'Button',
  component: CustomButton,
};

export const Emoji = () => (
  <CustomButton onClick={action('clicked')}>
    <View >
      <Text>😀 😎 👍 💯</Text>
    </View>
  </CustomButton>
);


export const Default = () => <CustomButton onClick={action('clicked')}/>;

export const TextProps = () => <CustomButton onClick={action('clicked')} text={'I am Button'}/>;

export const WithOnClick = () => <CustomButton onClick={()=>{console.log('called')}} text={'Click Me'}/>;

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#0f0',
    padding: 10
  },
});

export const WithStyleSheet = () => <CustomButton onClick={()=>{console.log('called')}} text={'Click Me'} customContainerClass={styles.viewContainer}/>;

export const WithBtnColor = () => <CustomButton onClick={()=>{console.log('called')}} text={'Click Me'} buttonColor='red' />;