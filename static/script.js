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

  listen_keypress(st);
};

cleanIt = function(st) {
  if (st == ""){
    resultDom.innerHTML = ""
  }
};

warehouseTexting = function(stlc) {
  getLIs(st);
  stlc = st.toLowerCase();
  if (stlc.includes("warehouse") || stlc.includes("building") || stlc.includes("almacén") || stlc.includes("depósito") || stlc.includes("bodega") || stlc.includes("almacenes")) {
    resultDom.innerHTML = pressEnter + findWarehouses + wName33 + wName34 + wName35 + wName36 + wName37 + wName38 + wName39 + moreInformation;
  } else if (stlc.includes("warehous") || stlc.includes("warehou")) {
    resultDom.innerHTML = pressEnter + coFrWarehouseBordeauxName12 + moreInformation;
  } else if (stlc.includes("wareho") || stlc.includes("wareh")) {
    resultDom.innerHTML = pressEnter + coFrWarehouseBordeauxName12 + coFrWarehomeName13 + moreInformation;
  } else if (stlc.includes("ware")) {
    resultDom.innerHTML = pressEnter + coFrWareName11 + coFrWarehouseBordeauxName12 + coFrWarehomeName13 + moreInformation;
  } 
};

bordeauxTexting = function(st) {
  getLIs(st);
  stlc = st.toLowerCase();
  if (stlc.includes("bordeaux") || stlc.includes("fr33") || stlc.includes("fr 33") || stlc.includes("fr-33") || stlc.includes("f33") || stlc.includes("f 33") || stlc.includes("f-33") || stlc.includes("33***") || stlc.includes("33000")) 
  {
    resultDom.innerHTML = pressEnter + findCoFr33Bordeaux + coFrWarehouseBordeauxName12 + coBordeaux16 + coBordeaux17 + coBordeaux18 + coBordeaux19 + coFrBordeauxName14 + coBordeaux20 + moreInformation;
  } else if (stlc.includes("bordea")) {
    resultDom.innerHTML = pressEnter + coFrBordeauxName14 + moreInformation;
  } else if (stlc.includes("borde")) {
    resultDom.innerHTML = pressEnter + coFrBordeauxName14 + coFrBordeName15 + moreInformation;
  } else if (stlc.includes("bord")) {
    resultDom.innerHTML = pressEnter + coFrBordeauxName14 + coFrBordeName15 + bordName26 + bordName25 + bordName27 + bordName28 + moreInformation;
  } else if (stlc.includes("bor")) {
    resultDom.innerHTML = pressEnter + coFrBordeauxName14 + bordName25 + bordName26 + bordName27 + bordName28 + bName29 + bName30 + moreInformation;
  }
};

phoneTexting = function(st) {
  getLIs(st);
  if (st.includes("695892792") || st.includes("695 892 792") || st.includes("69 589 2792") || st.includes("69 5892792") ||  st.includes("695 892792") || st.includes("69 58 92 79 2")  || st.includes("69 58 92 792") || st.includes("695 89 27 92") || st.includes("69 58 92792") || st.includes("69 589 2792") || st.includes("6958 92792") || st.includes("695892 792")) {
    resultDom.innerHTML = pressEnter + phFr05 + moreInformation;
  } else if (st.includes("69589279") || st.includes("695 892 79") || st.includes("69 589 279") || st.includes("69 589279") ||  st.includes("695 89279") || st.includes("69 58 92 79")  || st.includes("69 58 9279")) {
    resultDom.innerHTML = pressEnter + phFr05 + moreInformation;
  } else if (st.includes("6958927") || st.includes("695 892 7") || st.includes("69 589 27") || st.includes("69 58927") ||  st.includes("695 8927") || st.includes("69 58 92 7") || st.includes("69 58 927")) {
    resultDom.innerHTML = pressEnter + phFr05 + moreInformation;
  } else if (st.includes("695892") || st.includes("695 892") || st.includes("69 589 2") || st.includes("69 58 92")) {
    resultDom.innerHTML = pressEnter + phFr02 + phFr05 + moreInformation;
  } else if (st.includes("69589") || st.includes("695 89") || st.includes("69 589") || st.includes("69 58 9")) {
    resultDom.innerHTML = pressEnter + phFr02 + phFr03 + phFr05 + moreInformation;
  } else if (st.includes("6958") || st.includes("695 8") || st.includes("69 58")) {
    resultDom.innerHTML = pressEnter + phFr02 + phFr03 + phFr05 + docFr23 + moreInformation;
  } else if (st.includes("695") || st.includes("69 5")) {
    resultDom.innerHTML = pressEnter + phFr01 + phFr02 + docFr04 + phFr03 + docFr22 + docFr23 + phFr24 + moreInformation;
  } else if (st.includes("69")) {
    resultDom.innerHTML = pressEnter + phFr01 + phFr02 + docFr04 + phFr03 + phBo21 + docFr22 + docFr23 + moreInformation;
  } else if (st.includes("6")) {
    resultDom.innerHTML = pressEnter + phFr01 + phFr02 + phFr03 + docFr04 + phFr05 + coVAT12phN6 + coVAT1phN6 + moreInformation;
  } 
};

