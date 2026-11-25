"use client";

import { useEffect, useState } from "react";
import PlansTemplate from "@/components/templates/PlansTemplate";
import type { Plan } from "@/types/gimnasio";

export default function PlansPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://6aff34de7fc363ccff08fc04.mockapi.io/api/v1/planes")
      .then(async (response) => {
        if (!response.ok) throw new Error();
        const data: Plan[] = await response.json();
        setPlans(data.filter((plan) => plan.activo));
      })
      .catch(() => setError("Could not load plans."))
      .finally(() => setLoading(false));
  }, []);

  return <PlansTemplate plans={plans} loading={loading} error={error} />;
}
