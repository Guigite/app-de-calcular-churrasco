import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity, Linking, ImageBackground, ScrollView} from 'react-native';

export default function Receitas(){
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView>
      <View style={styles.container}>
      <ImageBackground resizeMode="cover" style={styles.image}source={require("../imgs/churrascada.jpg")}>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=L-DTcYqe4nI&ab_channel=Churrasqueadas');
          }}>
          <Image
            source={require('../imgs/Picanha.PNG')}
            style={styles.imagembotao}
          />
          <Text style={styles.textobotao}>
            Picanha
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=G_7W0gNCC50');
          }}>
          <Image
            source={require('../imgs/ContraFile.jpg')}
            style={styles.imagembotao}
          />
          <Text style={styles.textobotao}>
            Contra File
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=ISzfhRaK8uw');
          }}>
          <Image
            source={require('../imgs/Maminha.PNG')}
            style={styles.imagembotao}
          />
          <Text style={styles.textobotao}>
            Maminha
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=dWwJNStQHQY');
          }}>
          <Image
            source={require('../imgs/Costela.PNG')}
            style={styles.imagembotao}
          />
          <Text style={styles.textobotao}>
            Costela
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=_EAGvTzDp_U');
          }}>
          <Image
            source={require('../imgs/Linguica.PNG')}
            style={styles.imagembotao}
          />
          <Text style={styles.textobotao}>
            Linguiça
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=lJJqHTuEbz0');
          }}>
          <Image
            source={require('../imgs/PicanhaS.PNG')}
            style={styles.imagembotao}
          />
          <Text style={styles.textobotao}>
            Picanha Suína
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=D3FrO5U4vJc');
          }}>
          <Image
            source={require('../imgs/Coxa.PNG')}
            style={styles.imagembotao}
          />
          <Text style={styles.textobotao}>
            Coxa e S/coxa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=ZM9vr8_o4i4');
          }}>
          <Image
            source={require('../imgs/Coracao.PNG')}
            style={styles.imagembotao}
          />
          <Text style={styles.textobotao}>
            Coração
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=n2MHBcc8L-o');
          }}>
          <Image
            source={require('../imgs/Asa.PNG')}
            style={styles.imagembotao}
          />
          <Text style={styles.textobotao}>
            Asa
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.5}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=CQqZUiSyx3E');
          }}>
          <Image
            source={require('../imgs/Pao.PNG')}
            style={styles.imagembotao}
          />
          <Text style={styles.textobotao}>
            Pão de Alho
          </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 10,
    padding: 30,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#62462B',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 100,
    borderRadius: 5,
    margin: 5,
  },
  imagembotao: {
    padding: 10,
    margin: 5,
    height: 85,
    width: 150,
    resizeMode: 'stretch',
  },
  textobotao: {
    color: '#eecc60',
    marginBottom: 4,
    marginLeft: 10,
    fontSize: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});