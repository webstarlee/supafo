import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Image, Text, View, StyleSheet, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomModal from '@/components/BottomModal';
import Switch from "@/components/Switch";
import CheckBox from "@/components/CheckBox";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Start() {

  const insets = useSafeAreaInsets();
  const navigation = useRouter();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  const [isStatisticalVisible, setIsStatisticalVisible] = useState<boolean>(false);
  const toggleStatisticalModal = () => setIsStatisticalVisible(previousState => !previousState);

  const [isMarketingVisible, setIsMarketingVisible] = useState<boolean>(false);
  const toggleMarketingModal = () => setIsMarketingVisible(previousState => !previousState);

  const [isPrivacy, setIsPrivacy] = useState<boolean>(true);
  const togglePrivacy = () => setIsPrivacy(previousState => !previousState);

  const [isTerms, setIsTerms] = useState<boolean>(true);
  const toggleTerms = () => setIsTerms(previousState => !previousState);

  const [mandatoryCookiesEnabled, setMandatoryCookiesEnabled] = useState<boolean>(false);
  const toggleMandatoryCookies = () => setMandatoryCookiesEnabled(previousState => !previousState);

  const [optionalCookiesEnabled, setOptionalCookiesEnabled] = useState<boolean>(false);
  const toggleOptionalCookies = () => setOptionalCookiesEnabled(previousState => !previousState);

  const [openTermsModal, setOpenTermsModal] = useState<boolean>(false);
  const toggleTermsModal = () => setOpenTermsModal(previousState => !previousState);

  const [openPrivacyModal, setOpenPrivacyModal] = useState<boolean>(false);
  const togglePrivacyModal = () => setOpenPrivacyModal(previousState => !previousState);

  const [agreeModal, setAgreeModal] = useState<boolean>(false);
  const toggleAgreeModal = () => setAgreeModal(previousState => !previousState);

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const gotoLogin = () => {
    if (!isTerms) {
      setAgreeModal(true);
      return;
    }

    navigation.push('/login');
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
            <View style={styles.imgContainer}>
              <Image style={styles.logoImg} source={require('../assets/images/logo.png')} />
            </View>
            <View style={{ width: '100%', paddingVertical: 20}}>
              <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.fullBtn} onPress={gotoLogin}>
                  <Text style={styles.btnText}>Giriş Yap</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity style={[styles.fullBtn, styles.outlineBtn]}>
                  <Text style={[styles.btnText, styles.txtBlack]}>Kayıt Ol</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.checkboxContainer, { marginTop: 20 }]}>
                <View style={styles.checkboxBtnContainer}>
                  <CheckBox value={isPrivacy} onValueChange={togglePrivacy} />
                </View>
                <Text>Supafo’nun e-posta adresimi ve adımı gizlilik politikasına uygun şekilde saklamasına izin
                  veriyorum.</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <View style={styles.checkboxBtnContainer}>
                  <CheckBox value={isTerms} onValueChange={toggleTerms} />
                </View>
                <Text>
                  <Pressable onPress={toggleTermsModal}><Text style={styles.termsBtn}>Şartlar & Koşullar</Text></Pressable>
                  <Pressable><Text> ve </Text></Pressable>
                  <Pressable onPress={togglePrivacyModal}><Text style={styles.termsBtn}>Gizlilik Politikasını</Text></Pressable>
                  <Pressable><Text> kabul</Text></Pressable>
                  <Pressable><Text> ediyorum.</Text></Pressable>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <BottomModal isVisible={isModalVisible} modalHeight={650} onClose={onModalClose}>
          <View style={styles.cookiesContainer}>
            <Text style={styles.bigTitle}>Zorunlu Çerezler</Text>
            <Switch value={mandatoryCookiesEnabled} onValueChange={toggleMandatoryCookies} />
          </View>
          <View style={styles.desContainer}>
            <Text style={styles.title}>Teknik olarak gerekli ve istatistiksel veriler</Text>
            <Text style={styles.descriptionText}>Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.</Text>
            <Pressable style={styles.readmoreBtn} onPress={toggleStatisticalModal}>
              <Text style={styles.readmoreText}>Devamını Oku</Text>
              <MaterialIcons style={{ marginLeft: -3, marginTop: 3 }} name="chevron-right" size={22} color="#66AE7BB2" />
            </Pressable>
          </View>
          <View style={styles.cookiesContainer}>
            <Text style={styles.bigTitle}>İsteğe Bağlı Çerezler</Text>
            <Switch value={optionalCookiesEnabled} onValueChange={toggleOptionalCookies} />
          </View>
          <View style={styles.desContainer}>
            <Text style={styles.title}>Pazarlama</Text>
            <Text style={styles.descriptionText}>Kişisel verilerinizi, size ilgi alanlarınıza uygun kişiselleştirilmiş reklamlar ve içerik gösterebilmek amacıyla pazarlama amacıyla kullanırız. Bu verileri aynı zamanda gıda israfını en aza indirme vizyonumuza katılmak isteyebilecek benzer ilgi alanlarına sahip potansiyel kullanıcıları belirlemek için de kullanırız. Bu bilgileri profil oluşturma ve reklam amacıyla da kullanabilecek üçüncü taraf reklam ortaklarımızla paylaşıyoruz. Pazarlama çerezlerini kabul ederek kişisel verilerinizin profil oluşturma ve pazarlama amacıyla kullanılmasına izin vermiş olursunuz...</Text>
            <Pressable style={styles.readmoreBtn} onPress={toggleMarketingModal}>
              <Text style={styles.readmoreText}>Devamını Oku</Text>
              <MaterialIcons style={{ marginLeft: -3, marginTop: 3 }} name="chevron-right" size={22} color="#66AE7BB2" />
            </Pressable>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.fullBtn}>
              <Text style={styles.btnText}>Hepsine İzin Ver</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.fullBtn}>
              <Text style={styles.btnText}>Seçime İzin ver</Text>
            </TouchableOpacity>
          </View>

        </BottomModal>

        <BottomModal
          isVisible={isStatisticalVisible}
          isTitle={true}
          modalTitle="Teknik olarak gerekli ve istatistik verileri"
          modalHeight={650}
          onClose={toggleStatisticalModal}
          isBackgrop={false}
          disableCloseBtn={true}
          typeAnimation='fade'
        >
          <View style={styles.desContainer}>
            <Text style={styles.descriptionText}>Kişisel verilerinizi, size ilgi alanlarınıza uygun kişiselleştirilmiş reklamlar ve içerik gösterebilmek amacıyla pazarlama amacıyla kullanırız. Bu verileri aynı zamanda gıda israfını en aza indirme vizyonumuza katılmak isteyebilecek benzer ilgi alanlarına sahip potansiyel kullanıcıları belirlemek için de kullanırız. Bu bilgileri profil oluşturma ve reklam amacıyla da kullanabilecek üçüncü taraf reklam ortaklarımızla paylaşıyoruz. Pazarlama çerezlerini kabul ederek kişisel verilerinizin profil oluşturma ve pazarlama amacıyla kullanılmasına izin vermiş olursunuz...</Text>
          </View>
        </BottomModal>

        <BottomModal
          isVisible={isMarketingVisible}
          isTitle={true}
          modalTitle="Pazarlama"
          modalHeight={650}
          onClose={toggleMarketingModal}
          isBackgrop={false}
          disableCloseBtn={true}
          typeAnimation='fade'
        >
          <View style={styles.desContainer}>
            <Text style={styles.descriptionText}>Kişisel verilerinizi, size ilgi alanlarınıza uygun kişiselleştirilmiş reklamlar ve içerik gösterebilmek amacıyla pazarlama amacıyla kullanırız. Bu verileri aynı zamanda gıda israfını en aza indirme vizyonumuza katılmak isteyebilecek benzer ilgi alanlarına sahip potansiyel kullanıcıları belirlemek için de kullanırız. Bu bilgileri profil oluşturma ve reklam amacıyla da kullanabilecek üçüncü taraf reklam ortaklarımızla paylaşıyoruz. Pazarlama çerezlerini kabul ederek kişisel verilerinizin profil oluşturma ve pazarlama amacıyla kullanılmasına izin vermiş olursunuz. Onayınızı her zaman uygulamanın ayarlarından geri çekebilirsiniz.</Text>
          </View>
        </BottomModal>

        <BottomModal
          isVisible={openTermsModal}
          isTitle={true}
          modalTitle="Şartlar & Koşullar"
          modalHeight={650}
          onClose={toggleTermsModal}
          disableCloseBtn={true}
          typeAnimation='fade'
        >
          <View style={styles.desContainer}>
            <Text style={styles.descriptionText}>Şartlar ve koşullara ve Gizlilik Politikasına ait metin girilecek. Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.</Text>
          </View>
        </BottomModal>

        <BottomModal
          isVisible={openPrivacyModal}
          isTitle={true}
          modalTitle="Gizlilik Politikası"
          modalHeight={650}
          onClose={togglePrivacyModal}
          disableCloseBtn={true}
          typeAnimation='fade'
        >
          <View style={styles.desContainer}>
            <Text style={styles.descriptionText}>Şartlar ve koşullara ve Gizlilik Politikasına ait metin girilecek. Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.</Text>
          </View>
        </BottomModal>

        <BottomModal
          isVisible={openPrivacyModal}
          isTitle={true}
          modalTitle="Gizlilik Politikası"
          modalHeight={650}
          onClose={togglePrivacyModal}
          disableCloseBtn={true}
          typeAnimation='fade'
        >
          <View style={styles.desContainer}>
            <Text style={styles.descriptionText}>Şartlar ve koşullara ve Gizlilik Politikasına ait metin girilecek. Uygulamamızın düzgün çalışması için teknik olarak gerekli verileri topluyoruz. Bu veriler, uygulamaya göz atabilmeniz ve özelliklerini kullanabilmeniz için gereklidir. Ayrıca uygulama trafiğini, kullanıcı davranışını ve kullanım kalıplarını toplu düzeyde analiz etmemize ve anlamamıza olanak tanıyan istatistiksel verileri de topluyoruz. Uygulamadan elde edilen istatistiksel veriler toplanır ve uygulamamızın performansını ve kullanıcı deneyimini geliştirmek için kullanılır.</Text>
          </View>
        </BottomModal>

        <BottomModal
          isVisible={agreeModal}
          isTitle={true}
          modalTitle="Gizlilik Politikası"
          modalHeight={300}
          onClose={toggleAgreeModal}
          disableCloseBtn={true}
          typeAnimation='fade'
          headerDisable={true}
        >
          <View style={[styles.imgContainer, { paddingTop: 10, paddingBottom: 10 }]}>
            <Image style={{ width: 60, height: 90 }} source={require('../assets/images/logo.png')} />
          </View>
          <View style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontFamily: "Inter_600SemiBold", fontSize: 14 }}>Şartlar ve Gizlilik Onayı</Text>
          </View>
          <View style={{ width: "80%", display: "flex", justifyContent: "center", alignItems: "center", paddingVertical: 10 }}>
            <Text style={{ fontFamily: "Inter_400Regular", fontSize: 12, textAlign: "center" }}>Devam etmeden önce, Şartlar ve Koşullar ile Gizlilik Politikası’nı kabul ettiğinizden emin olun. Bu, size en iyi deneyimi sunmamız için gereklidir.</Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.fullBtn} onPress={toggleAgreeModal}>
              <Text style={styles.btnText}>Anladım</Text>
            </TouchableOpacity>
          </View>
        </BottomModal>
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
  image: {
    width: 50,
    height: 50,
  },
  cookiesContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  desContainer: {
    paddingHorizontal: 20,
    width: "100%",
    display: "flex",
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  bigTitle: {
    fontFamily: "Inter_900Black",
    fontSize: 14,
    color: "#000000",
    fontWeight: "bold"
  },
  title: {
    fontFamily: "Inter_900Black",
    fontSize: 12,
    color: "#000000",
    fontWeight: "bold"
  },
  descriptionText: {
    marginVertical: 10,
    fontFamily: "Inter_600SemiBold",
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
  },
  readmoreBtn: {
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
  },
  readmoreText: {
    color: "#66AE7B",
    fontFamily: 'Inter_900Black',
    fontWeight: 'bold',
    fontSize: 12
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
    justifyContent: "center"
  },
  imgContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
    backgroundColor: "#fff",
    flex: 1
  },
  logoImg: {
    width: 190,
    height: 251
  },
  outlineBtn: {
    backgroundColor: 'transparent',
  },
  txtBlack: {
    color: "#000"
  },
  checkboxBtnContainer: {
    width: 24,
    height: 24,
    position: "absolute",
    top: 5,
    left: 20
  },
  checkboxContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 55
  },
  termsBtn: {
    color: "#66AE7B",
    textDecorationColor: "#66AE7B",
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline'
  }
});
