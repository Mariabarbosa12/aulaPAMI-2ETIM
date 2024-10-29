import { View, Text, StyleSheet } from 'react-native';


import styles from './styles'

export default function Atividade1() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Introdução de React native</Text>
            <Text style={styles.texto}> Adicionar texto</Text>
        </View>
    );
}