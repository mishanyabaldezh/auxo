const carouselInit = () => {
    const activeClassName = 'active';
    const cards = document.querySelectorAll('.carousel .carousel-img');
    const cardArray = new Array(...cards)

    const getIndexForNewCard = () => {
        let store = 0;
        cardArray.forEach((card, i) => {
            if (card.classList.contains(activeClassName)) {
                store = ++i === cardArray.length ? 0 : i;
            }
        })
        return store;
    };

    const switchCard = (newIndex) => {
        if (newIndex !== undefined) {
            cards.forEach((c) => c.classList.remove(activeClassName));
            cards[newIndex].classList.add(activeClassName)
        }
    };

    const cardIterator = setInterval(() => switchCard(getIndexForNewCard()), 5000);

    cards.forEach((card, i) => card.addEventListener('click', () => {
        switchCard(i);
        clearInterval(cardIterator);
        carouselInit();
    }))

}
const telephonecarouselInit = () => {
    const activeClassName = 'active';
    const cards = document.querySelectorAll('.telephone-carousel .telephone-carousel-img');
    const cardArray = new Array(...cards)

    const getIndexForNewCard = () => {
        let store = 0;
        cardArray.forEach((card, i) => {
            if (card.classList.contains(activeClassName)) {
                store = ++i === cardArray.length ? 0 : i;
            }
        })
        return store;
    };

    const switchCard = (newIndex) => {
        if (newIndex !== undefined) {
            cards.forEach((c) => c.classList.remove(activeClassName));
            cards[newIndex].classList.add(activeClassName)
        }
    };

    const cardIterator = setInterval(() => switchCard(getIndexForNewCard()), 5000);

    cards.forEach((card, i) => card.addEventListener('click', () => {
        switchCard(i);
        clearInterval(cardIterator);
        telephonecarouselInit();
    }))

}
carouselInit();
telephonecarouselInit();