import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { save } from './store';


export const ComposeScreen = () => {
    const [ text, setText ] = useState('');
    const navigation = useNavigation();

    const onPressSave = async () => {
        await save(text, Date.now());
        navigation.goBack();
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <TextInput
                style={{ marginBottom: 16}}
                mode="outlines"
                placeholder='メモを入力'
                multiline
                onChangeText={(text) => setText(text)}
            />
            <Button
                mode='contained'
                onPress={onPressSave}
            >
                保存
            </Button>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 16,
    }
})