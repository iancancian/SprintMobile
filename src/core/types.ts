export type Suitability = 'conservador'|'moderado'|'agressivo';
export type Liquidez = 'alta'|'media'|'baixa';
export type Horizonte = 'curto'|'medio'|'longo';

export interface ClienteInput {
  nome: string; idade: number;
  suitability: Suitability; liquidez: Liquidez; horizonte: Horizonte;
  valorAplicar: number; objetivos: string[];
}

export interface Macro { juros: number; inflacao: number; cambio: number; }

export interface Ativo {
  id: string; nome: string;
  classe: 'renda_fixa'|'caixa';
  liquidez: 'diaria'|'D+30';
  risco: 1|2|3; taxa?: number;
}

export interface Carteira {
  itens: { ativoId: string; peso: number }[];
  resumo: Record<string, number>;
  explicacao: string[];
}
