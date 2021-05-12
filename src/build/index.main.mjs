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
  const ctc5 = stdlib.T_Tuple([ctc0, ctc1, ctc1]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc6, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc6, ctc1, ctc7, ctc1, ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc1]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc13 = stdlib.T_Tuple([ctc1, ctc0, ctc12, ctc1, ctc6, ctc7, ctc7, ctc1, ctc1]);
  const ctc14 = stdlib.T_Tuple([ctc1, ctc0, ctc12, ctc1, ctc6, ctc7, ctc7, ctc1]);
  
  
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
    const v571 = v25;
    const v572 = v18;
    const v573 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
    
    if ((() => {
      const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:45:31:decimal', stdlib.UInt_max, 1));
      
      return v69;})()) {
      sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v571, v573]);
      sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v573]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      const v339 = stdlib.add(v572, stdlib.checkedBigNumberify('./index.rsh:101:63:decimal', stdlib.UInt_max, 90000));
      const v352 = v66;
      const v353 = stdlib.checkedBigNumberify('./index.rsh:103:80:decimal', stdlib.UInt_max, 0);
      const v574 = v571;
      const v575 = v572;
      const v576 = v573;
      
      if ((() => {
        const v359 = stdlib.gt(v339, v575);
        
        return v359;})()) {
        const v421 = stdlib.sub(v339, v575);
        sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v574, v576]);
        sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v576]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = false;
        }
      else {
        const v443 = v352.reduce((v435, v436) => {
          const v439 = stdlib.gt(v436, v435);
          const v441 = v439 ? v436 : v435;
          
          return v441;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
        const v452 = ['None', null];
        const v478 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
        const v479 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
        const v501 = stdlib.eq(v478, v443);
        const v505 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
        const v506 = [v505, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
        const v508 = [v452, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
        const v509 = v501 ? v506 : v508;
        const v514 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
        const v515 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
        let v516;
        switch (v514[0]) {
          case 'None': {
            
            const v519 = stdlib.eq(v479, v443);
            const v523 = stdlib.add(v515, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
            const v524 = ['Some', v515];
            const v525 = [v524, v515];
            const v526 = [v514, v523];
            const v527 = v519 ? v525 : v526;
            v516 = v527;
            
            break;
            }
          case 'Some': {
            const v530 = v514[1];
            v516 = v509;
            
            break;
            }
          }
        const v535 = v516[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
        let v541;
        switch (v535[0]) {
          case 'None': {
            
            v541 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
            
            break;
            }
          case 'Some': {
            const v545 = v535[1];
            v541 = v545;
            
            break;
            }
          }
        const v551 = v60[v541];
        const v552 = v551[stdlib.checkedBigNumberify('./index.rsh:142:53:array ref', stdlib.UInt_max, 0)];
        sim_r.txns.push({
          amt: v576,
          kind: 'from',
          to: v552,
          tok: undefined
          });
        sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v574]);
        sim_r.nextSt_noTime = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
  let v571 = v25;
  let v572 = v18;
  let v573 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
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
    const cv571 = v300;
    const cv572 = v571;
    const cv573 = v573;
    
    v58 = cv58;
    v59 = cv59;
    v60 = cv60;
    v61 = cv61;
    v571 = cv571;
    v572 = cv572;
    v573 = cv573;
    
    continue;
    }
  const v339 = stdlib.add(v572, stdlib.checkedBigNumberify('./index.rsh:101:63:decimal', stdlib.UInt_max, 90000));
  let v352 = v66;
  let v353 = stdlib.checkedBigNumberify('./index.rsh:103:80:decimal', stdlib.UInt_max, 0);
  let v574 = v571;
  let v575 = v572;
  let v576 = v573;
  
  while ((() => {
    const v359 = stdlib.gt(v339, v575);
    
    return v359;})()) {
    const v421 = stdlib.sub(v339, v575);
    const txn2 = await (ctc.recv(7, 1, [ctc3], false, v421));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(8, 0, stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 6), [ctc0, ctc6, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1], [v22, v60, v339, v352, v353, v421, v574, v576], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v574, v576]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v576]);
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
        const cv574 = v426;
        const cv575 = v574;
        const cv576 = v576;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v574 = cv574;
          const v575 = cv575;
          const v576 = cv576;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v575);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v575);
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v574, v576]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v576]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v443 = v352.reduce((v435, v436) => {
              const v439 = stdlib.gt(v436, v435);
              const v441 = v439 ? v436 : v435;
              
              return v441;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
            const v452 = ['None', null];
            const v478 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
            const v479 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
            const v501 = stdlib.eq(v478, v443);
            const v505 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v506 = [v505, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v508 = [v452, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
            const v509 = v501 ? v506 : v508;
            const v514 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
            const v515 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
            let v516;
            switch (v514[0]) {
              case 'None': {
                
                const v519 = stdlib.eq(v479, v443);
                const v523 = stdlib.add(v515, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
                const v524 = ['Some', v515];
                const v525 = [v524, v515];
                const v526 = [v514, v523];
                const v527 = v519 ? v525 : v526;
                v516 = v527;
                
                break;
                }
              case 'Some': {
                const v530 = v514[1];
                v516 = v509;
                
                break;
                }
              }
            const v535 = v516[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
            let v541;
            switch (v535[0]) {
              case 'None': {
                
                v541 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
                
                break;
                }
              case 'Some': {
                const v545 = v535[1];
                v541 = v545;
                
                break;
                }
              }
            const v551 = v60[v541];
            const v552 = v551[stdlib.checkedBigNumberify('./index.rsh:142:53:array ref', stdlib.UInt_max, 0)];
            sim_r.txns.push({
              amt: v576,
              kind: 'from',
              to: v552,
              tok: undefined
              });
            sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v574]);
            sim_r.nextSt_noTime = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
      const cv574 = v426;
      const cv575 = v574;
      const cv576 = v576;
      
      v352 = cv352;
      v353 = cv353;
      v574 = cv574;
      v575 = cv575;
      v576 = cv576;
      
      continue;
      }
    else {
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:115:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v576, v391);
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
        const cv574 = v395;
        const cv575 = v574;
        const cv576 = v403;
        
        v352 = cv352;
        v353 = cv353;
        v574 = cv574;
        v575 = cv575;
        v576 = cv576;
        
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
        const cv574 = v395;
        const cv575 = v574;
        const cv576 = v394;
        
        v352 = cv352;
        v353 = cv353;
        v574 = cv574;
        v575 = cv575;
        v576 = cv576;
        
        continue;}}
    }
  const v443 = v352.reduce((v435, v436) => {
    const v439 = stdlib.gt(v436, v435);
    const v441 = v439 ? v436 : v435;
    
    return v441;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
  const v452 = ['None', null];
  const v478 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
  const v479 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
  const v501 = stdlib.eq(v478, v443);
  const v505 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
  const v506 = [v505, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
  const v508 = [v452, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
  const v509 = v501 ? v506 : v508;
  const v514 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
  const v515 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
  let v516;
  switch (v514[0]) {
    case 'None': {
      
      const v519 = stdlib.eq(v479, v443);
      const v523 = stdlib.add(v515, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
      const v524 = ['Some', v515];
      const v525 = [v524, v515];
      const v526 = [v514, v523];
      const v527 = v519 ? v525 : v526;
      v516 = v527;
      
      break;
      }
    case 'Some': {
      const v530 = v514[1];
      v516 = v509;
      
      break;
      }
    }
  const v535 = v516[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
  let v541;
  switch (v535[0]) {
    case 'None': {
      
      v541 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
      
      break;
      }
    case 'Some': {
      const v545 = v535[1];
      v541 = v545;
      
      break;
      }
    }
  const v551 = v60[v541];
  const v552 = v551[stdlib.checkedBigNumberify('./index.rsh:142:53:array ref', stdlib.UInt_max, 0)];
  ;
  const v563 = v551[stdlib.checkedBigNumberify('./index.rsh:147:55:array ref', stdlib.UInt_max, 2)];
  
  
  const txn2 = await (ctc.sendrecv(6, 1, stdlib.checkedBigNumberify('./index.rsh:151:19:dot', stdlib.UInt_max, 1), [ctc0, ctc1, ctc1], [v22, v574, v563], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:151:19:dot', stdlib.UInt_max, 5), v22, v574]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:151:19:dot', stdlib.UInt_max, 5), v22]);
    const [v565] = txn2.data;
    const v568 = txn2.time;
    const v564 = txn2.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v567 = stdlib.addressEq(v22, v564);
    stdlib.assert(v567, {
      at: './index.rsh:151:19:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    sim_r.txns.push({
      kind: 'halt',
      tok: undefined
      })
    sim_r.nextSt = stdlib.digest(ctc11, []);
    sim_r.nextSt_noTime = stdlib.digest(ctc11, []);
    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:153:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = true;
    
    return sim_r;
    })));
  const [v565] = txn2.data;
  const v568 = txn2.time;
  const v564 = txn2.from;
  ;
  const v567 = stdlib.addressEq(v22, v564);
  stdlib.assert(v567, {
    at: './index.rsh:151:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
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
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc6, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc0, ctc6, ctc1, ctc7, ctc1, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc0, ctc1]);
  const ctc13 = stdlib.T_Tuple([ctc1, ctc1]);
  
  
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
  let v571 = v25;
  let v572 = v18;
  let v573 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
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
    
    const txn2 = await (ctc.sendrecv(9, 1, stdlib.checkedBigNumberify('./index.rsh:43:27:dot', stdlib.UInt_max, 6), [ctc0, ctc4, ctc1, ctc6, ctc7, ctc7, ctc1, ctc1, ctc2], [v22, v58, v59, v60, v61, v66, v571, v573, v292], [stdlib.checkedBigNumberify('./index.rsh:55:28:decimal', stdlib.UInt_max, 0), []], [ctc2], true, false, false, (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:43:27:dot', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v571, v573]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:43:27:dot', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v573]);
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
      const cv571 = v300;
      const cv572 = v571;
      const cv573 = v573;
      
      (() => {
        const v58 = cv58;
        const v59 = cv59;
        const v60 = cv60;
        const v61 = cv61;
        const v571 = cv571;
        const v572 = cv572;
        const v573 = cv573;
        
        if ((() => {
          const v69 = stdlib.le(v59, stdlib.checkedBigNumberify('./index.rsh:45:31:decimal', stdlib.UInt_max, 1));
          
          return v69;})()) {
          sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v571, v573]);
          sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 2), v22, v58, v59, v60, v61, v66, v573]);
          sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:43:27:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          const v339 = stdlib.add(v572, stdlib.checkedBigNumberify('./index.rsh:101:63:decimal', stdlib.UInt_max, 90000));
          const v352 = v66;
          const v353 = stdlib.checkedBigNumberify('./index.rsh:103:80:decimal', stdlib.UInt_max, 0);
          const v574 = v571;
          const v575 = v572;
          const v576 = v573;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v575);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v575);
            sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v574, v576]);
            sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v576]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v443 = v352.reduce((v435, v436) => {
              const v439 = stdlib.gt(v436, v435);
              const v441 = v439 ? v436 : v435;
              
              return v441;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
            const v452 = ['None', null];
            const v478 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
            const v479 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
            const v501 = stdlib.eq(v478, v443);
            const v505 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v506 = [v505, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v508 = [v452, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
            const v509 = v501 ? v506 : v508;
            const v514 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
            const v515 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
            let v516;
            switch (v514[0]) {
              case 'None': {
                
                const v519 = stdlib.eq(v479, v443);
                const v523 = stdlib.add(v515, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
                const v524 = ['Some', v515];
                const v525 = [v524, v515];
                const v526 = [v514, v523];
                const v527 = v519 ? v525 : v526;
                v516 = v527;
                
                break;
                }
              case 'Some': {
                const v530 = v514[1];
                v516 = v509;
                
                break;
                }
              }
            const v535 = v516[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
            let v541;
            switch (v535[0]) {
              case 'None': {
                
                v541 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
                
                break;
                }
              case 'Some': {
                const v545 = v535[1];
                v541 = v545;
                
                break;
                }
              }
            const v551 = v60[v541];
            const v552 = v551[stdlib.checkedBigNumberify('./index.rsh:142:53:array ref', stdlib.UInt_max, 0)];
            sim_r.txns.push({
              amt: v576,
              kind: 'from',
              to: v552,
              tok: undefined
              });
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v574]);
            sim_r.nextSt_noTime = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
    const cv571 = v300;
    const cv572 = v571;
    const cv573 = v573;
    
    v58 = cv58;
    v59 = cv59;
    v60 = cv60;
    v61 = cv61;
    v571 = cv571;
    v572 = cv572;
    v573 = cv573;
    
    continue;
    }
  const v339 = stdlib.add(v572, stdlib.checkedBigNumberify('./index.rsh:101:63:decimal', stdlib.UInt_max, 90000));
  let v352 = v66;
  let v353 = stdlib.checkedBigNumberify('./index.rsh:103:80:decimal', stdlib.UInt_max, 0);
  let v574 = v571;
  let v575 = v572;
  let v576 = v573;
  
  while ((() => {
    const v359 = stdlib.gt(v339, v575);
    
    return v359;})()) {
    const v421 = stdlib.sub(v339, v575);
    const txn2 = await (ctc.recv(7, 1, [ctc13], false, v421));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(8, 0, stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 6), [ctc0, ctc6, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1], [v22, v60, v339, v352, v353, v421, v574, v576], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v574, v576]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v576]);
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
        const cv574 = v426;
        const cv575 = v574;
        const cv576 = v576;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v574 = cv574;
          const v575 = cv575;
          const v576 = cv576;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v575);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v575);
            sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v574, v576]);
            sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v576]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v443 = v352.reduce((v435, v436) => {
              const v439 = stdlib.gt(v436, v435);
              const v441 = v439 ? v436 : v435;
              
              return v441;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
            const v452 = ['None', null];
            const v478 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
            const v479 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
            const v501 = stdlib.eq(v478, v443);
            const v505 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v506 = [v505, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v508 = [v452, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
            const v509 = v501 ? v506 : v508;
            const v514 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
            const v515 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
            let v516;
            switch (v514[0]) {
              case 'None': {
                
                const v519 = stdlib.eq(v479, v443);
                const v523 = stdlib.add(v515, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
                const v524 = ['Some', v515];
                const v525 = [v524, v515];
                const v526 = [v514, v523];
                const v527 = v519 ? v525 : v526;
                v516 = v527;
                
                break;
                }
              case 'Some': {
                const v530 = v514[1];
                v516 = v509;
                
                break;
                }
              }
            const v535 = v516[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
            let v541;
            switch (v535[0]) {
              case 'None': {
                
                v541 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
                
                break;
                }
              case 'Some': {
                const v545 = v535[1];
                v541 = v545;
                
                break;
                }
              }
            const v551 = v60[v541];
            const v552 = v551[stdlib.checkedBigNumberify('./index.rsh:142:53:array ref', stdlib.UInt_max, 0)];
            sim_r.txns.push({
              amt: v576,
              kind: 'from',
              to: v552,
              tok: undefined
              });
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v574]);
            sim_r.nextSt_noTime = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22]);
            sim_r.view = [ctc3, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
      const cv574 = v426;
      const cv575 = v574;
      const cv576 = v576;
      
      v352 = cv352;
      v353 = cv353;
      v574 = cv574;
      v575 = cv575;
      v576 = cv576;
      
      continue;
      }
    else {
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:115:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v576, v391);
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
        const cv574 = v395;
        const cv575 = v574;
        const cv576 = v403;
        
        v352 = cv352;
        v353 = cv353;
        v574 = cv574;
        v575 = cv575;
        v576 = cv576;
        
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
        const cv574 = v395;
        const cv575 = v574;
        const cv576 = v394;
        
        v352 = cv352;
        v353 = cv353;
        v574 = cv574;
        v575 = cv575;
        v576 = cv576;
        
        continue;}}
    }
  const v443 = v352.reduce((v435, v436) => {
    const v439 = stdlib.gt(v436, v435);
    const v441 = v439 ? v436 : v435;
    
    return v441;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
  const v452 = ['None', null];
  const v478 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
  const v479 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
  const v501 = stdlib.eq(v478, v443);
  const v505 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
  const v506 = [v505, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
  const v508 = [v452, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
  const v509 = v501 ? v506 : v508;
  const v514 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
  const v515 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
  let v516;
  switch (v514[0]) {
    case 'None': {
      
      const v519 = stdlib.eq(v479, v443);
      const v523 = stdlib.add(v515, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
      const v524 = ['Some', v515];
      const v525 = [v524, v515];
      const v526 = [v514, v523];
      const v527 = v519 ? v525 : v526;
      v516 = v527;
      
      break;
      }
    case 'Some': {
      const v530 = v514[1];
      v516 = v509;
      
      break;
      }
    }
  const v535 = v516[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
  let v541;
  switch (v535[0]) {
    case 'None': {
      
      v541 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
      
      break;
      }
    case 'Some': {
      const v545 = v535[1];
      v541 = v545;
      
      break;
      }
    }
  const v551 = v60[v541];
  const v552 = v551[stdlib.checkedBigNumberify('./index.rsh:142:53:array ref', stdlib.UInt_max, 0)];
  ;
  const txn2 = await (ctc.recv(6, 1, [ctc1], false, false));
  const [v565] = txn2.data;
  const v568 = txn2.time;
  const v564 = txn2.from;
  ;
  const v567 = stdlib.addressEq(v22, v564);
  stdlib.assert(v567, {
    at: './index.rsh:151:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Nominee'
    });
  return;
  
  
  };
export async function Voter(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Tuple([ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc1, ctc1]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc7 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2));
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0, ctc6, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc0, ctc6, ctc1, ctc7, ctc1, ctc1, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc0, ctc1]);
  
  
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
  let v571 = v25;
  let v572 = v18;
  let v573 = stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0);
  
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
    const cv571 = v300;
    const cv572 = v571;
    const cv573 = v573;
    
    v58 = cv58;
    v59 = cv59;
    v60 = cv60;
    v61 = cv61;
    v571 = cv571;
    v572 = cv572;
    v573 = cv573;
    
    continue;
    }
  const v339 = stdlib.add(v572, stdlib.checkedBigNumberify('./index.rsh:101:63:decimal', stdlib.UInt_max, 90000));
  let v352 = v66;
  let v353 = stdlib.checkedBigNumberify('./index.rsh:103:80:decimal', stdlib.UInt_max, 0);
  let v574 = v571;
  let v575 = v572;
  let v576 = v573;
  
  while ((() => {
    const v359 = stdlib.gt(v339, v575);
    
    return v359;})()) {
    const v421 = stdlib.sub(v339, v575);
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
    
    const txn2 = await (ctc.sendrecv(7, 1, stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 6), [ctc0, ctc6, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1, ctc3], [v22, v60, v339, v352, v353, v421, v574, v576, v383], [v386, []], [ctc3], true, false, v421, (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v574, v576]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v576]);
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:115:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v576, v391);
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
        const cv574 = v395;
        const cv575 = v574;
        const cv576 = v403;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v574 = cv574;
          const v575 = cv575;
          const v576 = cv576;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v575);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v575);
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v574, v576]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v576]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v443 = v352.reduce((v435, v436) => {
              const v439 = stdlib.gt(v436, v435);
              const v441 = v439 ? v436 : v435;
              
              return v441;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
            const v452 = ['None', null];
            const v478 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
            const v479 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
            const v501 = stdlib.eq(v478, v443);
            const v505 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v506 = [v505, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v508 = [v452, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
            const v509 = v501 ? v506 : v508;
            const v514 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
            const v515 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
            let v516;
            switch (v514[0]) {
              case 'None': {
                
                const v519 = stdlib.eq(v479, v443);
                const v523 = stdlib.add(v515, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
                const v524 = ['Some', v515];
                const v525 = [v524, v515];
                const v526 = [v514, v523];
                const v527 = v519 ? v525 : v526;
                v516 = v527;
                
                break;
                }
              case 'Some': {
                const v530 = v514[1];
                v516 = v509;
                
                break;
                }
              }
            const v535 = v516[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
            let v541;
            switch (v535[0]) {
              case 'None': {
                
                v541 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
                
                break;
                }
              case 'Some': {
                const v545 = v535[1];
                v541 = v545;
                
                break;
                }
              }
            const v551 = v60[v541];
            const v552 = v551[stdlib.checkedBigNumberify('./index.rsh:142:53:array ref', stdlib.UInt_max, 0)];
            sim_r.txns.push({
              amt: v576,
              kind: 'from',
              to: v552,
              tok: undefined
              });
            sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v574]);
            sim_r.nextSt_noTime = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
        const cv574 = v395;
        const cv575 = v574;
        const cv576 = v394;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v574 = cv574;
          const v575 = cv575;
          const v576 = cv576;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v575);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v575);
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v574, v576]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v576]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v443 = v352.reduce((v435, v436) => {
              const v439 = stdlib.gt(v436, v435);
              const v441 = v439 ? v436 : v435;
              
              return v441;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
            const v452 = ['None', null];
            const v478 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
            const v479 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
            const v501 = stdlib.eq(v478, v443);
            const v505 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v506 = [v505, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v508 = [v452, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
            const v509 = v501 ? v506 : v508;
            const v514 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
            const v515 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
            let v516;
            switch (v514[0]) {
              case 'None': {
                
                const v519 = stdlib.eq(v479, v443);
                const v523 = stdlib.add(v515, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
                const v524 = ['Some', v515];
                const v525 = [v524, v515];
                const v526 = [v514, v523];
                const v527 = v519 ? v525 : v526;
                v516 = v527;
                
                break;
                }
              case 'Some': {
                const v530 = v514[1];
                v516 = v509;
                
                break;
                }
              }
            const v535 = v516[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
            let v541;
            switch (v535[0]) {
              case 'None': {
                
                v541 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
                
                break;
                }
              case 'Some': {
                const v545 = v535[1];
                v541 = v545;
                
                break;
                }
              }
            const v551 = v60[v541];
            const v552 = v551[stdlib.checkedBigNumberify('./index.rsh:142:53:array ref', stdlib.UInt_max, 0)];
            sim_r.txns.push({
              amt: v576,
              kind: 'from',
              to: v552,
              tok: undefined
              });
            sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v574]);
            sim_r.nextSt_noTime = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }})();}
      return sim_r;
      })));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(8, 0, stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 6), [ctc0, ctc6, ctc1, ctc7, ctc1, ctc1, ctc1, ctc1], [v22, v60, v339, v352, v353, v421, v574, v576], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v574, v576]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:103:56:dot', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v576]);
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
        const cv574 = v426;
        const cv575 = v574;
        const cv576 = v576;
        
        (() => {
          const v352 = cv352;
          const v353 = cv353;
          const v574 = cv574;
          const v575 = cv575;
          const v576 = cv576;
          
          if ((() => {
            const v359 = stdlib.gt(v339, v575);
            
            return v359;})()) {
            const v421 = stdlib.sub(v339, v575);
            sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v574, v576]);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 4), v22, v60, v339, v352, v353, v421, v576]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:103:56:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            const v443 = v352.reduce((v435, v436) => {
              const v439 = stdlib.gt(v436, v435);
              const v441 = v439 ? v436 : v435;
              
              return v441;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
            const v452 = ['None', null];
            const v478 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
            const v479 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
            const v501 = stdlib.eq(v478, v443);
            const v505 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v506 = [v505, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
            const v508 = [v452, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
            const v509 = v501 ? v506 : v508;
            const v514 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
            const v515 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
            let v516;
            switch (v514[0]) {
              case 'None': {
                
                const v519 = stdlib.eq(v479, v443);
                const v523 = stdlib.add(v515, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
                const v524 = ['Some', v515];
                const v525 = [v524, v515];
                const v526 = [v514, v523];
                const v527 = v519 ? v525 : v526;
                v516 = v527;
                
                break;
                }
              case 'Some': {
                const v530 = v514[1];
                v516 = v509;
                
                break;
                }
              }
            const v535 = v516[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
            let v541;
            switch (v535[0]) {
              case 'None': {
                
                v541 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
                
                break;
                }
              case 'Some': {
                const v545 = v535[1];
                v541 = v545;
                
                break;
                }
              }
            const v551 = v60[v541];
            const v552 = v551[stdlib.checkedBigNumberify('./index.rsh:142:53:array ref', stdlib.UInt_max, 0)];
            sim_r.txns.push({
              amt: v576,
              kind: 'from',
              to: v552,
              tok: undefined
              });
            sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22, v574]);
            sim_r.nextSt_noTime = stdlib.digest(ctc2, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 5), v22]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:145:21:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
      const cv574 = v426;
      const cv575 = v574;
      const cv576 = v576;
      
      v352 = cv352;
      v353 = cv353;
      v574 = cv574;
      v575 = cv575;
      v576 = cv576;
      
      continue;
      }
    else {
      const [v389] = txn2.data;
      const v395 = txn2.time;
      const v388 = txn2.from;
      const v391 = v389[stdlib.checkedBigNumberify('./index.rsh:115:38:array ref', stdlib.UInt_max, 1)];
      const v394 = stdlib.add(v576, v391);
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
        const cv574 = v395;
        const cv575 = v574;
        const cv576 = v403;
        
        v352 = cv352;
        v353 = cv353;
        v574 = cv574;
        v575 = cv575;
        v576 = cv576;
        
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
        const cv574 = v395;
        const cv575 = v574;
        const cv576 = v394;
        
        v352 = cv352;
        v353 = cv353;
        v574 = cv574;
        v575 = cv575;
        v576 = cv576;
        
        continue;}}
    }
  const v443 = v352.reduce((v435, v436) => {
    const v439 = stdlib.gt(v436, v435);
    const v441 = v439 ? v436 : v435;
    
    return v441;}, stdlib.checkedBigNumberify('reach standard library:124:62:decimal', stdlib.UInt_max, 0))
  const v452 = ['None', null];
  const v478 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 0)];
  const v479 = v352[stdlib.checkedBigNumberify('reach standard library:159:17:application', stdlib.UInt_max, 1)];
  const v501 = stdlib.eq(v478, v443);
  const v505 = ['Some', stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
  const v506 = [v505, stdlib.checkedBigNumberify('reach standard library:157:39:decimal', stdlib.UInt_max, 0)];
  const v508 = [v452, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1)];
  const v509 = v501 ? v506 : v508;
  const v514 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 0)];
  const v515 = v509[stdlib.checkedBigNumberify('reach standard library:160:15:array', stdlib.UInt_max, 1)];
  let v516;
  switch (v514[0]) {
    case 'None': {
      
      const v519 = stdlib.eq(v479, v443);
      const v523 = stdlib.add(v515, stdlib.checkedBigNumberify('reach standard library:166:34:decimal', stdlib.UInt_max, 1));
      const v524 = ['Some', v515];
      const v525 = [v524, v515];
      const v526 = [v514, v523];
      const v527 = v519 ? v525 : v526;
      v516 = v527;
      
      break;
      }
    case 'Some': {
      const v530 = v514[1];
      v516 = v509;
      
      break;
      }
    }
  const v535 = v516[stdlib.checkedBigNumberify('reach standard library:158:11:array', stdlib.UInt_max, 0)];
  let v541;
  switch (v535[0]) {
    case 'None': {
      
      v541 = stdlib.checkedBigNumberify('./index.rsh:40:57:decimal', stdlib.UInt_max, 0);
      
      break;
      }
    case 'Some': {
      const v545 = v535[1];
      v541 = v545;
      
      break;
      }
    }
  const v551 = v60[v541];
  const v552 = v551[stdlib.checkedBigNumberify('./index.rsh:142:53:array ref', stdlib.UInt_max, 0)];
  ;
  const txn2 = await (ctc.recv(6, 1, [ctc1], false, false));
  const [v565] = txn2.data;
  const v568 = txn2.time;
  const v564 = txn2.from;
  ;
  const v567 = stdlib.addressEq(v22, v564);
  stdlib.assert(v567, {
    at: './index.rsh:151:19:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Voter'
    });
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
    count: 8,
    size: 129
    }, {
    count: 14,
    size: 281
    }, {
    count: 13,
    size: 265
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
dup
dup
store 254
concat
store 253
int 0
itob
int 0
itob
concat
store 252
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
load 253
concat
load 252
concat
load 252
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
int 90000
+
dup
store 251
gtxna 0 ApplicationArgs 5
btoi
>
bz l1
load 251
gtxna 0 ApplicationArgs 5
btoi
-
store 250
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
load 253
concat
load 251
itob
concat
load 252
concat
int 0
itob
concat
load 250
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
load 252
substring 0 8
btoi
store 250
load 252
substring 8 16
btoi
store 249
int 0
load 250
load 250
int 0
>
select
dup
store 248
load 249
load 249
load 248
>
select
store 247
int 0
byte base64()
concat
byte base64(AAAAAAAAAAA=)
concat
int 1
itob
concat
int 1
int 0
concat
byte base64()
concat
int 0
itob
concat
load 250
load 247
==
select
dup
store 246
substring 0 9
store 245
load 246
substring 9 17
btoi
store 244
load 245
int 0
getbyte
int 0
==
bz l3
load 245
load 244
int 1
+
itob
concat
int 1
load 244
concat
byte base64()
concat
load 244
itob
concat
load 249
load 247
==
select
store 243
l3:
load 245
int 0
getbyte
int 1
==
bz l4
load 245
substring 1 9
btoi
store 242
load 246
store 243
l4:
l2:
load 243
substring 0 9
int 0
getbyte
int 0
==
bz l6
int 0
store 242
l6:
load 243
substring 0 9
int 0
getbyte
int 1
==
bz l7
load 243
substring 1 10
btoi
dup
store 241
store 242
l7:
l5:
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
int 8
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
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
store 248
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
// compute state in HM_Check 4
int 4
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
itob
concat
load 250
itob
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
load 248
substring 8 16
btoi
store 246
load 249
load 246
+
store 245
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
load 246
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 248
substring 0 8
btoi
dup
store 243
int 2
>=
bz l0
load 245
load 246
-
store 242
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxn 0 Sender
==
assert
gtxn 4 Amount
load 246
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
load 252
load 251
itob
concat
dup
store 244
substring 0 16
store 241
load 244
substring 16 24
btoi
store 240
load 253
gtxna 0 ApplicationArgs 5
btoi
>
dup
store 239
bz l1
load 253
gtxna 0 ApplicationArgs 5
btoi
-
store 238
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
concat
load 253
itob
concat
load 241
concat
load 240
itob
concat
load 238
itob
concat
load 242
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
load 238
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
load 241
substring 0 8
btoi
store 238
load 241
substring 8 16
btoi
store 237
int 0
load 238
load 238
int 0
>
select
dup
store 236
load 237
load 237
load 236
>
select
store 235
int 0
byte base64()
concat
byte base64(AAAAAAAAAAA=)
concat
store 234
load 238
load 235
==
store 233
int 1
int 0
concat
byte base64()
concat
dup
store 232
int 0
itob
concat
store 231
load 234
int 1
itob
concat
dup
store 230
load 231
load 233
select
dup
store 229
substring 0 9
store 228
load 229
substring 9 17
btoi
store 227
load 228
int 0
getbyte
int 0
==
bz l3
load 237
load 235
==
store 225
load 227
int 1
+
store 224
int 1
load 227
concat
byte base64()
concat
dup
store 223
load 227
itob
concat
store 222
load 228
load 224
itob
concat
dup
store 221
load 222
load 225
select
dup
store 220
store 226
l3:
load 228
int 0
getbyte
int 1
==
bz l4
load 228
substring 1 9
btoi
store 225
load 229
store 226
l4:
l2:
load 226
substring 0 9
dup
store 225
int 0
getbyte
int 0
==
bz l6
int 0
store 224
l6:
load 225
int 0
getbyte
int 1
==
bz l7
load 225
substring 1 9
btoi
dup
store 223
store 224
l7:
l5:
load 254
int 48
load 224
*
dup
int 48
+
substring3
dup
store 223
substring 0 32
store 222
gtxn 5 TypeEnum
int pay
==
assert
gtxn 5 Receiver
load 222
==
assert
gtxn 5 Amount
load 242
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
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
gtxna 0 ApplicationArgs 5
btoi
load 250
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
dup
gtxn 5 LastValid
==
assert
pop
l0:
load 252
int 0
int 8
load 243
*
substring3
load 252
int 8
load 243
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
load 252
int 8
dup
load 243
*
+
int 16
substring3
concat
load 251
load 246
+
itob
concat
dup
store 244
substring 0 16
store 242
load 253
gtxna 0 ApplicationArgs 5
btoi
>
bz l8
load 253
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
load 254
concat
load 253
itob
concat
load 242
concat
load 244
substring 16 24
concat
load 241
itob
concat
load 245
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
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 241
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
l8:
load 242
substring 0 8
btoi
store 241
load 242
substring 8 16
btoi
store 240
int 0
load 241
load 241
int 0
>
select
dup
store 239
load 240
load 240
load 239
>
select
store 238
int 0
byte base64()
concat
byte base64(AAAAAAAAAAA=)
concat
int 1
itob
concat
int 1
int 0
concat
byte base64()
concat
int 0
itob
concat
load 241
load 238
==
select
dup
store 237
substring 0 9
store 236
load 237
substring 9 17
btoi
store 235
load 236
int 0
getbyte
int 0
==
bz l10
load 236
load 235
int 1
+
itob
concat
int 1
load 235
concat
byte base64()
concat
load 235
itob
concat
load 240
load 238
==
select
store 234
l10:
load 236
int 0
getbyte
int 1
==
bz l11
load 236
substring 1 9
btoi
store 233
load 237
store 234
l11:
l9:
load 234
substring 0 9
int 0
getbyte
int 0
==
bz l13
int 0
store 233
l13:
load 234
substring 0 9
int 0
getbyte
int 1
==
bz l14
load 234
substring 1 10
btoi
dup
store 232
store 233
l14:
l12:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
int 48
load 233
*
dup
int 48
+
substring3
substring 0 32
==
assert
gtxn 4 Amount
load 245
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
// compute state in HM_Set 5
int 5
itob
load 255
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
gtxn 5 Fee
+
gtxn 4 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 250
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
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
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
concat
load 253
itob
concat
load 252
concat
load 251
itob
concat
load 250
itob
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
load 253
gtxna 0 ApplicationArgs 5
btoi
>
bz l0
load 253
gtxna 0 ApplicationArgs 5
btoi
-
store 248
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
concat
load 253
itob
concat
load 252
concat
load 251
itob
concat
load 248
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
load 248
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
load 252
substring 0 8
btoi
store 248
load 252
substring 8 16
btoi
store 247
int 0
load 248
load 248
int 0
>
select
dup
store 246
load 247
load 247
load 246
>
select
store 245
int 0
byte base64()
concat
byte base64(AAAAAAAAAAA=)
concat
int 1
itob
concat
int 1
int 0
concat
byte base64()
concat
int 0
itob
concat
load 248
load 245
==
select
dup
store 244
substring 0 9
store 243
load 244
substring 9 17
btoi
store 242
load 243
int 0
getbyte
int 0
==
bz l2
load 243
load 242
int 1
+
itob
concat
int 1
load 242
concat
byte base64()
concat
load 242
itob
concat
load 247
load 245
==
select
store 241
l2:
load 243
int 0
getbyte
int 1
==
bz l3
load 243
substring 1 9
btoi
store 240
load 244
store 241
l3:
l1:
load 241
substring 0 9
int 0
getbyte
int 0
==
bz l5
int 0
store 240
l5:
load 241
substring 0 9
int 0
getbyte
int 1
==
bz l6
load 241
substring 1 10
btoi
dup
store 239
store 240
l6:
l4:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
int 48
load 240
*
dup
int 48
+
substring3
substring 0 32
==
assert
gtxn 4 Amount
load 249
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
// compute state in HM_Set 5
int 5
itob
load 255
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
load 250
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
dup
gtxn 4 FirstValid
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
substring 0 96
store 243
load 244
substring 160 168
btoi
dup
store 242
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
load 242
itob
concat
load 243
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
int 90000
+
dup
store 241
gtxna 0 ApplicationArgs 5
btoi
>
bz l1
load 241
gtxna 0 ApplicationArgs 5
btoi
-
store 240
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
load 243
concat
load 241
itob
concat
load 250
concat
int 0
itob
concat
load 240
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
load 250
substring 0 8
btoi
store 240
load 250
substring 8 16
btoi
store 239
int 0
load 240
load 240
int 0
>
select
dup
store 238
load 239
load 239
load 238
>
select
store 237
int 0
byte base64()
concat
byte base64(AAAAAAAAAAA=)
concat
int 1
itob
concat
int 1
int 0
concat
byte base64()
concat
int 0
itob
concat
load 240
load 237
==
select
dup
store 236
substring 0 9
store 235
load 236
substring 9 17
btoi
store 234
load 235
int 0
getbyte
int 0
==
bz l3
load 235
load 234
int 1
+
itob
concat
int 1
load 234
concat
byte base64()
concat
load 234
itob
concat
load 239
load 237
==
select
store 233
l3:
load 235
int 0
getbyte
int 1
==
bz l4
load 235
substring 1 9
btoi
store 232
load 236
store 233
l4:
l2:
load 233
substring 0 9
int 0
getbyte
int 0
==
bz l6
int 0
store 232
l6:
load 233
substring 0 9
int 0
getbyte
int 1
==
bz l7
load 233
substring 1 10
btoi
dup
store 231
store 232
l7:
l5:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 243
int 48
load 232
*
dup
int 48
+
substring3
substring 0 32
==
assert
gtxn 4 Amount
load 249
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
// compute state in HM_Set 5
int 5
itob
load 255
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
                "name": "v574",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v565",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
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
                "name": "v574",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v576",
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
                "internalType": "struct T26",
                "name": "v389",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
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
                "name": "v574",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v576",
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
        "internalType": "struct T29",
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
                "name": "v571",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v573",
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
                "internalType": "struct T31",
                "name": "v296",
                "type": "tuple"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T33",
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
                "name": "v574",
                "type": "uint256"
              }
            ],
            "internalType": "struct T21",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v565",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
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
                "name": "v574",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v576",
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
                "internalType": "struct T26",
                "name": "v389",
                "type": "tuple"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
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
                "name": "v574",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v576",
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
        "internalType": "struct T29",
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
                "name": "v571",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v573",
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
                "internalType": "struct T31",
                "name": "v296",
                "type": "tuple"
              }
            ],
            "internalType": "struct T32",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T33",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611efb806100826000396000f3fe60806040526004361061004e5760003560e01c80630e02fe3b1461005a578063372c9abf1461006f5780635aa144b414610082578063b6455a0514610095578063b87338b0146100a857610055565b3661005557005b600080fd5b61006d610068366004611a07565b6100bb565b005b61006d61007d36600461194e565b610256565b61006d610090366004611977565b6102fe565b61006d6100a3366004611965565b610487565b61006d6100b6366004611989565b61083b565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146100f857600080fd5b60008055610104611468565b341561010f57600080fd5b61011f604083016020840161192d565b81516001600160a01b0391909116905261013f604083016020840161192d565b81516001600160a01b0391909116602091820152610163906040840190840161192d565b602082810180516001600160a01b039390931690925281516000908201819052825160409081018290528351818601805191909152935193518301939093526060840180518290525190910152517f3edc19012383f1a954d272136ca587df4f30f9b69fd94318a56658f3640102eb906101de908490611cc8565b60405180910390a16101ee6114a7565b8051339052606080830180518351602090810191909152845181850180519190915280516000920182905260408087015182519091015291518251909301929092528051436080909101528051853560a0909101525160c0015261025181610c62565b505050565b60405161026a906005908390602001611e51565b6040516020818303038152906040528051906020012060001c6000541461029057600080fd5b60008055341561029f57600080fd5b336102ad602083018361192d565b6001600160a01b0316146102c057600080fd5b7f3fd684d5a5cd7a8e5e62ecf7a1cfbbc4e9d8ed03496e7d09af98f376e95ccd7f816040516102ef9190611c11565b60405180910390a16000805533ff5b604051610312906004908390602001611dbc565b6040516020818303038152906040528051906020012060001c6000541461033857600080fd5b60008055610350610160820135610180830135611e65565b43101561035c57600080fd5b341561036757600080fd5b7f567ae109b1dd47ceee6dfad675c0a656d611b89ff6284ed2063d4fbc5a290a75816040516103969190611c59565b60405180910390a16103a66114c7565b6103b3602083018361192d565b81516001600160a01b039091169052604080518082019091526020830160026000835b82821015610402576103f36060830285013681900381019061199b565b815260200190600101906103d6565b50508351602001929092525050805160e0830135604091820152805180820182529061010084019060029083908390808284376000920191909152505050602080830180519290925281516101408501359101528051436040909101528051610180840135606090910152516101a083013560809091015261048381610d82565b5050565b60405161049b906004908390602001611dbc565b6040516020818303038152906040528051906020012060001c600054146104c157600080fd5b600080556104cd6114e7565b6104e1610160830135610180840135611e65565b43106104ec57600080fd5b6105006101e08301356101a0840135611e65565b8152346101e08301351461051357600080fd5b60026101c0830135106106aa5760405133906101e084013580156108fc02916000818181858888f19350505050158015610551573d6000803e3d6000fd5b50604080518082018252906101008401906002908390839080828437600092019190915250505060408083018051929092528151610140850135602091820152915191830191909152517fbdd7ba480b3393dd54cb828e033738f3055027bb7898a618736921b2a3ce223f906105c8908490611c2d565b60405180910390a16105d86114c7565b6105e5602084018461192d565b81516001600160a01b039091169052604080518082019091526020840160026000835b82821015610634576106256060830285013681900381019061199b565b81526020019060010190610608565b505083516020908101939093525050815160e08501356040918201528382018051518385018051919091529051830151815190930192909252815143910152516101808401356060909101528151610692906101e085013590611e7d565b6020820151608001526106a481610d82565b50610483565b60408051808201825261071391610100850190600290839083908082843760009201919091525050506101c08401356001610100860182600281106106ff57634e487b7160e01b600052603260045260246000fd5b602002013561070e9190611e65565b610eaa565b60608201515261072d6101e0830135610140840135611e65565b60608201805160209081019290925251908201526040517fbdd7ba480b3393dd54cb828e033738f3055027bb7898a618736921b2a3ce223f90610771908490611c2d565b60405180910390a16107816114c7565b61078e602084018461192d565b81516001600160a01b039091169052604080518082019091526020840160026000835b828210156107dd576107ce6060830285013681900381019061199b565b815260200190600101906107b1565b505083516020908101939093525050815160e085013560409182015283820180515183850180519190915290518301518151909301929092528151439101528051610180850135606090910152825190516080015261025181610d82565b60405161084f906002908390602001611cf0565b6040516020818303038152906040528051906020012060001c6000541461087557600080fd5b6000805561088161151b565b341561088c57600080fd5b61089e6102408301610220840161192d565b81516001600160a01b03909116905280516060830135602091820152815161020084013560409091015260009082018190525b6002811015610983576020830181600281106108fd57634e487b7160e01b600052603260045260246000fd5b602002016020810190610910919061192d565b6001600160a01b0316604083015260208201516109645760408201516001600160a01b03166109476102408501610220860161192d565b6001600160a01b03161461095c57600061095f565b60015b61096a565b81602001515b151560208301528061097b81611e94565b9150506108d1565b50602081015115156060820152604080518082019091526080830160026000835b828210156109d0576109c16060830285013681900381019061199b565b815260200190600101906109a4565b5050505060808201515260408051808201825290602084019060029083908390808284376000920191909152505050608082018051602001919091525160608301356040918201528051808201825290610140840190600290839083908082843760009201829052506080808601516060019490945260408051808201909152610a9e9490935086019150600290835b82821015610a8c57610a7d6060830285013681900381019061199b565b81526020019060010190610a60565b50508451606087013592509050610f48565b60a082015152604080518082018252610ae8916020850190600290839083908082843760009201919091525050506060840135610ae36102408601610220870161192d565b610fb8565b60a082015160200152610b0060016060840135611e65565b60a082015160409081019190915280518082018252610b4591610140850190600290839083908082843760009201919091525050506060840135610200850135610eaa565b8160a00151606001819052508060600151610b64578060a00151610b6a565b80608001515b60c08201526040517f8400c30339f6628441ca54ee41b7d90613faa6c375dabda844e99fb7fe65a6bf90610b9f908490611c8c565b60405180910390a1610baf6114a7565b610bbc602084018461192d565b81516001600160a01b0390911690526040805180820182529061018085019060029083908390808284376000920191909152505082516020908101929092525060c080840180518301518385018051919091528151604090810151825190950194909452815151815190940193909352516060908101518351909101528151436080919091015281516101c086013560a0919091015290516101e0850135910152610251815b600181602001516020015111610d1057610c7a61156a565b8151516001600160a01b031681526020808301805151828401528051820151604080850191909152815181015160608086019190915282510151608080860191909152855184015160a08601528251015160c08086019190915291519091015160e084015251610cef91600291849101611d05565b60408051601f19818403018152919052805160209091012060005550610d7f565b610d186115d0565b81515181516001600160a01b0390911690526020808301805160409081015184518401528451909201518351909201919091528051608090810151835160600152815160a090810151845190920191909152905160c0015182519091015261048381611072565b50565b6040805160208101909152600081526020820151606001518251604001511115610e5357602082015160600151825160400151610dbf9190611e7d565b8152610dc96115f0565b8251516001600160a01b0316815282516020908101518183015283516040908101518184015281850180515160608501528051830151608080860191909152855160a0860152815183015160c08601529051015160e084015251610e3291600491849101611dd1565b60408051601f19818403018152919052805160209091012060005550610483565b610e5b61164a565b82515181516001600160a01b0390911690528251602090810151825182015283018051518251604090810191909152815101518251606001525160809081015182519091015261025181611107565b610eb261165d565b60005b6002811015610f1a57848160028110610ede57634e487b7160e01b600052603260045260246000fd5b6020020151828260028110610f0357634e487b7160e01b600052603260045260246000fd5b602002015280610f1281611e94565b915050610eb5565b5081818460028110610f3c57634e487b7160e01b600052603260045260246000fd5b60200201529392505050565b610f5061167b565b60005b6002811015610f1a57848160028110610f7c57634e487b7160e01b600052603260045260246000fd5b6020020151828260028110610fa157634e487b7160e01b600052603260045260246000fd5b602002015280610fb081611e94565b915050610f53565b610fc061165d565b60005b600281101561103657848160028110610fec57634e487b7160e01b600052603260045260246000fd5b602002015182826002811061101157634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209290920201528061102e81611e94565b915050610fc3565b508181846002811061105857634e487b7160e01b600052603260045260246000fd5b6001600160a01b0390921660209290920201529392505050565b61107a6114c7565b81515181516001600160a01b03909116905281516020908101518251909101528151608001516110ae9062015f9090611e65565b8151604090810191909152825181015160208084018051929092528151600091015283516060908101518251909301929092528351608090810151825190930192909252835160a0015190519091015261048381610d82565b61110f6116a8565b60008082525b600281101561117b57825160400151816002811061114357634e487b7160e01b600052603260045260246000fd5b60209081029190910151908301819052825110611161578151611167565b81602001515b82528061117381611e94565b915050611115565b5080516040808301918252606083018051600090819052815160016020918201819052608087018051829052805186018490525160a0880180519190915251820192909252915160c086018051919091525190910152905183519091015151146111e9578060c001516111ef565b8060a001515b60e082018190525151600090600181111561121a57634e487b7160e01b600052602160045260246000fd5b14156112ae576101208101805160019081905260e083018051602090810151845160400152925161014085018051919091528151840151905184015280515161016085015152519091015161126f9190611e65565b61016082015160200152604080820151835190910151600160200201511461129c578061016001516112a3565b8061014001515b6101008201526112f4565b600160e0820151515160018111156112d657634e487b7160e01b600052602160045260246000fd5b14156112f45760e08101518051604001516101808301526101008201525b60006101008201515151600181111561131d57634e487b7160e01b600052602160045260246000fd5b14156113305760006101a0820152611379565b60016101008201515151600181111561135957634e487b7160e01b600052602160045260246000fd5b14156113795761010081015151604001516101c082018190526101a08201525b8151602001516101a0820151600281106113a357634e487b7160e01b600052603260045260246000fd5b6020020151518251608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156113e5573d6000803e3d6000fd5b5060408051808201909152600080825260208201528251516001600160a01b031681528251606001516020808301919091526040516114489160059184910191825280516001600160a01b03166020808401919091520151604082015260600190565b60408051601f198184030181529190528051602090910120600055505050565b604051806080016040528061147b61165d565b8152602001611488611797565b815260200161149561167b565b81526020016114a261165d565b905290565b60405180604001604052806114ba6117c1565b81526020016114a26117e4565b60405180604001604052806114da611818565b81526020016114a2611848565b60405180608001604052806000815260200161150161185b565b815260200161150e61185b565b81526020016114a261185b565b6040518060e0016040528061152e611797565b815260006020820181905260408201819052606082015260800161155061186e565b815260200161155d61186e565b81526020016114a261186e565b60405180610100016040528060006001600160a01b0316815260200161158e61165d565b8152602001600081526020016115a261167b565b81526020016115af61165d565b81526020016115bc61165d565b815260200160008152602001600081525090565b60405180604001604052806115e36118a2565b8152600060209091015290565b60405180610100016040528060006001600160a01b0316815260200161161461167b565b81526020016000815260200161162861165d565b8152602001600081526020016000815260200160008152602001600081525090565b60405180604001604052806115e36118c5565b60405180604001604052806002906020820280368337509192915050565b60405180604001604052806002905b611692611797565b81526020019060019003908161168a5790505090565b604051806101e001604052806000815260200160008152602001600081526020016116ee6040805160608101909152806000815260006020820181905260409091015290565b8152604080516060810182526000808252602082810182905292820152910190815260200161171b6118e8565b81526020016117286118e8565b81526020016117356118e8565b81526020016117426118e8565b8152604080516060810182526000808252602082810182905292820152910190815260200161176f6118e8565b815260200161177c6118e8565b81526020016000815260200160008152602001600081525090565b604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b604051806040016040528060006001600160a01b031681526020016114a261165d565b6040518060e001604052806117f761165d565b81526020016000815260200161180b61167b565b815260200161177c61165d565b604051806060016040528060006001600160a01b0316815260200161183b61167b565b8152602001600081525090565b6040518060a0016040528061162861165d565b604051806040016040528061183b61165d565b604051806080016040528061188161167b565b815260200161188e61165d565b8152602001600081526020016114a261165d565b6040518060c0016040528060006001600160a01b0316815260200161180b61167b565b6040518060a0016040528060006001600160a01b031681526020016115af61167b565b6040805160a081018252600091810182815260608201839052608082019290925290819061183b565b80356001600160a01b038116811461192857600080fd5b919050565b60006020828403121561193e578081fd5b61194782611911565b9392505050565b60006060828403121561195f578081fd5b50919050565b6000610200828403121561195f578081fd5b60006101e0828403121561195f578081fd5b6000610240828403121561195f578081fd5b6000606082840312156119ac578081fd5b6040516060810181811067ffffffffffffffff821117156119db57634e487b7160e01b83526041600452602483fd5b6040526119e783611911565b815260208301356020820152604083013560408201528091505092915050565b60006040828403121561195f578081fd5b8060005b6002811015611a5f576001600160a01b03611a3683611911565b168452602082810135908501526040808301359085015260609384019390910190600101611a1c565b50505050565b8060005b6002811015611a5f57815180516001600160a01b03168552602080820151818701526040918201519186019190915260609094019390910190600101611a69565b6040818337600060408301525050565b8060005b6002811015611a5f578151845260209384019390910190600101611abe565b6001600160a01b03611aee82611911565b168252602080830181830160005b6002811015611b3157611b2383611b1284611911565b6001600160a01b0316815260200190565b925090830190600101611afc565b5050505060608101356060830152611b4f6080830160808301611a18565b610140611b60818401828401611aaa565b50610180611b72818401828401611aaa565b506101c081810135908301526101e090810135910152565b6001600160a01b03611b9b82611911565b168252611bae6020830160208301611a18565b60e081013560e0830152610100604081830182850137506101408181013590830152610160808201359083015261018080820135908301526101a090810135910152565b6001600160a01b03611c0382611911565b168252602090810135910152565b60608101611c1f8284611bf2565b604092830135919092015290565b6102008101611c3c8284611b8a565b6101c083810135908301526101e092830135929091019190915290565b6101e08101611c688284611b8a565b6101c080840135801515808214611c7e57600080fd5b808386015250505092915050565b6102408101611c9b8284611add565b61020083810135908301526102206001600160a01b03611cbc828601611911565b16818401525092915050565b81358152604081016001600160a01b03611ce460208501611911565b16602083015292915050565b82815261022081016119476020830184611add565b82815281516001600160a01b031660208083019190915282810151610220830191906040840160005b6002811015611d565782516001600160a01b0316825260208201928401929150600101611d2e565b50505050604083015160808301526060830151611d7660a0840182611a65565b506080830151611d8a610160840182611aba565b5060a0830151611d9e6101a0840182611aba565b5060c08301516101e083015260e08301516102008301529392505050565b8281526101e081016119476020830184611b8a565b82815281516001600160a01b03166020808301919091528201516101e0820190611dfe6040840182611a65565b5060408301516101008301526060830151611e1d610120840182611aba565b50608083015161016083015260a083015161018083015260c08301516101a083015260e08301516101c08301529392505050565b828152606081016119476020830184611bf2565b60008219821115611e7857611e78611eaf565b500190565b600082821015611e8f57611e8f611eaf565b500390565b6000600019821415611ea857611ea8611eaf565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220832fddbcf144914b28821ea658c76f38e336f605cc0fd37a6173e5e1ecd0d75a64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

