export enum SortFields {
  TITLE = 'title',
  ARTIST = 'artist_title',
  DATE = 'date_display',
  PLACE = 'place_of_origin',
}

export const sortFields = [
  {
    label: 'Title',
    value: SortFields.TITLE,
  },
  {
    label: 'Artist',
    value: SortFields.ARTIST,
  },
  {
    label: 'Date',
    value: SortFields.DATE,
  },
  {
    label: 'Place',
    value: SortFields.PLACE,
  },
];
