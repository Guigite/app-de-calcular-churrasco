import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
		<View style={styles.contornoBotao}>
      		<Pressable style={styles.botao}>Avançar</Pressable>
		</View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#ff4f4f",
		width: '100%',
		height: '100%',
	},
	contornoBotao: {
		backgroundColor: '#000',
		padding: '9px',
		margin: '10px',
		borderRadius: '10px',
		justifyContent: 'center',
		alignItems: 'center',
	},
	botao: {
		justifyContent: 'center',
		alignItems: 'center',
		color: '#FFF',
	},
});