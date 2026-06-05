'use client';

import { Sparkles } from 'lucide-react';
import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/ai/search';

export function AskAI() {
  return (
    <AISearch>
      <AISearchPanel />
      <AISearchTrigger
        position="float"
        className="flex w-auto items-center gap-2 rounded-full border bg-fd-secondary px-4 py-2 text-sm font-medium text-fd-secondary-foreground shadow-lg hover:bg-fd-accent"
      >
        <Sparkles className="size-4" />
        Ask AI
      </AISearchTrigger>
    </AISearch>
  );
}
