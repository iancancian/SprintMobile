import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { login } from '../services/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, any>;

export default function Login({ navigation }: Props) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const onLogin = async () => {
    const ok = await login(user.trim(), pass.trim());
    if (ok) navigation.replace('Main');
    else Alert.alert('Erro', 'Usuário ou senha inválidos.');
  };

  return (
    <KeyboardAvoidingView behavior={Platform.select({ios:'padding', android:undefined})} style={{ flex:1, backgroundColor:'#0f172a' }}>
      <View style={{ flex:1, justifyContent:'center', padding:24 }}>
        <View style={{ alignItems:'center', marginBottom:24 }}>
          <Ionicons name="shield-checkmark" size={72} color="#22d3ee" />
          <Text style={{ color:'#e2e8f0', fontSize:24, fontWeight:'800', marginTop:12 }}>Assessor Virtual</Text>
          <Text style={{ color:'#94a3b8', marginTop:4 }}>Login para continuar</Text>
        </View>

        <View style={{ backgroundColor:'#111827', borderRadius:16, padding:16, gap:12, shadowColor:'#000', shadowOpacity:0.3, shadowRadius:8 }}>
          <View style={{ flexDirection:'row', alignItems:'center', backgroundColor:'#0b1220', borderRadius:12, paddingHorizontal:12 }}>
            <Ionicons name="person" size={20} color="#94a3b8" />
            <TextInput
              placeholder="Usuário"
              placeholderTextColor="#64748b"
              value={user}
              onChangeText={setUser}
              style={{ flex:1, color:'#e2e8f0', padding:12 }}
            />
          </View>

          <View style={{ flexDirection:'row', alignItems:'center', backgroundColor:'#0b1220', borderRadius:12, paddingHorizontal:12 }}>
            <Ionicons name="lock-closed" size={20} color="#94a3b8" />
            <TextInput
              placeholder="Senha"
              placeholderTextColor="#64748b"
              secureTextEntry
              value={pass}
              onChangeText={setPass}
              style={{ flex:1, color:'#e2e8f0', padding:12 }}
            />
          </View>

          <TouchableOpacity onPress={onLogin} style={{ backgroundColor:'#22d3ee', borderRadius:12, padding:14, alignItems:'center', marginTop:6 }}>
            <Text style={{ color:'#00131a', fontWeight:'800' }}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ color:'#64748b', fontSize:12, textAlign:'center', marginTop:20 }}>
          username: 'maria', password: '1234'
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
