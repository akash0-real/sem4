import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ProjectCard from '../components/projectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Expense Tracker',
    description: 'Track daily expenses with analytics and charts.',
    tech: ['React Native', 'Firebase'],
    github: 'https://github.com/yourusername/expense-app',
  },
  {
    id: '2',
    title: 'Campus Connect',
    description: 'College event and notice management app.',
    tech: ['React Native', 'Node.js'],
  },
];

const ProjectsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProjectCard
            title={item.title}
            description={item.description}
            tech={item.tech}
            github={item.github}
          />
        )}
      />
    </View>
  );
};

export default ProjectsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
