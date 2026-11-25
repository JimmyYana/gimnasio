import Avatar from "../atoms/Avatar";
import MemberInfo from "../molecules/MemberInfo";
import MemberActions from "../molecules/MemberActions";
import type { Member } from "@/types/gimnasio";
import "./members.css";

interface Props {
  member: Member;
  deleting: boolean;
  onDelete: (member: Member) => void;
}

export default function MemberCard({ member, deleting, onDelete }: Props) {
  return (
    <article className="member-card">
      <Avatar key={member.foto} photo={member.foto} />
      <MemberInfo member={member} />
      <MemberActions id={member.id} mobile={member.celular} deleting={deleting} onDelete={() => onDelete(member)} />
    </article>
  );
}
