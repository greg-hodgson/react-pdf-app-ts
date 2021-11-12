interface FilterableTableProps {
  children: React.ReactNode;
}

function FilterableTable({ children }: FilterableTableProps) {

  return <div className="FilterableTable-wrapper">{children}</div>;
}

export default FilterableTable;
