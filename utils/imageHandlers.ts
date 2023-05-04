export const importAllImages = (r: {
  (arg0: any): any;
  (arg0: any): any;
  keys: any;
}) => {
  let images: Record<string, string> = {};

  r?.keys().map(
    (item: string, _index: string) =>
      (images[item.replace('./', '')] = r(item)),
  );
  return images;
};
