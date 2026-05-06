import { globalStyles } from '@/styles/global';
import { ScrollView, Text } from 'react-native';

export default function Workout() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Workout</Text>
    </ScrollView>
  );
}