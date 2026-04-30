import { cn } from "@/lib/utils";
import { filters, type FeedCategory } from "../data/feedMock";

interface Props {
  active: FeedCategory;
  onChange: (id: FeedCategory) => void;
}

const FeedFilters = ({ active, onChange }: Props) => {
  return (
    <div className="sticky top-[60px] z-20 -mt-1 bg-app-bg/80 px-4 py-3 backdrop-blur-xl">
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {filters.map((f) => {
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              onClick={() => onChange(f.id)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                  : "bg-app-surface text-muted-foreground border border-app-border hover:text-foreground"
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FeedFilters;
