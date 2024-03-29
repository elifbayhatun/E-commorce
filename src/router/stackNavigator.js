import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CART, LOGIN, PRODUCTLIST, REGISTER, TAB} from '../utils/routes';
import ProductList from '../screens/productList';
import TabNavigatior from './tabNavigators';
import Cart from '../screens/cart';
import Login from '../screens/login';
import {useDispatch} from 'react-redux';
import {checkUserLogin} from '../store/actions/authAction';
import Register from '../screens/register';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserLogin());
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitle: 'Geri',
      }}>
      <Stack.Screen name={TAB} component={TabNavigatior} />
      <Stack.Screen
        options={{headerShown: true}}
        name={CART}
        component={Cart}
      />
      <Stack.Screen
        options={({route}) => ({
          title: route.params.category,
          headerShown: true,
        })}
        name={PRODUCTLIST}
        component={ProductList}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={LOGIN}
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={REGISTER}
        component={Register}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
