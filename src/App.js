import './App.css';
import styled from 'styled-components';

function App() {
  const Header = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 103;
    width: 100%;
    height: 100px;
    text-align: center;
    background-color: black;
  `;
  const Innerheader = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
  `;
  const Logo = styled.a`
    position: absolute;
    top: 32px;
    left: 50px;
    width: 210px;
    height: auto;
  `;
  const Navigation = styled.div`
    display: inline-block;
    left: 285px;
    position: absolute;
    top: 38px;
    height: 30px;
  `;
  const Navlinks = styled.ul`
    position: relative;
    list-style-type: none;
    margin: 0;
    padding: 0;
  `;
  const Navitem = styled.li`
    position: relative;
    display: inline-block;
    margin: 0 12px;
    color: #fff;
    font-size: 14;
    font-family: 'Roboto Mono';
    font-weight: 600;
  `;
  // const Link = styled.a`
  //   ::after {
  //     content: '';
  //     position: absolute;
  //     bottom: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 1px;
  //     background: #fff;
  //     -webkit-transform: scaleX(0);
  //     transform: scaleX(0);
  //     -webkit-transform-origin: right center;
  //     transform-origin: right center;
  //     -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  //     transition: -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  //     transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  //     transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1),
  //       -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  //   }
  // `;
  const Svgl = styled.svg`
    fill: '#fff';
  `;
  const Spacex = () => (
    <Svgl
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 400 50"
      style={{fill: '#fff'}}
    >
      <title>SpaceX Logo</title>
      <g className="letter_s">
        <path
          d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
          c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"
        />
      </g>
      <g className="letter_p">
        <path
          d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
          c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"
        />
      </g>
      <g className="letter_a">
        <polygon points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	" />
      </g>
      <g className="letter_c">
        <path
          d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
          c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"
        />
      </g>
      <g className="letter_e">
        <polygon points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	" />
        <rect x="219.9" y="18.6" width="41.9" height="5.4" />
      </g>
      <g className="letter_x">
        <path d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z" />
        <path d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z" />
      </g>
      <g className="letter_swoosh">
        <path d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z" />
      </g>
    </Svgl>
  );
  return (
    <div className="App">
      <Header>
        <Innerheader>
          <Logo>
            <Spacex />
          </Logo>
          <Navigation>
            <Navlinks>
              <Navitem>DRAGON</Navitem>
              <Navitem>FALCON 9</Navitem>
              <Navitem>FALCON HEAVY</Navitem>
              <Navitem>STARSHIP</Navitem>
            </Navlinks>
          </Navigation>
        </Innerheader>
      </Header>
    </div>
  );
}

export default App;
