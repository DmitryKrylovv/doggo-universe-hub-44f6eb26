import { Plus } from "lucide-react";
import { stories } from "../data/feedMock";

const Stories = () => {
  return (
    <div className="px-4">
      <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {stories.map((s, i) => (
          <button
            key={s.id}
            className="flex w-[68px] shrink-0 flex-col items-center gap-1.5"
          >
            <div className="relative">
              <div
                className={
                  s.hasNew
                    ? "rounded-full p-[2px] bg-primary"
                    : "rounded-full p-[2px] bg-app-border"
                }
              >
                <div className="rounded-full bg-app-bg p-[2px]">
                  <img
                    src={s.avatar}
                    alt={s.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                </div>
              </div>
              {i === 0 && (
                <span className="absolute -bottom-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground ring-2 ring-app-bg">
                  <Plus className="h-3 w-3" strokeWidth={3} />
                </span>
              )}
            </div>
            <span className="max-w-full truncate text-[11px] font-medium text-muted-foreground">
              {s.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Stories;
