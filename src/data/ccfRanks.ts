export type CcfRank = "A" | "B" | "C";

/**
 * Publication-level ranks verified against the seventh edition of the
 * CCF Recommended International Academic Conferences and Journals list
 * (published 2026-03-31, corrected 2026-04-09).
 *
 * Findings, workshops, and venues absent from the official directory are
 * intentionally omitted.
 */
export const ccfRanksByPublicationKey: Partial<Record<string, CcfRank>> = {
  // CCF A
  ams: "A",
  halluciation: "A",
  "Core-RAG": "A",
  "Cog-Rethinker": "A",
  TTS4RS: "A",
  FedMM: "A",
  BoRA: "A",
  FC: "A",
  MoETTA: "A",
  TopLoRA: "A",
  "SRA-CL": "A",
  "RAL-CDNet": "A",
  "RTS-PnO": "A",
  SSIM: "A",
  IDUM: "A",
  Zero: "A",
  FedMUD: "A",
  CoLaKG: "A",
  MultiEmb: "A",
  UGDA: "A",
  FedMRN: "A",
  rerum: "A",
  fedbat: "A",
  autodcs: "A",
  RecDCL: "A",
  optfeature: "A",
  mm: "A",
  efin: "A",
  pimm: "A",
  alpt: "A",
  diwift: "A",
  optfs: "A",
  optinter: "A",

  // CCF B
  AutoIFS: "B",
  PtOFA: "B",
  optfusion: "B",
  optdist: "B",
  E3IR: "B",
  HTLNet: "B",
  RMNet: "B",
  TAHyper: "B",
  multifs: "B",
  optmsm: "B",
  autoreg: "B",
  sste: "B",
  optembed: "B",
  TKDD: "B",

  // CCF C
  MDM: "C",
  kbs: "C",
  UIC: "C",
};

export function getCcfRank(publicationKey: string, bibtexRank?: string): CcfRank | undefined {
  const normalizedRank = bibtexRank
    ?.trim()
    .toUpperCase()
    .replace(/^CCF[\s-]*/, "");

  if (normalizedRank === "A" || normalizedRank === "B" || normalizedRank === "C") {
    return normalizedRank;
  }

  return ccfRanksByPublicationKey[publicationKey];
}
