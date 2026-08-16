export interface JournalMetric {
  index: "SCI";
  impactFactor: number;
}

/**
 * Latest publicly available Journal Impact Factors, verified 2026-08-16.
 * The metric year is intentionally omitted from the UI; update values here
 * when a new Journal Citation Reports release becomes available.
 */
const journalMetricsByPublicationKey: Partial<Record<string, JournalMetric>> = {
  survey: { index: "SCI", impactFactor: 30.4 },
  TKDD: { index: "SCI", impactFactor: 6.9 },
  plosone: { index: "SCI", impactFactor: 2.8 },
  kbs: { index: "SCI", impactFactor: 8.0 },
};

export function getJournalMetric(publicationKey: string): JournalMetric | undefined {
  return journalMetricsByPublicationKey[publicationKey];
}
