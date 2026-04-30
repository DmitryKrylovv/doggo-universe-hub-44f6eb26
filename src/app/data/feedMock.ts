export type FeedCategory = "all" | "walks" | "events" | "reviews" | "tips" | "vet" | "lost";

export interface Story {
  id: string;
  name: string;
  avatar: string;
  hasNew: boolean;
}

export interface FeedAuthor {
  name: string;
  handle: string;
  avatar: string;
  verified?: boolean;
  city: string;
}

export type FeedPost =
  | {
      id: string;
      kind: "post";
      author: FeedAuthor;
      timeAgo: string;
      caption: string;
      image: string;
      dogTag?: string;
      likes: number;
      comments: number;
      saved?: boolean;
      liked?: boolean;
      category: FeedCategory;
    }
  | {
      id: string;
      kind: "walk";
      author: FeedAuthor;
      timeAgo: string;
      title: string;
      place: string;
      distanceKm: number;
      whenLabel: string;
      attendees: { avatar: string }[];
      capacity: number;
      tags: string[];
      category: FeedCategory;
    }
  | {
      id: string;
      kind: "event";
      author: FeedAuthor;
      timeAgo: string;
      title: string;
      cover: string;
      dateLabel: string;
      place: string;
      going: number;
      category: FeedCategory;
    }
  | {
      id: string;
      kind: "review";
      author: FeedAuthor;
      timeAgo: string;
      placeName: string;
      placeType: string;
      rating: number;
      text: string;
      photo?: string;
      category: FeedCategory;
    }
  | {
      id: string;
      kind: "lost";
      author: FeedAuthor;
      timeAgo: string;
      dogName: string;
      breed: string;
      lastSeen: string;
      photo: string;
      category: FeedCategory;
    };

const av = (seed: string) => `https://i.pravatar.cc/120?u=${seed}`;
const dog = (seed: string) =>
  `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=900&q=80`;

export const stories: Story[] = [
  { id: "you", name: "Вы", avatar: av("you"), hasNew: false },
  { id: "1", name: "Аня", avatar: av("anya"), hasNew: true },
  { id: "2", name: "Макс", avatar: av("max"), hasNew: true },
  { id: "3", name: "Лена", avatar: av("lena"), hasNew: true },
  { id: "4", name: "Денис", avatar: av("denis"), hasNew: false },
  { id: "5", name: "Юля", avatar: av("yulia"), hasNew: true },
  { id: "6", name: "Олег", avatar: av("oleg"), hasNew: true },
  { id: "7", name: "Соня", avatar: av("sonya"), hasNew: false },
];

export const filters: { id: FeedCategory; label: string }[] = [
  { id: "all", label: "Всё" },
  { id: "walks", label: "Прогулки рядом" },
  { id: "events", label: "События" },
  { id: "reviews", label: "Отзывы" },
  { id: "tips", label: "Тренировки" },
  { id: "vet", label: "Ветсоветы" },
  { id: "lost", label: "Потеряшки" },
];

export const feed: FeedPost[] = [
  {
    id: "p1",
    kind: "post",
    author: {
      name: "Аня Соколова",
      handle: "@anya.husky",
      avatar: av("anya"),
      verified: true,
      city: "Москва",
    },
    timeAgo: "12 мин",
    caption:
      "Утро в Коломенском с Локи 🤍 Снега почти нет, идеально для длинной прогулки.",
    image: dog("1583337130417-3346a1be7dee"),
    dogTag: "Локи · Хаски",
    likes: 248,
    comments: 32,
    liked: true,
    category: "all",
  },
  {
    id: "w1",
    kind: "walk",
    author: {
      name: "Макс Орлов",
      handle: "@max.run",
      avatar: av("max"),
      city: "Москва",
    },
    timeAgo: "1 ч",
    title: "Утренняя пробежка с собаками",
    place: "Парк Горького · вход у фонтана",
    distanceKm: 1.2,
    whenLabel: "Завтра, 8:00",
    attendees: [
      { avatar: av("anya") },
      { avatar: av("lena") },
      { avatar: av("denis") },
      { avatar: av("yulia") },
    ],
    capacity: 8,
    tags: ["Активные", "Средние/крупные", "Без поводка нельзя"],
    category: "walks",
  },
  {
    id: "p2",
    kind: "post",
    author: {
      name: "Лена Ким",
      handle: "@lena.corgi",
      avatar: av("lena"),
      city: "Санкт-Петербург",
    },
    timeAgo: "3 ч",
    caption: "Бэйби впервые увидел снег. Восторг не передать словами ❄️",
    image: dog("1587300003388-59208cc962cb"),
    dogTag: "Бэйби · Корги",
    likes: 512,
    comments: 64,
    category: "all",
  },
  {
    id: "e1",
    kind: "event",
    author: {
      name: "Dogza Events",
      handle: "@dogza",
      avatar: av("dogza"),
      verified: true,
      city: "Москва",
    },
    timeAgo: "5 ч",
    title: "DogFest 2026 · фестиваль для собак и хозяев",
    cover: dog("1561037404-61cd46aa615b"),
    dateLabel: "Сб, 16 мая · 12:00",
    place: "Парк Сокольники",
    going: 1284,
    category: "events",
  },
  {
    id: "r1",
    kind: "review",
    author: {
      name: "Денис Волков",
      handle: "@denis.bulldog",
      avatar: av("denis"),
      city: "Москва",
    },
    timeAgo: "вчера",
    placeName: "Кафе «Hugo & Bear»",
    placeType: "Догфрендли кафе",
    rating: 5,
    text:
      "Принесли миску с водой ещё до того, как мы сели. Барни в восторге, на кухне даже есть лакомства для гостей-собак.",
    photo: dog("1601758228041-f3b2795255f1"),
    category: "reviews",
  },
  {
    id: "l1",
    kind: "lost",
    author: {
      name: "Юля Морозова",
      handle: "@yulia",
      avatar: av("yulia"),
      city: "Москва",
    },
    timeAgo: "2 ч",
    dogName: "Тоби",
    breed: "Джек-рассел, 3 года",
    lastSeen: "район Хамовники, ул. Пречистенка, ~14:30",
    photo: dog("1561037404-61cd46aa615b"),
    category: "lost",
  },
];
