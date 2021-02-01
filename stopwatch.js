document.addEventListener('DOMContentLoaded', () => {
    let millisecond = document.querySelector('#millisecond').innerHTML;
    let second = document.querySelector('#second').innerHTML;
    let minute = document.querySelector('#minute').innerHTML;
    let hour = document.querySelector('#hour').innerHTML;
    let start = document.querySelector('#start');
    let stop = document.querySelector('#stop');
    let pause = document.querySelector('#pause');
    let resume = document.querySelector('#resume');
    if (!localStorage.getItem('milliseconds')) {
        localStorage.setItem('milliseconds', 0);
        localStorage.setItem('seconds', 0);
        localStorage.setItem('minutes', 0);
        localStorage.setItem('hourss', 0);
    }
    stop.onclick = () => {
        localStorage.setItem('milliseconds', 0);
        localStorage.setItem('seconds', 0);
        localStorage.setItem('minutes', 0);
        localStorage.setItem('hourss', 0);
        window.location.reload();
    }
    millisecond = localStorage.getItem('milliseconds');
    document.querySelector('#millisecond').innerHTML = millisecond;
    second = localStorage.getItem('seconds');
    document.querySelector('#second').innerHTML = second;
    minute = localStorage.getItem('minutes');
    document.querySelector('#minute').innerHTML = minute;
    hour = localStorage.getItem('hourss');
    document.querySelector('#hour').innerHTML = hour;
    if (localStorage.getItem('milliseconds') > 9) {
        document.querySelector('#rd').innerHTML = ':';
    }
    if (localStorage.getItem('seconds') > 9) {
        document.querySelector('#nd').innerHTML = ':';
    }
    if (localStorage.getItem('minutes') > 9) {
        document.querySelector('#st').innerHTML = ':';
    }
    if (localStorage.getItem('hourss') > 9) {
        document.querySelector('#h1').innerHTML = '';
    }
    stop.style.backgroundColor = 'grey';
    if (localStorage.getItem('milliseconds') == 0 && localStorage.getItem('seconds') == 0 && localStorage.getItem('minutes') == 0 && localStorage.getItem('hourss') == 0) {
        resume.disabled = true;
        resume.style.cursor = 'default';
        pause.disabled = true; 
        pause.style.cursor = 'default';
        stop.disabled = true;
        stop.style.cursor = 'default';
    } else {
        start.disabled = true;
        start.style.backgroundColor = 'grey';
        start.style.color = '#ffffffd8';
        start.style.cursor = 'default';
        stop.style.backgroundColor = '#fa2121';
        pause.disabled = true;
        pause.style.cursor = 'default'
    }
    function millisec() {
        
        millisecond++;
        document.querySelector('#millisecond').innerHTML = millisecond;

        if (millisecond === 100) {
            millisecond = 0;
            document.querySelector('#millisecond').innerHTML = millisecond;
        };
        if (millisecond > 9) {
            document.querySelector('#rd').innerHTML = ':';
        } else {
            document.querySelector('#rd').innerHTML = ':0'
        }
    
    }
    function sec() {
        
        second++;
        document.querySelector('#second').innerHTML = second;

        if (second === 60) {
            second = 0;
            document.querySelector('#second').innerHTML = second;
        };
        if (second > 9) {
            document.querySelector('#nd').innerHTML = ':';
        } else {
            document.querySelector('#nd').innerHTML = ':0'
        }

    
    }


    function min() {

        minute++;
        document.querySelector('#minute').innerHTML = minute;
        if (minute === 60) {
            minute = 0;
            document.querySelector('#minute').innerHTML = minute;
        }
        if (minute > 9) {
            document.querySelector('#st').innerHTML = ':';
        } else {
            document.querySelector('#st').innerHTML = ':0'
        }

        
    }
    function hours() {

        hour++;
        document.querySelector('#hour').innerHTML = hour;
        if (hour === 60) {
            hour = 0;
            document.querySelector('#hour').innerHTML = hour;
        }
        if (hour > 9) {
            document.querySelector('#h1').innerHTML = '';
        } else {
            document.querySelector('#h1').innerHTML = '0'
        }
    }


    start.onclick = () => {
        let a = setInterval(millisec, 10);
        let b = setInterval(sec, 1000);
        let c = setInterval(min, 60000);
        let d = setInterval(hours, 3600000);
        resume.disabled = true;
        pause.disabled = false;
        pause.style.cursor = 'pointer';
        start.disabled = true;
        start.style.backgroundColor = 'grey';
        start.style.color = '#ffffffd8';
        start.style.cursor = 'default';
        stop.disabled = false;
        stop.style.backgroundColor = '#fa2121';
        stop.style.cursor = 'pointer'; 
        stop.onclick = () => {
            clearInterval(a);
            clearInterval(b);
            clearInterval(c);
            clearInterval(d);
            localStorage.setItem('milliseconds', 0);
            localStorage.setItem('seconds', 0);
            localStorage.setItem('minutes', 0);
            localStorage.setItem('hourss', 0);
            window.location.reload();

    }

    pause.onclick = () => {
        clearInterval(a);
        clearInterval(b);
        clearInterval(c);
        clearInterval(d);
        localStorage.setItem('milliseconds', millisecond);
        localStorage.setItem('seconds', second);
        localStorage.setItem('minutes', minute);
        localStorage.setItem('hourss', hour);
        window.location.reload();
    }    
    }
    resume.onclick = () => {
        let a = setInterval(millisec, 10);
        let b = setInterval(sec, 1000);
        let c = setInterval(min, 60000);
        let d = setInterval(hours, 3600000);
        pause.disabled = false;
        resume.disabled = true;
        resume.style.cursor = 'default';
        pause.style.cursor = 'pointer';
        start.disabled = true;
        start.style.backgroundColor = 'grey';
        start.style.color = '#ffffffd8';
        start.style.cursor = 'default';
        stop.disabled = false;
        stop.style.backgroundColor = '#fa2121';
        stop.style.cursor = 'pointer';
        stop.onclick = () => {
            clearInterval(a);
            clearInterval(b);
            clearInterval(c);
            clearInterval(d);
            localStorage.setItem('milliseconds', 0);
            localStorage.setItem('seconds', 0);
            localStorage.setItem('minutes', 0);
            localStorage.setItem('hourss', 0);
            window.location.reload();

    }
    pause.onclick = () => {
        clearInterval(a);
        clearInterval(b);
        clearInterval(c);
        clearInterval(d);
        localStorage.setItem('milliseconds', millisecond);
        localStorage.setItem('seconds', second);
        localStorage.setItem('minutes', minute);
        localStorage.setItem('hourss', hour);
        window.location.reload()       
    }   
    }
    
})




