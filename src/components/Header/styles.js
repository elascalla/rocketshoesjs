import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex; /*alinha um item totalmente a esquerda que é a logo e um totalmente a direita que é o carrinho*/
  justify-content: space-between; /*isso faz o alinhamento*/
  align-items: center; /*se um item for maior que o outro válido alinhar ao centro*/
  margin: 50px 0; /*margem de 50px em cima e em baixo do header*/
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none; /*tirar underline em baixo dos textos*/
  transition: opacity 0.2s; /*opacidade transicionada em 0.2 segundos*/

  &:hover {
    opacity: 0.7; /*efeito visual para quando o usuário passa o mouse por cima do carrinho*/
  }

  div {
    text-align: right; /*alinhar totalmente a direita*/
    margin-right: 10px; /*pra distanciar um pouco do icone*/
  }

  strong {
    display: block;
    color: #fff;
  }

  span {
    font-size: 12px;
    color: #999;
  }
`;
