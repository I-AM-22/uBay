import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIconButton from "components/buttons/EditIconButton";
import RemoveIconButton from "components/buttons/RemoveIconButton";
import ButtonsStack from "components/layout/ButtonsStack";
import PaginationTable from "components/tables/PaginationTable";
import TableRowStriped from "components/tables/PaginationTable/TableRowStriped";
import useEventSearchParams from "hooks/useEventSearchParams";
import usePageNumberSearchParam from "hooks/usePageNumberSearchParam";
import useQuerySearchParam from "hooks/useQuerySearchParam";
import { FC } from "react";
import { getPage } from "utils/apiHelpers";
import { cityQueries } from "..";
import useTableHeader from "../hooks/useTableHeaders";
type Props = {};
export const Table: FC<Props> = ({}) => {
  const search = useQuerySearchParam();
  const page = usePageNumberSearchParam();
  const { edit, remove } = useEventSearchParams();
  const query = cityQueries.useAll({
    search,
    page,
  });
  const { data } = query;
  const tableHeaders = useTableHeader();
  const currentPage = getPage(data, page);
  return (
    <PaginationTable
      pageNumber={page}
      tableHead={
        <TableHead>
          <TableRow>
            {tableHeaders.map((cellHeader, index) => (
              <TableCell
                key={cellHeader}
                sx={index === 0 ? { "&.MuiTableCell-root": { width: 0.7, pr: 30 } } : {}}
              >
                {cellHeader}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      }
      skeleton={true}
      cellCount={tableHeaders.length}
      infiniteQuery={query}
    >
      <TableBody>
        {currentPage.map((row) => (
          <TableRowStriped key={row._id}>
            <TableCell sx={{ "&.MuiTableCell-root": { width: 0.7, pr: 30 } }}>{row.name}</TableCell>
            <TableCell>
              <ButtonsStack>
                <EditIconButton onClick={() => edit(row._id)} />
                <RemoveIconButton onClick={() => remove(row._id)} />
              </ButtonsStack>
            </TableCell>
          </TableRowStriped>
        ))}
      </TableBody>
    </PaginationTable>
  );
};
