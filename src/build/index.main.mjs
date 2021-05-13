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
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc6 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc5, ctc1, ctc1, ctc1]);
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc12 = stdlib.T_Tuple([ctc0, ctc1, ctc1]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc14 = stdlib.T_Tuple([ctc1, ctc0, ctc11, ctc1, ctc13, ctc5, ctc5, ctc1, ctc1]);
  const ctc15 = stdlib.T_Tuple([ctc1, ctc0, ctc11, ctc1, ctc13, ctc5, ctc5, ctc1]);
  
  
  const v18 = await ctc.creationTime();
  
  const v20 = ctc.selfAddress('Admin', false, stdlib.checkedBigNumberify('./index.rsh:33:23:application', stdlib.UInt_max, 19));
  
  
  const txn1 = await (ctc.sendrecv(1, 1, stdlib.checkedBigNumberify('./index.rsh:37:19:dot', stdlib.UInt_max, 0), [ctc1, ctc0], [v18, v20], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:37:19:dot', stdlib.UInt_max, 0), v18]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:37:19:dot', stdlib.UInt_max, 0)]);
    const [v23] = txn1.data;
    const v25 = txn1.time;
    const v22 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v62 = [v23, v23];
    const v63 = [v23, stdlib.checkedBigNumberify('./index.rsh:39:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:39:44:decimal', stdlib.UInt_max, 0)];
    const v65 = [v63, v63];
    const v66 = [stdlib.checkedBigNumberify('./index.rsh:43:108:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:43:108:decimal', stdlib.UInt_max, 0)];
    const v58 = v62;
    const v59 = stdlib.checkedBigNumberify('./index.rsh:43:87:decimal', stdlib.UInt_max, 0);
    const v60 = v65;
    const v61 = v66;
    const v573 = v25;
    const v574 = v18;
    const v575 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
    
    if ((() => {
      const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:45:31:decimal', stdlib.UInt_max, 1));
      
      return v69;})()) {
      sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v573, v575]);
      sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v575]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v339 = stdlib.add(v574, stdlib.checkedBigNumberify('./index.rsh:101:63:decimal', stdlib.UInt_max, 15));
      const v352 = v66;
      const v353 = stdlib.checkedBigNumberify('./index.rsh:103:80:decimal', stdlib.UInt_max, 0);
      const v576 = v573;
      const v577 = v574;
      const v578 = v575;
      
      if ((() => {
        const v359 = stdlib.gt(v339, v577);
        
        return v359;})()) {
        const v421 = stdlib.sub(v339, v577);
        sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v576, v578]);
        sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v578]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        }
      else {
        sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v576, v578]);
        sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v578]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        }}
    return sim_r;
    })));
  const [v23] = txn1.data;
  const v25 = txn1.time;
  const v22 = txn1.from;
  ;
  const v62 = [v23, v23];
  const v63 = [v23, stdlib.checkedBigNumberify('./index.rsh:39:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:39:44:decimal', stdlib.UInt_max, 0)];
  const v65 = [v63, v63];
  const v66 = [stdlib.checkedBigNumberify('./index.rsh:43:108:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:43:108:decimal', stdlib.UInt_max, 0)];
  let v58 = v62;
  let v59 = stdlib.checkedBigNumberify('./index.rsh:43:87:decimal', stdlib.UInt_max, 0);
  let v60 = v65;
  let v61 = v66;
  let v573 = v25;
  let v574 = v18;
  let v575 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:45:31:decimal', stdlib.UInt_max, 1));
    
    return v69;})()) {
    const txn2 = await (ctc.recv(9, 1, [ctc2], false, false));
    const [v296] = txn2.data;
    const v300 = txn2.time;
    const v295 = txn2.from;
    ;
    const v302 = v296[stdlib.checkedBigNumberify('./index.rsh:58:65:array ref', stdlib.UInt_max, 1)];
    const v303 = v296[stdlib.checkedBigNumberify('./index.rsh:58:83:array ref', stdlib.UInt_max, 0)];
    const v304 = [v302, v59, v303];
    const v306 = stdlib.Array_set(v60, v59, v304);
    const v309 = stdlib.Array_set(v58, v59, v302);
    const v322 = v58.reduce((v315, v316) => {
      const v318 = stdlib.addressEq(v302, v316);
      const v319 = v318 ? true : false;
      const v320 = v315 ? v315 : v319;
      
      return v320;}, false)
    const v325 = stdlib.add(v59, stdlib.checkedBigNumberify('./index.rsh:65:125:decimal', stdlib.UInt_max, 1));
    const v328 = stdlib.Array_set(v61, v59, v303);
    const v329 = [v60, v58, v59, v61];
    const v330 = [v306, v309, v325, v328];
    const v331 = v322 ? v329 : v330;
    const v333 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 0)];
    const v334 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 1)];
    const v335 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 2)];
    const v336 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 3)];
    const cv58 = v334;
    const cv59 = v335;
    const cv60 = v333;
    const cv61 = v336;
    const cv573 = v300;
    const cv574 = v573;
    const cv575 = v575;
    
    v58 = cv58;
    v59 = cv59;
    v60 = cv60;
    v61 = cv61;
    v573 = cv573;
    v574 = cv574;
    v575 = cv575;
    
    continue;
    }
  const v339 = stdlib.add(v574, stdlib.checkedBigNumberify('./index.rsh:101:63:decimal', stdlib.UInt_max, 15));
  let v352 = v66;
  let v353 = stdlib.checkedBigNumberify('./index.rsh:103:80:decimal', stdlib.UInt_max, 0);
  let v576 = v573;
  let v577 = v574;
  let v578 = v575;
  
  while ((() => {
    const v359 = stdlib.gt(v339, v577);
    
    return v359;})()) {
    const v421 = stdlib.sub(v339, v577);
    const txn2 = await (ctc.recv(7, 1, [ctc3], false, v421));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(8, 0, stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 5), [ctc0, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1], [v22, v339, v352, v353, v421, v576, v578], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v576, v578]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v578]);
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
        const cv576 = v426;
        const cv577 = v576;
        const cv578 = v578;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v576 = cv576;
          const v577 = cv577;
          const v578 = cv578;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v577);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v577);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v578]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v578]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
      const cv576 = v426;
      const cv577 = v576;
      const cv578 = v578;
      
      v352 = cv352;
      v353 = cv353;
      v576 = cv576;
      v577 = cv577;
      v578 = cv578;
      
      continue;
      }
    else {
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:115:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v578, v391);
      ;
      let v396;
      const v397 = v389[stdlib.checkedBigNumberify('./index.rsh:117:35:array ref', stdlib.UInt_max, 0)];
      const v398 = stdlib.ge(v397, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, 2));
      if (v398) {
        const v403 = stdlib.sub(v394, v391);
        ;
        const v415 = [v352, v353];
        v396 = v415;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv576 = v395;
        const cv577 = v576;
        const cv578 = v403;
        
        v352 = cv352;
        v353 = cv353;
        v576 = cv576;
        v577 = cv577;
        v578 = cv578;
        
        continue;}
      else {
        const v408 = v352[v397];
        const v409 = stdlib.add(v408, stdlib.checkedBigNumberify('./index.rsh:122:76:decimal', stdlib.UInt_max, 1));
        const v411 = stdlib.Array_set(v352, v397, v409);
        const v413 = stdlib.add(v353, v391);
        const v416 = [v411, v413];
        v396 = v416;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv576 = v395;
        const cv577 = v576;
        const cv578 = v394;
        
        v352 = cv352;
        v353 = cv353;
        v576 = cv576;
        v577 = cv577;
        v578 = cv578;
        
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
      
      v544 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
      
      break;
      }
    case 'Some': {
      const v548 = v538[1];
      v544 = v548;
      
      break;
      }
    }
  const v554 = v60[v544];
  const v555 = v554[stdlib.checkedBigNumberify('./index.rsh:146:55:array ref', stdlib.UInt_max, 2)];
  const v558 = v554[stdlib.checkedBigNumberify('./index.rsh:147:57:array ref', stdlib.UInt_max, 0)];
  
  
  const txn2 = await (ctc.sendrecv(6, 3, stdlib.checkedBigNumberify('./index.rsh:151:19:dot', stdlib.UInt_max, 1), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1], [v22, v576, v578, v555, v558, v544], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1, ctc0, ctc1], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:151:19:dot', stdlib.UInt_max, 5), v22, v576, v578]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:151:19:dot', stdlib.UInt_max, 5), v22, v578]);
    const [v560, v561, v562] = txn2.data;
    const v565 = txn2.time;
    const v559 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v564 = stdlib.addressEq(v22, v559);
    stdlib.assert(v564, {
      at: './index.rsh:151:19:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    sim_r.txns.push({
      amt: v578,
      kind: 'from',
      to: v561,
      tok: undefined
      });
    sim_r.txns.push({
      kind: 'halt',
      tok: undefined
      })
    sim_r.nextSt = stdlib.digest(ctc10, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc10, []);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:154:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = true;
    
    return sim_r;
    })));
  const [v560, v561, v562] = txn2.data;
  const v565 = txn2.time;
  const v559 = txn2.from;
  ;
  const v564 = stdlib.addressEq(v22, v559);
  stdlib.assert(v564, {
    at: './index.rsh:151:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
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
  
  
  const v18 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v23] = txn1.data;
  const v25 = txn1.time;
  const v22 = txn1.from;
  ;
  const v62 = [v23, v23];
  const v63 = [v23, stdlib.checkedBigNumberify('./index.rsh:39:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:39:44:decimal', stdlib.UInt_max, 0)];
  const v65 = [v63, v63];
  const v66 = [stdlib.checkedBigNumberify('./index.rsh:43:108:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:43:108:decimal', stdlib.UInt_max, 0)];
  let v58 = v62;
  let v59 = stdlib.checkedBigNumberify('./index.rsh:43:87:decimal', stdlib.UInt_max, 0);
  let v60 = v65;
  let v61 = v66;
  let v573 = v25;
  let v574 = v18;
  let v575 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:45:31:decimal', stdlib.UInt_max, 1));
    
    return v69;})()) {
    const v182 = ctc.selfAddress('Nominee', true, stdlib.checkedBigNumberify('./index.rsh:43:27:application', stdlib.UInt_max, 181));
    const v185 = stdlib.protect(ctc1, await interact.getParams(v182), {
      at: './index.rsh:48:64:application',
      fs: ['at ./index.rsh:43:27:application call to [unknown function] (defined at: ./index.rsh:47:21:function exp)', 'at ./index.rsh:43:27:application call to [unknown function] (defined at: ./index.rsh:43:27:function exp)'],
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
        
        v282 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
        
        break;
        }
      case 'Some': {
        const v286 = v276[1];
        v282 = v286;
        
        break;
        }
      }
    
    const v292 = [v185, v182];
    
    const txn2 = await (ctc.sendrecv(9, 1, stdlib.checkedBigNumberify('./index.rsh:43:27:dot', stdlib.UInt_max, 6), [ctc0, ctc4, ctc1, ctc6, ctc7, ctc7, ctc1, ctc1, ctc2], [v22, v58, v59, v60, v61, v66, v573, v575, v292], [stdlib.checkedBigNumberify('./index.rsh:55:28:decimal', stdlib.UInt_max, 0), []], [ctc2], true, false, false, (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:43:27:dot', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v573, v575]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:43:27:dot', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v575]);
      const [v296] = txn2.data;
      const v300 = txn2.time;
      const v295 = txn2.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:55:28:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v302 = v296[stdlib.checkedBigNumberify('./index.rsh:58:65:array ref', stdlib.UInt_max, 1)];
      const v303 = v296[stdlib.checkedBigNumberify('./index.rsh:58:83:array ref', stdlib.UInt_max, 0)];
      const v304 = [v302, v59, v303];
      const v306 = stdlib.Array_set(v60, v59, v304);
      const v309 = stdlib.Array_set(v58, v59, v302);
      const v322 = v58.reduce((v315, v316) => {
        const v318 = stdlib.addressEq(v302, v316);
        const v319 = v318 ? true : false;
        const v320 = v315 ? v315 : v319;
        
        return v320;}, false)
      const v325 = stdlib.add(v59, stdlib.checkedBigNumberify('./index.rsh:65:125:decimal', stdlib.UInt_max, 1));
      const v328 = stdlib.Array_set(v61, v59, v303);
      const v329 = [v60, v58, v59, v61];
      const v330 = [v306, v309, v325, v328];
      const v331 = v322 ? v329 : v330;
      const v333 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 0)];
      const v334 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 1)];
      const v335 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 2)];
      const v336 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 3)];
      const cv58 = v334;
      const cv59 = v335;
      const cv60 = v333;
      const cv61 = v336;
      const cv573 = v300;
      const cv574 = v573;
      const cv575 = v575;
      
      (() => {
        const v58 = cv58;
        const v59 = cv59;
        const v60 = cv60;
        const v61 = cv61;
        const v573 = cv573;
        const v574 = cv574;
        const v575 = cv575;
        
        if ((() => {
          const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:45:31:decimal', stdlib.UInt_max, 1));
          
          return v69;})()) {
          sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v573, v575]);
          sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v575]);
          sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          const v339 = stdlib.add(v574, stdlib.checkedBigNumberify('./index.rsh:101:63:decimal', stdlib.UInt_max, 15));
          const v352 = v66;
          const v353 = stdlib.checkedBigNumberify('./index.rsh:103:80:decimal', stdlib.UInt_max, 0);
          const v576 = v573;
          const v577 = v574;
          const v578 = v575;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v577);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v577);
            sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v578]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v578]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }}})();
      return sim_r;
      })));
    const [v296] = txn2.data;
    const v300 = txn2.time;
    const v295 = txn2.from;
    ;
    const v302 = v296[stdlib.checkedBigNumberify('./index.rsh:58:65:array ref', stdlib.UInt_max, 1)];
    const v303 = v296[stdlib.checkedBigNumberify('./index.rsh:58:83:array ref', stdlib.UInt_max, 0)];
    const v304 = [v302, v59, v303];
    const v306 = stdlib.Array_set(v60, v59, v304);
    const v309 = stdlib.Array_set(v58, v59, v302);
    const v322 = v58.reduce((v315, v316) => {
      const v318 = stdlib.addressEq(v302, v316);
      const v319 = v318 ? true : false;
      const v320 = v315 ? v315 : v319;
      
      return v320;}, false)
    const v325 = stdlib.add(v59, stdlib.checkedBigNumberify('./index.rsh:65:125:decimal', stdlib.UInt_max, 1));
    const v328 = stdlib.Array_set(v61, v59, v303);
    const v329 = [v60, v58, v59, v61];
    const v330 = [v306, v309, v325, v328];
    const v331 = v322 ? v329 : v330;
    const v333 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 0)];
    const v334 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 1)];
    const v335 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 2)];
    const v336 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 3)];
    const cv58 = v334;
    const cv59 = v335;
    const cv60 = v333;
    const cv61 = v336;
    const cv573 = v300;
    const cv574 = v573;
    const cv575 = v575;
    
    v58 = cv58;
    v59 = cv59;
    v60 = cv60;
    v61 = cv61;
    v573 = cv573;
    v574 = cv574;
    v575 = cv575;
    
    continue;
    }
  const v339 = stdlib.add(v574, stdlib.checkedBigNumberify('./index.rsh:101:63:decimal', stdlib.UInt_max, 15));
  let v352 = v66;
  let v353 = stdlib.checkedBigNumberify('./index.rsh:103:80:decimal', stdlib.UInt_max, 0);
  let v576 = v573;
  let v577 = v574;
  let v578 = v575;
  
  while ((() => {
    const v359 = stdlib.gt(v339, v577);
    
    return v359;})()) {
    const v421 = stdlib.sub(v339, v577);
    const txn2 = await (ctc.recv(7, 1, [ctc14], false, v421));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(8, 0, stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 5), [ctc0, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1], [v22, v339, v352, v353, v421, v576, v578], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v576, v578]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v578]);
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
        const cv576 = v426;
        const cv577 = v576;
        const cv578 = v578;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v576 = cv576;
          const v577 = cv577;
          const v578 = cv578;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v577);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v577);
            sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v578]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v578]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
      const cv576 = v426;
      const cv577 = v576;
      const cv578 = v578;
      
      v352 = cv352;
      v353 = cv353;
      v576 = cv576;
      v577 = cv577;
      v578 = cv578;
      
      continue;
      }
    else {
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:115:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v578, v391);
      ;
      let v396;
      const v397 = v389[stdlib.checkedBigNumberify('./index.rsh:117:35:array ref', stdlib.UInt_max, 0)];
      const v398 = stdlib.ge(v397, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, 2));
      if (v398) {
        const v403 = stdlib.sub(v394, v391);
        ;
        const v415 = [v352, v353];
        v396 = v415;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv576 = v395;
        const cv577 = v576;
        const cv578 = v403;
        
        v352 = cv352;
        v353 = cv353;
        v576 = cv576;
        v577 = cv577;
        v578 = cv578;
        
        continue;}
      else {
        const v408 = v352[v397];
        const v409 = stdlib.add(v408, stdlib.checkedBigNumberify('./index.rsh:122:76:decimal', stdlib.UInt_max, 1));
        const v411 = stdlib.Array_set(v352, v397, v409);
        const v413 = stdlib.add(v353, v391);
        const v416 = [v411, v413];
        v396 = v416;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv576 = v395;
        const cv577 = v576;
        const cv578 = v394;
        
        v352 = cv352;
        v353 = cv353;
        v576 = cv576;
        v577 = cv577;
        v578 = cv578;
        
        continue;}}
    }
  const txn2 = await (ctc.recv(6, 3, [ctc1, ctc0, ctc1], false, false));
  const [v560, v561, v562] = txn2.data;
  const v565 = txn2.time;
  const v559 = txn2.from;
  ;
  const v564 = stdlib.addressEq(v22, v559);
  stdlib.assert(v564, {
    at: './index.rsh:151:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Nominee'
    });
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
  
  
  const v18 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 1, [ctc0], false, false));
  const [v23] = txn1.data;
  const v25 = txn1.time;
  const v22 = txn1.from;
  ;
  const v62 = [v23, v23];
  const v63 = [v23, stdlib.checkedBigNumberify('./index.rsh:39:41:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:39:44:decimal', stdlib.UInt_max, 0)];
  const v65 = [v63, v63];
  const v66 = [stdlib.checkedBigNumberify('./index.rsh:43:108:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:43:108:decimal', stdlib.UInt_max, 0)];
  let v58 = v62;
  let v59 = stdlib.checkedBigNumberify('./index.rsh:43:87:decimal', stdlib.UInt_max, 0);
  let v60 = v65;
  let v61 = v66;
  let v573 = v25;
  let v574 = v18;
  let v575 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:45:31:decimal', stdlib.UInt_max, 1));
    
    return v69;})()) {
    const txn2 = await (ctc.recv(9, 1, [ctc2], false, false));
    const [v296] = txn2.data;
    const v300 = txn2.time;
    const v295 = txn2.from;
    ;
    const v302 = v296[stdlib.checkedBigNumberify('./index.rsh:58:65:array ref', stdlib.UInt_max, 1)];
    const v303 = v296[stdlib.checkedBigNumberify('./index.rsh:58:83:array ref', stdlib.UInt_max, 0)];
    const v304 = [v302, v59, v303];
    const v306 = stdlib.Array_set(v60, v59, v304);
    const v309 = stdlib.Array_set(v58, v59, v302);
    const v322 = v58.reduce((v315, v316) => {
      const v318 = stdlib.addressEq(v302, v316);
      const v319 = v318 ? true : false;
      const v320 = v315 ? v315 : v319;
      
      return v320;}, false)
    const v325 = stdlib.add(v59, stdlib.checkedBigNumberify('./index.rsh:65:125:decimal', stdlib.UInt_max, 1));
    const v328 = stdlib.Array_set(v61, v59, v303);
    const v329 = [v60, v58, v59, v61];
    const v330 = [v306, v309, v325, v328];
    const v331 = v322 ? v329 : v330;
    const v333 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 0)];
    const v334 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 1)];
    const v335 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 2)];
    const v336 = v331[stdlib.checkedBigNumberify('./index.rsh:42:19:array', stdlib.UInt_max, 3)];
    const cv58 = v334;
    const cv59 = v335;
    const cv60 = v333;
    const cv61 = v336;
    const cv573 = v300;
    const cv574 = v573;
    const cv575 = v575;
    
    v58 = cv58;
    v59 = cv59;
    v60 = cv60;
    v61 = cv61;
    v573 = cv573;
    v574 = cv574;
    v575 = cv575;
    
    continue;
    }
  const v339 = stdlib.add(v574, stdlib.checkedBigNumberify('./index.rsh:101:63:decimal', stdlib.UInt_max, 15));
  let v352 = v66;
  let v353 = stdlib.checkedBigNumberify('./index.rsh:103:80:decimal', stdlib.UInt_max, 0);
  let v576 = v573;
  let v577 = v574;
  let v578 = v575;
  
  while ((() => {
    const v359 = stdlib.gt(v339, v577);
    
    return v359;})()) {
    const v421 = stdlib.sub(v339, v577);
    const v377 = v61[stdlib.checkedBigNumberify('./index.rsh:108:81:array ref', stdlib.UInt_max, 0)];
    const v378 = v61[stdlib.checkedBigNumberify('./index.rsh:108:91:array ref', stdlib.UInt_max, 1)];
    const v379 = v352[stdlib.checkedBigNumberify('./index.rsh:108:102:array ref', stdlib.UInt_max, 0)];
    const v380 = v352[stdlib.checkedBigNumberify('./index.rsh:108:111:array ref', stdlib.UInt_max, 1)];
    const v381 = [v377, v378];
    const v382 = [v379, v380];
    const v383 = stdlib.protect(ctc3, await interact.shouldBuyTicket(v381, v382), {
      at: './index.rsh:108:73:application',
      fs: ['at ./index.rsh:103:56:application call to [unknown function] (defined at: ./index.rsh:107:25:function exp)', 'at ./index.rsh:103:56:application call to [unknown function] (defined at: ./index.rsh:103:56:function exp)'],
      msg: 'shouldBuyTicket',
      who: 'Voter'
      });
    
    const v386 = v383[stdlib.checkedBigNumberify('./index.rsh:115:38:array ref', stdlib.UInt_max, 1)];
    
    const txn2 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 5), [ctc0, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc3], [v22, v339, v352, v353, v421, v576, v578, v383], [v386, []], [ctc3], true, false, v421, (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v576, v578]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v578]);
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:115:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v578, v391);
      sim_r.txns.push({
        amt: v391,
        kind: 'to',
        tok: undefined
        });
      let v396;
      const v397 = v389[stdlib.checkedBigNumberify('./index.rsh:117:35:array ref', stdlib.UInt_max, 0)];
      const v398 = stdlib.ge(v397, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, 2));
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
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv576 = v395;
        const cv577 = v576;
        const cv578 = v403;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v576 = cv576;
          const v577 = cv577;
          const v578 = cv578;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v577);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v577);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v578]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v578]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();}
      else {
        const v408 = v352[v397];
        const v409 = stdlib.add(v408, stdlib.checkedBigNumberify('./index.rsh:122:76:decimal', stdlib.UInt_max, 1));
        const v411 = stdlib.Array_set(v352, v397, v409);
        const v413 = stdlib.add(v353, v391);
        const v416 = [v411, v413];
        v396 = v416;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv576 = v395;
        const cv577 = v576;
        const cv578 = v394;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v576 = cv576;
          const v577 = cv577;
          const v578 = cv578;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v577);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v577);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v578]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v578]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();}
      return sim_r;
      })));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(8, 0, stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 5), [ctc0, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1], [v22, v339, v352, v353, v421, v576, v578], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v576, v578]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v578]);
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
        const cv576 = v426;
        const cv577 = v576;
        const cv578 = v578;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v576 = cv576;
          const v577 = cv577;
          const v578 = cv578;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v577);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v577);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v339, v352, v353, v421, v578]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v576, v578]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v578]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:143:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
      const cv576 = v426;
      const cv577 = v576;
      const cv578 = v578;
      
      v352 = cv352;
      v353 = cv353;
      v576 = cv576;
      v577 = cv577;
      v578 = cv578;
      
      continue;
      }
    else {
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:115:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v578, v391);
      ;
      let v396;
      const v397 = v389[stdlib.checkedBigNumberify('./index.rsh:117:35:array ref', stdlib.UInt_max, 0)];
      const v398 = stdlib.ge(v397, stdlib.checkedBigNumberify('./index.rsh:117:40:decimal', stdlib.UInt_max, 2));
      if (v398) {
        const v403 = stdlib.sub(v394, v391);
        ;
        const v415 = [v352, v353];
        v396 = v415;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv576 = v395;
        const cv577 = v576;
        const cv578 = v403;
        
        v352 = cv352;
        v353 = cv353;
        v576 = cv576;
        v577 = cv577;
        v578 = cv578;
        
        continue;}
      else {
        const v408 = v352[v397];
        const v409 = stdlib.add(v408, stdlib.checkedBigNumberify('./index.rsh:122:76:decimal', stdlib.UInt_max, 1));
        const v411 = stdlib.Array_set(v352, v397, v409);
        const v413 = stdlib.add(v353, v391);
        const v416 = [v411, v413];
        v396 = v416;
        const v417 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 0)];
        const v418 = v396[stdlib.checkedBigNumberify('./index.rsh:103:19:array', stdlib.UInt_max, 1)];
        const cv352 = v417;
        const cv353 = v418;
        const cv576 = v395;
        const cv577 = v576;
        const cv578 = v394;
        
        v352 = cv352;
        v353 = cv353;
        v576 = cv576;
        v577 = cv577;
        v578 = cv578;
        
        continue;}}
    }
  const txn2 = await (ctc.recv(6, 3, [ctc1, ctc0, ctc1], false, false));
  const [v560, v561, v562] = txn2.data;
  const v565 = txn2.time;
  const v559 = txn2.from;
  ;
  const v564 = stdlib.addressEq(v22, v559);
  stdlib.assert(v564, {
    at: './index.rsh:151:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Voter'
    });
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
// "./index.rsh:37:19:dot"
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
int 1
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
int 15
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
// "./index.rsh:151:19:dot"
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
// "./index.rsh:151:19:dot"
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
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
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
int 6
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
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
// "./index.rsh:103:56:dot"
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
// "./index.rsh:103:56:dot"
// "[at ./index.rsh:103:56:application call to [unknown function] (defined at: ./index.rsh:103:56:function exp)]"
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
// "./index.rsh:43:27:dot"
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
int 1
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
int 15
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
                "name": "v576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v578",
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
                "name": "v560",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v561",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v562",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
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
                "name": "v576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v578",
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
                "internalType": "struct T23",
                "name": "v389",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
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
                "name": "v576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v578",
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
        "internalType": "struct T26",
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
                "name": "v573",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v575",
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
                "internalType": "struct T28",
                "name": "v296",
                "type": "tuple"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T30",
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
                "name": "v576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v578",
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
                "name": "v560",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v561",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v562",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
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
                "name": "v576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v578",
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
                "internalType": "struct T23",
                "name": "v389",
                "type": "tuple"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
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
                "name": "v576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v578",
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
        "internalType": "struct T26",
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
                "name": "v573",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v575",
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
                "internalType": "struct T28",
                "name": "v296",
                "type": "tuple"
              }
            ],
            "internalType": "struct T29",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T30",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611a18806100826000396000f3fe60806040526004361061004e5760003560e01c80630e02fe3b1461005a5780635589762b1461006f578063b87338b014610082578063ec2cc88414610095578063f864c4d6146100a857610055565b3661005557005b600080fd5b61006d610068366004611509565b6100bb565b005b61006d61007d366004611467565b610256565b61006d61009036600461148b565b61056e565b61006d6100a3366004611450565b610999565b61006d6100b6366004611479565b610a8d565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146100f857600080fd5b600080556101046110a7565b341561010f57600080fd5b61011f604083016020840161142f565b81516001600160a01b0391909116905261013f604083016020840161142f565b81516001600160a01b0391909116602091820152610163906040840190840161142f565b602082810180516001600160a01b039390931690925281516000908201819052825160409081018290528351818601805191909152935193518301939093526060840180518290525190910152517f3edc19012383f1a954d272136ca587df4f30f9b69fd94318a56658f3640102eb906101de9084906117cc565b60405180910390a16101ee6110e6565b8051339052606080830180518351602090810191909152845181850180519190915280516000920182905260408087015182519091015291518251909301929092528051436080909101528051853560a0909101525160c0015261025181610bbf565b505050565b60405161026a9060049083906020016118c0565b6040516020818303038152906040528051906020012060001c6000541461029057600080fd5b6000805561029c611106565b6102ae60a083013560c0840135611982565b43106102b957600080fd5b6102cc61012083013560e0840135611982565b815234610120830135146102df57600080fd5b60026101008301351061042857604051339061012084013580156108fc02916000818181858888f1935050505015801561031d573d6000803e3d6000fd5b50604080518082018252908084019060029083908390808284376000920191909152505050604080830180519290925281516080850135602091820152915191830191909152517fc214c7bfdbdfccfc54af64f671c11c59623337f162f877186319c2329711886590610391908490611731565b60405180910390a16103a161113a565b6103ae602084018461142f565b81516001600160a01b03909116905280516020808501359181019190915282810180515182840180519190915290518201518151909201919091528051436040909101525160c08401356060909101528151610410906101208501359061199a565b60208201516080015261042281610cc8565b5061056a565b60408051808201825261048e918085019060029083908390808284376000920191909152505050610100840135600160408601826002811061047a57634e487b7160e01b600052603260045260246000fd5b60200201356104899190611982565b610ddd565b6060820151526104a76101208301356080840135611982565b60608201805160209081019290925251908201526040517fc214c7bfdbdfccfc54af64f671c11c59623337f162f877186319c23297118865906104eb908490611731565b60405180910390a16104fb61113a565b610508602084018461142f565b81516001600160a01b0390911690528051602080850135918101919091528281018051518284018051919091529051820151815190920191909152805143604090910152805160c0850135606090910152825190516080015261025181610cc8565b5050565b6040516105829060029083906020016117f4565b6040516020818303038152906040528051906020012060001c600054146105a857600080fd5b600080556105b4611163565b34156105bf57600080fd5b6105d16102408301610220840161142f565b81516001600160a01b03909116905280516060830135602091820152815161020084013560409091015260009082018190525b60028110156106b65760208301816002811061063057634e487b7160e01b600052603260045260246000fd5b602002016020810190610643919061142f565b6001600160a01b0316604083015260208201516106975760408201516001600160a01b031661067a6102408501610220860161142f565b6001600160a01b03161461068f576000610692565b60015b61069d565b81602001515b15156020830152806106ae816119b1565b915050610604565b50602081015115156060820152604080518082019091526080830160026000835b82821015610703576106f46060830285013681900381019061149d565b815260200190600101906106d7565b50505050608082015152604080518082018252906020840190600290839083908082843760009201919091525050506080820180516020019190915251606083013560409182015280518082018252906101408401906002908390839080828437600092018290525060808086015160600194909452604080518082019091526107d19490935086019150600290835b828210156107bf576107b06060830285013681900381019061149d565b81526020019060010190610793565b50508451606087013592509050610e7b565b60a08201515260408051808201825261081b9160208501906002908390839080828437600092019190915250505060608401356108166102408601610220870161142f565b610eeb565b60a08201516020015261083360016060840135611982565b60a08201516040908101919091528051808201825261087891610140850190600290839083908082843760009201919091525050506060840135610200850135610ddd565b8160a00151606001819052508060600151610897578060a0015161089d565b80608001515b60c08201526040517f8400c30339f6628441ca54ee41b7d90613faa6c375dabda844e99fb7fe65a6bf906108d2908490611790565b60405180910390a16108e26110e6565b6108ef602084018461142f565b81516001600160a01b0390911690526040805180820182529061018085019060029083908390808284376000920191909152505082516020908101929092525060c080840180518301518385018051919091528151604090810151825190950194909452815151815190940193909352516060908101518351909101528151436080919091015281516101c086013560a0919091015290516101e085013591015261025181610bbf565b6040516109ad90600590839060200161193d565b6040516020818303038152906040528051906020012060001c600054146109d357600080fd5b6000805534156109e257600080fd5b336109f0602083018361142f565b6001600160a01b031614610a0357600080fd5b610a1360a082016080830161142f565b604080516001600160a01b0392909216919083013580156108fc02916000818181858888f19350505050158015610a4e573d6000803e3d6000fd5b507f83e534428f92bfcb95a8170bbd5cd7a87ec89ee978b81e96168024da7cb7429d81604051610a7e91906116ef565b60405180910390a16000805533ff5b604051610aa19060049083906020016118c0565b6040516020818303038152906040528051906020012060001c60005414610ac757600080fd5b60008055610add60a082013560c0830135611982565b431015610ae957600080fd5b3415610af457600080fd5b7f64753ae49552c8a37005f075c2e99dec920a5e974f60e40059e37ce9109615be81604051610b23919061175d565b60405180910390a1610b3361113a565b610b40602083018361142f565b81516001600160a01b0390911690528051602080840135910152604080518082018252908084019060029083908390808284376000920191909152505050602080830180519290925281516080808601359190920152815143604090910152815160c0850135606090910152905160e084013591015261056a81610cc8565b600181602001516020015111610c6d57610bd76111b2565b8151516001600160a01b031681526020808301805151828401528051820151604080850191909152815181015160608086019190915282510151608080860191909152855184015160a08601528251015160c08086019190915291519091015160e084015251610c4c91600291849101611809565b60408051601f19818403018152919052805160209091012060005550610cc5565b610c75611218565b81515181516001600160a01b0390911690528151602090810151825182015282018051608090810151835160400152815160a00151835160600152905160c0015182519091015261056a81610fa5565b50565b6040805160208101909152600081528160200151606001518260000151602001511115610d9957816020015160600151826000015160200151610d0b919061199a565b8152610d15611238565b8251516001600160a01b03168152825160209081015181830152808401805151604080850191909152815183015160608501528451608080860191909152825182015160a086015291519091015160c084015251610d78916004918491016118d5565b60408051601f1981840301815291905280516020909101206000555061056a565b610da1611279565b82515181516001600160a01b03909116905260208084018051604090810151845190930192909252516080015182519091015261025181611025565b610de56112a2565b60005b6002811015610e4d57848160028110610e1157634e487b7160e01b600052603260045260246000fd5b6020020151828260028110610e3657634e487b7160e01b600052603260045260246000fd5b602002015280610e45816119b1565b915050610de8565b5081818460028110610e6f57634e487b7160e01b600052603260045260246000fd5b60200201529392505050565b610e836112c0565b60005b6002811015610e4d57848160028110610eaf57634e487b7160e01b600052603260045260246000fd5b6020020151828260028110610ed457634e487b7160e01b600052603260045260246000fd5b602002015280610ee3816119b1565b915050610e86565b610ef36112a2565b60005b6002811015610f6957848160028110610f1f57634e487b7160e01b600052603260045260246000fd5b6020020151828260028110610f4457634e487b7160e01b600052603260045260246000fd5b6001600160a01b03909216602092909202015280610f61816119b1565b915050610ef6565b5081818460028110610f8b57634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209290920201529392505050565b610fad61113a565b81515181516001600160a01b039091169052815160600151610fd190600f90611982565b81516020908101919091528251810151818301805191909152805160009201919091528251604090810151825190910152825160609081015182519091015282516080908101519151015261056a81610cc8565b611052604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b031681528151602090810151818301528251604090810151818401525161108891600591849101611951565b60408051601f1981840301815291905280516020909101206000555050565b60405180608001604052806110ba6112a2565b81526020016110c76112ed565b81526020016110d46112c0565b81526020016110e16112a2565b905290565b60405180604001604052806110f9611317565b81526020016110e161133a565b604051806080016040528060008152602001611120611389565b815260200161112d611389565b81526020016110e1611389565b6040805160808101825260009181018281526060820192909252908152602081016110e16113a9565b6040518060e001604052806111766112ed565b81526000602082018190526040820181905260608201526080016111986113bc565b81526020016111a56113bc565b81526020016110e16113bc565b60405180610100016040528060006001600160a01b031681526020016111d66112a2565b8152602001600081526020016111ea6112c0565b81526020016111f76112a2565b81526020016112046112a2565b815260200160008152602001600081525090565b604051806040016040528061122b6113f0565b8152600060209091015290565b6040805160e081018252600080825260208201529081016112576112a2565b8152602001600081526020016000815260200160008152602001600081525090565b6040805160a081018252600091810182815260608201839052608082019290925290819061122b565b60405180604001604052806002906020820280368337509192915050565b60405180604001604052806002905b6112d76112ed565b8152602001906001900390816112cf5790505090565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b604051806040016040528060006001600160a01b031681526020016110e16112a2565b6040518060e0016040528061134d6112a2565b8152602001600081526020016113616112c0565b815260200161136e6112a2565b81526020016000815260200160008152602001600081525090565b604051806040016040528061139c6112a2565b8152602001600081525090565b6040518060a001604052806112576112a2565b60405180608001604052806113cf6112c0565b81526020016113dc6112a2565b8152602001600081526020016110e16112a2565b6040518060a0016040528060006001600160a01b0316815260200161136e6112a2565b80356001600160a01b038116811461142a57600080fd5b919050565b600060208284031215611440578081fd5b61144982611413565b9392505050565b600060c08284031215611461578081fd5b50919050565b60006101408284031215611461578081fd5b60006101208284031215611461578081fd5b60006102408284031215611461578081fd5b6000606082840312156114ae578081fd5b6040516060810181811067ffffffffffffffff821117156114dd57634e487b7160e01b83526041600452602483fd5b6040526114e983611413565b815260208301356020820152604083013560408201528091505092915050565b600060408284031215611461578081fd5b8060005b60028110156115445761153184836116c6565b606093840193919091019060010161151e565b50505050565b8060005b60028110156115445761157f84835180516001600160a01b0316825260208082015190830152604090810151910152565b606093909301926020919091019060010161154e565b6040818337600060408301525050565b8060005b60028110156115445781518452602093840193909101906001016115a9565b6001600160a01b036115d982611413565b168252602080830181830160005b600281101561161c5761160e836115fd84611413565b6001600160a01b0316815260200190565b9250908301906001016115e7565b505050506060810135606083015261163a608083016080830161151a565b61014061164b818401828401611595565b5061018061165d818401828401611595565b506101c081810135908301526101e090810135910152565b6001600160a01b0361168682611413565b16825260208101356020830152604080820160408401376080818101359083015260a0808201359083015260c0808201359083015260e090810135910152565b6001600160a01b036116d782611413565b16825260208181013590830152604090810135910152565b60c081016116fd82846116c6565b606083810135908301526001600160a01b0361171b60808501611413565b16608083015260a083013560a083015292915050565b61014081016117408284611675565b610100838101359083015261012092830135929091019190915290565b610120810161176c8284611675565b6101008084013580151580821461178257600080fd5b808386015250505092915050565b610240810161179f82846115c8565b61020083810135908301526102206001600160a01b036117c0828601611413565b16818401525092915050565b81358152604081016001600160a01b036117e860208501611413565b16602083015292915050565b828152610220810161144960208301846115c8565b82815281516001600160a01b031660208083019190915282810151610220830191906040840160005b600281101561185a5782516001600160a01b0316825260208201928401929150600101611832565b5050505060408301516080830152606083015161187a60a084018261154a565b50608083015161188e6101608401826115a5565b5060a08301516118a26101a08401826115a5565b5060c08301516101e083015260e08301516102008301529392505050565b82815261012081016114496020830184611675565b60006101208201905083825260018060a01b03835116602083015260208301516040830152604083015161190c60608401826115a5565b50606083015160a0830152608083015160c083015260a083015160e083015260c08301516101008301529392505050565b8281526080810161144960208301846116c6565b82815260808101611449602083018480516001600160a01b0316825260208082015190830152604090810151910152565b60008219821115611995576119956119cc565b500190565b6000828210156119ac576119ac6119cc565b500390565b60006000198214156119c5576119c56119cc565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220b77437f2b8fcca1c695ea4207d561bfaa4693446c9df2dc2c47ddbd2a616522364736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

