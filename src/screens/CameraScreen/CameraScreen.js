import { useState } from 'react'
import { Button, PermissionsAndroid, Text, View, StyleSheet, StatusBar, Image } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'



const CameraScreen = () => {

   const [ photo, setPhoto ] = useState()
   const [ photoGallery, setPhotoGallery ] = useState()

   const requestCameraPermissionAndOpen = async () => {
   
      try {
         const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
            title: "Permiso de Cámara",
            message:
               "La aplicación precisa permiso para usar cámara.",
            buttonNeutral: "Preguntar luego",
            buttonNegative: "Cancelar",
            buttonPositive: "OK"
            }
         );

         const write = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
            title: "Permiso de Escritura",
            message:
               "La aplicación precisa permiso de escritura.",
            buttonNeutral: "Preguntar luego",
            buttonNegative: "Cancelar",
            buttonPositive: "OK"
            }
         );

         if (granted === PermissionsAndroid.RESULTS.GRANTED && write === PermissionsAndroid.RESULTS.GRANTED) {
            const result = await launchCamera({
            saveToPhotos: true,
            mediaType: "photo",
            quality: 1
            })
            
            setPhoto(result.assets[0].uri)
      
         } else {
            console.log("Camera permission denied");
         }
      } catch (err) {
         console.log(err);
      }
   };
   
   const openLibrary = async () => {
      const result = await launchImageLibrary({
         saveToPhotos: true,
         mediaType: "photo"
         })
      
      setPhotoGallery(result.assets[0].uri)
   }

   return (    
      <View style={styles.container}>
         <Text style={styles.item}>Solicitar permiso y lanzar cámara</Text>
         <Button title="Avanzar" onPress={requestCameraPermissionAndOpen} />
         <Image source={{ uri: photo }} style={{ width: 200, height: 200 }}/>

         <Text style={styles.item}>Galeria</Text>

         <Button title="Galeria" onPress={openLibrary} />
         <Image source={{ uri: photoGallery }} style={{ width: 200, height: 200 }}/>


      </View>
   )
}

export default CameraScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#ecf0f1",
      padding: 8
   },
   item: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
   }
});