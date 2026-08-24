const accountId = process.env.PUBLIC_GIVEBUTTER_ACCOUNT_ID;
const widgetId = process.env.PUBLIC_GIVEBUTTER_WIDGET_ID;
const isLive = Boolean(accountId && widgetId);

if (isLive) {
  console.log('\n⚠️  GIVEBUTTER ATIVO — este build vai publicar o formulário de doação real.');
  console.log(`    Account ID: ${accountId} | Widget ID: ${widgetId}\n`);

  if (process.env.VERCEL_ENV === 'production' && process.env.CONFIRM_GIVEBUTTER_LIVE !== 'true') {
    console.error('🔴 Build de PRODUÇÃO bloqueado: credenciais reais do Givebutter detectadas.');
    console.error(
      '   Para confirmar que é intencional, defina CONFIRM_GIVEBUTTER_LIVE=true nas env vars da Vercel (Production) e rode o deploy novamente.\n',
    );
    process.exit(1);
  }
}
