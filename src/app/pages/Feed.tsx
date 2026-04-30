import { useMemo, useState } from "react";
import Stories from "../components/Stories";
import FeedFilters from "../components/FeedFilters";
import PostCard from "../components/PostCard";
import { feed, type FeedCategory } from "../data/feedMock";

const Feed = () => {
  const [active, setActive] = useState<FeedCategory>("all");

  const visible = useMemo(
    () => (active === "all" ? feed : feed.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="px-4 pt-1">
        <h1 className="text-2xl font-extrabold tracking-tight">Привет, Аня 👋</h1>
        <p className="text-sm text-muted-foreground">
          Сегодня в Москве хорошо для прогулки — +4°, без осадков.
        </p>
      </div>

      <Stories />
      <FeedFilters active={active} onChange={setActive} />

      <div className="flex flex-col gap-5 px-4">
        {visible.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {visible.length === 0 && (
          <div className="rounded-3xl border border-dashed border-app-border bg-app-surface p-10 text-center">
            <p className="text-sm font-semibold">Пока ничего нет</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Попробуйте выбрать другой фильтр или подпишитесь на новые сообщества.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
