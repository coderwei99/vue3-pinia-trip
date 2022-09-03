export const reload_vite_iamgeUrl = (iamgeUrl: string) => {
  return new URL(`../assets/iamge/${iamgeUrl}`, import.meta.url).href;
};
