import { globalStyles } from '@/styles/global';
import { ScrollView, Text } from 'react-native';

export default function Workouts() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Workouts</Text>
    </ScrollView>
  );
}