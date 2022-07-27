/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { ColorSchemeName } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { accentColor } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getAuthState } from '../redux/slices/authSlice';
import LoginScreen from '../screens/LoginScreen';
import MineScreen from '../screens/MineScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import PrizeScreen from '../screens/PrizeScreen';
import SplashScreen from '../screens/SplashScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const authState = useAppSelector(state => state.authState)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAuthState())
  }, [])

  return (
    <Stack.Navigator>
      {authState.loading ?
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> :
        authState.isAuth
          ? <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
          : <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      }
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Prize"
      screenOptions={{
        tabBarActiveTintColor: accentColor,
        headerShown: false
      }}>
      <BottomTab.Screen
        name="Prize"
        component={PrizeScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="gift-outline" size={28} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Mine"
        component={MineScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-circle-outline" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
