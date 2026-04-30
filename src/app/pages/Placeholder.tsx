import { Construction } from "lucide-react";

const Placeholder = ({ title, hint }: { title: string; hint: string }) => (
  <div className="px-4 pt-4">
    <h1 className="text-2xl font-extrabold tracking-tight">{title}</h1>
    <div className="mt-6 rounded-3xl border border-dashed border-app-border bg-app-surface p-10 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Construction className="h-6 w-6" />
      </div>
      <p className="mt-4 text-sm font-semibold">Скоро здесь появится экран</p>
      <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
    </div>
  </div>
);

export default Placeholder;
