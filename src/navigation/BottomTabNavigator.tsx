import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './stacks/HomeStack';
import ExcercisesStack from './stacks/ExercisesStack';
import WorkoutStack from './stacks/WorkoutStack';
import HistoryStack from './stacks/HistoryStack';
import ProfileStack from './stacks/ProfileStack';
import { Platform, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function getTabBarIcon(routeName: string, color: string, size: number) {
  let iconName = 'home-outline';

  switch (routeName) {
    case 'Home':
      iconName = 'home-outline';
      break;
    case 'Excercises':
      iconName = 'barbell-outline';
      break;
    case 'Workout':
      iconName = 'flash-outline';
      break;
    case 'History':
      iconName = 'time-outline';
      break;
    case 'Profile':
      iconName = 'person-outline';
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Excercises" component={ExcercisesStack} />
      <Tab.Screen name="Workout" component={WorkoutStack} />
      <Tab.Screen name="History" component={HistoryStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom : 0,
    left : 10,
    right : 10,
    backgroundColor : 'white',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    height:70,
    shadowColor:'#000',
    shadowOffset:{width:0, height:3},
    shadowOpacity:0.2,
    shadowRadius:4,
    ...Platform.select({
        android:{
            elevation:10
        }
    })
  },
});
