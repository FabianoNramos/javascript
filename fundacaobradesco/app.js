'use strict'
const switcher = document.querySelector('.botao')
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    var classname = document.body.classname;
    if (classname == 'light-theme') {
        this.textcontent - 'dark';
    }

    else {
        this.textcontent = 'light';

    }

    console.log('current classname: ' + classname);
});

