'use strict';

const container = document.querySelector('.wall');

container.style.position = 'relative';

const spider = document.querySelector('.spider');

const width = (container.clientWidth - spider.clientWidth) / 2;
const height = (container.clientHeight - spider.clientHeight) / 2;

spider.style.transform = `translateX(${width}px) translateY(${height}px)`;
