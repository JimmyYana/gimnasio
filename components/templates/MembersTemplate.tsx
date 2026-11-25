import SearchBar from "../molecules/SearchBar";
import MemberFilters, { type FilterProps } from "../organisms/MemberFilters";
import Header from "../organisms/Header";
import MemberList from "../organisms/MemberList";
import type { Member } from "@/types/gimnasio";

interface Props {
  members: Member[];
  filters: FilterProps;
  plansError: string;
  search: string;
  onSearch: (value: string) => void;
  loading: boolean;
  error: string;
}

export default function MembersTemplate({ members, loading, error, search, onSearch, filters, plansError }: Props) {
  return (
    <main className="screen members">
      <Header><SearchBar search={search} onSearch={onSearch} /></Header>
      <MemberFilters {...filters} />
      {plansError && <p className="status" role="alert">{plansError}</p>}
      {loading && <p className="status" role="status">Loading members…</p>}
      {error && <p className="status" role="alert">{error}</p>}
      {!loading && !error && members.length === 0 && <p className="status">No members found.</p>}
      <MemberList members={members} />
    </main>
  );
}
