# Design Tokens — Elva Fonseca

> Fonte de verdade visual: **Figma Home** (base 1440). Implementação: `src/styles/global.css` (`@theme`).
> Estratégia de unidades: `docs/FLUID_DESIGN_SYSTEM.md`.

## Cores brand

| Token | Hex | Uso |
| --- | --- | --- |
| `orchid` (Orchid White) | `#fffef4` | Surface principal |
| `woodsmoke` | `#151515` | Texto/ink principal |
| `punch` | `#e13726` | Brand/CTA (ver restrições abaixo) |
| `buckthorn` (Sea Buckthorn) | `#ffa430` | **Só decorativo** sobre claro |
| `studio` | `#753cbf` | Acento |
| `corn` | `#ecbc03` | **Só decorativo** sobre claro |
| `salem` | `#00784c` | Acento |
| `orchid-025` | `#fffffc` | Neutral — tint mais claro |
| `orchid-050` | `#fffef4` | Neutral — = Orchid White |
| `orchid-100` | `#f5f4e9` | Neutral |
| `orchid-200` | `#e5e4d9` | Neutral — mais escuro (bordas sutis, divisores) |

Semânticos: `surface` → orchid, `ink` → woodsmoke, `brand` → punch.

## Paleta de categoria (Programs)

Descoberta no Figma real (node Home): cards/tags de categoria usam um pastel de fundo pareado
com uma tinta escura de texto — não é decoração solta, é um sistema. Borda `1.5px solid woodsmoke`
+ `radius 12px` em todos. **O mapeamento categoria↔cor é conteúdo** (ex.: qual programa é
"Cerulean" vs "Malachite") — fica para Fase 3/4; aqui só os tokens existem.

| Papel | Pastel (fundo) | Tinta (texto) |
| --- | --- | --- |
| Categoria A | `cerulean-200` `#d8e1f2` | `viking-900` `#102a2f` |
| Categoria B | `malachite-200` `#bbf0ce` | `viking-900` `#102a2f` |
| Categoria C | `buckthorn-200` `#fadbb2` / `corn-200` `#f5e9bb` / `corn-100` `#f7f2df` | `jacko-bean-950` `#2e1a03` |
| Categoria D | `studio-200` `#e3daef` | a confirmar na Fase 3/4 |

## Tabela de contraste (WCAG, calculada)

| Par (texto sobre fundo) | Ratio | Veredito |
| --- | --- | --- |
| woodsmoke / orchid | 18.03:1 | ✅ AA em qualquer tamanho |
| orchid / woodsmoke | 18.03:1 | ✅ AA em qualquer tamanho |
| salem / orchid | 5.47:1 | ✅ AA texto normal |
| studio / orchid | 6.57:1 | ✅ AA texto normal |
| woodsmoke / buckthorn | 9.22:1 | ✅ AA (texto escuro sobre laranja OK) |
| woodsmoke / corn | 10.23:1 | ✅ AA (texto escuro sobre amarelo OK) |
| **orchid / punch** | **4.34:1** | ⚠️ Só texto grande (≥24px ou ≥18.7px bold) e botões |
| **punch / orchid** | **4.34:1** | ⚠️ Só texto grande / headings |
| **woodsmoke / punch** | **4.15:1** | ⚠️ Só texto grande |
| buckthorn / orchid | 1.96:1 | ❌ Nunca como texto |
| corn / orchid | 1.76:1 | ❌ Nunca como texto |

**Regra prática:** na faixa Punch (CTA de doação), corpo de texto pequeno deve ser evitado —
usar texto grande/semibold, ou escurecer o tom do Punch apenas para texto corrido pequeno
(decidir na Fase 3 ao construir a seção).

## Tipografia

Confirmado no Figma real (node Home): **2 famílias, 3 papéis.** Nenhuma outra fonte entra no sistema.

| Papel | Família / peso | Onde | Classe | Status |
| --- | --- | --- | --- | --- |
| Display | **Taberna Sans Black** (900) | Headings, título do footer, números de stat (14–92px) | `font-display font-black` | ✅ `public/fonts/TabernaSans-Black.woff2` |
| Nav / botão-texto | **Taberna Sans Regular** (400) | Links do header/footer, aba "Donate", labels uppercase | `font-display` (400 é o default) | ✅ `public/fonts/TabernaSans-Regular.woff2` |
| Botão CTA (banda) | **Taberna Sans Black** (900) | Ex.: "Apply for Volunteering" (Figma usa Black no botão da banda) | `font-display font-black` | ✅ |
| Corpo (parágrafo) | **Comme Medium (500)** | Todo texto corrido (16–18px). Figma usa Inter Medium → Comme Medium é o equivalente de peso | `font-medium` | ✅ Fontsource 500 |
| Eyebrow/kicker | **Comme SemiBold (600)** uppercase | Labels pequenos tracked (14px) | `font-semibold` | ✅ Fontsource 600 |

> **Pesos importam (pixel-perfect):** como o `@font-face` de Taberna mapeia 400→Regular e
> 900→Black, todo heading/título/botão-de-banda precisa de `font-black` explícito — sem ele
> o navegador usa o Regular (bug corrigido no Footer e no CtaBand). Comme carrega 400/500/600;
> corpo de texto usa **500** (Medium), não 400.

**Nota de consolidação:** o Figma mistura Inter Medium e Comme Regular no papel de corpo de
parágrafo (mesma seção, mesmo tamanho) — inconsistência do arquivo, não dois papéis deliberados.
Decisão batida: **todo corpo de texto vira Comme Medium (500)** no código (equivalente de peso ao
Inter Medium do Figma); Inter não é usado em lugar nenhum, para não pulverizar fontes no projeto.

Escala tipográfica: definir na Fase 2 a partir do Figma (base 1440 → ÷16 → rem).

## Spacing (Figma → Tailwind)

Escala padrão do Tailwind já cobre (rem, fluido pela raiz):

| Figma (px @1440) | Classe |
| --- | --- |
| 4 | `p-1` / `gap-1` |
| 8 | `p-2` |
| 12 | `p-3` |
| 16 | `p-4` |
| 20 | `p-5` |
| 24 | `p-6` |
| 40 | `p-10` |
| 64 | `p-16` |
| 80 | `p-20` |

## Radius

| Figma | Token |
| --- | --- |
| 6px | `rounded-sm` |
| 8px | `rounded-md` |
| 12px | `rounded-lg` |
| 16px | `rounded-xl` |
| 20px | `rounded-2xl` |

**Exceção px:** borda 1.5px do Figma → `var(--hairline)` (não escala — intencional).
