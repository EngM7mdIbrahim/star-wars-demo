import {ColorScheme} from '@mantine/core'
export default function getBackgroundColorRGB(themeColor: ColorScheme):string{
  return  themeColor === 'dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)';
}