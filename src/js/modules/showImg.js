const showImg = (selector) => {
	const workSection = document.querySelector(selector),
		imgPopup = document.createElement('div'),
		bigImage = document.createElement('img');

	imgPopup.classList.add('popup');
	workSection.append(imgPopup);
	imgPopup.append(bigImage);

	imgPopup.style.justifyContent = 'center';
	imgPopup.style.alignItems = 'center';
	imgPopup.style.display = 'none';
	

	workSection.addEventListener('click', (e)=>{
		e.preventDefault();

		const t = e.target;
		if(t.classList.contains('preview')){
			imgPopup.style.display = 'flex';
			const path = t.parentNode.getAttribute('href');
			bigImage.setAttribute('src', path);
			bigImage.style.maxWidth = '70%';

			document.body.style.overflow = 'hidden';
		}
		if (t.matches('div.popup')) {
			imgPopup.style.display = 'none';
		}
	});
	
};

export default showImg;