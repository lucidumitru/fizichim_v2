---
sidebar_position: 3
---

# Cap.III. Lucrul mecanic, energia mecanică.



import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />



import Img from '@site/src/components/Img'
import Video from '@site/src/components/Video'


## Probleme rezolvate.








:::caution Problemă rezolvată - Lucrul mecanic.

**3.1.** O mașină se deplasează rectiliniu și uniform pe o porțiune de șosea cu o viteză de 21,6 km/h, timp de 30 min. Știind că între roțile mașinii și asfalt apare o forță de 40 N, află lucrul mecanic total efectuat de motorul mașinii.


#### Rezolvare:


- Scriem datele problemei și transformăm în SI:

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_1_Poza4_DateleProblemei_ProblemaModel1_vers4.jpg" width="1000" height="241" />


<br></br>
<br></br>

- Reprezentăm forţele.

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_1_Poza5_ReprezentareaFortelor_ProblemaModel1_vers3.jpg" width="1000" height="318" />

<br></br>
<br></br>



- Calculăm distanța parcursă: 


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_1_Poza6_CalculareaDistanteiParcurse_ProblemaModel1_vers3.jpg" width="1000" height="106" />

- La v = constantă avem modulul forței de tracțiune egal cu modulul forței de frecare : |F| = |F<sub>f</sub>| = 40 N


- L<sub>G</sub> = L<sub>N</sub> = 0 (deoarece greutatea și reacțiunea normală sunt perpendiculare pe direcția deplasării)

- Calculăm lucrul mecanic motor: 

  - **L<sub>F</sub> = F ∙ d = 40 N ∙ 10.800 m = 432.000 J**

- Calculăm lucrul mecanic rezistent, ținând cont de convenții (deoarece forța de frecare se opune mișcării, acest lucru este negativ):

  - **L<sub>Ff</sub> = - F<sub>f</sub> ∙ d = - 40 N ∙ 10.800 m = - 432.000 J**

- Calculăm lucrul mecanic total:

  - **L<sub>total</sub> = L<sub>F</sub>  + L<sub>Ff</sub>  + L<sub>G</sub>  + L<sub>N</sub> = 432.000 J - 432.000 J + 0 J + 0 J = 0 J**



:::


<br></br>




:::caution Problemă rezolvată - Lucrul mecanic.

**3.2.** Un copil trage o sanie pe o distanță de 100 m cu o forță de 40 N, a cărei direcție face un unghi de 60° cu orizontala. Știind forța de frecare de 10 N, determină lucrul mecanic total.


#### Rezolvare:


- Desenăm forțele ce acționează asupra saniei :

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_1_Poza7_ReprezentareaFortelor_ProblemaModel2_vers6.jpg" width="1000" height="681" />

- Desenăm forța de tracțiune pe direcția oblică.

- Descompunem forța de tracțiune după cele două direcții perpendiculare, O<sub>x</sub> (pe orizontală) și O<sub>y</sub> (pe verticală), ducând din vârful ei perpendiculare pe cele două axe. Așa obținem componentele forței de tracțiune pe cele două axe, F<sub>x</sub> și F<sub>y</sub>.

- Reprezentăm greutatea corpului, din centrul de greutate, pe verticală în jos.

- Măsurăm segmentul forței F<sub>y</sub> și trasăm un segment egal cu diferența dintre segmentul greutății și segmentul forței F<sub>y</sub>, de la baza corpului, în același sens cu F<sub>y</sub>. Aceasta este forța de reacțiune normală (N).

- Trasăm un segment de la mijlocul corpului, la suprafața de contact, însă în sens opus lui F<sub>x</sub> și mai mic decât F<sub>x</sub>, deoarece corpul nu are o mișcare uniformă. Aceasta este forța de frecare ( F<sub>f</sub> ).

  - Pe direcția orizontală ( O<sub>x</sub> ) : |F<sub>x</sub>| > |F<sub>f</sub>| 		
  - Pe direcția verticală ( O<sub>y</sub> ) : |G| = |F<sub>y</sub> + N| 	

- Scriem datele problemei:

  - d = 100 m

  - F = 40 N

  - F<sub>f</sub> = 10 N

  - α = 60°, cos α = 0,5

  - L<sub>total</sub> = ?


- Calculăm modulul forței F<sub>x</sub> care acționează pe direcția și în sensul mișcării corpului : F<sub>x</sub> = F ∙ cos α = 40 N ∙ 0,5 = 20 N


