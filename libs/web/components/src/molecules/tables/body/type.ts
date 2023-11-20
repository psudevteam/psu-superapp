import { RowModel } from '@tanstack/react-table';

export type TTableBody<T extends Record<string, unknown>> = {
  tableBody: RowModel<T>;
};
