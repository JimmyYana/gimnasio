export default function PlanFeature({ text }: { text: string }) {
  return <li><span aria-hidden="true">★</span>{text}</li>;
}
