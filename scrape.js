const ObjectsToCsv = require("objects-to-csv");

let dots = [
  {
    x: 441.86651611328125,
    y: 199.84896850585938,
  },
  {
    x: 288.69720458984375,
    y: 215.08206176757812,
  },
  {
    x: 482.6358642578125,
    y: 313.10369873046875,
  },
  {
    x: 263.19512939453125,
    y: 237.590576171875,
  },
  {
    x: 389.3759765625,
    y: 149.1690673828125,
  },
  {
    x: 430.2521057128906,
    y: 238.5978546142578,
  },
  {
    x: 377.8875427246094,
    y: 247.5469512939453,
  },
  {
    x: 477.5461120605469,
    y: 209.57691955566406,
  },
  {
    x: 425.5447998046875,
    y: 194.7092742919922,
  },
  {
    x: 458.6530456542969,
    y: 214.23670959472656,
  },
  {
    x: 566.8670043945312,
    y: 155.8661346435547,
  },
  {
    x: 399.28790283203125,
    y: 170.09681701660156,
  },
  {
    x: 471.76953125,
    y: 282.8178405761719,
  },
  {
    x: 314.16888427734375,
    y: 229.192138671875,
  },
  {
    x: 398.9693298339844,
    y: 181.26333618164062,
  },
  {
    x: 475.7107238769531,
    y: 165.24588012695312,
  },
  {
    x: 663.6937255859375,
    y: 177.57962036132812,
  },
  {
    x: 496.3280334472656,
    y: 257.76190185546875,
  },
  {
    x: 431.2759094238281,
    y: 263.5144958496094,
  },
  {
    x: 499.0088806152344,
    y: 243.17843627929688,
  },
  {
    x: 462.09136962890625,
    y: 304.9418640136719,
  },
  {
    x: 605.0487060546875,
    y: 216.8218536376953,
  },
  {
    x: 493.3494567871094,
    y: 148.05397033691406,
  },
  {
    x: 485.8443908691406,
    y: 260.62017822265625,
  },
  {
    x: 418.7370910644531,
    y: 170.00271606445312,
  },
  {
    x: 469.6111145019531,
    y: 169.16004943847656,
  },
  {
    x: 523.0188598632812,
    y: 252.53639221191406,
  },
  {
    x: 508.86376953125,
    y: 256.3999938964844,
  },
  {
    x: 647.7442016601562,
    y: 222.68682861328125,
  },
  {
    x: 341.9280700683594,
    y: 214.1109619140625,
  },
  {
    x: 477.9912414550781,
    y: 301.9440612792969,
  },
  {
    x: 376.2752990722656,
    y: 266.4156494140625,
  },
  {
    x: 549.244384765625,
    y: 284.89398193359375,
  },
  {
    x: 413.4857177734375,
    y: 303.6224365234375,
  },
  {
    x: 410.7843933105469,
    y: 188.95359802246094,
  },
  {
    x: 423.4487609863281,
    y: 154.8123779296875,
  },
  {
    x: 423.7604675292969,
    y: 210.56005859375,
  },
  {
    x: 378.25933837890625,
    y: 167.08218383789062,
  },
  {
    x: 434.70086669921875,
    y: 286.6116027832031,
  },
  {
    x: 426.1642150878906,
    y: 141.9641571044922,
  },
  {
    x: 517.6357421875,
    y: 152.2503204345703,
  },
  {
    x: 466.7856750488281,
    y: 214.00978088378906,
  },
  {
    x: 500.2001037597656,
    y: 232.38848876953125,
  },
  {
    x: 483.55694580078125,
    y: 178.72604370117188,
  },
  {
    x: 388.5297546386719,
    y: 167.7190704345703,
  },
  {
    x: 648.160888671875,
    y: 161.9124755859375,
  },
  {
    x: 371.9100646972656,
    y: 194.64767456054688,
  },
  {
    x: 225.0291748046875,
    y: 198.45835876464844,
  },
  {
    x: 497.4586486816406,
    y: 303.896484375,
  },
  {
    x: 316.54150390625,
    y: 136.4246368408203,
  },
  {
    x: 431.6673583984375,
    y: 200.80477905273438,
  },
  {
    x: 405.8023986816406,
    y: 261.1448059082031,
  },
  {
    x: 343.36212158203125,
    y: 247.38189697265625,
  },
  {
    x: 498.7344665527344,
    y: 178.67105102539062,
  },
  {
    x: 476.2778015136719,
    y: 309.2705383300781,
  },
  {
    x: 439.83441162109375,
    y: 310.23199462890625,
  },
  {
    x: 573.3594970703125,
    y: 268.310302734375,
  },
  {
    x: 508.5867919921875,
    y: 231.8888397216797,
  },
  {
    x: 390.2861328125,
    y: 223.6790771484375,
  },
  {
    x: 517.5236206054688,
    y: 201.2159881591797,
  },
  {
    x: 462.738525390625,
    y: 302.0576171875,
  },
  {
    x: 379.8419189453125,
    y: 272.5168762207031,
  },
  {
    x: 501.6979064941406,
    y: 297.544921875,
  },
  {
    x: 634.7280883789062,
    y: 279.0736389160156,
  },
  {
    x: 413.8400573730469,
    y: 146.68325805664062,
  },
  {
    x: 457.8326110839844,
    y: 199.82838439941406,
  },
  {
    x: 465.92962646484375,
    y: 227.40432739257812,
  },
  {
    x: 412.5152282714844,
    y: 202.5966796875,
  },
  {
    x: 439.37908935546875,
    y: 226.7316131591797,
  },
  {
    x: 497.92340087890625,
    y: 270.068359375,
  },
  {
    x: 441.2324523925781,
    y: 196.310791015625,
  },
  {
    x: 443.2712707519531,
    y: 209.30706787109375,
  },
  {
    x: 523.7973022460938,
    y: 206.5745391845703,
  },
  {
    x: 521.7691040039062,
    y: 158.0488739013672,
  },
  {
    x: 423.30352783203125,
    y: 263.67138671875,
  },
  {
    x: 433.4650573730469,
    y: 289.67572021484375,
  },
  {
    x: 229.7673797607422,
    y: 254.8629608154297,
  },
  {
    x: 393.4733581542969,
    y: 301.18231201171875,
  },
  {
    x: 610.1046752929688,
    y: 158.51486206054688,
  },
  {
    x: 379.09466552734375,
    y: 164.03408813476562,
  },
  {
    x: 436.90924072265625,
    y: 206.7184600830078,
  },
  {
    x: 510.15277099609375,
    y: 307.29119873046875,
  },
  {
    x: 460.1540222167969,
    y: 209.26885986328125,
  },
  {
    x: 424.51373291015625,
    y: 293.97052001953125,
  },
  {
    x: 390.96307373046875,
    y: 202.58592224121094,
  },
  {
    x: 647.653564453125,
    y: 229.36740112304688,
  },
  {
    x: 549.4535522460938,
    y: 196.8310546875,
  },
  {
    x: 230.77052307128906,
    y: 287.3784484863281,
  },
  {
    x: 531.7230224609375,
    y: 262.8980407714844,
  },
  {
    x: 239.84909057617188,
    y: 184.77244567871094,
  },
  {
    x: 605.739501953125,
    y: 146.89837646484375,
  },
  {
    x: 262.07440185546875,
    y: 135.69284057617188,
  },
  {
    x: 469.4544982910156,
    y: 179.3367462158203,
  },
  {
    x: 473.2852478027344,
    y: 253.4783172607422,
  },
  {
    x: 397.5066223144531,
    y: 260.0790710449219,
  },
  {
    x: 445.2572326660156,
    y: 157.33856201171875,
  },
  {
    x: 314.3659362792969,
    y: 292.3118591308594,
  },
  {
    x: 393.0371398925781,
    y: 229.4263153076172,
  },
  {
    x: 541.8116455078125,
    y: 145.94869995117188,
  },
  {
    x: 478.4375915527344,
    y: 261.4923095703125,
  },
  {
    x: 448.07110595703125,
    y: 296.0345153808594,
  },
  {
    x: 397.81646728515625,
    y: 190.03082275390625,
  },
  {
    x: 450.6871337890625,
    y: 140.9874725341797,
  },
  {
    x: 505.43377685546875,
    y: 298.5257873535156,
  },
  {
    x: 366.991943359375,
    y: 167.56044006347656,
  },
  {
    x: 244.8400115966797,
    y: 190.97470092773438,
  },
  {
    x: 375.16375732421875,
    y: 162.2017822265625,
  },
  {
    x: 376.9656677246094,
    y: 165.28099060058594,
  },
  {
    x: 463.5378112792969,
    y: 215.91534423828125,
  },
  {
    x: 431.2095947265625,
    y: 212.74569702148438,
  },
  {
    x: 469.05072021484375,
    y: 293.70458984375,
  },
  {
    x: 469.1419982910156,
    y: 197.8237762451172,
  },
  {
    x: 515.477294921875,
    y: 302.3008117675781,
  },
  {
    x: 598.7647094726562,
    y: 261.3349914550781,
  },
  {
    x: 486.24462890625,
    y: 244.519287109375,
  },
  {
    x: 669.4771118164062,
    y: 297.2462158203125,
  },
  {
    x: 434.7630310058594,
    y: 152.02398681640625,
  },
  {
    x: 418.8238525390625,
    y: 254.93975830078125,
  },
  {
    x: 672.5399780273438,
    y: 252.33541870117188,
  },
  {
    x: 485.29217529296875,
    y: 234.1329345703125,
  },
  {
    x: 405.4953918457031,
    y: 271.0760803222656,
  },
  {
    x: 479.4068908691406,
    y: 154.15850830078125,
  },
  {
    x: 429.8719787597656,
    y: 221.486572265625,
  },
  {
    x: 518.7621459960938,
    y: 144.59652709960938,
  },
  {
    x: 519.3676147460938,
    y: 255.5196990966797,
  },
  {
    x: 416.9297790527344,
    y: 153.91867065429688,
  },
  {
    x: 298.2788391113281,
    y: 220.27108764648438,
  },
  {
    x: 428.0240783691406,
    y: 298.4048156738281,
  },
  {
    x: 522.4141235351562,
    y: 160.38626098632812,
  },
  {
    x: 432.177978515625,
    y: 151.0531463623047,
  },
  {
    x: 525.2354736328125,
    y: 246.89295959472656,
  },
  {
    x: 282.5277099609375,
    y: 212.9369659423828,
  },
  {
    x: 510.84979248046875,
    y: 260.81884765625,
  },
  {
    x: 272.4628601074219,
    y: 171.2568817138672,
  },
  {
    x: 478.6550598144531,
    y: 203.28309631347656,
  },
  {
    x: 514.1008911132812,
    y: 285.98272705078125,
  },
  {
    x: 383.4165954589844,
    y: 176.8689727783203,
  },
  {
    x: 557.9772338867188,
    y: 267.9950256347656,
  },
  {
    x: 598.6223754882812,
    y: 149.5489959716797,
  },
  {
    x: 565.0244750976562,
    y: 267.116943359375,
  },
  {
    x: 386.8251647949219,
    y: 297.6117248535156,
  },
  {
    x: 508.0317077636719,
    y: 267.72711181640625,
  },
  {
    x: 379.95367431640625,
    y: 181.93649291992188,
  },
  {
    x: 468.1274108886719,
    y: 139.56785583496094,
  },
  {
    x: 441.9580078125,
    y: 175.20509338378906,
  },
  {
    x: 248.68275451660156,
    y: 225.36209106445312,
  },
  {
    x: 387.3132629394531,
    y: 140.0531005859375,
  },
  {
    x: 432.6484680175781,
    y: 281.32611083984375,
  },
  {
    x: 449.3620300292969,
    y: 180.7500457763672,
  },
  {
    x: 488.4936218261719,
    y: 272.3124084472656,
  },
  {
    x: 372.05615234375,
    y: 300.37261962890625,
  },
  {
    x: 259.9141845703125,
    y: 189.4355010986328,
  },
  {
    x: 624.1572265625,
    y: 295.58514404296875,
  },
  {
    x: 597.3497314453125,
    y: 301.0726318359375,
  },
  {
    x: 376.53778076171875,
    y: 289.1856994628906,
  },
  {
    x: 483.2040710449219,
    y: 302.434814453125,
  },
  {
    x: 436.708251953125,
    y: 173.86016845703125,
  },
  {
    x: 521.6917114257812,
    y: 178.38414001464844,
  },
  {
    x: 513.00244140625,
    y: 251.47216796875,
  },
  {
    x: 385.4089660644531,
    y: 167.97402954101562,
  },
  {
    x: 486.3298645019531,
    y: 219.6903839111328,
  },
  {
    x: 267.9204406738281,
    y: 157.89646911621094,
  },
  {
    x: 326.3561096191406,
    y: 203.95494079589844,
  },
  {
    x: 513.600341796875,
    y: 303.33123779296875,
  },
  {
    x: 443.8444519042969,
    y: 180.54014587402344,
  },
  {
    x: 413.46044921875,
    y: 175.33193969726562,
  },
  {
    x: 338.50238037109375,
    y: 187.03048706054688,
  },
  {
    x: 419.7107849121094,
    y: 136.5833282470703,
  },
  {
    x: 492.35906982421875,
    y: 269.99749755859375,
  },
  {
    x: 384.26776123046875,
    y: 207.79432678222656,
  },
  {
    x: 441.74285888671875,
    y: 253.58096313476562,
  },
  {
    x: 491.0263366699219,
    y: 280.9393615722656,
  },
  {
    x: 398.3197326660156,
    y: 214.10955810546875,
  },
  {
    x: 375.6382751464844,
    y: 141.75540161132812,
  },
  {
    x: 496.14056396484375,
    y: 291.374267578125,
  },
  {
    x: 432.7892150878906,
    y: 158.40261840820312,
  },
  {
    x: 383.94189453125,
    y: 266.10272216796875,
  },
  {
    x: 358.1038513183594,
    y: 248.3225860595703,
  },
  {
    x: 410.14117431640625,
    y: 314.84698486328125,
  },
  {
    x: 380.0359802246094,
    y: 308.4007263183594,
  },
  {
    x: 450.92034912109375,
    y: 285.2016296386719,
  },
  {
    x: 570.2958984375,
    y: 225.9883575439453,
  },
  {
    x: 452.79931640625,
    y: 241.5033416748047,
  },
  {
    x: 376.0127258300781,
    y: 217.02513122558594,
  },
  {
    x: 326.0188293457031,
    y: 233.15753173828125,
  },
  {
    x: 403.0648193359375,
    y: 289.2831726074219,
  },
  {
    x: 515.0313110351562,
    y: 259.73480224609375,
  },
  {
    x: 430.570556640625,
    y: 158.12828063964844,
  },
  {
    x: 470.0754699707031,
    y: 227.67337036132812,
  },
  {
    x: 520.4735717773438,
    y: 312.60809326171875,
  },
  {
    x: 496.3363037109375,
    y: 213.0782928466797,
  },
  {
    x: 247.83712768554688,
    y: 264.71234130859375,
  },
  {
    x: 584.9177856445312,
    y: 294.7702331542969,
  },
  {
    x: 477.90350341796875,
    y: 251.19700622558594,
  },
  {
    x: 386.1322021484375,
    y: 153.40667724609375,
  },
  {
    x: 491.54742431640625,
    y: 284.04107666015625,
  },
  {
    x: 399.401611328125,
    y: 255.23306274414062,
  },
  {
    x: 422.034423828125,
    y: 212.54774475097656,
  },
  {
    x: 652.3016357421875,
    y: 179.1937713623047,
  },
  {
    x: 441.17523193359375,
    y: 150.6519012451172,
  },
  {
    x: 398.2233581542969,
    y: 177.72738647460938,
  },
  {
    x: 268.8894348144531,
    y: 287.3995056152344,
  },
  {
    x: 412.9510803222656,
    y: 225.54539489746094,
  },
  {
    x: 442.74908447265625,
    y: 153.26730346679688,
  },
  {
    x: 390.4070739746094,
    y: 165.164794921875,
  },
  {
    x: 508.302734375,
    y: 198.60372924804688,
  },
  {
    x: 648.5786743164062,
    y: 300.2346496582031,
  },
  {
    x: 388.8009338378906,
    y: 169.71914672851562,
  },
  {
    x: 387.3471984863281,
    y: 263.4550476074219,
  },
  {
    x: 436.7758483886719,
    y: 142.0924072265625,
  },
  {
    x: 456.4234313964844,
    y: 217.57476806640625,
  },
  {
    x: 484.26593017578125,
    y: 290.25872802734375,
  },
  {
    x: 390.64117431640625,
    y: 170.75392150878906,
  },
  {
    x: 475.56536865234375,
    y: 251.9207000732422,
  },
  {
    x: 421.9615783691406,
    y: 250.38710021972656,
  },
  {
    x: 320.682373046875,
    y: 227.34747314453125,
  },
  {
    x: 386.30322265625,
    y: 257.4237365722656,
  },
  {
    x: 415.8132629394531,
    y: 150.15396118164062,
  },
  {
    x: 485.2706298828125,
    y: 143.2500457763672,
  },
  {
    x: 396.5846252441406,
    y: 312.9530029296875,
  },
  {
    x: 499.0531005859375,
    y: 245.05670166015625,
  },
  {
    x: 435.9261169433594,
    y: 229.27798461914062,
  },
  {
    x: 508.3279724121094,
    y: 143.69007873535156,
  },
  {
    x: 659.51171875,
    y: 206.05934143066406,
  },
  {
    x: 447.9040832519531,
    y: 152.7427520751953,
  },
  {
    x: 475.2454528808594,
    y: 140.91616821289062,
  },
  {
    x: 406.4466552734375,
    y: 176.3790283203125,
  },
  {
    x: 353.6440734863281,
    y: 200.89645385742188,
  },
  {
    x: 464.5396423339844,
    y: 302.2423095703125,
  },
  {
    x: 440.540283203125,
    y: 267.247314453125,
  },
  {
    x: 513.9260864257812,
    y: 145.55247497558594,
  },
  {
    x: 665.4635009765625,
    y: 222.1818389892578,
  },
  {
    x: 646.564453125,
    y: 182.8429412841797,
  },
  {
    x: 441.3383483886719,
    y: 180.5012664794922,
  },
  {
    x: 387.77581787109375,
    y: 191.05804443359375,
  },
  {
    x: 462.0444641113281,
    y: 152.89801025390625,
  },
  {
    x: 486.68756103515625,
    y: 233.33236694335938,
  },
  {
    x: 465.68359375,
    y: 251.2008819580078,
  },
  {
    x: 377.2225646972656,
    y: 165.04501342773438,
  },
  {
    x: 392.76190185546875,
    y: 248.04434204101562,
  },
  {
    x: 466.1651916503906,
    y: 169.7392120361328,
  },
  {
    x: 416.29559326171875,
    y: 216.20697021484375,
  },
  {
    x: 252.331298828125,
    y: 293.9774169921875,
  },
  {
    x: 420.74969482421875,
    y: 141.7440185546875,
  },
  {
    x: 260.51629638671875,
    y: 234.52349853515625,
  },
  {
    x: 487.0806579589844,
    y: 140.96676635742188,
  },
  {
    x: 395.26580810546875,
    y: 310.8170166015625,
  },
  {
    x: 467.1396179199219,
    y: 201.9626007080078,
  },
  {
    x: 397.0632019042969,
    y: 272.02056884765625,
  },
  {
    x: 446.7138671875,
    y: 303.766357421875,
  },
  {
    x: 293.0850830078125,
    y: 247.13156127929688,
  },
  {
    x: 482.0335998535156,
    y: 198.09934997558594,
  },
  {
    x: 574.71337890625,
    y: 205.81024169921875,
  },
  {
    x: 472.1734924316406,
    y: 289.9476013183594,
  },
  {
    x: 422.9754943847656,
    y: 199.85231018066406,
  },
  {
    x: 255.36126708984375,
    y: 181.6512908935547,
  },
  {
    x: 526.034423828125,
    y: 234.36248779296875,
  },
  {
    x: 381.53460693359375,
    y: 295.9878234863281,
  },
  {
    x: 387.61846923828125,
    y: 227.64735412597656,
  },
  {
    x: 397.2164611816406,
    y: 211.57261657714844,
  },
  {
    x: 588.830810546875,
    y: 264.9841003417969,
  },
  {
    x: 377.7055969238281,
    y: 151.31768798828125,
  },
  {
    x: 424.0596923828125,
    y: 276.21710205078125,
  },
  {
    x: 559.3235473632812,
    y: 196.391357421875,
  },
  {
    x: 347.2054748535156,
    y: 214.865966796875,
  },
  {
    x: 477.865478515625,
    y: 136.0851287841797,
  },
  {
    x: 418.6684265136719,
    y: 148.7931671142578,
  },
  {
    x: 402.5395812988281,
    y: 194.05393981933594,
  },
  {
    x: 475.4410400390625,
    y: 286.91351318359375,
  },
  {
    x: 466.27874755859375,
    y: 208.96583557128906,
  },
  {
    x: 494.5802307128906,
    y: 266.8208923339844,
  },
  {
    x: 419.2018737792969,
    y: 226.5973663330078,
  },
  {
    x: 427.90643310546875,
    y: 188.1830291748047,
  },
  {
    x: 396.28497314453125,
    y: 150.05223083496094,
  },
  {
    x: 443.630615234375,
    y: 269.37664794921875,
  },
  {
    x: 326.6690673828125,
    y: 178.25723266601562,
  },
  {
    x: 446.7627258300781,
    y: 227.79005432128906,
  },
  {
    x: 626.8502807617188,
    y: 245.61077880859375,
  },
  {
    x: 611.4723510742188,
    y: 246.82923889160156,
  },
  {
    x: 426.2094421386719,
    y: 189.21307373046875,
  },
  {
    x: 428.0680236816406,
    y: 170.07887268066406,
  },
  {
    x: 453.98944091796875,
    y: 263.58203125,
  },
  {
    x: 312.2873229980469,
    y: 171.88803100585938,
  },
  {
    x: 377.7054748535156,
    y: 257.93658447265625,
  },
  {
    x: 497.6282043457031,
    y: 274.86663818359375,
  },
  {
    x: 505.1755065917969,
    y: 143.73170471191406,
  },
  {
    x: 236.23452758789062,
    y: 139.79576110839844,
  },
  {
    x: 240.67828369140625,
    y: 298.8400573730469,
  },
  {
    x: 428.0355224609375,
    y: 162.55545043945312,
  },
  {
    x: 439.5195617675781,
    y: 227.14952087402344,
  },
  {
    x: 521.8547973632812,
    y: 183.52198791503906,
  },
  {
    x: 613.4530029296875,
    y: 160.1619415283203,
  },
  {
    x: 427.1012268066406,
    y: 210.70445251464844,
  },
  {
    x: 507.5914306640625,
    y: 239.4603729248047,
  },
  {
    x: 391.9923400878906,
    y: 180.42286682128906,
  },
  {
    x: 673.2750854492188,
    y: 173.8564910888672,
  },
  {
    x: 443.9469909667969,
    y: 158.97564697265625,
  },
  {
    x: 454.34027099609375,
    y: 279.6324157714844,
  },
  {
    x: 566.2265014648438,
    y: 204.0487823486328,
  },
  {
    x: 397.0565490722656,
    y: 297.8998107910156,
  },
  {
    x: 452.9671325683594,
    y: 294.57977294921875,
  },
  {
    x: 475.624755859375,
    y: 208.78758239746094,
  },
  {
    x: 489.4209899902344,
    y: 253.49835205078125,
  },
  {
    x: 509.8388671875,
    y: 226.1786651611328,
  },
  {
    x: 436.4552917480469,
    y: 314.9544677734375,
  },
  {
    x: 496.97650146484375,
    y: 247.8467254638672,
  },
  {
    x: 450.22845458984375,
    y: 275.4285583496094,
  },
  {
    x: 469.1756896972656,
    y: 207.44822692871094,
  },
  {
    x: 241.20550537109375,
    y: 223.44204711914062,
  },
  {
    x: 522.6519775390625,
    y: 248.75437927246094,
  },
  {
    x: 425.6535339355469,
    y: 236.91241455078125,
  },
  {
    x: 470.33551025390625,
    y: 211.94541931152344,
  },
  {
    x: 398.5055847167969,
    y: 229.7135772705078,
  },
  {
    x: 621.443603515625,
    y: 143.16917419433594,
  },
  {
    x: 259.8911437988281,
    y: 269.1590576171875,
  },
  {
    x: 269.3939514160156,
    y: 178.2666778564453,
  },
  {
    x: 511.58056640625,
    y: 267.6500244140625,
  },
  {
    x: 322.87884521484375,
    y: 166.0130615234375,
  },
  {
    x: 410.904052734375,
    y: 302.47467041015625,
  },
  {
    x: 520.1622314453125,
    y: 255.0836181640625,
  },
  {
    x: 385.83197021484375,
    y: 190.90386962890625,
  },
  {
    x: 514.9451293945312,
    y: 228.84161376953125,
  },
  {
    x: 434.2964782714844,
    y: 238.40269470214844,
  },
  {
    x: 509.16693115234375,
    y: 288.25677490234375,
  },
  {
    x: 458.183837890625,
    y: 215.5254364013672,
  },
  {
    x: 399.8005065917969,
    y: 211.52774047851562,
  },
  {
    x: 492.5350036621094,
    y: 207.89707946777344,
  },
  {
    x: 590.97607421875,
    y: 189.08566284179688,
  },
  {
    x: 266.90985107421875,
    y: 210.99774169921875,
  },
  {
    x: 503.89892578125,
    y: 296.3333740234375,
  },
  {
    x: 644.86279296875,
    y: 305.1488952636719,
  },
  {
    x: 376.7426452636719,
    y: 229.75039672851562,
  },
  {
    x: 455.9492492675781,
    y: 157.5330352783203,
  },
  {
    x: 590.6697387695312,
    y: 233.2990264892578,
  },
  {
    x: 404.1333312988281,
    y: 231.3605499267578,
  },
  {
    x: 465.4176330566406,
    y: 306.7776184082031,
  },
  {
    x: 452.3453063964844,
    y: 267.7235412597656,
  },
  {
    x: 352.2073669433594,
    y: 142.3083038330078,
  },
  {
    x: 378.0332946777344,
    y: 278.4559631347656,
  },
  {
    x: 494.09161376953125,
    y: 235.6686553955078,
  },
  {
    x: 392.42498779296875,
    y: 169.1179962158203,
  },
  {
    x: 386.86737060546875,
    y: 186.26736450195312,
  },
  {
    x: 387.67572021484375,
    y: 223.50851440429688,
  },
  {
    x: 496.7744445800781,
    y: 159.96591186523438,
  },
  {
    x: 271.5927429199219,
    y: 165.60752868652344,
  },
  {
    x: 644.87451171875,
    y: 182.96339416503906,
  },
  {
    x: 522.3262329101562,
    y: 206.58682250976562,
  },
  {
    x: 657.3363037109375,
    y: 243.35391235351562,
  },
  {
    x: 474.80865478515625,
    y: 177.59197998046875,
  },
  {
    x: 503.60333251953125,
    y: 292.93603515625,
  },
  {
    x: 491.2563781738281,
    y: 250.7051544189453,
  },
  {
    x: 476.098876953125,
    y: 261.5726623535156,
  },
  {
    x: 662.383056640625,
    y: 167.2487335205078,
  },
  {
    x: 338.438232421875,
    y: 150.1941375732422,
  },
  {
    x: 406.5849304199219,
    y: 245.58822631835938,
  },
  {
    x: 478.7528076171875,
    y: 204.30813598632812,
  },
  {
    x: 459.3425598144531,
    y: 314.53839111328125,
  },
  {
    x: 499.60760498046875,
    y: 235.26373291015625,
  },
  {
    x: 456.6999206542969,
    y: 170.83827209472656,
  },
  {
    x: 510.28179931640625,
    y: 136.53639221191406,
  },
  {
    x: 456.0166931152344,
    y: 267.0418701171875,
  },
  {
    x: 397.0379638671875,
    y: 307.1916809082031,
  },
  {
    x: 522.4177856445312,
    y: 301.903564453125,
  },
  {
    x: 406.3196105957031,
    y: 282.4615783691406,
  },
  {
    x: 260.1884460449219,
    y: 255.67794799804688,
  },
  {
    x: 412.93170166015625,
    y: 153.3113250732422,
  },
  {
    x: 478.9028625488281,
    y: 169.03358459472656,
  },
  {
    x: 383.2871398925781,
    y: 166.22837829589844,
  },
  {
    x: 440.951171875,
    y: 148.11305236816406,
  },
  {
    x: 571.446044921875,
    y: 259.2479248046875,
  },
  {
    x: 283.79986572265625,
    y: 303.3943786621094,
  },
  {
    x: 437.5825500488281,
    y: 266.5872802734375,
  },
  {
    x: 504.243408203125,
    y: 147.34420776367188,
  },
  {
    x: 503.81787109375,
    y: 279.7256164550781,
  },
  {
    x: 546.3283081054688,
    y: 175.50616455078125,
  },
  {
    x: 507.62677001953125,
    y: 236.48141479492188,
  },
  {
    x: 393.73870849609375,
    y: 250.6984405517578,
  },
  {
    x: 452.38775634765625,
    y: 160.71969604492188,
  },
  {
    x: 500.8778381347656,
    y: 306.37237548828125,
  },
  {
    x: 447.3251953125,
    y: 282.6285705566406,
  },
  {
    x: 410.2672424316406,
    y: 275.2940368652344,
  },
  {
    x: 640.1266479492188,
    y: 195.3863525390625,
  },
  {
    x: 499.6572570800781,
    y: 211.06069946289062,
  },
  {
    x: 600.5405883789062,
    y: 299.633544921875,
  },
  {
    x: 403.52960205078125,
    y: 200.83641052246094,
  },
  {
    x: 379.532470703125,
    y: 240.94650268554688,
  },
  {
    x: 445.2227478027344,
    y: 284.5378723144531,
  },
  {
    x: 494.2921142578125,
    y: 243.7202606201172,
  },
  {
    x: 322.40283203125,
    y: 278.4227600097656,
  },
  {
    x: 584.4002685546875,
    y: 235.4966583251953,
  },
  {
    x: 303.22406005859375,
    y: 184.67349243164062,
  },
  {
    x: 226.58023071289062,
    y: 261.5692443847656,
  },
  {
    x: 490.02978515625,
    y: 291.921630859375,
  },
  {
    x: 579.4661865234375,
    y: 263.1080017089844,
  },
  {
    x: 410.84918212890625,
    y: 144.52639770507812,
  },
  {
    x: 399.8275451660156,
    y: 156.9733123779297,
  },
  {
    x: 448.6324157714844,
    y: 170.1239013671875,
  },
  {
    x: 629.17626953125,
    y: 227.7624053955078,
  },
  {
    x: 446.1063537597656,
    y: 235.322998046875,
  },
  {
    x: 407.55023193359375,
    y: 202.18490600585938,
  },
  {
    x: 414.5781555175781,
    y: 148.5615692138672,
  },
  {
    x: 427.2663879394531,
    y: 274.0610046386719,
  },
  {
    x: 470.15509033203125,
    y: 176.7882080078125,
  },
  {
    x: 453.928955078125,
    y: 205.82525634765625,
  },
  {
    x: 517.6768188476562,
    y: 220.46372985839844,
  },
  {
    x: 486.42333984375,
    y: 272.0066833496094,
  },
  {
    x: 420.5065612792969,
    y: 298.4555358886719,
  },
  {
    x: 435.41748046875,
    y: 308.151123046875,
  },
  {
    x: 488.9845886230469,
    y: 238.6868133544922,
  },
  {
    x: 405.6961975097656,
    y: 262.5356140136719,
  },
  {
    x: 429.7932434082031,
    y: 200.5234375,
  },
  {
    x: 464.66778564453125,
    y: 170.143798828125,
  },
  {
    x: 399.8678283691406,
    y: 235.16790771484375,
  },
  {
    x: 386.2627868652344,
    y: 157.90438842773438,
  },
  {
    x: 390.4772644042969,
    y: 139.50531005859375,
  },
  {
    x: 478.03643798828125,
    y: 197.5972442626953,
  },
  {
    x: 233.36814880371094,
    y: 294.8557434082031,
  },
  {
    x: 427.6822204589844,
    y: 239.45111083984375,
  },
  {
    x: 519.9646606445312,
    y: 235.05557250976562,
  },
  {
    x: 617.689697265625,
    y: 214.7829132080078,
  },
  {
    x: 489.1524353027344,
    y: 243.41470336914062,
  },
  {
    x: 473.112548828125,
    y: 156.84678649902344,
  },
  {
    x: 587.6823120117188,
    y: 227.37503051757812,
  },
  {
    x: 393.096923828125,
    y: 289.9022521972656,
  },
  {
    x: 424.3980712890625,
    y: 211.39495849609375,
  },
  {
    x: 376.4752197265625,
    y: 173.10777282714844,
  },
  {
    x: 514.438232421875,
    y: 167.2445068359375,
  },
  {
    x: 423.4563293457031,
    y: 200.22267150878906,
  },
  {
    x: 524.7296142578125,
    y: 185.9479522705078,
  },
  {
    x: 428.27508544921875,
    y: 149.34046936035156,
  },
  {
    x: 397.2026672363281,
    y: 224.35272216796875,
  },
  {
    x: 332.36810302734375,
    y: 229.82115173339844,
  },
  {
    x: 271.0494384765625,
    y: 312.268798828125,
  },
  {
    x: 362.0032653808594,
    y: 250.6074981689453,
  },
  {
    x: 460.6988525390625,
    y: 277.53741455078125,
  },
  {
    x: 490.13214111328125,
    y: 279.0434265136719,
  },
  {
    x: 403.3621520996094,
    y: 260.80535888671875,
  },
  {
    x: 497.9461975097656,
    y: 158.43003845214844,
  },
  {
    x: 246.4027099609375,
    y: 180.19500732421875,
  },
  {
    x: 577.4440307617188,
    y: 163.67018127441406,
  },
  {
    x: 396.42340087890625,
    y: 278.1025390625,
  },
  {
    x: 408.3034362792969,
    y: 276.60302734375,
  },
  {
    x: 568.9085083007812,
    y: 215.59194946289062,
  },
  {
    x: 262.8372497558594,
    y: 199.23670959472656,
  },
  {
    x: 406.6784362792969,
    y: 234.87803649902344,
  },
  {
    x: 296.1602783203125,
    y: 307.470458984375,
  },
  {
    x: 485.6864013671875,
    y: 168.0609588623047,
  },
  {
    x: 471.3606872558594,
    y: 239.96090698242188,
  },
  {
    x: 623.1657104492188,
    y: 187.585693359375,
  },
  {
    x: 379.50634765625,
    y: 266.8590393066406,
  },
  {
    x: 437.6584777832031,
    y: 251.6881103515625,
  },
  {
    x: 423.32550048828125,
    y: 135.8145294189453,
  },
  {
    x: 521.5985107421875,
    y: 205.1331787109375,
  },
  {
    x: 633.4649658203125,
    y: 158.35324096679688,
  },
  {
    x: 315.7988586425781,
    y: 149.70138549804688,
  },
  {
    x: 504.103515625,
    y: 251.6195831298828,
  },
  {
    x: 397.015625,
    y: 176.3899688720703,
  },
  {
    x: 470.1496887207031,
    y: 154.77633666992188,
  },
  {
    x: 352.3925476074219,
    y: 306.1253662109375,
  },
  {
    x: 509.7421875,
    y: 176.35406494140625,
  },
  {
    x: 468.867919921875,
    y: 258.6065673828125,
  },
  {
    x: 512.1051025390625,
    y: 178.57046508789062,
  },
  {
    x: 230.1295928955078,
    y: 180.48451232910156,
  },
  {
    x: 456.5836181640625,
    y: 274.2867431640625,
  },
  {
    x: 560.122802734375,
    y: 145.32534790039062,
  },
  {
    x: 519.2478637695312,
    y: 254.2615966796875,
  },
  {
    x: 411.9732971191406,
    y: 246.53424072265625,
  },
  {
    x: 528.0189208984375,
    y: 224.1131134033203,
  },
  {
    x: 378.7877502441406,
    y: 203.90469360351562,
  },
  {
    x: 263.4355773925781,
    y: 304.4046325683594,
  },
  {
    x: 473.1747741699219,
    y: 202.8207550048828,
  },
  {
    x: 425.0702209472656,
    y: 286.2229919433594,
  },
  {
    x: 477.56402587890625,
    y: 139.81263732910156,
  },
  {
    x: 378.691162109375,
    y: 220.55056762695312,
  },
  {
    x: 436.8254699707031,
    y: 304.08294677734375,
  },
  {
    x: 465.03448486328125,
    y: 298.1457214355469,
  },
  {
    x: 506.06085205078125,
    y: 303.0339660644531,
  },
  {
    x: 503.578857421875,
    y: 135.1627655029297,
  },
  {
    x: 623.3350830078125,
    y: 236.63674926757812,
  },
  {
    x: 432.528564453125,
    y: 221.41978454589844,
  },
  {
    x: 517.6925048828125,
    y: 155.21788024902344,
  },
  {
    x: 519.9931640625,
    y: 175.81239318847656,
  },
  {
    x: 284.1773986816406,
    y: 279.4582824707031,
  },
  {
    x: 500.7095947265625,
    y: 179.03790283203125,
  },
  {
    x: 403.8420715332031,
    y: 276.43768310546875,
  },
  {
    x: 474.3371887207031,
    y: 202.88328552246094,
  },
  {
    x: 497.7825622558594,
    y: 218.99034118652344,
  },
  {
    x: 552.398193359375,
    y: 250.21263122558594,
  },
  {
    x: 462.3948974609375,
    y: 161.30909729003906,
  },
  {
    x: 487.8769226074219,
    y: 294.40740966796875,
  },
  {
    x: 481.8350524902344,
    y: 203.1886444091797,
  },
  {
    x: 429.6246643066406,
    y: 287.1398010253906,
  },
  {
    x: 452.6094970703125,
    y: 271.3033447265625,
  },
  {
    x: 467.76202392578125,
    y: 177.2815399169922,
  },
  {
    x: 537.0816650390625,
    y: 254.1376495361328,
  },
  {
    x: 524.149169921875,
    y: 151.91961669921875,
  },
  {
    x: 518.5208129882812,
    y: 172.5634765625,
  },
  {
    x: 487.1889953613281,
    y: 221.04254150390625,
  },
  {
    x: 287.0403137207031,
    y: 148.5106201171875,
  },
  {
    x: 613.3861694335938,
    y: 227.04124450683594,
  },
];
const csv = new ObjectsToCsv(dots);
csv.toDisk("./pimpled_smiley.csv");
