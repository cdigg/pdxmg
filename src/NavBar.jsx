import React from 'react';
import styled from 'styled-components';
// import { useHistory } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Select, Menu, MenuButton, MenuList, MenuItem, Button, useDisclosure, Text, Hide } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';

const NavbarContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: #046A38;
	justify-content: left;
	color: #ffffff;
  border-bottom-width: 4px;
  border-bottom-color: #FFB81C;
  border-bottom-style: solid;
`;


const NavBar = (props) => {
	const { setShow, setSubTab, width } = props;

	return ( 
		<NavbarContainer style={{ width: width }} >
			<Tabs align='center' >

				<TabList>
					<Tab  onClick={() => setShow('home')}><img src={'/images/logo.png'} style={{ height: '60px' }} alt='Page not found'/></Tab>
					<Hide below='md'>
						<Tab onClick={() => setShow('home')}>Home</Tab>
					</Hide>	
          <Tab onClick={() => setShow('what')}>
						What is a Megagame?						
					</Tab>	
          <Tab onClick={() => setShow('our')}>
						Our Games						
					</Tab>				
					<Tab onClick={() => setShow('about')}>
						About Us						
					</Tab>
          <Tab onClick={() => setShow('faq')}>
						FAQ					
					</Tab>
				</TabList>
			</Tabs>			

		</NavbarContainer>

	);
}
export default NavBar;