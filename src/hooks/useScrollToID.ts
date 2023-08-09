// hook window.scrollTo() to scroll to an element by id

// scrollToID hook
const useScrollToID = () => {
  const onScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop,
      });
    }
  };

  return {
    onScroll,
  };
};

export default useScrollToID;
