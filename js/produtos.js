document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const searchInput = document.querySelector('#search');
    const searchIcon = document.querySelector('#search-container .icon');

    // Produtos definidos globalmente
    const products = window.PRODUCTS || [];

    function renderProducts(filteredProducts) {
        container.innerHTML = ''; // Limpa os produtos atuais
        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';

            if (product.img) {
                const img = document.createElement('img');
                img.src = product.img;
                img.alt = product.title;
                card.appendChild(img);
            } else if (product.video) {
                const video = document.createElement('video');
                video.src = product.video;
                video.autoplay = true;
                video.loop = true;
                video.muted = true; // Mudo por padrão
                video.controls = false;
                video.className = 'video';
                card.appendChild(video);
            }

            const h2 = document.createElement('h2');
            h2.textContent = product.title;

            const a = document.createElement('a');
            a.href = product.link;
            a.textContent = 'Ver mais';

            card.appendChild(h2);
            card.appendChild(a);

            container.appendChild(card);
        });
    }

    function filterProducts() {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(query) || 
            (product.code && product.code.toLowerCase().includes(query))
        );
        renderProducts(filteredProducts);
    }

    searchInput.addEventListener('input', filterProducts);
    searchIcon.addEventListener('click', filterProducts);

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterProducts();
        }
    });

    renderProducts(products);
});
