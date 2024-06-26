import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = ({ className }: any) => {
    return (
      <form className={`relative ${className}`}>
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="pl-8 pr-4 py-2 rounded-md border border-input bg-background focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </form>
    );
  };

export default Search;