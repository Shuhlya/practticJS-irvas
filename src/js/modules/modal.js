function modal(){

	function bindModal(triggersSelector, modalSelector, closeSelector){
		const triggers = document.querySelectorAll(triggersSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelectorAll(closeSelector);

		triggers.forEach(trigger=>{
			trigger.addEventListener('click', (e)=>{
				e.preventDefault();
				if(e.target) {
					modal.style.display = 'block';
					document.body.style.overflow = 'hidden';
					clearTimeout(modalTime);
				}
			});
		});

		close.forEach(btn=>{
			btn.addEventListener('click', (e)=>{
				if(e.target){
					modal.style.display = 'none';
					document.body.style.overflow = '';
				}
			});
		});

		modal.addEventListener('click', (e)=>{
			if (e.target == modal){
				modal.style.display = 'none';
				document.body.style.overflow = '';
			}
		});


	}

	let modalTime;
	function modalTimeout(modalSelector, timer){
		const modal = document.querySelector(modalSelector);
		modalTime = setTimeout(()=>{
			modal.style.display = 'block';
			document.body.style.overflow = 'hidden';
		}, timer);
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
	bindModal('.phone_link', '.popup', '.popup_close');
	
	modalTimeout('.popup', 6000);

}

export default modal;