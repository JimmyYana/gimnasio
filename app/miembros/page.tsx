"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import MembersTemplate from "@/components/templates/MembersTemplate";
import type { Member, Plan } from "@/types/gimnasio";

const membersUrl = "https://6aff34e87fc363ccff08fc1b.mockapi.io/miembros";

export default function MembersPage() {
  return <Suspense fallback={<p className="status">Loading members…</p>}><MembersContent /></Suspense>;
}

function MembersContent() {
  const selectedPlan = useSearchParams().get("plan") ?? "";
  return <MembersScreen key={selectedPlan} selectedPlan={selectedPlan} />;
}

function MembersScreen({ selectedPlan }: { selectedPlan: string }) {
  const [members, setMembers] = useState<Member[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [plansError, setPlansError] = useState("");
  const [status, setStatus] = useState("");
  const [planId, setPlanId] = useState(selectedPlan);
  const [schedule, setSchedule] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://6aff34de7fc363ccff08fc04.mockapi.io/api/v1/planes")
      .then(async (response) => {
        if (!response.ok) throw new Error();
        setPlans(await response.json());
      })
      .catch(() => setPlansError("Could not load plan names."));

    fetch(membersUrl, { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error();
        setMembers(await response.json());
      })
      .catch(() => setError("Could not load members."))
      .finally(() => setLoading(false));
  }, []);

  const query = search.trim().toLowerCase();
  const schedules = [...new Set(members.map((member) => member.horario).filter(Boolean))].sort();
  const visibleMembers = members.filter((member) =>
    (member.nombre.toLowerCase().includes(query) || member.celular.toLowerCase().includes(query)) &&
    (!status || member.activo === (status === "active")) &&
    (!planId || member.planId === planId) &&
    (!schedule || member.horario === schedule)
  );

  return <MembersTemplate members={visibleMembers} loading={loading} error={error}
    search={search} onSearch={setSearch} plansError={plansError}
    filters={{ status, planId, schedule, plans, schedules, onStatus: setStatus, onPlan: setPlanId, onSchedule: setSchedule }} />;
}
