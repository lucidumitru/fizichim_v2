---
sidebar_position: 24
---

# II.24. Probleme recapitulative rezolvate - Rețele electrice. Efectul curentului electric.



import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />



import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'





:::caution Probleme recapitulative rezolvate - Rețele electrice. Efectul curentului electric. Forța electromagnetică.


1) Determină rezistenţa echivalentă a rezistoarelor din următoarea grupare mixtă: 


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza1_SchemaElectrica_ProblemaModel1.jpg" width="1000" height="559" />

<br></br>
<br></br>



#### Rezolvare:


- Notăm pe rețea toate nodurile cu litere mari.

- Mergem pe conturul circuitului de la un nod la altul și echivalăm grupările de rezistoare cu rezistoare echivalente, serie sau paralel.

- Între nodul A și B, în partea stângă, avem 2 rezistoare pe aceeași latură (R<sub>1</sub> și R<sub>2</sub>), deci sunt în serie și le echivalăm cu R<sub>s1</sub>.

- Între nodul A și B avem 2 rezistoare pe aceeași latură (R<sub>4</sub> și R<sub>7</sub>), deci sunt în serie și le echivalăm cu R<sub>s2</sub>.

- Între nodul B și C avem 1 rezistor (R<sub>3</sub>), pe care îl copiem.

- Între nodul A și C avem 2 rezistoare pe aceeași latură (R<sub>5</sub> și R<sub>6</sub>), deci sunt în serie și le echivalăm cu R<sub>s3</sub>.

- Între nodul B și C avem sursa pe care o copiem.


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza2_SchemaElectrica2_ProblemaModel1.jpg" width="1000" height="556" />

<br></br>
<br></br>



- Calculăm rezistențele echivalente:



<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza3_Rezolvare1_ProblemaModel1.jpg" width="1000" height="230" />

<br></br>
<br></br>


Pe schema nouă, continuăm să echivalăm grupările de rezistoare:

- Între nodul A și B avem 2 rezistoare (R<sub>s1</sub> și R<sub>s2</sub>) pe laturi diferite între aceleași 2 noduri, deci sunt în paralel și le echivalăm cu R<sub>p1</sub>.

- Restul schemei o copiem.


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza4_SchemaElectrica3_ProblemaModel1.jpg" width="1000" height="551" />

<br></br>
<br></br>






- Calculăm rezistența echivalentă:



<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza5_Rezolvare2_ProblemaModel1.jpg" width="1000" height="206" />

<br></br>
<br></br>



Pe schema nouă, continuăm să echivalăm grupările de rezistoare:

- Între nodul B și C avem 2 rezistoare (R<sub>p1</sub> și R<sub>s3</sub>) pe aceeași latură, deci sunt în serie și le echivalăm cu R<sub>s4</sub>.


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza6_SchemaElectrica4_ProblemaModel1.jpg" width="1000" height="546" />

<br></br>
<br></br>



- Calculăm rezistența echivalentă:


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza7_Rezolvare3_ProblemaModel1.jpg" width="1000" height="71" />

<br></br>
<br></br>




Pe schema nouă, continuăm să echivalăm grupările de rezistoare:

- Între nodul B și C avem 2 rezistoare (R<sub>s4</sub> și R<sub>3</sub>) pe laturi diferite între aceleași 2 noduri, deci sunt în paralel și le echivalăm cu R<sub>p2</sub>.


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza8_SchemaElectrica5_ProblemaModel1.jpg" width="1000" height="435" />

<br></br>
<br></br>



- Calculăm rezistența echivalentă a întregii grupări:



<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza9_Rezolvare4_ProblemaModel1.jpg" width="1000" height="230" />

<br></br>
<br></br>


<Video src="https://www.youtube.com/embed/L4Wx44G2-x8" />



:::



:::caution Probleme recapitulative rezolvate - Rețele electrice. Efectul curentului electric. Forța electromagnetică.

