const bg = document.querySelector(".background")
const wrap = document.querySelector(".wrap")

const settings = {
    'xPath' : './images/X.png',
    'oPath' : './images/O.png',
    'countSquares' : 9,
    'flag' : false,
    'store' : [],
    'winX' : [],
    'winO' : [],
    'once' : true,
    'winComb' : [
        [1,2,3]
        [1,5,9]
        [1,4,7]
        [2,5,8]
        [3,6,9]
        [3,5,7]
        [4,5,6]
        [7,8,9]
    ]

}