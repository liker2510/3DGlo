import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import form from './modules/form';
import smooth from './modules/smooth';
import tabs from './modules/tabs';
import slider from './modules/slider';

timer('03 december 2021');
menu();
modal();
calc(100);
form();
smooth();
tabs();
slider('.portfolio-content', '.portfolio-item');
