import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type Props = {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
};

export default function PaginationSelector({
  page,
  pages,
  onPageChange,
}: Props) {
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pb-10">
      <Pagination>
        <PaginationContent>
          {page !== 1 && (
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => onPageChange(page - 1)}
              />
            </PaginationItem>
          )}

          {pageNumbers.map((number) => (
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => onPageChange(number)}
                isActive={page === number}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}

          {page !== pageNumbers.length && (
            <PaginationItem>
              <PaginationNext href="#" onClick={() => onPageChange(page + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
