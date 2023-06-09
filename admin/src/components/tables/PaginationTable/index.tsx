import { Box, TableBody, TableCell, TableContainer, TableHeadProps } from "@mui/material";
import Paper, { PaperProps } from "@mui/material/Paper";
import { Stack } from "@mui/system";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import Skeleton, { SkeletonProps } from "components/feedback/Skeleton";
import SomethingWentWrong from "components/feedback/SomethingWentWrong";
import RepeatELement from "components/layout/RepeatElement";
import { PAGE_SIZE } from "constants/apiList";
import { FC, ReactElement, ReactNode } from "react";
import { APIList } from "types/api";
import Loading from "../../feedback/Loading";
import NoData from "../../feedback/NoData";
import Table from "../TableWithAlign";
import PaginationButtons from "./PaginationButtons";
import TableRowStriped from "./TableRowStriped";
import { useHandlePageChange } from "./useHandlePageChange";
type Props = {
  infiniteQuery: UseInfiniteQueryResult<APIList<unknown>, unknown>;
  children: ReactNode;
  pageNumber: number;
  tableHead: ReactElement<TableHeadProps>;
} & PaperProps &
  (
    | { skeleton?: true; cellCount: number; rowCount?: number; skeletonProps?: SkeletonProps }
    | { skeleton?: false; cellCount?: undefined; rowCount?: undefined; skeletonProps?: undefined }
  );
const PaginationTable: FC<Props> = ({
  infiniteQuery,
  children,
  pageNumber,
  skeleton,
  skeletonProps,
  tableHead,
  cellCount,
  rowCount,
  ...props
}) => {
  const { fetchNextPage, fetchPreviousPage, data, isLoading, isSuccess, isError } = infiniteQuery;
  const handlePageChange = useHandlePageChange({
    fetchNextPage,
    fetchPreviousPage,
    pages: [],
  });

  const noData = !data?.pages[0].data.length && isSuccess;

  return (
    <Paper {...props} sx={{ borderRadius: 2, mb: 6, overflow: "hidden", ...props.sx }}>
      <Stack>
        <TableContainer>
          <Table>
            {tableHead}
            {isSuccess && children}
            {isLoading && skeleton && (
              <RepeatELement repeat={rowCount ?? PAGE_SIZE} container={<TableBody />}>
                <RepeatELement repeat={cellCount} container={<TableRowStriped />}>
                  <TableCell>
                    <Skeleton
                      widthRange={{ min: 20, max: 40 }}
                      height={30}
                      sx={{ m: "auto" }}
                      {...skeletonProps}
                    />
                  </TableCell>
                </RepeatELement>
              </RepeatELement>
            )}
          </Table>
        </TableContainer>
        {isLoading && !skeleton && (
          <Box sx={{ mx: "auto", my: 2 }}>
            <Loading />
          </Box>
        )}

        {noData && (
          <Box sx={{ mx: "auto", my: 2 }}>
            <NoData />
          </Box>
        )}
        {isError && (
          <Box sx={{ mx: "auto", my: 2 }}>
            <SomethingWentWrong />
          </Box>
        )}
        {data?.pages[0].totalDataCount !== 0 && (
          <PaginationButtons page={pageNumber} handleChangePage={handlePageChange} data={data} />
        )}
      </Stack>
    </Paper>
  );
};

export default PaginationTable;