numbersTexting = function(st) {
  getLIs(st);
  if (st.includes("1234567890")) {
    resultDom.innerHTML = pressEnter + vatFr09 + moreInformation;
  } else if (st.includes("123456789")) {
    resultDom.innerHTML = pressEnter + vatFr09 + moreInformation;
  } else if (st.includes("1234567")) {
    resultDom.innerHTML = pressEnter + vatFr09 + moreInformation;
  } else if (st.includes("123456")) {
    resultDom.innerHTML = pressEnter + idFr08 + vatFr09 + moreInformation;
  } else if (st.includes("12345")) {
    resultDom.innerHTML = pressEnter + idFr08 + vatFr09 + moreInformation;
  } else if (st.includes("1234")) {
    resultDom.innerHTML = pressEnter + vatFr06 + idFr08 + vatFr09 + moreInformation;
  } else if (st.includes("123")) {
    resultDom.innerHTML = pressEnter + vatFr06 + idFr08 + vatFr09 + moreInformation;
  } else if (st.includes("12")) {
    resultDom.innerHTML = pressEnter + vatFr06 + vatFr07 + idFr08 + vatFr09 + vatFr10 + coVAT12phN6 + moreInformation;
  } else if (st.includes("1")) {
    resultDom.innerHTML = pressEnter + vatFr06 + vatFr07 + idFr08 + vatFr09 + vatFr10 + coVAT12phN6 + coVAT1phN6 + moreInformation;
  }
};

spanishTexting = function(st){
  getLIs(st);
  stlc = st.toLowerCase();
  if (stlc.includes("spanish") || stlc.includes("castellano") || stlc.includes("español")) {
    resultDom.innerHTML = pressEnter + findCoSpanish + spanishCo40 + spanishCo41 + spanishCo42 + spanishCo43 + spanishCo44 + spanishCo45 + spanishCo46 + moreInformation;
  } else if (stlc.includes("spanis") || stlc.includes("spani")) {
    resultDom.innerHTML = pressEnter + findCoSpanish + spanishCo47 + spanishCo40 + spanishCo48 + spanishCo49 + spanishCo42 + spanishCo43 + spanishCo44 + moreInformation;
  }
};

warehouseANDbordeaux = function(st) {
  getLIs(st);
  stlc = st.toLowerCase();
  if ((stlc.includes("warehouse") || stlc.includes("building") || stlc.includes("almacén") || stlc.includes("depósito") || stlc.includes("bodega") || stlc.includes("almacenes")) 
  && (stlc.includes("bordeaux") || stlc.includes("fr33") || stlc.includes("fr 33") || stlc.includes("fr-33") || stlc.includes("f33") || stlc.includes("f 33") || stlc.includes("f-33"))) {
    resultDom.innerHTML = pressEnter + findWarehousesInBordeaux + findCoFr33Bordeaux + coFrWarehouseBordeauxName12 + coFrBordeauxName14 + moreInformation;
  }
};

