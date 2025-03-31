export default function viewAnimation() {
    // Components loading animations
    let elementsToObserve = document.querySelectorAll('.view-animation');

    // Check for IE11 support
    let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

    elementsToObserve.forEach(function (el) {
        if (isIE11) {
            el.classList.add('animated');
        } else {
            new IntersectionObserver(
                function (entries) {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animated');
                        } else {
                            // Get element's bounding box
                            let rect = entry.target.getBoundingClientRect();
                            let viewportHeight = window.innerHeight || document.documentElement.clientHeight;

                            // Remove 'animated' only if exiting through the bottom
                            if (rect.top >= viewportHeight) {
                                entry.target.classList.remove('animated');
                            }
                        }
                    });
                },
                { threshold: 0.5 }
            ).observe(el);
        }
    });
}
