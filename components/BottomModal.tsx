import { Modal, View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { PropsWithChildren } from 'react';
import Animated, { FadeIn, FadeOut, } from 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
    typeAnimation?: string | 'slide';
    isVisible: boolean;
    headerDisable?: boolean;
    isTitle?: boolean;
    modalTitle?: string;
    modalHeight: number;
    isBackgrop?: boolean | true;
    disableCloseBtn?: boolean | true;
    onClose: () => void;
}>;

export default function BottomModal(props: Props) {
    const {
        isVisible,
        headerDisable,
        children,
        modalTitle,
        isTitle,
        modalHeight,
        isBackgrop,
        disableCloseBtn,
        typeAnimation,
        onClose
    } = props;

    const aniType = typeAnimation && typeAnimation !== undefined ? typeAnimation : 'slide';

    return (
        <Modal animationType={aniType} transparent={true} visible={isVisible}>
            <View style={[styles.modalContent, { height: modalHeight }]}>
                {headerDisable ?? (
                    <View style={[styles.titleContainer, { justifyContent: isTitle ? "center" : 'flex-end' }]}>
                        {disableCloseBtn ? <Pressable style={{ position: "absolute", left: 20, top: 5}} onPress={onClose}>
                            <MaterialIcons name="chevron-left" color="#66AE7B" size={25} />
                        </Pressable> : <></>}
                        <Text>{modalTitle}</Text>
                        {disableCloseBtn ?? <Pressable style={{ position: "absolute", right: 20, top: 5 }} onPress={onClose}>
                            <MaterialIcons name="close" color="#66AE7B" size={25} />
                        </Pressable>}
                        <View style={styles.separator}></View>
                    </View>
                )}
                <ScrollView
                    contentContainerStyle={{
                        alignItems: "center",
                        backgroundColor: "#fff",
                    }}
                    style={{ width: "100%" }}>
                    {children}
                </ScrollView>
            </View>
            {isBackgrop ?? (
                <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.backgroundBackground}>
                    <Pressable style={styles.background} onPress={onClose}></Pressable>
                </Animated.View>)}
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
        maxHeight: '90%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        paddingTop: 15
    },
    titleContainer: {
        height: 45,
        position: "relative",
        width: "100%",
        backgroundColor: '#fff',
        paddingBottom: 15,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    separator: {
        width: "100%",
        position: "absolute",
        height: 1,
        backgroundColor: "#dadada",
        bottom: 0,
        left: 20
    },
    backgroundBackground: {
        backgroundColor: "rgba(0,0,0,0.3)",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    background: {
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    }
});