- L<sub>G</sub> = L<sub>N</sub> = L<sub>Fy</sub> = 0 (deoarece greutatea, reacțiunea normală și componenta forței de tracțiune pe axa Oy sunt perpendiculare pe direcția deplasării)

- Calculăm lucrul mecanic motor:

  - **L<sub>Fx</sub> = F<sub>x</sub> ∙ d = 20 N ∙ 100 m = 2.000 J**

- Calculăm lucrul mecanic rezistent, ținând cont de convenții ( deoarece forța de frecare se opune mișcării, acest lucru este negativ) :

  - **L<sub>Ff</sub> = - F<sub>f</sub> ∙ d = - 10 N ∙ 100 m = - 1.000 J**

- Calculăm lucrul mecanic total :

  - **L<sub>total</sub> = L<sub>F</sub>  + L<sub>Ff</sub> + L<sub>G</sub> + L<sub>N</sub> + L<sub>Fy</sub> = 2.000 J - 1.000 J + 0 J + 0 J + 0 J = 1.000 J**


<br></br>


<Video src="https://www.youtube.com/embed/75MaFqaXu3k" />


:::

<br></br>
<br></br>









:::caution Problemă rezolvată - Puterea mecanică. Unități de măsură ale puterii. 

**3.3.** Un automobil de 2 t se deplasează rectiliniu și uniform, pe orizontală, cu viteza de 90 km/h, iar forțele de frecare reprezintă 12% din greutatea automobilului.

a)	Calculează puterea motorului exprimată în W și în CP.

b)	Pentru o putere constantă a motorului mașinii, în ce situație atinge mașina viteza maximă?




#### Rezolvare:


- Scriem datele problemei și transformăm în SI:

  - m = 2 t = 2000 kg

  - v = 90 km/h = 90 : 3,6 = 25 m/s = constantă

  - F<sub>f</sub> = 12% din G

  - a) P =? W, CP

  - b) P = constantă, v<sub>max</sub> =?



- Calculăm greutatea automobilului:
 
  - G = m ∙ g = 2000 kg ∙ 10 N/kg = 20.000 N

- Calculăm forța de frecare:

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_2_Poza3_CalculFortaFrecare_ProblemaModel3_vers4.jpg" width="1000" height="108" />

- La v = constantă avem modulul forței de tracțiune egal cu modulul forței de frecare : |F| = |F<sub>f</sub>| = 2400 N

- Scriem formula puterii și a lucrului mecanic și în loc de d/Δt punem viteza, v:
 

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_2_Poza4_CalculPutereSiLucruMecanic_ProblemaModel3_vers4.jpg" width="1000" height="246" />



b) La P = constantă, forța de tracțiune este invers proporțională cu viteza.

Deci automobilul atinge o viteză maximă atunci când forța de tracțiune este minimă.


<br></br>


<Video src="https://www.youtube.com/embed/UWRsLtlWz40" />


:::


<br></br>
<br></br>







:::caution Problemă rezolvată - Randamentul.

**3.4.** Calculează randamentul planului înclinat. 



Iată tabelul cu datele experimentale:


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_3_Poza3_DateExperimentale_ProblemaModel4_vers3.jpg" width="1000" height="558" />


#### Rezolvare:


- Transformăm toate dimensiunile în metri :

  - h<sub>1</sub> = 2 cm = 0,02 m

  - h<sub>2</sub> = 6 cm = 0,06 m

  - h<sub>3</sub> = 11 cm = 0,11 m

  - l = 23 cm = 0,23 m


- Calculăm pentru fiecare determinare randamentul :



<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_3_Poza4_Calcule_ProblemaModel4_vers4.jpg" width="1000" height="386" />


Observăm faptul că odată cu creșterea înălțimii planului înclinat (implicit și a unghiului α al planului), randamentul planului înclinat crește.


<br></br>

<Video src="https://www.youtube.com/embed/rhP2CPI8HXQ" />


:::


<br></br>
<br></br>











:::caution Problemă rezolvată - Energia cinetică.

**3.5.** Un autoturism se deplasează cu viteză constantă pe o șosea rectilinie. La semaforul roșu, șoferul frânează, mașina oprindu-se după 40m. Știind forța de frecare de 2000 N, ce energie cinetică a avut mașina înaintea începerii frânării?

#### Rezolvare:


- Scriem datele problemei și transformăm în SI :

  - v = constantă

  - F<sub>f</sub> = 2000 N

  - d = 40 m

  - E<sub>ci</sub> =? (energia cinetică inițială )



