import { production, development } from './launch.js';
import bot from './instance.js';
import composer from './composer.js';

bot.use(composer);

if (process.env.NODE_ENV === 'development') {
  development(bot);
} else {
  production(bot);
}

export default {};
