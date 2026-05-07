import { StyleSheet, Text, View } from 'react-native';

export default function WorkoutCard() {
  return (
    <View>
      <Text style={styles.workout}>Chest</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  workout: {
    backgroundColor: '#16213e',
    width: '100%',
    borderRadius: 12,
    borderLeftWidth: 4,
    padding: 16,
    color: '#ffffff',
    fontSize: 24,
  },
});