2) Determină intensitățile curenților din următorul circuit ramificat:


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza10_SchemaElectrica_ProblemaModel2.jpg" width="1000" height="663" />

<br></br>
<br></br>



- Notăm cu litere mari nodurile rețelei (A și B).

- Notăm laturile rețelei, stabilim arbitrar sensurile curenților de pe fiecare latură:

  - AE1B (I<sub>1</sub>)
  
  - AE2B (I<sub>2</sub>)
  
  - AR3B (I<sub>3</sub>)
  
- Notăm ochiurile simple ale rețelei. Stabilim arbitrar (cum dorim) câte un sens de parcurs pentru fiecare ochi (orar sau antiorar).

- Aplicăm prima teoremă a lui Kirchhoff: “Suma algebrică a intensităților curenților care intră într-un nod de circuit este egală cu suma intensităților curenților care ies din nodul respectiv“.
 
- Pentru n = nr. noduri, se scriu _(n-1)_ ecuații cu prima teoremă a lui Kirchhoff, aplicată nodurilor de rețea, în cazul nostru pentru un singur nod:

  - I<sub>1</sub> + I<sub>2</sub> = I<sub>3</sub>
  
- Aplicăm a doua teoremă a lui Kirchhoff: “Suma algebrică a tensiunilor electromotoare pentru un ochi de circuit este egală cu suma algebrică a căderilor de tensiune din acel ochi de circuit“, pentru două ochiuri simple:



<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza11_Rezolvare1_ProblemaModel2.jpg" width="1000" height="140" />

<br></br>
<br></br>


Facem un sistem de 3 ecuații și cu cele trei necunoscute I<sub>1</sub>, I<sub>2</sub>, I<sub>3</sub>.


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza12_Rezolvare2_ProblemaModel2.jpg" width="1000" height="214" />

<br></br>
<br></br>






- Înlocuim datele numerice:



<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza13_Rezolvare3_ProblemaModel2.jpg" width="1000" height="211" />

<br></br>
<br></br>




- Scoatem pe I<sub>1</sub> din prima ecuație:


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza14_Rezolvare4_ProblemaModel2.jpg" width="1000" height="157" />

<br></br>
<br></br>


- Rezolvăm sistemul cu 2 ecuații și 2 necunoscute, prin reducere:


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza15_Rezolvare5_ProblemaModel2.jpg" width="1000" height="661" />

<br></br>
<br></br>

- Înlocuim pe I<sub>3</sub> într-o ecuație cu I<sub>2</sub>:

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza16_Rezolvare6_ProblemaModel2.jpg" width="1000" height="159" />

<br></br>
<br></br>

 

- Schimbăm sensul curentului I<sub>2</sub> ales inițial, arbitrar, pe rețea:



<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza17_SchemaElectrica2_ProblemaModel2.jpg" width="1000" height="656" />

<br></br>
<br></br>


- Din prima ecuație îl aflăm pe I<sub>1</sub>:


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza18_Rezolvare7_ProblemaModel2.jpg" width="1000" height="79" />

<br></br>
<br></br>


<Video src="https://www.youtube.com/embed/H1I5q7XgVo0" />




:::







:::caution Probleme recapitulative rezolvate - Rețele electrice. Efectul curentului electric. Forța electromagnetică.

3) Realizează electroliza fluorurii de zinc (ZnF<sub>2</sub>).


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza19_Rezolvare_ProblemaModel3.jpg" width="1000" height="524" />

<br></br>
<br></br>





:::



:::caution Probleme recapitulative rezolvate - Rețele electrice. Efectul curentului electric. Forța electromagnetică.

4) Rezistența internă a unei baterii crește treptat în timp de când a fost fabricată, chiar dacă nu este folosită, tensiunea electromotoare a acesteia rămânând constantă. Astfel bateria, în timp, chiar dacă nu este folosită, va produce un curent de intensitate mai mică, crescându-i rezistența internă.
 