bordeauxANDspanish = function(st) {
  getLIs(st);
  stlc = st.toLowerCase();
  if ((stlc.includes("bordeaux") || stlc.includes("fr33") || stlc.includes("fr 33") || stlc.includes("fr-33") || stlc.includes("f33") || stlc.includes("f 33") || stlc.includes("f-33")) 
  && (stlc.includes("spanish") || stlc.includes("castellano") || stlc.includes("español"))) {
    resultDom.innerHTML = pressEnter + findCoFr33Bordeaux +  findCoSpanish + coFrBordeauxName14 + coBordeaux18 + coBordeaux19 + moreInformation;
  }
};

warehouseANDspanish = function(st) {
  getLIs(st);
  stlc = st.toLowerCase();
  if ((stlc.includes("warehouse") || stlc.includes("building") || stlc.includes("almacén") || stlc.includes("depósito") || stlc.includes("bodega") || stlc.includes("almacenes")) 
  && (stlc.includes("spanish") || stlc.includes("castellano") || stlc.includes("español"))) {
    resultDom.innerHTML = pressEnter + findWarehouses + findCoSpanish + wareSP50 + wareSP51 + wareSP52 + wareSP53 + wareSP54 + wareSP55 + moreInformation;
  }
};

warehouseANDbordeauxANDspanish = function(st) {
  getLIs(st);
  stlc = st.toLowerCase();
  if ((stlc.includes("bordeaux") || stlc.includes("fr33") || stlc.includes("fr 33") || stlc.includes("fr-33") || stlc.includes("f33") || stlc.includes("f 33") || stlc.includes("f-33")) 
  && (stlc.includes("warehouse") || stlc.includes("building") || stlc.includes("almacén") || stlc.includes("depósito") || stlc.includes("bodega") || stlc.includes("almacenes")) 
  && (stlc.includes("spanish") || stlc.includes("castellano") || stlc.includes("español"))) {
    resultDom.innerHTML = pressEnter + findWarehousesInBordeaux + findCoFr33Bordeaux + findCoSpanish + warehouseBordeauxSp57 + moreInformation;
  }
};

