export const changeToKebabCase = (str: string): string =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // camelCase → kebab-case
    .replace(/[_\s]+/g, "-") // underscores/spaces → dash
    .toLowerCase();

export const generateBlogSlug = (title: string, id: string | number) => {
  return title

    .toLowerCase()

    .replace(/ /g, "-")

    .replace(/[^\w-]+/g, "")

    .concat(`-${id}`);
};

export const getIdFromBlogSlug = (slug: string): number | null => {
  const id = slug.split("-")[slug.split("-").length - 1];
  return isNaN(Number(id)) ? null : Number(id);
};
