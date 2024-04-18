const colors = {
  // PRIMARY_COLOR: '#3B22AC',
  PRIMARY_COLOR: '#FFB444',
  SECONDARY_COLOR: '#2AADAD',
};

export const lightTheme = {
  ...colors,
  SECONDARY_BACKGROUND_COLOR: '#F8FAFC',
  PRIMARY_BACKGROUND_COLOR: '#e2e8f0',
  // PRIMARY_BACKGROUND_COLOR: '#F8FAFC',
  // SECONDARY_BACKGROUND_COLOR: '#e2e8f0',
  PRIMARY_TEXT_COLOR: '#131314',
  SECONDARY_TEXT_COLOR: 'rgba(19, 19, 20, 0.6)',
  BACKGROUND_OPACITY: 0.05,
};

export const darkTheme = {
  ...colors,
  PRIMARY_BACKGROUND_COLOR: '#030712',
  SECONDARY_BACKGROUND_COLOR: '#1E293B',
  SECONDARY_TEXT_COLOR: '#6C768A',
  PRIMARY_TEXT_COLOR: '#D1D5DB',
  BACKGROUND_OPACITY: 0.4,
};
