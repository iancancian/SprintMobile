import { Ativo, ClienteInput, Macro } from './types';

export const ATIVOS_BASE: Ativo[] = [
  { id:'caixa-1', nome:'Caixa (DI diário)', classe:'caixa', liquidez:'diaria', risco:1 },
  { id:'rf-pos-1', nome:'CDB Pós-Fixado (DI 100%)', classe:'renda_fixa', liquidez:'D+30', risco:2 },
  { id:'rf-ipca-1', nome:'Tesouro IPCA+ curto', classe:'renda_fixa', liquidez:'D+30', risco:2 },
];

export const MARIA: ClienteInput = {
  nome: 'Maria', idade: 25, suitability: 'conservador',
  liquidez: 'alta', horizonte: 'curto', valorAplicar: 2000,
  objetivos: ['começar a investir', 'baixo risco']
};

export const MACRO_ATUAL: Macro = { juros: 12.0, inflacao: 4.5, cambio: 5.0 };
