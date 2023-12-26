document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from the mock API
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(productData => {
            // Populate product details dynamically
            const productContainer = document.getElementById('product-container');
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <h2>${productData.title}</h2>
                <p>${productData.body}</p>
            `;
            productContainer.appendChild(productCard);
        })
        .catch(error => console.error('Error fetching product data:', error));

        
});