- Reprezentăm forțele ce acționează asupra mașinii:

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_4_Poza2_ReprezentareForte_ProblemaModel5_vers3.jpg" width="1000" height="350" />

- Calculăm lucrul mecanic al tuturor forțelor ce acționează asupra corpului și apoi lucrul mecanic total:
 
  - L<sub>Ff</sub> = - F<sub>f</sub> ∙ d = - 2000 N ∙ 40 m = - 80.000 J
  - L<sub>G</sub> = 0 J și L<sub>N</sub> = 0 J (deoarece G și N sunt perpendiculare pe direcția mișcării corpului).
  - L<sub>total</sub> = L<sub>Ff</sub> +  L<sub>G</sub> + L<sub>N</sub> = - 80.000 J + 0 J + 0 J = -80.000 J

- Calculăm variația energiei cinetice

  - ΔE<sub>c</sub> = E<sub>cf</sub> -  E<sub>ci</sub> = 0 -  E<sub>ci</sub>  = -  E<sub>ci</sub> , deoarece E<sub>cf</sub> = 0 (energia cinetică finală este 0 deoarece mașina s-a oprit și v<sub>f</sub> = 0).  


- Egalăm variația energiei cinetice cu lucrul mecanic (Legea variației energiei cinetice) :
  - ΔE<sub>c</sub> = L
  - -E<sub>ci</sub> = L<sub>total</sub>
  - -E<sub>ci</sub> = - 80.000 J
  - E<sub>ci</sub> = 80.000 J



<Video src="https://www.youtube.com/embed/5BcrkQudO44" />


:::




:::caution Problemă rezolvată - Energia cinetică.

**3.6.** O motocicletă de 230 kg pornește din repaus și ajunge la viteza de 20 m/s după ce parcurge 30 m, pe un drum orizontal. Calculează forța de tracțiune a motorului, dacă forța de frecare este de 500 N.

#### Rezolvare:




- Scriem datele problemei:

  - m = 230 kg
  
  - v<sub>i</sub> = 0
  
  - v<sub>f</sub>  = v 
  
  - d = 30 m
  
  - F<sub>f</sub> = 500 N

  - F = ?


- Reprezentăm forțele ce acționează asupra motocicletei:

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_4_Poza3_ReprezentareForte_ProblemaModel6_vers3.jpg" width="1000" height="287" />




- Calculăm lucrul mecanic total prin adunarea lucrurilor mecanice ale forțelor ce acționează asupra corpului:  
  
  - L<sub>F</sub> = F ∙ d = F ∙ 30
    
  - L<sub>Ff</sub> = - F<sub>f</sub>  ∙ d = - 500 N ∙ 30 m = - 15.000 J
  
  - L<sub>G</sub> = 0 J și L<sub>N</sub> = 0 J (ambele forțe sunt perpendiculare pe direcția mișcării corpului).
  
  - L<sub>total</sub> = L<sub>F</sub> + L<sub>Ff</sub> +  L<sub>G</sub> + L<sub>N</sub> =  F ∙ 30 – 15.000  + 0 + 0 = F ∙ 30 – 15.000  
  


- Calculăm variația energiei cinetice

  - ΔE<sub>c</sub> = E<sub>cf</sub>  -  E<sub>ci</sub> = E<sub>cf</sub>  -  0  =  E<sub>cf</sub>, deoarece E<sub>ci</sub> = 0 ( mașina a pornit și în repaus avea v<sub>i</sub> = 0).    


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_4_Poza4_FormulaVariatieiEnergieiCinetice_ProblemaModel6_vers3.jpg" width="1000" height="115" />


- Egalăm variația energiei cinetice cu lucrul mecanic (Legea variației energiei cinetice):

  - ΔE<sub>c</sub> = L<sub>total</sub>
  
  - 46.000 = F ∙ 30 – 15.000 
  
  - F ∙ 30  = 46.000 + 15.000 
  
  - F = 2.033,33 N
  

:::


<br></br>
<br></br>















:::caution Problemă rezolvată - Energia potențială gravitațională

**3.7.** a) Să calculăm lucrul mecanic al greutății unui corp cu masa de 0,015 kg, când cade liber pe sol de la înălțimea h = 0,1 m.

b) Să calculăm lucrul mecanic al greutății unui corp cu masa de 0,015 kg, când coboară pe un plan înclinat la sol având o lungime de l = 0,33 m. 


#### Rezolvare:


<Video src="https://www.youtube.com/embed/gMJlyc8HMCc" />

<br></br>


