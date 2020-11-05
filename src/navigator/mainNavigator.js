import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile168333Navigator from '../features/UserProfile168333/navigator';
import Settings168332Navigator from '../features/Settings168332/navigator';
import Settings168330Navigator from '../features/Settings168330/navigator';
import SignIn2168328Navigator from '../features/SignIn2168328/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile168333: { screen: UserProfile168333Navigator },
Settings168332: { screen: Settings168332Navigator },
Settings168330: { screen: Settings168330Navigator },
SignIn2168328: { screen: SignIn2168328Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
