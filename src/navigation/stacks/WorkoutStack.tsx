import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WorkoutScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const WorkoutStack = ()=> {
    return(
        <Stack.Navigator>
            <Stack.Screen name='WorkoutScreen' component={WorkoutScreen}/>
        </Stack.Navigator>
    )
}

export default WorkoutStack