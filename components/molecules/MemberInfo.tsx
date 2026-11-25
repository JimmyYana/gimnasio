import Icon from "../atoms/Icon";
import type { Member } from "@/types/gimnasio";

export default function MemberInfo({ member }: { member: Member }) {
  const expiry = /^\d{4}-\d{2}-\d{2}/.test(member.fechaFinalizacion)
    ? new Date(member.fechaFinalizacion.slice(0, 10) + "T00:00:00Z")
      .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })
    : member.fechaFinalizacion;

  return (
    <div className="member-info">
      <p><span>Name :</span> {member.nombre}</p>
      <p><Icon name="id" size={15} /> <span>M ID :</span> {member.numeroMiembro}</p>
      <p><span>Plan Expiry :</span> {expiry}</p>
      <p><span>Due Amount :</span> {member.montoPendiente}</p>
    </div>
  );
}
