const production = async (bot) => {
  try {
    const path = `${process.env.BASE_PATH}/${process.env.TG_BOT_TOKEN}`;
    await bot.api.setWebhook(path);
    console.log(`[SERVER] Bot starting webhook on ${path}`);
  } catch (e) {
    console.error(e);
  }
};

const development = async (bot) => {
  try {
    await bot.api.deleteWebhook();
    console.log('[SERVER] Bot starting polling');
    await bot.start();
  } catch (e) {
    console.error(e);
  }
};

export { production, development };
