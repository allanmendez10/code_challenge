import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ItemComponent from '../components/List/Item';
import ListComponent from '../components/List';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import State from '../models/State.interface';
import LoginComponent from '../components/Login';

import Icon from 'react-native-vector-icons/Ionicons';
import {setIsLoggedRedux} from '../store/actions/Login';

const Stack = createStackNavigator();

export default function PostNavigator() {

  const reduxLoaded = useSelector((state:State) => state.user.loggedIn);
  const dispatch = useDispatch();


  return (
    <Stack.Navigator
      initialRouteName="drawer"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2E99F7',
        },  
        headerRightContainerStyle:{
          marginRight:10
        },    
        headerRight : () => (
            <Icon onPress = { ()=>{dispatch(setIsLoggedRedux(false))}} name="log-out" color={"white"} size={26} /> ),   
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
      }}>
       {reduxLoaded?(
         <>
      <Stack.Screen name="MainContainer" component={ListComponent} options={{
          title: 'The brag house'}} />
      
       </>
       ):(   
         <>   
       <Stack.Screen name="Login" component={LoginComponent} options={{headerShown: false}} /> 
      </>
       )}

    </Stack.Navigator>
  );
}

