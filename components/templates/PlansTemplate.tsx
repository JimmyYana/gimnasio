import Logo from "../atoms/Logo";
import PlanList from "../organisms/PlanList";
import type { Plan } from "@/types/gimnasio";

interface Props {
  plans: Plan[];
  loading: boolean;
  error: string;
}

export default function PlansTemplate({ plans, loading, error }: Props) {
  return (
    <main className="screen plans">
      <Logo size={80} />
      <h1>Select Your Plan</h1>
      <p className="trial">7 Days Free Trial</p>
      {loading && <p className="status" role="status">Loading plans…</p>}
      {error && <p className="status" role="alert">{error}</p>}
      {!loading && !error && plans.length === 0 && <p className="status">No plans available.</p>}
      <PlanList plans={plans} />
    </main>
  );
}