a)  L<sub>G</sub> = G ∙ h = m ∙ g ∙ h = 0,015 kg ∙ 10 N/kg ∙ 0,1 m = 0,015 J

b) Când corpul coboară pe un plan înclinat, forța care efectuează lucru mecanic este greutatea tangențială, G<sub>t</sub> și parcurge o distanță egală cu lungimea ( l ) a planului înclinat.

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_5_Poza1_Calcul_ProblemaModel7_vers4.jpg" width="1000" height="86" />


<br></br>
<br></br>

- Indiferent de drumul urmat de corp, lucrul mecanic al greutății este același. Deci, greutatea este o forță conservativă.

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_5_Poza2_ReprezentareGraficaForte_ProblemaModel7_vers3.jpg" width="1000" height="422" />



:::



<br></br>
<br></br>




:::caution Problemă rezolvată - Energia potențială gravitațională

**3.8.** Cât este energia potențială gravitațională a unui avion de 30 t la altitudinea de 10 km față de sol?


#### Rezolvare:

- Scriem datele problemei și transformăm în SI :

  - E<sub>pg</sub> = ?

  - m = 30 t = 30.000 kg

  - h  = 10 km = 10.000 m

- Calculăm energia potențială gravitațională a avionului

  - E<sub>pg</sub> = m ∙ g ∙ h = 30.000 kg ∙ 10 N/kg ∙ 10.000 m = 3.000.000.000 J

:::




<br></br>
<br></br>








:::caution Problemă rezolvată - Energia potențială elastică

**3.9.** O forță de 40 N alungește un resort cu 2 dm. Cât este forța care alungește același resort cu 6 dm ? Trasează graficul forței deformatoare F de la starea nedeformată  până la alungirea maximă, în funcție de alungirea resortului, Δl. 

#### Rezolvare:


- Scriem datele problemei și transformăm în SI :



<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_6_Poza1_DateInitiale_ProblemaModel9_vers3.jpg" width="1000" height="313" />


- Scriem legea deformării elastice pentru prima forță deformatoare (F<sub>1</sub>) și aflăm constanta elastică a resortului, k:

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_6_Poza2_LegeaDeformariiElastice_ProblemaModel9_vers4.jpg" width="1000" height="136" />


- Scriem legea deformării elastice pentru a doua forță deformatoare F<sub>2</sub> :

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_6_Poza3_LegeaDeformariiElastice2_ProblemaModel9_vers4.jpg" width="1000" height="101" />


- Reprezentăm graficul forței deformatoare F, în funcție de alungirea resortului, de la starea nedeformată (F = 0 și Δl = 0) până la alungirea maximă.

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_6_Poza4_GraficulForteiDeformatoare_ProblemaModel9_vers4.jpg" width="1000" height="716" />


Graficul este liniar (linia roșie) datorită dependenței liniare a forței deformatoare cu deformarea produsă asupra resortului. 


:::







:::caution Problemă rezolvată - Energia potențială elastică

**3.10.** Cât este energia potențială elastică a unui resort cu 150 N/m comprimat cu 30 cm? 

#### Rezolvare:


- Scriem datele problemei și transformăm în SI :



<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_6_Poza8_DateInitiale_ProblemaModel10_vers3.jpg" width="1000" height="223" />


- Scriem formula energiei potențiale elastice și înlocuim datele problemei:

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_6_Poza9_FormulaCalcul_ProblemaModel10_vers3.jpg" width="1000" height="117" />


:::



<br></br>
<br></br>














:::caution Problemă rezolvată - Energia mecanică

**3.11.** Un șifonier de 50 kg aflat într-un camion, coboară de la înălțimea de 1 m, pe o platformă oblică ajungând la o viteză de 36 km/h la baza acestui plan înclinat. Calculează lucrul mecanic al forței de frecare asupra șifonierului în timpul coborârii lui. 

#### Rezolvare:


- Scriem datele problemei și transformăm în SI :



<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_7_Poza1_DateInitiale_ProblemaModel11_vers3.jpg" width="1000" height="270" />


- Scriem ecuația teoremei de variație a energiei mecanice și înlocuim datele problemei. 

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_7_Poza2_FormulaCalcul_ProblemaModel11_vers4.jpg" width="1000" height="355" />





<Video src="https://www.youtube.com/embed/M0ALuCSEuac" />


:::




<br></br>
<br></br>









:::caution Problemă rezolvată - Conservarea energiei mecanice

