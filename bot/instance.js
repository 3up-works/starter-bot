import { Bot, session } from 'grammy';
import { I18n } from '@grammyjs/i18n';

const i18n = new I18n({
  defaultLanguageOnMissing: true,
  directory: 'bot/locales',
  useSession: true,
});

const bot = new Bot(process.env.TG_BOT_TOKEN);

bot.use(session());
bot.use(i18n.middleware());

export default bot;
