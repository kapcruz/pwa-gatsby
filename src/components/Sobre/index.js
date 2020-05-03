import React from "react"
import Layout from "../Layout"
import SEO from "../seo"
import * as S from "./styled"

const Sobre = () => (
	<Layout>
	  <SEO title="Sobre" />
	  	<S.PostHeader>
			<S.PostTitle>Sobre mim</S.PostTitle>
		</S.PostHeader>
		<S.MainContent>
			<div>
				<p>Meu nome é Karina Cruz, atualmente atuo como desenvolvedora full-stack, porém sou uma pessoa focada em desenvolver meus estudos em frontend. </p>
				<p>Sou uma pessoa curiosa e sempre disposta a aprender cada vez mais.</p>
				<p>Cursei Análise e desenvolvimento de sistemas no IESB e sou pós graduada em Desenvolvimento para dispostivos móveis também pelo IESB.</p>
				<p>No meu tempo livre gosto de aprender sobre tudo que envolve tecnologias e procurar por links de features que futuramente posso estar aprendendo, além claro de fugir um pouco da realidade jogando LOL (não me julgue kkk) e assistir séries e filmes.</p>
				<h2>Habilidades</h2>
				<ul>
					<li>HTML e Slim Template</li>
					<li>Design Responsivo</li>
					<li>CSS (Stylus, Sass)</li>
					<li>Css Frameworks (Bootstrap, Foundation, Animate.css)</li>
					<li>Javascript (ES6/7) (em constante evolução)</li>
					<li>ReactJS (em evolução)</li>
					<li>NodeJs (em evolução)</li>
					<li>Automatizadores (Grunt, Gulp, Webpack)</li>
					<li>Git</li>
					<li>PHP</li>
					<li>MYSQL - GraphQL</li>
					<li>Scrum - Kanban</li>
				</ul>
				<h2>Sobre esse site</h2>
				<p>Esse site foi feito usando gatsby, graphql e está hospedado na netlify, o mecanismo de busca foi feito usando algolia. </p>
			</div>
		</S.MainContent>
	</Layout>

)

export default Sobre