import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

interface ProjectCardProps {
  title: String;
  description: String;
  tech: String[];
  github?: string; // optional
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  github,
}) => {
  const openGithub = () => {
    if (github) {
      Linking.openURL(github);
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={styles.tech}>Tech: {tech.join(', ')}</Text>

      {github && (
        <TouchableOpacity style={styles.button} onPress={openGithub}>
          <Text style={styles.buttonText}>View on GitHub</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    color: '#555',
  },
  tech: {
    fontSize: 13,
    color: '#777',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});
