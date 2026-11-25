import MemberCard from "./MemberCard";
import type { Member } from "@/types/gimnasio";

interface Props {
  members: Member[];
  deleting: boolean;
  onDelete: (member: Member) => void;
}

export default function MemberList({ members, deleting, onDelete }: Props) {
  return (
    <div className="member-list">
      {members.map((member) => <MemberCard key={member.id} member={member} deleting={deleting} onDelete={onDelete} />)}
    </div>
  );
}
