export default async (ctx) => {
  await ctx.reply(ctx.i18n.t('test'));
};
