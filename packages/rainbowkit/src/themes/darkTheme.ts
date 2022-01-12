import { baseTheme } from './baseTheme'
import { createTheme } from './createTheme'

export const darkTheme = createTheme({
  ...baseTheme,
  colors: {
    connectButtonBackground: 'linear-gradient(179.83deg, rgba(0, 0, 0, 0.9) 0.15%, #000000 99.85%)',
    connectButtonText: 'white',
    connectionIndicator: '#30E000',
    dropdownButtonBackground: 'linear-gradient(179.83deg, rgba(0, 0, 0, 0.9) 0.15%, #000000 99.85%)',
    dropdownButtonText: 'white',
    menuBackground: '#000',
    menuDivider: 'rgba(255, 255, 255, .04)',
    menuItemSelectedBackground: 'rgba(196, 196, 196, 0.1)',
    menuText: 'white',
    menuTextAction: '#4892FE',
    menuTextDisconnect: '#FF494A',
    menuTextSecondary: '#A3A4A5',
    error: '#FF494A',
    modalBackdrop: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
    modalBackground: '#000',
    modalClose: 'rgba(255, 255, 255, 0.08)',
    modalText: '#fff',
    modalTextSecondary: 'rgba(255, 255, 255, 0.6)'
  },
  shadows: {
    connectButton: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    dropdownButton: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    menu: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    networkButton: '0px 4px 12px rgba(0, 0, 0, 0.1)'
  }
})