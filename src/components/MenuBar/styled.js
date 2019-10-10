import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuBarWrapper = style.aside`
	align-items: center;
	background: #192734;
	border-left: 1px solid #38444d;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: fixed;
	padding: 0.8rem 0;
	right: 0;
	width: 3.75rem;
`

export const MenuBarGroup = styled.div`
	display: flex;
	flex-direction: column;
`

export const MenuBarLink = styled(Link)`
	display: block;
`

export const MenuBarItem = styled.span`
	color: #8899a6;
	cursor: pointer;
	display: block;
	poisiton: relative;
	height: 3.75rem;
	width: 3.75rem;
	padding: 1.1rem;
`