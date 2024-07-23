document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const products = [
        { title: 'Kit com 12 lápis labiais', img: './img/kit_lapis_labial_12.png', link: 'https://s.shopee.com.br/7AJOMkB370' },
        { title: 'Caneta Delineadora Prática', img: './img/caneta_delineadora.jpg', link: 'https://s.shopee.com.br/A9wzsn2Kg5' },
        { title: 'Kit de Banho Maravilhoso de Melância', img: './img/kit_melancia.jpg', link: 'https://s.shopee.com.br/5AYJw3NsHI' },
        { title: 'Conjunto 2 Peças Gloss e Lápis Labial Efeito Matte', img: './img/kit_batom_mate.jpg', link: 'https://s.shopee.com.br/7fFeun1RP3' },
        { title: 'Escova Secadora', img: './img/escova_secadora.jpg', link: 'https://s.shopee.com.br/B9e7mzVib' },
        { title: 'Creme de Hidratação Power', img: './img/creme_cabelo.jpg', link: 'https://s.shopee.com.br/40MMgtn5BU' },
        { title: 'Touca de Setim', img: './img/touca_setim.jpg', link: 'https://s.shopee.com.br/VmUWViDNh' },
        { title: 'Óleo de Nutrição Para Cachos ', img: './img/Oleo_pontas.jpg', link: 'https://s.shopee.com.br/9KNt2m0uXY' },
        { title: 'Gel Para Modelar Sobrancelas', img: './img/gel_sobrancelha.jpg', link: 'https://s.shopee.com.br/5po0sPlojH' },
        { title: 'Base de Alta Cobertura Boca Rosa', img: './img/base_bocaRosa.jpg', link: 'https://s.shopee.com.br/5AYK5E0CEv' },
        { title: 'Esfoliante Corpo e Rosto', img: './img/esfoliante.jpg', link: 'https://s.shopee.com.br/5KrkHZXx4O' },
        { title: 'Blush Iluminador e Contorno 3 em 1', img: './img/blush_iluminador_contorno.jpg', link: 'https://s.shopee.com.br/VmUWjKtMf' },
       
    ];

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = product.img;
        img.alt = product.title;

        const h2 = document.createElement('h2');
        h2.textContent = product.title;

        const a = document.createElement('a');
        a.href = product.link;
        a.textContent = 'Ver mais';

        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(a);

        container.appendChild(card);
    });
});
