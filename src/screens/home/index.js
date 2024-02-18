import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../../store/actions/homeActions';
import Spinner from '../../components/uı/spinner';

import {homeScreenStyles} from '../../styles/home/homeStyles';
import CategoryItem from '../../components/home/categoryItem';

const Home = () => {
  const {pending, categories} = useSelector(state => state?.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <View style={homeScreenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={categories}
          keyExtractor={item => item}
          renderItem={({item}) => <CategoryItem item={item} />}
        />
      )}
    </View>
  );
};
export default Home;
