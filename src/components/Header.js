import React from "react";
import styled from 'styled-components';
import Button from './defaults/Button';
import Search from './defaults/Search';

const Navbar = styled.div`
  padding: 5px 15px;
  height: 45px;
  background-color: blue;
`
const StyledButton = styled(Button)`
  padding: 8px;
  margin-right: 5px;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  outline: none;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
    transition: .2s;
  }
`
const StyledTitle = styled(Button)`
  margin-left: 25%;
  background-color: transparent;
  border-style: none;
  color: white;
  font-size: 30px;
  outline: none;
  &:hover {
    cursor: pointer;
    transition: .2s;
  }
`
const StyledSearch = styled(Search)`
  float: right;
  margin: 7px;
  padding: 6px;
  border: 2px solid white;
  border-radius: 5px;
  outline: none;
`

const Header = () => (
  <Navbar>
    <StyledButton text={"Home"} />
    <StyledButton text={"All the Beer"} />
    <StyledTitle text={"Kerry's Tap House"} />
    <StyledSearch placeholder={"Search"}/>
  </Navbar>
)

export default Header;