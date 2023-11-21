import { ReactElement, forwardRef } from 'react';
import { TTable } from './type';
import { FieldText } from '../../../molecules';
import { FiSearch } from 'react-icons/fi';
import { Select } from '../../../atoms';

export const Table = forwardRef<HTMLTableElement, TTable>(
  (props, ref): ReactElement => {
    return (
      <section className="shadow-md p-4 border rounded-lg w-full gap-y-4 flex flex-col">
        <div className="flex gap-x-4">
          <FieldText
            placeholder="Cari Data..."
            size="sm"
            type="search"
            preppend={<FiSearch className="text-gray-400" size={20} />}
          />
          <Select
            options={[
              { label: 'Semua', value: 'all' },
              { label: 'Aktif', value: 'active' },
              { label: 'Tidak Aktif', value: 'inactive' },
            ]}
          />
        </div>
        <div className="w-full overflow-x-auto">
          <table
            {...props}
            ref={ref}
            className="border border-gray-100 rounded-lg p-1 w-full"
          >
            {props.children}
          </table>
        </div>
      </section>
    );
  }
);

Table.displayName = 'Table';
