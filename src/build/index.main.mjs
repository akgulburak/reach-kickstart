// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export async function Admin(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0, ctc1]);
  const ctc8 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc9 = stdlib.T_Tuple([ctc0, ctc1, ctc1]);
  const ctc10 = stdlib.T_Array(ctc9, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc11 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc12 = stdlib.T_Tuple([ctc1, ctc0, ctc8, ctc1, ctc10, ctc11, ctc11, ctc1, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc0, ctc8, ctc1, ctc10, ctc11, ctc11, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc11, ctc1, ctc1, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc11, ctc1, ctc1, ctc1]);
  
  
  const v18 = await ctc.creationTime();
  
  const v20 = ctc.selfAddress('Admin', false, stdlib.checkedBigNumberify('./index.rsh:36:23:application', stdlib.UInt_max, 19));
  
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:40:19:dot', stdlib.UInt_max, 0), [ctc1, ctc0], [v18, v20], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:40:19:dot', stdlib.UInt_max, 0), v18]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:40:19:dot', stdlib.UInt_max, 0)]);
    const [v23] = txn1.data;
    const v25 = txn1.time;
    const v22 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v62 = [v23, v23];
    const v63 = [v23, stdlib.checkedBigNumberify('./index.rsh:42:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:42:44:decimal', stdlib.UInt_max, 0)];
    const v65 = [v63, v63];
    const v66 = [stdlib.checkedBigNumberify('./index.rsh:46:108:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:46:108:decimal', stdlib.UInt_max, 0)];
    const v58 = v62;
    const v59 = stdlib.checkedBigNumberify('./index.rsh:46:87:decimal', stdlib.UInt_max, 0);
    const v60 = v65;
    const v61 = v66;
    const v586 = v25;
    const v587 = v18;
    const v588 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
    
    if ((() => {
      const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, 0));
      
      return v69;})()) {
      sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v586, v588]);
      sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v588]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v339 = stdlib.add(v587, stdlib.checkedBigNumberify('./index.rsh:104:63:decimal', stdlib.UInt_max, 6));
      const v352 = v66;
      const v353 = stdlib.checkedBigNumberify('./index.rsh:106:80:decimal', stdlib.UInt_max, 0);
      const v589 = v586;
      const v590 = v587;
      const v591 = v588;
      
      if ((() => {
        const v359 = stdlib.gt(v339, v590);
        
        return v359;})()) {
        const v421 = stdlib.sub(v339, v590);
        sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v589, v591]);
        sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v591]);
        sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        }
      else {
        sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v589, v591]);
        sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v591]);
        sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        }}
    return sim_r;
    })));
  const [v23] = txn1.data;
  const v25 = txn1.time;
  const v22 = txn1.from;
  ;
  const v62 = [v23, v23];
  const v63 = [v23, stdlib.checkedBigNumberify('./index.rsh:42:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:42:44:decimal', stdlib.UInt_max, 0)];
  const v65 = [v63, v63];
  const v66 = [stdlib.checkedBigNumberify('./index.rsh:46:108:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:46:108:decimal', stdlib.UInt_max, 0)];
  let v58 = v62;
  let v59 = stdlib.checkedBigNumberify('./index.rsh:46:87:decimal', stdlib.UInt_max, 0);
  let v60 = v65;
  let v61 = v66;
  let v586 = v25;
  let v587 = v18;
  let v588 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, 0));
    
    return v69;})()) {
    const txn2 = await (ctc.recv(11, 1, [ctc2], false, false));
    const [v296] = txn2.data;
    const v300 = txn2.time;
    const v295 = txn2.from;
    ;
    const v302 = v296[stdlib.checkedBigNumberify('./index.rsh:61:65:array ref', stdlib.UInt_max, 1)];
    const v303 = v296[stdlib.checkedBigNumberify('./index.rsh:61:83:array ref', stdlib.UInt_max, 0)];
    const v304 = [v302, v59, v303];
    const v306 = stdlib.Array_set(v60, v59, v304);
    const v309 = stdlib.Array_set(v58, v59, v302);
    const v322 = v58.reduce((v315, v316) => {
      const v318 = stdlib.addressEq(v302, v316);
      const v319 = v318 ? true : false;
      const v320 = v315 ? v315 : v319;
      
      return v320;}, false)
    const v325 = stdlib.add(v59, stdlib.checkedBigNumberify('./index.rsh:68:125:decimal', stdlib.UInt_max, 1));
    const v328 = stdlib.Array_set(v61, v59, v303);
    const v329 = [v60, v58, v59, v61];
    const v330 = [v306, v309, v325, v328];
    const v331 = v322 ? v329 : v330;
    const v333 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 0)];
    const v334 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 1)];
    const v335 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 2)];
    const v336 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 3)];
    const cv58 = v334;
    const cv59 = v335;
    const cv60 = v333;
    const cv61 = v336;
    const cv586 = v300;
    const cv587 = v586;
    const cv588 = v588;
    
    v58 = cv58;
    v59 = cv59;
    v60 = cv60;
    v61 = cv61;
    v586 = cv586;
    v587 = cv587;
    v588 = cv588;
    
    continue;
    }
  const v339 = stdlib.add(v587, stdlib.checkedBigNumberify('./index.rsh:104:63:decimal', stdlib.UInt_max, 6));
  let v352 = v66;
  let v353 = stdlib.checkedBigNumberify('./index.rsh:106:80:decimal', stdlib.UInt_max, 0);
  let v589 = v586;
  let v590 = v587;
  let v591 = v588;
  
  while ((() => {
    const v359 = stdlib.gt(v339, v590);
    
    return v359;})()) {
    const v421 = stdlib.sub(v339, v590);
    const txn2 = await (ctc.recv(9, 1, [ctc3], false, v421));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv(10, 0, [], false, false));
      const [] = txn3.data;
      const v426 = txn3.time;
      const v424 = txn3.from;
      ;
      const cv352 = v352;
      const cv353 = v353;
      const cv589 = v426;
      const cv590 = v589;
      const cv591 = v591;
      
      v352 = cv352;
      v353 = cv353;
      v589 = cv589;
      v590 = cv590;
      v591 = cv591;
      
      continue;
      }
    else {
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:118:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v591, v391);
      ;
      let v396;
      const v397 = v389[stdlib.checkedBigNumberify('./index.rsh:120:35:array ref', stdlib.UInt_max, 0)];
      const v398 = stdlib.ge(v397, stdlib.checkedBigNumberify('./index.rsh:120:40:decimal', stdlib.UInt_max, 2));
      if (v398) {
        const v403 = stdlib.sub(v394, v391);
        ;
        const v415 = [v352, v353];
        v396 = v415;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv589 = v395;
        const cv590 = v589;
        const cv591 = v403;
        
        v352 = cv352;
        v353 = cv353;
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        
        continue;}
      else {
        const v408 = v352[v397];
        const v409 = stdlib.add(v408, stdlib.checkedBigNumberify('./index.rsh:125:76:decimal', stdlib.UInt_max, 1));
        const v411 = stdlib.Array_set(v352, v397, v409);
        const v413 = stdlib.add(v353, v391);
        const v416 = [v411, v413];
        v396 = v416;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv589 = v395;
        const cv590 = v589;
        const cv591 = v394;
        
        v352 = cv352;
        v353 = cv353;
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        
        continue;}}
    }
  const v446 = v352.reduce((v438, v439) => {
    const v442 = stdlib.gt(v439, v438);
    const v444 = v442 ? v439 : v438;
    
    return v444;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
  const v455 = ['None', null];
  const v481 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
  const v482 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
  const v504 = stdlib.eq(v481, v446);
  const v508 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
  const v509 = [v508, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
  const v511 = [v455, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
  const v512 = v504 ? v509 : v511;
  const v517 = v512[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
  const v518 = v512[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
  let v519;
  switch (v517[0]) {
    case 'None': {
      
      const v522 = stdlib.eq(v482, v446);
      const v526 = stdlib.add(v518, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
      const v527 = ['Some', v518];
      const v528 = [v527, v518];
      const v529 = [v517, v526];
      const v530 = v522 ? v528 : v529;
      v519 = v530;
      
      break;
      }
    case 'Some': {
      const v533 = v517[1];
      v519 = v512;
      
      break;
      }
    }
  const v538 = v519[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
  let v544;
  switch (v538[0]) {
    case 'None': {
      
      v544 = stdlib.checkedBigNumberify('./index.rsh:43:57:decimal', stdlib.UInt_max, 0);
      
      break;
      }
    case 'Some': {
      const v548 = v538[1];
      v544 = v548;
      
      break;
      }
    }
  const v554 = v60[v544];
  const v555 = v554[stdlib.checkedBigNumberify('./index.rsh:152:55:array ref', stdlib.UInt_max, 2)];
  const v558 = v554[stdlib.checkedBigNumberify('./index.rsh:153:57:array ref', stdlib.UInt_max, 0)];
  stdlib.protect(ctc4, await interact.update(v555, v353), {
    at: './index.rsh:154:59:application',
    fs: ['at ./index.rsh:150:23:application call to [unknown function] (defined at: ./index.rsh:150:27:function exp)'],
    msg: 'update',
    who: 'Admin'
    });
  
  
  const txn2 = await (ctc.sendrecv(6, 3, stdlib.checkedBigNumberify('./index.rsh:158:19:dot', stdlib.UInt_max, 1), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1], [v22, v589, v591, v555, v558, v544], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1, ctc0, ctc1], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:158:19:dot', stdlib.UInt_max, 5), v22, v589, v591]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:158:19:dot', stdlib.UInt_max, 5), v22, v591]);
    const [v561, v562, v563] = txn2.data;
    const v566 = txn2.time;
    const v560 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v565 = stdlib.addressEq(v22, v560);
    stdlib.assert(v565, {
      at: './index.rsh:158:19:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    sim_r.txns.push({
      amt: v591,
      kind: 'from',
      to: v562,
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:162:21:after expr stmt semicolon', stdlib.UInt_max, 6), v566]);
    sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:162:21:after expr stmt semicolon', stdlib.UInt_max, 6)]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:162:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v561, v562, v563] = txn2.data;
  const v566 = txn2.time;
  const v560 = txn2.from;
  ;
  const v565 = stdlib.addressEq(v22, v560);
  stdlib.assert(v565, {
    at: './index.rsh:158:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  ;
  const txn3 = await (ctc.recv(7, 0, [], false, false));
  const [] = txn3.data;
  const v577 = txn3.time;
  const v575 = txn3.from;
  ;
  const txn4 = await (ctc.recv(8, 0, [], false, false));
  const [] = txn4.data;
  const v583 = txn4.time;
  const v581 = txn4.from;
  ;
  return;
  
  
  
  
  };
export async function Nominee(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc5 = stdlib.T_Tuple([ctc0, ctc1, ctc1]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc4, ctc1, ctc6, ctc7, ctc7, ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc4, ctc1, ctc6, ctc7, ctc7, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc7, ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc0, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc15 = stdlib.T_Null;
  
  
  const v18 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v23] = txn1.data;
  const v25 = txn1.time;
  const v22 = txn1.from;
  ;
  const v62 = [v23, v23];
  const v63 = [v23, stdlib.checkedBigNumberify('./index.rsh:42:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:42:44:decimal', stdlib.UInt_max, 0)];
  const v65 = [v63, v63];
  const v66 = [stdlib.checkedBigNumberify('./index.rsh:46:108:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:46:108:decimal', stdlib.UInt_max, 0)];
  let v58 = v62;
  let v59 = stdlib.checkedBigNumberify('./index.rsh:46:87:decimal', stdlib.UInt_max, 0);
  let v60 = v65;
  let v61 = v66;
  let v586 = v25;
  let v587 = v18;
  let v588 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, 0));
    
    return v69;})()) {
    const v182 = ctc.selfAddress('Nominee', true, stdlib.checkedBigNumberify('./index.rsh:46:27:application', stdlib.UInt_max, 181));
    const v185 = stdlib.protect(ctc1, await interact.getParams(v182), {
      at: './index.rsh:51:64:application',
      fs: ['at ./index.rsh:46:27:application call to [unknown function] (defined at: ./index.rsh:50:21:function exp)', 'at ./index.rsh:46:27:application call to [unknown function] (defined at: ./index.rsh:46:27:function exp)'],
      msg: 'getParams',
      who: 'Nominee'
      });
    const v193 = ['None', null];
    const v219 = v58[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
    const v220 = v58[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
    const v242 = stdlib.addressEq(v219, v182);
    const v246 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v247 = [v246, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
    const v249 = [v193, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
    const v250 = v242 ? v247 : v249;
    const v255 = v250[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
    const v256 = v250[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
    let v257;
    switch (v255[0]) {
      case 'None': {
        
        const v260 = stdlib.addressEq(v220, v182);
        const v264 = stdlib.add(v256, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
        const v265 = ['Some', v256];
        const v266 = [v265, v256];
        const v267 = [v255, v264];
        const v268 = v260 ? v266 : v267;
        v257 = v268;
        
        break;
        }
      case 'Some': {
        const v271 = v255[1];
        v257 = v250;
        
        break;
        }
      }
    const v276 = v257[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
    let v282;
    switch (v276[0]) {
      case 'None': {
        
        v282 = stdlib.checkedBigNumberify('./index.rsh:43:57:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v286 = v276[1];
        v282 = v286;
        
        break;
        }
      }
    
    const v292 = [v185, v182];
    
    const txn2 = await (ctc.sendrecv(11, 1, stdlib.checkedBigNumberify('./index.rsh:46:27:dot', stdlib.UInt_max, 6), [ctc0, ctc4, ctc1, ctc6, ctc7, ctc7, ctc1, ctc1, ctc2], [v22, v58, v59, v60, v61, v66, v586, v588, v292], [stdlib.checkedBigNumberify('./index.rsh:58:28:decimal', stdlib.UInt_max, 0), []], [ctc2], true, false, false, (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:46:27:dot', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v586, v588]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:46:27:dot', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v588]);
      const [v296] = txn2.data;
      const v300 = txn2.time;
      const v295 = txn2.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:58:28:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v302 = v296[stdlib.checkedBigNumberify('./index.rsh:61:65:array ref', stdlib.UInt_max, 1)];
      const v303 = v296[stdlib.checkedBigNumberify('./index.rsh:61:83:array ref', stdlib.UInt_max, 0)];
      const v304 = [v302, v59, v303];
      const v306 = stdlib.Array_set(v60, v59, v304);
      const v309 = stdlib.Array_set(v58, v59, v302);
      const v322 = v58.reduce((v315, v316) => {
        const v318 = stdlib.addressEq(v302, v316);
        const v319 = v318 ? true : false;
        const v320 = v315 ? v315 : v319;
        
        return v320;}, false)
      const v325 = stdlib.add(v59, stdlib.checkedBigNumberify('./index.rsh:68:125:decimal', stdlib.UInt_max, 1));
      const v328 = stdlib.Array_set(v61, v59, v303);
      const v329 = [v60, v58, v59, v61];
      const v330 = [v306, v309, v325, v328];
      const v331 = v322 ? v329 : v330;
      const v333 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 0)];
      const v334 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 1)];
      const v335 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 2)];
      const v336 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 3)];
      const cv58 = v334;
      const cv59 = v335;
      const cv60 = v333;
      const cv61 = v336;
      const cv586 = v300;
      const cv587 = v586;
      const cv588 = v588;
      
      (() => {
        const v58 = cv58;
        const v59 = cv59;
        const v60 = cv60;
        const v61 = cv61;
        const v586 = cv586;
        const v587 = cv587;
        const v588 = cv588;
        
        if ((() => {
          const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, 0));
          
          return v69;})()) {
          sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v586, v588]);
          sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v588]);
          sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          const v339 = stdlib.add(v587, stdlib.checkedBigNumberify('./index.rsh:104:63:decimal', stdlib.UInt_max, 6));
          const v352 = v66;
          const v353 = stdlib.checkedBigNumberify('./index.rsh:106:80:decimal', stdlib.UInt_max, 0);
          const v589 = v586;
          const v590 = v587;
          const v591 = v588;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v590);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v590);
            sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v589, v591]);
            sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v591]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v589, v591]);
            sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v591]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }}})();
      return sim_r;
      })));
    const [v296] = txn2.data;
    const v300 = txn2.time;
    const v295 = txn2.from;
    ;
    const v302 = v296[stdlib.checkedBigNumberify('./index.rsh:61:65:array ref', stdlib.UInt_max, 1)];
    const v303 = v296[stdlib.checkedBigNumberify('./index.rsh:61:83:array ref', stdlib.UInt_max, 0)];
    const v304 = [v302, v59, v303];
    const v306 = stdlib.Array_set(v60, v59, v304);
    const v309 = stdlib.Array_set(v58, v59, v302);
    const v322 = v58.reduce((v315, v316) => {
      const v318 = stdlib.addressEq(v302, v316);
      const v319 = v318 ? true : false;
      const v320 = v315 ? v315 : v319;
      
      return v320;}, false)
    const v325 = stdlib.add(v59, stdlib.checkedBigNumberify('./index.rsh:68:125:decimal', stdlib.UInt_max, 1));
    const v328 = stdlib.Array_set(v61, v59, v303);
    const v329 = [v60, v58, v59, v61];
    const v330 = [v306, v309, v325, v328];
    const v331 = v322 ? v329 : v330;
    const v333 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 0)];
    const v334 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 1)];
    const v335 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 2)];
    const v336 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 3)];
    const cv58 = v334;
    const cv59 = v335;
    const cv60 = v333;
    const cv61 = v336;
    const cv586 = v300;
    const cv587 = v586;
    const cv588 = v588;
    
    v58 = cv58;
    v59 = cv59;
    v60 = cv60;
    v61 = cv61;
    v586 = cv586;
    v587 = cv587;
    v588 = cv588;
    
    continue;
    }
  const v339 = stdlib.add(v587, stdlib.checkedBigNumberify('./index.rsh:104:63:decimal', stdlib.UInt_max, 6));
  let v352 = v66;
  let v353 = stdlib.checkedBigNumberify('./index.rsh:106:80:decimal', stdlib.UInt_max, 0);
  let v589 = v586;
  let v590 = v587;
  let v591 = v588;
  
  while ((() => {
    const v359 = stdlib.gt(v339, v590);
    
    return v359;})()) {
    const v421 = stdlib.sub(v339, v590);
    const txn2 = await (ctc.recv(9, 1, [ctc14], false, v421));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv(10, 0, [], false, false));
      const [] = txn3.data;
      const v426 = txn3.time;
      const v424 = txn3.from;
      ;
      const cv352 = v352;
      const cv353 = v353;
      const cv589 = v426;
      const cv590 = v589;
      const cv591 = v591;
      
      v352 = cv352;
      v353 = cv353;
      v589 = cv589;
      v590 = cv590;
      v591 = cv591;
      
      continue;
      }
    else {
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:118:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v591, v391);
      ;
      let v396;
      const v397 = v389[stdlib.checkedBigNumberify('./index.rsh:120:35:array ref', stdlib.UInt_max, 0)];
      const v398 = stdlib.ge(v397, stdlib.checkedBigNumberify('./index.rsh:120:40:decimal', stdlib.UInt_max, 2));
      if (v398) {
        const v403 = stdlib.sub(v394, v391);
        ;
        const v415 = [v352, v353];
        v396 = v415;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv589 = v395;
        const cv590 = v589;
        const cv591 = v403;
        
        v352 = cv352;
        v353 = cv353;
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        
        continue;}
      else {
        const v408 = v352[v397];
        const v409 = stdlib.add(v408, stdlib.checkedBigNumberify('./index.rsh:125:76:decimal', stdlib.UInt_max, 1));
        const v411 = stdlib.Array_set(v352, v397, v409);
        const v413 = stdlib.add(v353, v391);
        const v416 = [v411, v413];
        v396 = v416;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv589 = v395;
        const cv590 = v589;
        const cv591 = v394;
        
        v352 = cv352;
        v353 = cv353;
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        
        continue;}}
    }
  const txn2 = await (ctc.recv(6, 3, [ctc1, ctc0, ctc1], false, false));
  const [v561, v562, v563] = txn2.data;
  const v566 = txn2.time;
  const v560 = txn2.from;
  ;
  const v565 = stdlib.addressEq(v22, v560);
  stdlib.assert(v565, {
    at: './index.rsh:158:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Nominee'
    });
  ;
  stdlib.protect(ctc15, await interact.updateN(v561, v353), {
    at: './index.rsh:164:29:application',
    fs: ['at ./index.rsh:163:25:application call to [unknown function] (defined at: ./index.rsh:163:29:function exp)'],
    msg: 'updateN',
    who: 'Nominee'
    });
  
  
  const txn3 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('./index.rsh:166:21:dot', stdlib.UInt_max, 0), [ctc1], [v566], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:166:21:dot', stdlib.UInt_max, 6), v566]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:166:21:dot', stdlib.UInt_max, 6)]);
    const [] = txn3.data;
    const v577 = txn3.time;
    const v575 = txn3.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:168:21:after expr stmt semicolon', stdlib.UInt_max, 7), v577]);
    sim_r.nextSt_noTime = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:168:21:after expr stmt semicolon', stdlib.UInt_max, 7)]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:168:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [] = txn3.data;
  const v577 = txn3.time;
  const v575 = txn3.from;
  ;
  const txn4 = await (ctc.recv(8, 0, [], false, false));
  const [] = txn4.data;
  const v583 = txn4.time;
  const v581 = txn4.from;
  ;
  return;
  
  
  
  
  };
