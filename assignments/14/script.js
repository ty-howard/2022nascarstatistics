document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('myModal');
    const modalContent = document.querySelector('.modal-content');
    const modalImage = document.getElementById('modal-image');
    const modalDetails = document.getElementById('modal-details');

    // Fetch crafts data from the server
    fetch('/api/crafts')
        .then(response => response.json())
        .then(data => {
            // Generate HTML for each craft
            data.forEach(craft => {
                const craftElement = document.createElement('div');
                craftElement.classList.add('craft');
                craftElement.innerHTML = `<img src="${craft.image}" alt="${craft.name}">`;

                // Add click event listener to show modal when image is clicked
                craftElement.querySelector('img').addEventListener('click', () => {
                    modalImage.src = craft.image;
                    modalDetails.innerHTML = `<h2>${craft.name}</h2><p>${craft.description}</p>`;
                    modal.style.display = 'block';
                });

                gallery.appendChild(craftElement);
            });
        })
        .catch(error => console.error('Error fetching crafts:', error));

    // Close the modal when the close button (x) is clicked
    document.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
