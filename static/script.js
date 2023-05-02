mainQuery.oninput = function() {
  st = mainQuery.value;
  cleanIt(st);
  
  spanishTexting(st);
  warehouseTexting(st);
  bordeauxTexting(st);
  phoneTexting(st);
  numbersTexting(st);
  warehouseANDspanish(st); 
  bordeauxANDspanish(st);
  warehouseANDbordeaux(st);
  warehouseANDbordeauxANDspanish(st);
};

cleanIt = function(st) {
  if (st == ""){
    resultDom.innerHTML = ""
  }
};

warehouseTexting = function(stlc) {
  getLIs(st);
  stlc = st.toLowerCase();
  if (stlc.includes("warehouse")) {
    resultDom.innerHTML = pressEnter + findWarehouses + wName33 + wName34 + wName35 + wName36 + wName37 + wName38 + wName39;
  } else if (stlc.includes("warehous") || stlc.includes("warehou")) {
    resultDom.innerHTML = pressEnter + coFrWarehouseBordeauxName12;
  } else if (stlc.includes("wareho") || stlc.includes("wareh")) {
    resultDom.innerHTML = pressEnter + coFrWarehouseBordeauxName12 + coFrWarehomeName13;
  } else if (stlc.includes("ware")) {
    resultDom.innerHTML = pressEnter + coFrWareName11 + coFrWarehouseBordeauxName12 + coFrWarehomeName13;
  } 
};

bordeauxTexting = function(st) {
  getLIs(st);
  stlc = st.toLowerCase();
  if (stlc.includes("bordeaux")
       || stlc.includes("fr33") || stlc.includes("fr 33") || stlc.includes("fr-33") 
       || stlc.includes("f33") || stlc.includes("f 33") || stlc.includes("f-33")
       || stlc.includes("33***") || stlc.includes("33000") || stlc.includes("33 ")) 
  {
    resultDom.innerHTML = pressEnter + findCoFr33Bordeaux + coFrWarehouseBordeauxName12 + coBordeaux16 + coBordeaux17 + coBordeaux18 + coBordeaux19 + coFrBordeauxName14 + coBordeaux20;
  } else if (stlc.includes("bordea")) {
    resultDom.innerHTML = pressEnter + coFrBordeauxName14;
  } else if (stlc.includes("borde")) {
    resultDom.innerHTML = pressEnter + coFrBordeauxName14 + coFrBordeName15;
  } else if (stlc.includes("bord")) {
    resultDom.innerHTML = pressEnter + coFrBordeauxName14 + coFrBordeName15 + bordName26 + bordName25 + bordName27 + bordName28;
  } else if (stlc.includes("bor")) {
    resultDom.innerHTML = pressEnter + coFrBordeauxName14 + bName25 + borName26 + bName27 + borName28 + bName29 + bName30;
  }
};

phoneTexting = function(st) {
  getLIs(st);
  if (st.includes("695892792")) {
    resultDom.innerHTML = pressEnter + phFr05;
  } else if (st.includes("69589279")) {
    resultDom.innerHTML = pressEnter + phFr05;
  } else if (st.includes("6958927")) {
    resultDom.innerHTML = pressEnter + phFr05;
  } else if (st.includes("695892")) {
    resultDom.innerHTML = pressEnter + phFr02 + phFr05;
  } else if (st.includes("69589")) {
    resultDom.innerHTML = pressEnter + phFr02 + phFr03 + phFr05;
  } else if (st.includes("6958")) {
    resultDom.innerHTML = pressEnter + phFr02 + phFr03 + phFr05 + docFr23;
  } else if (st.includes("695")) {
    resultDom.innerHTML = pressEnter + phFr01 + phFr02 + docFr04 + phFr03 + docFr22 + docFr23 + phFr24;
  } else if (st.includes("69")) {
    resultDom.innerHTML = pressEnter + phFr01 + phFr02 + docFr04 + phFr03 + phBo21 + docFr22 + docFr23;
  } else if (st.includes("6")) {
    resultDom.innerHTML = pressEnter + phFr01 + phFr02 + phFr03 + docFr04 + phFr05 + coVAT12phN6 + coVAT1phN6 ;
  } 
};