**3.12.** Un pendul gravitațional este tras lateral la 0,3 m față de poziția de echilibru (verticală). Cu ce viteză va trece pendulul prin dreptul poziției de echilibru (starea 2)? 



#### Rezolvare:


- Desenăm mișcarea pendulului de la prima poziție (când este la înălțimea h) până la a doua poziție (când trece prin poziția de echilibru):


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_8_Poza2_ReprezentareaGrafica_ProblemaModel12_vers3.jpg" width="1000" height="533" />




- Scriem datele problemei și transformăm în SI :

  - v = ?

  - h = 0,3 m

- Calculăm energia mecanică a pendulului în cele două stări:


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_8_Poza3_Calcul_ProblemaModel12_vers3.jpg" width="1000" height="280" />


- Scriem ecuația legii conservării energiei mecanice și înlocuim datele problemei.  

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_8_Poza4_EcuatiaLegiiConservariiMecanice_ProblemaModel12_vers3.jpg" width="1000" height="147" />



<Video src="https://www.youtube.com/embed/_k8HtSGHjG0" />


:::



<br></br>
<br></br>






:::caution Probleme recapitulative rezolvate - Lucrul mecanic, energia mecanică.

**3.13.**	Un corp de 400 g se deplasează uniform pe o suprafață orizontală cu 10 m/s în 20 min. Știind că forța de frecare reprezintă 15% din greutatea corpului, se cere:

  - a)	Reprezintă toate forțele ce acționează asupra corpului și află valoarea lor.
  
  - b)	Lucrul mecanic total.
  
  - c)	Puterea mecanică produsă de corp.
  
  - d)	Energia cinetică a corpului în timpul deplasării.
  
#### Rezolvare:

- Scriem datele problemei și le transformăm în SI:

  - m = 400 g = 0,4 kg
  
  - v = constantă = 10 m/s
  
  - t = 20 min = 1200 s
  
  - F<sub>f</sub> = 15% G



a) 

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza1_ReprezentareForte_ProblemaModel1_vers3.jpg" width="1000" height="318" />


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza2_RezolvarePunctulA_ProblemaModel1_vers5.jpg" width="1000" height="319" />

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza3_RezolvarePunctulBCD_ProblemaModel1_vers5.jpg" width="1000" height="670" />








<br></br>
<br></br>




<Video src="https://www.youtube.com/embed/E3nEn4fVpms" />




:::






:::caution Probleme recapitulative rezolvate - Lucrul mecanic, energia mecanică.

**3.14.** Un corp de 1 kg este lăsat să alunece liber pe un plan înclinat, fără frecare, care are unghiul de 30° și lungimea planului de 0,04 dam. Se dă sin 30°=0,5.

  - a) Desenează forțele ce acționează asupra corpului.
  
  - b) Determină lucrul mecanic efectuat de corp în timpul coborârii.
  
  - c) Află înălțimea planului înclinat.
  
  - d) Determină viteza corpului când ajunge la baza planului înclinat.
  

#### Rezolvare:

- Notăm datele problemei:

  - m = 1 kg
  
  - Ff = 0
  
  - α = 30°
  
  - sin 30° = 0,5
  
  - l = 0,04 dam = 0,4 m
  

a)

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza6_ReprezentareForte_ProblemaModel2_vers3.jpg" width="1000" height="412" />

  
<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza7_RezolvarePunctulB_ProblemaModel2_vers4.jpg" width="1000" height="230" />


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza8_RezolvarePunctulC_ProblemaModel2_vers4.jpg" width="1000" height="201" />



<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza9_RezolvarePunctulD_ProblemaModel2_vers4.jpg" width="1000" height="558" />




<br></br>
<br></br>




<Video src="https://www.youtube.com/embed/81DtiP29-E8" />






:::




:::caution Probleme recapitulative rezolvate - Lucrul mecanic, energia mecanică.


**3.15.** O praștie este confecționată folosind un fir elastic care se întinde cu 4cm, atunci când de el se atârnă o piatră de 80 g. Câtă energie este acumulată în cele șase fire identice ale praștiei întinse, fiecare cu 10 cm? Ce viteză capătă piatra la lansarea cu praștia?

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza10_PozaPrastie_ProblemaModel3_vers3.jpg" width="1000" height="334" />

<br></br>
<br></br>


#### Rezolvare:


- Scriem datele problemei și le transformăm în SI :

  - Δ<sub>l1</sub> = 4 cm = 0,04 m

  - m = 80 g = 0,08 kg

  - Δ<sub>l2</sub> = 10 cm = 0,1 m


