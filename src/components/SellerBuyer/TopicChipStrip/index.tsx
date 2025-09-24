import styles from "./TopicChipStrip.module.css";
import { RightIcon, LeftIcon } from "../../ui";
import { useEffect, useRef, useState } from "react";
const TopicChipStrip = () => {
    const chips = [
        // Interior Spaces
        "Living Room",
        "Bedroom",
        "Kitchen",
        "Bathroom",
        "Dining Room",
        "Office/Workspace",
        "Outdoor & Garden",
        "Balcony & Terrace",
        "Lobby & Hallways",

        // Sanitary Categories
        "Sanitaryware",
        "Bath Fittings",
        "Showers & Wellness",
        "Bathtubs",
        "Wash Basins",
        "Toilets & WC",
        "Urinals",
        "Bathroom Accessories",
        "Vanity Units",

        // Interior Categories
        "Flooring",
        "Wall Panels",
        "Ceilings",
        "Lighting",
        "Furniture",
        "Wardrobes & Storage",
        "Decor & Accessories",
        "Modular Kitchen",
        "False Ceiling",

        // Materials
        "Tiles",
        "Marble & Stone",
        "Wood & Veneer",
        "Glass & Mirrors",
        "Metal & Hardware",
    ];
    const [activeChip, setActiveChip] = useState(chips[0]);
    const handleClick = (chip: string) => {
        setActiveChip(chip);
    };
    const containerRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScrollFor = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    const handleScrollBack = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const onScroll = () => {
            if (el.scrollLeft > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        el.addEventListener("scroll", onScroll);
        return () => el.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <div className={`container ${styles.wrapper}`}>
            <div ref={containerRef} className={`container scrollbar-hidden ${styles.container}`}>
                {chips.map((chip, index) => (
                    <button
                        key={index}
                        className={`${styles.chip} ${activeChip === chip ? styles.active : ""}`}
                        onClick={() => handleClick(chip)}
                    >
                        {chip}
                    </button>
                ))}
            </div>
            {isScrolled && <LeftIcon onClick={handleScrollBack} className={` ${styles.icon} ${styles.leftIcon}`} />}
            <RightIcon onClick={handleScrollFor} className={` ${styles.icon} ${styles.rightIcon}`} />
        </div>
    );
};

export default TopicChipStrip;
