// allRectsCoords Defines an array of objects, shows coordinates, dimensions and colour
let allRectsCoords = [
  {x: 14/600 , y: 0/600 , w: 13/600 , h: 220/600 , colour: "rgb(56, 118, 166)"},
  {x: 36/600 , y: 0/600 , w: 13/600 , h: 600/600 , colour: "rgb(56, 118, 166)"},
  {x: 65/600 , y: 0/600 , w: 13/600 , h: 570/600 , colour: "rgb(56, 118, 166)"},
  {x: 135/600 , y: 0/600 , w: 13/600 , h: 600/600 , colour: "rgb(56, 118, 166)"},
  {x: 323/600 , y: 0/600 , w: 13/600 , h: 600/600 , colour: "rgb(56, 118, 166)"},
  {x: 348/600 , y: 0/600 , w: 13/600 , h: 220/600 , colour: "rgb(56, 118, 166)"},
  {x: 348/600 , y: 260/600 , w: 13/600 , h: 340/600 , colour: "rgb(56, 118, 166)"},
  {x: 385/600 , y: 260/600 , w: 15/600 , h: 120/600 , colour: "rgb(56, 118, 166)"},
  {x: 502/600 , y: 0/600 , w: 13/600 , h: 600/600 , colour: "rgb(56, 118, 166)"},
  {x: 525/600 , y: 0/600 , w: 13/600 , h: 220/600 , colour: "rgb(56, 118, 166)"},
  {x: 550/600 , y: 0/600 , w: 13/600 , h: 60/600 , colour: "rgb(56, 118, 166)"},
  {x: 550/600 , y: 95/600 , w: 13/600 , h: 170/600 , colour: "rgb(56, 118, 166)"},
  {x: 550/600 , y: 375/600 , w: 13/600 , h: 110/600 , colour: "rgb(56, 118, 166)"},
  {x: 575/600 , y: 0/600 , w: 13/600 , h: 600/600 , colour: "rgb(56, 118, 166)"},

  //Light blue (horizontally from top to bottom)
  {x: 0/600 , y: 12/600 , w: 600/600 , h: 13/600 , colour: "rgb(56, 118, 166)"},
  {x: 0/600 , y: 95/600 , w: 600/600 , h: 15/600 , colour: "rgb(56, 118, 166)"},
  {x: 0/600 , y: 209/600 , w: 600/600 , h: 15/600 , colour: "rgb(56, 118, 166)"},
  {x: 0/600 , y: 260/600 , w: 600/600 , h: 13/600 , colour: "rgb(56, 118, 166)"},
  {x: 0/600 , y: 340/600 , w: 600/600 , h: 15/600 , colour: "rgb(56, 118, 166)"},
  {x: 0/600 , y: 375/600 , w: 600/600 , h: 15/600 , colour: "rgb(56, 118, 166)"},
  {x: 0/600 , y: 410/600 , w: 36/600 , h: 15/600 , colour: "rgb(56, 118, 166)"},
  {x: 36/600 , y: 430/600 , w: 323/600 , h: 15/600 , colour: "rgb(56, 118, 166)"},
  {x: 502/600 , y: 430/600 , w: 85/600 , h: 26/600 , colour: "rgb(56, 118, 166)"},
  {x: 0/600 , y: 465/600 , w: 36/600 , h: 15/600 , colour: "rgb(56, 118, 166)"},
  {x: 502/600 , y: 480/600 , w: 85/600 , h: 13/600 , colour: "rgb(56, 118, 166)"},
  {x: 0/600 , y: 513/600 , w: 600/600 , h: 13/600 , colour: "rgb(56, 118, 166)"},
  {x: 0/600 , y: 532/600 , w: 36/600 , h: 15/600 , colour: "rgb(56, 118, 166)"},
  {x: 0/600 , y: 565/600 , w: 600/600 , h: 13/600 , colour: "rgb(56, 118, 166)"},

  //Light blue Rectangle but separately
  {x: 78/600 , y: 35/600 , w: 70/600 , h: 23/600 , colour: "rgb(56, 118, 166)"},
  {x: 78/600 , y: 160/600 , w: 70/600 , h: 40/600 , colour: "rgb(56, 118, 166)"},
  {x: 91/600 , y: 209/600 , w: 31/600 , h: 60/600 , colour: "rgb(56, 118, 166)"},
  {x: 78/600 , y: 470/600 , w: 60/600 , h: 43/600 , colour: "rgb(56, 118, 166)"},
  {x: 170/600 , y: 273/600 , w: 38/600 , h: 70/600 , colour: "rgb(56, 118, 166)"},
  {x: 250/600 , y: 210/600 , w: 40/600 , h: 130/600 , colour: "rgb(56, 118, 166)"},
  {x: 515/600 , y: 290/600 , w: 70/600 , h: 30/600 , colour: "rgb(56, 118, 166)"},

  //Orange
  //Orange (1st area)
  {x: 14/600 , y: 12/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 14/600 , y: 58/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 14/600 , y: 130/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 11/600 , y: 410/600 , w: 15/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 13/600 , y: 465/600 , w: 15/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},

  //Orange (2nd area)
  {x: 36/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 36/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 36/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 36/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},

  //Orange (3rd area)
  {x: 65/600 , y: 58/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 65/600 , y: 95/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 65/600 , y: 197/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 65/600 , y: 222/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 65/600 , y: 310/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 65/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 65/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 65/600 , y: 468/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 65/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 65/600 , y: 533/600 , w: 13/600 , h: 12/600 , colour: "rgb(244, 179, 5)"},
  {x: 65/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},

  {x: 85/600 , y: 12/600 , w: 15/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},

  //Orange (4th area)
  {x: 135/600 , y: 58/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 135/600 , y: 84/600 , w: 13/600 , h: 11/600 , colour: "rgb(244, 179, 5)"},
  {x: 135/600 , y: 130/600 , w: 13/600 , h: 11/600 , colour: "rgb(244, 179, 5)"},
  {x: 135/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 135/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 135/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 135/600 , y: 430/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 135/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 135/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},

  {x: 183/600 , y: 95/600 , w: 15/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 190/600 , y: 209/600 , w: 15/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 210/600 , y: 375/600 , w: 15/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 220/600 , y: 430/600 , w: 15/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 235/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 235/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},

  {x: 290/600 , y: 209/600 , w: 15/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 290/600 , y: 260/600 , w: 15/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 292/600 , y: 375/600 , w: 15/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 295/600 , y: 430/600 , w: 15/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 280/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 260/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},

  //Orange (5th area)
  {x: 323/600 , y: 58/600 , w: 13/600 , h: 11/600 , colour: "rgb(244, 179, 5)"},
  {x: 321/600 , y: 95/600 , w: 15/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 323/600 , y: 180/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 323/600 , y: 230/600 , w: 13/600 , h: 11/600 , colour: "rgb(244, 179, 5)"},
  {x: 323/600 , y: 465/600 , w: 13/600 , h: 11/600 , colour: "rgb(244, 179, 5)"},
  {x: 323/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},

  //Orange (6th area)
  {x: 348/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 348/600 , y: 300/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 348/600 , y: 388/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 348/600 , y: 552/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},

  {x: 401/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 427/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 380/600 , y: 513/600 , w: 15/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 414/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 420/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 455/600 , y: 260/600 , w: 15/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 457/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 455/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 432/600 , y: 513/600 , w: 15/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},

  //Orange (7th area)
  {x: 502/600 , y: 12/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 502/600 , y: 65/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 502/600 , y: 95/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 502/600 , y: 175/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 502/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 502/600 , y: 295/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 502/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 502/600 , y: 442/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 502/600 , y: 480/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 502/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},

  //Orange (8th area)
  {x: 525/600 , y: 25/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 525/600 , y: 175/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 538/600 , y: 513/600 , w: 15/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 550/600 , y: 12/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 547/600 , y: 340/600 , w: 15/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 550/600 , y: 443/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 563/600 , y: 209/600 , w: 12/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},

  //Orange (9th area)
  {x: 575/600 , y: 95/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},
  {x: 575/600 , y: 130/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 575/600 , y: 295/600 , w: 13/600 , h: 13/600 , colour: "rgb(244, 179, 5)"},
  {x: 575/600 , y: 442/600 , w: 13/600 , h: 15/600 , colour: "rgb(244, 179, 5)"},

  //Orange Rectangle but separately
  {x: 49/600 , y: 120/600 , w: 29/600 , h: 30/600 , colour: "rgb(244, 179, 5)"},
  {x: 48/600 , y: 400/600 , w: 30/600 , h: 30/600 , colour: "rgb(244, 179, 5)"},
  {x: 170/600 , y: 290/600 , w: 38/600 , h: 50/600 , colour: "rgb(244, 179, 5)"},
  {x: 385/600 , y: 110/600 , w: 60/600 , h: 99/600 , colour: "rgb(244, 179, 5)"},
  {x: 538/600 , y: 64/600 , w: 37/600 , h: 22/600 , colour: "rgb(244, 179, 5)"},
  {x: 515/600 , y: 403/600 , w: 35/600 , h: 30/600 , colour: "rgb(244, 179, 5)"},

  // Dark blue
  //Dark blue 1st column from the left
  {x: 14/600 , y: 95/600 , w: 13/600 , h: 15/600 , colour: "rgb(41, 37, 69)"},
  {x: 14/600 , y: 160/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 14/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 10/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 16/600 , y: 532/600 , w: 16/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 2nd column from the left
  {x: 36/600 , y: 0/600 , w: 13/600 , h: 12/600 , colour:  "rgb(41, 37, 69)"},
  {x: 36/600 , y: 58/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 36/600 , y: 303/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 36/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 36/600 , y: 410/600 , w: 12.5/600 , h: 11/600 , colour:  "rgb(41, 37, 69)"},
  {x: 36/600 , y: 430/600 , w: 12.5/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 36/600 , y: 470/600 , w: 13/600 , h: 12/600 , colour:  "rgb(41, 37, 69)"},
  {x: 36/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 3rd column from the left
  {x: 65/600 , y: 160/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 65/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 65/600 , y: 430/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 65/600 , y: 490/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 4th column from the left
  {x: 135/600 , y: 0/600 , w: 13/600 , h: 12/600 , colour:  "rgb(41, 37, 69)"},
  {x: 135/600 , y: 160/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 135/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 135/600 , y: 470/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 135/600 , y: 532/600 , w: 13/600 , h: 11/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 5th column from the left
  {x: 323/600 , y: 0/600 , w: 13/600 , h: 12/600 , colour:  "rgb(41, 37, 69)"},
  {x: 323/600 , y: 69/600 , w: 13/600 , h: 11/600 , colour:  "rgb(41, 37, 69)"},
  {x: 323/600 , y: 129/600 , w: 13/600 , h: 18/600 , colour:  "rgb(41, 37, 69)"},
  {x: 323/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 323/600 , y: 301/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 323/600 , y: 364/600 , w: 13/600 , h: 11/600 , colour:  "rgb(41, 37, 69)"},
  {x: 323/600 , y: 390/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 323/600 , y: 500/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 323/600 , y: 552/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 6th column from the left
  {x: 348/600 , y: 37/600 , w: 13/600 , h: 12/600 , colour:  "rgb(41, 37, 69)"},
  {x: 348/600 , y: 95/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 348/600 , y: 135/600 , w: 13/600 , h: 11/600 , colour:  "rgb(41, 37, 69)"},
  {x: 348/600 , y: 330/600 , w: 13/600 , h: 11/600 , colour:  "rgb(41, 37, 69)"},
  {x: 348/600 , y: 465/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 348/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},

  {x: 385/600 , y: 340/600 , w: 15/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 385/600 , y: 362/600 , w: 15/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 7th column from the left
  {x: 502/600 , y: 135/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 502/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 502/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 502/600 , y: 417/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 502/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},

  {x: 525/600 , y: 0/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 525/600 , y: 62/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 525/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 8th column from the left
  {x: 550/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 550/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 9th column from the left
  {x: 575/600 , y: 0/600 , w: 13/600 , h: 12/600 , colour:  "rgb(41, 37, 69)"},
  {x: 575/600 , y: 25/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 575/600 , y: 60/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 575/600 , y: 175/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 575/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 575/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 575/600 , y: 417/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 575/600 , y: 480/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 575/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 575/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue Rectangle but separately
  {x: 90/600 , y: 25/600 , w: 32/600 , h: 70/600 , colour:  "rgb(41, 37, 69)"},
  {x: 122/600 , y: 95/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 78/600 , y: 300/600 , w: 57/600 , h: 40/600 , colour:  "rgb(41, 37, 69)"},
  {x: 158/600 , y: 25/600 , w: 48/600 , h: 55/600 , colour:  "rgb(41, 37, 69)"},
  {x: 273/600 , y: 565/600 , w: 40/600 , h: 32/600 , colour:  "rgb(41, 37, 69)"},
  {x: 385/600 , y: 138/600 , w: 60/600 , h: 50/600 , colour:  "rgb(41, 37, 69)"},
  {x: 414/600 , y: 273/600 , w: 50/600 , h: 67/600 , colour:  "rgb(41, 37, 69)"},
  {x: 414/600 , y: 355/600 , w: 50/600 , h: 11/600 , colour:  "rgb(41, 37, 69)"},
  {x: 525/600 , y: 121/600 , w: 38/600 , h: 38/600 , colour:  "rgb(41, 37, 69)"},
  {x: 515/600 , y: 455/600 , w: 35/600 , h: 26/600 , colour:  "rgb(41, 37, 69)"},
  {x: 537/600 , y: 290/600 , w: 13/600 , h: 30/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 2nd line
  {x: 538/600 , y: 95/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 3rd line
  {x: 78/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 235/600 , y: 209/600 , w: 15/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 380/600 , y: 209/600 , w: 18/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 444/600 , y: 209/600 , w: 15/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 4th line
  {x: 170/600 , y: 260/600 , w: 15/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 237/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 372/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 5th line
  {x: 195/600 , y: 340/600 , w: 15/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 247/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 287/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 6th line
  {x: 253/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 588/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 7th line
  {x: 258/600 , y: 430/600 , w: 15/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},
  {x: 336/600 , y: 430/600 , w: 15/600 , h: 15/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 8th line
  {x: 109/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 406/600 , y: 513/600 , w: 15/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 301/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 258/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},

  //Dark blue 9th line
  {x: 109/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 375/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},
  {x: 538/600 , y: 565/600 , w: 15/600 , h: 13/600 , colour:  "rgb(41, 37, 69)"},

  // Yellow
  //Yellow 1st column from the left
  {x: 14/600 , y: 25/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},
  {x: 14/600 , y: 197/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},
  {x: 15/600 , y: 513/600 , w: 15/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 23/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 23/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 26/600 , y: 375/600 , w: 10/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 14/600 , y: 513/600 , w: 15/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 21/600 , y: 565/600 , w: 15/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 2nd column from the left
  {x: 36/600 , y: 25/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},
  {x: 36/600 , y: 83/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},
  {x: 36/600 , y: 110/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 36/600 , y: 150/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},
  {x: 36/600 , y: 328/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},
  {x: 36/600 , y: 400/600 , w: 12.5/600 , h: 10/600 , colour: "rgb(205, 210, 106)"},
  {x: 36/600 , y: 420/600 , w: 12.5/600 , h: 10/600 , colour: "rgb(205, 210, 106)"},
  {x: 36/600 , y: 482/600 , w: 13/600 , h: 10/600 , colour: "rgb(205, 210, 106)"},
  {x: 36/600 , y: 526/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 36/600 , y: 553/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 3rd column from the left
  {x: 65/600 , y: 35/600 , w: 13/600 , h: 23/600 , colour: "rgb(205, 210, 106)"},
  {x: 65/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 65/600 , y: 172/600 , w: 13/600 , h: 25/600 , colour: "rgb(205, 210, 106)"},
  {x: 65/600 , y: 235/600 , w: 13/600 , h: 25/600 , colour: "rgb(205, 210, 106)"},
  {x: 65/600 , y: 480/600 , w: 13/600 , h: 10/600 , colour: "rgb(205, 210, 106)"},
  {x: 65/600 , y: 526/600 , w: 13/600 , h: 7/600 , colour: "rgb(205, 210, 106)"},
  {x: 65/600 , y: 553/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 4th column from the left
  {x: 135/600 , y: 25/600 , w: 13/600 , h: 10/600 , colour: "rgb(205, 210, 106)"},
  {x: 135/600 , y: 110/600 , w: 13/600 , h: 10/600 , colour: "rgb(205, 210, 106)"},
  {x: 135/600 , y: 180/600 , w: 13/600 , h: 10/600 , colour: "rgb(205, 210, 106)"},
  {x: 135/600 , y: 224/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 135/600 , y: 273/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 135/600 , y: 295/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 135/600 , y: 329/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 135/600 , y: 403/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 135/600 , y: 483/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 135/600 , y: 502/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 135/600 , y: 526/600 , w: 13/600 , h: 6/600 , colour: "rgb(205, 210, 106)"},
  {x: 135/600 , y: 553/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 5th column from the left
  {x: 323/600 , y: 25/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 323/600 , y: 147/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 323/600 , y: 224/600 , w: 13/600 , h: 8/600 , colour: "rgb(205, 210, 106)"},
  {x: 323/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 323/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 323/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 323/600 , y: 401/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 323/600 , y: 430/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 323/600 , y: 526/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 323/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 6th column from the left
  {x: 348/600 , y: 25/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 56/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 82/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 110/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 151/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 180/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 430/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 410/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 478/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 526/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  {x: 348/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 348/600 , y: 300/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 7th column from the left
  {x: 502/600 , y: 25/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 502/600 , y: 165/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 502/600 , y: 247/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 502/600 , y: 362/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 502/600 , y: 390/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 502/600 , y: 430/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 502/600 , y: 535/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 502/600 , y: 578/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  {x: 525/600 , y: 12/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 525/600 , y: 38/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 525/600 , y: 83/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 525/600 , y: 110/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 525/600 , y: 159/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 8th column from the left
  {x: 550/600 , y: 25/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},
  {x: 550/600 , y: 52/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},
  {x: 550/600 , y: 110/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 550/600 , y: 159/600 , w: 13/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 550/600 , y: 182/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 550/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 550/600 , y: 235/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 550/600 , y: 390/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 550/600 , y: 424/600 , w: 13/600 , h: 20/600 , colour: "rgb(205, 210, 106)"},
  {x: 550/600 , y: 480/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 563/600 , y: 12/600 , w: 12/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 9th column from the left
  {x: 575/600 , y: 38/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 575/600 , y: 83/600 , w: 13/600 , h: 12/600 , colour: "rgb(205, 210, 106)"},
  {x: 575/600 , y: 110/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 575/600 , y: 143/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 575/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 575/600 , y: 247/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 575/600 , y: 308/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 575/600 , y: 362/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 575/600 , y: 390/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 563/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 575/600 , y: 430/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 575/600 , y: 535/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  //Yellow Rectangle but separately
  {x: 90/600 , y: 58/600 , w: 32/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 90/600 , y: 95/600 , w: 32/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 170/600 , y: 44/600 , w: 25/600 , h: 23/600 , colour: "rgb(205, 210, 106)"},
  {x: 158/600 , y: 80/600 , w: 48/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 95/600 , y: 170/600 , w: 20/600 , h: 20/600 , colour: "rgb(205, 210, 106)"},
  {x: 98/600 , y: 230/600 , w: 18/600 , h: 18/600 , colour: "rgb(205, 210, 106)"},
  {x: 424/600 , y: 294/600 , w: 30/600 , h: 27/600 , colour: "rgb(205, 210, 106)"},
  {x: 414/600 , y: 364/600 , w: 50/600 , h: 11/600 , colour: "rgb(205, 210, 106)"},
  {x: 102/600 , y: 478/600 , w: 18/600 , h: 18/600 , colour: "rgb(205, 210, 106)"},
  {x: 273/600 , y: 595/600 , w: 40/600 , h: 5/600 , colour: "rgb(205, 210, 106)"},
  {x: 385/600 , y: 260/600 , w: 15/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 385/600 , y: 300/600 , w: 15/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 1st line
  {x: 122/600 , y: 12/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 207/600 , y: 12/600 , w: 15/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 310/600 , y: 12/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 336/600 , y: 12/600 , w: 12/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 361/600 , y: 12/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 440/600 , y: 12/600 , w: 18/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 489/600 , y: 12/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 588/600 , y: 12/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 2nd line
  {x: 148/600 , y: 95/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 220/600 , y: 95/600 , w: 15/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 310/600 , y: 95/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 361/600 , y: 95/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 439/600 , y: 95/600 , w: 18/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 491/600 , y: 95/600 , w: 11/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 515/600 , y: 95/600 , w: 11/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 564/600 , y: 95/600 , w: 11/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 3rd line
  {x: 122/600 , y: 209/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 161/600 , y: 209/600 , w: 15/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 4th line
  {x: 78/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 122/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 185/600 , y: 260/600 , w: 23/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 250/600 , y: 260/600 , w: 40/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 250/600 , y: 285/600 , w: 40/600 , h: 30/600 , colour: "rgb(205, 210, 106)"},
  {x: 411/600 , y: 260/600 , w: 15/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 537/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 588/600 , y: 260/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 5th line
  {x: 165/600 , y: 340/600 , w: 15/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 260/600 , y: 340/600 , w: 27/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 427/600 , y: 340/600 , w: 30/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 562/600 , y: 340/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 6th line
  {x: 107/600 , y: 375/600 , w: 15/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 165/600 , y: 375/600 , w: 13/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 385/600 , y: 375/600 , w: 15/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 7th line
  {x: 107/600 , y: 430/600 , w: 15/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},
  {x: 167/600 , y: 430/600 , w: 15/600 , h: 15/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 8th line
  {x: 122/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 185/600 , y: 513/600 , w: 15/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 470/600 , y: 513/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  //Yellow 9th line
  {x: 180/600 , y: 565/600 , w: 15/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 213/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},
  {x: 463/600 , y: 565/600 , w: 13/600 , h: 13/600 , colour: "rgb(205, 210, 106)"},

  //Yellow on the top
  {x: 176/600 , y: 305/600 , w: 25/600 , h: 20/600 , colour: "rgb(56, 118, 166)"},
  {x: 403/600 , y: 155/600 , w: 29/600 , h: 22/600 , colour: "rgb(56, 118, 166)"},

];
// Array will hold instances of rectangleManager
let allRectsArray = [];
// A variable to hold the loaded sound file
let song;
// A variable to hold the FFT object
let fft;
// The number of frequency bins as 1024 for the FFT
let numBins = 1024;
// Sets the smoothing as 0.6 for the FFT
let smoothing = 0.6;
// A variable to hold the play/pause button
let button;

// Defines a class for managing rectangle properties and movements
class rectangleManager {
  // Initializes a rectangle with specified coordinates, dimensions, and colour
  constructor(x, y, w, h, colour) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colour = colour;
    // Set scale as 1
    this.scale = 1;
  }

  // Draws the rectangle on the canvas
  display() {

    push();
    fill(this.colour);
    rect(this.drawX, this.drawY, this.drawWidth * this.scale, this.drawHeight * this.scale);
    pop();

  }
  // Update the rectangle's color
  updateColour(colour) {
    this.colour = colour;
  }
  // Calculates the rectangle's dimensions based on the window's size (x, y, w, h)
  calculateDrawSize(widthScale, heightScale) {

    /* E.g. Calculates the x-coordinate for rectangle by multiplying 
    the original x-coordinate (this.x) by the width scale factor (widthScale).*/
    this.drawX = this.x * widthScale;
    this.drawY = this.y * heightScale;
    this.drawWidth = this.w * widthScale;
    this.drawHeight = this.h * heightScale;

  }
  // Sets the scale factor for the rect to let the rect can change in scale
  setScale(scale) {
    this.scale = scale;
  }

}
// Load the sound file in preload
function preload() {
  song = loadSound("assest/YannTiersen-ComptineDunAutreEte.mp3");
}

function setup() {
  // Make the canvas the fit the window size
  createCanvas(windowWidth, windowHeight);
  // Create a new instance of p5.FFT() object
  fft = new p5.FFT(smoothing, numBins);

  song.connect(fft);
  // Add a button for play/pause
  button = createButton("Play/Pause");
  // Set the position of the button at the bottom center of the canvas
  button.position((width - button.width) / 2, height - button.height - 2);
  // Attaches a mouse press event to the button to toggle play/pause
  button.mousePressed(play_pause);

 // Create a loop to stored the data from allRectsCoords into allRectsArray
  for (let i = 0; i < allRectsCoords.length; i++) {
    let newRect = new rectangleManager(
      allRectsCoords[i].x, allRectsCoords[i].y, allRectsCoords[i].w, allRectsCoords[i].h, allRectsCoords[i].colour);
      allRectsArray.push(newRect);
  }

  // Resizes the positions of rectangle through the canvas size change
  resizedRectangles();
  // Resizes the positions of button through the canvas size change
  resizeButton();

}

function draw() {

  background(30, 47, 97);
  noStroke();

  /* analyze() method will returns an array of amplitude values and go through 
  allRectsArray to adjust the scale of each rectangle based on the corresponding 
  spectrum value. Then, rectangles will display */
  // Amplitude values range are 0 - 255, if 0, the sound is silent
  // If 255, the sound will be loudest
  let spectrum = fft.analyze();

  /* Create a rectangle display loop to iterates over allRectsArray 
  and calls the display method for each rectangle.*/
  for (let i = 0; i < allRectsArray.length; i++) {
    
    /* Set specValue as spectrum value and use ‘i’ divided by numbins to ensure 
    the index ‘i’ wraps around within the range [0, numBins-1], and will not 
    out of range. */
    let specValue = spectrum[i % numBins];

    /* Calculates the scale for the rectangles based on the spectrum value. 
    The spectrum values range 0 - 255. Normalize this value to a scale range 
    from 1 to 2 by / 255 and + 1, which ensures that the mini is 1 and the max 
    scale is 2. */
    let scale = 1 + specValue / 255;

    // Adjusts the size of the rectangle based on the spectrum value
    allRectsArray[i].setScale(scale);
    allRectsArray[i].display();
  }

}

// Toggles the playback of the sound
function play_pause() {

  if (song.isPlaying()) {
    song.stop();
  } else {
    // Use song.play() to let the song play once
    // Want the song to loop, so we call song.loop()
    song.loop();
  }

}

// Resize the button based on the button.position has set up above, let it fit to the window size
function resizeButton() {
  button.position((windowWidth - button.width) / 2, windowHeight - button.height - 20);
}

// Resize the canvas, button and rectangles size through change the window
function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
  resizeButton();
  resizedRectangles();

}

// Adjusts the size and position of all rectangles based on the canvas size
function resizedRectangles() {
  
  // Use loop to calculate the rectangle size
  for (let i = 0; i < allRectsArray.length; i++) {
    allRectsArray[i].calculateDrawSize(windowWidth, windowHeight);
  }

}

