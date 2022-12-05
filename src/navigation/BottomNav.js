// navigation
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerMenu from '../components/DrawerMenu/DrawerMenu';
import TabBottonNavComp from '../screens/TabBottonNavComp';

// styles
import theme from '../theme/theme'

const Drawer = createDrawerNavigator();


const BottomNav = () => {
  return (

    <Drawer.Navigator 
      drawerContent = { props => <DrawerMenu { ...props } /> } 
      initialRouteName="Home"
      screenOptions={{ 
        headerShown: false,
        drawerActiveBackgroundColor: theme.colors.secondary,
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.secondary
      }}
    >
      <Drawer.Screen 
        name="DesafioScreen" 
        component={ TabBottonNavComp }
      />
    
    </Drawer.Navigator>

  )
}

export default BottomNav