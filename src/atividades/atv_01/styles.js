import { StyleSheet } from 'react-native';
import { RFValue }  from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 8,
        alignItems:'center',
    },
    
    titulo:{
    // fontSize; 20,
    fontSize:RFValue(22),
    color:'#fafafa',
    fontWeight:'bold',
    marginTop: 8,
    },
    texto:{
        // fontSize; 20,
        fontSize:RFValue(22),
        color:'black',
        marginTop: 8,
        },
});

export default styles;