- Calculăm constanta elastică a firului, aplicând legea deformării elastice și greutatea pietrei care reprezintă forța deformatoare:

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza11_Rezolvare1_ProblemaModel3_vers4.jpg" width="1000" height="457" />

<br></br>
<br></br>


- Calculăm energia potențială elastică a unui fir elastic, când praștia este întinsă cu 10 cm:

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza12_Rezolvare2_ProblemaModel3_vers3.jpg" width="1000" height="122" />

<br></br>
<br></br>


- Deci energia potențială elastică acumulată în cele șase fire ale praștiei este de 0,1 ∙ 6 = 0,6 J.

- Energia potențială elastică a praștiei este transferată pietrei la lansarea cu praștia și transformată în energie cinetică:

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza13_Rezolvare3_ProblemaModel3_vers4.jpg" width="1000" height="349" />

<br></br>
<br></br>


<Video src="https://www.youtube.com/embed/38DTX1CbswA" />






:::






:::caution Probleme recapitulative rezolvate - Lucrul mecanic, energia mecanică.


**3.16.** Urcarea uniformă a unui corp cu greutatea de 60 N se face pe o pantă (plan înclinat) cu lungimea de 2m și cu o forță de frecare egală cu 10% din greutatea corpului. Se cere:

a) Lucrul mecanic al forței de frecare.

b) Lucrul mecanic al forței de tracțiune.

c) Lucrul mecanic al forței de frecare când corpul este lăsat să coboare liber spre baza pantei, pe aceeași distanță.

d) Viteza corpului când ajunge la baza pantei.

Se dă : α = 30°; sin 30°= 0,5.


#### Rezolvare:

- Notăm datele problemei:

  - G = 60 N
  
  - l = 2 m

  - F<sub>f</sub> = 10% G



<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza14_Schema_ProblemaModel4_vers3.jpg" width="1000" height="413" />

<br></br>
<br></br>

a)


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza15_Rezolvare1_ProblemaModel4_vers4.jpg" width="1000" height="203" />

<br></br>
<br></br>


b) Deoarece v = constantă: |F|= |G<sub>t</sub> + F<sub>f</sub>|


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza16_Rezolvare2_ProblemaModel4_vers4.jpg" width="1000" height="411" />

<br></br>
<br></br>




c) Când corpul coboară liber, forța de frecare este egală cu forța de frecare ca la urcarea pe pantă, deoarece forțele pe direcția Oy rămân aceleași (se schimbă numai forțele pe direcția Ox) :



<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza17_Rezolvare3_ProblemaModel4_vers3.jpg" width="1000" height="410" />

<br></br>
<br></br>



F<sub>f</sub> = μ ∙ N = μ ∙ G<sub>t</sub> = 6 N

L<sub>Ff</sub> = - F<sub>f</sub> ∙ l = - 6 N ∙ 2 m = - 12 J


<br></br>


d) Ca să calculăm viteza corpului cu care ajunge la baza planului înclinat aplicăm Teorema de variație a energiei mecanice: 

ΔE = L<sub>Ff</sub>

ΔE = E<sub>final</sub> - E<sub>inițial</sub>


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza18_Rezolvare4_ProblemaModel4_vers4.jpg" width="1000" height="473" />

<br></br>
<br></br>




<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza19_Rezolvare5_ProblemaModel4_vers4.jpg" width="1000" height="463" />

<br></br>
<br></br>


<Video src="https://www.youtube.com/embed/PzlyU_oI_hU" />




:::



:::caution Probleme recapitulative rezolvate - Lucrul mecanic, energia mecanică.

**3.17.** Maria aruncă o bilă de 100 g pe verticală în sus de la înălțimea de 2 m față de sol, cu viteza inițială de 2 m/s. Neglijând forța de frecare cu aerul atmosferic, află:

a) Înălțimea maximă la care ajunge bila față de poziția inițială, h<sub>0</sub>.

b) Viteza cu care bila atinge solul.

c) La ce înălțime urcă bila după ce atinge solul.

d) La ce înălțime maximă (h<sub>1</sub>') ar ajunge bila când este aruncată în sus cu aceeași viteză inițială, dacă asupra ei ar acționa o forță de frecare de 1N.





<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza20_Desen_ProblemaModel5_vers4.jpg" width="1000" height="560" />

<br></br>
<br></br>






#### Rezolvare:

- Notăm datele problemei:

  - m = 100 g = 0,1 kg
  
  - h<sub>0</sub> = 2 m
  
  - v<sub>0</sub> = 2 m/s
  
  - F<sub>f</sub> = 0

  
  - a)	h<sub>1</sub> = h<sub>max</sub> = ?
  
  - b)	v<sub>2</sub> = ?

  - c)	h<sub>3</sub> = ?

  - d)	h<sub>1</sub>' = ? când F<sub>f</sub> = 1 N


