import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ExcercisesScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const ExcercisesStack = ()=> {
    return(
        <Stack.Navigator>
            <Stack.Screen name='ExcercisesScreen' component={ExcercisesScreen}/>
        </Stack.Navigator>
    )
}

export default ExcercisesStack