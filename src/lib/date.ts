/** "aug 2026" — shared by the writing index and each essay page. */
export const formatEssayDate = (date: Date): string =>
  date
    .toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .toLowerCase();
