/* Seu amigo está preso numa caverna cheia de monstros perigosos.
Você tem um mapa e precisa ajudá-lo decidindo se vale a pena que ele saia andando
por aí no escuro, ou se deve ficar parado esperando por ajuda. 

O mapa é representado por uma matriz como:

const map = [
  [ 0, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 0 ],
  [ 1, 1, 0, 1, 1 ],
  [ 0, 0, 0, 0, 0 ]
];

0 indica um espaço vazio
1 indica uma parede

Você tem as coordenadas do seu amigo em [0, 4] representando, respectivamente, a linha,
e a coluna no mapa onde ele está.

E a saída da caverna [4, 4] representando, respectivamente, a linha,
e a coluna no mapa onde ela está.

DICA: tente transformar o problema numa busca. ;) */

