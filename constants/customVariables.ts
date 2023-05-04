export const CUSTOM_DEBOUNCE_TIMEOUT = 1000;
type HeadersOptionsType = {
  key: string;
  label: string;
  redirect: string;
};
export const customHeadersOptions: Array<HeadersOptionsType> = [
  {
    key: 'movies',
    label: 'Movies',
    redirect: '/movies',
  },
  {
    key: 'series',
    label: 'TV Series',
    redirect: '/series',
  },
  {
    key: 'trending',
    label: 'Trending',
    redirect: '/trending',
  },
  {
    key: 'actors',
    label: 'Actors',
    redirect: '/actors',
  },
  {
    key: 'favorites',
    label: 'Favorites',
    redirect: '/favorites',
  },
];

export enum CustomPaginationOptions {
  N6 = 6,
}
