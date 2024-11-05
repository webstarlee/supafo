import { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { PropsWithoutRef } from 'react';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';

type Props = PropsWithoutRef<{
    value: string;
    title: string;
    textCenter?: boolean;
    placeHolder?: string;
    iconDisable?: boolean;
    icon?: React.ReactElement;
    isPassword?: boolean;
    onValueChange: (arg0: string) => void;
}>;

export default function InputText(props: Props) {
    const { value, iconDisable, icon, title, isPassword, placeHolder, textCenter, onValueChange } = props;
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const toggleShowPassword = () => setShowPassword(previousState => !previousState);

    return (
        <View style={styles.inputContainer}>
            <Text style={{fontFamily: 'Inter_400Regular', fontSize: 14}}>{title}</Text>
            <View style={styles.fieldContainer}>
                {iconDisable? <></>: icon? icon: <Fontisto style={{marginRight: 15}} name="email" size={20} color="rgba(0,0,0,0.5)" />}
                
                <TextInput
                    placeholderTextColor="rgb(65,65,65)"
                    style={styles.input}
                    value={value}
                    secureTextEntry={isPassword && !showPassword? true: false}
                    onChangeText={text => onValueChange(text)}
                    placeholder={placeHolder? placeHolder: title}
                    textAlign={textCenter? 'center': 'left'}
                />
                {isPassword && <TouchableOpacity onPress={toggleShowPassword}>{showPassword? <Feather name="eye" size={18} color="rgba(0,0,0,0.5)" />: <Feather name="eye-off" size={18} color="rgba(0,0,0,0.5)" />}</TouchableOpacity>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex'
    },
    fieldContainer: {
        width: '100%',
        height: 40,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#D0D5DD",
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: "center"
    },
    checkedBackground: {
        backgroundColor: "#66AE7B"
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 14, 
    }
});