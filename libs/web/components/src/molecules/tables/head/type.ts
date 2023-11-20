import { HeaderGroup } from '@tanstack/react-table';

export type TTableHead<T extends Record<string, unknown>> = {
  tableHead: HeaderGroup<T>[];
};
