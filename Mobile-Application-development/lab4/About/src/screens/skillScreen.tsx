import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SkillCard from '../components/skillCard.tsx';

interface Skill {
  id: string;
  name: string;
  level: string;
}

const skills: Skill[] = [
  { id: '1', name: 'React Native', level: 'Advanced' },
  { id: '2', name: 'TypeScript', level: 'Intermediate' },
  { id: '3', name: 'Java', level: 'Intermediate' },
  { id: '4', name: 'Docker', level: 'Intermediate' },
  { id: '5', name: 'Git & GitHub', level: 'Advanced' },
];

const SkillsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        numColumns={2} // grid layout
        renderItem={({ item }) => (
          <SkillCard skillName={item.name} level={item.level} />
        )}
      />
    </View>
  );
};

export default SkillsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
