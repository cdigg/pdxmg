import React from 'react';
import styled from 'styled-components';
import { Link, Wrap, WrapItem, Tab, TabPanel, Select, Menu, MenuButton, MenuList, MenuItem, Button, Text, Flex, Box, Avatar, Spacer, Center } from '@chakra-ui/react'
import { StarIcon, PhoneIcon } from '@chakra-ui/icons';

const ReviewContainer = styled.h1`
	font-size: 34px;
	font-weight: 500;
	color: #fff;
	line-height: 1.4;
  background-color: #725e54;
  padding: 15px;
  margin: 15px;
  width: 40vw;
  border-radius: 25px;  
`;

const Review = ({ reversed, author, text }) => {

	return ( 
    <ReviewContainer>
      <Flex>
        {!reversed && <Box >
          <div style={{  width: '13vw' , color: 'gold' }} >
            <Avatar size='xl'/>
            <br/>
            <Text fontSize={'sm'} color={'white'} >{author}</Text>
            <>
            <StarIcon />          
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />             
            </>          
          </div>
        </Box>}

        <Spacer />

        <Center style={{ textAlign: 'left' }} >
          <Text fontSize='md'>{text}</Text>
        </Center>

        {reversed && <Box >
          <div style={{  width: '13vw' , color: 'gold' }} >
            <Avatar size='xl'/>
            <br/>
            <Text fontSize={'sm'} color={'white'} >{author}</Text>
            <>
            <StarIcon />          
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />             
            </>          
          </div>
        </Box>}
      </Flex>
      
      
    </ReviewContainer>  
	);
}
export default Review;