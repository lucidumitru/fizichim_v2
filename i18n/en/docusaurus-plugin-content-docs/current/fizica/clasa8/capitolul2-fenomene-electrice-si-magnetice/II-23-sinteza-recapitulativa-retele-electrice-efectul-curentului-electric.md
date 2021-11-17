---
sidebar_position: 23
---

# II.23. Sinteză recapitulativă - Rețele electrice. Efectul curentului electric.



import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />



import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'





:::important


O rețea electrică, oricât de complicată, este constituită din trei elemente distincte: noduri, laturi și ochiuri.

**Nodul de circuit** reprezintă intersecția și contactul fizic a cel puțin trei conductoare electrice.
 
**Latura de circuit** este porțiunea de circuit cuprinsă între două noduri succesive, astfel încât prin elementele ei să circule același curent electric.

**Ochiul de circuit** reprezintă porțiunea de circuit formată din cel puțin două laturi, conectate astfel încât să formeze un contur închis (linie poligonală închisă).


<br></br>



**Gruparea rezistoarelor** 


Un grup de rezistoare se înlocuiește cu unul singur, denumit **rezistor echivalent.** 

Rezistența acestuia reprezintă echivalentul rezistențelor respectivei grupări.




Rezistoarele prin care trece același curent și care se află pe aceeași latură a unui circuit formează o **grupare în serie**, fiind echivalate cu rezistorul R<sub>s</sub>.



**Rezistența echivalentă a unei grupări serie de rezistoare este egală cu suma rezistențelor fiecărui rezistor:** 


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza1bis_FormulaRezistenteiSerie.jpg" width="1000" height="59" />


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza2_RezistentaRezistoruluiSerie_vers2.jpg" width="1000" height="122" />




<br></br>
<br></br>







Rezistoarele care se află pe laturi diferite între aceleași două noduri ale unui circuit, având aceeași tensiune la capete formează o **grupare în paralel**, fiind echivalate cu rezistorul R<sub>p</sub>.


**Inversul rezistenței echivalente a unei grupări paralel de rezistoare este egal cu suma inverselor rezistențelor fiecărui rezistor:** 


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza5_Formula2RezistoruluiEchivalentParalel_vers2.jpg" width="1000" height="130" />


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_11_Poza6_RezistentaRezistoruluiParalel_vers2.jpg" width="1000" height="276" />




<br></br>
<br></br>




**Cum se rezolvă o problemă cu rețea electrică:**

- Notează cu litere mari nodurile rețelei (punctele unde se intersectează și se ating cel puțin trei conductori).

- Notează laturile rețelei (porțiunile de circuit dintre două noduri succesive, prin care trece un singur curent). Stabilește arbitrar (cum dorești tu) câte un sens pentru fiecare curent și notează-i cu simboluri cu indici (I<sub>1</sub>, I<sub>2</sub>, ... etc). Ai grijă ca unii să intre în nod (vârful săgeții spre nod) și alții să iasă din nod (vârful săgeții opus nodului).

- Notează ochiurile simple ale rețelei (porțiunile de circuit care au un contur închis și formate din două laturi). Stabilește arbitrar (cum dorești tu) câte un sens de parcurs pentru fiecare ochi.


<br></br>
<br></br>


**Prima teoremă a lui Kirchhoff: “Suma algebrică a intensităților curenților care se întâlnesc într-un nod de circuit este nulă“.**

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza1_PrimaTeoremaALuiKirchhoff_vers2.jpg" width="1000" height="150" />

unde intensitățile I<sub>k</sub> pot fi pozitive sau negative, în funcție de modul în care trece curentul prin nod (intră în nod sau iese din nod).

O altă modalitate de enunțare a primei teoreme a lui Kirchhoff:

**“Suma algebrică a intensităților curenților care intră într-un nod de circuit este egală cu suma intensităților curenților care ies din nodul de rețea“.** 

Pentru n = nr. noduri, se scriu _(n-1)_ ecuații cu prima teoremă a lui Kirchhoff, aplicată nodurilor de rețea.


<br></br>
<br></br>


**A doua teoremă a lui Kirchhoff : “Suma algebrică a tensiunilor electromotoare dintr-un ochi de rețea este egală cu suma algebrică a tensiunilor de pe fiecare latură din acel ochi de circuit“.**


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_12_Poza2_ADouaTeoremaALuiKirchhoff_vers2.jpg" width="1000" height="77" />


unde termenii sumelor pot fi pozitivi sau negativi, în funcție de sensul tensiunii sau al intensității în raport cu sensul ales arbitrar pentru ochiul considerat.

Pentru m = nr. ochiuri simple, se scriu _m_ ecuații cu a doua teoremă a lui Kirchhoff.



**Convenții de semne:** 



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




<br></br>
<br></br>














