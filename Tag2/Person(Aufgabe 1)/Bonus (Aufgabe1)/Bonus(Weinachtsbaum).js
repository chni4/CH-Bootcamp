function zeichneWeihnachtsbaum(n) {

  for (let i = 1; i <= n; i++) {
    let zeile = ' '.repeat(n - i) + '*'.repeat(i * 2 - 1);
    console.log(zeile);
  }
  for (let i = 1; i <= n; i++) {
    let stamm = ' '.repeat(n - 1) + '*';
    console.log(stamm);
  }
}
zeichneWeihnachtsbaum(5);
