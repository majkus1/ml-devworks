import { Fragment, type ReactNode } from "react";

/**
 * Minimalny renderer markdownu dla odpowiedzi asystenta:
 * akapity, listy punktowane i numerowane, **pogrubienie**, `kod`.
 * Buduje elementy React - bez dangerouslySetInnerHTML.
 */

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let index = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={`${keyPrefix}-t${index++}`}>{text.slice(lastIndex, match.index)}</Fragment>);
    }
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(
        <strong key={`${keyPrefix}-b${index++}`} className="font-semibold text-white">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      nodes.push(
        <code key={`${keyPrefix}-c${index++}`} className="px-1 py-0.5 rounded bg-background border border-primary/20 text-primary text-[0.9em]">
          {token.slice(1, -1)}
        </code>,
      );
    }
    lastIndex = match.index + token.length;
  }

  if (lastIndex < text.length) {
    nodes.push(<Fragment key={`${keyPrefix}-t${index++}`}>{text.slice(lastIndex)}</Fragment>);
  }

  return nodes;
}

type Block =
  | { type: "p"; lines: string[] }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

function parseBlocks(text: string): Block[] {
  const blocks: Block[] = [];
  const lines = text.replace(/\r\n/g, "\n").split("\n");

  for (const rawLine of lines) {
    const line = rawLine.replace(/^#{1,6}\s+/, "").trimEnd();
    const trimmed = line.trim();
    const last = blocks[blocks.length - 1];

    if (!trimmed) {
      if (last && last.type === "p" && last.lines.length) blocks.push({ type: "p", lines: [] });
      continue;
    }

    const bullet = /^[-*•]\s+(.*)$/.exec(trimmed);
    if (bullet) {
      if (last && last.type === "ul") last.items.push(bullet[1]);
      else blocks.push({ type: "ul", items: [bullet[1]] });
      continue;
    }

    const numbered = /^\d+[.)]\s+(.*)$/.exec(trimmed);
    if (numbered) {
      if (last && last.type === "ol") last.items.push(numbered[1]);
      else blocks.push({ type: "ol", items: [numbered[1]] });
      continue;
    }

    if (last && last.type === "p") last.lines.push(trimmed);
    else blocks.push({ type: "p", lines: [trimmed] });
  }

  return blocks.filter((block) => block.type !== "p" || block.lines.length > 0);
}

export default function MessageMarkdown({ text }: { text: string }) {
  const blocks = parseBlocks(text);

  return (
    <div className="space-y-2.5 text-[15px] leading-relaxed">
      {blocks.map((block, blockIndex) => {
        const key = `b${blockIndex}`;
        if (block.type === "ul") {
          return (
            <ul key={key} className="list-disc pl-5 space-y-1 marker:text-primary">
              {block.items.map((item, itemIndex) => (
                <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={key} className="list-decimal pl-5 space-y-1 marker:text-primary">
              {block.items.map((item, itemIndex) => (
                <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
              ))}
            </ol>
          );
        }
        return (
          <p key={key}>
            {block.lines.map((line, lineIndex) => (
              <Fragment key={`${key}-${lineIndex}`}>
                {lineIndex > 0 && <br />}
                {renderInline(line, `${key}-${lineIndex}`)}
              </Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
