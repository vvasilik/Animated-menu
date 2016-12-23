function initNavigationIndicatorListener() {
    const navigation = document.querySelector(".js-navigation-main");
    const navigationButtons = navigation.querySelectorAll(".js-navigation-main__frame");
    const navigationIndicator = navigation.querySelector(".js-navigation-main__indicator");

    navigation.addEventListener("mouseleave", moveIndicator);
    [...navigationButtons].forEach(
        (item) => {item.addEventListener("mouseenter", moveIndicator)}
    );

    function moveIndicator(e) {
        const currentTarget = e.currentTarget;

        if (currentTarget === navigation ) {
            navigationIndicator.style.transform = "translateX(0)";
            navigationIndicator.style.WebkitTransformtransform = "translateX(0)";
            navigationIndicator.style.width = 0;
        } else if (currentTarget.classList.contains("js-navigation-main__frame")) {
            navigationIndicator.style.transform = `translateX(${currentTarget.offsetLeft}px)`;
            navigationIndicator.style.WebkitTransformtransform = `translateX(${currentTarget.offsetLeft}px)`;
            navigationIndicator.style.width = `${currentTarget.offsetWidth}px`;
        }
    }
}

initNavigationIndicatorListener();