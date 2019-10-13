import React from 'react'
import { Home } from 'styled-icons/boxicons-regular/Home'
import { SearchAlt as Search } from 'styled-icons/boxicons-regular/SearchAlt'
import { UpArrowCircle as Arrow } from 'styled-icons/boxicons-solid/UpArrowCircle'
import { Lightbulb as Light } from 'styled-icons/fa-regular/Lightbulb'
import { Grid } from 'styled-icons/feather/Grid'
import * as S from './styled'

const MenuBar = () => (
	<S.MenuBarWrapper>
	  <S.MenuBarGroup>
		<S.MenuBarLink to="/" title="Voltar para Home">
		  <S.MenuBarItem>
			<Home />
		  </S.MenuBarItem>
		</S.MenuBarLink>
		<S.MenuBarLink to="/search/" title="Pesquisar">
		  <S.MenuBarItem>
			<Search />
		  </S.MenuBarItem>
		</S.MenuBarLink>
	  </S.MenuBarGroup>
	  <S.MenuBarGroup>
		<S.MenuBarItem title="Mudar o tema">
		  <Light />
		</S.MenuBarItem>
		<S.MenuBarItem title="Mudar visualização">
		  <Grid />
		</S.MenuBarItem>
		<S.MenuBarItem title="Ir para o Topo">
		  <Arrow />
		</S.MenuBarItem>
	  </S.MenuBarGroup>
	</S.MenuBarWrapper>
)
  
export default MenuBar