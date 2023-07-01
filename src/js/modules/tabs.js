function tabs(){

	const tabs = document.querySelectorAll('.glazing_block'),
		tabsLink = document.querySelectorAll('.glazing_block a'),
		tabsContents = document.querySelectorAll('.glazing_content');

	tabs.forEach((tab, i)=>{
		tab.addEventListener('click', (e)=>{
			tabsLink.forEach(link=>link.classList.remove('active'));
			if(e.target) {
				tab.querySelector('a').classList.add('active');
				tabsContents.forEach(item=>item.style.display = 'none');
				tabsContents[i].style.display = 'block';
			}
			
		});
	});

		
}

export default tabs;