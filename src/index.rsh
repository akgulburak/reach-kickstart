'reach 0.1';

export const main =
    Reach.App(
        {},
        [
            Participant('Admin', {
                // Projenin ismini döndür
                announce: Fun([Address,UInt], UInt),
                update: Fun([UInt,UInt],Bool),
                //announce2: Fun([Address,UInt], UInt),
//                printN: Fun([] , UInt)
            }),
            ParticipantClass('Nominee', {
                // Projenin ismini döndür
                getParams: Fun([Address], UInt),
                updateN: Fun([UInt,UInt],Bool),
//                printN: Fun([] , UInt)
            }),
            ParticipantClass('Voter', {
                // Tüm fikir isimlerini al oyladığın index'i döndür
                //voteTitle: Fun([Array(Tuple(Address, Bytes(128)), 5)], UInt),
                shouldBuyTicket: Fun([Tuple(UInt,UInt),Tuple(UInt,UInt)] , Tuple(UInt, UInt)),
                getBalance: Fun([Address] , UInt),
                shouldPay: Fun([] , Bool),
                updateV: Fun([UInt,UInt],Bool),
                //getTitles: Fun([UInt] , Bool),
//                printV: Fun([] , UInt)
            })
        ],
        (Admin, Nominee, Voter) => {
//            Admin.publish();

            
            // Array.replicate ile 5 adet None tipinde veri tekrarlayarak bir array oluşturuyoruz.
            Admin.only(() => {
                const dummyAddress = this;
                //const deneme = declassify(interact.announce(this,5));
            });
            Admin.publish(dummyAddress);

            const idea = [dummyAddress, 0, 0];
            const getIndex = (m) => fromMaybe(m, (() => 0), ((x) => x));
//            var [ideas,addresses, ideaCount] = [Array.replicate(5, idea),Array.replicate(5, dummyAddress), 0];
            const [ideas,addresses ,ideaCount, titles] = 
            parallelReduce([Array.replicate(2, idea),Array.replicate(2, dummyAddress),0,Array.replicate(2, 0)])
            .invariant(balance() == 0)
            .while(ideaCount<=1)
            .case(Nominee,
                (() => {
                    const title = declassify(interact.getParams(this));
                    const addr = this; 
                    const index = getIndex(addresses.indexOf(this));
                return ({
                    msg : [title,addr]
                });
                }),
                ((bid) => (0)),
                ((msg) => {

                const newArray = Array.set(ideas,ideaCount, [msg[1], ideaCount,msg[0]]);
                const newAdress = Array.set(addresses,ideaCount, msg[1]);

//                return [newArray, newAdress , ideaCount + 1];
               /* if (addresses.includes(msg[1])) {
                    return [ideas, msg[1], 6] 
                }*/
                return addresses.includes(msg[1]) ? [ideas, addresses, ideaCount,titles] : [newArray, newAdress , ideaCount+1,titles.set(ideaCount,msg[0])];
                }))
            .timeout(false,()=>{
                return [ideas,addresses, 6,titles];
            }
            );
/*
            var [ideas,addresses, ideaCount] = [Array.replicate(5, idea),Array.replicate(5, dummyAddress),0];
            invariant(balance() == 0); // Burada para harcanmayacak.
            while (ideaCount<=4) {
                commit();
                
                // Her bir oyuncudan fikir al
                
                Nominee.only(() => {
                    const addr = this; // Fikir sahibinin adresini al
                });
                Nominee.publish(addr)

                if (addresses.includes(addr)) {
                    [ideas, ideaCount] = [ideas, ideaCount+1];
                   continue;
                }else{
                    commit();
                    Nominee.only(() => {
                        const title = declassify(interact.getParams(this));
                    });
                    Nominee.publish(title);
                    // ideas array'inin verilen indexini değiştir
                    const newArray = Array.set(ideas,ideaCount, [addr, 0,title]);
                    const newAdress = Array.set(addresses,ideaCount, addr);
                    [ideas,addresses, ideaCount] = [newArray, newAdress , ideaCount + 1];
                    continue;    
                }
            }
            */
            const [ timeRemaining, keepGoing ] = makeDeadline(6);
            // makeDeadline burada olacak
            const [oylar , toplamPara] = parallelReduce([Array.replicate(2, 0),0])
                .invariant(balance()  == toplamPara)
                .while(keepGoing())
                .case(Voter,
                    (() => {
                        const mbid = declassify(interact.shouldBuyTicket([titles[0],titles[1]],[oylar[0],oylar[1]]));
//                        const titleSent = declassify(interact.getTitles(titles[0]));
                        //const shouldPay = declassify(interact.shouldPay());
                        return ({
                            msg: mbid
                        });
                    }),
                        ((bid) => bid[1]),
                        ((choices) => {
                        if(choices[0]>=2){
                            transfer(choices[1]).to(this);
                            return [oylar,toplamPara];
                        }else{
                            //transfer(choices[1]).to(ideas[choices[0]][0]);
                            return [oylar.set(choices[0],oylar[choices[0]]+1) ,toplamPara+choices[1]];
                        }
                        //transfer(choices[1]).to(ideas[choices[0]][0]);
                    })
                ).timeout(timeRemaining(),()=>{
                    Voter.publish();
                    return [oylar,toplamPara];
                }
                );
/*
            var [m,winnerIndex] = [0,0];
            invariant(balance() == toplamPara); // Burada para harcanmayacak.
            while (m<=1) {
                if(ideas[m][1]==getIndex(oylar.indexOf(oylar.max()))){
                    [m, winnerIndex] = [m+1, m]
                    continue;
                }else{
                    [m, winnerIndex] = [m+1, winnerIndex]
                    continue;
                }
            }
*/      



            commit();
            Admin.only(() => {
                const winnerIndex = getIndex(oylar.indexOf(oylar.max()));
                const winnerTitle = ideas[winnerIndex][2];
                const winnerAddress = ideas[winnerIndex][0];
                const winning = declassify(interact.update(winnerTitle,toplamPara));
//                const winnerTotal = declassify(interact.announce(winnerAddress,winnerTitle));
//                const x = declassify(interact.announce2(winnerAddress,ideas[0][2]));
            });
            Admin.publish(winnerTitle,winnerAddress,winnerIndex);            

            transfer(balance()).to(winnerAddress);

            commit();
            Nominee.only(() => {
            const winning = declassify(interact.updateN(winnerTitle,toplamPara));
            });
            Nominee.publish();

            commit();
            Voter.only(() => {
            const winning = declassify(interact.updateV(winnerTitle,toplamPara));
            });
            Voter.publish();

            commit();
            //showOutcom            
            //showOutcome(getIndex(oylar.indexOf(oylar.max())));
            exit();
     });
        