getLIs = function(st) {
  pressEnter                  = '<li class="main no_hover"><svg><use xlink:href="#enter"></svg>Press Enter to get "<b><i>' + st + '</i></b>"</li>';
  findCoFr33Bordeaux          = '<li class="main"><a href="frbrcompanies"><svg><use xlink:href="#search"></svg>Find companies in "<b>FR Bordeaux</b>"</a></li>';
  findWarehouses              = '<li class="main"><a href="warehouses"><svg><use xlink:href="#search"></svg>Find "<b>warehouses</b>"</a></li>';
  findCoSpanish               = '<li class="main"><a href="spanishcontacts"><svg><use xlink:href="#search"></svg>Find contacts speak "<b>Spanish</b>"</a></li>';
  findWarehousesInBordeaux    = '<li class="main"><a href="frbrwarehouses"><svg><use xlink:href="#search"></svg>Find "<b>warehouses</b> in "<b>Bordeaux</b>"</a></li>';
  moreInformation             = '<li class="main"><a href="moreInformation"><svg><use xlink:href="#search"></svg>Not the results you had expected? <b class="link">More information</b></a></li>';
  phFr01                      = '<li><a href="companyprofile"><svg><use xlink:href="#phone"></svg><b>FR 56380	SDV TRANSPORT SAS</b><span>VAT: FR8593955615	Id: 44321890</span></a></li>';
  phFr02                      = '<li><a href="companyprofile"><svg><use xlink:href="#phone"></svg><b>FR 77950	STTEFG INTERNATIONAL</b><span>VAT: FR6658280687	Id: 66453584</span></a></li>';
  phFr03                      = '<li><a href="companyprofile"><svg><use xlink:href="#phone"></svg><b>FR 91300	TPC COURCELLAS</b><span>VAT: FR1937521762	Id: 50001111</span></a></li>';
  docFr04                     = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 59390	ABC XPO FR CELL GROUP</b><span>VAT: FR69500233683	Id: 48420001</span></a></li>';
  phFr05                      = '<li><a href="companyprofile"><svg><use xlink:href="#phone"></svg><b>FR 33100 MAX Export-Import</b><span>VAT: FR1234567890  Id: 97234867</span></a></li>';
  vatFr06                     = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 07370	BEAUGIER EXPRESS</b><span>VAT: FR12344321890	Id: 475903485</span></a></li>';
  vatFr07                     = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 93370	5G TRANSPORTS</b><span>VAT: FR12000001111	Id: 23465674</span></a></li>';
  idFr08                      = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 93210	BARBAR-YVES</b><span>VAT: FR52312316830	Id: 123456000</span></a></li>';
  vatFr09                     = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 33100  MAX Export-Import</b><span>VAT: FR1234567890  Id: 97234867</span></a></li>';
  vatFr10                     = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 28630	LE PRESSIS EUROTRANS</b><span>VAT: FR12999999999	Id: 157515065</span></a></li>';
  coVAT12phN6                 = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 75300	ORLEANS DES SABLONS</b><span>VAT: FR1256845346	Id: 235455645</span></a></li>';
  coVAT1phN6                  = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 15100	EU-BOURGOGNE-FORICHER</b><span>VAT: FR198553434	Id: 84452343</span></a></li>';
  coFrWareName11              = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 94150	BENNES WAREWAVE</b><span>VAT: FR1392191196	Id: 183751768</span></a></li>';
  coFrWarehouseBordeauxName12 = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33323	BORDEAUX-WAREHOUSES LOGISTIC</b><span>VAT: FR2362221082	Id: 34545654</span></a></li>';
  coFrWarehomeName13          = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33521	WAREHOME</b><span>VAT: FR9864606952	Id: 58280687</span></a></li>';
  coFrBordeauxName14          = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33100 MAX Export-Import</b><span>VAT: FR1234567890  Id: 97234867</span></a></li>';
  coFrBordeName15             = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33520	UNBORDERS</b><span>VAT: FR8748420001	Id: 45686766</span></a></li>';
  coBordeaux16                = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33010	CABOT-LOIRET</b><span>VAT: FR2482968234	Id: 12999999</span></a></li>';
  coBordeaux17                = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33140	CONDITIONNEMENT TAVAUX</b><span>VAT: FR5896987337	Id: 62221082</span></a></li>';
  coBordeaux18                = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33600	CALLBERSON EQUIPEMENTS</b><span>VAT: FR4092373066	Id: 452357666</span></a></li>';
  coBordeaux19                = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33520	AGENCE DEL BLOISYES</b><span>VAT: FR4918453584	Id: 542968234</span></a></li>';
  coBordeaux20                = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33270	SPEDITIONS BEAUTIRAN</b><span>VAT: FR2953522022	Id: 412316830</span></a></li>';
  phBo21                      = '<li><a href="companyprofile"><svg><use xlink:href="#phone"></svg><b>FR 33521	WAREHOME</b><span>VAT: FR9864606952	Id: 58280687</span></a></li>';
  docFr22                     = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 73100	STARTSNORD TRANSP</b><span>VAT: FR8542337668	Id: 97234867</span></a></li>';
  docFr23                     = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 54420	HEBDOOR AGLOG</b><span>VAT: FR8748420001	Id: 45686766</span></a></li>';
  phFr24                      = '<li><a href="companyprofile"><svg><use xlink:href="#phone"></svg><b>FR 40010	RDBH-LORET</b><span>VAT: FR2482968234	Id: 12999999</span></a></li>';
  bordName25                  = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 56380	SDV TRANSPORT SAS</b><span>VAT: FR8593955615	Id: 44321890</span></a></li>';
  bordName26                  = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 77950	STTEFG INTERNATIONAL</b><span>VAT: FR6658280687	Id: 66453584</span></a></li>';
  bordName27                  = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 91300	TPC COURCELLAS</b><span>VAT: FR1937521762	Id: 50001111</span></a></li>';
  bordName28                  = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 59390	ABC XPO FR CELL GROUP</b><span>VAT: FR69500233683	Id: 48420001</span></a></li>';
  bName29                     = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 93210  BARBAR-YVES</b><span>VAT: FR52312316830 Id: 123456000</span></a></li>';
  bName30                     = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 07370  BEAUGIER EXPRESS</b><span>VAT: FR12344321890  Id: 475903485</span></a></li>';
  boName31                    = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 00000	BO XXXXXXXXXXXX</b><span>VAT: FR000000000	Id: 00000000</span></a></li>';
  boName32                    = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 00000	BO XXXXXXXXXXXX</b><span>VAT: FR000000000	Id: 00000000</span></a></li>';
  borName32                   = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 00000	BO XXXXXXXXXXXX</b><span>VAT: FR000000000	Id: 00000000</span></a></li>';
  borName32                   = '<li><a href="companyprofile"><svg><use xlink:href="#document"></svg><b>FR 00000	BO XXXXXXXXXXXX</b><span>VAT: FR000000000	Id: 00000000</span></a></li>';
  wName33                     = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 94150	BENNES WAREWAVE</b><span>VAT: FR1392191196	Id: 183751768</span></a></li>';
  wName34                     = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33323	BORDEAUX-WAREHOUSES LOGISTIC</b><span>VAT: FR2362221082	Id: 34545654</span></a></li>';
  wName35                     = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33521	WAREHOME</b><span>VAT: FR9864606952	Id: 58280687</span></a></li>';
  wName36                     = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33100	BORDEAUX NORD TRANSP</b><span>VAT: FR8542337668	Id: 97234867</span></a></li>';
  wName37                     = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33520	UNBORDERS</b><span>VAT: FR8748420001	Id: 45686766</span></a></li>';
  wName38                     = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 40010	CABOT-LOIRET</b><span>VAT: FR2482968234	Id: 12999999</span></a></li>';
  wName39                     = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33140	CONDITIONNEMENT TAVAUX</b><span>VAT: FR5896987337	Id: 62221082</span></a></li>';
  spanishCo40                 = '<li><a href="companyprofile"><svg><use xlink:href="#user"></svg><b>FR 94150	BENNES WAREWAVE</b><span>VAT: FR1392191196	Id: 183751768</span></a></li>';
  spanishCo41                 = '<li><a href="companyprofile"><svg><use xlink:href="#user"></svg><b>FR 33323	BORDEAUX-WAREHOUSES LOGISTIC</b><span>VAT: FR2362221082	Id: 34545654</span></a></li>';
  spanishCo42                 = '<li><a href="companyprofile"><svg><use xlink:href="#user"></svg><b>FR 33521	WAREHOME</b><span>VAT: FR9864606952	Id: 58280687</span></a></li>';
  spanishCo43                 = '<li><a href="companyprofile"><svg><use xlink:href="#user"></svg><b>FR 33100	BORDEAUX NORD TRANSP</b><span>VAT: FR8542337668	Id: 97234867</span></a></li>';
  spanishCo44                 = '<li><a href="companyprofile"><svg><use xlink:href="#user"></svg><b>FR 33520	UNBORDERS</b><span>VAT: FR8748420001	Id: 45686766</span></a></li>';
  spanishCo45                 = '<li><a href="companyprofile"><svg><use xlink:href="#user"></svg><b>FR 40010	CABOT-LOIRET</b><span>VAT: FR2482968234	Id: 12999999</span></a></li>';
  spanishCo46                 = '<li><a href="companyprofile"><svg><use xlink:href="#user"></svg><b>FR 33140	CONDITIONNEMENT TAVAUX</b><span>VAT: FR5896987337	Id: 62221082</span></a></li>';
  spanishCo47                 = '<li><a href="companyprofile"><svg><use xlink:href="#user"></svg><b>FR 28630	LE PRESSIS EUROTRANS</b><span>VAT: FR12999999999	Id: 157515065</span></a></li>';
  spanishCo48                 = '<li><a href="companyprofile"><svg><use xlink:href="#user"></svg><b>FR 56380	SDV TRANSPORT SAS</b><span>VAT: FR8593955615	Id: 44321890</span></a></li>';
  spanishCo49                 = '<li><a href="companyprofile"><svg><use xlink:href="#user"></svg><b>FR 63140	CONDITIONNEMENT TAVAUX</b><span>VAT: FR5896987337	Id: 62221082</span></a></li>';
  wareSP50                    = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 94150	BENNES WAREWAVE</b><span>VAT: FR1392191196	Id: 183751768</span></a></li>';
  wareSP51                    = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33323	BORDEAUX-WAREHOUSES LOGISTIC</b><span>VAT: FR2362221082	Id: 34545654</span></a></li>';
  wareSP52                    = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33521	WAREHOME</b><span>VAT: FR9864606952	Id: 58280687</span></a></li>';
  wareSP53                    = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33100	BORDEAUX NORD TRANSP</b><span>VAT: FR8542337668	Id: 97234867</span></a></li>';
  wareSP54                    = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33520	UNBORDERS</b><span>VAT: FR8748420001	Id: 45686766</span></a></li>';
  wareSP55                    = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 40010	CABOT-LOIRET</b><span>VAT: FR2482968234	Id: 12999999</span></a></li>';
  wareSP56                    = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33140	CONDITIONNEMENT TAVAUX</b><span>VAT: FR5896987337	Id: 62221082</span></a></li>';
  warehouseBordeauxSp57       = '<li><a href="companyprofile"><svg><use xlink:href="#company"></svg><b>FR 33100	MAX Export-Import</b><span>VAT: FR1234567890	Id: 97234867</span></a></li>';
};

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

