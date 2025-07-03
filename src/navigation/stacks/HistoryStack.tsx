import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HistoryScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const HistoryStack = ()=> {
    return(
        <Stack.Navigator>
            <Stack.Screen name='HistoryScreen' component={HistoryScreen}/>
        </Stack.Navigator>
    )
}

export default HistoryStack