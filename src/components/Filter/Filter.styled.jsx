import { styled } from 'styled-components';

export const FilterWrapper = styled.div`
  width: 100%;
  margin-bottom: 80px;
  row-gap: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
`;

export const DropdownWrapper = styled.div`
  position: relative;
  width: 200px;
`;

export const FilterButton = styled.button`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  color: #373737;
  text-transform: uppercase;

  background-color: #e6e6e6;

  border-style: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ebd8ff;
  }

  &:focus {
    background-color: #5cd3a8;
  }
`;

export const FilterTitle = styled.div`
  display: block;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  color: #373737;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

export const DropdownMenu = styled.div`
  width: 100%;
  position: absolute;
  top: 48px;
  left: 0;
  padding-top: 8px;
  padding-bottom: 8px;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  background-color: #e6e6e6;

  border-radius: 10px;
  box-shadow: 0px 3.4px 3.44px 0px #00000040;
  z-index: 2;
`;

export const MenuItem = styled.button`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  color: #373737;
  text-transform: uppercase;

  background-color: transparent;
  border-style: none;

  cursor: pointer;

  &:hover {
    color: #e6e6e6;
    background-color: #373737;
  }
`;
