
import {
    Pressable,
    View,
    Animated,
    StyleSheet,
} from 'react-native';
import { useEffect, useState, PropsWithoutRef } from 'react';

type Props = PropsWithoutRef<{
    value: boolean;
    onValueChange: (arg0: boolean) => void;
}>;

export default function Switch(props: Props) {
    const { value, onValueChange } = props;
    const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

    useEffect(() => {
        // Update the animated value when the value prop changes
        Animated.timing(animatedValue, {
            toValue: value ? 1 : 0,
            duration: 200, // Adjust the animation duration
            useNativeDriver: false,
        }).start();
    }, [value]);

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [3, 18], // Adjust the distance of the switch head
    });

    const toggleSwitch = () => {
        const newValue = !value;
        onValueChange(newValue);
    };

    const currentStyles = value ? styles.innerContainerActive : styles.innerContainer;

    return (
        <Pressable onPress={toggleSwitch} style={styles.pressable}>
            <View style={styles.backgroundGradient}>
                <View style={currentStyles}>
                    <Animated.View
                        style={{
                            transform: [{ translateX }],
                        }}>
                        <View style={styles.headGradient}/>
                    </Animated.View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        width: 35,
        height: 18,
        borderRadius: 16,
    },
    backgroundGradient: {
        borderRadius: 16,
        flex: 1,
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        position: 'relative',
        backgroundColor :"#D0D5DD",
        borderRadius: 15
    },
    innerContainerActive: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        position: 'relative',
        backgroundColor :"#66AE7BB2",
        borderRadius: 15
    },
    headGradient: {
        width: 14,
        height: 14,
        borderRadius: 15,
        backgroundColor :"#ffffff"
    },
});