import { ScrollView, StyleSheet } from 'react-native';
import WorkoutCard from './WorkoutCard';

export default function WorkoutList() {
  return (
    <ScrollView contentContainerStyle={styles.list}>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
      <WorkoutCard/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    //TODO: fix it so list bottom doesn't covered up by Tabs
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginTop: 10,
  },
});