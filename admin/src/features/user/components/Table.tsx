import AddCardIcon from "@mui/icons-material/AddCard";
import { Avatar, Box, IconButton, Stack, Tooltip } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import RemoveIconButton from "components/buttons/RemoveIconButton";
import ShowIconButton from "components/buttons/ShowIconButton";
import ButtonsStack from "components/layout/ButtonsStack";
import LTR from "components/layout/LTR";
import PaginationTable from "components/tables/PaginationTable";
import TableRowStriped from "components/tables/PaginationTable/TableRowStriped";
import dayjs from "dayjs";
import useEventSearchParams from "hooks/useEventSearchParams";
import usePageNumberSearchParam from "hooks/usePageNumberSearchParam";
import useQuerySearchParam from "hooks/useQuerySearchParam";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { getPage } from "utils/apiHelpers";
import { priceFormatter } from "utils/transforms";
import { User, userQueries } from "..";
import useTableHeader from "../hooks/useTableHeaders";
type Props = { setUserToDeposit: React.Dispatch<React.SetStateAction<User | null>> };
export const Table: FC<Props> = ({ setUserToDeposit }) => {
  const search = useQuerySearchParam();
  const page = usePageNumberSearchParam();
  const { remove, details } = useEventSearchParams();
  const query = userQueries.useAll({
    search,
    page,
  });
  const { data } = query;
  const { t } = useTranslation("user");
  const tableHeaders = useTableHeader();
  const currentPage = getPage(data, page);
  return (
    <PaginationTable
      sx={{
        "td:nth-of-type(1) .MuiSkeleton-root": {
          ml: 7,
        },
      }}
      pageNumber={page}
      tableHead={
        <TableHead>
          <TableRow>
            {tableHeaders.map((cellHeader, index) => (
              <TableCell
                key={cellHeader}
                sx={{
                  ...(index === 0 && { "&.MuiTableCell-root": { pl: 9, textAlign: "start" } }),
                }}
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
            <TableCell>
              <Stack direction="row" alignItems={"center"} gap={3}>
                <Avatar>
                  <Box component="img" src={row.photo} sx={{ height: 1 }} />
                </Avatar>
                <Box flex={1} textAlign={"start"}>
                  {row.name}
                </Box>
              </Stack>
            </TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.wallet && priceFormatter.format(row.wallet.available)}</TableCell>
            <TableCell>{row.wallet && priceFormatter.format(row.wallet.pending)}</TableCell>
            <TableCell>
              <LTR>{dayjs(row.createdAt).format("YYYY/MM/DD hh:mm A")}</LTR>
            </TableCell>
            <TableCell>
              <ButtonsStack>
                <Tooltip title={t("table.deposit")}>
                  <IconButton onClick={() => setUserToDeposit(row)}>
                    <AddCardIcon sx={{ color: "secondary.main" }} />
                  </IconButton>
                </Tooltip>
                <ShowIconButton onClick={() => details(row._id)} />
                <RemoveIconButton onClick={() => remove(row._id)} />
              </ButtonsStack>
            </TableCell>
          </TableRowStriped>
        ))}
      </TableBody>
    </PaginationTable>
  );
};
