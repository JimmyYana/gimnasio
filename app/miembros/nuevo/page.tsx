"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MemberFormTemplate from "@/components/templates/MemberFormTemplate";
import type { MemberData, Plan } from "@/types/gimnasio";

export default function AddMemberPage() {
  const router = useRouter();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [defaultPlanId, setDefaultPlanId] = useState("");
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://6aff34de7fc363ccff08fc04.mockapi.io/api/v1/planes")
      .then(async (response) => {
        if (!response.ok) throw new Error();
        const data: Plan[] = await response.json();
        const requestedPlan = new URLSearchParams(window.location.search).get("plan");
        setPlans(data);
        if (data.some((plan) => plan.activo && plan.id === requestedPlan)) setDefaultPlanId(requestedPlan ?? "");
        setReady(data.some((plan) => plan.activo));
        if (!data.some((plan) => plan.activo)) setError("No active plans available.");
      })
      .catch(() => setError("Could not load plans."))
      .finally(() => setLoading(false));
  }, []);

  async function save(member: MemberData) {
    if (member.fechaFinalizacion < member.fechaIngreso) {
      setError("The end date must be on or after the joining date.");
      return;
    }

    setSaving(true);
    setError("");
    try {
      const response = await fetch("https://6aff34e87fc363ccff08fc1b.mockapi.io/miembros", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(member),
      });
      if (!response.ok) throw new Error();
      router.replace("/miembros");
    } catch {
      setError("Could not save the member.");
      setSaving(false);
    }
  }

  return <MemberFormTemplate title="Add Member" plans={plans} defaultPlanId={defaultPlanId}
    loading={loading} ready={ready} saving={saving} error={error} onSave={save} />;
}
