const categoriesUl = document.querySelector('#categories');
const itemsLi = categoriesUl.querySelectorAll('.item');

console.log(`Number of categories: ${itemsLi.length}`);

itemsLi.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul li').length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
})