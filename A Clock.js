function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
const secondDeg = seconds * 6;
        const minuteDeg = minutes * 6;
        const hourDeg = (hours % 12) * 30 + minutes * 0.5;

        const secEl = document.querySelector('.sec');
        const minEl = document.querySelector('.min');
        const hourEl = document.querySelector('.hour');
        if(secEl) secEl.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
        if(minEl) minEl.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
        if(hourEl) hourEl.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;


} 
updateClock();
setInterval(updateClock, 1000)


