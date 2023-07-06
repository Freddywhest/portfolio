
const social = document.querySelector('.social-title');

social.addEventListener('click', () => {
    const socialContainer =  document.querySelector('.social-media');
    if(socialContainer.style.width == '35vh'){
        social.innerText = ' Social media handles'
        socialContainer.style.width = '3vh'
    }else{
        socialContainer.style.width = '35vh'
        social.innerText = 'click to close'
    }
})

const menu2 = document.getElementById('full-menu');
window.addEventListener('scroll', ()=>{
    console.log('yes');
    var scrollTimer = -1;

    document.getElementById('scroll').innerHTML = "::-webkit-scrollbar-thumb{background-color: rgb(133, 133, 133)!important}";

      if (scrollTimer != -1)
        clearTimeout(scrollTimer);
   
      scrollTimer = window.setTimeout(scrollFinished, 800);

    function scrollFinished() {
        document.getElementById('scroll').innerHTML = "::-webkit-scrollbar-thumb{background-color: transparent!important}";
    }
})


const menuButton = document.getElementById('mb-menu');
const menuButton2 = document.getElementById('mb-menu2');
const mainBlur = document.getElementById('blur');
const menu = document.getElementById('full-menu');
menuButton.addEventListener('click', () => {
    menu.classList.toggle('open')
    mainBlur.classList.toggle('blur2')
})

menuButton2.addEventListener('click', () => {
    menu.classList.toggle('open')
    mainBlur.classList.toggle('blur2')
})

document.getElementById('main').addEventListener('click', () => {
    if(menu.classList.contains('open') && mainBlur.classList.contains('blur2')){
        menu.classList.remove('open')
        mainBlur.classList.remove('blur2')
    }else if(menu.classList.contains('open')){
        menu.classList.remove('open')
    }else if(mainBlur.classList.contains('blur2')){
        mainBlur.classList.remove('blur2')
    }
})

document.getElementById('main2').addEventListener('click', () => {
    if(menu.classList.contains('open') && mainBlur.classList.contains('blur2')){
        menu.classList.remove('open')
        mainBlur.classList.remove('blur2')
    }else if(menu.classList.contains('open')){
        menu.classList.remove('open')
    }else if(mainBlur.classList.contains('blur2')){
        mainBlur.classList.remove('blur2')
    }
})

if (!localStorage.getItem('theme') || localStorage.getItem('theme') == '') {
    localStorage.setItem('theme', 'light-bg')
}

document.getElementById('theme-body').classList.add(localStorage.getItem('theme'))
themeIcon = document.getElementById("theme-button")
const theme = () => {
    if(menu.classList.contains('open') && mainBlur.classList.contains('blur2')){
        menu.classList.remove('open')
        mainBlur.classList.remove('blur2')
    }else if(menu.classList.contains('open')){
        menu.classList.remove('open')
    }else if(mainBlur.classList.contains('blur2')){
        mainBlur.classList.remove('blur2')
    }
    const currentTheme = localStorage.getItem('theme')
    document.getElementById('theme-body').classList.remove(localStorage.getItem('theme'))
    if (currentTheme == 'dark-bg') {
        localStorage.setItem('theme', 'light-bg')
    } else if (currentTheme == 'light-bg') {
        localStorage.setItem('theme', 'dark-bg')
    } else {
        localStorage.setItem('theme', 'dark-bg')
    }
    document.getElementById('theme-body').classList.add(localStorage.getItem('theme'))


    if (localStorage.getItem('theme') == 'dark-bg') {
        themeIcon.innerHTML = '<i class="fa-solid fa-sun fa-spin""></i>'
    } else {
        themeIcon.innerHTML = '<i class="fa-solid fa-moon fa-bounce""></i>'
    }
}
document.getElementById('theme-button').addEventListener('click', theme)

if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') == 'dark-bg') {
            themeIcon.innerHTML = '<i class="fa-solid fa-sun fa-spin""></i>'
    } else {
        themeIcon.innerHTML = '<i class="fa-solid fa-moon fa-bounce""></i>'
    }
}else{
    themeIcon.innerHTML = '<i class="fa-solid fa-moon fa-bounce""></i>'
}


