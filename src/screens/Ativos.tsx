import React from 'react';
import { View, Text } from 'react-native';
import { ATIVOS_BASE } from '../core/data';
import { Ionicons } from '@expo/vector-icons';

export default function Ativos() {
  return (
    <View style={{ flex:1, backgroundColor:'#0f172a', padding:16 }}>
      {ATIVOS_BASE.map(a => (
        <View key={a.id} style={{ backgroundColor:'#111827', borderRadius:16, padding:14, marginBottom:12 }}>
          <View style={{ flexDirection:'row', alignItems:'center', marginBottom:6 }}>
            <Ionicons name={a.classe==='renda_fixa' ? 'cash' : 'wallet'} size={22} color="#22d3ee" />
            <Text style={{ color:'#e2e8f0', fontWeight:'700', marginLeft:8 }}>{a.nome}</Text>
          </View>
          <Text style={{ color:'#94a3b8' }}>Classe: {a.classe} • Liquidez: {a.liquidez} • Risco: {a.risco}</Text>
        </View>
      ))}
    </View>
  );
}
