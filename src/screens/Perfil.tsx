import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MARIA } from '../core/data';
import { logout } from '../services/auth';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = useNavigation<any>();

  const handleLogout = async () => {
    await logout();
    navigation.replace('Login'); // volta para tela de login
  };

  return (
    <View style={{ flex:1, backgroundColor:'#0f172a', padding:16 }}>
      <View style={{ backgroundColor:'#111827', borderRadius:16, padding:16, marginBottom:20 }}>
        <View style={{ flexDirection:'row', alignItems:'center', marginBottom:8 }}>
          <Ionicons name="person-circle" size={28} color="#22d3ee" />
          <Text style={{ color:'#e2e8f0', fontSize:18, fontWeight:'700', marginLeft:8 }}>
            Perfil da Maria
          </Text>
        </View>
        <Text style={{ color:'#94a3b8' }}>Idade: {MARIA.idade}</Text>
        <Text style={{ color:'#94a3b8' }}>Suitability: {MARIA.suitability}</Text>
        <Text style={{ color:'#94a3b8' }}>Liquidez: {MARIA.liquidez}</Text>
        <Text style={{ color:'#94a3b8' }}>Horizonte: {MARIA.horizonte}</Text>
        <Text style={{ color:'#94a3b8' }}>Valor para aplicar: R$ {MARIA.valorAplicar}</Text>
        <Text style={{ color:'#94a3b8' }}>Objetivos: {MARIA.objetivos.join(', ')}</Text>
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        style={{ backgroundColor:'#ef4444', borderRadius:16, padding:10, alignItems:'center' }}
      >
        <Ionicons name="log-out" size={20} color="#fff" />
        <Text style={{ color:'#fff', fontWeight:'700', marginTop:4 }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
