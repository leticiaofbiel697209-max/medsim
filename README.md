# MedSim

Simulador clínico educacional para estudantes de medicina.

## MVP
- Estudo por patologia e caso surpresa com diagnóstico oculto
- Paciente virtual com estado persistente no navegador
- Anamnese guiada, exame físico, exames, hipóteses e condutas
- Relógio clínico explícito: +30 min, +2 h, +6 h, +1 dia
- Evolução determinística baseada em regras
- Debriefing e pontuação
- Biblioteca e histórico
- Casos iniciais: pneumonia, IAM com supra de ST e apendicite

## Arquitetura
- `src/data.ts`: casos educacionais estruturados
- `src/engine.ts`: motor clínico determinístico e funções puras
- `src/storage.ts`: persistência local versionada
- `src/App.tsx`: experiência do MVP
- `src/types.ts`: contratos do domínio

A camada conversacional futura deve apenas verbalizar o estado clínico; o estado verdadeiro deve permanecer estruturado e persistido.

## Rodar localmente
```bash
npm install
npm run dev
```

## Validar
```bash
npm test
npm run build
```

## Próximos passos
1. Supabase/PostgreSQL e autenticação
2. Separar Patient Actor, Clinical Engine e Tutor/Debrief
3. Evidências médicas com fonte, organização, URL e data
4. Mais casos, apresentações atípicas e complexas
5. OSCE, revisão espaçada e aprendizado adaptativo

> **Uso exclusivamente educacional.** Este software não substitui avaliação, diagnóstico, prescrição ou tratamento de pacientes reais.
