import type { PlanType } from "../../../types/content";
import styles from "./PlanCard.module.css"
const PlanCard = ({ plan, active, handleSetActivePlan }: { plan: PlanType, active: boolean, handleSetActivePlan: (id: number) => void }) => {

    return (
        <div onClick={() => handleSetActivePlan(plan.id)} className={`${styles.card} ${active && styles.active}`}>
            <h2 className={styles.title}>{plan.name}</h2>
            <div className={styles.content}>
                <ul className={styles.features}>
                    {plan.features.slice(0, 2).map((feature) => <li className={`linewrap-2 ${styles.feature}`}>{feature}</li>)}
                </ul>
                <div className={styles.priceWrapper}>
                    <p className={styles.priceText}>Get it only at</p>
                    <span className={styles.price}>
                        ₹ <s className={styles.actualPrice}>{plan.price}</s>
                    </span>
                </div>
            </div>
            <button className={styles.button}>Know more</button>
        </div>
    );
};

const PlanCardShimmer = () => {
    return (
        <div
            className="w-[280px] h-[220px] p-6 rounded-md  bg-white flex flex-col gap-5 animate-pulse">
            {/* Title */}
            <div className="h-10 w-4/5 rounded bg-gray-200" />
            {/* Content */}
            <div className="flex justify-between ">
                <div className="flex flex-col gap-2">
                    <div className="h-10 w-36 rounded bg-gray-200" />
                    <div className="h-10 w-36 rounded bg-gray-200" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="h-10 w-20 rounded bg-gray-200" />
                    <div className="h-10 w-20 rounded bg-gray-200" />
                </div>
            </div>
            {/* Button */}
            <div className="h-9 w-full rounded bg-gray-200" />
        </div>
    );
};
export { PlanCardShimmer };

export default PlanCard;
