const paths = {
  search: "M21 21l-5-5 M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z",
  menu: "M4 6h16M4 12h16M4 18h16",
  back: "M15 3l-9 9 9 9",
  plus: "M12 4v16M4 12h16",
  phone: "M5 3h4l2 5-3 2a11 11 0 0 0 6 6l2-3 5 2v4c0 2-2 2-4 2C9 20 4 15 3 7c0-2 0-4 2-4z",
  chat: "M3 4h18v13H9l-6 4z",
  renew: "M20 10a8 8 0 1 0 0 5M20 4v6h-6",
  block: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM6 18 18 6",
  edit: "m4 16 12-12 4 4L8 20H4zM14 6l4 4",
  trash: "M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7",
  members: "M9 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 22v-8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v8M17 3a3 3 0 0 1 0 6m1 2a4 4 0 0 1 3 4v7",
  dashboard: "M3 21h18M5 18v-5m5 5v-8m5 8v-4m5 4V7M3 9l7-5 5 4 6-6",
  money: "M3 5h18v14H3zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  gym: "M3 22h18M6 22V3h9v19m0-14h4v14M9 7h3m-3 4h3m-3 4h3",
  report: "M6 2h8l5 5v15H6zM14 2v6h5M9 12h7m-7 4h7",
  id: "M2 5h20v14H2zM11 10h7m-7 4h7M5 14h3m-2-4h1",
};

export default function Icon({ name, size = 20 }: { name: keyof typeof paths; size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}
