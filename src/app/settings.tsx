import { globalStyles } from '@/styles/global';
import { ScrollView, Text } from 'react-native';

export default function Settings() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Settings</Text>
    </ScrollView>
  );
}