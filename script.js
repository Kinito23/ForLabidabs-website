const contentbody = document.querySelector(".content-body");
const parent = document.querySelector(".parent");
const child1 = document.querySelector(".child1");
const child2 = document.querySelector(".child2");

const contentbodyRect = contentbody.getBoundingClientRect();
const child2Rect = child2.getBoundingClientRect();

child1.addEventListener('click', () => {
    parent.innerHTML = "YEHEY! LET'S DO IT 12NN ONWARDS AFTER CLASS, I'LL WAIT FOR YOU. ;)";
    child2.innerHTML = ""
});
child2.addEventListener('click', () => {
        parent.innerHTML = "YEHEY! LET'S DO IT 12NN ONWARDS AFTER CLASS, I'LL WAIT FOR YOU. ;)"
        child2.innerHTML = "YES";
        child1.innerHTML = "";
});
child2.addEventListener('click', () => {
    parent.innerHTML = "YEHEY! LET'S DO IT 12NN ONWARDS AFTER CLASS, I'LL WAIT FOR YOU. ;)";
});

child2.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (contentbodyRect.width 
    - child2Rect.width)) + 1;
    const j = Math.floor(Math.random() * (contentbodyRect.
    height  - child2Rect.height)) + 1;

    child2.computedStyleMap.left = i + 'px';
    child2.computedStyleMap.top = j + 'px';
});