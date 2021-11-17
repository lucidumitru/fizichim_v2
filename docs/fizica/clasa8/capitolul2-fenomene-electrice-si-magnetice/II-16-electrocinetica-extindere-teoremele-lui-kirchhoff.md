---
sidebar_position: 16
---

# II.16. Extindere: Teoremele lui Kirchhoff.



import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />



import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'




Cum se rezolvă o problemă cu rețea electrică:

- Notează cu litere mari nodurile rețelei (punctele unde se intersectează și se ating cel puțin trei conductori).

- Notează laturile rețelei (porțiunile de circuit dintre două noduri succesive, prin care trece un singur curent). Stabilește arbitrar (cum dorești tu) câte un sens pentru fiecare curent și notează-i cu simboluri cu indici (I<sub>1</sub>, I<sub>2</sub>, ... etc). Ai grijă ca unii să intre în nod (vârful săgeții spre nod) și alții să iasă din nod (vârful săgeții opus nodului).

- Notează ochiurile simple ale rețelei (porțiunile de circuit care au un contur închis și formate din două laturi). Stabilește arbitrar (cum dorești tu) câte un sens de parcurs pentru fiecare ochi.



:::important Enunț

**Prima teoremă a lui Kirchhoff :**

**“Suma algebrică a intensităților curenților care se întâlnesc într-un nod de circuit este nulă“.**

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza1_PrimaTeoremaALuiKirchhoff_vers2.jpg" width="1000" height="150" />

unde intensitățile I<sub>k</sub> pot fi pozitive sau negative, în funcție de modul în care trece curentul prin nod (intră în nod sau iese din nod).

O altă modalitate de enunțare a primei teoreme a lui Kirchhoff:

**“Suma algebrică a intensităților curenților care intră într-un nod de circuit este egală cu suma intensităților curenților care ies din nodul de rețea“.** 

Pentru n = nr. noduri, se scriu _(n-1)_ ecuații cu prima teoremă a lui Kirchhoff, aplicată nodurilor de rețea.

De exemplu pentru nodul A aplicăm Teorema I a lui Kirchhoff:

I<sub>1</sub> + I<sub>2</sub> + I<sub>4</sub> = I<sub>3</sub> + I<sub>5</sub>


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza1bis_ExempluPrimaTeoremaALuiKirchhoff.jpg" width="1000" height="426" />



:::




:::important Enunț

**A doua teoremă a lui Kirchhoff:**

**“Suma algebrică a tensiunilor electromotoare dintr-un ochi de rețea este egală cu suma algebrică a tensiunilor de pe fiecare latură din acel ochi de circuit“.**


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza2_ADouaTeoremaALuiKirchhoff_vers2.jpg" width="1000" height="77" />


unde termenii sumelor pot fi pozitivi sau negativi, în funcție de sensul tensiunii sau al intensității în raport cu sensul ales arbitrar pentru ochiul considerat.

Pentru m = nr. ochiuri simple, se scriu _m_ ecuații cu a doua teoremă a lui Kirchhoff.


:::


:::important Convenții de semne

a) Tensiunea electromotoare 

- se ia cu plus dacă sensul curentului electric prin sursă este identic cu cel al ochiului ales arbitrar : + E



<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza2bis_Poza1_ConventiiDeSemne.jpg" width="1000" height="265" />

<br></br>
<br></br>

- se ia cu minus dacă sensul curentului electric prin sursă este opus cu cel al ochiului ales arbitrar : - E


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza2bis2_Poza2_ConventiiDeSemne.jpg" width="1000" height="187" />

<br></br>
<br></br>


b)	Tensiunea electrică (produsul rezistenței laturii cu intensitatea din acea latură):


- se ia cu plus dacă sensul curentului electric este același cu cel al ochiului ales arbitrar (sens de referință): + I ∙ R 


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza2bis3_Poza3_ConventiiDeSemne.jpg" width="1000" height="234" />

<br></br>
<br></br>



- se ia cu minus dacă sensul curentului electric este opus cu cel al ochiului ales arbitrar (sens de referință): - I ∙ R


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza2bis4_Poza4_ConventiiDeSemne.jpg" width="1000" height="232" />

<br></br>
<br></br>


:::








<br></br>

<Video src="https://www.youtube.com/embed/WTf_8i81rws" />


<br></br>

<Video src="https://www.youtube.com/embed/Ce3tXMe5Eqw" />






<br></br>


:::caution Problemă rezolvată

**1.** Determină intensitățile curenților din următorul circuit ramificat: 


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza3_ShemaElectrica_ProblemaModel3_vers2.jpg" width="1000" height="656" />



#### Rezolvare:

- Notăm cu litere mari nodurile rețelei (A și B).

<br></br>

- Notăm laturile rețelei, stabilim arbitrar sensurile curenților de pe fiecare latură:

  - AE<sub>1</sub>B (I<sub>1</sub>)

  - AE<sub>2</sub>B (I<sub>2</sub>)

  - AR<sub>3</sub>B (I<sub>3</sub>)

- Notăm ochiurile simple ale rețelei. Stabilim arbitrar (cum dorim) câte un sens de parcurs pentru fiecare ochi (orar sau antiorar).

<br></br>

- Aplicăm prima teoremă a lui Kirchhoff: “Suma algebrică a intensităților curenților care intră într-un nod de circuit este egală cu suma intensităților curenților care ies din nodul respectiv“.

<br></br>

- Pentru n = nr. noduri, se scriu (n-1) ecuații cu prima teoremă a lui Kirchhoff, aplicată nodurilor de rețea, deci pentru un singur nod:

  - I<sub>1</sub> + I<sub>2</sub> = I<sub>3</sub>

<br></br>

- Aplicăm a doua teoremă a lui Kirchhoff: “Suma algebrică a tensiunilor electromotoare pentru un ochi de circuit este egală cu suma algebrică a căderilor de tensiune din acel ochi de circuit“, pentru două ochiuri simple:

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza4_Calcule1_ProblemaModel3_vers2.jpg" width="1000" height="179" />


<br></br>
<br></br>

- Facem un sistem de 3 ecuații și cu cele trei necunoscute I<sub>1</sub>, I<sub>2</sub>, I<sub>3</sub>

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza5_Calcule2_ProblemaModel3_vers2.jpg" width="1000" height="224" />


<br></br>
<br></br>


- Înlocuim datele numerice:

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza6_Calcule3_ProblemaModel3_vers2.jpg" width="1000" height="218" />


<br></br>
<br></br>


- Scoatem pe I<sub>1</sub> din prima ecuație: I<sub>1</sub> = I<sub>3</sub> – I<sub>2</sub> și îl înlocuim în a doua ecuație 

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza7_Calcule4_ProblemaModel3_vers3.jpg" width="1000" height="459" />


<br></br>
<br></br>


- Se înlocuiește I<sub>2</sub> într-o ecuație cu I<sub>3</sub>:

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza8_Calcule5_ProblemaModel3_vers3.jpg" width="1000" height="103" />

<br></br>
<br></br>


- Din prima ecuație îl aflăm pe I<sub>1</sub>:

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza9_Calcule6_ProblemaModel3_vers3.jpg" width="1000" height="72" />

<br></br>
<br></br>



<Video src="https://www.youtube.com/embed/ogptDUHBeLQ" />



:::


<br></br>
<br></br>