const ss = document.querySelectorAll('.skill-name')
const load = document.querySelectorAll('.load')
const skill = document.querySelectorAll('.skill-pen')
const color = document.querySelectorAll('.color')
if(ss){
    for (let i = 0; i < ss.length; i++) {
        
        ss[i].style.width = load[i].innerText;
        load[i].style.width = load[i].innerText;
        skill[i].innerText = load[i].innerText;
        load[i].style.background = color[i].innerText;
        skill[i].style.color = color[i].innerText;
        
    }
}

const mm = document.querySelectorAll('.portfolio');
const nn = document.querySelectorAll('.portfolio-content');
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    for (let i = 0; i < mm.length; i++) {
        nn[i].style.display = 'block'
    }
} else {
    if (document.querySelectorAll('.portfolio')) {
        for (let i = 0; i < mm.length; i++) {
            mm[i].addEventListener('mouseover', (e) => {
                nn[i].style.display = 'block'
            })
        }

        for (let i = 0; i < mm.length; i++) {
            mm[i].addEventListener('mouseout', () => {
                nn[i].style.display = 'none'
            })
        }
    }
}
window.onload = () => {
    if (!localStorage.getItem('voice-text')) {
    } else if (localStorage.getItem('voice-text') == 'listen') {
        document.getElementById('voice-text').style.display = 'none'
        localStorage.setItem('voice-text', 'none')
    } else {
        document.getElementById('voice-text').style.display = 'none'
    }

   if (!localStorage.getItem('banner')) {
        document.querySelector('main').style.filter = 'blur(8px)'
        document.querySelector('nav').style.filter = 'blur(8px)'
        document.getElementById('banner').style.display = 'block'
    } else if (localStorage.getItem('banner') == 'display') {
        document.querySelector('main').style.filter = 'blur(8px)'
        document.querySelector('nav').style.filter = 'blur(8px)'
        document.getElementById('banner').style.display = 'block'

    }
}
if (!localStorage.getItem('banner')) {
    document.querySelector('main').style.filter = 'blur(8px)';
    document.querySelector('nav').style.filter = 'blur(8px)';
    document.getElementById('banner').style.display = 'block';
    document.querySelector('.blur').style.filter = 'blur(8px)';
    document.getElementById('voice-banner2').style.display = 'none';
    !localStorage.getItem('banner') ? localStorage.setItem('banner', 'display') : '';
}


document.querySelector('.close-banner').addEventListener('click', () => {
    localStorage.setItem('banner', 'none')
    document.getElementById('banner').style.display = 'none'
    document.querySelector('main').style.filter = 'none'
    document.querySelector('nav').style.filter = 'none'
    document.querySelector('.blur').style.filter = 'none'
    if (!localStorage.getItem('voice-text')) {
        document.getElementById('voice-text').style.display = 'block'
        document.getElementById('txt-area').innerHTML = `<p class="voice-txt" id="txt"> 
            If you need help with the commands, click the button below to show the commands
            <br /> <br /><button style="cursor: pointer;" onClick="showBanner()">Show commands</button>
        </p>`
    }
})



const showBanner = () => {
    localStorage.setItem('banner', 'display')
    document.querySelector('main').style.filter = 'blur(8px)'
    document.querySelector('nav').style.filter = 'blur(8px)'
    document.getElementById('banner').style.display = 'block'
    document.querySelector('.blur').style.filter = 'blur(8px)'
    document.getElementById('voice-banner2').style.display = 'none'
    localStorage.setItem('voice-text', 'none')
    document.getElementById('voice-text').style.display = 'none'
}

if (!localStorage.getItem('voice-text')) {
    document.getElementById('voice-text').style.display = 'block'
    document.getElementById('txt-area').innerHTML = `<p class="voice-txt" id="txt"> 
    If you need help with the commands, click the button below to show the commands
    <br /> <br /><button style="cursor: pointer;" onClick="showBanner()">Show commands</button>
</p>`
}

if (localStorage.getItem('voice-text') == 'listen') {
    localStorage.setItem('voice-text', 'none')
}




