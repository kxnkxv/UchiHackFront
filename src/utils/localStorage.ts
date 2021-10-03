export const setStorageItem = <T>(key: string, value: T): void => {
  if (navigator.cookieEnabled) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getStorageItem = <T>(key: string): T | null => {
  if (navigator.cookieEnabled && window.localStorage[key]) {
    return JSON.parse(window.localStorage[key]);
  }
  return null;
};

export const removeStorageItem = (key: string): void => {
  if (navigator.cookieEnabled && window.localStorage[key]) {
    window.localStorage.removeItem(key);
  }
};
