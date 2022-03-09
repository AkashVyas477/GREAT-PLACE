import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Colors from '../constants/Colors'
import PlacesListScreen from '../screen/PlacesListScreen';
import PlaceDetailScreen from '../screen/PlaceDetailScreen';
import NewPlaceScreen from '../screen/NewPlaceScreen';
import MapScreen from '../screen/MapScreen';

const PlacesNavigator = createStackNavigator ({
    Place: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map : MapScreen
}, {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.secondary :''
        },
        headerTintColor:Platform.OS ==='android'?'white': Colors.secondary
    }
}
);

export default createAppContainer(PlacesNavigator);