/* =============================Speech========================= */

const content = document.querySelector('#u-said');
const content2 = document.querySelector('#i-said');

const detectSpeacking = (text) => {
    text.addEventListener('start', () => {
        if (!localStorage.getItem('banner')) {
            document.getElementById('voice-banner2').style.display = 'none'
        } else {
            document.getElementById('voice-banner2').style.display = 'block'
            document.getElementById('voice-text').style.display = 'none'
            localStorage.setItem('voice-text', 'none')
            localStorage.setItem('banner2', 'display')
            document.querySelector('main').style.filter = 'blur(8px)'
            document.querySelector('nav').style.filter = 'blur(8px)'
        }
    })

    text.addEventListener('end', () => {
        if (!localStorage.getItem('banner')) {
            document.querySelector('main').style.filter = 'blur(8px)'
            document.querySelector('nav').style.filter = 'blur(8px)'
        } else {
            console.log('done speaking');
            document.getElementById('voice-banner2').style.display = 'none'
            localStorage.setItem('banner2', 'none')
            document.querySelector('main').style.filter = 'none'
            document.querySelector('nav').style.filter = 'none'
        }

    })



}



function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
    detectSpeacking(text_speak)

}

function speakToMe(sentence) {
    var voices = window.speechSynthesis.getVoices();
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.default = false;
    text_speak.voice = voices.filter(function(voice) { return voice.name == 'Google US English'; })[0];
    text_speak.lang = 'en-US'; //Also added as for some reason android devices used for testing loaded spanish language 
    

    text_speak.rate = 1;
    text_speak.pitch = 2;
    window.speechSynthesis.speak(text_speak);

}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if (hr >= 0 && hr < 12) {
        speakToMe("Good Morning");
    }

    else if (hr == 12) {
        speakToMe("Good noon");
    }

    else if (hr > 12 && hr <= 17) {
        speakToMe("Good Afternoon");
    }

    else {
        speakToMe("Good Evening");
    }
}

	
    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    document.getElementById('voice-close').addEventListener('click', () => {
        localStorage.setItem('voice-text', 'none')
        document.getElementById('voice-text').style.display = 'none'
        document.querySelector('main').style.filter = 'none'
        document.querySelector('nav').style.filter = 'none'
        recognition.stop()
    })
    

let test1 = function (regexp) { return regexp.test(window.navigator.userAgent) }
navigator.getUserMedia = navigator.getUserMedia ||
                 navigator.webkitGetUserMedia ||
                 navigator.mozGetUserMedia;
