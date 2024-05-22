import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { MyButton } from "../../components"
import { ICGoogle ,ICFacebook } from "../../../assets"
import React from "react" 

const windowWidth = Dimensions.get("window").width;

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [pass, onChangePassword] = React.useState("");

  const onSubmitLogin = () => {
    // if (email == "gebby" && pass == 123) {
    //   alert("Sudah Benar");
    //   navigation.navigate("HomeScreen");
    // } else {
    //   alert("Salah");
    // }

    try {
      if(email.trim().length === 0){
        alert("Email tidak boleh kosong")
      }
      if(pass.trim().length === 0){
        alert("Password tidak boleh kosong")
      }

      navigation.navigate('Home')
    } catch (err) {
      Alert.alert('Error', err.message, [{
        text:'OK', onPress: () => {
          console.log('ERR')
        }},
      ]);
    }
  };

  return (
    <ScrollView>
      <View>
        <View style={{ width: windowWidth, height: 400 }}>
          <ImageBackground
            source={require("../../../assets/images/Subtract.png")}
            resizeMode="cover"
            style={{ width: windowWidth, height: 400 }}
          >
            <View style={style.brandStyle}>
              <Image source={require("../../../assets/images/Brand.png")} />
            </View>

            <Text style={style.textLoginStyle}>Login</Text>
          </ImageBackground>
        </View>

        <View style={style.container}>
          <Text style={style.textLabel}>Email</Text>
          <TextInput
            style={style.textInputStyle}
            onChangeText={onChangeEmail}
            placeholder="Username or Email"
            placeholderTextColor="#c7c7c7"
            value={email}
          />

          <Text style={[style.textLabel, { marginTop: 20 }]}>Password</Text>
          <TextInput
            style={[style.textInputStyle, { marginBottom: 12 }]}
            onChangeText={onChangePassword}
            placeholder="Password"
            placeholderTextColor="#c7c7c7"
            value={pass}
          />

          <Button onPress={onSubmitLogin} color="#000113" title="Login" />
        </View>

        <Text style={style.textContinueStyle}>
          Or Continue With
        </Text>

        <View style={style.btnContainer}>
          <MyButton
          text="Google"
          imgUrl={ICGoogle}/>

          <MyButton
            style={{marginLeft:15}}
            text="Facebook"
            imgUrl={ICFacebook}/>
        </View>

        <View style={style.containerBottom}>
          <Text>Don't have account? </Text>
          <Text style={{fontWeight:'bold', color:"#FF7F50"}}>Create now</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInputStyle: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
  },
  textLoginStyle: {
    fontSize: 32,
    marginTop: 150,
    fontWeight: "bold",
    textAlign: "center",
    fontWeight:30
  },
  brandStyle: {
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  textLabel: {
    fontSize: 12,
    fontWeight: "bold",
  },
  btnContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    paddingLeft:20,
    paddingRight:20
  },
  textContinueStyle:{
    textAlign:'center',
    padding:10
  },
  containerBottom:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    padding:30
  }
});