import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function (props) {
    return (
        <View style={{ width: '100%',height: '100%',flexDirection:'row',flex:1,justifyContent:'space-betw22n' }} >
            <View style={{ width: '33.33%', height: 100, backgroundColor: '#00f' }} >

            </View>
            <View style={{ width: '33.33%', height: 70, backgroundColor: '#00a' }} >

            </View>
            <View style={{ width: '33.33%', height: 40, backgroundColor: '#005' }} >

            </View>
        </View>
    );
};