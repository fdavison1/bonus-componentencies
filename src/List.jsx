import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const List = () => {
    const Container = styled.div`
border: 1px solid black
width: 300px
margin: 5px
text-align: left
background: white`
    const Main = styled.div`
display: flex
`
    const StyledLink = styled(Link)`
text-decoration: none
color: black
& :hover{
    background: yellow
}`
    return (
        <div>


            <h1>Table of Contents</h1>
            <Main>
                <StyledLink to='/css'>
                    <Container>
                        <h2>CSS</h2>
                        <ul>
                            <li><span>Animation</span> keyframes, transition, transform</li>
                            <li><span>Fancy effects</span> box-shadow, gradients, text effects</li>
                            <li><span>Grid/Variables</span> grid, variables</li>
                            <li><span>Media queries</span> media queries, media types</li>
                            <li><span>Pseudo selectors</span> disabled, focus, hover, nth-child</li>
                        </ul>
                    </Container>
                </StyledLink>
                <Container>
                    <h2>HTML</h2>
                    <ul>
                        <li><span>Accessability</span> ARIA, alt</li>
                        <li><span>HTML5</span> video, audio</li>
                        <li><span>Meta Data</span> title, description, keywords,mediatypes</li>
                        <li><span>Semantics</span> built-in tag, custom tag</li>
                        <li><span>SEO</span> desc, keywords, pageRank</li>
                    </ul>
                </Container>
                <Container>

                    <h2>DB Patterns</h2>
                    <ul>
                        <li><span>Datatypes</span> variety of datatypes in databases</li>
                    </ul>
                </Container>
                <Container>

                    <h2>Redux</h2>
                    <ul>
                        <li><span>Redux-promise-middleware</span> variety of datatypes in databases</li>
                    </ul>
                </Container>
                <Container>

                    <h2>Server</h2>
                    <ul>
                        <li><span>Authentication</span> Auth0</li>
                    </ul>
                </Container>
                <Container>

                    <h2>RESTful API</h2>
                    <ul>
                        <li><span>JSON</span> variety of datatypes in databases</li>
                    </ul>
                </Container>


            </Main>
        </div>
    )
}

export default List