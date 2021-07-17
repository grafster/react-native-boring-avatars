declare module 'react-native-boring-avatars' {
  export interface AvatarProps {
    size?: number | string;
    name?: string;
    square?: boolean;
    variant?: 'beam'; // | 'marble' | 'pixel' | 'sunset' | 'ring' | 'bauhaus';
    colors?: string[];
  }

  interface AvatarComponent {
    (props: AvatarProps, context?: any): React.ReactElement | null;
  }

  const Avatar: AvatarComponent;

  export default Avatar;
}