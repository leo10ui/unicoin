
var nota1 = window.prompt ("informe a nota de INTERFACE HUMANA COMPUTADOR: ") ;
var moedas1= (nota1-7)*100

if(moedas1<0)
 document.write (nota1 + "<br/>" + 0)
else
document.write (nota1 + "<br/>" + moedas1)