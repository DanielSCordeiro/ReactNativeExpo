import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function Menu() {
  const navigation = useNavigation()
  
  return (
      <View style={styles.container}>
        <Text>MENU</Text>
        <TouchableOpacity onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}]
          })
        }}>
          <Text>IR PARA LOGIN</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
