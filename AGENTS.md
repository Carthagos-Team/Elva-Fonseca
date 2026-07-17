# Elva Fonseca — regras do projeto

Site institucional da Elva Fonseca Foundation. 7 páginas + Sanity CMS.
**Fonte de verdade visual: Figma Home (base 1440).**

## Regras inegociáveis

1. **Ordem de fases — não pular seções.** Foundation ✅ → Fase 2 (componentes globais) →
   Fase 3 (Home, seção a seção: markup → tokens → motion leve → review) → Fase 4 (Sanity wire) →
   Fase 5 (motion completo). Cada fase só começa com a anterior aprovada pelo Jonathan.
2. **Unidades:** tokens em `rem` (escalam pela raiz fluida), `em` só em átomos (botão, badge,
   ícone inline), `px` só em hairlines (`var(--hairline)`, focus ring). Nunca `font-size`/
   `max-width` de componente em px. Estratégia completa: `docs/FLUID_DESIGN_SYSTEM.md`.
3. **Tokens:** toda cor/espaçamento/radius vem do `@theme` em `src/styles/global.css` —
   nunca hex/valor solto em componente. Pares de cor só da tabela de contraste em
   `docs/DESIGN_TOKENS.md` (Punch = só texto grande; Buckthorn/Corn = nunca como texto sobre claro).
4. **Motion:** todo GSAP passa por `createMotion()` de `src/lib/gsap.ts` (reduced-motion
   obrigatório). Import só em `<script>` client. Site é MPA — sem `<ClientRouter />`.
5. **Estático:** sem adapter/SSR. Donate/Contact usam provedores externos estáticos.
6. **Não hidratar** Header/Footer; `client:*` só onde há interação real.

## Stack

Astro 7 (estático) + Tailwind v4 (CSS-first, `@theme`) + GSAP/ScrollTrigger + Sanity embutido
(`/admin`). Detalhes: `docs/ARCHITECTURE.md`.

## Development

Dev server em background:

```
astro dev --background
```

Gerenciar com `astro dev stop`, `astro dev status`, `astro dev logs`.

## Docs do repo

- `docs/FLUID_DESIGN_SYSTEM.md` — estratégia fluida (agnóstica; futura skill)
- `docs/DESIGN_TOKENS.md` — paleta Elva + tabela de contraste + tipografia
- `docs/ARCHITECTURE.md` — rotas, pastas, Sanity, decisões
- Plano aprovado: fases, critérios de done

## Documentation (Astro)

Full documentation: https://docs.astro.build

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Framework components](https://docs.astro.build/en/guides/framework-components/)
- [Styling / Tailwind](https://docs.astro.build/en/guides/styling/)
