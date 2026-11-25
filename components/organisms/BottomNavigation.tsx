import Link from "next/link";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import "./bottomNavigation.css";

const items = [
  { icon: "dashboard", label: "Dashboard" },
  { icon: "money", label: "Collection" },
  { icon: "gym", label: "Gym" },
  { icon: "report", label: "Today Report" },
] as const;

export default function BottomNavigation() {
  return (
    <nav className="bottom-navigation" aria-label="Main navigation">
      <Link href="/miembros" aria-current="page"><Icon name="members" size={25} />Members</Link>
      {items.map(({ label, icon }) => (
        <Button key={label} disabled><Icon name={icon} size={25} />{label}</Button>
      ))}
    </nav>
  );
}
