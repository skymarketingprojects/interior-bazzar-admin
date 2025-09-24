import usePlan from "./usePlan";
import styles from "./Plan.module.css";
import { ContactCard, QueryForm } from "../../components/shared";
import { PlanCard, PlanDetail, ReelContainer } from "../../components/Plan";
import { PlanCardShimmer } from "../../components/Plan/PlanCard";
import { PlanDetailShimmer } from "../../components/Plan/PlanDetail";
const Plan = () => {
  const {
    banner,
    reels,
    loading,
    activePlan,
    currentPlans,
    activePlanType,
    handleSetActivePlan,
    handlePlanTypeChange,
  } = usePlan();


  return (
    <div className={styles.planContainer}>
      <div className={`${styles.btnContainer}`}>
        <button
          onClick={() => handlePlanTypeChange("listing")}
          className={`${styles.btn} ${styles.left} ${activePlanType === "listing" ? styles.active : ""
            }`}
        >
          Listing
        </button>
        <button
          onClick={() => handlePlanTypeChange("filter")}
          className={`${styles.btn} ${styles.right} ${activePlanType === "filter" ? styles.active : ""
            }`}
        >
          Filter Leads
        </button>
      </div>
      <div className={styles.cardContainer}>
        {loading ?
          Array(3).fill(0).map((_, index) => <PlanCardShimmer key={index} />)
          :
          currentPlans?.map((plan) => (
            <PlanCard
              plan={plan}
              key={plan.id}
              active={plan.id === activePlan.id}
              handleSetActivePlan={handleSetActivePlan}
            />
          ))}
      </div>
      {loading ? <PlanDetailShimmer /> : <PlanDetail plan={activePlan} />}
      <div className={styles.bottomContent}>
        <ReelContainer reels={reels} />
        <img className="container" src={banner} alt="" />
        <ContactCard />
        <QueryForm />
      </div>
    </div>
  );
};
export default Plan;
