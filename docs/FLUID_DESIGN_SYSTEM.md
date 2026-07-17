# Fluid Design System — estratégia raiz vw + tokens rem

> Documento **agnóstico de marca**. Estratégia validada no Blue Sierra (Webflow) e refinada
> neste projeto para código (Astro + Tailwind v4). Após calibração real, este arquivo vira o
> seed da skill pessoal `fluid-design-system`. Tokens específicos de cada marca ficam em
> `DESIGN_TOKENS.md` do respectivo projeto — nunca aqui.

## A ideia em uma frase

A raiz (`html { font-size }`) escala com a largura da tela (vw); **todos** os tokens de
tipografia, spacing e radius são `rem`, então o layout inteiro escala junto como um canvas
com zoom — o "tudo encaixa" do Webflow, sem breakpoint mágico entre 1024 e 1920.

## A fórmula da raiz

Ancorar o coeficiente vw na **largura base do design** (a largura do frame no Figma):

```
coeficiente = 16 / larguraBase × 100
ex.: base 1440 → 16/1440×100 = 1.111vw   (16px exatos em 1440 = design 1:1)
ex.: base 1920 → 16/1920×100 = 0.833vw
```

Três faixas:

```css
html {
  /* < 1024: piso legível — escala pura deixaria texto ilegível no mobile;
     aqui o layout responde por breakpoint (grid colapsa etc.), como no Webflow */
  font-size: clamp(0.875rem, 1.111vw, 1.125rem);
}

@media (min-width: 1024px) {
  /* faixa desktop: proporcional PURO — a sensação "canvas com zoom" */
  html { font-size: max(0.875rem, 1.111vw); }
}

@media (min-width: 1920px) {
  /* ultrawide: continua crescendo, mas com inclinação menor (0.8) para o
     layout não "explodir". O termo rem garante CONTINUIDADE em 1920:
     valor-em-1920 = coeficiente × 19.2px; o intercepto é a diferença. */
  html { font-size: clamp(1.334rem, 0.373rem + 0.8vw, 1.625rem); }
}
```

### Como recalcular o teto ultrawide (qualquer projeto)

1. `S₁₉₂₀` = raiz no fim da faixa desktop = `coeficiente × 19.2` (ex.: 1.111 × 19.2 = 21.33px)
2. Inclinação reduzida `k` (0.8 funciona bem; menor = mais contido)
3. Intercepto = `S₁₉₂₀ − k × 19.2` (ex.: 21.33 − 15.36 = 5.97px = 0.373rem)
4. Resultado: `clamp(S₁₉₂₀rem, interceptoRem + k·vw, tetoRem)`

**Armadilha real deste projeto:** escrever `clamp(1rem, 0.8vw, 1.25rem)` para ≥1920 cria um
**degrau** — a raiz despenca de 21.3px para 16px exatamente em 1920. O termo `+ interceptoRem`
é o que torna a curva contínua.

**Outra armadilha:** ancorar o coeficiente na largura errada. Base Figma 1440 com coeficiente
de 1920 (`0.833vw`) renderiza o site a 87.5% do design exatamente na largura de design.

## Hierarquia de unidades

| Unidade | Onde | Por quê |
| --- | --- | --- |
| `rem` | Todos os tokens (`@theme`): fontSize, spacing, radius, larguras de container | Multiplica direto da raiz fluida — mesma fluidez do em-sobre-raiz do Webflow, **sem compounding** em componentes aninhados |
| `em` | Átomos onde escalar com o texto do pai é desejado: padding de botão, badge, ícone inline | O átomo inteiro escala se o font-size local mudar |
| `px` | Só hairlines: bordas finas (1–1.5px), focus rings | Traço fino deve continuar fino em 2560 — escalar seria errado |

## Regras de acessibilidade (não negociáveis)

- Limites de `clamp()`/`max()` sempre em **rem, nunca px** — preserva a preferência de fonte
  do usuário nos extremos (WCAG 1.4.4)
- Nunca vw puro sem piso: `1vw` em 375px = raiz de ~4px
- A faixa proporcional pura é um tradeoff consciente: zoom do browser funciona nos extremos
  (onde os limites rem mandam) e o layout inteiro escala no meio
- `prefers-reduced-motion` respeitado globalmente (CSS) e em todo motion JS

## Tailwind v4 (CSS-first)

Tudo vive num único `global.css` — não existe `tailwind.config.js` na v4:

```css
@import "tailwindcss";

/* raiz fluida aqui (fora do @theme) */

@theme {
  --color-surface: /* … tokens da marca … */;
  --font-display: /* … */;
  --radius-sm: 0.375rem; /* valores do design ÷ 16, em rem */
  /* Spacing: a escala padrão (--spacing: 0.25rem) já é rem → já é fluida.
     4px=p-1, 8px=p-2 … 80px=p-20. Só estender se o design tiver passos fora de múltiplos de 4. */
}
```

## Anti-patterns

- ❌ `font-size` de componente em px — congela contra a raiz fluida
- ❌ `em` em containers/seções aninhados — compounding invisível (0.9em × 0.9em = 0.81)
- ❌ `max-width` de container em px — o container para de escalar e o resto não
- ❌ Breakpoints para "ajustar tamanho" no desktop — a raiz já faz isso; breakpoint desktop é só para mudar **layout**
- ❌ Media queries em px para simular fluidez (a "mágica manual" que o clamp elimina)
- ❌ vw em propriedades individuais (`width: 50vw` em cards) — a fluidez vem da raiz, não de vw espalhado

## Checklist de calibração (foundation de cada projeto)

1. [ ] Coeficiente ancorado na largura base do Figma (design 1:1 na largura base)
2. [ ] Testar em 375 / 768 / largura-base / 1920 / 2560 — sem degrau visível ao redimensionar
3. [ ] Verificar continuidade em 1024 e 1920 (calcular os dois lados de cada boundary)
4. [ ] Zoom do browser (Cmd +/−) ainda escala texto nos extremos
5. [ ] Texto mínimo legível em 375 (raiz no piso × menor token de fontSize ≥ ~12px)
6. [ ] Hairlines continuam finas em 2560 (px, não rem)
7. [ ] `prefers-reduced-motion` ativado → nada se move além de fades curtos
