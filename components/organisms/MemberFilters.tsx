import FilterSelect from "../molecules/FilterSelect";
import type { Plan } from "@/types/gimnasio";

export interface FilterProps {
  status: string;
  planId: string;
  schedule: string;
  plans: Plan[];
  schedules: string[];
  onStatus: (value: string) => void;
  onPlan: (value: string) => void;
  onSchedule: (value: string) => void;
}

export default function MemberFilters(props: FilterProps) {
  return (
    <div className="member-filters">
      <FilterSelect label="All Members" value={props.status} onChange={props.onStatus}
        options={[{ value: "active", label: "Active" }, { value: "inactive", label: "Inactive" }]} />
      <FilterSelect label="All Plans" value={props.planId} onChange={props.onPlan}
        options={props.plans.map((plan) => ({ value: plan.id, label: plan.name }))} />
      <FilterSelect label="Select Batch" value={props.schedule} onChange={props.onSchedule}
        options={props.schedules.map((schedule) => ({ value: schedule, label: schedule }))} />
    </div>
  );
}
