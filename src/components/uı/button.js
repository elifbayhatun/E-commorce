import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/appColors';

const CustomButton = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 5,
    borderRadius: 5,
    margin: 5,
  },
  title: {
    color: AppColors.WHITE,
    fontWeight: '600',
  },
});

export default CustomButton;
