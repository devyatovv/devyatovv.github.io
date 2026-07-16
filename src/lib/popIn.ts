let hasPlayed = false;

export function popIn(node: HTMLElement) {
    if (
        hasPlayed ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        return;
    }

    hasPlayed = true;

    [...node.children].forEach((child, index) => {
        child.animate(
            [
                { opacity: 0, transform: "translateY(8px)" },
                { opacity: 1, transform: "none" }
            ],
            {
                duration: 300,
                delay: index * 60,
                easing: "ease-out",
                fill: "backwards"
            }
        );
    });
}