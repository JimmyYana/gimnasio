"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MemberFormTemplate from "@/components/templates/MemberFormTemplate";
import type { Member, MemberData, Plan } from "@/types/gimnasio";

export default function EditMemberPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const memberUrl = `https://6aff34e87fc363ccff08fc1b.mockapi.io/miembros/${encodeURIComponent(id)}`;
  const [member, setMember] = useState<Member>();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const options = { signal: controller.signal, cache: "no-store" as const };
    Promise.all([
      fetch(memberUrl, options),
      fetch("https://6aff34de7fc363ccff08fc04.mockapi.io/api/v1/planes", options),
    ]).then(async ([memberResponse, planResponse]) => {
      if (!memberResponse.ok || !planResponse.ok) throw new Error();
      const [memberData, planData] = await Promise.all([memberResponse.json(), planResponse.json()]);
      setMember(memberData);
      setPlans(planData);
    }).catch(() => {
      if (!controller.signal.aborted) setError("Could not load the member or plans.");
    }).finally(() => {
      if (!controller.signal.aborted) setLoading(false);
    });

    return () => controller.abort();
  }, [memberUrl]);

  async function save(data: MemberData) {
    const start = Date.parse(data.fechaIngreso);
    const end = Date.parse(data.fechaFinalizacion);
    if (Number.isFinite(start) && Number.isFinite(end) && end < start) {
      setError("The end date must be on or after the joining date.");
      return;
    }

    setSaving(true);
    setError("");
    try {
      const response = await fetch(memberUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error();
      router.replace("/miembros");
    } catch {
      setError("Could not update the member.");
      setSaving(false);
    }
  }

  return <MemberFormTemplate title="Edit Member" member={member} plans={plans}
    loading={loading} ready={member?.id === id} saving={saving} error={error} onSave={save} />;
}