listen_keypress = function(st) {
  stlc = st.toLowerCase();
  input_mainQuery = document.getElementById("mainQuery");
  input_mainQuery.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      if (stlc.includes("warehouse") || stlc.includes("building") || stlc.includes("almacén") || stlc.includes("depósito") || stlc.includes("bodega")) {
        window.location = '/warehouses' ;
      }
      if (stlc.includes("bordeaux") || stlc.includes("fr33") || stlc.includes("fr 33") || stlc.includes("fr-33") || stlc.includes("f33") || stlc.includes("f 33") || stlc.includes("f-33")) {
        window.location = '/frbrcompanies' ;
      }
      if (stlc.includes("spanish") || stlc.includes("castellano") || stlc.includes("español")) {
        window.location = '/spanishcontacts' ;
      }
      if ((stlc.includes("warehouse") || stlc.includes("building") || stlc.includes("almacén") || stlc.includes("depósito") || stlc.includes("bodega")) 
      && (stlc.includes("bordeaux") || stlc.includes("fr33") || stlc.includes("fr 33") || stlc.includes("fr-33") || stlc.includes("f33") || stlc.includes("f 33") || stlc.includes("f-33"))) {
        window.location = '/frbrwarehouses' ;
      }
      if ((stlc.includes("bordeaux") || stlc.includes("fr33") || stlc.includes("fr 33") || stlc.includes("fr-33") || stlc.includes("f33") || stlc.includes("f 33") || stlc.includes("f-33")) 
      && (stlc.includes("spanish") || stlc.includes("castellano") || stlc.includes("español"))) {
        window.location = '/fr33spanishcontacts' ;
      }
      if ((stlc.includes("warehouse") || stlc.includes("building") || stlc.includes("almacén") || stlc.includes("depósito") || stlc.includes("bodega")) 
      && (stlc.includes("spanish") || stlc.includes("castellano") || stlc.includes("español"))) {
        window.location = '/warehousesspanishcontacts' ;
      }
      if ((stlc.includes("bordeaux") || stlc.includes("fr33") || stlc.includes("fr 33") || stlc.includes("fr-33") || stlc.includes("f33") || stlc.includes("f 33") || stlc.includes("f-33")) 
        && (stlc.includes("warehouse") || stlc.includes("building") || stlc.includes("almacén") || stlc.includes("depósito") || stlc.includes("bodega")) 
        && (stlc.includes("spanish") || stlc.includes("castellano") || stlc.includes("español"))) {
        window.location = '/frbrwarehousesspanishcontacts' ;
      }
      if (stlc.includes("1234") || stlc.includes("mosca") || stlc.includes("69589")) {
        window.location = '/companyprofile' ;
      }
    }
  });
};
