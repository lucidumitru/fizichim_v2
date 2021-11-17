---
sidebar_position: 15
---

# II.15. Gruparea rezistoarelor. 



import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />



import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'




Orice element de circuit (generator electric, bec, rezistor, motor, întrerupător) poate fi legat (grupat) cu un altul (de același fel sau diferit) în două moduri: 

- **În serie** și

- **În paralel.**

În viața de zi cu zi întâlnim grupări mixte de serie cu paralel.

Pentru a înțelege diferența dintre cele două tipuri de grupări trebuie să cunoaștem elementele unei rețele electrice (circuit ramificat).



:::important

O rețea electrică, oricât de complicată, este constituită din trei elemente distincte: 

- Noduri;

- Laturi;

- Ochiuri.



:::




:::important Definiție


**Nodul de circuit** reprezintă intersecția și contactul fizic a cel puțin trei conductoare electrice. 

:::



:::important Definiție

**Latura de circuit** este porțiunea de circuit cuprinsă între două noduri succesive, astfel încât prin elementele ei să circule același curent electric.

:::



:::important Definiție

**Ochiul de circuit** reprezintă porțiunea de circuit formată din cel puțin două laturi, conectate astfel încât să formeze un contur închis (linie poligonală închisă).


:::


:::important Definiție

Un grup de rezistoare se înlocuiește cu unul singur, denumit **rezistor echivalent.** Rezistența acestuia reprezintă echivalentul rezistențelor respectivei grupări.

:::




<br></br>
<br></br>






:::tip Experiment

**18.** Gruparea în serie a rezistoarelor 

:::

<Video src="https://www.youtube.com/embed/SgMR7hyTODo" />

<br></br>

**Materiale necesare:** baterie electrică, rezistoare de diferite valori ( 50 Ω, 100 Ω ), fire de legătură, ampermetru, voltmetru (multimetru).


**Descrierea experimentului:**
 
- Realizează următorul montaj legând în serie cele 2 rezistoare.

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza1_Montaj_Experiment18_vers2.jpg" width="1000" height="349" />


- Aplică o tensiune de la baterie și măsoară intensitatea curentului electric, tensiunea de la capetele grupării și tensiunea pe fiecare rezistor.
 
- Calculează raportul dintre tensiunea de la capetele grupării și intensitatea ce trece prin ele, adică rezistența electrică a grupării celor două rezistoare. În ce relație se află cele trei tensiuni măsurate, respectiv rezistența grupării cu rezistențele celor 2 rezistoare ?





:::note Observaţie

Tensiunea dintre capetele grupării de rezistoare este egală în acest caz cu suma tensiunilor de la bornele celor două rezistoare.

Se observă că suma rezistențelor celor două rezistoare este egală cu rezistența grupării de rezistoare. 
:::


**Concluzia experimentului:**

Aplicând la capetele rezistorului echivalent aceeași tensiune ca la bornele grupării în serie, prin rezistorul echivalent circulă același curent ( I ) ca prin gruparea echivalată: U = U<sub>1</sub> + U<sub>2</sub> .
Se poate scrie:

U<sub>1</sub> = IR<sub>1</sub>; U<sub>2</sub> = IR<sub>2</sub> ; U = IR<sub>s</sub> ;

U = U<sub>1</sub> + U<sub>2</sub> 

IR<sub>s</sub> = IR<sub>1</sub> + IR<sub>2</sub>

R<sub>s</sub> = R<sub>1</sub> + R<sub>2</sub>



:::important

Rezistoarele prin care trece același curent și care se află pe aceeași latură a unui circuit formează o grupare în serie, fiind echivalate cu rezistorul R<sub>s</sub> .

**Rezistența echivalentă a unei grupări serie de rezistoare este egală cu suma rezistențelor fiecărui rezistor:** 


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza1bis_FormulaRezistenteiSerie.jpg" width="1000" height="59" />


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza2_RezistentaRezistoruluiSerie_vers2.jpg" width="1000" height="122" />

:::



<br></br>
<br></br>



:::tip Experiment

**19.** Gruparea în paralel a rezistoarelor 

:::

<Video src="https://www.youtube.com/embed/KH4F7V-bha8" />

<br></br>

**Materiale necesare:** baterie electrică, rezistoare de diferite valori ( 50 Ω, 100 Ω ), fire de legătură, ampermetru, voltmetru (multimetru).


**Descrierea experimentului:**
 
- Realizează următorul montaj legând în paralel cele două rezistoare.

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza3_Montaj_Experiment19_vers2.jpg" width="1000" height="388" />


- Aplică o tensiune de la baterie și măsoară intensitatea curentului electric ce trece atât prin fiecare rezistor, cât și prin circuitul cu sursa.
 
- Măsoară tensiunea electrică de la capetele grupării și tensiunea pe fiecare rezistor.
 
