const checkInputNum = (selector) =>{
	document.querySelectorAll(selector).forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');
		});
	});
};

export default checkInputNum;