import React, { useEffect } from 'https://esm.sh/react@18';
import Splitting from 'https://esm.sh/splitting@1.1.0';
import { gsap } from 'https://esm.sh/gsap@3.12.5';
import { ScrollTrigger } from 'https://esm.sh/gsap@3.12.5/ScrollTrigger';
import { portfolioMarkup } from './markup.js';

gsap.registerPlugin(ScrollTrigger);

const animatedIds = [
  'recentWorkTitle',
  'responsive_section_text',
  'headerText',
  'heyHeader',
  'Experience_title',
  'getInTouch_title'
];

export default function App() {
  useEffect(() => {
    animatedIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) Splitting({ target: element, by: 'chars' });
    });

    const slideDown = () => {
      const scroll = window.scrollY;
      animatedIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const targetOffset = element.offsetTop - element.offsetHeight;
        element.classList.toggle('animation', scroll >= targetOffset);
      });
    };

    let timeoutId;
    const onScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(slideDown, 100);
    };

    window.addEventListener('scroll', onScroll);

    const buttons = document.querySelectorAll('.btn');
    const onHover = (event) => event.currentTarget.classList.toggle('animate__animated');
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', onHover);
      button.addEventListener('mouseleave', onHover);
    });

    const preloader = document.querySelector('.spinner-wrapper');
    setTimeout(() => {
      if (preloader) {
        preloader.style.transition = 'opacity 500ms ease';
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }
    }, 100);

    const floatingItems = document.querySelectorAll('.floatingItem');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle('float', entry.isIntersecting)),
      { threshold: 0.1 }
    );

    floatingItems.forEach((item) => observer.observe(item));

    gsap.to('.imgToTop', {
      y: '-8vh',
      duration: 10,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: '.imgToTop',
        scrub: 2,
        start: 'center center',
        end: 'top top'
      }
    });

    gsap.to('.imgToBottom', {
      y: '10vh',
      duration: 10,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: '.imgToBottom',
        scrub: 2,
        start: 'center center',
        end: 'top top'
      }
    });

    slideDown();

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', onHover);
        button.removeEventListener('mouseleave', onHover);
      });
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return React.createElement('div', { dangerouslySetInnerHTML: { __html: portfolioMarkup } });
}
