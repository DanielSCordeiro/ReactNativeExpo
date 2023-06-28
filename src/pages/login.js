import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Contexto } from '../context'

import { Link } from '../functions/navegar'

export default function Login() {
  const {page} = Contexto()

  return (
      <View style={styles.container}>
        <Text>LOGIN</Text>
        <Text>{page}</Text>

        <Link page='Menu' texto='IR PARA MENU' />

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
