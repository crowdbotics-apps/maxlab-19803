import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList94571Navigator from '../features/ArticleList94571/navigator';
import ArticleList94570Navigator from '../features/ArticleList94570/navigator';
import ArticleList94569Navigator from '../features/ArticleList94569/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList94571: { screen: ArticleList94571Navigator },
ArticleList94570: { screen: ArticleList94570Navigator },
ArticleList94569: { screen: ArticleList94569Navigator },

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
