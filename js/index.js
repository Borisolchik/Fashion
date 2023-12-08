var catalog = [
    {
        id: '1',
        image: '1.webp',
        product: 'Платье мини с принтом Barocco',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Одежда',
        subcategory: 'Платья',
        new: true,
        discount: true
    },
    {
        id: '2',
        image: '2.webp',
        product: 'Платье мини с логотипом',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Одежда',
        subcategory: 'Платья',
        new: true,
        discount: true
    },
    {
        id: '3',
        image: '3.webp',
        product: 'Платье мини в горох',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Одежда',
        subcategory: 'Платья',
        new: false,
        discount: false
    },
    {
        id: '4',
        image: '4.webp',
        product: 'Платье Butterflies & Ladybugs',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Одежда',
        subcategory: 'Платья',
        new: false,
        discount: false
    },
    {
        id: '5',
        image: '5.jpeg',
        product: 'Твидовая юбка мини в клетку',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Одежда',
        subcategory: 'Юбки',
        new: true,
        discount: false
    },
    {
        id: '6',
        image: '6.jpeg',
        product: 'Юбка с заниженной талией',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Одежда',
        subcategory: 'Юбки',
        new: true,
        discount: false
    },
    {
        id: '7',
        image: '7.jpeg',
        product: 'Трикотажная юбка с логотипом Allover',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Одежда',
        subcategory: 'Юбки',
        new: true,
        discount: false
    },
    {
        id: '8',
        image: '8.webp',
        product: 'Плиссированная юбка с принтом Baroque',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Одежда',
        subcategory: 'Юбки',
        new: false,
        discount: true
    },
    {
        id: '9',
        image: '9.webp',
        product: 'Лоферы Vagabond с декором Medusa',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Обувь',
        subcategory: 'Лоферы',
        new: false,
        discount: false
    },
    {
        id: '10',
        image: '10.webp',
        product: 'Сапоги Tempest',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Обувь',
        subcategory: 'Сапоги',
        new: true,
        discount: false
    },
    {
        id: '11',
        image: '11.webp',
        product: 'Сапоги с заостренным носком',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Обувь',
        subcategory: 'Сапоги',
        new: false,
        discount: false
    },
    {
        id: '12',
        image: '12.webp',
        product: 'Туфли с кристаллами',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Обувь',
        subcategory: 'Туфли',
        new: false,
        discount: false
    },
    {
        id: '13',
        image: '13.webp',
        product: 'Шарф вязки интарсия',
        brand: 'Versace',
        gender: 'Женщинам',
        category: 'Аксессуары',
        subcategory: 'Шарфы',
        new: false,
        discount: true
    },
    {
        id: '14',
        image: '14.webp',
        product: 'Кошелек с логотипом Interlocking G',
        brand: 'Gucci',
        gender: 'Женщинам',
        category: 'Аксессуары',
        subcategory: 'Кошельки',
        new: false,
        discount: false
    },
    {
        id: '15',
        image: '15.webp',
        product: 'Ремень с квадратной пряжкой и логотипом',
        brand: 'Prada',
        gender: 'Женщинам',
        category: 'Аксессуары',
        subcategory: 'ремни',
        new: false,
        discount: false
    },
    {
        id: '16',
        image: '16.webp',
        product: 'Шелковая рубашка Morning City View',
        brand: 'Casablanca',
        gender: 'Мужчинам',
        category: 'Одежда',
        subcategory: 'рубашки',
        new: true,
        discount: false
    },
    {
        id: '17',
        image: '17.webp',
        product: 'Рубашка с цветочным принтом',
        brand: 'Prada',
        gender: 'Мужчинам',
        category: 'Одежда',
        subcategory: 'рубашки',
        new: true,
        discount: false
    },
    {
        id: '18',
        image: '18.webp',
        product: 'Спортивные брюки с вышитой монограммой',
        brand: 'PalmAngels',
        gender: 'Мужчинам',
        category: 'Одежда',
        subcategory: 'брюки',
        new: false,
        discount: true
    },
    {
        id: '19',
        image: '4.webp',
        product: 'Спортивные брюки с лампасами',
        brand: 'PalmAngels',
        gender: 'Мужчинам',
        category: 'Одежда',
        subcategory: 'брюки',
        new: false,
        discount: true
    },
    {
        id: '20',
        image: '20.webp',
        product: 'Наручные часы Sea-Dweller',
        brand: 'Rolex',
        gender: 'Мужчинам',
        category: 'Аксессуары',
        subcategory: 'часы',
        new: true,
        discount: false
    }
]

// Brands:
let productsBrandVersace = [];
let productsBrandGucci = [];
let productsBrandPrada = [];
let productsBrandPalmAngels = [];
let productsBrandCasablanca = [];
let productsBrandRolex = [];

// Gender:
let productsGenderWomen = [];
let productsGenderMan = [];

// Category:
let productsCategoryClothes = [];
let productsCategoryShoes = [];
let productsCategoryAccessories = [];

