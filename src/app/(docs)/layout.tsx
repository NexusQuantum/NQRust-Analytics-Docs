import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { AskAI } from '@/components/ai/ask-ai';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      {children}
      <AskAI />
    </DocsLayout>
  );
}
