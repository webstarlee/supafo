
import {
    Pressable,
    View,
    Animated,
    StyleSheet,
    Image
} from 'react-native';
import { useEffect, useState, PropsWithoutRef } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithoutRef<{
    value: boolean;
    onValueChange: (arg0: boolean) => void;
}>;

export default function CheckBox(props: Props) {
    const { value, onValueChange } = props;

    const toggleSwitch = () => {
        const newValue = !value;
        onValueChange(newValue);
    };

    return (
        <Pressable onPress={toggleSwitch} style={styles.pressable}>
            <View style={[styles.checkBoxContainer, {backgroundColor: value? "#66AE7B": "#fff"}]}>
                <MaterialIcons name="check" size={20} color="white" />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        width: 24,
        height: 24,
        borderRadius: 3
    },
    checkBoxContainer: {
        width: '100%',
        height: "100%",
        borderRadius: 3,
        flex: 1,
        borderWidth: 1,
        borderColor: "#66AE7B",
        display: "flex"
    },
    checkedBackground: {
        backgroundColor: "#66AE7B"
    },
    checkImg: {
        width: 12
    }
});