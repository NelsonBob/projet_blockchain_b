import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 30,
        left: 0,
        width: '100%',
        backgroundColor: '#fa7da7',
        elevation: 5,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default headerStyles;