const matriz = [];

function matrixInit( v ) {

  let i; 

  for(i=1; i<=v; i++){
    matriz[i] = [];
    for(j=1; j<=v; j++){
      matriz[i][j] = 0;
    }
  }
};

function matrixInsert( r, c ) {
  matriz[r][c] = 1;
  matriz[c][r] = 1;
};

matrixInit(6);
matrixInsert(1, 2);
matrixInsert(1, 3);
matrixInsert(2, 4);
matrixInsert(3, 4);
matrixInsert(4, 5);
matrixInsert(5, 6);

console.table(matriz);
















