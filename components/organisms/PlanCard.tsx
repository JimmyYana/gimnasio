import Link from "next/link";
import PlanFeature from "../molecules/PlanFeature";
import type { Plan } from "@/types/gimnasio";
import "./plans.css";

export default function PlanCard({ plan }: { plan: Plan }) {
  return (
    <li>
      <Link className="plan-card" href={`/miembros?plan=${encodeURIComponent(plan.id)}`}>
        <h2>{plan.name}</h2>
        <p className="plan-price">{plan.precio}$ / {plan.duracion}</p>
        <ul>{plan.beneficios.map((beneficio, index) => <PlanFeature key={index} text={beneficio} />)}</ul>
      </Link>
    </li>
  );
}
