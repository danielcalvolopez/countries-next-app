const useLocalStorage = () => {
  const setLocalStorage = (key, value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  };
  const getLocalStorage = (key) => {
    if (typeof window !== "undefined") {
      localStorage.getItem(key);
    }
  };

  return { setLocalStorage, getLocalStorage };
};

export default useLocalStorage;
