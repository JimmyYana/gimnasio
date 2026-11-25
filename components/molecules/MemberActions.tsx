import Link from "next/link";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const actions = [
  { icon: "phone", label: "Call" },
  { icon: "chat", label: "WhatsApp" },
  { icon: "renew", label: "Renew Plan" },
  { icon: "chat", label: "Message" },
  { icon: "block", label: "Block" },
] as const;

interface Props {
  id: string;
  mobile: string;
  deleting: boolean;
  onDelete: () => void;
}

export default function MemberActions({ id, mobile, deleting, onDelete }: Props) {
  return (
    <div className="member-actions">
      <Link className="edit-member" href={`/miembros/${encodeURIComponent(id)}/editar`} aria-label="Edit member">
        <Icon name="edit" size={16} />
      </Link>
      <Button className="delete-member" onClick={onDelete} disabled={deleting} aria-label="Delete member">
        <Icon name="trash" size={16} />
      </Button>
      {actions.map(({ icon, label }) => label === "Call" && /^[+\d\s()-]+$/.test(mobile) ? (
        <a key={label} href={`tel:${mobile.replace(/[^+\d]/g, "")}`}><Icon name={icon} size={15} />{label}</a>
      ) : (
        <Button key={label} disabled><Icon name={icon} size={15} />{label}</Button>
      ))}
    </div>
  );
}
