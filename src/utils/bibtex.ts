/**
 * Lightweight BibTeX parser adapted from as-folio.
 * Source: https://github.com/dadangnh/as-folio (MIT License)
 */

export interface BibEntry {
  type: string;
  key: string;
  fields: Record<string, string>;
}

export interface PublicationAuthor {
  name: string;
  isCoFirst: boolean;
  isCorresponding: boolean;
}

function matchingBrace(source: string, from: number): number {
  let depth = 1;
  let index = from + 1;

  while (index < source.length && depth > 0) {
    if (source[index] === "{") depth += 1;
    if (source[index] === "}") depth -= 1;
    index += 1;
  }

  return depth === 0 ? index - 1 : -1;
}

export function parseBibtex(source: string): BibEntry[] {
  const entries: BibEntry[] = [];
  const cleaned = source.replace(/%[^\n]*/g, "");
  const matches = [...cleaned.matchAll(/@(\w+)\s*\{/g)];

  for (const match of matches) {
    const type = match[1].toLowerCase();
    if (["string", "preamble", "comment"].includes(type)) continue;

    const openBrace = (match.index ?? 0) + match[0].length - 1;
    const closeBrace = matchingBrace(cleaned, openBrace);
    if (closeBrace === -1) continue;

    const body = cleaned.slice(openBrace + 1, closeBrace);
    const keyMatch = body.match(/^\s*([\w:-]+)\s*,/);
    if (!keyMatch) continue;

    const fields: Record<string, string> = {};
    const fieldsSource = body.slice(keyMatch[0].length);
    let position = 0;

    while (position < fieldsSource.length) {
      while (position < fieldsSource.length && /[\s,]/.test(fieldsSource[position])) {
        position += 1;
      }
      if (position >= fieldsSource.length) break;

      const fieldMatch = fieldsSource.slice(position).match(/^([\w-]+)\s*=/);
      if (!fieldMatch) break;
      const fieldName = fieldMatch[1].toLowerCase();
      position += fieldMatch[0].length;

      while (position < fieldsSource.length && /\s/.test(fieldsSource[position])) {
        position += 1;
      }

      let value = "";
      if (fieldsSource[position] === "{") {
        const end = matchingBrace(fieldsSource, position);
        if (end === -1) break;
        value = fieldsSource.slice(position + 1, end);
        position = end + 1;
      } else if (fieldsSource[position] === '"') {
        const end = fieldsSource.indexOf('"', position + 1);
        if (end === -1) break;
        value = fieldsSource.slice(position + 1, end);
        position = end + 1;
      } else {
        const bareMatch = fieldsSource.slice(position).match(/^([^,}\s]+)/);
        if (!bareMatch) break;
        value = bareMatch[1];
        position += bareMatch[0].length;
      }

      fields[fieldName] = value.trim();
    }

    entries.push({ type, key: keyMatch[1], fields });
  }

  return entries;
}

export function cleanLatex(value = ""): string {
  return value.replace(/[{}]/g, "").replace(/\\&/g, "&").replace(/~/g, " ").replace(/\s+/g, " ").trim();
}

function extractAuthorMarkers(value: string): { name: string; markers: string } {
  const normalizedValue = value.replace(/\\([*#])/g, "$1");
  const markerText = normalizedValue.match(/((?:\s*[*∗＊#＃])+)$/)?.[1] ?? "";

  return {
    name: normalizedValue.slice(0, normalizedValue.length - markerText.length).trim(),
    markers: markerText.replace(/\s+/g, ""),
  };
}

export function getAuthorDetails(entry: BibEntry): PublicationAuthor[] {
  return (entry.fields.author ?? "")
    .split(/\s+and\s+/i)
    .map((author) => {
      const terminal = extractAuthorMarkers(author.trim());
      let markerText = terminal.markers;
      let displayName = terminal.name;

      if (terminal.name.includes(",")) {
        const nameParts = terminal.name.split(",").map((part) => part.trim());
        const lastName = extractAuthorMarkers(nameParts[0]);
        markerText += lastName.markers;
        nameParts[0] = lastName.name;
        displayName = nameParts.reverse().join(" ");
      }

      return {
        name: cleanLatex(displayName),
        isCoFirst: /[*∗＊]/.test(markerText),
        isCorresponding: /[#＃]/.test(markerText),
      };
    })
    .filter((author) => Boolean(author.name));
}

export function getAuthors(entry: BibEntry): string[] {
  return getAuthorDetails(entry).map((author) => author.name);
}

export function getVenue(entry: BibEntry): string {
  return cleanLatex(entry.fields.journal ?? entry.fields.booktitle ?? entry.fields.publisher ?? entry.fields.howpublished ?? "");
}

export function isSelected(entry: BibEntry): boolean {
  return entry.fields.selected?.toLowerCase() === "true";
}
