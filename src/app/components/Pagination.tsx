import React from 'react';

type Pagination = {
  numbers: any;
  currentPage: number;
  prevPage: () => void;
  movePages: (args: number) => void;
  nextPage: () => void;
};

export const Pagination = ({
  numbers,
  currentPage,
  prevPage,
  movePages,
  nextPage,
}: Pagination) => {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#"
            className={`${currentPage === 1 ? 'none' : ''}`}
            onClick={prevPage}>
            Prev
          </a>
        </li>

        {numbers.map((number: any) => (
          <li key={number}>
            <a
              href="#"
              className={`${currentPage === number && 'active'}`}
              onClick={() => movePages(number)}>
              {number}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#"
            className={`${currentPage === numbers.length ? 'none' : ''}`}
            onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
