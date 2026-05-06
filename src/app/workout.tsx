import WorkoutList from '@/components/WorkoutList';
import { globalStyles } from '@/styles/global';
import { Text, View } from 'react-native';

export default function Workout() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Workout</Text>
      <WorkoutList/>
    </View>
  );
}