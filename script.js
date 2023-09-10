// Define an array of image URLs
const imageUrls = [
    'thulasi.jpeg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs here
];

// Function to create image elements and append them to the gallery
function createImageElements() {
    const gallery = document.getElementById('imageGallery');

    imageUrls.forEach((imageUrl) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Gallery Image';
        gallery.appendChild(img);
    });
}

// Call the function to create image elements when the page loads
window.addEventListener('load', createImageElements);
