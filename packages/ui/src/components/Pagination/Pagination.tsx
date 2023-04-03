import * as React from "react";
import classnames from "classnames";
import css from "./Pagination.module.scss";
import * as utils from "../../utils";

export interface PaginationProps extends React.ComponentPropsWithRef<"nav"> {
  totalPages: number;
  currentPage: number;
  maxPages?: number;
  onPageChange: (pageNumber: number) => void;
}

interface PageItemProps {
  pageNumber: number;
  isCurrent?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  className,
  maxPages: propsMaxPages,
  ...navProps
}) => {
  const handlePageClick = (pageNumber: number) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    }
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  function PageItem(props: PageItemProps) {
    const { pageNumber, isCurrent } = props;
    const onClick = () => handlePageClick(pageNumber);
    return (
      <li
        key={pageNumber}
        className={classnames(css.pageItem, { [css.current]: isCurrent })}
      >
        <button
          type="button"
          className={classnames(css.pageButton)}
          onClick={onClick}
          aria-current={isCurrent ? "page" : undefined}
          aria-label={`Go to page number ${pageNumber}`}
        >
          {pageNumber}
        </button>
      </li>
    );
  }

  function Ellipsis() {
    return (
      <li className={classnames(css.pageItem, css.ellipsis)}>
        <span>&#8230;</span>
      </li>
    );
  }

  /** At least we show 3 pages */
  const maxPages = propsMaxPages ? Math.max(3, propsMaxPages) : undefined;
  /** The pages displayed around the currentPage. Does not include the first and last pages */
  let displayedPages = utils.range(2, totalPages - 1);
  let displayLeftEllipsis = false;
  let displayRightEllipsis = false;
  if (maxPages && maxPages < totalPages) {
    /* In this section we want to calculate:
      1. If we need to render any ellipsis between the first/last page,
         and the sublist around the current page
      2. How many and which pages do we render around the current page
    */

    /* 1. Determining if we need to draw ellipsis after first page or
          before last page */

    /* The amount of pages rendered before and after the current page.
       (Considering it falls in the middle of the range).
       Because we always render page #1 and last page, and the `maxPages`
       number include these, we substract 2 from maxPages, and we substract
       1 for the current page */
    const pagesAroundCurrent = maxPages - 2 - 1;
    /* Amount of pages that render before the current page.
       Ceiling becuase, if maxPage is even, the current page will be on
       the second half */
    const pagesBeforeCurrent = Math.ceil(pagesAroundCurrent / 2);
    /* Amount of pages that render after the current page.
       Flooring becuase, if maxPage is even, the current page will be on
       the second half */
    const pagesAfterCurrent = Math.floor(pagesAroundCurrent / 2);
    const firstRangePage = currentPage - pagesBeforeCurrent;
    const lastRangePage = currentPage + pagesAfterCurrent;
    /* The ellipsis after the first page will show if the first page
       displayed before the current one is higher than 2.
       Example [ < 1 ... 3 4 5* 6 ... 12 > ] */
    displayLeftEllipsis = firstRangePage > 2;
    /* The ellipsis befire the last page will show if the last page
       displayed after the current one is less than the last page - 1.
       Example [ < 1 ... 7 8 9* 10 ... 12 > ] */
    displayRightEllipsis = lastRangePage < totalPages - 1;

    /* 2. How many pages we render around the current page */
    if (displayLeftEllipsis && displayRightEllipsis) {
      /* The currentPages is sufficiently in the middle for the two ellipsis
         to be rendered, so the index we calculated before does work to get
         the starting and ending ranges */
      displayedPages = utils.range(firstRangePage, lastRangePage);
    } else if (displayRightEllipsis) {
      /* The current page is close to the first page, so there's no
         hidden pages between the first and the current.
         So we render from the 2nd to maxPages - 1
         (because the 1st and last pages always render) */
      displayedPages = utils.range(2, maxPages - 1);
    } else if (displayLeftEllipsis) {
      /* The current page is close to the last page, so there's no
         hidden pages between the last and the current */
      displayedPages = utils.range(totalPages - maxPages + 2, totalPages - 1);
    }
  }

  return (
    <nav
      className={classnames(css.pagination, className)}
      {...navProps}
      aria-label="pagination"
    >
      <ul className={classnames(css.paginationList)}>
        <li className={classnames(css.pageItem)}>
          <button
            className={classnames(css.pageButton, {
              [css.disabled]: isFirstPage,
            })}
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={isFirstPage}
            aria-label="Go to previous page"
          >
            Previous
          </button>
        </li>
        <PageItem pageNumber={1} isCurrent={currentPage === 1} />
        {displayLeftEllipsis && <Ellipsis />}
        {displayedPages.map((page) => (
          <PageItem
            key={page}
            pageNumber={page}
            isCurrent={page === currentPage}
          />
        ))}
        {displayRightEllipsis && <Ellipsis />}
        <PageItem
          pageNumber={totalPages}
          isCurrent={currentPage === totalPages}
        />
        <li
          className={classnames(css.pageItem, { [css.disabled]: isLastPage })}
        >
          <button
            className={classnames(css.pageButton)}
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={isLastPage}
            aria-label="Go to next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.displayName = "Pagination";