// Subcategory:
let productsSubcategoryDresses = [];
let productsSubcategorySkirts = [];
let productsSubcategoryLoafers = [];
let productsSubcategoryBoots = [];
let productsSubcategoryShoes = [];
let productsSubcategoryScarves = [];
let productsSubcategoryWallets = [];
let productsSubcategoryBelts = [];
let productsSubcategoryShirts = [];
let productsSubcategoryPants = [];

// New:
let productsNewYes = [];
let productsNewNo = [];

// Discount:
let productsDiscountYes = [];
let productsDiscountNo = [];

let women = document.getElementById('women');
function sortProduct() {

    // Brands:
    catalog.forEach(item => {
        if (item.brand.toLowerCase() === 'Versace'.toLowerCase()) {
            productsBrandVersace.push(item);
        } else if (item.brand.toLowerCase() === 'Gucci'.toLowerCase()) {
            productsBrandGucci.push(item);
        } else if (item.brand.toLowerCase() === 'Prada'.toLowerCase()) {
            productsBrandPrada.push(item);
        } else if (item.brand.toLowerCase() === 'PalmAngels'.toLowerCase()) {
            productsBrandPalmAngels.push(item);
        } else if (item.brand.toLowerCase() === 'Rolex'.toLowerCase()) {
            productsBrandRolex.push(item);
        } else if (item.brand.toLowerCase() === 'Casablanca'.toLowerCase()) {
            productsBrandCasablanca.push(item);
        }
    })

    // Gender:
    catalog.forEach(item => {
        if (item.gender.toLowerCase() === 'Мужчинам'.toLowerCase()) {
            productsGenderMan.push(item);
        } else if (item.gender.toLowerCase() === 'Женщинам'.toLowerCase()) {
            productsGenderWomen.push(item);
        }
    });

    // Category:
    catalog.forEach(item => {
        if (item.category.toLowerCase() === 'Одежда'.toLowerCase()) {
            productsCategoryClothes.push(item);
        } else if (item.category.toLowerCase() === 'Обувь'.toLowerCase()) {
            productsCategoryShoes.push(item);
        } else if (item.category.toLowerCase() === 'Аксессуары'.toLowerCase()) {
            productsCategoryAccessories.push(item);
        }
    });

    // Subcategory:
    catalog.forEach(item => {
        if (item.subcategory.toLowerCase() === 'Платья'.toLowerCase()) {
            productsSubcategoryDresses.push(item);
        } else if (item.subcategory.toLowerCase() === 'Юбки'.toLowerCase()) {
            productsSubcategorySkirts.push(item);
        } else if (item.subcategory.toLowerCase() === 'лоферы'.toLowerCase()) {
            productsSubcategoryLoafers.push(item);
        } else if (item.subcategory.toLowerCase() === 'сапоги'.toLowerCase()) {
            productsSubcategoryBoots.push(item);
        } else if (item.subcategory.toLowerCase() === 'туфли'.toLowerCase()) {
            productsSubcategoryShoes.push(item);
        } else if (item.subcategory.toLowerCase() === 'шарфы'.toLowerCase()) {
            productsSubcategoryScarves.push(item);
        } else if (item.subcategory.toLowerCase() === 'кошельки'.toLowerCase()) {
            productsSubcategoryWallets.push(item);
        } else if (item.subcategory.toLowerCase() === 'ремни'.toLowerCase()) {
            productsSubcategoryBelts.push(item);
        } else if (item.subcategory.toLowerCase() === 'рубашки'.toLowerCase()) {
            productsSubcategoryShirts.push(item);
        } else if (item.subcategory.toLowerCase() === 'брюки'.toLowerCase()) {
            productsSubcategoryPants.push(item);
        }
    });

    // New:
    catalog.forEach(item => {
        if (item.new) {
            productsNewYes.push(item);
        } else {
            productsNewNo.push(item);
        }
    });

    // Discount:
    catalog.forEach(item => {
        if (item.discount) {
            productsDiscountYes.push(item);
        } else {
            productsDiscountNo.push(item);
        }
    });
}
sortProduct();

productsBrandVersace.forEach(item => {

})

function productsGenderWomenWiew() {
    productsGenderWomen.forEach(item => {
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');
        aElement.setAttribute('href', 'page-item.html');

        liElement.appendChild(aElement);
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', '../assets/images/catalog/' + `${item.image}`);
        aElement.appendChild(imgElement);


        const h3Element = document.createElement('h3');
        h3Element.className = 'catalog-goods__list-subtitle';
        h3Element.innerText = `${item.brand}`;
        aElement.appendChild(h3Element);

        const pElement = document.createElement('p');
        pElement.className = 'catalog-goods__list-text';
        pElement.innerText = `${item.product}`;
        aElement.appendChild(pElement);

        const divElement = document.createElement('div');
        divElement.className = 'catalog-goods__info';
        aElement.appendChild(divElement);

        const p2Element = document.createElement('p');
        p2Element.className = 'catalog-goods__list-price';
        p2Element.innerText = '535 BYN';
        divElement.appendChild(p2Element);

        // const buttonElement = document.createElement('button');
        // buttonElement.className = 'catalog-goods__list-btn';
        // buttonElement.innerText = 'Оставить заявку';
        // divElement.appendChild(buttonElement);

        women.appendChild(liElement);
    })
}

productsGenderWomenWiew();