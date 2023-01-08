import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator
      screenOptions={{ 
        drawerType: (width >= 568) ? 'permanent': 'front'

       }}
      drawerContent={(props) => <MenuInterno { ...props }/>}
    >
      <Drawer.Screen name="StackNavigator"  component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps ) => {
  return(


    <DrawerContentScrollView>
      
      {/* // Parte del avatar */}
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Image 
          source={{
            uri: 'https://images-prod.dazeddigital.com/592/azure/dazed-prod/1060/8/1068776.jpg'
          }}
          style={{ width: 150, height: 150, borderRadius: 100 }}
        />
      </View>

      {/* Opciones del menu */}
      <View style={{ alignItems:'center', marginVertical: 20, }}>

        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
        >
          <Text style={{ fontSize: 25 }}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginTop: 10 }}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={{ fontSize: 25 }}>Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
    
  )
}