

function normalizeSpaces(text) {
  return String(text).trim().replace(/\s+/g, ' ');
}

function countWords(text) {
  const cleaned = normalizeSpaces(text);
  return cleaned ? cleaned.split(' ').length : 0;
}

function reverseText(text) {
  return Array.from(String(text)).reverse().join('');
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s-]+/g, '-');
}

function capitalizeWords(text) {
  return normalizeSpaces(text)
    .replace(/\b\w/g, char => char.toUpperCase());
}

function truncateText(text, limit) {
  const value = String(text);

  if (!Number.isInteger(limit) || limit < 0) {
    throw new Error('limit must be a non-negative integer');
  }

  if (value.length <= limit) return value;
  if (limit <= 3) return '.'.repeat(limit);

  return value.slice(0, limit - 3) + '...';
}

module.exports = {
  normalizeSpaces,
  countWords,
  reverseText,
  slugify,
  capitalizeWords,
  truncateText
};
