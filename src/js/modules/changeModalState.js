import checkInputNum from './checkInputNum';

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img'),
		windowWidth = document.querySelectorAll('#width'),
		windowHeight = document.querySelectorAll('#height'),
		windowType = document.querySelectorAll('#view_type'),
		windowProfile = document.querySelectorAll('.checkbox');

	checkInputNum('#width');
	checkInputNum('#height');

	const bindActionToElems = (event, elem, prop) => {
		elem.forEach((item, i)=>{
			item.addEventListener(event, ()=>{
				switch (item.nodeName){
				case 'SPAN':
					state[prop] = i;
					break;
						
				case 'INPUT':
					if (item.getAttribute('type') === 'checkbox'){
							
						state[prop] = i === 0? 'Холодное': 'Теплое';
						elem.forEach((box, j) => {
							box.checked = false;
							if (i == j) {
								box.checked = true;
							}
						});
							
					}else{
						state[prop] = item.value;
					}
					break;
					
				case 'SELECT':
					state[prop] = item.value;
					break;
				}
				console.log(state);

			});
		});
	};
	
	bindActionToElems('click', windowForm, 'form');
	bindActionToElems('input', windowHeight, 'height');
	bindActionToElems('input', windowWidth, 'width');
	bindActionToElems('change', windowType, 'type');
	bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;