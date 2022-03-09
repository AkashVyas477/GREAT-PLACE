import React from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { Platform } from 'react-native';

const CustomHeaderButton = props => {
    return(
         <HeaderButton 
         {...props}  
         IconComponent= {Ionicons}
         iconSize={23}
         color={Platform.OS === 'andriod'? 'white': Colors.secondary}
    
    />
        )
};

export default CustomHeaderButton;