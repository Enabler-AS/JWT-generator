const removeSecret = (): void => {
  window.history.pushState(
    '',
    document.title,
    window.location.pathname + window.location.search
  );
};

export default removeSecret;
