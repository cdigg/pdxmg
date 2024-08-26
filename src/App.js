import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Box, Center, ChakraProvider, Grid, GridItem, Heading } from '@chakra-ui/react';


// import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import ImageTextPair from './common/ImageTextPair';
import BackgroundScroller from './common/BackgroundScroller';
import theme from './theming/theme';

function App() {
  const [show, setShow] = useState('home');
  const [subTab, setSubTab] = useState(0);

  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="App" ref={ref} width={width}  >
      <ChakraProvider theme={theme}>

        <Grid
          templateAreas={`"header header"
                        "main main"
                        `}
          gridTemplateRows={'80px 1fr'}

        >
          <GridItem area={'header'}>
            <NavBar 
              setShow={setShow} 
              setSubTab={setSubTab}
              width={width} 
              />
          </GridItem>

          <GridItem width={'100%'} bg='#fefefc' style={{ height: 'calc(100vh - 80px)', overflow: 'auto', }} area={'main'}>

            {show === 'home' && <div>

              <Center >
                <Heading borderRadius={'5px'} padding={'8px'} backgroundColor={'#418FDE'}>Welcome to Portland Megagames!</Heading>

              </Center>
              

              <ImageTextPair
                title={'It Came From the Skies!'}
                description={'It all begins on an ordinary day when mysterious alien spacecraft suddenly fill the skies, casting eerie shadows over the nations of Earth. As chaos erupts and panic spreads among the global population, you and your fellow leaders must navigate a treacherous path to secure the survival of humanity. The fate of the world rests on your shoulders, and the decisions you make will shape the future of Earth.'}
                imgUrl={'/images/it came from - Final - 01.jpg'}
                reversed
                width={width}
                externalLink={'https://www.tickettailor.com/events/portlandmegagames/1333996'}
                externalTitle={'Get Tickets!'}
              />

            <BackgroundScroller 
              text={'(This image is from the WCM site, we will replace later'} 
              backgroundImg={'/images/replaceme.jpg'}
              />     
              
            </div>}

            {show === 'our' && <div>            
              <ImageTextPair
                title={'Den of Wolves - Jan 20, 2024'}
                description={'Den of Wolves is a game about the interactions between politics and survival during a time of crisis. Players represent the vessels in the “Survivor Fleet” – a group of surviving vessels fleeing from a catastrophic attack by a ruthless enemy. These vessels are trying to survive in the midst of a crisis. Some players are civilians whilst others are representing government and military elements of the fleet. This game is about interactions between all of these different entities as they attempt to survive.'}
                imgUrl={'/images/dow.png'}
                
                width={width}
              />
            </div>}

            {show === 'what' && <div>  
              
              </div>}

            {show === 'about' && <div>  
              
            </div>}

            {show === 'faq' && <div>  
              asdasds
            </div>}

          </GridItem>

        </Grid>
      </ChakraProvider>

    </div>
  );
}

export default App;
