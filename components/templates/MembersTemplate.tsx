import SearchBar from "../molecules/SearchBar";
import Header from "../organisms/Header";
import MemberList from "../organisms/MemberList";
import type { Member } from "@/types/gimnasio";

interface Props {
  members: Member[];
  search: string;
  onSearch: (value: string) => void;
  loading: boolean;
  error: string;
}

export default function MembersTemplate({ members, loading, error, search, onSearch }: Props) {
  return (
    <main className="screen members">
      <Header><SearchBar search={search} onSearch={onSearch} /></Header>
      {loading && <p className="status" role="status">Loading members…</p>}
      {error && <p className="status" role="alert">{error}</p>}
      {!loading && !error && members.length === 0 && <p className="status">No members found.</p>}
      <MemberList members={members} />
    </main>
  );
}