- a)


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza21_Rezolvare1_ProblemaModel5_vers4.jpg" width="1000" height="415" />

<br></br>
<br></br>


- b)



<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza22_Rezolvare2_ProblemaModel5_vers4.jpg" width="1000" height="466" />

<br></br>
<br></br>


- c)




<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza23_Rezolvare3_ProblemaModel5_vers3.jpg" width="1000" height="334" />

<br></br>
<br></br>



- d)

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_11_Poza24_Rezolvare4_ProblemaModel5_vers3.jpg" width="1000" height="558" />

<br></br>
<br></br>


<Video src="https://www.youtube.com/embed/YobzmMM2QLY" />






:::













<br></br>
<br></br>





## Exerciții recapitulative.

:::caution Exerciții - Energia mecanică

**3.18.** Care este tipul energiei mecanice ilustrată în următoarele trei imagini a,b,c?


a) ......................................................

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_7_Poza3_AplicaCeAiInvatat1_vers3.jpg" width="1000" height="340" />

<br></br>
<br></br>


b) ......................................................


<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_7_Poza4_AplicaCeAiInvatat2_vers3.jpg" width="1000" height="337" />


<br></br>
<br></br>


c) ......................................................

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_7_Poza5_AplicaCeAiInvatat3_vers3.jpg" width="1000" height="336" />


:::





:::caution Exerciții recapitulative - Lucrul mecanic, energia mecanică.


**3.19.**	Dacă lăsăm să coboare în aer un pendul ridicat la o anumită înălțime față de poziția de echilibru, energia lui mecanică se conservă? De ce?

<br></br>

**3.20.**	În care din situațiile de mai jos se efectuează un lucru mecanic și de ce :

•	Un tir transportă marfă între două orașe.

•	Un muncitor ține un sac de ciment în spinare.

<br></br>

**3.21.**	Ce lucru mecanic (motor/rezistent) este:

•	Lucrul mecanic efectuat de forța de frecare dintre aer și o parașută care aterizează ?

•	Lucrul mecanic efectuat de forța de tracțiune a motorului unei mașini ?


<br></br>

**3.22.**	Care dintre următoarele corpuri au energie cinetică mai mare și de ce :

•	O mașină mică sau un tir ?

•	O mașină de curse sau un tractor ?

<br></br>

**3.23.**	Care dintre următoarele corpuri au energie potențială gravitațională mai mare și de ce:

•	Un avion care zboară la 10 km altitudine sau un elicopter care zboară la 200 m altitudine ?

•	Un avion sau o pasăre ?


<br></br>

**3.24.**	Care dintre următoarele corpuri au energie potențială elastică mai mare și de ce:

•	Un resort alungit cu 4 cm sau un resort comprimat cu 7 cm ?

•	Un resort cu constanta elastică de 10 N/m sau un resort cu constanta de 500 N/m?


<br></br>

**3.25.**	Indică unitățile de măsură în SI pentru:

•	Energia mecanică

•	Lucrul mecanic

•	Puterea mecanică

•	Randamentul mecanic.

<br></br>


**3.26.**	Calculează energia următoarelor corpuri:

•	O mașină de 1 t care se deplasează cu 80 km/h.

•	Un resort care are 80 N/m, comprimat cu 100 mm.

•	O minge de 200 g aflată la o înălțime de 40 dm față de sol.


<br></br>

**3.27.** Efectuezi un lucru mecanic de 700 J într-un minut. Care este puterea produsă de tine?

<br></br>

**3.28.** Un ren trage o sanie pe o distanță de 60 km cu o forță de 1200 N, a cărei direcție face un unghi de 45° cu orizontala. Știind forța de frecare de 30 N, determină lucrul mecanic total. Se dă cos 45°= 0,7. Reprezintă forțele ce acționează asupra saniei.

<br></br>

**3.29.**	În ce caz randamentul mecanic este mai mare, atunci când urcăm un corp pe un plan înclinat cu o înălțime de 60 cm sau pe un plan înclinat cu o înălțime de 20 cm?

<br></br>

**3.30.**	La ce înălțime maximă va urca o minge lansată vertical în sus cu o viteză de 15 m/s ? Considerăm forța de frecare cu aerul atmosferic zero.

