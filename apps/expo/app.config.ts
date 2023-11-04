import { ConfigContext, ExpoConfig } from '@expo/config'
import dotenv from 'dotenv'

dotenv.config()

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  extra: {
    eas: {
      projectId: process.env.EAS_PROJECT_ID || '85fc6ccd-0ce1-4e4d-804c-b15df989f97e',
    },
  },
  owner: process.env.EAS_OWNER || 'timothymiller',
  plugins: ['expo-router'],
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true,
  },
  platforms: ['ios', 'android'],
  name: 'T4 App',
  slug: 'try-t4',
  updates: {
    url: 'https://u.expo.dev/d2f95738-9431-407a-bb14-db9e00065d8f',
  },
  runtimeVersion: {
    policy: 'sdkVersion',
  },
})
