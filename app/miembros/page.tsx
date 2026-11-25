"use client";

import { useEffect, useState } from "react";
import MembersTemplate from "@/components/templates/MembersTemplate";
import type { Member } from "@/types/gimnasio";

const membersUrl = "https://6aff34e87fc363ccff08fc1b.mockapi.io/miembros";

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(membersUrl, { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error();
        setMembers(await response.json());
      })
      .catch(() => setError("Could not load members."))
      .finally(() => setLoading(false));
  }, []);

  return <MembersTemplate members={members} loading={loading} error={error} />;
}
