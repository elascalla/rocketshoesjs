import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid; /*formato de grid*/
  grid-template-columns: repeat(
    3,
    1fr
  ); /*3 espaçamentos de grid com um largura igual*/
  grid-gap: 20px; /*distanciar os produtos em 20px entre eles*/
  list-style: none; /*tirar as bolinhas*/

  li {
    display: flex;
    flex-direction: column; /*ficar sempre a informação uma a baixo da outra*/
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px; /*forçar uma largura máxima para imagem*/
    }

    /*sinal de maior para que essa instrução do strong funcione somente dentro do <li>*/
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px; /*margem de 5 em cima, 0 nas laterais e 20px a baixo*/
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto; /*se tivermos um tenis com titulo muito grande ele alinha os botões automaticamente*/
      display: flex;
      align-items: center;
      transition: backgroud 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1; /*ocupar todo o tamanho possível*/
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
