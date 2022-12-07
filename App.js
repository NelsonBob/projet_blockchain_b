import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import DrawerItems from './src/constants/DrawerItems';
import { navigationRef } from './src/constants/RootNavigation';
import SCREENS from './src/constants/Screens';
import ProfileScreen from './src/screens/ProfileScreen';
import ReferScreen from './src/screens/ReferScreen';
import SavedScreen from './src/screens/SavedScreen';
import SettingsScreen from './src/screens/SettingsScreen';
const Stack = createDrawerNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator
    //     drawerType="front"
    //     initialRouteName="Profile"
    //     screenOptions={{
    //       headerShown: true,
    //     }}
    //   // drawerContentOptions={{
    //   //   activeTintColor: '#e91e63',
    //   //   itemStyle: { marginVertical: 10 },
    //   // }}

    //   >
    //     {
    //       DrawerItems.map(drawer => <Drawer.Screen
    //         key={drawer.name}
    //         name={drawer.name}
    //         options={{
    //           drawerIcon: ({ focused }) =>
    //             drawer.iconType === 'Material' ?
    //               <MaterialCommunityIcons
    //                 name={drawer.iconName}
    //                 size={24}
    //                 color={focused ? "#e91e63" : "black"}
    //               />
    //               :
    //               drawer.iconType === 'Feather' ?
    //                 <Feather
    //                   name={drawer.iconName}
    //                   size={24}
    //                   color={focused ? "#e91e63" : "black"}
    //                 />
    //                 :
    //                 <FontAwesome5
    //                   name={drawer.iconName}
    //                   size={24}
    //                   color={focused ? "#e91e63" : "black"}
    //                 />
    //           ,
    //           headerShown: true,
    //           header: ({ scene }) => {
    //             const { options } = scene.descriptor;
    //             const title =
    //               options.headerTitle !== undefined
    //                 ? options.headerTitle
    //                 : options.title !== undefined
    //                   ? options.title
    //                   : scene.route.name;

    //             return (
    //               <Header screen={title} />
    //             );
    //           }

    //         }}
    //         component={
    //           drawer.name === 'Profile' ? ProfileScreen
    //             : drawer.name === 'Settings' ? SettingsScreen
    //               : drawer.name === 'Saved Items' ? SavedScreen
    //                 : ReferScreen
    //         }
    //       />)
    //     }
    //   </Drawer.Navigator>
    // </NavigationContainer>

    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={SCREENS.PROFIL}
      >

        <Stack.Screen name={SCREENS.PROFIL} component={ProfileScreen}
          options={{
            title: 'Blockchain',
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? '#7cc' : '#ccc'}
              />
            ),
          }} />
        <Stack.Screen name={SCREENS.HOME} component={SavedScreen}
          options={{
            drawerIcon: ({ focused }) =>
              DrawerItems[0].iconType === 'Material' ?
                <MaterialCommunityIcons
                  name={DrawerItems[0].iconName}
                  size={24}
                  color={focused ? "#e91e63" : "black"}
                  
                />
                :
                DrawerItems[0].iconType === 'Feather' ?
                  <Feather
                    name={DrawerItems[0].iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                  />
                  :
                  <FontAwesome5
                    name={DrawerItems[0].iconName}
                    size={24}
                    color={focused ? "#e91e63" : "black"}
                  />
          }}
        />
        <Stack.Screen name={SCREENS.LOGIN}
          options={{ headerShown: true }} component={SettingsScreen} />
        <Stack.Screen name={SCREENS.REF} component={ReferScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}