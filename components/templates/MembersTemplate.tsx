import Link from "next/link";
import Icon from "../atoms/Icon";
import BottomNavigation from "../organisms/BottomNavigation";
import SearchBar from "../molecules/SearchBar";
import MemberFilters, { type FilterProps } from "../organisms/MemberFilters";
import Header from "../organisms/Header";
import MemberList from "../organisms/MemberList";
import type { Member } from "@/types/gimnasio";

interface Props {
  members: Member[];
  deleting: boolean;
  onDelete: (member: Member) => void;
  filters: FilterProps;
  plansError: string;
  search: string;
  onSearch: (value: string) => void;
  loading: boolean;
  error: string;
}

export default function MembersTemplate({ members, loading, error, search, onSearch, filters, plansError, deleting, onDelete }: Props) {
  return (
    <main className="screen members">
      <Header menu><SearchBar search={search} onSearch={onSearch} /></Header>
      <MemberFilters {...filters} />
      {plansError && <p className="status" role="alert">{plansError}</p>}
      {loading && <p className="status" role="status">Loading members…</p>}
      {error && <p className="status" role="alert">{error}</p>}
      {!loading && !error && members.length === 0 && <p className="status">No members found.</p>}
      <MemberList members={members} deleting={deleting} onDelete={onDelete} />
      <Link className="floating-add" aria-label="Add member"
        href={filters.planId ? `/miembros/nuevo?plan=${encodeURIComponent(filters.planId)}` : "/miembros/nuevo"}>
        <Icon name="plus" size={35} />
      </Link>
      <BottomNavigation />
    </main>
  );
}
