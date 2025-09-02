import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPost() {
  return (
    <article className="max-w-3xl mx-auto prose dark:prose-invert animate-pulse">
      {/* Cover skeleton */}
      <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 text-muted-foreground mb-4 text-sm">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>

        <Skeleton className="h-10 w-3/4 mb-4" />

        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </header>

      {/* Content skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </article>
  );
}