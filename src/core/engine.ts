import { Ativo, Carteira, ClienteInput, Macro } from './types';

export function recomendar(cli: ClienteInput, macro: Macro, ativos: Ativo[]): Carteira {
  let rf = 70, caixa = 30;
  const expl: string[] = ['Perfil conservador -> foco em baixo risco (RF + Caixa).'];

  if (cli.liquidez === 'alta') { caixa += 10; rf -= 10; expl.push('Liquidez alta -> +10pp em Caixa.'); }
  if (macro.juros > 10) expl.push(`Juros ${macro.juros}% -> preferência por pós-fixados.`);

  const clamp=(x:number)=>Math.max(0,Math.min(100,x));
  rf=clamp(rf); caixa=clamp(caixa);

  const rfList = ativos.filter(a=>a.classe==='renda_fixa' && a.risco<=2);
  const caixaList = ativos.filter(a=>a.classe==='caixa' && a.liquidez==='diaria');

  const itens: {ativoId:string;peso:number}[]=[];
  const add=(list:Ativo[], peso:number)=>{ if(!list.length||peso<=0) return; const p=+(peso/list.length).toFixed(2); list.forEach(a=>itens.push({ativoId:a.nome,peso:p})); };
  add(rfList, rf); add(caixaList, caixa);

  expl.push('Renda fixa oferece estabilidade; caixa garante acesso rápido ao dinheiro.');

  return { itens, resumo:{'Renda Fixa':rf, 'Caixa':caixa}, explicacao: expl };
}
