function modal(){

	function bindModal(triggersSelector, modalSelector, closeSelector, closeClickOverlay = true){
		const triggers = document.querySelectorAll(triggersSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			modals = document.querySelectorAll('[data-modal]');

		triggers.forEach(trigger=>{
			trigger.addEventListener('click', (e)=>{
				e.preventDefault();

				modals.forEach(item=>{
					item.style.display = 'none';
				});

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				clearTimeout(modalTime);
				
			});
		});

		
		close.addEventListener('click', ()=>{
			modals.forEach(item=>{
				item.style.display = 'none';
			});

			modal.style.display = 'none';
			document.body.style.overflow = '';
			
		});
	

		modal.addEventListener('click', (e)=>{

			if (e.target == modal && closeClickOverlay){
				modals.forEach(item=>{
					item.style.display = 'none';
				});

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

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	
	// modalTimeout('.popup', 60000);

}

export default modal;