if (/Android/i.test(navigator.userAgent) && test1(/chrome|chromium/i) || test1(/chrome|chromium/i)) {





    recognition.onaudioend = () => {
        document.getElementById('voice-text').style.display = 'none'
        localStorage.setItem('voice-text', 'none')
        speak(" ");
    }

    recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        content.textContent = transcript;
        document.querySelector('main').style.filter = 'blur(8px)'
        speakThis(transcript.toLowerCase());
    }

    document.getElementById('voice-button').addEventListener('click', (e) => {
        if(menu.classList.contains('open') && mainBlur.classList.contains('blur2')){
            menu.classList.remove('open')
            mainBlur.classList.remove('blur2')
        }else if(menu.classList.contains('open')){
            menu.classList.remove('open')
        }else if(mainBlur.classList.contains('blur2')){
            mainBlur.classList.remove('blur2')
        }
        e.preventDefault()
        if (localStorage.getItem('voice-text') == 'listen') {
            localStorage.setItem('voice-text', 'none')
            document.querySelector('main').style.filter = 'none'
            document.querySelector('nav').style.filter = 'none'
            document.getElementById('voice-text').style.display = 'none'
            recognition.stop()
        } else {

            if (navigator.getUserMedia) {
                navigator.getUserMedia({ audio: true},
                function() {
                    document.getElementById('xyz').play();

                    document.getElementById('xyz').onended = () => {
                        recognition.start()
                    };
                    document.getElementById('voice-text').style.display = 'block'
                    document.getElementById('txt-area').innerHTML = '<p class="voice-txt" style="filer: none" id="txt">Listening..... <br /> <br>Say <b> help </b> to show the commands  <br /> <img src="assets/img/listening.gif" style="margin-left: 20px;" width="70%" alt=""></p>'
                    document.querySelector('main').style.filter = 'blur(8px)'
                    document.querySelector('nav').style.filter = 'blur(8px)'

                    localStorage.setItem('voice-text', 'listen')
                },
                function(err) {
                   if(err.name == 'NotFoundError'){
                        document.getElementById('error').style.display = 'block'

                        setTimeout(() => {
                            document.getElementById('error').style.display = 'none'
                        },3000)
                        document.getElementById('banner').style.display = 'block'
                        document.querySelector('.speaking-text').innerHTML = `<h3 style="color:rgb(197, 52, 52)">ERROR:</h3>
                        <p>The following error occurred when trying to access Rob Voice Assistant: <br><br /><span style="color:rgb(197, 52, 52)">Microphone device not found!</span></p><br />
                        <p>Try accessing Rob Voice Assistant on a device with a Microphone(e.g Laptop, phone or tablet) or if you are using a desktop computer, try inserting a microphone to your device.</p>
                        `
                        document.querySelector('main').style.filter = 'blur(8px)'
                        document.querySelector('nav').style.filter = 'blur(8px)'
                    }else if(err.name == 'NotAllowedError'){
                        document.getElementById('error').style.display = 'block'

                        setTimeout(() => {
                            document.getElementById('error').style.display = 'none'
                        },3000)
                        document.getElementById('banner').style.display = 'block'
                        document.querySelector('.speaking-text').innerHTML = `<h3 style="color:rgb(197, 52, 52)">ERROR:</h3>
                        <p>The following error occurred when trying to access Rob Voice Assistant: <br><br /><span style="color:rgb(197, 52, 52)">Microphone permission denied!</span></p><br />
                        <p>If you need help with allowing microphone permission, click <a href="https://www.youtube.com/watch?v=jPdt6ENaj0E&t=126s">here</a>.</p>
                        `
                        document.querySelector('main').style.filter = 'blur(8px)'
                        document.querySelector('nav').style.filter = 'blur(8px)'
                    }else{
                        document.getElementById('error').style.display = 'block'

                        setTimeout(() => {
                            document.getElementById('error').style.display = 'none'
                        },3000)
                        document.getElementById('banner').style.display = 'block'
                        document.querySelector('.speaking-text').innerHTML = `<h3 style="color:rgb(197, 52, 52)">ERROR:</h3>
                        <p>The following error occurred when trying to access Rob Voice Assistant: <br><br /><span style="color:rgb(197, 52, 52)">Unknown Error!</span></p><br />
                        <p>Restart your browser and try again. If it's not fixed, click <a href="/contact">here to contact us</a></p>
                        `
                        document.querySelector('main').style.filter = 'blur(8px)'
                        document.querySelector('nav').style.filter = 'blur(8px)'
                    }
                }
            );
            } else {
                document.getElementById('error').style.display = 'block'

                setTimeout(() => {
                    document.getElementById('error').style.display = 'none'
                },3000)
                document.getElementById('banner').style.display = 'block'
                document.querySelector('.speaking-text').innerHTML = `<h3 style="color:rgb(197, 52, 52)">ERROR:</h3>
                <p>The following error occurred when trying to access Rob Voice Assistant: <br><br /><span style="color:rgb(197, 52, 52)">Not supported!</span></p><br />
                <p>Try using another browser(Google Chrome Browser recomended) or device</a></p>
                `
                document.querySelector('main').style.filter = 'blur(8px)'
                document.querySelector('nav').style.filter = 'blur(8px)'
            }
            
        }

    })


    function speakThis(message) {
        const speech = new SpeechSynthesisUtterance(message);
        detectSpeacking(speech)
        speech.text = "I did not understand what you said please try again";

        if (message.includes('hey') || message.includes('hello')) {
            const finalText = "Hello Boss, how may I help you";
            speech.text = finalText;
            content2.textContent = finalText;
            speech.addEventListener('end', () => {
                setTimeout(() => {
                    document.getElementById('xyz').play();

                    document.getElementById('xyz').onended = () => {
                        recognition.start()
                    };
                    document.getElementById('voice-text').style.display = 'block'
                    document.getElementById('txt-area').innerHTML = '<p class="voice-txt" style="filer: none" id="txt">Listening..... <br /> <br>Say <b> help </b> to show the commands  <br /> <img src="assets/img/listening.gif" style="margin-left: 20px;" width="70%" alt=""></p>'
                    document.querySelector('main').style.filter = 'blur(8px)'
                    document.querySelector('nav').style.filter = 'blur(8px)'

                    localStorage.setItem('voice-text', 'listen')
                }, 200)

            })
        }

        else if (message.includes('how are you') || message.includes('how are you doing')) {
            const finalText = "I feel good, thanks for asking";
            speech.text = finalText;
            content2.textContent = finalText;

        }

        else if (message.includes('good') || message.includes('fine')) {
            const finalText = "We thank God";
            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('time') || message.includes('what is the time')) {
            const finalText = "The time is " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('date') || message.includes('what is the date')) {
            const finalText = "Today's date is " + (new Date()).toString().split(' ').splice(1, 3).join(' ');
            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('about alfred')  || message.includes('Alfred')) {
            const finalText = "Alfred is a programmer who is expert in HTML, CSS, JAVASCRIPT, PHP, REACT JS, EXPRESS JS and My SQL. Read more about him by going to about";
            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('tell me about Rob') || message.includes('Rob')) {
            const finalText = "My name is Rob, your voice assistant. I am here to help you";
            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('go to about') || message.includes('go about') || message.includes('about page')) {
            const finalText = "Going to about";
            setTimeout(() => {
                window.location.href = '/about'
            }, 2000)

            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('go to portfolio') || message.includes('portfolio') || message.includes('portfolios')) {
            const finalText = "Going to portfolio";

            setTimeout(() => {
                window.location.href = '/portfolio'
            }, 2000)

            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('help') || message.includes('command') || message.includes('commands')) {
            const finalText = "Showing commands";
            speech.addEventListener('end', () => {
                setTimeout(() => {
                    localStorage.setItem('banner', 'display')
                    document.querySelector('main').style.filter = 'blur(8px)'
                    document.querySelector('nav').style.filter = 'blur(8px)'
                    document.getElementById('banner').style.display = 'block'
                    document.querySelector('.blur').style.filter = 'blur(8px)'
                }, 250)
            })

            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('go to contact') || message.includes('contact') || message.includes('contacts')) {
            const finalText = "Going to contact";
            setTimeout(() => {
                window.location.href = '/contact'
            }, 2000)

            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('go to blogs') || message.includes('go to blog') || message.includes('blogs') || message.includes('blog')) {
            const finalText = "Going to blogs";
            setTimeout(() => {
                window.location.href = '/blogs'
            }, 2000)

            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('go to home') || message.includes('home')) {
            const finalText = "Going to home";
            setTimeout(() => {
                window.location.href = '/'
            }, 2000)

            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('change theme') || message.includes('change')) {
            const finalText = "Which theme do you want?";
            speech.addEventListener('end', () => {
                setTimeout(() => {
                    document.getElementById('xyz').play();

                    document.getElementById('xyz').onended = () => {
                        recognition.start()
                    };
                    document.getElementById('voice-text').style.display = 'block'
                    document.getElementById('txt-area').innerHTML = '<p class="voice-txt" style="filer: none" id="txt">Listening..... <br /> <br>Say <b> help </b> to show the commands  <br /> <img src="assets/img/listening.gif" style="margin-left: 20px;" width="70%" alt=""></p>'
                    document.querySelector('main').style.filter = 'blur(8px)'
                    document.querySelector('nav').style.filter = 'blur(8px)'

                    localStorage.setItem('voice-text', 'listen')
                }, 250)

            })
            speech.text = finalText;
            content2.textContent = finalText;
        }

        else if (message.includes('dark') || message.includes('black')) {

            const currentTheme = localStorage.getItem('theme')
            if (currentTheme == 'dark-bg') {
                let finalText = "The theme is already selected. Choose another";
                speech.text = finalText;
                content2.textContent = finalText;
                speech.addEventListener('end', () => {
                    setTimeout(() => {
                        document.getElementById('xyz').play();

                        document.getElementById('xyz').onended = () => {
                            recognition.start()
                        };
                        document.getElementById('voice-text').style.display = 'block'
                        document.getElementById('txt-area').innerHTML = '<p class="voice-txt" style="filer: none" id="txt">Listening..... <br /> <br>Say <b> help </b> to show the commands  <br /> <img src="assets/img/listening.gif" style="margin-left: 20px;" width="70%" alt=""></p>'
                        document.querySelector('main').style.filter = 'blur(8px)'
                        document.querySelector('nav').style.filter = 'blur(8px)'

                        localStorage.setItem('voice-text', 'listen')
                    }, 250)

                })
            } else {
                let finalText = "Changing theme to dark theme";
                speech.text = finalText;
                localStorage.setItem('theme', 'dark-bg')
                document.getElementById('theme-body').classList.remove('light-bg')
                content2.textContent = finalText;
                setTimeout(() => {
                    document.getElementById('theme-body').classList.add(localStorage.getItem('theme'))
                    themeIcon.innerHTML = '<i class="fa-solid fa-sun fa-spin""></i>'

                }, 250)
            }
        }


        else if (message.includes('light') || message.includes('white')) {

            const currentTheme = localStorage.getItem('theme')
            if (currentTheme == 'light-bg') {
                let finalText = "The theme is already selected. Choose another";
                speech.text = finalText;
                content2.textContent = finalText;
                speech.addEventListener('end', () => {
                    setTimeout(() => {
                        document.getElementById('xyz').play();

                        document.getElementById('xyz').onended = () => {
                            recognition.start()
                        };
                        document.getElementById('voice-text').style.display = 'block'
                        document.getElementById('txt-area').innerHTML = '<p class="voice-txt" style="filer: none" id="txt">Listening..... <br /> <br>Say <b> help </b> to show the commands  <br /> <img src="assets/img/listening.gif" style="margin-left: 20px;" width="70%" alt=""></p>'
                        document.querySelector('main').style.filter = 'blur(8px)'
                        document.querySelector('nav').style.filter = 'blur(8px)'

                        localStorage.setItem('voice-text', 'listen')
                    }, 200)

                })
            } else {
                let finalText = "Changing theme to light theme";
                speech.text = finalText;
                localStorage.setItem('theme', 'light-bg')
                document.getElementById('theme-body').classList.remove('dark-bg')
                content2.textContent = finalText;
            }
            setTimeout(() => {
                document.getElementById('theme-body').classList.add(localStorage.getItem('theme'))
                themeIcon.innerHTML = '<i class="fa-solid fa-moon fa-bounce""></i>'
            }, 200)
        }


        else {
            const finalText = "I did not understand what you said please try again";
            speech.text = finalText;
            content2.textContent = finalText;
            speech.addEventListener('end', () => {
                setTimeout(() => {
                    document.getElementById('xyz').play();

                    document.getElementById('xyz').onended = () => {
                        recognition.start()
                    };
                    document.getElementById('voice-text').style.display = 'block'
                    document.getElementById('txt-area').innerHTML = '<p class="voice-txt" style="filer: none" id="txt">Listening..... <br /> <br>Say <b> help </b> to show the commands  <br /> <img src="assets/img/listening.gif" style="margin-left: 20px;" width="70%" alt=""></p>'
                    document.querySelector('main').style.filter = 'blur(8px)'
                    document.querySelector('nav').style.filter = 'blur(8px)'

                    localStorage.setItem('voice-text', 'listen')
                }, 200)

            })
        }

        speech.volume = 1;
        speech.pitch = 1;
        speech.rate = 1;

        window.speechSynthesis.speak(speech);
    }

} else if (test1(/crios/i)) {
    document.getElementById('voice-button').addEventListener('click', () => {
        document.getElementById('error').style.display = 'block'

        setTimeout(() => {
            document.getElementById('error').style.display = 'none'
        },3000)
        document.getElementById('banner').style.display = 'block'
        document.querySelector('.speaking-text').innerHTML = `<p> Rob Voice Assistant beta version is only supported on the following browsers</p>
        <br /><ol>
            <li>Google Chrome Browser for Android</li>
            <li> Google Chrome Browser for Windows and Mac</li>
            <li> Microsoft Edge Browser for Windows</li>
        </ol>
        <p>I am sorry &#128542; your browser doesn't support Rob Voice Assistant beta version &#128542;</p><br />
        <p>👉 Don't worry, the next version of Rob Voice Assistant will support the following browsers &#128522;</p>
        <br /><ol>
            <li>Google Chrome Browser for iPhone</li>
            <li> Safari Browser for Mac and iPhone</li>
        </ol>
        `
        document.querySelector('main').style.filter = 'blur(8px)'
        document.querySelector('nav').style.filter = 'blur(8px)'

    })
/* } else if (test1(/chrome|chromium/i)) {
    document.getElementById('voice-button').addEventListener('click', () => {
        document.getElementById('error').style.display = 'block'

        setTimeout(() => {
            document.getElementById('error').style.display = 'none'
        },3000)
        document.getElementById('banner').style.display = 'block'
        document.querySelector('.speaking-text').innerHTML = `<p>Rob version 1.0.0 is only support in the following browsers</p>
        <br /><ol>
            <li>Google Chrome Browser for Android</li>
            <li> Google Chrome Browser for Windows Or Mac</li>
            <li> Safari Browser for Mac</li>
            <li> Microsoft Edge Browser for Windows</li>
        </ol>
        `
        document.querySelector('main').style.filter = 'blur(8px)'
        document.querySelector('nav').style.filter = 'blur(8px)'

    }) */
}else{
    document.getElementById('voice-button').addEventListener('click', () => {
        document.getElementById('error').style.display = 'block'

        setTimeout(() => {
            document.getElementById('error').style.display = 'none'
        },3000)
        document.getElementById('banner').style.display = 'block'
        document.querySelector('.speaking-text').innerHTML = `<p> Rob Voice Assistant beta version is only supported on the following browsers</p>
        <br /><ol>
            <li>Google Chrome Browser for Android</li>
            <li> Google Chrome Browser for Windows and Mac</li>
            <li> Microsoft Edge Browser for Windows</li>
        </ol>
        <p>I am sorry &#128542; your browser doesn't support Rob Voice Assistant beta version &#128542;</p><br />
        <p>👉 Don't worry, the next version of Rob Voice Assistant will support the following browsers &#128522;</p>
        <br /><ol>
            <li>Google Chrome Browser for iPhone</li>
            <li> Safari Browser for Mac and iPhone</li>
        </ol>
        `
        document.querySelector('main').style.filter = 'blur(8px)'
        document.querySelector('nav').style.filter = 'blur(8px)'

    })
}

window.addEventListener('keydown', (e) => {
    if (e.code == 'ControlLeft' && e.code == 'keyC') {
        console.log(e.code);

    }
})

/* setTimeout(() => {
    document.getElementById('error').style.display = 'block'
},3000) */
if(document.getElementById('show-search')){
    document.getElementById('show-search').addEventListener('click', () => {
        document.getElementById('search').innerHTML = `
        <form id="search-form" action="${document.location}" method="GET">
        <input name="q" class="query" type="text">
        <button type="submit"><i class="fa fa-search"></i></button>
    <form>
        `
    })
}

let params = (new URL(document.location)).searchParams;
let query = params.get("q");

if(document.querySelector('.query')){
document.querySelector('.query').addEventListener('input', (e) =>{
    params.set("q", e.target.value)
})
}

if(query){
    document.getElementById('search').innerHTML = `
    <form id="search-form" method="GET">
        <input name="q" class="query" type="text">
        <button type="submit"><i class="fa fa-search"></i></button>
    <form>
    `

    document.querySelector('.query').value = query;
}


