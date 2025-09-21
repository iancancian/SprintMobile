import React from 'react';
import { View, Text } from 'react-native';
import { ATIVOS_BASE, MARIA, MACRO_ATUAL } from '../core/data';
import { recomendar } from '../core/engine';
import { Ionicons } from '@expo/vector-icons';

export default function Recomendacao() {
  const car = recomendar(MARIA, MACRO_ATUAL, ATIVOS_BASE);
  return (
    <View style={{ flex:1, backgroundColor:'#0f172a', padding:16 }}>
      <View style={{ backgroundColor:'#111827', borderRadius:16, padding:16, marginBottom:12 }}>
        <View style={{ flexDirection:'row', alignItems:'center', marginBottom:8 }}>
          <Ionicons name="bulb" size={22} color="#22d3ee" />
          <Text style={{ color:'#e2e8f0', fontWeight:'700', marginLeft:8 }}>Carteira Sugerida</Text>
        </View>
        <Text style={{ color:'#e2e8f0' }}>
          Renda Fixa: {car.resumo['Renda Fixa']}% • Caixa: {car.resumo['Caixa']}%
        </Text>
      </View>

      <View style={{ backgroundColor:'#111827', borderRadius:16, padding:16, marginBottom:12 }}>
        <Text style={{ color:'#e2e8f0', fontWeight:'700', marginBottom:6 }}>Ativos</Text>
        {car.itens.map((i, idx) => (
          <Text key={idx} style={{ color:'#94a3b8' }}>• {i.ativoId} — {i.peso}%</Text>
        ))}
      </View>

      <View style={{ backgroundColor:'#111827', borderRadius:16, padding:16 }}>
        <Text style={{ color:'#e2e8f0', fontWeight:'700', marginBottom:6 }}>Explicação</Text>
        {car.explicacao.map((e, idx) => (
          <Text key={idx} style={{ color:'#94a3b8' }}>– {e}</Text>
        ))}
      </View>
    </View>
  );
}
