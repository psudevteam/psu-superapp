import { TMetaItem } from '@psu-superapp/entities';
import {
  ColumnDef,
  ExpandedState,
  OnChangeFn,
  PaginationState,
  Row,
  RowModel,
  RowSelectionState,
  Table,
  Updater,
} from '@tanstack/react-table';
import { ChangeEventHandler } from 'react';

export type TDataTable<T extends Record<string, unknown>> = {
  data: T[];
  meta?: TMetaItem;
  columns: ColumnDef<T>[];
  handleSearch?: ChangeEventHandler<HTMLInputElement>;
  setPagination?: (updater: Updater<PaginationState>) => void;
  isLoading?: boolean;
  onPaginationChange?: OnChangeFn<PaginationState>;
  manualPagination?: boolean;
  manualExpanding?: boolean;
  manualSorting?: boolean;
  manualFiltering?: boolean;
  manualGrouping?: boolean;
  pageCount?: number;
  autoResetPageIndex?: boolean;
  resetPagination?: (defaultState?: boolean) => void;
  setPageIndex?: (updater: Updater<number>) => void;
  resetPageIndex?: (defaultState?: boolean) => void;
  setPageSize?: (updater: Updater<number>) => void;
  resetPageSize?: (defaultState?: boolean) => void;
  setPageCount?: (updater: Updater<number>) => void;
  getPageOptions?: () => number[];
  getCanPreviousPage?: () => boolean;
  getCanNextPage?: () => boolean;
  previousPage?: () => void;
  nextPage?: () => void;
  getPageCount?: () => number;
  getPrePaginationRowModel?: () => RowModel<T>;
  getPaginationRowModel?: () => RowModel<T>;
  toggleExpanded?: (expanded?: boolean) => void;
  getIsExpanded?: () => boolean;
  getIsAllParentsExpanded?: () => boolean;
  getCanExpand?: () => boolean;
  getToggleExpandedHandler?: () => () => void;
  onExpandedChange?: OnChangeFn<ExpandedState>;
  autoResetExpanded?: boolean;
  enableExpanding?: boolean;
  getExpandedRowModel?: (table: Table<T>) => () => RowModel<T>;
  getIsRowExpanded?: (row: Row<T>) => boolean;
  getRowCanExpand?: (row: Row<T>) => boolean;
  paginateExpandedRows?: boolean;
  setExpanded?: (updater: Updater<ExpandedState>) => void;
  toggleAllRowsExpanded?: (expanded?: boolean) => void;
  resetExpanded?: (defaultState?: boolean) => void;
  getCanSomeRowsExpand?: () => boolean;
  getToggleAllRowsExpandedHandler?: () => (event: unknown) => void;
  getIsSomeRowsExpanded?: () => boolean;
  getIsAllRowsExpanded?: () => boolean;
  getExpandedDepth?: () => number;
  getPreExpandedRowModel?: () => RowModel<T>;
  enableRowSelection?: boolean | ((row: Row<T>) => boolean);
  enableMultiRowSelection?: boolean | ((row: Row<T>) => boolean);
  enableSubRowSelection?: boolean | ((row: Row<T>) => boolean);
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  setRowSelection?: (updater: Updater<RowSelectionState>) => void;
  resetRowSelection?: (defaultState?: boolean) => void;
  toggleAllRowsSelected?: (value: boolean) => void;
  getSelectedRowModel?: () => RowModel<T>;
  getIsSelected?: () => boolean;
  toggleSelected?: (value?: boolean) => void;
  getToggleSelectedHandler?: () => (event: unknown) => void;
  enableGlobalFilter?: boolean;
};
