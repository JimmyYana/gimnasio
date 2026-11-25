import Avatar from "../atoms/Avatar";
import MemberInfo from "../molecules/MemberInfo";
import type { Member } from "@/types/gimnasio";
import "./members.css";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <article className="member-card">
      <Avatar key={member.foto} photo={member.foto} />
      <MemberInfo member={member} />
    </article>
  );
}
