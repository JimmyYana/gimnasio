import type { Plan } from "@/types/gimnasio";
import PlanCard from "./PlanCard";

export default function PlanList({ plans }: { plans: Plan[] }) {
  return <ul className="plan-list">{plans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}</ul>;
}
