import { useState } from 'react'
import { launchCamera } from 'react-native-image-picker'
import {requestMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions';

// fn
import onDisplayNotification from '../helpers/onDisplayNotification';

const useCamera = () => {

  const [ photo, setPhoto ] = useState()

  const requestCameraPermissionAndOpen = async () => {

    try {

      requestMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE])
        .then(async (statuses) => {

          if (statuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.GRANTED && statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === RESULTS.GRANTED) {
              const result = await launchCamera({
                saveToPhotos: true,
                mediaType: "photo",
                quality: 1
              })
        
              // valido valor de result para manejo de error en caso de cxl por el user
              if(result.didCancel !== true){
                setPhoto(result.assets[0].uri)
              } else { 
                console.log("Acción cancelada por el usuario")
              }
          } else {
            // caso de no tener permisos envia notificacion en barra de estado
            onDisplayNotification()
          }
      })

    } catch (err) {
      console.log(err);
    }
  };

  return {
    photo,
    requestCameraPermissionAndOpen
  }
}

export default useCamera