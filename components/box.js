import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function (props) {
    return (
        <View style={{ width: '100%',height: '100%',flexDirection:'column',flex:1,alignItems:'center' }} >
            <View style={{ width: '33.33%', height: 100, backgroundColor: '##' }} >

            </View>
            <View style={{ width: '33.33%', height: 70, backgroundColor: '#00a' }} >

            </View>
            <View style={{ width: '33.33%', height: 40, backgroundColor: '#005' }} >

            </View>
        </View>
    );
};