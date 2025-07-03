import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const ProfileStack = ()=> {
    return(
        <Stack.Navigator>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
        </Stack.Navigator>
    )
}

export default ProfileStack