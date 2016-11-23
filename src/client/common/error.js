import { Platform } from 'react-native';

export default function (message) {
  console.log(Platform.OS, message);
  alert(message);
}
