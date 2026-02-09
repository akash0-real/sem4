import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SkillCardProps {
  skillName: string;
  level?: string; // optional (Beginner / Intermediate / Advanced)
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, level }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.skill}>{skillName}</Text>
      {level && <Text style={styles.level}>{level}</Text>}
    </View>
  );
};

export default SkillCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 6,
    alignItems: 'center',
  },
  skill: {
    fontSize: 16,
    fontWeight: '600',
  },
  level: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
});
