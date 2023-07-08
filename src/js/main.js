import { slider } from './modules/slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

document.addEventListener('DOMContentLoaded', ()=>{
	let modalState = {};
	let timerSelectors = {
		d:'#days',
		h:'#hours',
		m:'#minutes',
		s:'#seconds'
	};

	changeModalState(modalState);
	slider();
	modal();
	tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
	forms();
	timer('02-27-2024', timerSelectors, 10);
});