<br></br>

**3.31.**	Un motor electric de mixer are puterea de 800 W. Câtă energie primește mixerul în 10 minute de funcționare?

<br></br>

**3.32.**	Arunci o minge pe verticală în sus, cu viteza de 10 m/s. Ea ajunge la înălțimea de 10 m. Cât este randamentul acestui transfer energetic? Indicație: energia utilă este energia potențială gravitațională a mingiei la înălțimea la care urcă, iar energia consumată este energia cinetică a mingiei la aruncare.

<br></br>


**3.33.** Viorel aruncă o minge în aer. Traiectoria mingii este reprezentată în următoarea diagramă:

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_12_Poza1_Diagrama_Exercitiul15_vers3.jpg" width="1000" height="602" />



a)	În ce poziție are mingea cea mai mare energie cinetică?

b)	În ce poziție are mingea cea mai mare energie potențială?


<br></br>

**3.34.** O bilă parcurge următorul traseu:

<Img className="img-responsive4" src="fizica/clasa7/capitolul3/3_12_Poza2_Diagrama_Exercitiul16_vers3.jpg" width="1000" height="662" />


a)	În ce poziție are bila cea mai mare energie cinetică?

b)	În ce poziție are bila cea mai mare energie potențială?


<br></br>



**3.35.**	O bicicletă de 50 kg este acționată de o forță de tracțiune egală cu 20% din greutatea ei, pe o distanță de 4 km. Știind forța de frecare de 60 N, află lucrul mecanic total. 


<br></br>

**3.36.**	O motocicletă cu forța de tracțiune de 4 kN se deplasează cu viteză constantă timp de 3 min, efectuând un lucru mecanic de 28.000 J. Determină viteza motocicletei.


<br></br>


**3.37.**	O mașină cu o forță de tracțiune de 6000 N se deplasează cu o viteză constantă de 54 km/h. Ce putere dezvoltă motorul acestei mașini ?

<br></br>


**3.38.**	Bogdan aruncă o minge pe verticală în jos cu o viteză de 4 m/s de la înălțimea de 42 dm.  Neglijând frecarea mingiei cu aerul atmosferic, determină viteza mingiei cu care ajunge pe sol.

<br></br>


**3.39.**	O mașină de 1 t care se deplasează cu viteza de 90 km/h frânează motorul pentru a  opri. Știind că de la frânare până la oprire a mai parcurs o distanță de 100 m, determină forța de frecare necesară opririi mașinii. 

<br></br>





:::





<br></br>
<br></br>



## Test de autoevaluare.



:::caution TEST1: Test de autoevaluare - Lucrul mecanic, energia mecanică.

<br></br>

**3.40.** Definește energia mecanică / energia potențială gravitațională / energia potențială elastică / energia cinetică. **-1p**

<br></br>

**3.41.** În care din situațiile de mai jos se efectuează un lucru mecanic și de ce:

•	Un copil citește o carte. **- 0,5p**

•	Un bărbat cară cumpărăturile de la magazin. **-0,5p**

<br></br>

**3.42.** Ce fel de energie au următoarele corpuri:

•	Un elastic alungit? **-0,25p**

•	O mașină care se deplasează cu 100 km/h? **-0,25p**

•	Un măr dintr-un copac? **-0,25p**

•	Un resort comprimat? **-0,25p**

<br></br>

**3.43.** Indică unitățile de măsură în SI pentru:

•	Energia mecanică **-0,25p**

•	Lucrul mecanic **-0,25p**

•	Puterea mecanică **-0,25p**

•	Randamentul mecanic. **-0,25p**

<br></br>


**3.44.** Calculează energia următoarelor corpuri:

•	O bicicletă de 20 kg care se deplasează cu 30 km/h. **-0,5p**

•	Un resort care are 400 N/m, comprimat cu 0,05 dm. **-0,5p**


<br></br>

**3.45.**	Efectuezi un lucru mecanic de 1200 J în 5 minute. Care este puterea produsă de tine? **-1p**

<br></br>

**3.46.**	Un om trage o sanie pe o distanță de 400 m cu o forță de 800 N, a cărei direcție face un unghi de 30° cu orizontala. Știind forța de frecare de 50 N, determină lucrul mecanic total. Se dă cos 30°= 0,8. Reprezintă forțele ce acționează asupra saniei. **-2p**

<br></br>

Oficiu **-2p**




:::






<br></br>
<br></br>





