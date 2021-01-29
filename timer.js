document.addEventListener('DOMContentLoaded', () => {
                const tab = document.querySelector('#tab');
                const form = document.querySelector('form');
                const set = document.querySelector('#set');
                set.style.cursor = 'default';
                set.disabled = true;
                let text = document.createElement('p');
                let hour = document.querySelector('#hour').innerHTML;
                let minute = document.querySelector('#minute').innerHTML;
                let second = document.querySelector('#second').innerHTML;
                const shour = document.querySelector('#shour');
                const sminute = document.querySelector('#sminute');
                const ssecond = document.querySelector('#ssecond');
            
                shour.onkeyup = function() {
                    if (shour.value.length > 0 || sminute.value.length > 0 || ssecond.value.length > 0) {
                        set.disabled = false;
                        set.style.cursor = 'pointer';
                    } else {
                        set.disabled = true;
                        set.style.cursor = 'default';
                    }
                    if (shour.value != '' && shour.value != 0) {
                        document.querySelector('#hour').innerHTML = shour.value;
                    } else {
                        document.querySelector('#hour').innerHTML = 0;
                        document.querySelector('#shour').value = '';
                        set.disabled = true;
                    }
                    if (shour.value > 9) {
                        document.querySelector('#st').innerHTML = '';
                    } else {
                        document.querySelector('#st').innerHTML = 0;
                    }
                    if (shour.value > 99) {
                        document.querySelector('#hour').innerHTML = '00';
                        let al = () => {
                            alert('Must be less than or equal to 99');
                            document.querySelector('#shour').value = '';
                            set.disabled = true;
                        }
                        setTimeout(al, 0);
                    }
                }
                sminute.onkeyup = function() {
                    if (shour.value.length > 0 || sminute.value.length > 0 || ssecond.value.length > 0) {
                        set.disabled = false;
                        set.style.cursor = 'pointer';
                    } else {
                        set.disabled = true;
                        set.style.cursor = 'default';
                    }
                    if (sminute.value == 0) {
                        document.querySelector('#sminute').value = '';
                    }
                    if (sminute.value != '' && sminute.value != 0) {
                        document.querySelector('#minute').innerHTML = sminute.value;
                    } else {
                        document.querySelector('#minute').innerHTML = 0;
                        set.disabled = true;
                    }
                    if (sminute.value > 9) {
                        document.querySelector('#nd').innerHTML = ':';
                    } else {
                        document.querySelector('#nd').innerHTML = ':0';
                    }
                    if (sminute.value > 59) {
                        document.querySelector('#minute').innerHTML = '00';
                        let al = () => {
                            alert('Must be less than or equal to 59');
                            document.querySelector('#sminute').value = '';
                            set.disabled = true;
                        }
                        setTimeout(al, 0);
                    }

                }
                ssecond.onkeyup = function() {
                    if (shour.value.length > 0 || sminute.value.length > 0 || ssecond.value.length > 0) {
                        set.disabled = false;
                        set.style.cursor = 'pointer';
                    } else {
                        set.disabled = true;
                        set.style.cursor = 'default';
                    }
                    if (ssecond.value == 0) {
                        document.querySelector('#ssecond').value = '';
                    }
                    if (ssecond.value != '' && ssecond.value != 0) {
                        document.querySelector('#second').innerHTML = ssecond.value;
                    } else {
                        document.querySelector('#second').innerHTML = 0;
                        set.disabled = true;
                    }
                    if (ssecond.value > 9) {
                        document.querySelector('#rd').innerHTML = ':';
                    } else {
                        document.querySelector('#rd').innerHTML = ':0';
                    }
                    if (ssecond.value > 59) {
                        document.querySelector('#second').innerHTML = '00';
                        let al = () => {
                            alert('Must be less than or equal to 59');
                            document.querySelector('#ssecond').value = '';
                            set.disabled = true
                        }
                        setTimeout(al, 0);
                    }

                }
                shour.onchange = function() {
                    set.disabled = false;
                    set.style.cursor = 'pointer';
                    if (shour.value == 0) {
                        shour.value = ''
                    }
                    if (shour.value == '' && sminute.value == '' && ssecond.value == '') {
                    set.disabled = true;
                    }
                    if (shour.value != '') {
                        document.querySelector('#hour').innerHTML = shour.value;
                    } else {
                        document.querySelector('#hour').innerHTML = 0;
                    }
                    if (shour.value > 9) {
                        document.querySelector('#st').innerHTML = '';
                    } else {
                        document.querySelector('#st').innerHTML = '0';
                    }
                }
                sminute.onchange = function() {
                    set.disabled = false;
                    set.style.cursor = 'pointer';
                    if (sminute.value == 0) {
                        sminute.value = '';
                    }
                    if (shour.value == '' && sminute.value == '' && ssecond.value == '') {
                    set.disabled = true;
                    }
                    if (sminute.value != '') {
                        document.querySelector('#minute').innerHTML = sminute.value;
                    } else {
                        document.querySelector('#minute').innerHTML = 0;
                    }
                    if (sminute.value > 9) {
                        document.querySelector('#nd').innerHTML = ':';
                    } else {
                        document.querySelector('#nd').innerHTML = ':0';
                    }
                    if (sminute.value > 59) {
                        document.querySelector('#minute').innerHTML = '00';

                    }
                }
                ssecond.onchange = function() {
                    set.disabled = false;
                    set.style.cursor = 'pointer';
                    if (ssecond.value == 0) {
                        ssecond.value = ''
                    }
                    if (shour.value == '' && sminute.value == '' && ssecond.value == '') {
                    set.disabled = true;
                    }
                    if (ssecond.value != '') {
                        document.querySelector('#second').innerHTML = ssecond.value;
                    } else {
                        document.querySelector('#second').innerHTML = 0;
                    }
                    if (ssecond.value > 9) {
                        document.querySelector('#rd').innerHTML = ':';
                    } else {
                        document.querySelector('#rd').innerHTML = ':0';
                    }
                    if (ssecond.value > 59) {
                        document.querySelector('#second').innerHTML = '00';
                    }
                }

                form.onsubmit = function() {
                    hour = shour.value;
                    document.querySelector('#hour').innerHTML = hour;
                    minute = sminute.value;
                    document.querySelector('#minute').innerHTML = minute;
                    second = ssecond.value;
                    document.querySelector('#second').innerHTML = second;
                    if (shour.value > 9) {
                        document.querySelector('#st').innerHTML = '';
                    }
                    if (sminute.value > 9) {
                        document.querySelector('#nd').innerHTML = ':';
                    }
                    if (ssecond.value > 9) {
                        document.querySelector('#rd').innerHTML = ':';
                    }
                    if (shour.value.length === 0) {
                        hour = '0';
                        document.querySelector('#hour').innerHTML = hour;
                    }
                    if (sminute.value.length === 0) {
                        minute = '0';
                        document.querySelector('#minute').innerHTML = minute;
                    }
                    if (ssecond.value.length === 0) {
                        second = '0';
                        document.querySelector('#second').innerHTML = second;
                    }
                    if (shour.value && sminute.value && ssecond.value === '0') {
                        set.disabled = true;
                    }
            
            
                    shour.value = '';
                    sminute.value = '';
                    ssecond.value = '';
                    set.disabled = true;
                    form.innerHTML = '';
                    tab.style.marginTop = '30%';
                    
            
            
                    function countdownh() {
                        if (hour > 0 && minute == 0 && second == 0) {
                        hour--;
                        document.querySelector('#hour').innerHTML = hour;
                        } 
                        if (hour > 9) {
                            document.querySelector('#st').innerHTML = '';
                        } else {
                            document.querySelector('#st').innerHTML = '0';
                        }
                    }
                    setInterval(countdownh, 1000)
                    
            
                    function countdownm() {
            
                        if (minute >= 0 && second == 0) {
                            minute--;
                            document.querySelector('#minute').innerHTML = minute;
                        }

                        if (minute == -1 && hour >= 0 && second == 0) {
                            minute = 59;
                            document.querySelector('#minute').innerHTML = minute
                        }
            
                        
                        if (minute > 9) {
                            document.querySelector('#nd').innerHTML = ':';
                        } else {
                            document.querySelector('#nd').innerHTML = ':0';
                        }
                        
                    }
                    let mino = setInterval(countdownm, 1000)
                    
            
                    function countdowns() {
                        if (second > -1) {
                        second--;
                        document.querySelector('#second').innerHTML = second;
                        }
                        if (minute >= 0 && second == -1) {
                            second = 59;
                            document.querySelector('#second').innerHTML = second;
                        }
                        if (hour >= 0 && second == -1) {
                            second = 59;
                            document.querySelector('#second').innerHTML = second;
                        }
                    
                        if (second > 9) {
                            document.querySelector('#rd').innerHTML = ':';
                        } else {
                            document.querySelector('#rd').innerHTML = ':0';
                        }
                    }
                        
                    
                    let j = setInterval(countdowns, 1000) ;
                    function seco() {
                        if (minute <= 0 && hour <= 0 && second === 0) {
                            clearInterval(j)
                            clearInterval(mino)
                        }
            
                    }
                    setInterval(seco, 1000)
            
                    function up() {
                        if (hour <= 0 && minute <= 0 && second <= 0) {

                            text.innerHTML = 'TIME IS UP!';
                            document.body.appendChild(text)
                            text.style.color = 'red';
                            text.style.fontSize = '35%';
                            tab.style.marginTop = '0px'
                            let btn = document.createElement('button');
                            btn.innerHTML = 'Set a new Timer';
                            btn.style.cursor = 'pointer';
                            btn.style.fontSize = '30px';
                            btn.style.paddingLeft = '20px';
                            btn.style.paddingRight = '20px';
                            btn.style.paddingTop = '5px';
                            btn.style.paddingBottom = '5px';
                            btn.style.fontFamily = "'Times New Roman', Times, serif";
                            document.body.appendChild(btn);
                            let snd = new Audio('alarm.mp3');
                            snd.play();
                            snd.loop = true;
                            btn.onclick = function() {
                              window.location.reload()
                            }
                            onkeypress = key => {
                                if (key.code == 'Enter' || key.code == 'NumpadEnter' || key.code == 'KeyR') {
                                    window.location.reload()
                                }
                            }

                }
                }
                let k = setInterval(up, 1000)
                function tex() {
                    if(text.innerHTML == 'TIME IS UP!') {
                        clearInterval(k)
                    }
                }
                setInterval(tex, 1000)
                clearInterval(tex, 1000)
            
                    return false;
                
                }
            
            
            })