**Pentru o grupare în serie de n surse identice: tensiunea electromotoare a grupării serie de generatoare electrice:** 


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_13_Poza6bis_TensiuneaElectromotoare_vers2.jpg" width="1000" height="64" />



**Rezistența internă a grupării serie de generatoare electrice:**
 

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_13_Poza6bis2_RezistentaGroariiSerieDeGeneratoare_vers2.jpg" width="1000" height="69" />


Dacă avem mai multe baterii la dispoziție și avem nevoie de o tensiune mai mare decât a unei baterii, grupăm în serie bateriile.

<br></br>
<br></br>




**Pentru o grupare în paralel de n surse identice: tensiunea electromotoare a grupării paralel de generatoare electrice:** 

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_13_Poza7bis_TensiuneElectromotoareGrupareParalel_vers2.jpg" width="1000" height="75" />

<br></br>
<br></br>

**Rezistența internă a grupării serie de generatoare electrice :** 

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_13_Poza8_RezistentaInterna_Experiment23_vers2.jpg" width="1000" height="97" />

<br></br>
<br></br>

Dacă avem nevoie de un curent de o intensitate mai mare pentru un anumit circuit, grupăm bateriile în paralel.




<br></br>
<br></br>


**Efectele curentului electric** sunt fenomenele care apar în urma trecerii curentului electric printr-un circuit.

Efectele curentului electric sunt de trei feluri:

- Efectul termic al curentului electric

- Efectul chimic al curentului electric

- Efectul magnetic al curentului electric


<br></br>


**Efectul termic al curentului electric** constă în încălzirea unui conductor la trecerea curentului electric prin el.



**Conductoarele electrice se încălzesc diferit la trecerea curentului electric prin ele, astfel:**

- **Metalele bune conductoare (exemple: argintul, cuprul, aurul, aluminiul) au o rezistență mică și se încălzesc puțin la trecerea curentului electric prin ele.**

- **Metalele greu conductoare (exemple: wolframul,nichelina, manganina) au o rezistență mare și se încălzesc mult la trecerea curentului electric prin ele.**



Cele mai importante aplicații ale efectului termic sunt aparatele cu rezistor, becul cu incandescență, siguranța fuzibilă.


<br></br>
<br></br>



Legea care măsoară cantitativ căldura degajată printr-un conductor la trecerea curentului prin el se numește Legea lui Joule.


**Legea lui Joule:**
 
**Căldura disipată (Q) de o porțiune de circuit cu rezistența electrică R este direct proporțională cu pătratul intensității curentului (I<sup>2</sup>) care parcurge acea porțiune, cu rezistența ei (R) și cu durata trecerii curentului (Δt).**

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_14_Poza4_LegeaLuiJoule_vers3.jpg" width="1000" height="67" />
 
unde, 

**R este rezistența electrică,**

**I este intensitatea curentului electric,**

**Δt este intervalul de timp.**




Energia transferată conductorului de rezistență R este transmisă de către acesta mediului înconjurător sub formă de căldură ( energie termică ). Electronii liberi în mișcare se ciocnesc cu ionii rețelei metalice ai conductorului, astfel agitația termică se intensifică ducând la creșterea temperaturii și încălzirea conductorului.


<br></br>
<br></br>



Trecerea curentului electric prin soluţiile de electroliţi determină fenomene chimice la electrozi, numite efecte chimice ale curentului electric. 


**Efectul chimic al curentului electric (electroliza)** constă în degajări de gaze şi depuneri de substanţe la cei doi electrozi legați la o sursă electrică, atunci când prin soluţiile sau topiturile de electroliţi trece curentul electric. 


**Electrolitul** este o substanță care, dizolvată sau topită, permite trecerea curentului electric prin ea. Ca exemple de electroliți avem sărurile, acizii și bazele.


Fenomenul fizic în care un electrolit se descompune în ioni la dizolvarea în apă se numește **disociație electrolitică.** 


În urma disocierii electrolitice, ionii formați au o mișcare dezordonată.

La introducerea a doi electrozi legați la o sursă electrică, ionii din soluție încep să se miște ordonat și să se deplaseze către electrodul de semn opus lor, adică trece curentul electric prin soluție.
 
Odată ajunși la electrozi au loc reacții chimice, adică ionii se neutralizează, devenind atomi sau molecule.

Vom exemplifica pe clorura de cupru II (CuCl<sub>2</sub>).

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_2_15_Poza1_DisociatieElectrolitica_vers3.jpg" width="1000" height="464" />



<br></br>
<br></br>


**Efectul magnetic al curentului electric** constă în apariția unui câmp magnetic în jurul unui conductor parcurs de curent electric.


**În jurul conductorului parcurs de curent electric apare un câmp magnetic, care deviază ușor acul magnetic.** 



**În jurul bobinei parcursă de curent electric apare un câmp magnetic astfel încât, bobina se comportă ca un magnet, având la cele două capete cei doi poli magnetici.**

