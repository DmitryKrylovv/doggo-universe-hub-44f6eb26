import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  MapPin,
  Calendar,
  Users,
  Star,
  AlertTriangle,
  BadgeCheck,
} from "lucide-react";
import type { FeedPost } from "../data/feedMock";
import { cn } from "@/lib/utils";

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => (
  <article
    className={cn(
      "rounded-3xl border border-app-border bg-app-surface shadow-[0_8px_30px_-12px_hsl(262_83%_15%/0.25)]",
      className
    )}
  >
    {children}
  </article>
);

const AuthorRow = ({
  post,
  rightSlot,
}: {
  post: FeedPost;
  rightSlot?: React.ReactNode;
}) => (
  <header className="flex items-center gap-3 px-4 pt-4">
    <img
      src={post.author.avatar}
      alt={post.author.name}
      className="h-10 w-10 rounded-full object-cover ring-2 ring-app-border"
    />
    <div className="min-w-0 flex-1">
      <div className="flex items-center gap-1">
        <p className="truncate text-sm font-bold">{post.author.name}</p>
        {post.author.verified && (
          <BadgeCheck className="h-4 w-4 text-primary" />
        )}
      </div>
      <p className="truncate text-xs text-muted-foreground">
        {post.author.city} · {post.timeAgo}
      </p>
    </div>
    {rightSlot ?? (
      <button
        aria-label="Меню"
        className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-app-surface-hover"
      >
        <MoreHorizontal className="h-5 w-5" />
      </button>
    )}
  </header>
);

const ActionBar = ({
  liked,
  saved,
  likes,
  comments,
}: {
  liked?: boolean;
  saved?: boolean;
  likes: number;
  comments: number;
}) => {
  const [isLiked, setIsLiked] = useState(!!liked);
  const [isSaved, setIsSaved] = useState(!!saved);
  const count = likes + (isLiked && !liked ? 1 : 0);

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-1">
        <button
          onClick={() => setIsLiked((v) => !v)}
          className="group flex items-center gap-1 rounded-full px-2 py-1.5 transition-colors hover:bg-primary/10"
        >
          <Heart
            className={cn(
              "h-[22px] w-[22px] transition-all",
              isLiked ? "fill-primary text-primary scale-110" : "text-foreground"
            )}
          />
          <span className="text-xs font-semibold tabular-nums">{count}</span>
        </button>
        <button className="flex items-center gap-1 rounded-full px-2 py-1.5 hover:bg-app-surface-hover">
          <MessageCircle className="h-[22px] w-[22px]" />
          <span className="text-xs font-semibold tabular-nums">{comments}</span>
        </button>
        <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-app-surface-hover">
          <Send className="h-[20px] w-[20px]" />
        </button>
      </div>
      <button
        onClick={() => setIsSaved((v) => !v)}
        className="grid h-9 w-9 place-items-center rounded-full hover:bg-app-surface-hover"
      >
        <Bookmark
          className={cn(
            "h-[20px] w-[20px]",
            isSaved && "fill-foreground text-foreground"
          )}
        />
      </button>
    </div>
  );
};

