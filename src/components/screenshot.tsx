'use client';

import { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

/**
 * A screenshot slot for the docs.
 *
 * - Drop the image file at `public/<src>` (e.g. src="/images/docs/connect/postgresql-form.png"
 *   → file at `public/images/docs/connect/postgresql-form.png`) and it renders automatically.
 * - Until the file exists, a labelled placeholder is shown telling you exactly
 *   what to capture and where to put it.
 *
 * Implemented with <span> (display:block/flex) + <img> only — all phrasing
 * content — so it stays valid HTML even when MDX wraps it inside a <p>.
 */
export function Screenshot({
  src,
  caption,
  alt,
}: {
  src: string;
  caption?: string;
  alt?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={cn(
          'my-4 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-dashed',
          'bg-fd-muted/50 px-4 py-10 text-center text-fd-muted-foreground',
        )}
      >
        <ImageIcon className="size-6" />
        <span className="text-sm font-medium">Screenshot needed</span>
        {caption && <span className="max-w-prose text-xs">{caption}</span>}
        <code className="mt-1 rounded bg-fd-secondary px-1.5 py-0.5 text-[11px]">
          public{src}
        </code>
      </span>
    );
  }

  return (
    <span className="my-4 block overflow-hidden rounded-lg border shadow-sm">
      <span className="flex justify-center bg-fd-muted/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? caption ?? 'Screenshot'}
          onError={() => setFailed(true)}
          className="block max-h-[32rem] w-auto max-w-full object-contain"
        />
      </span>
      {caption && (
        <span className="block border-t bg-fd-card px-3 py-2 text-center text-xs text-fd-muted-foreground">
          {caption}
        </span>
      )}
    </span>
  );
}
