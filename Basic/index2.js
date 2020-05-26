Math.random();

szamok = Math.floor(Math.random()*26) - 5;
szamok2 = Math.floor(Math.random()*26) - 5;
szamok3 = Math.floor(Math.random()*26) - 5;
szamok4 = Math.floor(Math.random()*26) - 5;

row = [szamok, szamok2, szamok3, szamok4 + " "];

document.write(row);

document.write(Math.max(...row));

