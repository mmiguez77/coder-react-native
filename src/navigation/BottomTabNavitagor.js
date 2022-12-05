import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DrawerNavigator from './DrawerNavigator';
import BottomNav from './BottomNav';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Drawer" component={DrawerNavigator} />
        <Tab.Screen name="Desafio" component={BottomNav} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

export default BottomTabNavigator