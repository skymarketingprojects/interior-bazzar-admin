import { useEffect, useState } from "react";
import type { PlanType } from "../../types/content";
import { PlansService } from "../../api/modules/plan";
import { logger } from "../../utils/logger";
import { DUMMY_REEL } from "../../utils/constants/videos";
import { StockService } from "../../api/modules/stock";
const usePlan = () => {
  const [loading, setLoading] = useState(true);
  const [activePlanType, setActivePlanType] = useState<"listing" | "filter">(
    "listing"
  );
  const [plans, setPlans] = useState<PlanType[]>([]);
  const [currentPlans, setCurrentPlans] = useState<PlanType[]>([]);
  const [banner, setBanner] = useState<string>("");
  const handlePlanTypeChange = (planType: "listing" | "filter") => {
    setActivePlanType(planType);
    setCurrentPlans(plans.filter((plan) => plan.type === planType));
    setActivePlan(plans.find((plan) => plan.type === planType) || plans[0]);
  };
  const [reels] = useState<any>([DUMMY_REEL, DUMMY_REEL, DUMMY_REEL]);
  const [activePlan, setActivePlan] = useState<PlanType>(plans[0]);
  const handleSetActivePlan = (id: number) => {
    const onePlan = plans.find((plan) => plan.id === id);
    setActivePlan(onePlan || plans[0]);
  };
  const fetchPlans = async () => {
    try {
      setLoading(true);
      const res = await PlansService.getPlans();
      if (!res.response) {
        return;
      }

      setPlans(res.data);
      setActivePlanType("listing");
      setCurrentPlans(
        res.data.filter((plan: PlanType) => plan.type === "listing")
      );
      setActivePlan(
        res.data.find((plan: PlanType) => plan.type === "listing") || plans[0]
      );
    } catch (err) {
      logger.error("Error while fetching plans: ", err);
    } finally {
      setLoading(false);
    }
  };
  const fetchBanner = async () => {
    try {
      setLoading(true);
      const res = await StockService.fetchPlanBanner();
      if (!res.response) {
        return;
      }
      setBanner(res?.data[0].image || "");
    } catch (error) {
      logger.error("Error fetching banner:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPlans();
    fetchBanner();
  }, []);
  return {
    plans,
    reels,
    banner,
    loading,
    activePlan,
    currentPlans,
    activePlanType,
    setActivePlanType,
    handleSetActivePlan,
    handlePlanTypeChange,
  };
};
export default usePlan;
