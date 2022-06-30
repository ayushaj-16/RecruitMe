import styled from 'styled-components'

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
      background: rgb(239,255,250);
      background: linear-gradient(180deg, rgba(239,255,250,1) 12%, rgba(195,190,247,1) 54%, rgba(138,79,255,1) 85%);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: #38598b;
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: var(--transition);
    }
    .nav-link:hover {
      background: var(--grey-50);
      padding-left: 3rem;
      color: #113f67;
      font-weight: bold;
    }
    .nav-link:hover .icon {
      color: #113f67;
      font-weight: bold;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      font-weight: bold;
      place-items: center;
      transition: var(--transition);
    }
    .active {
      color: #113f67;
      font-weight: bolder;
    }
    .active .icon {
      color: #113f67;
      font-weight: bolder;
    }
  }
`
export default Wrapper
