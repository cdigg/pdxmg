import { Button, Center, SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';

const ProjectImg = styled.img`
	height: 30em;
	width: 95%;
`;

const DescriptionContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h2`
	color: #000;
	font-size: 1.4rem;
	font-weight: 700;
	max-width: 90%;
	margin: 4px, 0;
	text-align: center;
`;

const Details = styled.p`
	color: #7a7a7a;
	font-size: 1rem;
	text-align: center;
	max-width: 85%;
`;

const openLink = (link) => {
  const win = window.open(link, '_blank');
  win.focus();
};

const ImageTextPair = (props) => {
	const { title, description, imgUrl, width, externalLink, externalTitle } = props;

	return ( 
    <Wrap spacing='10px' marginTop={'10px'} marginBottom={'10px'} >

      <WrapItem>
        <Center w={width < 1000 ? width : width /2} height={'100%'} >
            <DescriptionContainer >
              <Title>{title}</Title>
              <Details>{description}</Details>
              {externalLink && <Button colorScheme='blue' onClick={()=> openLink(externalLink)}>{externalTitle}</Button>}
            </DescriptionContainer>
        </Center>
      </WrapItem>

      <WrapItem>
        <Center w={width < 1000 ? width : width * 0.4} >
          <ProjectImg src={imgUrl} />
        </Center>
      </WrapItem>
      
    </Wrap>
	)
}

export default ImageTextPair;