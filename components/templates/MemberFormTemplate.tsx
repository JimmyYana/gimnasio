import Header from "../organisms/Header";
import MemberForm from "../organisms/MemberForm";
import type { MemberData, Plan } from "@/types/gimnasio";

interface Props {
  title: string;
  member?: MemberData;
  plans: Plan[];
  defaultPlanId?: string;
  loading: boolean;
  ready: boolean;
  saving: boolean;
  error: string;
  onSave: (member: MemberData) => void;
}

export default function MemberFormTemplate(props: Props) {
  return (
    <main className="screen form-screen">
      <Header title={props.title} />
      {props.loading && <p className="status" role="status">Loading…</p>}
      {props.error && <p className="status" role="alert">{props.error}</p>}
      {props.ready && <MemberForm member={props.member} plans={props.plans} defaultPlanId={props.defaultPlanId}
        saving={props.saving} onSave={props.onSave} />}
    </main>
  );
}
