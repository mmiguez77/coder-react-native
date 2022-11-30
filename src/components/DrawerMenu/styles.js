import { StyleSheet } from 'react-native';

import theme from '../../theme/theme'

const styles = StyleSheet.create({
  
  /**** DRAWER_MENU ****/
  drawermenu__container: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  drawermenu__top_container: {
    backgroundColor: theme.colors.tertiary, 
    height: "20%"
  },
  drawermenu__content_scroll: {
    flex: 1
  },
  drawermenu__bottom_container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: theme.colors.secondary,
    height: "10%",
    padding: 15,
  },
  drawermenu__bottom_text: {
    marginLeft: 10
  }

  
});

export default styles;
