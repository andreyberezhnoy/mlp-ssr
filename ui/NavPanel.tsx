import Link from 'next/link'
import styled, { css } from 'styled-components'
import Button from '../components/Button'

export default () => (
    <Wrapper>
        <Link href="/">
            <a>Главная</a>
        </Link>
        <Link href="/goals">
            <a>Цели</a>
        </Link>
        <Link href="/contitions">
            <a>Условия</a>
        </Link>
        <Link href="/projects">
            <a>Проекты</a>
        </Link>
        <Auth>
            <Button color="white" size="small" roundCorner>
                Вход
            </Button>
        </Auth>
    </Wrapper>
)

const activeLink = css`
    :hover::after {
        content: '';
        display: block;
        margin-bottom: -2px;
        border-bottom: 2px solid white;
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 14px;
        color: white;
        margin-right: 18px;

        :last-of-type {
            margin-right: 0px;
        }

        ${activeLink}
    }
`

const Auth = styled.div`
    margin-left: 40px;
`
