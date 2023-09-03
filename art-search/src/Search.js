import { SearchInput } from "evergreen-ui";

export default function Search({ query, onChange }) {
  return (
    <SearchInput
      placeholder="Enter search term, for example: cats"
      width="100%"
      autoFocus
      value={query}
      onChange={onChange}
    />
  );
}
