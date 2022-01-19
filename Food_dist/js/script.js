window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // TABS ------------------------------------------------->

    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }


    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (e.target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // TIMER ---------------------------------------------------->

    const deadline = '2022-02-10';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - new Date();
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor(t / (1000 * 60)) % 60;
        const seconds = Math.floor(t / 1000) % 60;

        return {
            total: t,
            days,
            hours,
            minutes,
            seconds
        };
    }


    function getZero(num) {
        return num >= 0 && num < 10 ? `0${num}` : num;
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = document.querySelector('#days');
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);


        updateClock();


        function updateClock() {
            const t = getTimeRemaining(endtime);


            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadline);


    // MODAL 

    // my solution <----------------------------------------------------

    // const btns = document.querySelectorAll('button');
    // const modal = document.querySelector('.modal');

    // btns.forEach(btn => {
    //     btn.addEventListener('click', (e) => {
    //         if (e.target.hasAttribute('data-modal')) {
    //             modal.style.display = 'block';
    //         }
    //     });
    // });

    // modal.addEventListener('click', (e) => {
    //     if (e.target.hasAttribute('data-close')) {
    //         modal.style.display = 'none';
    //     }
    // });

    //------------------------------------------------------------------>

    const btnsModal = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const closeModalBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        clearTimeout(modalTimerId);
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    btnsModal.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === closeModalBtn || e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal();
        }
    });

    function openModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', openModalByScroll);
        }
    }

    window.addEventListener('scroll', openModalByScroll);

    const modalTimerId = setTimeout(openModal, 5000);


});