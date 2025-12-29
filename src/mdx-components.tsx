import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { createGenerator } from 'fumadocs-typescript';
import { AutoTypeTable } from 'fumadocs-typescript/ui';
import { GithubCard } from './components/github-card';
import { ContributorCredit } from './components/contributor-credit';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={createGenerator(props)} />
    ),
    GithubCard,
    ContributorCredit,
    ...components,
  };
}
