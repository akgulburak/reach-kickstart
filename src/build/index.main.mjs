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
    const v591 = v25;
    const v592 = v18;
    const v593 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
    
    if ((() => {
      const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, 1));
      
      return v69;})()) {
      sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v591, v593]);
      sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v593]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v344 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:105:63:decimal', stdlib.UInt_max, 6));
      const v357 = v66;
      const v358 = stdlib.checkedBigNumberify('./index.rsh:107:80:decimal', stdlib.UInt_max, 0);
      const v594 = v591;
      const v595 = v592;
      const v596 = v593;
      
      if ((() => {
        const v364 = stdlib.gt(v344, v595);
        
        return v364;})()) {
        const v426 = stdlib.sub(v344, v595);
        sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v594, v596]);
        sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v596]);
        sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        }
      else {
        sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v594, v596]);
        sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v596]);
        sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
  let v591 = v25;
  let v592 = v18;
  let v593 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, 1));
    
    return v69;})()) {
    const txn2 = await (ctc.recv(11, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, 20)));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv(12, 0, [], false, false));
      const [] = txn3.data;
      const v340 = txn3.time;
      const v338 = txn3.from;
      ;
      const cv58 = v58;
      const cv59 = stdlib.checkedBigNumberify('./index.rsh:72:42:decimal', stdlib.UInt_max, 6);
      const cv60 = v60;
      const cv61 = v61;
      const cv591 = v340;
      const cv592 = v591;
      const cv593 = v593;
      
      v58 = cv58;
      v59 = cv59;
      v60 = cv60;
      v61 = cv61;
      v591 = cv591;
      v592 = cv592;
      v593 = cv593;
      
      continue;
      }
    else {
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
      const cv591 = v300;
      const cv592 = v591;
      const cv593 = v593;
      
      v58 = cv58;
      v59 = cv59;
      v60 = cv60;
      v61 = cv61;
      v591 = cv591;
      v592 = cv592;
      v593 = cv593;
      
      continue;}
    }
  const v344 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:105:63:decimal', stdlib.UInt_max, 6));
  let v357 = v66;
  let v358 = stdlib.checkedBigNumberify('./index.rsh:107:80:decimal', stdlib.UInt_max, 0);
  let v594 = v591;
  let v595 = v592;
  let v596 = v593;
  
  while ((() => {
    const v364 = stdlib.gt(v344, v595);
    
    return v364;})()) {
    const v426 = stdlib.sub(v344, v595);
    const txn2 = await (ctc.recv(9, 1, [ctc3], false, v426));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv(10, 0, [], false, false));
      const [] = txn3.data;
      const v431 = txn3.time;
      const v429 = txn3.from;
      ;
      const cv357 = v357;
      const cv358 = v358;
      const cv594 = v431;
      const cv595 = v594;
      const cv596 = v596;
      
      v357 = cv357;
      v358 = cv358;
      v594 = cv594;
      v595 = cv595;
      v596 = cv596;
      
      continue;
      }
    else {
      const [v394] = txn2.data;
      const v400 = txn2.time;
      const v393 = txn2.from;
      const v396 = v394[stdlib.checkedBigNumberify('./index.rsh:119:38:array ref', stdlib.UInt_max, 1)];
      const v399 = stdlib.add(v596, v396);
      ;
      let v401;
      const v402 = v394[stdlib.checkedBigNumberify('./index.rsh:121:35:array ref', stdlib.UInt_max, 0)];
      const v403 = stdlib.ge(v402, stdlib.checkedBigNumberify('./index.rsh:121:40:decimal', stdlib.UInt_max, 2));
      if (v403) {
        const v408 = stdlib.sub(v399, v396);
        ;
        const v420 = [v357, v358];
        v401 = v420;
        const v422 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 0)];
        const v423 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 1)];
        const cv357 = v422;
        const cv358 = v423;
        const cv594 = v400;
        const cv595 = v594;
        const cv596 = v408;
        
        v357 = cv357;
        v358 = cv358;
        v594 = cv594;
        v595 = cv595;
        v596 = cv596;
        
        continue;}
      else {
        const v413 = v357[v402];
        const v414 = stdlib.add(v413, stdlib.checkedBigNumberify('./index.rsh:126:76:decimal', stdlib.UInt_max, 1));
        const v416 = stdlib.Array_set(v357, v402, v414);
        const v418 = stdlib.add(v358, v396);
        const v421 = [v416, v418];
        v401 = v421;
        const v422 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 0)];
        const v423 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 1)];
        const cv357 = v422;
        const cv358 = v423;
        const cv594 = v400;
        const cv595 = v594;
        const cv596 = v399;
        
        v357 = cv357;
        v358 = cv358;
        v594 = cv594;
        v595 = cv595;
        v596 = cv596;
        
        continue;}}
    }
  const v451 = v357.reduce((v443, v444) => {
    const v447 = stdlib.gt(v444, v443);
    const v449 = v447 ? v444 : v443;
    
    return v449;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
  const v460 = ['None', null];
  const v486 = v357[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
  const v487 = v357[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
  const v509 = stdlib.eq(v486, v451);
  const v513 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
  const v514 = [v513, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
  const v516 = [v460, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
  const v517 = v509 ? v514 : v516;
  const v522 = v517[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
  const v523 = v517[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
  let v524;
  switch (v522[0]) {
    case 'None': {
      
      const v527 = stdlib.eq(v487, v451);
      const v531 = stdlib.add(v523, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
      const v532 = ['Some', v523];
      const v533 = [v532, v523];
      const v534 = [v522, v531];
      const v535 = v527 ? v533 : v534;
      v524 = v535;
      
      break;
      }
    case 'Some': {
      const v538 = v522[1];
      v524 = v517;
      
      break;
      }
    }
  const v543 = v524[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
  let v549;
  switch (v543[0]) {
    case 'None': {
      
      v549 = stdlib.checkedBigNumberify('./index.rsh:43:57:decimal', stdlib.UInt_max, 0);
      
      break;
      }
    case 'Some': {
      const v553 = v543[1];
      v549 = v553;
      
      break;
      }
    }
  const v559 = v60[v549];
  const v560 = v559[stdlib.checkedBigNumberify('./index.rsh:153:55:array ref', stdlib.UInt_max, 2)];
  const v563 = v559[stdlib.checkedBigNumberify('./index.rsh:154:57:array ref', stdlib.UInt_max, 0)];
  stdlib.protect(ctc4, await interact.update(v560, v358), {
    at: './index.rsh:155:59:application',
    fs: ['at ./index.rsh:151:23:application call to [unknown function] (defined at: ./index.rsh:151:27:function exp)'],
    msg: 'update',
    who: 'Admin'
    });
  
  
  const txn2 = await (ctc.sendrecv(6, 3, stdlib.checkedBigNumberify('./index.rsh:159:19:dot', stdlib.UInt_max, 1), [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1], [v22, v594, v596, v560, v563, v549], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1, ctc0, ctc1], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:159:19:dot', stdlib.UInt_max, 5), v22, v594, v596]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:159:19:dot', stdlib.UInt_max, 5), v22, v596]);
    const [v566, v567, v568] = txn2.data;
    const v571 = txn2.time;
    const v565 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v570 = stdlib.addressEq(v22, v565);
    stdlib.assert(v570, {
      at: './index.rsh:159:19:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    sim_r.txns.push({
      amt: v596,
      kind: 'from',
      to: v567,
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:163:21:after expr stmt semicolon', stdlib.UInt_max, 6), v571]);
    sim_r.nextSt_noTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:163:21:after expr stmt semicolon', stdlib.UInt_max, 6)]);
    sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:163:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v566, v567, v568] = txn2.data;
  const v571 = txn2.time;
  const v565 = txn2.from;
  ;
  const v570 = stdlib.addressEq(v22, v565);
  stdlib.assert(v570, {
    at: './index.rsh:159:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  ;
  const txn3 = await (ctc.recv(7, 0, [], false, false));
  const [] = txn3.data;
  const v582 = txn3.time;
  const v580 = txn3.from;
  ;
  const txn4 = await (ctc.recv(8, 0, [], false, false));
  const [] = txn4.data;
  const v588 = txn4.time;
  const v586 = txn4.from;
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
  let v591 = v25;
  let v592 = v18;
  let v593 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, 1));
    
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
    
    const txn2 = await (ctc.sendrecv(11, 1, stdlib.checkedBigNumberify('./index.rsh:46:27:dot', stdlib.UInt_max, 6), [ctc0, ctc4, ctc1, ctc6, ctc7, ctc7, ctc1, ctc1, ctc2], [v22, v58, v59, v60, v61, v66, v591, v593, v292], [stdlib.checkedBigNumberify('./index.rsh:58:28:decimal', stdlib.UInt_max, 0), []], [ctc2], true, false, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, 20), (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:46:27:dot', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v591, v593]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:46:27:dot', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v593]);
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
      const cv591 = v300;
      const cv592 = v591;
      const cv593 = v593;
      
      (() => {
        const v58 = cv58;
        const v59 = cv59;
        const v60 = cv60;
        const v61 = cv61;
        const v591 = cv591;
        const v592 = cv592;
        const v593 = cv593;
        
        if ((() => {
          const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, 1));
          
          return v69;})()) {
          sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v591, v593]);
          sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v593]);
          sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          const v344 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:105:63:decimal', stdlib.UInt_max, 6));
          const v357 = v66;
          const v358 = stdlib.checkedBigNumberify('./index.rsh:107:80:decimal', stdlib.UInt_max, 0);
          const v594 = v591;
          const v595 = v592;
          const v596 = v593;
          
          if ((() => {
            const v364 = stdlib.gt(v344, v595);
            
            return v364;})()) {
            const v426 = stdlib.sub(v344, v595);
            sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v594, v596]);
            sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v596]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v594, v596]);
            sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v596]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }}})();
      return sim_r;
      })));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(12, 0, stdlib.checkedBigNumberify('./index.rsh:71:25:dot', stdlib.UInt_max, 6), [ctc0, ctc4, ctc1, ctc6, ctc7, ctc7, ctc1, ctc1], [v22, v58, v59, v60, v61, v66, v591, v593], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:71:25:dot', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v591, v593]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:71:25:dot', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v593]);
        const [] = txn3.data;
        const v340 = txn3.time;
        const v338 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv58 = v58;
        const cv59 = stdlib.checkedBigNumberify('./index.rsh:72:42:decimal', stdlib.UInt_max, 6);
        const cv60 = v60;
        const cv61 = v61;
        const cv591 = v340;
        const cv592 = v591;
        const cv593 = v593;
        
        (() => {
          const v58 = cv58;
          const v59 = cv59;
          const v60 = cv60;
          const v61 = cv61;
          const v591 = cv591;
          const v592 = cv592;
          const v593 = cv593;
          
          if ((() => {
            const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, 1));
            
            return v69;})()) {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v591, v593]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v593]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:46:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v344 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:105:63:decimal', stdlib.UInt_max, 6));
            const v357 = v66;
            const v358 = stdlib.checkedBigNumberify('./index.rsh:107:80:decimal', stdlib.UInt_max, 0);
            const v594 = v591;
            const v595 = v592;
            const v596 = v593;
            
            if ((() => {
              const v364 = stdlib.gt(v344, v595);
              
              return v364;})()) {
              const v426 = stdlib.sub(v344, v595);
              sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v594, v596]);
              sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v596]);
              sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              }
            else {
              sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v594, v596]);
              sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v596]);
              sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              }}})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v340 = txn3.time;
      const v338 = txn3.from;
      ;
      const cv58 = v58;
      const cv59 = stdlib.checkedBigNumberify('./index.rsh:72:42:decimal', stdlib.UInt_max, 6);
      const cv60 = v60;
      const cv61 = v61;
      const cv591 = v340;
      const cv592 = v591;
      const cv593 = v593;
      
      v58 = cv58;
      v59 = cv59;
      v60 = cv60;
      v61 = cv61;
      v591 = cv591;
      v592 = cv592;
      v593 = cv593;
      
      continue;
      }
    else {
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
      const cv591 = v300;
      const cv592 = v591;
      const cv593 = v593;
      
      v58 = cv58;
      v59 = cv59;
      v60 = cv60;
      v61 = cv61;
      v591 = cv591;
      v592 = cv592;
      v593 = cv593;
      
      continue;}
    }
  const v344 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:105:63:decimal', stdlib.UInt_max, 6));
  let v357 = v66;
  let v358 = stdlib.checkedBigNumberify('./index.rsh:107:80:decimal', stdlib.UInt_max, 0);
  let v594 = v591;
  let v595 = v592;
  let v596 = v593;
  
  while ((() => {
    const v364 = stdlib.gt(v344, v595);
    
    return v364;})()) {
    const v426 = stdlib.sub(v344, v595);
    const txn2 = await (ctc.recv(9, 1, [ctc14], false, v426));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv(10, 0, [], false, false));
      const [] = txn3.data;
      const v431 = txn3.time;
      const v429 = txn3.from;
      ;
      const cv357 = v357;
      const cv358 = v358;
      const cv594 = v431;
      const cv595 = v594;
      const cv596 = v596;
      
      v357 = cv357;
      v358 = cv358;
      v594 = cv594;
      v595 = cv595;
      v596 = cv596;
      
      continue;
      }
    else {
      const [v394] = txn2.data;
      const v400 = txn2.time;
      const v393 = txn2.from;
      const v396 = v394[stdlib.checkedBigNumberify('./index.rsh:119:38:array ref', stdlib.UInt_max, 1)];
      const v399 = stdlib.add(v596, v396);
      ;
      let v401;
      const v402 = v394[stdlib.checkedBigNumberify('./index.rsh:121:35:array ref', stdlib.UInt_max, 0)];
      const v403 = stdlib.ge(v402, stdlib.checkedBigNumberify('./index.rsh:121:40:decimal', stdlib.UInt_max, 2));
      if (v403) {
        const v408 = stdlib.sub(v399, v396);
        ;
        const v420 = [v357, v358];
        v401 = v420;
        const v422 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 0)];
        const v423 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 1)];
        const cv357 = v422;
        const cv358 = v423;
        const cv594 = v400;
        const cv595 = v594;
        const cv596 = v408;
        
        v357 = cv357;
        v358 = cv358;
        v594 = cv594;
        v595 = cv595;
        v596 = cv596;
        
        continue;}
      else {
        const v413 = v357[v402];
        const v414 = stdlib.add(v413, stdlib.checkedBigNumberify('./index.rsh:126:76:decimal', stdlib.UInt_max, 1));
        const v416 = stdlib.Array_set(v357, v402, v414);
        const v418 = stdlib.add(v358, v396);
        const v421 = [v416, v418];
        v401 = v421;
        const v422 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 0)];
        const v423 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 1)];
        const cv357 = v422;
        const cv358 = v423;
        const cv594 = v400;
        const cv595 = v594;
        const cv596 = v399;
        
        v357 = cv357;
        v358 = cv358;
        v594 = cv594;
        v595 = cv595;
        v596 = cv596;
        
        continue;}}
    }
  const txn2 = await (ctc.recv(6, 3, [ctc1, ctc0, ctc1], false, false));
  const [v566, v567, v568] = txn2.data;
  const v571 = txn2.time;
  const v565 = txn2.from;
  ;
  const v570 = stdlib.addressEq(v22, v565);
  stdlib.assert(v570, {
    at: './index.rsh:159:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Nominee'
    });
  ;
  stdlib.protect(ctc15, await interact.updateN(v566, v358), {
    at: './index.rsh:165:29:application',
    fs: ['at ./index.rsh:164:25:application call to [unknown function] (defined at: ./index.rsh:164:29:function exp)'],
    msg: 'updateN',
    who: 'Nominee'
    });
  
  
  const txn3 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('./index.rsh:167:21:dot', stdlib.UInt_max, 0), [ctc1], [v571], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:167:21:dot', stdlib.UInt_max, 6), v571]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:167:21:dot', stdlib.UInt_max, 6)]);
    const [] = txn3.data;
    const v582 = txn3.time;
    const v580 = txn3.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:169:21:after expr stmt semicolon', stdlib.UInt_max, 7), v582]);
    sim_r.nextSt_noTime = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:169:21:after expr stmt semicolon', stdlib.UInt_max, 7)]);
    sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:169:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [] = txn3.data;
  const v582 = txn3.time;
  const v580 = txn3.from;
  ;
  const txn4 = await (ctc.recv(8, 0, [], false, false));
  const [] = txn4.data;
  const v588 = txn4.time;
  const v586 = txn4.from;
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
  let v591 = v25;
  let v592 = v18;
  let v593 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
  while ((() => {
    const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:48:31:decimal', stdlib.UInt_max, 1));
    
    return v69;})()) {
    const txn2 = await (ctc.recv(11, 1, [ctc2], false, stdlib.checkedBigNumberify('./index.rsh:70:22:decimal', stdlib.UInt_max, 20)));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.recv(12, 0, [], false, false));
      const [] = txn3.data;
      const v340 = txn3.time;
      const v338 = txn3.from;
      ;
      const cv58 = v58;
      const cv59 = stdlib.checkedBigNumberify('./index.rsh:72:42:decimal', stdlib.UInt_max, 6);
      const cv60 = v60;
      const cv61 = v61;
      const cv591 = v340;
      const cv592 = v591;
      const cv593 = v593;
      
      v58 = cv58;
      v59 = cv59;
      v60 = cv60;
      v61 = cv61;
      v591 = cv591;
      v592 = cv592;
      v593 = cv593;
      
      continue;
      }
    else {
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
      const cv591 = v300;
      const cv592 = v591;
      const cv593 = v593;
      
      v58 = cv58;
      v59 = cv59;
      v60 = cv60;
      v61 = cv61;
      v591 = cv591;
      v592 = cv592;
      v593 = cv593;
      
      continue;}
    }
  const v344 = stdlib.add(v592, stdlib.checkedBigNumberify('./index.rsh:105:63:decimal', stdlib.UInt_max, 6));
  let v357 = v66;
  let v358 = stdlib.checkedBigNumberify('./index.rsh:107:80:decimal', stdlib.UInt_max, 0);
  let v594 = v591;
  let v595 = v592;
  let v596 = v593;
  
  while ((() => {
    const v364 = stdlib.gt(v344, v595);
    
    return v364;})()) {
    const v426 = stdlib.sub(v344, v595);
    const v382 = v61[stdlib.checkedBigNumberify('./index.rsh:112:81:array ref', stdlib.UInt_max, 0)];
    const v383 = v61[stdlib.checkedBigNumberify('./index.rsh:112:91:array ref', stdlib.UInt_max, 1)];
    const v384 = v357[stdlib.checkedBigNumberify('./index.rsh:112:102:array ref', stdlib.UInt_max, 0)];
    const v385 = v357[stdlib.checkedBigNumberify('./index.rsh:112:111:array ref', stdlib.UInt_max, 1)];
    const v386 = [v382, v383];
    const v387 = [v384, v385];
    const v388 = stdlib.protect(ctc3, await interact.shouldBuyTicket(v386, v387), {
      at: './index.rsh:112:73:application',
      fs: ['at ./index.rsh:107:56:application call to [unknown function] (defined at: ./index.rsh:111:25:function exp)', 'at ./index.rsh:107:56:application call to [unknown function] (defined at: ./index.rsh:107:56:function exp)'],
      msg: 'shouldBuyTicket',
      who: 'Voter'
      });
    
    const v391 = v388[stdlib.checkedBigNumberify('./index.rsh:119:38:array ref', stdlib.UInt_max, 1)];
    
    const txn2 = await (ctc.sendrecv(9, 1, stdlib.checkedBigNumberify('./index.rsh:107:56:dot', stdlib.UInt_max, 5), [ctc0, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1, ctc3], [v22, v344, v357, v358, v426, v594, v596, v388], [v391, []], [ctc3], true, false, v426, (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:107:56:dot', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v594, v596]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:107:56:dot', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v596]);
      const [v394] = txn2.data;
      const v400 = txn2.time;
      const v393 = txn2.from;
      
      const v396 = v394[stdlib.checkedBigNumberify('./index.rsh:119:38:array ref', stdlib.UInt_max, 1)];
      const v399 = stdlib.add(v596, v396);
      sim_r.txns.push({
        amt: v396,
        kind: 'to',
        tok: undefined
        });
      let v401;
      const v402 = v394[stdlib.checkedBigNumberify('./index.rsh:121:35:array ref', stdlib.UInt_max, 0)];
      const v403 = stdlib.ge(v402, stdlib.checkedBigNumberify('./index.rsh:121:40:decimal', stdlib.UInt_max, 2));
      if (v403) {
        const v408 = stdlib.sub(v399, v396);
        sim_r.txns.push({
          amt: v396,
          kind: 'from',
          to: v393,
          tok: undefined
          });
        const v420 = [v357, v358];
        v401 = v420;
        const v422 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 0)];
        const v423 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 1)];
        const cv357 = v422;
        const cv358 = v423;
        const cv594 = v400;
        const cv595 = v594;
        const cv596 = v408;
        
        (() => {
          const v357 = cv357;
          const v358 = cv358;
          const v594 = cv594;
          const v595 = cv595;
          const v596 = cv596;
          
          if ((() => {
            const v364 = stdlib.gt(v344, v595);
            
            return v364;})()) {
            const v426 = stdlib.sub(v344, v595);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v594, v596]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v596]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v594, v596]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v596]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();}
      else {
        const v413 = v357[v402];
        const v414 = stdlib.add(v413, stdlib.checkedBigNumberify('./index.rsh:126:76:decimal', stdlib.UInt_max, 1));
        const v416 = stdlib.Array_set(v357, v402, v414);
        const v418 = stdlib.add(v358, v396);
        const v421 = [v416, v418];
        v401 = v421;
        const v422 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 0)];
        const v423 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 1)];
        const cv357 = v422;
        const cv358 = v423;
        const cv594 = v400;
        const cv595 = v594;
        const cv596 = v399;
        
        (() => {
          const v357 = cv357;
          const v358 = cv358;
          const v594 = cv594;
          const v595 = cv595;
          const v596 = cv596;
          
          if ((() => {
            const v364 = stdlib.gt(v344, v595);
            
            return v364;})()) {
            const v426 = stdlib.sub(v344, v595);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v594, v596]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v596]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v594, v596]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v596]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();}
      return sim_r;
      })));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(10, 0, stdlib.checkedBigNumberify('./index.rsh:131:27:dot', stdlib.UInt_max, 5), [ctc0, ctc1, ctc5, ctc1, ctc1, ctc1, ctc1], [v22, v344, v357, v358, v426, v594, v596], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:131:27:dot', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v594, v596]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:131:27:dot', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v596]);
        const [] = txn3.data;
        const v431 = txn3.time;
        const v429 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv357 = v357;
        const cv358 = v358;
        const cv594 = v431;
        const cv595 = v594;
        const cv596 = v596;
        
        (() => {
          const v357 = cv357;
          const v358 = cv358;
          const v594 = cv594;
          const v595 = cv595;
          const v596 = cv596;
          
          if ((() => {
            const v364 = stdlib.gt(v344, v595);
            
            return v364;})()) {
            const v426 = stdlib.sub(v344, v595);
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v594, v596]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v344, v357, v358, v426, v596]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:107:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v594, v596]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v596]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:150:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v431 = txn3.time;
      const v429 = txn3.from;
      ;
      const cv357 = v357;
      const cv358 = v358;
      const cv594 = v431;
      const cv595 = v594;
      const cv596 = v596;
      
      v357 = cv357;
      v358 = cv358;
      v594 = cv594;
      v595 = cv595;
      v596 = cv596;
      
      continue;
      }
    else {
      const [v394] = txn2.data;
      const v400 = txn2.time;
      const v393 = txn2.from;
      const v396 = v394[stdlib.checkedBigNumberify('./index.rsh:119:38:array ref', stdlib.UInt_max, 1)];
      const v399 = stdlib.add(v596, v396);
      ;
      let v401;
      const v402 = v394[stdlib.checkedBigNumberify('./index.rsh:121:35:array ref', stdlib.UInt_max, 0)];
      const v403 = stdlib.ge(v402, stdlib.checkedBigNumberify('./index.rsh:121:40:decimal', stdlib.UInt_max, 2));
      if (v403) {
        const v408 = stdlib.sub(v399, v396);
        ;
        const v420 = [v357, v358];
        v401 = v420;
        const v422 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 0)];
        const v423 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 1)];
        const cv357 = v422;
        const cv358 = v423;
        const cv594 = v400;
        const cv595 = v594;
        const cv596 = v408;
        
        v357 = cv357;
        v358 = cv358;
        v594 = cv594;
        v595 = cv595;
        v596 = cv596;
        
        continue;}
      else {
        const v413 = v357[v402];
        const v414 = stdlib.add(v413, stdlib.checkedBigNumberify('./index.rsh:126:76:decimal', stdlib.UInt_max, 1));
        const v416 = stdlib.Array_set(v357, v402, v414);
        const v418 = stdlib.add(v358, v396);
        const v421 = [v416, v418];
        v401 = v421;
        const v422 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 0)];
        const v423 = v401[stdlib.checkedBigNumberify('./index.rsh:107:19:array', stdlib.UInt_max, 1)];
        const cv357 = v422;
        const cv358 = v423;
        const cv594 = v400;
        const cv595 = v594;
        const cv596 = v399;
        
        v357 = cv357;
        v358 = cv358;
        v594 = cv594;
        v595 = cv595;
        v596 = cv596;
        
        continue;}}
    }
  const txn2 = await (ctc.recv(6, 3, [ctc1, ctc0, ctc1], false, false));
  const [v566, v567, v568] = txn2.data;
  const v571 = txn2.time;
  const v565 = txn2.from;
  ;
  const v570 = stdlib.addressEq(v22, v565);
  stdlib.assert(v570, {
    at: './index.rsh:159:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Voter'
    });
  ;
  const txn3 = await (ctc.recv(7, 0, [], false, false));
  const [] = txn3.data;
  const v582 = txn3.time;
  const v580 = txn3.from;
  ;
  stdlib.protect(ctc10, await interact.updateV(v566, v358), {
    at: './index.rsh:171:29:application',
    fs: ['at ./index.rsh:170:23:application call to [unknown function] (defined at: ./index.rsh:170:27:function exp)'],
    msg: 'updateV',
    who: 'Voter'
    });
  
  
  const txn4 = await (ctc.sendrecv(8, 0, stdlib.checkedBigNumberify('./index.rsh:173:19:dot', stdlib.UInt_max, 0), [ctc1], [v582], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc3, [stdlib.checkedBigNumberify('./index.rsh:173:19:dot', stdlib.UInt_max, 7), v582]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:173:19:dot', stdlib.UInt_max, 7)]);
    const [] = txn4.data;
    const v588 = txn4.time;
    const v586 = txn4.from;
    
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
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:181:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = true;
    
    return sim_r;
    })));
  const [] = txn4.data;
  const v588 = txn4.time;
  const v586 = txn4.from;
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
gtxn 2 Sender
byte "{{m12}}"
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
    }, {
    count: 13,
    size: 329
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
// "./index.rsh:159:19:dot"
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
// "./index.rsh:159:19:dot"
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
// "./index.rsh:167:21:dot"
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
// "./index.rsh:173:19:dot"
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
// "./index.rsh:107:56:dot"
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
// "./index.rsh:131:27:dot"
// "[at ./index.rsh:107:56:application call to [unknown function] (defined at: ./index.rsh:107:56:function exp)]"
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
gtxna 0 ApplicationArgs 5
btoi
int 20
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
gtxna 0 ApplicationArgs 5
btoi
int 20
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
gtxna 0 ApplicationArgs 5
btoi
int 20
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
// Handler 12
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
// "./index.rsh:71:25:dot"
// "[at ./index.rsh:46:27:application call to [unknown function] (defined at: ./index.rsh:46:27:function exp)]"
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
int 6
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
load 254
concat
int 6
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
int 20
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
gtxna 0 ApplicationArgs 5
btoi
int 6
+
dup
store 248
gtxna 0 ApplicationArgs 5
btoi
>
bz l1
load 248
gtxna 0 ApplicationArgs 5
btoi
-
store 247
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
load 248
itob
concat
load 250
concat
int 0
itob
concat
load 247
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
gtxna 0 ApplicationArgs 5
btoi
int 20
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
gtxna 0 ApplicationArgs 5
btoi
int 20
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
                "name": "v344",
                "type": "uint256"
              },
              {
                "internalType": "uint256[2]",
                "name": "v357",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v358",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v426",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v594",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v596",
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
                "name": "v591",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v593",
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
                "name": "v591",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v593",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
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
        "internalType": "struct T35",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
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
                "name": "v594",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v596",
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
                "name": "v566",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v567",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v568",
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
                "name": "v571",
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
                "name": "v582",
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
                "name": "v344",
                "type": "uint256"
              },
              {
                "internalType": "uint256[2]",
                "name": "v357",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v358",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v426",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v594",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v596",
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
                "name": "v394",
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
                "name": "v344",
                "type": "uint256"
              },
              {
                "internalType": "uint256[2]",
                "name": "v357",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v358",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v426",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v594",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v596",
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
                "name": "v591",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v593",
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
                "name": "v591",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v593",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T35",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
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
                "name": "v594",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v596",
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
                "name": "v566",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v567",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v568",
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
                "name": "v571",
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
                "name": "v582",
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
                "name": "v344",
                "type": "uint256"
              },
              {
                "internalType": "uint256[2]",
                "name": "v357",
                "type": "uint256[2]"
              },
              {
                "internalType": "uint256",
                "name": "v358",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v426",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v594",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v596",
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
                "name": "v394",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611e5e806100826000396000f3fe60806040526004361061007f5760003560e01c8063c08d11691161004e578063c08d1169146100d9578063d1139ac9146100ec578063eaf98df9146100ff578063ec2cc8841461011257610086565b8063054ba53d1461008b5780630e02fe3b146100a05780631c6cb983146100b35780638470ce95146100c657610086565b3661008657005b600080fd5b61009e610099366004611834565b610125565b005b61009e6100ae366004611834565b6101af565b61009e6100c1366004611885565b61034a565b61009e6100d436600461184f565b610527565b61009e6100e7366004611861565b61083b565b61009e6100fa366004611873565b61096d565b61009e61010d366004611834565b610db3565b61009e610120366004611823565b610e7f565b60408051600760208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461016257600080fd5b60008055341561017157600080fd5b7fbe5ec86984ef196c1da90ff17fc82f17502a973a531827bb40fd96465bb97e49816040516101a09190611b3e565b60405180910390a16000805533ff5b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146101ec57600080fd5b600080556101f8611463565b341561020357600080fd5b6102136040830160208401611802565b81516001600160a01b039190911690526102336040830160208401611802565b81516001600160a01b03919091166020918201526102579060408401908401611802565b602082810180516001600160a01b039390931690925281516000908201819052825160409081018290528351818601805191909152935193518301939093526060840180518290525190910152517f3edc19012383f1a954d272136ca587df4f30f9b69fd94318a56658f3640102eb906102d2908490611c12565b60405180910390a16102e26114a2565b8051339052606080830180518351602090810191909152845181850180519190915280516000920182905260408087015182519091015291518251909301929092528051436080909101528051853560a0909101525160c0015261034581610f9a565b505050565b60405161035e906002908390602001611c3a565b6040516020818303038152906040528051906020012060001c6000541461038457600080fd5b6000805561039860146101c0830135611dc8565b4310156103a457600080fd5b34156103af57600080fd5b7fb33247325abb3c2e1fed2deeca38d083e25a93f242541a02810181bcd12e8a9b816040516103de9190611bed565b60405180910390a16103ee6114a2565b6103fb6020830183611802565b81516001600160a01b039091169052604080518082018252906101808401906002908390839080828437600092019190915250508251602090810192909252506040805180820182529184019060029083908390808284376000920182905250602080860180519590955293516006940193909352505060408051808201909152906080840190600290835b828210156104b3576104a460608302850136819003810190611897565b81526020019060010190610487565b5050506020830151604090810192909252508051808201825290610140840190600290839083908082843760009201919091525050506020820180516060019190915280514360809091015280516101c084013560a090910152516101e083013560c09091015261052381610f9a565b5050565b60405161053b906004908390602001611d06565b6040516020818303038152906040528051906020012060001c6000541461056157600080fd5b6000805561056d6114c2565b61057f60a083013560c0840135611dc8565b431061058a57600080fd5b61059d61012083013560e0840135611dc8565b815234610120830135146105b057600080fd5b6002610100830135106106f957604051339061012084013580156108fc02916000818181858888f193505050501580156105ee573d6000803e3d6000fd5b50604080518082018252908084019060029083908390808284376000920191909152505050604080830180519290925281516080850135602091820152915191830191909152517fa48efb01ee98575cddfa07d8d36cb54b8d77786d048c144fbb589a206adac1d590610662908490611b52565b60405180910390a16106726114f6565b61067f6020840184611802565b81516001600160a01b03909116905280516020808501359181019190915282810180515182840180519190915290518201518151909201919091528051436040909101525160c084013560609091015281516106e19061012085013590611de0565b6020820151608001526106f3816110a3565b50610523565b60408051808201825261075f918085019060029083908390808284376000920191909152505050610100840135600160408601826002811061074b57634e487b7160e01b600052603260045260246000fd5b602002013561075a9190611dc8565b6111b8565b6060820151526107786101208301356080840135611dc8565b60608201805160209081019290925251908201526040517fa48efb01ee98575cddfa07d8d36cb54b8d77786d048c144fbb589a206adac1d5906107bc908490611b52565b60405180910390a16107cc6114f6565b6107d96020840184611802565b81516001600160a01b0390911690528051602080850135918101919091528281018051518284018051919091529051820151815190920191909152805143604090910152805160c08501356060909101528251905160800152610345816110a3565b60405161084f906004908390602001611d06565b6040516020818303038152906040528051906020012060001c6000541461087557600080fd5b6000805561088b60a082013560c0830135611dc8565b43101561089757600080fd5b34156108a257600080fd5b7f3ed2ea944ec27848fc58b27c3ca813e6c3e80b649b05b1bdf137fa661a837bdd816040516108d19190611b7e565b60405180910390a16108e16114f6565b6108ee6020830183611802565b81516001600160a01b0390911690528051602080840135910152604080518082018252908084019060029083908390808284376000920191909152505050602080830180519290925281516080808601359190920152815143604090910152815160c0850135606090910152905160e0840135910152610523816110a3565b604051610981906002908390602001611c3a565b6040516020818303038152906040528051906020012060001c600054146109a757600080fd5b600080556109b361151f565b6109c360146101c0840135611dc8565b43106109ce57600080fd5b34156109d957600080fd5b6109eb61024083016102208401611802565b81516001600160a01b03909116905280516060830135602091820152815161020084013560409091015260009082018190525b6002811015610ad057602083018160028110610a4a57634e487b7160e01b600052603260045260246000fd5b602002016020810190610a5d9190611802565b6001600160a01b031660408301526020820151610ab15760408201516001600160a01b0316610a9461024085016102208601611802565b6001600160a01b031614610aa9576000610aac565b60015b610ab7565b81602001515b1515602083015280610ac881611df7565b915050610a1e565b50602081015115156060820152604080518082019091526080830160026000835b82821015610b1d57610b0e60608302850136819003810190611897565b81526020019060010190610af1565b5050505060808201515260408051808201825290602084019060029083908390808284376000920191909152505050608082018051602001919091525160608301356040918201528051808201825290610140840190600290839083908082843760009201829052506080808601516060019490945260408051808201909152610beb9490935086019150600290835b82821015610bd957610bca60608302850136819003810190611897565b81526020019060010190610bad565b50508451606087013592509050611256565b60a082015152604080518082018252610c35916020850190600290839083908082843760009201919091525050506060840135610c3061024086016102208701611802565b6112c6565b60a082015160200152610c4d60016060840135611dc8565b60a082015160409081019190915280518082018252610c92916101408501906002908390839080828437600092019190915250505060608401356102008501356111b8565b8160a00151606001819052508060600151610cb1578060a00151610cb7565b80608001515b60c08201526040517f4c38fac897c6790ca16a4608928d45c8affc1f95c2cbe7026f2f110c5f0037c390610cec908490611bb1565b60405180910390a1610cfc6114a2565b610d096020840184611802565b81516001600160a01b0390911690526040805180820182529061018085019060029083908390808284376000920191909152505082516020908101929092525060c080840180518301518385018051919091528151604090810151825190950194909452815151815190940193909352516060908101518351909101528151436080919091015281516101c086013560a0919091015290516101e085013591015261034581610f9a565b60408051600660208201528235918101919091526060016040516020818303038152906040528051906020012060001c60005414610df057600080fd5b600080553415610dff57600080fd5b7fcb6b8f7572f166957bd4be64f8e20ee6cd939c32fb24e6e579273f81f42c0f6381604051610e2e9190611b3e565b60405180910390a160408051602081019091526000815243815260408051600760208201528251918101919091526060015b60408051601f1981840301815291905280516020909101206000555050565b604051610e93906005908390602001611d83565b6040516020818303038152906040528051906020012060001c60005414610eb957600080fd5b600080553415610ec857600080fd5b33610ed66020830183611802565b6001600160a01b031614610ee957600080fd5b610ef960a0820160808301611802565b604080516001600160a01b0392909216919083013580156108fc02916000818181858888f19350505050158015610f34573d6000803e3d6000fd5b507f83e534428f92bfcb95a8170bbd5cd7a87ec89ee978b81e96168024da7cb7429d81604051610f649190611afc565b60405180910390a16040805160208101909152600081524381526040805160066020820152825191810191909152606001610e60565b60018160200151602001511161104857610fb261156e565b8151516001600160a01b031681526020808301805151828401528051820151604080850191909152815181015160608086019190915282510151608080860191909152855184015160a08601528251015160c08086019190915291519091015160e08401525161102791600291849101611c4f565b60408051601f198184030181529190528051602090910120600055506110a0565b6110506115d4565b81515181516001600160a01b0390911690528151602090810151825182015282018051608090810151835160400152815160a00151835160600152905160c0015182519091015261052381611380565b50565b6040805160208101909152600081528160200151606001518260000151602001511115611174578160200151606001518260000151602001516110e69190611de0565b81526110f06115f4565b8251516001600160a01b03168152825160209081015181830152808401805151604080850191909152815183015160608501528451608080860191909152825182015160a086015291519091015160c08401525161115391600491849101611d1b565b60408051601f19818403018152919052805160209091012060005550610523565b61117c611635565b82515181516001600160a01b03909116905260208084018051604090810151845190930192909252516080015182519091015261034581611400565b6111c061165e565b60005b6002811015611228578481600281106111ec57634e487b7160e01b600052603260045260246000fd5b602002015182826002811061121157634e487b7160e01b600052603260045260246000fd5b60200201528061122081611df7565b9150506111c3565b508181846002811061124a57634e487b7160e01b600052603260045260246000fd5b60200201529392505050565b61125e61167c565b60005b60028110156112285784816002811061128a57634e487b7160e01b600052603260045260246000fd5b60200201518282600281106112af57634e487b7160e01b600052603260045260246000fd5b6020020152806112be81611df7565b915050611261565b6112ce61165e565b60005b6002811015611344578481600281106112fa57634e487b7160e01b600052603260045260246000fd5b602002015182826002811061131f57634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209290920201528061133c81611df7565b9150506112d1565b508181846002811061136657634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209290920201529392505050565b6113886114f6565b81515181516001600160a01b0390911690528151606001516113ac90600690611dc8565b815160209081019190915282518101518183018051919091528051600092019190915282516040908101518251909101528251606090810151825190910152825160809081015191510152610523816110a3565b61142d604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8151516001600160a01b0316815281516020908101518183015282516040908101518184015251610e6091600591849101611d97565b604051806080016040528061147661165e565b81526020016114836116a9565b815260200161149061167c565b815260200161149d61165e565b905290565b60405180604001604052806114b56116d3565b815260200161149d6116f6565b6040518060800160405280600081526020016114dc611745565b81526020016114e9611745565b815260200161149d611745565b60408051608081018252600091810182815260608201929092529081526020810161149d611765565b6040518060e001604052806115326116a9565b8152600060208201819052604082018190526060820152608001611554611778565b8152602001611561611778565b815260200161149d611778565b60405180610100016040528060006001600160a01b0316815260200161159261165e565b8152602001600081526020016115a661167c565b81526020016115b361165e565b81526020016115c061165e565b815260200160008152602001600081525090565b60405180604001604052806115e76117ac565b8152600060209091015290565b6040805160e0810182526000808252602082015290810161161361165e565b8152602001600081526020016000815260200160008152602001600081525090565b6040805160a08101825260009181018281526060820183905260808201929092529081906115e7565b60405180604001604052806002906020820280368337509192915050565b60405180604001604052806002905b6116936116a9565b81526020019060019003908161168b5790505090565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b604051806040016040528060006001600160a01b0316815260200161149d61165e565b6040518060e0016040528061170961165e565b81526020016000815260200161171d61167c565b815260200161172a61165e565b81526020016000815260200160008152602001600081525090565b604051806040016040528061175861165e565b8152602001600081525090565b6040518060a0016040528061161361165e565b604051806080016040528061178b61167c565b815260200161179861165e565b81526020016000815260200161149d61165e565b6040518060a0016040528060006001600160a01b0316815260200161172a61165e565b80356001600160a01b03811681146117e657600080fd5b919050565b6000604082840312156117fc578081fd5b50919050565b600060208284031215611813578081fd5b61181c826117cf565b9392505050565b600060c082840312156117fc578081fd5b600060408284031215611845578081fd5b61181c83836117eb565b600061014082840312156117fc578081fd5b600061012082840312156117fc578081fd5b600061024082840312156117fc578081fd5b600061022082840312156117fc578081fd5b6000606082840312156118a8578081fd5b6040516060810181811067ffffffffffffffff821117156118d757634e487b7160e01b83526041600452602483fd5b6040526118e3836117cf565b815260208301356020820152604083013560408201528091505092915050565b8060005b600281101561192d5761191a8483611aaf565b6060938401939190910190600101611907565b50505050565b8060005b600281101561192d5761196884835180516001600160a01b0316825260208082015190830152604090810151910152565b6060939093019260209190910190600101611937565b6040818337600060408301525050565b8060005b600281101561192d578151845260209384019390910190600101611992565b6001600160a01b036119c2826117cf565b168252602080830181830160005b6002811015611a05576119f7836119e6846117cf565b6001600160a01b0316815260200190565b9250908301906001016119d0565b5050505060608101356060830152611a236080830160808301611903565b610140611a3481840182840161197e565b50610180611a4681840182840161197e565b506101c081810135908301526101e090810135910152565b6001600160a01b03611a6f826117cf565b16825260208101356020830152604080820160408401376080818101359083015260a0808201359083015260c0808201359083015260e090810135910152565b6001600160a01b03611ac0826117cf565b16825260208181013590830152604090810135910152565b803582526020810135801515808214611af057600080fd5b80602085015250505050565b60c08101611b0a8284611aaf565b606083810135908301526001600160a01b03611b28608085016117cf565b16608083015260a083013560a083015292915050565b60408101611b4c8284611ad8565b92915050565b6101408101611b618284611a5e565b610100838101359083015261012092830135929091019190915290565b6101208101611b8d8284611a5e565b61010080840135801515808214611ba357600080fd5b808386015250505092915050565b6102408101611bc082846119b1565b61020083810135908301526102206001600160a01b03611be18286016117cf565b16818401525092915050565b6102208101611bfc82846119b1565b61020080840135801515808214611ba357600080fd5b81358152604081016001600160a01b03611c2e602085016117cf565b16602083015292915050565b828152610220810161181c60208301846119b1565b82815281516001600160a01b031660208083019190915282810151610220830191906040840160005b6002811015611ca05782516001600160a01b0316825260208201928401929150600101611c78565b50505050604083015160808301526060830151611cc060a0840182611933565b506080830151611cd461016084018261198e565b5060a0830151611ce86101a084018261198e565b5060c08301516101e083015260e08301516102008301529392505050565b828152610120810161181c6020830184611a5e565b60006101208201905083825260018060a01b038351166020830152602083015160408301526040830151611d52606084018261198e565b50606083015160a0830152608083015160c083015260a083015160e083015260c08301516101008301529392505050565b8281526080810161181c6020830184611aaf565b8281526080810161181c602083018480516001600160a01b0316825260208082015190830152604090810151910152565b60008219821115611ddb57611ddb611e12565b500190565b600082821015611df257611df2611e12565b500390565b6000600019821415611e0b57611e0b611e12565b5060010190565b634e487b7160e01b600052601160045260246000fdfea264697066735822122019f0683322218cedc20e3c453ec4a2d693236e9589ca33dfd10cd58fbd99a8a464736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

