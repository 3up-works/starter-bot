import { Composer } from 'grammy';
import test from './commands/test.js';

const composer = new Composer();

composer.command('test', test);

export default composer;
