import styled from 'styled-components';
import Link from 'next/link';
import MENUITEMS from './constants';

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  a {
    padding-right: 0;
    padding-left: 0;
  }

  .dropdown-menu {
    position: static;
    float: none;
  }
}
`;

const Menu = () => {
  return (
    <NavLinks>
      <Link href="/">
        <a> Home</a>
      </Link>
      <Link href={`/${MENUITEMS.CATEGORIES_PAGE}`}>
        <a> Categories </a>
      </Link>
      <Link href={`/${MENUITEMS.SEARCH_PAGE}`}>
        <a>Search</a>
      </Link>
      <Link href={`/${MENUITEMS.RECENT_POST_PAGE}`}>
        <a>Recent Posts</a>
      </Link>
      <Link href={`/${MENUITEMS.NEAREST_POST_PAGE}`}>
        <a>Nearest Posts</a>
      </Link>
      <Link href={`/${MENUITEMS.FAVORITE_PAGE}`}>
        <a>Favourites</a>
      </Link>
      <Link href={`/${MENUITEMS.ACCOUNT_PAGE}`}>
        <a>Account</a>
      </Link>
    </NavLinks>
  );
};

export default Menu;
