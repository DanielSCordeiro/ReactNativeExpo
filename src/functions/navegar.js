import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, Text } from 'react-native'

export function Link({page, texto}) {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => {
      navigation.reset({
        index: 0,
        routes: [{name: page}]
      })
    }}>
      <Text>{texto}</Text>
    </TouchableOpacity>
  )
}