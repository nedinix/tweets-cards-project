import { useEffect, useRef, useState } from 'react';
import {
  DropdownMenu,
  DropdownWrapper,
  FilterButton,
  FilterTitle,
  FilterWrapper,
  MenuItem,
} from './Filter.styled';

const Filter = ({ values, filterQuery, setFilterQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef();
  const dropdownMenuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleClickItem = item => {
    toggleMenu();
    setFilterQuery(item);
  };

  useEffect(() => {
    const handler = e => {
      if (selectRef.current && selectRef.current.contains(e.target)) {
        setIsOpen(true);
      }
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  });

  return (
    <FilterWrapper>
      <FilterTitle>Show tweets</FilterTitle>
      <DropdownWrapper>
        <FilterButton type="button" ref={selectRef}>
          <span>{filterQuery ? filterQuery : 'Select'}</span>
        </FilterButton>
        {isOpen && values && (
          <DropdownMenu ref={dropdownMenuRef}>
            {values.map((item, index) => (
              <MenuItem key={index} onClick={() => handleClickItem(item)}>
                {item}
              </MenuItem>
            ))}
          </DropdownMenu>
        )}
      </DropdownWrapper>
    </FilterWrapper>
  );
};

export default Filter;
