import React, {useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {AppColors} from '../../theme/appColors';
import {useDispatch, useSelector} from 'react-redux';
import {getProductList} from '../../store/actions/productAction';
import ProductItem from '../../components/home/productItem';
import CustomSpinner from '../../components/uı/spinner';

const ProductList = ({route}) => {
  const {category} = route.params;
  const {productList, pending} = useSelector(state => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList({category: category}));
  }, []);

  return (
    <View style={styles.container}>
      {pending ? (
        <CustomSpinner />
      ) : (
        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          numColumns={2}
          data={productList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
  },
});

export default ProductList;