Capătul bobinei care se atrage cu N acului magnetic este polul sud al bobinei, iar capătul bobinei care se atrage cu S acului magnetic este polul nord al bobinei.
 
Inversând legarea bornelor bobinei la polii bateriei, polii magnetici ai săi se inversează și ei.



<br></br>
<br></br>



**Câmpul magnetic din jurul electromagnetului este mult mai intens decât cel din jurul unui conductor liniar sau bobine parcurse de curent electric.**

**Electromagnetul atrage obiecte de fier.** 


**Câmpul magnetic** este o formă a materiei, care se manifestă prin acțiunea asupra acului magnetic sau asupra conductoarelor parcurse de curent electric.

Pentru reprezentarea intuitivă a câmpului magnetic, la fel ca şi în cazul câmpului electric, se pot folosi linii de câmp, formând așa-numitul **spectrul câmpului magnetic.**
 
Spre deosebire de liniile câmpului electric, liniile câmpului magnetic sunt curbe închise.
 
Spectrul câmpului magnetic este diferit în funcție de forma magnetului sau de forma conductorului prin care trece curent electric.



**Liniile de câmp magnetic ale unui magnet bară** au sensul astfel încât intră în polul sud, traversează magnetul, ies din polul nord şi se închid în exteriorul magnetului. 


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_3_1_Poza3_LiniileDECampMagneticAlUnuiMagnetBara_vers2.jpg" width="1000" height="399" />



<br></br>
<br></br>



**Liniile de câmp magnetic ale unui conductor liniar parcurs de curent** sunt cercuri concentrice în jurul curentului şi sunt într-un plan perpendicular pe acesta. Sensul lor poate fi determinat cu regula mâinii drepte: înfășurăm conductorul cu cele patru degete astfel încât degetul mare întins lateral să arate sensul curentului electric (de la plus la minus) prin conductor. Cele patru degete vor da sensul liniilor de câmp magnetic.


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_3_1_Poza4bis_ConductorCuRegulaMainiiDrepte_vers2.jpg" width="1000" height="406" />


<br></br>
<br></br>




Câmpul magnetic produs de un curent electric depinde de intensitatea curentului electric, dar şi de sensul acestuia. 

<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_3_1_Poza4_SensulLiniilorDECampMagnetic_vers2.jpg" width="1000" height="383" />

<br></br>
<br></br>



**Liniile de câmp magnetic ale unei bobine** ale cărei spire sunt străbătute de un curent electric este similară cu un magnet în formă de bară din punct de vedere al distribuţiei liniilor de câmp magnetic. 

Sensul lor poate fi determinat cu regula mâinii drepte: înfășurăm bobina cu cele patru degete în sensul curentului electric (de la plus la minus), iar degetul mare întins lateral arată sensul liniilor de câmp magnetic.


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_3_1_Poza5_DesenBobinaCuRegulaMainiiDrepte_Final_OK_vers2.jpg" width="1000" height="446" />

<br></br>
<br></br>
<br></br>


Mărimea fizică vectorială care caracterizează un câmp magnetic din punct de vedere al intensității interacției sale cu conductor parcurs de curent electric aflat în acel câmp se numeşte **inducţia câmpului magnetic (notată cu B)**  


În orice punct din câmp, inducția magnetică este un vector tangent la linia de câmp magnetic în planul acesteia și are sensul liniei de câmp.
 
Unitatea de măsură în SI este


<Img className="img-responsive4" src="fizica/clasa8/capitolul2/2_3_1_Poza5bis_UnitateaDeMasuraAInductieiMagentice.jpg" width="1000" height="68" />

<br></br>
<br></br>
<br></br>


Pentru caracterizarea câmpului magnetic este necesar ca pe lângă inducția magnetică, ce este o mărime care depinde si de proprietățile mediului, se introduce intensitatea câmpului magnetic notata cu H. 

Relația dintre cele două mărimi este B = μ • H = μ<sub>0</sub> • μ<sub>r</sub> • H 

μ = permeabilitatea magnetică absolută, ce caracterizează proprietățile magnetice ale unui mediu

μ<sub>0</sub> = 4π • 10<sup>-7</sup> = permeabilitatea magnetica a vidului.



Câmpul magnetic al bobinei este cu atât mai intens cu cât:

- intensitatea curentului electric, prin spirele bobinei, este mai mare;
 
- cu cât numărul de spire al bobinei este mai mare;

- cu cât lungimea bobinei este mai mică.

Forţa de atracţie exercitată de electromagnet asupra obiectelor de fier, depinde direct proporțional de câmpul magnetic produs de bobina electromagnetului parcursă de curent electric și, implicit, de inducția magnetică a acesteia. 

Forţa de atracţie exercitată de electromagnet asupra obiectelor de fier mai depinde și de forma miezului de fier. Ea crește de la miezul de fier sub formă de bară, apoi potcoavă (U), până la miezul de fier închis.



:::





<br></br>
<br></br>