export async function Voter(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc6 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc5, ctc1, ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc1]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([]);
  
  
  const v18 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v23] = txn1.data;
  const v25 = txn1.time;
  const v22 = txn1.from;
  ;
  const v62 = [v23, v23];
  const v63 = [v23, stdlib.checkedBigNumberify('./index.rsh:42:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:42:44:decimal', stdlib.UInt_max, 0)];
  const v65 = [v63, v63];
  const v66 = [stdlib.checkedBigNumberify('./index.rsh:46:108:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:46:108:decimal', stdlib.UInt_max, 0)];
  let v58 = v62;
  let v59 = stdlib.checkedBigNumberify('./index.rsh:46:87:decimal', stdlib.UInt_max, 0);
  let v60 = v65;
  let v61 = v66;
  let v586 = v25;
  let v587 = v18;
  let v588 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, 0));
    
    return v69;})()) {
    const txn2 = await (ctc.recv(11, 1, [ctc2], false, false));
    const [v296] = txn2.data;
    const v300 = txn2.time;
    const v295 = txn2.from;
    ;
    const v302 = v296[stdlib.checkedBigNumberify('./index.rsh:61:65:array ref', stdlib.UInt_max, 1)];
    const v303 = v296[stdlib.checkedBigNumberify('./index.rsh:61:83:array ref', stdlib.UInt_max, 0)];
    const v304 = [v302, v59, v303];
    const v306 = stdlib.Array_set(v60, v59, v304);
    const v309 = stdlib.Array_set(v58, v59, v302);
    const v322 = v58.reduce((v315, v316) => {
      const v318 = stdlib.addressEq(v302, v316);
      const v319 = v318 ? true : false;
      const v320 = v315 ? v315 : v319;
      
      return v320;}, false)
    const v325 = stdlib.add(v59, stdlib.checkedBigNumberify('./index.rsh:68:125:decimal', stdlib.UInt_max, 1));
    const v328 = stdlib.Array_set(v61, v59, v303);
    const v329 = [v60, v58, v59, v61];
    const v330 = [v306, v309, v325, v328];
    const v331 = v322 ? v329 : v330;
    const v333 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 0)];
    const v334 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 1)];
    const v335 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 2)];
    const v336 = v331[stdlib.checkedBigNumberify('./index.rsh:45:19:array', stdlib.UInt_max, 3)];
    const cv58 = v334;
    const cv59 = v335;
    const cv60 = v333;
    const cv61 = v336;
    const cv586 = v300;
    const cv587 = v586;
    const cv588 = v588;
    
    v58 = cv58;
    v59 = cv59;
    v60 = cv60;
    v61 = cv61;
    v586 = cv586;
    v587 = cv587;
    v588 = cv588;
    
    continue;
    }
  const v339 = stdlib.add(v587, stdlib.checkedBigNumberify('./index.rsh:104:63:decimal', stdlib.UInt_max, 6));
  let v352 = v66;
  let v353 = stdlib.checkedBigNumberify('./index.rsh:106:80:decimal', stdlib.UInt_max, 0);
  let v589 = v586;
  let v590 = v587;
  let v591 = v588;
  
  while ((() => {
    const v359 = stdlib.gt(v339, v590);
    
    return v359;})()) {
    const v421 = stdlib.sub(v339, v590);
    const v377 = v61[stdlib.checkedBigNumberify('./index.rsh:111:81:array ref', stdlib.UInt_max, 0)];
    const v378 = v61[stdlib.checkedBigNumberify('./index.rsh:111:91:array ref', stdlib.UInt_max, 1)];
    const v379 = v352[stdlib.checkedBigNumberify('./index.rsh:111:102:array ref', stdlib.UInt_max, 0)];
    const v380 = v352[stdlib.checkedBigNumberify('./index.rsh:111:111:array ref', stdlib.UInt_max, 1)];
    const v381 = [v377, v378];
    const v382 = [v379, v380];
    const v383 = stdlib.protect(ctc3, await interact.shouldBuyTicket(v381, v382), {
      at: './index.rsh:111:73:application',
      fs: ['at ./index.rsh:106:56:application call to [unknown function] (defined at: ./index.rsh:110:25:function exp)', 'at ./index.rsh:106:56:application call to [unknown function] (defined at: ./index.rsh:106:56:function exp)'],
      msg: 'shouldBuyTicket',
      who: 'Voter'
      });
    
    const v386 = v383[stdlib.checkedBigNumberify('./index.rsh:118:38:array ref', stdlib.UInt_max, 1)];
    
    const txn2 = await (ctc.sendrecv(9, 1, stdlib.checkedBigNumberify('./index.rsh:106:56:dot', stdlib.UInt_max, 5), [ctc0, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc3], [v22, v339, v352, v353, v421, v589, v591, v383], [v386, []], [ctc3], true, false, v421, (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:106:56:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v589, v591]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:106:56:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v591]);
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:118:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v591, v391);
      sim_r.txns.push({
        amt: v391,
        kind: 'to',
        tok: undefined
        });
      let v396;
      const v397 = v389[stdlib.checkedBigNumberify('./index.rsh:120:35:array ref', stdlib.UInt_max, 0)];
      const v398 = stdlib.ge(v397, stdlib.checkedBigNumberify('./index.rsh:120:40:decimal', stdlib.UInt_max, 2));
      if (v398) {
        const v403 = stdlib.sub(v394, v391);
        sim_r.txns.push({
          amt: v391,
          kind: 'from',
          to: v388,
          tok: undefined
          });
        const v415 = [v352, v353];
        v396 = v415;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv589 = v395;
        const cv590 = v589;
        const cv591 = v403;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v589 = cv589;
          const v590 = cv590;
          const v591 = cv591;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v590);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v590);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v589, v591]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v591]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v589, v591]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v591]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();}
      else {
        const v408 = v352[v397];
        const v409 = stdlib.add(v408, stdlib.checkedBigNumberify('./index.rsh:125:76:decimal', stdlib.UInt_max, 1));
        const v411 = stdlib.Array_set(v352, v397, v409);
        const v413 = stdlib.add(v353, v391);
        const v416 = [v411, v413];
        v396 = v416;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv589 = v395;
        const cv590 = v589;
        const cv591 = v394;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v589 = cv589;
          const v590 = cv590;
          const v591 = cv591;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v590);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v590);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v589, v591]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v591]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v589, v591]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v591]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();}
      return sim_r;
      })));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(10, 0, stdlib.checkedBigNumberify('./index.rsh:130:27:dot', stdlib.UInt_max, 5), [ctc0, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1], [v22, v339, v352, v353, v421, v589, v591], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:130:27:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v589, v591]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:130:27:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v591]);
        const [] = txn3.data;
        const v426 = txn3.time;
        const v424 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv352 = v352;
        const cv353 = v353;
        const cv589 = v426;
        const cv590 = v589;
        const cv591 = v591;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v589 = cv589;
          const v590 = cv590;
          const v591 = cv591;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v590);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v590);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v589, v591]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v591]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:106:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v589, v591]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v591]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:149:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v426 = txn3.time;
      const v424 = txn3.from;
      ;
      const cv352 = v352;
      const cv353 = v353;
      const cv589 = v426;
      const cv590 = v589;
      const cv591 = v591;
      
      v352 = cv352;
      v353 = cv353;
      v589 = cv589;
      v590 = cv590;
      v591 = cv591;
      
      continue;
      }
    else {
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:118:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v591, v391);
      ;
      let v396;
      const v397 = v389[stdlib.checkedBigNumberify('./index.rsh:120:35:array ref', stdlib.UInt_max, 0)];
      const v398 = stdlib.ge(v397, stdlib.checkedBigNumberify('./index.rsh:120:40:decimal', stdlib.UInt_max, 2));
      if (v398) {
        const v403 = stdlib.sub(v394, v391);
        ;
        const v415 = [v352, v353];
        v396 = v415;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv589 = v395;
        const cv590 = v589;
        const cv591 = v403;
        
        v352 = cv352;
        v353 = cv353;
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        
        continue;}
      else {
        const v408 = v352[v397];
        const v409 = stdlib.add(v408, stdlib.checkedBigNumberify('./index.rsh:125:76:decimal', stdlib.UInt_max, 1));
        const v411 = stdlib.Array_set(v352, v397, v409);
        const v413 = stdlib.add(v353, v391);
        const v416 = [v411, v413];
        v396 = v416;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:106:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv589 = v395;
        const cv590 = v589;
        const cv591 = v394;
        
        v352 = cv352;
        v353 = cv353;
        v589 = cv589;
        v590 = cv590;
        v591 = cv591;
        
        continue;}}
    }
  const txn2 = await (ctc.recv(6, 3, [ctc1, ctc0, ctc1], false, false));
  const [v561, v562, v563] = txn2.data;
  const v566 = txn2.time;
  const v560 = txn2.from;
  ;
  const v565 = stdlib.addressEq(v22, v560);
  stdlib.assert(v565, {
    at: './index.rsh:158:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Voter'
    });
  ;
  const txn3 = await (ctc.recv(7, 0, [], false, false));
  const [] = txn3.data;
  const v577 = txn3.time;
  const v575 = txn3.from;
  ;
  stdlib.protect(ctc10, await interact.updateV(v561, v353), {
    at: './index.rsh:170:29:application',
    fs: ['at ./index.rsh:169:23:application call to [unknown function] (defined at: ./index.rsh:169:27:function exp)'],
    msg: 'updateV',
    who: 'Voter'
    });
  
  
  const txn4 = await (ctc.sendrecv(8, 0, stdlib.checkedBigNumberify('./index.rsh:172:19:dot', stdlib.UInt_max, 0), [ctc1], [v577], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:172:19:dot', stdlib.UInt_max, 7), v577]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:172:19:dot', stdlib.UInt_max, 7)]);
    const [] = txn4.data;
    const v583 = txn4.time;
    const v581 = txn4.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.txns.push({
      kind: 'halt',
      tok: undefined
      })
    sim_r.nextSt = stdlib.digest(ctc11, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:180:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = true;
    
    return sim_r;
    })));
  const [] = txn4.data;
  const v583 = txn4.time;
  const v581 = txn4.from;
  ;
  return;
  
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
gtxna 0 ApplicationArgs 2
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(dg==)
byte base64()
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [null, {
    count: 7,
    size: 121
    }, null, null, null, null, {
    count: 11,
    size: 177
    }, {
    count: 6,
    size: 89
    }, {
    count: 6,
    size: 89
    }, {
    count: 13,
    size: 185
    }, {
    count: 12,
    size: 169
    }, {
    count: 14,
    size: 369
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 7
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:40:19:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 255
int 0
itob
concat
int 0
itob
concat
store 254
int 0
itob
int 0
itob
concat
store 253
int 0
int 0
<=
bz l0
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
gtxn 0 Sender
concat
load 255
load 255
concat
concat
int 0
itob
concat
load 254
load 254
concat
concat
load 253
concat
load 253
concat
int 0
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
l0:
gtxna 0 ApplicationArgs 5
btoi
int 6
+
dup
store 252
gtxna 0 ApplicationArgs 5
btoi
>
bz l1
load 252
gtxna 0 ApplicationArgs 5
btoi
-
store 251
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
gtxn 0 Sender
concat
load 252
itob
concat
load 253
concat
int 0
itob
concat
load 251
itob
concat
int 0
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
l1:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 5
int 5
itob
gtxn 0 Sender
concat
int 0
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, null, null, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 5
int 5
itob
load 255
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:158:19:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// Just "sender correct"
// "./index.rsh:158:19:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 252
==
assert
gtxn 4 Amount
load 254
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 6
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:166:21:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 7
int 7
itob
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 6
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 7
int 7
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:172:19:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
store 249
// Handler 9
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 13
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
load 249
substring 8 16
btoi
store 247
load 250
load 247
+
store 246
// "CheckPay"
// "./index.rsh:106:56:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 247
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 249
substring 0 8
btoi
dup
store 244
int 2
>=
bz l0
load 246
load 247
-
store 243
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxn 0 Sender
==
assert
gtxn 4 Amount
load 247
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
load 253
load 252
itob
concat
dup
store 245
substring 0 16
store 242
load 245
substring 16 24
btoi
store 241
load 254
gtxna 0 ApplicationArgs 5
btoi
>
dup
store 240
bz l1
load 254
gtxna 0 ApplicationArgs 5
btoi
-
store 239
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 242
concat
load 241
itob
concat
load 239
itob
concat
load 243
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 239
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
pop
l1:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 243
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 251
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
pop
l0:
load 253
int 0
int 8
load 244
*
substring3
load 253
int 8
load 244
*
dup
int 8
+
substring3
btoi
int 1
+
itob
concat
load 253
int 8
dup
load 244
*
+
int 16
substring3
concat
load 252
load 247
+
itob
concat
store 245
load 254
gtxna 0 ApplicationArgs 5
btoi
>
bz l2
load 254
gtxna 0 ApplicationArgs 5
btoi
-
store 243
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 245
substring 0 16
concat
load 245
substring 16 24
concat
load 243
itob
concat
load 246
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 243
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l2:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 246
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 251
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
// Handler 10
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:130:27:dot"
// "[at ./index.rsh:106:56:application call to [unknown function] (defined at: ./index.rsh:106:56:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 254
gtxna 0 ApplicationArgs 5
btoi
>
bz l0
load 254
gtxna 0 ApplicationArgs 5
btoi
-
store 249
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 249
itob
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 249
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
l0:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 250
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 251
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
store 251
gtxna 0 ApplicationArgs 11
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
store 248
// Handler 11
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 14
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
concat
load 251
concat
load 250
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:46:27:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 248
substring 8 40
store 247
load 248
substring 0 8
btoi
store 246
load 247
load 254
substring 0 32
==
store 245
load 252
int 0
int 48
load 253
*
substring3
load 247
load 253
itob
concat
load 246
itob
concat
concat
load 252
int 48
dup
load 253
*
+
int 96
substring3
concat
load 254
int 0
int 32
load 253
*
substring3
load 247
concat
load 254
int 32
dup
load 253
*
+
int 64
substring3
concat
concat
load 253
int 1
+
itob
concat
load 251
int 0
int 8
load 253
*
substring3
load 246
itob
concat
load 251
int 8
dup
load 253
*
+
int 16
substring3
concat
concat
load 252
load 254
concat
load 253
itob
concat
load 251
concat
load 247
load 254
substring 32 64
==
load 245
load 245
select
select
dup
store 244
substring 160 168
btoi
dup
store 243
int 0
<=
bz l0
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
load 244
substring 96 160
concat
load 243
itob
concat
load 244
substring 0 96
concat
load 244
substring 168 184
concat
load 250
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
l0:
gtxna 0 ApplicationArgs 5
btoi
int 6
+
dup
store 242
gtxna 0 ApplicationArgs 5
btoi
>
bz l1
load 242
gtxna 0 ApplicationArgs 5
btoi
-
store 241
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 242
itob
concat
load 250
concat
int 0
itob
concat
load 241
itob
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
l1:
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 5
int 5
itob
load 255
concat
load 249
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v22",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              },
              {
                "internalType": "uint256[2]",
                "name": "v352",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v353",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v589",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v22",
                "type": "address"
              },
              {
                "internalType": "address payable[2]",
                "name": "v58",
                "type": "address[2]"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T4[2]",
                "name": "v60",
                "type": "tuple[2]"
              },
              {
                "internalType": "uint256[2]",
                "name": "v61",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256[2]",
                "name": "v66",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v586",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v588",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  }
                ],
                "internalType": "struct T32",
                "name": "v296",
                "type": "tuple"
              }
            ],
            "internalType": "struct T33",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T34",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v22",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v589",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v561",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v562",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v563",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v566",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v577",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v22",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              },
              {
                "internalType": "uint256[2]",
                "name": "v352",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v353",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v589",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T27",
                "name": "v389",
                "type": "tuple"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v23",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v22",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              },
              {
                "internalType": "uint256[2]",
                "name": "v352",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v353",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v589",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T30",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v22",
                "type": "address"
              },
              {
                "internalType": "address payable[2]",
                "name": "v58",
                "type": "address[2]"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T4[2]",
                "name": "v60",
                "type": "tuple[2]"
              },
              {
                "internalType": "uint256[2]",
                "name": "v61",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256[2]",
                "name": "v66",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v586",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v588",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  }
                ],
                "internalType": "struct T32",
                "name": "v296",
                "type": "tuple"
              }
            ],
            "internalType": "struct T33",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T34",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v22",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v589",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v561",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v562",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v563",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v566",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v577",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v22",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              },
              {
                "internalType": "uint256[2]",
                "name": "v352",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v353",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v589",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v591",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T27",
                "name": "v389",
                "type": "tuple"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611c15806100826000396000f3fe6080604052600436106100745760003560e01c8063c08d11691161004e578063c08d1169146100bb578063d1139ac9146100ce578063eaf98df9146100e1578063ec2cc884146100f45761007b565b8063054ba53d146100805780630e02fe3b146100955780638470ce95146100a85761007b565b3661007b57005b600080fd5b61009361008e366004611622565b610107565b005b6100936100a3366004611622565b610191565b6100936100b636600461163d565b61032c565b6100936100c936600461164f565b610644565b6100936100dc366004611661565b610776565b6100936100ef366004611622565b610ba1565b610093610102366004611611565b610c6d565b60408051600760208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461014457600080fd5b60008055341561015357600080fd5b7fbe5ec86984ef196c1da90ff17fc82f17502a973a531827bb40fd96465bb97e4981604051610182919061191a565b60405180910390a16000805533ff5b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146101ce57600080fd5b600080556101da611251565b34156101e557600080fd5b6101f560408301602084016115f0565b81516001600160a01b0391909116905261021560408301602084016115f0565b81516001600160a01b039190911660209182015261023990604084019084016115f0565b602082810180516001600160a01b039390931690925281516000908201819052825160409081018290528351818601805191909152935193518301939093526060840180518290525190910152517f3edc19012383f1a954d272136ca587df4f30f9b69fd94318a56658f3640102eb906102b49084906119c9565b60405180910390a16102c4611290565b8051339052606080830180518351602090810191909152845181850180519190915280516000920182905260408087015182519091015291518251909301929092528051436080909101528051853560a0909101525160c0015261032781610d88565b505050565b604051610340906004908390602001611abd565b6040516020818303038152906040528051906020012060001c6000541461036657600080fd5b600080556103726112b0565b61038460a083013560c0840135611b7f565b431061038f57600080fd5b6103a261012083013560e0840135611b7f565b815234610120830135146103b557600080fd5b6002610100830135106104fe57604051339061012084013580156108fc02916000818181858888f193505050501580156103f3573d6000803e3d6000fd5b50604080518082018252908084019060029083908390808284376000920191909152505050604080830180519290925281516080850135602091820152915191830191909152517fa48efb01ee98575cddfa07d8d36cb54b8d77786d048c144fbb589a206adac1d59061046790849061192e565b60405180910390a16104776112e4565b61048460208401846115f0565b81516001600160a01b03909116905280516020808501359181019190915282810180515182840180519190915290518201518151909201919091528051436040909101525160c084013560609091015281516104e69061012085013590611b97565b6020820151608001526104f881610e91565b50610640565b604080518082018252610564918085019060029083908390808284376000920191909152505050610100840135600160408601826002811061055057634e487b7160e01b600052603260045260246000fd5b602002013561055f9190611b7f565b610fa6565b60608201515261057d6101208301356080840135611b7f565b60608201805160209081019290925251908201526040517fa48efb01ee98575cddfa07d8d36cb54b8d77786d048c144fbb589a206adac1d5906105c190849061192e565b60405180910390a16105d16112e4565b6105de60208401846115f0565b81516001600160a01b0390911690528051602080850135918101919091528281018051518284018051919091529051820151815190920191909152805143604090910152805160c0850135606090910152825190516080015261032781610e91565b5050565b604051610658906004908390602001611abd565b6040516020818303038152906040528051906020012060001c6000541461067e57600080fd5b6000805561069460a082013560c0830135611b7f565b4310156106a057600080fd5b34156106ab57600080fd5b7f3ed2ea944ec27848fc58b27c3ca813e6c3e80b649b05b1bdf137fa661a837bdd816040516106da919061195a565b60405180910390a16106ea6112e4565b6106f760208301836115f0565b81516001600160a01b0390911690528051602080840135910152604080518082018252908084019060029083908390808284376000920191909152505050602080830180519290925281516080808601359190920152815143604090910152815160c0850135606090910152905160e084013591015261064081610e91565b60405161078a9060029083906020016119f1565b6040516020818303038152906040528051906020012060001c600054146107b057600080fd5b600080556107bc61130d565b34156107c757600080fd5b6107d9610240830161022084016115f0565b81516001600160a01b03909116905280516060830135602091820152815161020084013560409091015260009082018190525b60028110156108be5760208301816002811061083857634e487b7160e01b600052603260045260246000fd5b60200201602081019061084b91906115f0565b6001600160a01b03166040830152602082015161089f5760408201516001600160a01b0316610882610240850161022086016115f0565b6001600160a01b03161461089757600061089a565b60015b6108a5565b81602001515b15156020830152806108b681611bae565b91505061080c565b50602081015115156060820152604080518082019091526080830160026000835b8282101561090b576108fc60608302850136819003810190611673565b815260200190600101906108df565b50505050608082015152604080518082018252906020840190600290839083908082843760009201919091525050506080820180516020019190915251606083013560409182015280518082018252906101408401906002908390839080828437600092018290525060808086015160600194909452604080518082019091526109d99490935086019150600290835b828210156109c7576109b860608302850136819003810190611673565b8152602001906001019061099b565b50508451606087013592509050611044565b60a082015152604080518082018252610a23916020850190600290839083908082843760009201919091525050506060840135610a1e610240860161022087016115f0565b6110b4565b60a082015160200152610a3b60016060840135611b7f565b60a082015160409081019190915280518082018252610a8091610140850190600290839083908082843760009201919091525050506060840135610200850135610fa6565b8160a00151606001819052508060600151610a9f578060a00151610aa5565b80608001515b60c08201526040517f4c38fac897c6790ca16a4608928d45c8affc1f95c2cbe7026f2f110c5f0037c390610ada90849061198d565b60405180910390a1610aea611290565b610af760208401846115f0565b81516001600160a01b0390911690526040805180820182529061018085019060029083908390808284376000920191909152505082516020908101929092525060c080840180518301518385018051919091528151604090810151825190950194909452815151815190940193909352516060908101518351909101528151436080919091015281516101c086013560a0919091015290516101e085013591015261032781610d88565b60408051600660208201528235918101919091526060016040516020818303038152906040528051906020012060001c60005414610bde57600080fd5b600080553415610bed57600080fd5b7fcb6b8f7572f166957bd4be64f8e20ee6cd939c32fb24e6e579273f81f42c0f6381604051610c1c919061191a565b60405180910390a160408051602081019091526000815243815260408051600760208201528251918101919091526060015b60408051601f1981840301815291905280516020909101206000555050565b604051610c81906005908390602001611b3a565b6040516020818303038152906040528051906020012060001c60005414610ca757600080fd5b600080553415610cb657600080fd5b33610cc460208301836115f0565b6001600160a01b031614610cd757600080fd5b610ce760a08201608083016115f0565b604080516001600160a01b0392909216919083013580156108fc02916000818181858888f19350505050158015610d22573d6000803e3d6000fd5b507f83e534428f92bfcb95a8170bbd5cd7a87ec89ee978b81e96168024da7cb7429d81604051610d5291906118d8565b60405180910390a16040805160208101909152600081524381526040805160066020820152825191810191909152606001610c4e565b600081602001516020015111610e3657610da061135c565b8151516001600160a01b031681526020808301805151828401528051820151604080850191909152815181015160608086019190915282510151608080860191909152855184015160a08601528251015160c08086019190915291519091015160e084015251610e1591600291849101611a06565b60408051601f19818403018152919052805160209091012060005550610e8e565b610e3e6113c2565b81515181516001600160a01b0390911690528151602090810151825182015282018051608090810151835160400152815160a00151835160600152905160c001518251909101526106408161116e565b50565b6040805160208101909152600081528160200151606001518260000151602001511115610f6257816020015160600151826000015160200151610ed49190611b97565b8152610ede6113e2565b8251516001600160a01b03168152825160209081015181830152808401805151604080850191909152815183015160608501528451608080860191909152825182015160a086015291519091015160c084015251610f4191600491849101611ad2565b60408051601f19818403018152919052805160209091012060005550610640565b610f6a611423565b82515181516001600160a01b039091169052602080840180516040908101518451909301929092525160800151825190910152610327816111ee565b610fae61144c565b60005b600281101561101657848160028110610fda57634e487b7160e01b600052603260045260246000fd5b6020020151828260028110610fff57634e487b7160e01b600052603260045260246000fd5b60200201528061100e81611bae565b915050610fb1565b508181846002811061103857634e487b7160e01b600052603260045260246000fd5b60200201529392505050565b61104c61146a565b60005b60028110156110165784816002811061107857634e487b7160e01b600052603260045260246000fd5b602002015182826002811061109d57634e487b7160e01b600052603260045260246000fd5b6020020152806110ac81611bae565b91505061104f565b6110bc61144c565b60005b6002811015611132578481600281106110e857634e487b7160e01b600052603260045260246000fd5b602002015182826002811061110d57634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209290920201528061112a81611bae565b9150506110bf565b508181846002811061115457634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209290920201529392505050565b6111766112e4565b81515181516001600160a01b03909116905281516060015161119a90600690611b7f565b81516020908101919091528251810151818301805191909152805160009201919091528251604090810151825190910152825160609081015182519091015282516080908101519151015261064081610e91565b61121b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015251610c4e91600591849101611b4e565b604051806080016040528061126461144c565b8152602001611271611497565b815260200161127e61146a565b815260200161128b61144c565b905290565b60405180604001604052806112a36114c1565b815260200161128b6114e4565b6040518060800160405280600081526020016112ca611533565b81526020016112d7611533565b815260200161128b611533565b60408051608081018252600091810182815260608201929092529081526020810161128b611553565b6040518060e00160405280611320611497565b8152600060208201819052604082018190526060820152608001611342611566565b815260200161134f611566565b815260200161128b611566565b60405180610100016040528060006001600160a01b0316815260200161138061144c565b81526020016000815260200161139461146a565b81526020016113a161144c565b81526020016113ae61144c565b815260200160008152602001600081525090565b60405180604001604052806113d561159a565b8152600060209091015290565b6040805160e0810182526000808252602082015290810161140161144c565b8152602001600081526020016000815260200160008152602001600081525090565b6040805160a08101825260009181018281526060820183905260808201929092529081906113d5565b60405180604001604052806002906020820280368337509192915050565b60405180604001604052806002905b611481611497565b8152602001906001900390816114795790505090565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b604051806040016040528060006001600160a01b0316815260200161128b61144c565b6040518060e001604052806114f761144c565b81526020016000815260200161150b61146a565b815260200161151861144c565b81526020016000815260200160008152602001600081525090565b604051806040016040528061154661144c565b8152602001600081525090565b6040518060a0016040528061140161144c565b604051806080016040528061157961146a565b815260200161158661144c565b81526020016000815260200161128b61144c565b6040518060a0016040528060006001600160a01b0316815260200161151861144c565b80356001600160a01b03811681146115d457600080fd5b919050565b6000604082840312156115ea578081fd5b50919050565b600060208284031215611601578081fd5b61160a826115bd565b9392505050565b600060c082840312156115ea578081fd5b600060408284031215611633578081fd5b61160a83836115d9565b600061014082840312156115ea578081fd5b600061012082840312156115ea578081fd5b600061024082840312156115ea578081fd5b600060608284031215611684578081fd5b6040516060810181811067ffffffffffffffff821117156116b357634e487b7160e01b83526041600452602483fd5b6040526116bf836115bd565b815260208301356020820152604083013560408201528091505092915050565b8060005b6002811015611709576116f6848361188b565b60609384019391909101906001016116e3565b50505050565b8060005b60028110156117095761174484835180516001600160a01b0316825260208082015190830152604090810151910152565b6060939093019260209190910190600101611713565b6040818337600060408301525050565b8060005b600281101561170957815184526020938401939091019060010161176e565b6001600160a01b0361179e826115bd565b168252602080830181830160005b60028110156117e1576117d3836117c2846115bd565b6001600160a01b0316815260200190565b9250908301906001016117ac565b50505050606081013560608301526117ff60808301608083016116df565b61014061181081840182840161175a565b5061018061182281840182840161175a565b506101c081810135908301526101e090810135910152565b6001600160a01b0361184b826115bd565b16825260208101356020830152604080820160408401376080818101359083015260a0808201359083015260c0808201359083015260e090810135910152565b6001600160a01b0361189c826115bd565b16825260208181013590830152604090810135910152565b8035825260208101358015158082146118cc57600080fd5b80602085015250505050565b60c081016118e6828461188b565b606083810135908301526001600160a01b03611904608085016115bd565b16608083015260a083013560a083015292915050565b6040810161192882846118b4565b92915050565b610140810161193d828461183a565b610100838101359083015261012092830135929091019190915290565b6101208101611969828461183a565b6101008084013580151580821461197f57600080fd5b808386015250505092915050565b610240810161199c828461178d565b61020083810135908301526102206001600160a01b036119bd8286016115bd565b16818401525092915050565b81358152604081016001600160a01b036119e5602085016115bd565b16602083015292915050565b828152610220810161160a602083018461178d565b82815281516001600160a01b031660208083019190915282810151610220830191906040840160005b6002811015611a575782516001600160a01b0316825260208201928401929150600101611a2f565b50505050604083015160808301526060830151611a7760a084018261170f565b506080830151611a8b61016084018261176a565b5060a0830151611a9f6101a084018261176a565b5060c08301516101e083015260e08301516102008301529392505050565b828152610120810161160a602083018461183a565b60006101208201905083825260018060a01b038351166020830152602083015160408301526040830151611b09606084018261176a565b50606083015160a0830152608083015160c083015260a083015160e083015260c08301516101008301529392505050565b8281526080810161160a602083018461188b565b8281526080810161160a602083018480516001600160a01b0316825260208082015190830152604090810151910152565b60008219821115611b9257611b92611bc9565b500190565b600082821015611ba957611ba9611bc9565b500390565b6000600019821415611bc257611bc2611bc9565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220bed2ad9433f1c4ec73ec9b7b8de9bc1e6c080f7d02756d0d88d834f2be5f9f2864736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

