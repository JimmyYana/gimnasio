import MemberCard from "./MemberCard";
import type { Member } from "@/types/gimnasio";

export default function MemberList({ members }: { members: Member[] }) {
  return <div className="member-list">{members.map((member) => <MemberCard key={member.id} member={member} />)}</div>;
}
