
import { HomeScreen } from 'app/features/home/screen'
import { SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
import { H1 } from '@t4/ui'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
        }}
      />
      <SafeAreaView>
        <H1 >Hello</H1>
      </SafeAreaView>
    </>
  )
}