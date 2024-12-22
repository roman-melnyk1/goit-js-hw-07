const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const galleryEl = document.querySelector('.gallery');
galleryEl.style.display = 'flex';
galleryEl.style.flexWrap = 'wrap'; 
galleryEl.style.gap = '24px';
galleryEl.style.listStyle = 'none';

galleryEl.insertAdjacentHTML(
  'beforeend',
  images
    .map(
      ({ url, alt }) =>
        `<li style="flex-basis: calc(33.333% - 24px); box-sizing: border-box;">
           <img src="${url}" alt="${alt}" style="max-width: 360px; min-height: 300px; display: flex; border-radius: 5%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
         </li>`
    )
    .join('')
);