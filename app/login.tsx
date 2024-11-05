import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Image, Text, View, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InputText from '@/components/TextInput';
import Feather from '@expo/vector-icons/Feather';

export default function Login() {

    const insets = useSafeAreaInsets();
    const navigation = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const gotoRegister = () => {
        navigation.push('/register');
    }

    return (
        <>
            <View style={{ paddingTop: insets.top, backgroundColor: 'transparent' }} />
            <View style={styles.container}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                        headerStyle: { backgroundColor: '#ffffff' }
                    }}
                />
                <ScrollView
                    contentContainerStyle={{
                        alignItems: "center",
                        backgroundColor: "#fff",
                        minHeight: "100%"
                    }}
                    style={{ width: "100%" }}>
                    <View style={styles.startContainer}>
                        <View style={{ width: '100%', display: "flex", justifyContent: "center", alignItems: 'center', paddingVertical: 20 }}>
                            <Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 16 }}>Giriş Yap</Text>
                        </View>
                        <View style={styles.imgContainer}>
                            <Image style={styles.logoImg} source={require('../assets/images/logo.png')} />
                        </View>

                        <View style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 20 }}>
                            <InputText value={email} title='Email' iconDisable={false} onValueChange={setEmail} />
                        </View>

                        <View style={{ width: "100%", paddingHorizontal: 20 }}>
                            <InputText value={password} isPassword={true} title='Şifre' iconDisable={false} icon={<Feather style={{ marginRight: 15 }} name="lock" size={20} color="rgba(0,0,0,0.5)" />} onValueChange={setPassword} />
                        </View>
                        <View style={{ width: "100%", paddingHorizontal: 20, paddingTop: 5 }}>
                            <TouchableOpacity>
                                <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 12, color: '#66AE7B', textAlign: 'right' }}>Şifreni mi unuttun?</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%', paddingTop: 20, paddingBottom: 5 }}>
                            <View style={styles.btnContainer}>
                                <TouchableOpacity style={styles.fullBtn}>
                                    <Text style={styles.btnText}>Giriş Yap</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ width: '100%', height: 50, paddingHorizontal: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <View style={{ width: '30%', backgroundColor: "#979797", height: 1 }}>
                            </View>
                            <View style={{ backgroundColor: '#fff', paddingHorizontal: 10 }}>
                                <Text>VEYA</Text>
                            </View>
                            <View style={{ width: '30%', backgroundColor: "#979797", height: 1 }}>
                            </View>
                        </View>

                        <View style={{ width: '100%', paddingHorizontal: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ width: 44, height: 44, borderColor: '#D0D5DD', borderWidth: 1, borderRadius: 8, backgroundColor: "#fff", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 24, height: 24, resizeMode: "contain", }} source={require('../assets/images/google.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 44, height: 44, marginHorizontal: 20, borderColor: '#D0D5DD', borderWidth: 1, borderRadius: 8, backgroundColor: "#fff", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 24, height: 24, resizeMode: "contain", }} source={require('../assets/images/apple.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 44, height: 44, borderColor: '#D0D5DD', borderWidth: 1, borderRadius: 8, backgroundColor: "#fff", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: 24, height: 24, resizeMode: "contain", }} source={require('../assets/images/facebook.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '100%', paddingHorizontal: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', paddingTop: 15 }}>
                            <Pressable><Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 14, color: '#000' }}>Hesabınız yok mu?</Text></Pressable>
                            <Pressable onPress={gotoRegister}><Text style={{ fontFamily: 'Inter_600SemiBold', fontSize: 14, color: '#66AE7B', textDecorationColor: '#66AE7B', textDecorationLine: 'underline', textDecorationStyle: 'solid' }}> Kayıt Ol</Text></Pressable>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
        width: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fullBtn: {
        width: "100%",
        paddingVertical: 10,
        backgroundColor: "#66AE7B",
        display: "flex",
        alignItems: "center",
        borderRadius: 14,
        borderColor: "#66AE7B",
        borderWidth: 1
    },
    btnText: {
        fontFamily: 'Inter_900Black',
        fontWeight: "bold",
        fontSize: 14,
        color: '#ffffff'
    },
    startContainer: {
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: 'flex-start'
    },
    imgContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    logoImg: {
        width: 70,
        height: 100
    },
});
