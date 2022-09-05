export const generateImages = () => {
  let images = [];

  for (let i = 0; i <= 20; i++) {
    images.push(`https://picsum.photos/id/${i}/400/400`);
  }

  return images;
};