numbersTexting = function(st) {
  getLIs(st);
  if (st.includes("1234567890")) {
    resultDom.innerHTML = pressEnter + vatFr09;
  } else if (st.includes("123456789")) {
    resultDom.innerHTML = pressEnter + vatFr09;
  } else if (st.includes("1234567")) {
    resultDom.innerHTML = pressEnter + vatFr09;
  } else if (st.includes("123456")) {
    resultDom.innerHTML = pressEnter + idFr08 + vatFr09;
  } else if (st.includes("12345")) {
    resultDom.innerHTML = pressEnter + idFr08 + vatFr09;
  } else if (st.includes("1234")) {
    resultDom.innerHTML = pressEnter + vatFr06 + idFr08 + vatFr09;
  } else if (st.includes("123")) {
    resultDom.innerHTML = pressEnter + vatFr06 + idFr08 + vatFr09;
  } else if (st.includes("12")) {
    resultDom.innerHTML = pressEnter + vatFr06 + vatFr07 + idFr08 + vatFr09 + vatFr10 + coVAT12phN6;
  } else if (st.includes("1")) {
    resultDom.innerHTML = pressEnter + vatFr06 + vatFr07 + idFr08 + vatFr09 + vatFr10 + coVAT12phN6 + coVAT1phN6 ;
  }
};

spanishTexting = function(st){
  getLIs(st);
  stlc = st.toLowerCase();
  if (stlc.includes("spanish")) {
    resultDom.innerHTML = pressEnter + findCoSpanish + spanishCo40 + spanishCo41 + spanishCo42 + spanishCo43 + spanishCo44 + spanishCo45 + spanishCo46;
  } else if (stlc.includes("spanis") || stlc.includes("spani")) {
    resultDom.innerHTML = pressEnter + findCoSpanish + spanishCo47 + spanishCo40 + spanishCo48 + spanishCo49 + spanishCo42 + spanishCo43 + spanishCo44;
  }
};

warehouseANDbordeaux = function(st) {
  getLIs(st);
  stlc = st.toLowerCase();
  if (stlc.includes("warehouse") && stlc.includes("bordeaux")) {
    resultDom.innerHTML = pressEnter + findWarehousesInBordeaux + findCoFr33Bordeaux + coFrWarehouseBordeauxName12 + coFrBordeauxName14;
  }
};

bordeauxANDspanish = function(st) {
  getLIs(st);
  stlc = st.toLowerCase();
  if ((stlc.includes("bordeaux")
       || stlc.includes("fr33") || stlc.includes("fr 33") || stlc.includes("fr-33") 
       || stlc.includes("f33") || stlc.includes("f 33") || stlc.includes("f-33")) 
       && stlc.includes("spanish")) {
    resultDom.innerHTML = pressEnter + findCoFr33Bordeaux +  findCoSpanish + coFrBordeauxName14 + coBordeaux18 + coBordeaux19;
  }
};

warehouseANDspanish = function(st) {
  getLIs(st);
  stlc = st.toLowerCase();
  if (stlc.includes("warehouse") && stlc.includes("spanish")) {
    resultDom.innerHTML = pressEnter + findWarehouses + findCoSpanish + wareSP50 + wareSP51 + wareSP52 + wareSP53 + wareSP54 + wareSP55;   
  }
};

warehouseANDbordeauxANDspanish = function(st) {
  getLIs(st);
  stlc = st.toLowerCase();
  if ((stlc.includes("bordeaux")
       || stlc.includes("fr33") || stlc.includes("fr 33") || stlc.includes("fr-33") 
       || stlc.includes("f33") || stlc.includes("f 33") || stlc.includes("f-33")) 
       && stlc.includes("warehouse") 
       && stlc.includes("spanish")) {
    resultDom.innerHTML = pressEnter + findWarehousesInBordeaux + findCoFr33Bordeaux + findCoSpanish + warehouseBordeauxSp57; 
  }
};

