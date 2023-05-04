import { TablePagination } from "@mui/material";
import { InfiniteData } from "@tanstack/react-query";
import { Pagination } from "../../../types/api";

interface PaginationTableProps {
  data?: InfiniteData<{
    data: Pagination<unknown>;
    pageParam: any;
  }>;
  page: number;
  handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
}

const PaginationButtons = ({ data, page, handleChangePage }: PaginationTableProps) => {
  const isDisabled = !data;
  return (
    <TablePagination
      rowsPerPageOptions={[data?.pages[0].data.data.length ?? 0]}
      component="div"
      count={data?.pages[0].data.totalDataCount ?? 0}
      rowsPerPage={data?.pages[0].data.data.length ?? 0}
      page={page}
      onPageChange={handleChangePage}
      SelectProps={{
        disabled: isDisabled,
      }}
      backIconButtonProps={
        isDisabled
          ? {
              disabled: isDisabled,
            }
          : undefined
      }
      nextIconButtonProps={
        isDisabled
          ? {
              disabled: isDisabled,
            }
          : undefined
      }
    />
  );
};

export default PaginationButtons;
