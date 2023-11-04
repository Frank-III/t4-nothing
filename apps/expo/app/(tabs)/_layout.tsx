import { Tabs } from "expo-router";
import { Home, FormInput } from '@tamagui/lucide-icons'

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          tabBarIcon: ({ focused }) => <Home fill={ focused ? 'white' : 'none'}/>,
        }}/>
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          tabBarIcon: () => <FormInput />,
        }}/>
    </Tabs>
  );
}

