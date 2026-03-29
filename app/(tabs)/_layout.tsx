import { COLORS } from '../../constants/theme';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopWidth: 1,
          borderTopColor: '#1A1A1A',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textDim,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
          letterSpacing: 1,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'HOME',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="market"
        options={{
          title: 'MARKET',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'storefront' : 'storefront-outline'} size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="coaching"
        options={{
          headerShown: true,
          headerTitle: 'AForce Coaching',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: COLORS.background },
          headerTitleStyle: { color: COLORS.text, fontWeight: 'bold' },
          headerShadowVisible: false,
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'bulb' : 'bulb-outline'} size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          headerShown: true,
          headerTitle: 'Insights',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: COLORS.background },
          headerTitleStyle: { color: COLORS.text, fontWeight: 'bold' },
          headerShadowVisible: false,
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'analytics' : 'analytics-outline'} size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'PROFILE',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
