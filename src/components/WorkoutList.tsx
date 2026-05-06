import { ScrollView, StyleSheet, Text } from 'react-native';

export default function WorkoutList() {
  return (
    <ScrollView style={styles.list}>
      <Text style={styles.workout}>Chest</Text>
      <Text style={styles.workout}>Leg</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
  },
  workout: {
    backgroundColor: '#16213e',
    width: '100%',
    borderRadius: 12,
    borderLeftWidth: 4,
    padding: 16,
    color: '#ffffff',
    fontSize: 18,

    marginBottom: 10,
  },
});