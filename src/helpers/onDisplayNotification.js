import notifee from '@notifee/react-native';

async function onDisplayNotification() {
  
    const channelId = await notifee.createChannel({
      id: '1',
      name: 'Camera Channel',
    });

    await notifee.displayNotification({
      title: '<p style="color: #4caf50;"><b>Permisos requeridos</span></p></b></p>',
      body: 'Por favor configurar permisos necesarios de aplicación para continuar',
      android: {
        channelId,
        pressAction: {
          id: '1',
        },
      },
    })
}

export default onDisplayNotification