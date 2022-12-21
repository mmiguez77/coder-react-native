import { Button, Text, View, Image } from "react-native";

// custom hooks, styles
import useCamera from "../../hooks/useCamera";
import styles from "./styles";

const CameraScreen = () => {

   const { photo, requestCameraPermissionAndOpen } = useCamera()
  
   return (    
      <View style={styles.container}>
         <Text style={styles.item}>Solicitar permiso y lanzar cámara</Text>
         <Button title="Avanzar" onPress={ requestCameraPermissionAndOpen } />
         <Image source={{ uri: photo }} style={{ width: 200, height: 200 }}/>
      </View>
   )
}

export default CameraScreen
