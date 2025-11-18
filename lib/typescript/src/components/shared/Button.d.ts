import React from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    loading?: boolean;
    gradient?: boolean;
    variant?: 'primary' | 'secondary' | 'outline';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map