Poți determina vârsta unei baterii legând ampermetrul la bornele bateriei și citind intensitatea la scurtcircuit.

Pentru o baterie de 1,5 V, I<sub>sc</sub> = 2-3 A, când este nou fabricată.

a) Determină cât este rezistența internă a bateriei când este nouă și la ce valoare ajunge când I<sub>sc</sub> = 1,3 A.




<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza20_Rezolvare1_ProblemaModel4.jpg" width="1000" height="427" />

<br></br>
<br></br>


b)	Determină cât este rezistența internă a acumulatorului de 12V când este nou, știind că are o intensitate la scurtcircuit I<sub>sc</sub> = 40A.




<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza21_Rezolvare2_ProblemaModel4.jpg" width="1000" height="120" />

<br></br>
<br></br>


<Video src="https://www.youtube.com/embed/_ZVxqq23Foo" />




:::



:::caution Probleme recapitulative rezolvate - Rețele electrice. Efectul curentului electric. Forța electromagnetică.


5) O sursă electrică cu t.e.m. de 12 V are o rezistență internă de 0,5 Ω. Ea este legată la un bec cu rezistența de 10 Ω.

**Se cere:**

a)	Cât este intensitatea curentului ce trece prin bec dacă rezistența ampermetrului este de 0,001 Ω (considerăm că nu este un ampermetru ideal care are rezistența zero)?

b)	Cât este intensitatea măsurată de ampermetru dacă scoatem becul din circuit ?

c)	Cât este intensitatea curentului dacă la bornele becului legăm un voltmetru care nu este ideal, având o rezistență de 100.000 Ω ( voltmetrul ideal are rezistența care tinde spre infinit, pentru a nu permite trecerea curentului prin acesta și astfel se obține citirea corectă) ?

d)	Dacă legăm direct voltmetrul la bornele sursei, cât este intensitatea curentului ?



#### Rezolvare:

- Scriem datele problemei:

  - E = 12 V

  - r = 0,5 Ω

  - R<sub>b</sub> = 10Ω

  - R<sub>A</sub> = 0,001 Ω

  - R<sub>V</sub> = 100.000 Ω


a) 


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza22_SchemaElectrica1_ProblemaModel5.jpg" width="1000" height="455" />

<br></br>
<br></br>







- Becul și rezistorul ampermetrului și rezistența sursei sunt în serie și au rezistența echivalentă:




<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza23_Rezolvare1_ProblemaModel5.jpg" width="1000" height="195" />

<br></br>
<br></br>




b)




<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza24_SchemaElectrica2_ProblemaModel5.jpg" width="1000" height="425" />

<br></br>
<br></br>



- **Dacă ampermetrul ar fi fost unul ideal, cu rezistența 0, el ar fi scurtcircuitat sursa și ar fi măsurat curentul de scurtcircuit cu formula**

 

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza25_Rezolvare2_ProblemaModel5.jpg" width="1000" height="107" />

<br></br>
<br></br>

- Însă acest ampermetru nu are rezistența 0 și vom avea o intensitate:



<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza26_Rezolvare3_ProblemaModel5.jpg" width="1000" height="129" />

<br></br>
<br></br>



c)


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza27_SchemaElectrica3_ProblemaModel5.jpg" width="1000" height="458" />

<br></br>
<br></br>


- R<sub>b</sub> și R<sub>V</sub> sunt în paralel și le calculăm rezistența echivalentă R<sub>p</sub>:


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza28_Rezolvare4_ProblemaModel5.jpg" width="1000" height="285" />

<br></br>
<br></br>


- R<sub>p</sub>, R<sub>A</sub> și r sunt în serie și au rezistența echivalentă:


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza29_Rezolvare5_ProblemaModel5.jpg" width="1000" height="196" />

<br></br>
<br></br>




d)


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza30_SchemaElectrica4_ProblemaModel5.jpg" width="1000" height="418" />

<br></br>
<br></br>