- Calculează rapoartele dintre intensitate și tensiune (adică inversele rezistențelor electrice dintre punctele de măsurare) pentru fiecare dintre cele trei măsurători.
 
- În ce relație se află cele trei intensități măsurate? Dar cele trei tensiuni măsurate?





:::note Observaţie

Suma inverselor celor două rezistențe este egală cu inversul rezistenței circuitului. Intensitatea curentului ce intră în grupare este egală cu suma intensităților curenților ce trec prin cele două rezistoare, iar tensiunile măsurate sunt egale.

:::


**Concluzia experimentului:**

Aplicând la capetele rezistorului echivalent aceeași tensiune ca la bornele grupării în paralel, pe rezistorul echivalent va cădea aceeași tensiune ca pe fiecare dintre rezistoarele din grupare: U = U<sub>1</sub> = U<sub>2</sub>. 

Se poate scrie: 


 

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza4_FormulaRezistoruluiEchivalentParalel_vers2.jpg" width="1000" height="680" />


Simplificând pe U de la numărător obținem formula rezistenței echivalente paralel. 



:::important

Rezistoarele care se află pe laturi diferite între aceleași două noduri ale unui circuit, având aceeași tensiune la capete formează o grupare în paralel, fiind echivalate cu rezistorul R<sub>p</sub>.


**Inversul rezistenței echivalente a unei grupări paralel de rezistoare este egal cu suma inverselor rezistențelor fiecărui rezistor:** 

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza5_Formula2RezistoruluiEchivalentParalel_vers2.jpg" width="1000" height="130" />


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza6_RezistentaRezistoruluiParalel_vers2.jpg" width="1000" height="276" />


:::



<br></br>


:::caution Problemă rezolvată

**1.** Determină rezistenţa echivalentă a rezistoarelor din următoarea grupare mixtă : 


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza7_SchemaElectrica_ProblemaModel2_vers3.jpg" width="1000" height="691" />


<br></br>
<br></br>


#### Rezolvare:

- Se notează pe rețea toate nodurile cu litere mari.

- Mergem pe conturul circuitului de la un nod la altul și echivalăm grupările de rezistoare cu rezistoarele echivalente, serie sau paralel.

- Între nodul A și B avem 2 rezistoare pe aceeași latură, deci sunt în serie și le echivalăm cu R<sub>s1</sub>.

- Între nodul B și C avem 2 rezistoare pe laturi diferite între aceleași 2 noduri, deci sunt în paralel și le echivalăm cu R<sub>p1</sub>.

- Între nodul A și E avem 1 rezistor pe care îl copiem.

- Între nodul E și F avem 2 rezistoare pe laturi diferite între aceleași 2 noduri, deci sunt în paralel și le echivalăm cu R<sub>p2</sub>.


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza8_SchemaElectrica2_ProblemaModel2_vers2.jpg" width="1000" height="693" />


<br></br>
<br></br>




- Calculăm rezistențele echivalente :


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza9_Formula1_RezistenteEchivalente_ProblemaModel2_vers2.jpg" width="1000" height="572" />


<br></br>
<br></br>

- Pe schema nouă, continuăm să echivalăm grupările de rezistoare :

  - Între nodul A și D, pe latura de sus, avem 2 rezistoare pe aceeași latură (R<sub>s1</sub> cu R<sub>p1</sub>), deci sunt în serie și le echivalăm cu R<sub>s2</sub> .

  - Între nodul A și D, pe latura din mijloc, avem 2 rezistoare pe aceeași latură (R<sub>5</sub> cu R<sub>p2</sub>), deci sunt în serie și le echivalăm cu R<sub>s3</sub> .


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza10_SchemaElectrica3_ProblemaModel2_vers2.jpg" width="1000" height="693" />


<br></br>
<br></br>

- Calculăm rezistențele echivalente:

  - R<sub>s2</sub> = R<sub>s1</sub> + R<sub>p1</sub> = 25 + 4 = 29Ω

  - R<sub>s3</sub> = R<sub>5</sub> + R<sub>p2</sub> = 2 + 6 = 8Ω

- Pe schema nouă, continuăm să echivalăm grupările de rezistoare:

  - Între nodul A și D avem 2 rezistoare pe laturi diferite între aceleași 2 noduri, deci sunt în paralel și le echivalăm cu R<sub>p3</sub>.
  

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza11_SchemaElectrica4_ProblemaModel2_vers2.jpg" width="1000" height="318" />


<br></br>
<br></br>

- Calculăm rezistența echivalentă:

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza12_Formula2_RezistenteEchivalente_ProblemaModel2_vers2.jpg" width="1000" height="287" />


<br></br>
<br></br>


<Video src="https://www.youtube.com/embed/SsLmO7mBFBQ" />


:::


<br></br>
<br></br>