getLIs = function(st) {
  pressEnter                  = '<li class="main"><svg><use xlink:href="#enter"></svg>Press Enter to get "<b><i>' + st + '</i></b>"</li>';
  findCoFr33Bordeaux          = '<li class="main"><svg><use xlink:href="#search"></svg>Find companies in "<b>FR Bordeaux</b>"</li>';
  findWarehouses              = '<li class="main"><svg><use xlink:href="#search"></svg>Find "<b>warehouses</b>"</li>';
  findCoSpanish               = '<li class="main"><svg><use xlink:href="#search"></svg>Find contacts speak "<b>Spanish</b>"</li>';
  findWarehousesInBordeaux    = '<li class="main"><svg><use xlink:href="#search"></svg>Find "<b>warehouses</b> in "<b>Bordeaux</b>"</li>';
  phFr01                      = '<li><svg><use xlink:href="#phone"></svg><b>FR 56380	SDV TRANSPORT SAS</b><span>VAT: FR8593955615	Id: 44321890</span></li>';
  phFr02                      = '<li><svg><use xlink:href="#phone"></svg><b>FR 77950	STTEFG INTERNATIONAL</b><span>VAT: FR6658280687	Id: 66453584</span></li>';
  phFr03                      = '<li><svg><use xlink:href="#phone"></svg><b>FR 91300	TPC COURCELLAS</b><span>VAT: FR1937521762	Id: 50001111</span></li>';
  docFr04                     = '<li><svg><use xlink:href="#document"></svg><b>FR 59390	ABC XPO FR CELL GROUP</b><span>VAT: FR69500233683	Id: 48420001</span></li>';
  phFr05                      = '<li><svg><use xlink:href="#phone"></svg><b>FR 15000	100% FRET DISTRIB</b><span>VAT: FR1157515065	Id: 93955615</span></li>';
  vatFr06                     = '<li><svg><use xlink:href="#document"></svg><b>FR 07370	BEAUGIER EXPRESS</b><span>VAT: FR12344321890	Id: 475903485</span></li>';
  vatFr07                     = '<li><svg><use xlink:href="#document"></svg><b>FR 93370	5G TRANSPORTS</b><span>VAT: FR12000001111	Id: 23465674</span></li>';
  idFr08                      = '<li><svg><use xlink:href="#document"></svg><b>FR 93210	BARBAR-YVES</b><span>VAT: FR52312316830	Id: 123456000</span></li>';
  vatFr09                     = '<li><svg><use xlink:href="#document"></svg><b>FR 95200	ADELE MANAGEMENT</b><span>VAT: FR12345678900	Id: 57523435</span></li>';
  vatFr10                     = '<li><svg><use xlink:href="#document"></svg><b>FR 28630	LE PRESSIS EUROTRANS</b><span>VAT: FR12999999999	Id: 157515065</span></li>';
  coVAT12phN6                 = '<li><svg><use xlink:href="#document"></svg><b>FR 75300	ORLEANS DES SABLONS</b><span>VAT: FR1256845346	Id: 235455645</span></li>';
  coVAT1phN6                  = '<li><svg><use xlink:href="#document"></svg><b>FR 15100	EU-BOURGOGNE-FORICHER</b><span>VAT: FR198553434	Id: 84452343</span></li>';
  coFrWareName11              = '<li><svg><use xlink:href="#company"></svg><b>FR 94150	BENNES WAREWAVE</b><span>VAT: FR1392191196	Id: 183751768</span></li>';
  coFrWarehouseBordeauxName12 = '<li><svg><use xlink:href="#company"></svg><b>FR 33323	BORDEAUX-WAREHOUSES LOGISTIC</b><span>VAT: FR2362221082	Id: 34545654</span></li>';
  coFrWarehomeName13          = '<li><svg><use xlink:href="#company"></svg><b>FR 33521	WAREHOME</b><span>VAT: FR9864606952	Id: 58280687</span></li>';
  coFrBordeauxName14          = '<li><svg><use xlink:href="#company"></svg><b>FR 33100	BORDEAUX NORD TRANSP</b><span>VAT: FR8542337668	Id: 97234867</span></li>';
  coFrBordeName15             = '<li><svg><use xlink:href="#company"></svg><b>FR 33520	UNBORDERS</b><span>VAT: FR8748420001	Id: 45686766</span></li>';
  coBordeaux16                = '<li><svg><use xlink:href="#company"></svg><b>FR 33010	CABOT-LOIRET</b><span>VAT: FR2482968234	Id: 12999999</span></li>';
  coBordeaux17                = '<li><svg><use xlink:href="#company"></svg><b>FR 33140	CONDITIONNEMENT TAVAUX</b><span>VAT: FR5896987337	Id: 62221082</span></li>';
  coBordeaux18                = '<li><svg><use xlink:href="#company"></svg><b>FR 33600	CALLBERSON EQUIPEMENTS</b><span>VAT: FR4092373066	Id: 452357666</span></li>';
  coBordeaux19                = '<li><svg><use xlink:href="#company"></svg><b>FR 33520	AGENCE DEL BLOISYES</b><span>VAT: FR4918453584	Id: 542968234</span></li>';
  coBordeaux20                = '<li><svg><use xlink:href="#company"></svg><b>FR 33270	SPEDITIONS BEAUTIRAN</b><span>VAT: FR2953522022	Id: 412316830</span></li>';
  phBo21                      = '<li><svg><use xlink:href="#phone"></svg><b>FR 33521	WAREHOME</b><span>VAT: FR9864606952	Id: 58280687</span></li>';
  docFr22                     = '<li><svg><use xlink:href="#document"></svg><b>FR 73100	STARTSNORD TRANSP</b><span>VAT: FR8542337668	Id: 97234867</span></li>';
  docFr23                     = '<li><svg><use xlink:href="#document"></svg><b>FR 54420	HEBDOOR AGLOG</b><span>VAT: FR8748420001	Id: 45686766</span></li>';
  phFr24                      = '<li><svg><use xlink:href="#phone"></svg><b>FR 40010	RDBH-LORET</b><span>VAT: FR2482968234	Id: 12999999</span></li>';
  bordName25                  = '<li><svg><use xlink:href="#company"></svg><b>FR 56380	SDV TRANSPORT SAS</b><span>VAT: FR8593955615	Id: 44321890</span></li>';
  bordName26                  = '<li><svg><use xlink:href="#company"></svg><b>FR 77950	STTEFG INTERNATIONAL</b><span>VAT: FR6658280687	Id: 66453584</span></li>';
  bordName27                  = '<li><svg><use xlink:href="#company"></svg><b>FR 91300	TPC COURCELLAS</b><span>VAT: FR1937521762	Id: 50001111</span></li>';
  bordName28                  = '<li><svg><use xlink:href="#company"></svg><b>FR 59390	ABC XPO FR CELL GROUP</b><span>VAT: FR69500233683	Id: 48420001</span></li>';
  bName29                     = '<li><svg><use xlink:href="#document"></svg><b>FR 00000	B XXXXXXXXXXXXX</b><span>VAT: FR000000000	Id: 00000000</span></li>';
  bName30                     = '<li><svg><use xlink:href="#document"></svg><b>FR 00000	B XXXXXXXXXXXXX</b><span>VAT: FR000000000	Id: 00000000</span></li>';
  boName31                    = '<li><svg><use xlink:href="#document"></svg><b>FR 00000	BO XXXXXXXXXXXX</b><span>VAT: FR000000000	Id: 00000000</span></li>';
  boName32                    = '<li><svg><use xlink:href="#document"></svg><b>FR 00000	BO XXXXXXXXXXXX</b><span>VAT: FR000000000	Id: 00000000</span></li>';
  borName32                   = '<li><svg><use xlink:href="#document"></svg><b>FR 00000	BO XXXXXXXXXXXX</b><span>VAT: FR000000000	Id: 00000000</span></li>';
  borName32                   = '<li><svg><use xlink:href="#document"></svg><b>FR 00000	BO XXXXXXXXXXXX</b><span>VAT: FR000000000	Id: 00000000</span></li>';
  wName33                     = '<li><svg><use xlink:href="#company"></svg><b>FR 94150	BENNES WAREWAVE</b><span>VAT: FR1392191196	Id: 183751768</span></li>';
  wName34                     = '<li><svg><use xlink:href="#company"></svg><b>FR 33323	BORDEAUX-WAREHOUSES LOGISTIC</b><span>VAT: FR2362221082	Id: 34545654</span></li>';
  wName35                     = '<li><svg><use xlink:href="#company"></svg><b>FR 33521	WAREHOME</b><span>VAT: FR9864606952	Id: 58280687</span></li>';
  wName36                     = '<li><svg><use xlink:href="#company"></svg><b>FR 33100	BORDEAUX NORD TRANSP</b><span>VAT: FR8542337668	Id: 97234867</span></li>';
  wName37                     = '<li><svg><use xlink:href="#company"></svg><b>FR 33520	UNBORDERS</b><span>VAT: FR8748420001	Id: 45686766</span></li>';
  wName38                     = '<li><svg><use xlink:href="#company"></svg><b>FR 40010	CABOT-LOIRET</b><span>VAT: FR2482968234	Id: 12999999</span></li>';
  wName39                     = '<li><svg><use xlink:href="#company"></svg><b>FR 33140	CONDITIONNEMENT TAVAUX</b><span>VAT: FR5896987337	Id: 62221082</span></li>';
  spanishCo40                 = '<li><svg><use xlink:href="#user"></svg><b>FR 94150	BENNES WAREWAVE</b><span>VAT: FR1392191196	Id: 183751768</span></li>';
  spanishCo41                 = '<li><svg><use xlink:href="#user"></svg><b>FR 33323	BORDEAUX-WAREHOUSES LOGISTIC</b><span>VAT: FR2362221082	Id: 34545654</span></li>';
  spanishCo42                 = '<li><svg><use xlink:href="#user"></svg><b>FR 33521	WAREHOME</b><span>VAT: FR9864606952	Id: 58280687</span></li>';
  spanishCo43                 = '<li><svg><use xlink:href="#user"></svg><b>FR 33100	BORDEAUX NORD TRANSP</b><span>VAT: FR8542337668	Id: 97234867</span></li>';
  spanishCo44                 = '<li><svg><use xlink:href="#user"></svg><b>FR 33520	UNBORDERS</b><span>VAT: FR8748420001	Id: 45686766</span></li>';
  spanishCo45                 = '<li><svg><use xlink:href="#user"></svg><b>FR 40010	CABOT-LOIRET</b><span>VAT: FR2482968234	Id: 12999999</span></li>';
  spanishCo46                 = '<li><svg><use xlink:href="#user"></svg><b>FR 33140	CONDITIONNEMENT TAVAUX</b><span>VAT: FR5896987337	Id: 62221082</span></li>';
  spanishCo47                 = '<li><svg><use xlink:href="#user"></svg><b>FR 28630	LE PRESSIS EUROTRANS</b><span>VAT: FR12999999999	Id: 157515065</span></li>';
  spanishCo48                 = '<li><svg><use xlink:href="#user"></svg><b>FR 56380	SDV TRANSPORT SAS</b><span>VAT: FR8593955615	Id: 44321890</span></li>';
  spanishCo49                 = '<li><svg><use xlink:href="#user"></svg><b>FR 63140	CONDITIONNEMENT TAVAUX</b><span>VAT: FR5896987337	Id: 62221082</span></li>';
  wareSP50                    = '<li><svg><use xlink:href="#company"></svg><b>FR 94150	BENNES WAREWAVE</b><span>VAT: FR1392191196	Id: 183751768</span></li>';
  wareSP51                    = '<li><svg><use xlink:href="#company"></svg><b>FR 33323	BORDEAUX-WAREHOUSES LOGISTIC</b><span>VAT: FR2362221082	Id: 34545654</span></li>';
  wareSP52                    = '<li><svg><use xlink:href="#company"></svg><b>FR 33521	WAREHOME</b><span>VAT: FR9864606952	Id: 58280687</span></li>';
  wareSP53                    = '<li><svg><use xlink:href="#company"></svg><b>FR 33100	BORDEAUX NORD TRANSP</b><span>VAT: FR8542337668	Id: 97234867</span></li>';
  wareSP54                    = '<li><svg><use xlink:href="#company"></svg><b>FR 33520	UNBORDERS</b><span>VAT: FR8748420001	Id: 45686766</span></li>';
  wareSP55                    = '<li><svg><use xlink:href="#company"></svg><b>FR 40010	CABOT-LOIRET</b><span>VAT: FR2482968234	Id: 12999999</span></li>';
  wareSP56                    = '<li><svg><use xlink:href="#company"></svg><b>FR 33140	CONDITIONNEMENT TAVAUX</b><span>VAT: FR5896987337	Id: 62221082</span></li>';
  warehouseBordeauxSp57       = '<li><svg><use xlink:href="#company"></svg><b>FR 33100	BORDEAUX NORD TRANSP</b><span>VAT: FR8542337668	Id: 97234867</span></li>';
};

function changeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = newColor;
}

clickToCleanIt = function() {
  resultDom.innerHTML = "";
  document.getElementById("mainQuery").value="";  
};

clickToOpenIt = function() {
  document.getElementById("modalMask").classList.add("visible");
  document.getElementById("modalFilters").classList.add("visible");
};

clickToCloseIt = function() {
  document.getElementById("modalMask").classList.remove("visible");  
  document.getElementById("modalFilters").classList.remove("visible");  
};