const PostCard = ({ post }: { post: FeedPost }) => {
  if (post.kind === "post") {
    return (
      <Card>
        <AuthorRow post={post} />
        <div className="px-4 pt-3">
          <p className="text-[15px] leading-snug">{post.caption}</p>
        </div>
        <div className="relative mt-3 overflow-hidden">
          <img src={post.image} alt="" className="aspect-[4/5] w-full object-cover" />
          {post.dogTag && (
            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
              🐾 {post.dogTag}
            </span>
          )}
        </div>
        <ActionBar
          liked={post.liked}
          saved={post.saved}
          likes={post.likes}
          comments={post.comments}
        />
      </Card>
    );
  }

  if (post.kind === "walk") {
    return (
      <Card className="overflow-hidden">
        <AuthorRow post={post} />
        <div className="m-4 mt-3 rounded-2xl bg-primary/8 p-4 ring-1 ring-primary/15">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                Совместная прогулка
              </span>
              <h3 className="mt-2 text-base font-extrabold leading-tight">{post.title}</h3>
              <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                <p className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {post.place}
                </p>
                <p className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  {post.whenLabel}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-semibold uppercase text-muted-foreground">от вас</p>
              <p className="text-lg font-extrabold text-primary">{post.distanceKm} км</p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-app-surface px-2.5 py-1 text-[11px] font-medium text-muted-foreground border border-app-border"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {post.attendees.slice(0, 4).map((a, i) => (
                  <img
                    key={i}
                    src={a.avatar}
                    alt=""
                    className="h-7 w-7 rounded-full object-cover ring-2 ring-app-surface"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-muted-foreground">
                <Users className="mr-1 inline h-3 w-3" />
                {post.attendees.length}/{post.capacity}
              </span>
            </div>
            <button className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-md shadow-primary/30 hover:brightness-110 active:scale-95 transition-all">
              Присоединиться
            </button>
          </div>
        </div>
      </Card>
    );
  }

  if (post.kind === "event") {
    return (
      <Card className="overflow-hidden">
        <AuthorRow post={post} />
        <div className="relative mt-3 overflow-hidden">
          <img src={post.cover} alt="" className="aspect-[16/10] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase backdrop-blur">
              Событие
            </span>
            <h3 className="mt-1.5 text-lg font-extrabold leading-tight">{post.title}</h3>
            <div className="mt-1 flex items-center gap-3 text-[11px] text-white/85">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" /> {post.dateLabel}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {post.place}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4">
          <p className="text-xs font-medium text-muted-foreground">
            <span className="font-bold text-foreground">{post.going.toLocaleString("ru")}</span> идут
          </p>
          <button className="rounded-full border-2 border-primary px-4 py-1.5 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            Иду!
          </button>
        </div>
      </Card>
    );
  }

  if (post.kind === "review") {
    return (
      <Card>
        <AuthorRow post={post} />
        <div className="px-4 pt-3">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">{post.placeName}</p>
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">
                {post.placeType}
              </p>
            </div>
            <div className="flex items-center gap-0.5 rounded-full bg-primary/10 px-2.5 py-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3.5 w-3.5",
                    i < post.rating
                      ? "fill-primary text-primary"
                      : "text-muted-foreground/30"
                  )}
                />
              ))}
            </div>
          </div>
          <p className="mt-3 text-[14px] leading-snug">{post.text}</p>
        </div>
        {post.photo && (
          <img
            src={post.photo}
            alt=""
            className="mt-3 aspect-[16/10] w-full object-cover"
          />
        )}
        <ActionBar likes={42} comments={6} />
      </Card>
    );
  }

  // lost
  return (
    <Card className="overflow-hidden border-destructive/30">
      <div className="flex items-center gap-2 bg-destructive/10 px-4 py-2 text-destructive">
        <AlertTriangle className="h-4 w-4" />
        <span className="text-[11px] font-bold uppercase tracking-wide">Срочно: пропала собака</span>
      </div>
      <AuthorRow post={post} />
      <div className="grid grid-cols-[100px_1fr] gap-3 p-4">
        <img
          src={post.photo}
          alt={post.dogName}
          className="aspect-square w-full rounded-2xl object-cover"
        />
        <div className="min-w-0">
          <p className="text-base font-extrabold">{post.dogName}</p>
          <p className="text-xs text-muted-foreground">{post.breed}</p>
          <p className="mt-2 text-xs leading-snug">
            <span className="font-semibold">Последний раз:</span> {post.lastSeen}
          </p>
          <button className="mt-3 w-full rounded-full bg-foreground px-3 py-2 text-xs font-bold text-background hover:opacity-90">
            Я видел(а) Тоби
          </button>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
