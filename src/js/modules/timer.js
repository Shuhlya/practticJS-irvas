

const timer = (deadline, obj, interval) =>{
	const daysElement = document.querySelector(obj.d),
		hoursElement = document.querySelector(obj.h),
		minutesElement = document.querySelector(obj.m),
		secondsElement = document.querySelector(obj.s);

	let timerObj = {};

	
	const calcTimer = (end) =>{
		
		const now = new Date(),
			t = new Date(end) - now;

		if (t <= 0 ){
			timerObj.days = timerObj.hours = timerObj.minutes = timerObj.seconds = 0;
			clearInterval(int);
		}else{
			timerObj.days = Math.floor(t/1000/60/60/24);
			timerObj.hours = Math.floor((t/1000/60/60) % 24);
			timerObj.minutes = Math.floor((t/1000/60) % 60);
			timerObj.seconds = Math.floor((t/1000) % 60);
		}
		
	};

	const setTimer = () =>{
		calcTimer(deadline);

		daysElement.textContent = timerObj.days > 10? timerObj.days: `0${timerObj.days}`;
		hoursElement.textContent = timerObj.hours > 10? timerObj.hours: `0${timerObj.hours}`;
		minutesElement.textContent = timerObj.minutes > 10? timerObj.minutes: `0${timerObj.minutes}`;
		secondsElement.textContent = timerObj.seconds > 10? timerObj.seconds: `0${timerObj.seconds}`;

	};

	const int = setInterval(setTimer, interval);

};

export default timer;