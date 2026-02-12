import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    // flex: 1 ensures the SafeAreaView fills the entire screen
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainWrapper}>
        {/* Static Card */}
        <View style={styles.card}>
          <Text>Akash</Text>
        </View>

        {/* Horizontal Scroll Area */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          style={styles.scrollView}
        >
          {/* Using a small array to avoid repeating code manually */}
          {[...Array(10)].map((_, i) => (
            <View
              key={i}
              style={
                i % 3 === 0
                  ? styles.box1
                  : i % 3 === 1
                  ? styles.box2
                  : styles.box3
              }
            />
          ))}
        </ScrollView>
      </View>

      {/* Footer Area */}
      <View style={styles.footer}>
        <Text style={{ color: 'white' }}>helowwww</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row', // Aligns the card and the scrollview side-by-side
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#dadada',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1, // Allows the scrollview to take the remaining width
    marginLeft: 10,
  },
  scrollContent: {
    gap: 10,
    paddingRight: 20,
  },
  box1: { width: 100, height: 100, borderRadius: 50, backgroundColor: 'red' },
  box2: { width: 100, height: 100, borderRadius: 50, backgroundColor: 'green' },
  box3: { width: 100, height: 100, borderRadius: 50, backgroundColor: 'blue' },
  card: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  footer: {
    backgroundColor: 'black',
    padding: 20,
  },
});

export default App;
