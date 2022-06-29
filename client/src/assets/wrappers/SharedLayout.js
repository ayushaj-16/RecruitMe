import styled from 'styled-components'

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
    
  }
  .nav-dash {
  
    background: rgb(239,255,250);
background: linear-gradient(90deg, rgba(239,255,250,1) 12%, rgba(195,190,247,1) 54%, rgba(138,79,255,1) 85%);
  }


  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`
export default Wrapper