- Legând direct voltmetrul la sursă, r și R<sub>V</sub> vor fi în serie și intensitatea va deveni:


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza31_Rezolvare6_ProblemaModel5.jpg" width="1000" height="123" />

<br></br>
<br></br>



**Dacă voltmetru ar fi fost unul ideal (cu rezistența infinită), intensitatea curentului ar fi fost zero.**




:::







:::caution Probleme recapitulative rezolvate - Rețele electrice. Efectul curentului electric. Forța electromagnetică.


6) Un resort are lungimea inițială de 10 cm. Când suspendăm de el o tijă de fier cu mase marcate de 20 g, lungimea lui este de 14 cm. Sub tija de fier se așază un electromagnet legat la o baterie, caz în care lungimea resortului ajunge la 18 cm. 


Se cere:

a) Greutatea tijei.

b) Forța de atracție a electromagnetului.



#### Rezolvare:

- Scriem datele problemei și le transformăm în SI:

  - l<sub>0</sub> = 10 cm = 0,1 m
  
  - l<sub>1</sub> = 14 cm = 0,14 m
  
  - l<sub>2</sub> = 18 cm = 0,18 m
  
  - m = 20 g = 0,02 kg
  

- a) Calculăm greutatea tijei cu masa marcată:

  - G = m ∙ g = 0,02 ∙ 10 = 0,2 N

  - Forța deformatoare este chiar greutatea tijei și ea produce o deformare de :

  - Δl<sub>1</sub> = l<sub>1</sub> – l<sub>0</sub> = 0,14 – 0,10 = 0,04 m

  - F = G = k ∙ Δl<sub>1</sub>

- b) Calculăm a doua deformare:

  - Δl<sub>2</sub> = l<sub>2</sub> – l<sub>0</sub> = 0,18 – 0,10 = 0,08 m = 2 ∙ Δl<sub>1</sub>

  - Forța de atracție a electromagnetului asupra tijei de fier adunată cu greutatea tijei produce a doua deformare a resortului:

  - F<sub>a</sub> + G = k ∙ Δl<sub>2</sub>

  - Fa = k ∙ Δl<sub>2</sub> - k ∙ Δl<sub>1</sub> =  k ∙ 2Δl<sub>1</sub> - k ∙ Δl<sub>1</sub> =  k ∙ Δl<sub>1</sub> = G = 0,2 N



<Video src="https://www.youtube.com/embed/ZavZp1F6aEU" />



:::



:::caution Probleme recapitulative rezolvate - Rețele electrice. Efectul curentului electric. Forța electromagnetică.

7) Becurile B<sub>2</sub> și B<sub>3</sub> au valorile nominale de 6 V și 0,1 A și funcționează normal. Ampermetrul indică 300 mA. Este identic becul B<sub>1</sub> cu becurile B<sub>2</sub> și B<sub>3</sub> ?




<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza32_SchemaElectrica1_ProblemaModel7.jpg" width="1000" height="481" />

<br></br>
<br></br>


#### Rezolvare:




<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_6_Poza33_SchemaElectrica2_ProblemaModel7.jpg" width="1000" height="549" />

<br></br>
<br></br>

I = I<sub>1</sub> + I<sub>2</sub> = 0,3 A

I<sub>2</sub> = I<sub>3</sub> + I<sub>4</sub> = 0,2 A

I<sub>3</sub> = I<sub>4</sub> = 0,1 A

I<sub>1</sub> = 0,1 A


Curentul din ramura principală cu sursa și cu ampermetrul se ramifică pe laturile becurilor B2 și B3, care fiind identice și legate în paralel, vor avea fiecare un curent de intensitate egală cu jumătate din curentul I<sub>2</sub>, adică 0,1 A.
 
Becul B<sub>1</sub> are tensiunea nominală de 6 V și intensitatea nominală de I<sub>1</sub> = 0,1 A.

Deci becul B<sub>1</sub> este identic cu becurile B<sub>2</sub> și B<sub>3</sub>.


:::





<br></br>
<br></br>

