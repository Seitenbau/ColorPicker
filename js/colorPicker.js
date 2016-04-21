/*
 Copyright 2016 SEITENBAU GmbH
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
 http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
// the hsv-background encoded with base64.
// it lays in a extra file because in the same file as the colorpicker my IDE- will crush 
//window.background = 'iVBORw0KGgoAAAANSUhEUgAAAWkAAABlCAYAAAH4ySIXAAAY5klEQVR42u1da5fkKI6V7ciq6q7pnd3//xOreqa7s/IVtmE/2E5jLAkBDogAxzkcP2XF5Yq3gEZrreEBfxf4+ROgA4AWpuMS5mvdAIwAoGA6LmG5jhFmJKEBDZzw9MefYApfrGM76R4AoAeAq3XsASBG' +
//    'mJGc/zgtfIEfPwC+wRR+m48aABoAuACodhL/AID3ObwZ5zHCjCS0oIATnmL8OwD8Pr+nDGkNn7g/AOAVAF7msJzHCDOS4BKeYvxjZkDPPF0A4Ote9xsA/AKAfwDgeT7GCDOS4BKeYnyBbErP9xbCrjPWXwDwNwD8NYcYYUYSXMJTjJs8fTX4QyLteRb/DwD8+akgTJiR' +
//    'BJfwFOOtJf0vXLeJ+78A8BMAYoQZSXAJTzF+mfOiRfpjz7Yt/h8A+DEXBaHCjCS4hKcY/zrnSX/MrHzQbJviU4yHCzOS4BKeYvy3GfK/Z3BLcp8jrTdwP+9iPFyYkQSX8BTjf8zSv2Zw132kXS3cq42HCzOS4BJuHrGSdYE/f+I1nPlcIZWqJWhoIFS40awkcMLTn/6C' +
//    '1HLmHG4kqjdXAFDQQqhwq1hJ4IQv8OePbe3mmyH5NIlejaqNWb0Z4AKhwpeBlQROeIrp7zOIcZbsVthLWn43qjVL6OEJQoWfelaSFZ5i2pZ8WqGbeF+sytQHfIVQ4a8frCQrPMU0JjnCxrLeZtHnOeP5CwDezRc9hb+9s5Ks8BTTtuR1q9fG+9dciXqF3yFU+PdXVpIV' +
//    'nmK6NSS/b4qnnWX9M+P9EwBe4DuECn9/YSVZ4Qv8/DFJ/jZLvvOR9Tzj/QkAv+ANQoXffrGSrPAU04vkH/M7/d4sMfN4hg8IFf54ZiVZ4cmmF8n/NSoCVmS9IebxN1whVPj6NyvJCk8x/T8A8H/zs3feLJ+NmP4LBggVHv5iJVnhRr+8TFWIZn7X93yuk+mg8zyKI7UG' +
//    'K16bjoFBQXjIpThCK8QoXpu7HaxH85y616ycLQ3T0TiOgnu5FEdojVK8drVejF5T7Ppp1vE0a25X1aPRKToY3bA9cW/YdNOmVxyhNUrxZNlf5m6NL0T4OmvWhuYONq06swf6OncGXImwPMulOEJrlOK18+kb4MfR0AyGZr3n+Wr0nEuOuRRHaI1SvHaY2WGwNDdGN+rT' +
//    'FrMyeP6w2vBvTMilOEJrlOLJsn+fO2W/Gx0lA6N53FZJR0L1qzG88opc51IcoTVK8WTZ/zKynH7TA75NS0uf1uhOzYuaX3N4sY6/ACCX4gitUYonyzY1mzTaFNsmgCSqq8HzouaZCLkUR2iNUjxZ9pX4cmtUNJdiusdTc2/wbCaopVfwn7mn3zzPpThCa5TidbgXS0sX' +
//    'Iy19M/4hkZrtHOzFGF02h4j/3gwVp1ccoTVK8RTZXFpaKP4whqmIcorKwZ4N1f81Qi7FEVqjFDeP6h71eKONb69hXV9G90RYH1hon1uc4kZHaQ1WfIHX1/WLrXXkzpvtp7RRyFDnavN+AzkUNzpKa7DiKaKlfYp6e66b9XO+QX9CSau40cFaZ9/DMMVTRHMumZ3V89Js' +
//    'iuKNasytgPIgXZ0c0ipeHCQCtQYrvsDrC995q+YjoOlow6+0z3r8dMxIr7hVUVqDFU8WfYFteDI8R006zczLSsHm5+3QI/fUZ8UqreJWBWu1sg4/xVNEm73i4yYjXTWbGpkUPDgGBfrPQdAWcihuVZTWYMVTRH8xLP2JoLZFO29Jfilfrr1PV1rFiz9YoNZgxVMePQqo' +
//    'HWetxnPN5FhXx5jECB3kUNyNwVohRvHUYBmRoQeMWrV/x1ZrJhgzYs1w/XT4S6/4MkRpDVY8ZR0jk37MInmks0osIfWGKnvwZ6A+eGPFS0QHag1WPEU0lX5MzUha00J+35EwfFam0iq+DMFaIUbxlEdz6eeC1L+ZMskeQzb5NUfbemuULpXipz5Ka7DiyaI1k36WiuaA' +
//    'GKDF8eDIsZau8n1Ep1NsRnSA1mDFU0RT6efJ0OqRgil+3wzV/eynnlrxUx+sFWIUr713NrVPVgNHmIIxju2EtEZ0esVPfZTWYMVTHm1nUqYf1Reiusu0/LFEZFv0Fb5ADsVfrlFagxWvvXe21qvRcDMp1vsUrJl2EjZ9ZYroAXIoHq7BWiFG8T6inwxHtd4aqQxoN3wg' +
//    'rid4RKdRbEe0p9ZgxVPL0E47Xy2vAE+8mIugXb37gBFyKB4/orQGK57yaJPahZBvBlGjPAWPVh/Wh1XZWTh+30R0OsXje7BWiFG8dpMu1H41iLmRYU0RrSCHYvUepTVY8dpN+sXwbzV9qA7OKrcRnV6xeo/SGqx4jeivBgm/ERQfUPi/7iI6reIlogO0QoziKaIXar9Z' +
//    'fZlXpPYuqM4OYoumFPfhiq9ui46AG4y40dertkYftz0ut7yP/HSS+3UBviO0SQCv3R0A6Y+W/1S6Y12AM6LNAnjrgWf7jjRw7DMiWetdGb+/d+Sz2gBnRpsc8NaoKX/KI+4hZRb211SCe7UBzoQWcgG+wMvL1mm4JRyJuaN5rpB3wELf4KNx0qOKlKkNcEa0WQDTfuku' +
//    't3HuuTb8jBek5n2icNr7rrt828Oe1wY4M9rkgLdG3SEIOsc1945dHpmlRIMXJHYYHdch79QGOBNayAV4NeoO9kfsHvZMWdcazCVIJoQKsFkiaOGETROhjiHPagOcEW0WwFOd2py2RIWWuK8spDZis12mQVQ4jYDP8HIF6Xu1Ac6MNjng1bfmYqGRXCvESbAj+oDafQ+M' +
//    'q3AaEb/ZI65rA5wJbTbA6yxEbA7kxTgfrXvKOGrAZzIA0mwWlMYYVHtC5eB4xr1fG+CMaLMA3k+tNZGZYbSS74Xo/7bLJMUiJtvG1MRVajIrF2yZ2gBnRpsc8FSnfoL95GnzekQ8T6gZk3aZhL2LlMaSgomakd0DP1vbfjccsM4DuI+47rPRm43h1enUnLVk+hmPsJ3E' +
//    'roGa1bQvk0YDOZHkNdGMUAzUHvAZ8dw9etFgX8D64QBnpDcL4O2CE8t3zeT7xPR7U2WS2anJI2ZhUzOksOB6bobaAGdGmxzw1qixOUy8w+u+XMJ67j1LY1dJbIYrcc49qw1wJrTZAG/nvAywnQE5EkPxQFS02vkbMsQi2GYzwEyv5powV8c9+3ltgDOizQJ4aii6ELvK' +
//    'IzsJj2LEYthYOr4GhtoAZ0abHPCUUw8eDX4J6k72LUnhJIX74XFeG+BMaLMBDjdq2z+x80Z8GGxz7pvkvDbAGdFmAbwu5SZFSiXdLgjxoen5QxhqA5wZbXLAU506JBm70F/clbejYb4Lz2sDnAltNsDrWpDjAUgHAVp9+zT8DtslL+3r2gArYnAlAdosgFejVsLBfhdq' +
//    'D+S3hMuF2gDHNgoD0WYDTBu1b1kU2sT2hO4D+404rw1wZrTJAZ/bbp2/on4X6Hu/ZXduu3TPIWv0uN+tC/Adob054L1BN4Q7FgSeC9Drg8/d79YFODPapIC3Bs0dfdaZwubHE/ePXGhK+m5tgDOiTQ54NWhuS9GQzU8FqMN3Y+XPXe/VBjgT2iyAtwZ9xEJqGvZ7NjaG' +
//    'zoYvjG69whr958sFnBFtcsC0QbsWSmscMeJZpTwiKME7PF1lAs6MNing1aC5Ff8UHLkyoAjurZYKXP9IPYAzo00KeDJo127xLVHmtLBdNM1EqizU5momDV87cux377FF/f58+tUFOBPaLIAv0F/9lrXUsF2ZpCWawq2FULt7sTSErX/ptw6m7zqejw240dnRJgW85tDU' +
//    'mqytIYMtZWkvaakcMg0PlUqPioHm9x4FskzAi0FnQpsc8NagXeuzagupRipTGFrtzrC4AunIpXk1ufBsmYBNg86ENilg2qBtbxX7P7WOEc6Wb5Dqxt2e9Q2j4B3tXGm5LMCUQd8YLTSiHovjAW8NumOQUuip/hu3G5YoHR+9MrHebXNdNmDToDOjTQJ4NWh7QWGzAtWx' +
//    'w257tApBreUwqdrViMAZhc/HnUHXAXgx6IxokwKeDNpEa6I2K1Qd4RtCobVRE3LS9m/sEtvLcTLoegA3Oiva5IAng1ZGE7ZDkAJyDoSHiysJax4ql36pNeSx5bSpa/35B+sA3OhsaLMAnvqhlVXuKKQy1TmGhbBBf8qnhCiMAGRrXFILT0nWjFc7assG3KqsaJMDXnNo' +
//    'M3Qgr/W7nAQC2kiSti4WBlEUtFAT4MWg7wBtEsBbg+Zq+VqIuLX+dyvPsLBReglUn40PtgZdPmDToDOgTQ54NWhMnwTpCPtVsxsGqZY5FmLd51hhNAC+NCD1TO0WjC0b8GLQGdBmAbw3aHqah7uVQKEN6MXSngWSdIcPRa6AXCZg26AzoE0K2G3QdgsBS7omYmxsFNwl' +
//    'MAgHRrHmwMDAHrwNuizALoO+MdrkgCeDpnpXXBUq8z801v9qwWs4SbKBmM+uHtRWNAqloVzArboLtMkArwatQd4yaBj0wskHLtcGyfrwPpD3Bl0H4MWgE6MV+HLcBvDUDy1JtlSTVzk8/AIyLJdPlat2xe2xNDo7rcoC3I2yRc9ujDYZ4G0O7dsJOSKoFfDzGQU1LInr' +
//    'iqsNbG+CsEaJgpoAq5FHC7dFmxzwtg6NIQXAJ5i1FmpqhswBvjqagCopjGzII7kOZ5mAF4POiDYp4L1BY01eeyKaiZRLwsq/W1YJ0q+kDWxv9UgbdNmAbYNOiDYL4Atce3npa3uGK49KlnDgTFLDkraBsR3v1OyiVAvgUWVFmxywfF0OybQHrhns2anDbekY2gbuP3s5' +
//    'YgF3gnb/fQBu1V3QmwwwvlgjtoGda3fGRG2kkDbwNoduIR7w6DDq+wG8GHQmepMD3i/WyO3GaO/MOCKoXa2GSPfg0DYwbtDlAzYNOjHaLIDxKge1cIO5K+MoRA0gnsABHlBVQBuYrnKUCxirciREmxzwNLDSCJq8g3FOodXeLQZns0E70q9PG7j/HFipB3A3ZkebFDDd' +
//    'KMRaBnbVphNUsCImQUvbvz69HONmJbfyAavxbtAmAbxdrJFr4nKzYJSw9WC6NkDYig2hbeC9QdcBeDHoxGghF+D9UmDYlkgD0PvlctsiKf8SWDlcV7g9lLjNwoaNQdcDWI3Z0SYFvF191F6RZEHrSsKjR98O02SQOBe60q+rY2c16DoALwadCW1ywLhBY8hN9BxKP7RO' +
//    'yC7oLh+sXmTQ5QLGDDox2qSA6aXA7F3MB48yifIv1PtuWW5yu0+BRO1Piteh6wFsVjkSo80CGF+ssSOCtNXgOT7q03TwbS7QOXQdgE2DzoQ2KeB1wXMO6cWzCXxDfmMhD3CBmgBfhuxokwLeLtbYA73Zs41cAb358w1L4DGgDbw9N5coLB+wHrKhzQJ4a9B262BBe/Fo' +
//    '+iZuI/n2cmwNunzApkFnQpsU8Lr6aG8g7i3kgwd6T9RSqCEQsTQ8fK7kFgNYPQxgPWSlNzng1aBt1IOFcEDKJFclK3KcQTqexLWB8SpHLODxYQAvBp2R3qSAtwbdMfXuS8D46MEjwbHD3nuDLh+wadAJ0UIuwHuDvgC+jkcMyoNdV2LcV/YGXTZg26Azok0CeDXoi/H8' +
//    'QjQsQ5rAIC+BIbAdzLWBB7LKUQfgxaAzok0KeGvQyxFD7TvQryC4jeTb9uXGkOgcGgM8FgfYNOgMaJMDbvQ4+pUay6+B2/1u+e0b//SDfvskuC6CT3Yfh+Cp1hES000ES7mfR0Rjzuf6UBM4CS6Z4ErZLZLgfSbdCGOtgXxy2vGO9mNcB957FLmT4HoIrpDd4gnmM+lG' +
//    'yE6K9zRybb+nCblGRq8WPnu0906C6yG4MnarIPgC1+t+8WDz3BX7qWXcrK2MO2SwaNEBz+9f5iS4ZIIrZbcagvdrN0qOPu/GymqGNU0U6dxzhmrpMUTmyG/4y5wEl0xw5ewWTzCdSUsYSP2OizWMYYJxSRSV885JcMkEV8huVQTjq6C7zlO/qz2YptpMwnLYFaW+5/fx' +
//    '7r0Q7Eq+J8Eh76Zi6U6Tb/EE01tVcNehz3zf1cS53VHVWCMTrlEKovHBRZfrOse70u+cBJdNcKXsVkMwv58QdV96L1YeswLJ6AM1pEzQjFFNLTSB3fN5N9U33Zn0SXApBFfMbhUEb3dgoZiSsHmr98AqhhugnSypLa+FDSZJtIW8d+S3QnSeBJdN8Mlu2QTzeydLmUoR' +
//    'JL8D56PqBwvAPjsJLpngk92yCZ78pNuI2M8pG/JrwqNRwWPKngSXTXCbgZ2M7EJtBG83y/JhYrmvPNlridGE1pNR5WC6ObbsVQHRf6RMzPdOgssmOJRdFZD53jG7xRK83USZY8rnWjHvaIbxlmBXEYxjTPuNOjiHHqhdUn3fURm/eRJcNsGVs1s8wXgmHXKuBEUtdd0S' +
//    'TAPBeEt44fj574iceLhojzk/8luu85PgsgmumN0qCN5n0hiTrmfKOjdbyi3DOMYuOL5rM43NtMQcLxk3WumYKxaV3D3f92Pucc9OgssmuFJ2qyGYzqRDjgph2p7XaTKMsQsE2y3BLsamfKoSSbmkLH6U40lw2QSf7JZN8DaT5hh0PbOZ4Cbht8wRYxv7vqmH4sdzaQcd' +
//    'SKv0Xuiz2G+dBJdNcIXsVkUwnUlLzxVyrgm2WyPOKGYxdoFhlmIV5EWyZhpQLrof4fwkuGyCK2e3eIL3mbTNouTaZNpm2Ix9jGmwzm3Gbaax7wOhK3JpB1ePFrb15D1enwSXTXCl7FZD8DqZpXUw6bqvrGtNMKKJayAYt5kGwfcb5FrgWSl13qGi817vnwSXTXDF7FZB' +
//    '8DqZRRIax3MsflqiUGuJ+KY83KnvUAXnwXMdqHJZedKQ4/37IZjzfD0JDn3/CGYLSL7FEuyXSYcEnzgLmSvqq6M5lspHCPdDcAjJJ8FHZNIFJV+ojWA8k+48WOw84srn19zouzcsm32ifkz47klw2QSf7JZN8D6T7pAOqs7BsIR5Ks7Ao1XceMZ5poaSlKIx8l3pN06C' +
//    'yyb4ZLdsgreZtM1wZ40qdEhbiGK2A/emA9ggLRA+PdoYfWiE7ArYdhkhRa2E6vHA6xjZk+CyCa6Y3SoI3mbSikjPHcMqdW4zTcUnVQwr4nyJ10YwEuHQc7QDjxbQc/S55N2T4LIJrpTdagjGM+mFYbMotu9ppEjuLHaxuHN1ZGHFsMk2x7SvPus1qSOPz9gsR4vkWaw8' +
//    'nkmfBJdEcOXsFk/w5CdNsYmxqh3MUkdgjtzkf0UcJZscAM24a1P10MmlHM0pj+b5SXDZBFfIblUETzVpk1XlYBxjG2MWhEViIyiSGw+mIa6iBZ70SiiVZKS3vHcSXDbBlbNbPMFrJo2xizGsEFYphjui6wgc7SKKXY5hrq0k7LKU9GxxvViSxtIYeR4icxJcNsGVslsN' +
//    'wXgmTbFKzQnVDMNYLDeOoWBsF02sI8u+9ht1EA89uJb69qGWowu7Hg+QOQkum+CK2a2C4G0m3SH/tbPwYL46QNyTDAMDwjBWBDcOhiW+Qg4nHkn5S1GrCZopajl6jn52Elw2wZWzWzzB20waY5V6ph3MgkdxyG0rrBFmG8foQ8RP6v7u4xo/BlLlE7jvnASXTfDJbtkE' +
//    '7zNpKas+oYO4veMlzHpMYzoC0hGz8sdE4SS4bIIrY7c6gvlMWsFx8zebiOLY3lztxgsBHEXxERQNB7xzElw2wSe7ZRM8+UlfHOxyjIOwI6lxMDsybLdIe6kVdGjpMErBo7GkBD1ZPpQPHhRK3h0AQEawK8m4yB0dyXYUJN8HJnhMQDAhG5p8pezGJN+W6O44kN2CUjAu' +
//    'O9WktTDtApNBu4rZEWF3dIw22Gm3BbcHvGRhAeaxz77DPisASMZ0OcpinskJDo3UhiGcy6gLIljlIzgm+UrZDU2+row5kt0qUjCeSUvbSlKHxoZJv3ZaVg7GqT14bry0Q8ikUonHpIuy4YDnJ8FlE1wpu9UQvM2kJRUsilluKSzK630EejpSY1WwsG2GfSxQUBZLe7JC' +
//    'Z//7NJYGAZ3Sd0+Cyya4cnaLJ3ifSSuP2PMddTCZpY4cs9QRwD3p32NpB/uoPI4+s/19qTOPPu+eBJdNcIXsVkWwLJMG8F+miponinVqmcUwdu+BKlrjDcphF7Wu5yfBZRNcObvFE7y64F1u2InVMCMOFLP2PFcpwyD/n9rRuyWhWTnGiF1DD65eqsFBp+TZSXDZBFfK' +
//    'bjUEr5n0UVslNISPDiDDwDbbNssY09RWxoGeJ5wXoWRSqc+4sAK5887A0OZ77yS4bIIrZrcKgvlMGpjY4zywAPHNwe41SHw0SDy1SFzeuRttqFu8TRlGm4tWeSZ9ElwCwZWzWzzB62SWo6YlcUEhRTDHuhIwe6cT0rgZ+lLah4PCSXDZBJ/slk3wOnB4i/3Vm0A2Q+e3' +
//    'JlzaIXT2/60z5AEA+l0mfRJcMsGVsVsdwdtMmouDmCLYNaFfwqwP6zcqg33+nm95G0J9L3x2Elw2wSe7ZRO8ZtLSDiyKYR/GW6Tt1IJ7eVfpchN3utywAvlMf1ePVS+gu99k0ifBpRJcObvFE/z/p2k4h2mO9AYAAAAASUVORK5CYII=';




/** 
 * Color-Picker 
 * a simple way to pick your personal color a powerfull tool with many extras and for best work
 * provides: 
 *  -multiple colorvalues {HEX, HSV, HSL and RGB}
 *  -a styling method
 *  -a Painter method
 *  -muliple callbacks {open, execute, close}
 *  -and more 
 * 
 * @method initials the Colorpicker 
 * @param {object} params contains the configuration which are set when the colorPicker is called
 */
var ColorPicker = function (params) {
    ColorPicker.setGlobalStyle(undefined, 'hallo');
    //timeStamp generated used by the style sheet engine
    this.timeStamp = Date.now();
    //the time stamp will also used in the tamplate 
    this.UI = this.UI.replace(/%timestamp%/gi, this.timeStamp);
    //i dont know
    this.activate = true;

    this.currentColor = {
        h: '0',
        s: '0',
        l: '0'
    };
    this.hsv = {
        h: 207,
        s: 1,
        v: 0.51
    };
    this.rgb = {
        r: 0,
        g: 0,
        b: 0
    };
    //params need to be set!
    if (typeof params === 'undefined') {
        throw "Please set the append-value in the ColorPicker config";
    }
    //params.append is a musst value else it throws an Error! 
    if (typeof params.append !== 'undefined') {
        this.container = document.querySelector('input[type="text"]' + params.append);
    } else {
        throw "Please set the append-value in the ColorPicker config";
    }
    //the inPutreader can be disabeld
    if (typeof params.inputReader != 'undefined') {
        this.inputReader = params.inputReader;
    } else {
        this.inputReader = true;
    }
    // value you want to dye, default its the same like append
    if (typeof params.dye !== 'undefined') {
        this.dye = document.querySelector(params.dye);
    } else {
        this.dye = this.container;
    }
    // the colortype witch will shown in the params.view
    if (typeof params.format !== 'undefined') {
        this.format = params.format;
    }
    //class of where the color will be shown uses the value function.
    //note it should be an input["text] or input["textArea"]
    // deafult is false so value will not be shown
    if (typeof params.view !== 'undefined') {
        this.view = document.querySelector(params.view);
    } else {
        this.view = false;
    }

    //the standart value set in the params object will convert from {hsl, hex, rgb} to hsv  
    if (typeof params.standard !== 'undefined') {
        if (params.standard.hasOwnProperty('l')) {
            params.standard = this.hslToHsv(params.standard);
        } else if (params.standard.hasOwnProperty('b')) {
            params.standard = this.rgbToHsv(params.standard);
        } else if (typeof params.standard == 'string') {
            params.standard = this.rgbToHsv(this.hexToRgb(params.standard));
        }
        this.hsv.h = params.standard.h; // min.: 0, max.: 360
        this.hsv.s = params.standard.s; // min.: 0, max.: 100
        this.hsv.v = params.standard.v; // min.: 0, max.: 100

    }
    // top, right, bottom, left from the inputtype
    if (typeof params.position !== 'undefined') {
        this.aligen = params.position.toLocaleLowerCase();
    } else {
        this.align = 'bottom';
    }
    // css: color, borderColor, backgroundColor .... default = backgroundColor 
    if (typeof params.css !== 'undefined') {
        this.styleValueToDye = params.dyeThis;
    } else {
        this.styleValueToDye = 'backgroundColor';
    }
    //if the user want to use the painter Method 
    // this is a boolean. default false
    if (typeof params.painter !== 'undefined') {
        this.painterInit = params.painter;
    }
    // margin between the colorPicker and the input type
    if (typeof params.margin != 'undefined') {
        this.margin = params.margin;
    } else {
        this.margin = '0 0';
    }

    // if the init function is set it will be called instantly
    if (typeof params.customCss !== 'undefined') {
        this.css = {};
        this.styleSheet(params.customCss);
    }
    // funcfunction when colorpicker is in used
    if (params.execute) {
        this.callback = params.execute;
    }
    // when you close the colorPicker
    if (params.close) {
        this.closeCallback = params.close;
    }
    // when you focus the input you are appanding the colorpicker 
    if (params.open) {
        this.openCallback = params.open;
    }
    // add the event on the Input
    this.renderColorPicker();
    // the colorpicker will be shown the hole time. open and close function will not working in this mode
    if (typeof params.alwaysActive !== 'undefined') {
        this.alwaysActive = params.alwaysActive;
        if (params.alwaysActive) {
            this.margin = '0 -' + parseInt(this.container.getBoundingClientRect().height);
            this.align = 'bottom';
            this.renderColorPicker();
            this.container.focus();
        }
    }
};
/**
 * 
 * @type {@exp;Object@call;create}
 */
ColorPicker.prototype = Object.create(Object.prototype);

/**
 * add the style sheet used by the colorPicker
 * this funfunction is normaly called one time
 * just add a <style></style>
 * @param {object} overrideObject contains a css object
 */
ColorPicker.prototype.styleSheet = function (overrideObject) {
    if (!document.querySelector('.ColorpickerStylesheet' + this.timeStamp)) {
        this.css = this.cssOverride(this.css, overrideObject);
        var css = this.cssStringCreator(undefined, this.timeStamp);

        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute('class', 'ColorpickerStylesheet' + this.timeStamp);
        style.textContent = css;
        head.appendChild(style);
    }

};
/**
 * based on the css Object a string will generate wich uses the css-syntax
 * @return {string} this sting is generated out of the cssObject which is given in
 */
ColorPicker.prototype.cssStringCreator = function (cssObject, timeStamp) {
    if(typeof cssObject == 'undefined'){
        cssObject = this.css;
    }
    var css = '';
    for (var ring in cssObject) {
        var chain = cssObject[ring];
        css = css + ring + timeStamp + ' { ';
        for (var key in chain) {
            css = css + key + ':' + chain[key] + ';';
        }
        css = css + '} \n\n';
    }
    return css;
};
/**
 * takes the normal css obejct and adds or overrides with keys from the argument
 * @param {obejct} overrideObjects the  values wich overrides the css obejct
 */
ColorPicker.prototype.cssOverride = function (target, source ) {
    if(typeof target == 'undefined'){
        target = this.css;
    }
    for (var key in source) {
        if (typeof target[key] == 'undefined') {
            target[key] = {};
        }
        for (var ring in source[key]) {
            target[key][ring] = source[key][ring];
        }
    }
    target['.containTheColor'].width = '361px';
    target['.containTheColor'].height = '101px';
    return target;
};
/*
 * creates the container within the colorpicker as Markup
 * runs first time colorrization
 */
ColorPicker.prototype.createColorPicker = function () {
    this.ContainerDiv = document.createElement('div');
    this.ContainerDiv.setAttribute('class', 'container container' + this.timeStamp);
    this.ContainerDiv.innerHTML = this.UI;
    if (this.painterInit) {
        this.painter();
    }
};
/**
 * returns a nodlist with all elements containing by the containerDiv and the Input
 * @param {obejc} pushThisToo some more values wich will need in the nodesArray.
 * @return {Array} a array of all nodes wich are nonCloseElements(click them without closing editor)
 */
ColorPicker.prototype.getMarkUp = function (pushThisToo) {
    var nodesArray = Array.prototype.slice.call(this.ContainerDiv.childNodes);
    if (typeof pushThisToo !== 'undefined') {
        nodesArray.push(pushThisToo);
    }
    for (var i = 0; i < nodesArray.length; i++) {
        if (nodesArray[i].hasChildNodes()) {
            var superArray = Array.prototype.slice.call(nodesArray[i].childNodes);
            for (var j = 0; j < superArray.length; j++) {
                nodesArray.push(superArray[j]);
            }

        }
    }
    nodesArray.push(this.container);
    return nodesArray;
};
/**
 * 
 * creats and renders the colorpicker to the Element ist schould appand to {this.container}
 */
ColorPicker.prototype.renderColorPicker = function () {
    var self = this;
    this.createColorPicker();
    this.renderPosition();
    this.paint();
    if (this.inputReader) {
        this.readInput();
    }
    this.container.addEventListener('focus', function () {
        self.openCallback();
        document.body.appendChild(self.ContainerDiv);
        document.documentElement.addEventListener('click', close);
        self.intervalrendering();
        self.initPicker();
    });

    var nodesArray = this.getMarkUp();
    var close = function (e) {
        var status = false;
        for (var i = 0; i < nodesArray.length; i++) {
            if (nodesArray[i] === e.target) {
                status = true;
            }
        }
        if (!status && self.activate && !self.alwaysActive) {
            self.ContainerDiv.parentNode.removeChild(self.ContainerDiv);
            self.closeCallback();
            clearInterval(self.interval);
            document.documentElement.removeEventListener('click', close);
            document.documentElement.removeEventListener('mouseup', this.mouse_up);
            self.div.removeEventListener('mousedown', this.mouse_down);
            self.div.removeEventListener('mousemove', this.mouse_move);
        }

    };
};
/**
 * 
 * runs in an interval of 100 ms the renderPosition. will be used when the colorpicker is open
 */
ColorPicker.prototype.intervalrendering = function () {
    var self = this;
    this.interval = setInterval(function () {
        self.renderPosition();
    }, 100);
};
/** 
 * 
 * set the position to the colorpicker based on the margin and 
 */
ColorPicker.prototype.renderPosition = function () {
    var first = this.aligen.substring(this.aligen.indexOf(' '), 0); // get first position value
    var second = this.aligen.substring(this.aligen.indexOf(' ') + 1); //get second position value
    var scroll = window.scrollY;
    if (first === '') {
        first = this.aligen;
    }
    var marginLeft = parseInt(this.margin.substring(this.margin.indexOf(' '), 0));
    var marginTop = parseInt(this.margin.substring(this.margin.indexOf(' ') + 1));
    var pos = this.container.getBoundingClientRect(); //align values from Input
    // the color picker is appanded 
    var height = pos.height;

    var width = pos.width;
    var top = pos.top;
    var left = pos.left;
    switch (first) {
        case 'bottom':
            this.ContainerDiv.style.top = (height + top + marginTop + scroll) + 'px';
            if (second == 'center') {
                this.ContainerDiv.style.left = (((left + (width * 0.5)) - (375 / 2)) + marginLeft) + "px";
            } else if (second == 'left') {
                this.ContainerDiv.style.left = ((left - 375) + marginLeft) + "px";
            } else if (second == 'right') {
                this.ContainerDiv.style.left = ((left + width) + marginLeft) + "px";
            } else {
                this.ContainerDiv.style.left = (((left + (width * 0.5)) - (375 / 2)) + marginLeft) + "px";
            }
            break;
        case 'top':
            this.ContainerDiv.style.top = (top - 115 - marginTop + scroll) + 'px';
            if (second == 'center') {
                this.ContainerDiv.style.left = (((left + (width * 0.5)) - (375 / 2)) + marginLeft) + "px";
            } else if (second == 'left') {
                this.ContainerDiv.style.left = ((left - 375) + marginLeft) + "px";
            } else if (second == 'right') {
                this.ContainerDiv.style.left = ((left + width) + marginLeft) + "px";
            } else {
                this.ContainerDiv.style.left = (((left + (width * 0.5)) - (375 / 2)) + marginLeft) + "px";
            }
            break;
        case 'left':
            this.ContainerDiv.style.top = (((top + (height * 0.5)) - (115 / 2)) + marginTop + scroll) + 'px';
            this.ContainerDiv.style.left = (left - 375 - marginLeft) + 'px';
            break;
        case 'right':
            this.ContainerDiv.style.top = (((top + (height * 0.5)) - (115 / 2)) + marginTop + scroll) + 'px';
            this.ContainerDiv.style.left = (left + width + marginLeft) + 'px';
            break;
        default:
            this.ContainerDiv.style.top = (height + top + marginTop + scroll) + 'px';
            this.ContainerDiv.style.left = (((left + (width * 0.5)) - (375 / 2)) + marginLeft) + "px";
            break;
    }
};
/*
 * Starts the Colorpicker Event
 * @method initPicker
 * @param {object} element
 * @return {undefined}
 */
ColorPicker.prototype.initPicker = function () {
    var self = this;
    this.div = this.ContainerDiv.querySelector('.overlay' + this.timeStamp);
    this.input = this.ContainerDiv.querySelector('.container' + this.timeStamp + ' input[type="range"].slide' + this.timeStamp);
    this.input.value = this.hsv.v * 100;
    self.div.style.opacity = 1 - this.hsv.v;
    this.crosshair = this.ContainerDiv.querySelector('.crosshair' + this.timeStamp);
    this.input.addEventListener('input', function (e) {
        var v = e.target.value;
        self.hsv.v = v / 100;
        self.div.style.opacity = 1 - v / 100;
        self.paint(true);
    });
    this.pos = this.div.getBoundingClientRect();
    this.interaction();
};
/**
 * set the ColorPicker in to the hsv object
 * @param {type} e
 * @return {undefined}
 */
ColorPicker.prototype.setColor = function (e) {

    if (this.active) {
        var h = e.clientX - (this.pos.x || this.pos.left) - 1;
        var s = e.clientY - (this.pos.y || this.pos.top) - 1;
        var v = this.input.value;
        this.hsv = {
            h: h,
            s: s / 100,
            v: v / 100
        };
        this.paint();
    }
};
/**
 * dyes the element you choose
 * @param {boolean} onSlide if the slider is used the slide calls this method with a true
 * @return {undefined}
 */
ColorPicker.prototype.paint = function (onSlide) {
    if ((onSlide || this.active) && this.callback) {
        this.callback(this.rgb, this.hsl, this.hsv, this.hex);
    }
    this.hsl = this.hsvToHsl(this.hsv);
    this.rgb = this.hsvToRgb(this.hsv);
    this.hex = this.hsvToHex(this.hsv);
    var ausgabe = this.convertToChoosen(this.format);
    var brightness = this.calculateBrightness(this.hsl);
    this.dye.style[this.styleValueToDye] =
        'hsl(' + this.hsl.h + ' , ' + (this.hsl.s * 100) + '%,' + (this.hsl.l * 100) + '% )';
    if (this.view !== false) {
        this.view.value = ausgabe;
        if (this.dye === this.view) {
            this.dye.style.color = brightness > 0.5 ?
                'black' : 'white';
        }
    }
    if (this.crosshair) {
        this.crosshair.style.left = (this.hsl.h - 7) + 'px';
        this.crosshair.style.top = (100 * this.hsv.s - 7) + 'px';
    }
};
/**
 * handles the interaction with the colorpicker
 * @return {undefined}
 */
ColorPicker.prototype.interaction = function () {
    var self = this;
    this.mouse_down = function (e) {
        self.active = true;
        self.setColor(e);
    };
    this.mouse_up = function () {

        self.active = false;
    };
    this.mouse_move = function (e) {

        self.setColor(e);
    };
    this.active = false;
    this.div.addEventListener('mousedown', self.mouse_down);
    document.documentElement.addEventListener('mouseup', self.mouse_up);
    this.div.addEventListener('mousemove', self.mouse_move);

    this.paint();
};
/**
 *  painter paints objects with current color
 */
ColorPicker.prototype.painter = function () {
    var self = this;
    var Painter = document.createElement('button');
    var t = document.createTextNode('Painter');
    Painter.appendChild(t);
    this.ContainerDiv.appendChild(Painter);
    var nodesArray = this.getMarkUp();
    var paint = function (e) {
        var stat = false;
        for (var i = 0; i < nodesArray.length; i++) {
            if (nodesArray[i] === e.target) {
                stat = true;
            }
        }
        if (!stat) {
            e.target.style.backgroundColor = '#' + self.hex;
        }
    };
    Painter.addEventListener('click', function () {
        if (self.activate) {
            document.addEventListener('click', paint);
            self.activate = false;
        } else {
            document.removeEventListener('click', paint);
            self.activate = true;
        }
    });

};

ColorPicker.prototype.readInput = function () {
    var self = this;

    this.container.addEventListener('keydown', function (e) {
        var value = this.value.trim();
        if (self.inputIsValid(value) && e.keyCode == 13) {


            if (value.match('#')) {
                value = value.replace('#', '');
                if (value.length == 3) {
                    value = value[0] + value[0] + value[1] + value[1] + value[2] + value[2];
                }

            } else {
                var valuesArray = value.split(/\s* \s*/);

                value = {};
                value[valuesArray[0][0]] = parseInt(valuesArray[0].replace(/[^0-9]/g, '')) || 0;
                value[valuesArray[1][0]] = parseInt(valuesArray[1].replace(/[^0-9]/g, '')) || 0;
                value[valuesArray[2][0] || self.format[2]] = parseInt(valuesArray[2].replace(/[^0-9]/g, '')) || 0;

                if (value.hasOwnProperty('s')) {
                    value.s = value.s / 100;
                }
                if (value.hasOwnProperty('l')) {
                    value.l = value.l / 100;
                }
                if (value.hasOwnProperty('v')) {
                    value.v = value.v / 100;
                }

            }
            if (typeof value != 'object') {
                self.hex = value;
                self.hsv = self.rgbToHsv(self.hexToRgb(value));
                self.hsl = self.hsvToHsl(self.rgbToHsv(self.hexToRgb(value)));
                self.rgb = self.hexToRgb(value);
            } else if (value.hasOwnProperty('l')) {
                self.hsl = value;
                self.hsv = self.hslToHsv(value);
                self.rgb = self.hsvToRgb(self.hslToHsv(value));
                self.hex = self.rgbToHex(self.rgb);

            } else if (value.hasOwnProperty('r')) {
                self.rgb = value;
                self.hex = self.rgbToHex(self.rgb);
                self.hsv = self.rgbToHsv(value);
                self.hsl = self.hslToHsv(self.hsv);
            } else {
                self.hsv = value;
            }
            self.paint(true);
            self.uiUpdate();
        }
    });
};
/**
 * 
 * This Method checks format at the given String, if the format is hex it will return true, because reExe exclude non-hex-terms,
 * if its not hex it will be test on HSL,HSV,RGB in x=123 x=123 x=123, if this is incorrect it will return false.
 * if true it will check the values to the maximal so HSL/v h=360 s=100  l=100 v=100, RGB r=255 g=255 b=255. 
 * if one value is above the max false is returning, else true.
 * @param {string} input (the inputvalue from the TextInput the colorPicker is Appending);
 * @return {boolean} true or false
 */
ColorPicker.prototype.inputIsValid = function (input) {
    var reFormatTestHex = /^#([0-9a-f]{3}){1,2}$/gi;
    var reFormatTestHsvHslRgb = /^(h=([\d]{1,3})|r=([\d]{1,3})) (s=([\d]{1,3})|g=([\d]{1,3})) (l=([\d]{1,3})|v=([\d]{1,3})|b=([\d]{1,3}))/gi;

    var result = reFormatTestHex.test(input);
    if (!result) {
        result = reFormatTestHsvHslRgb.test(input);
        if (result) {
            var values = input.split(/\s* \s*/);
            var valuesB = {};
            valuesB[values[0][0]] = parseInt(values[0].replace(/[^0-9]/g, ''));
            valuesB[values[1][0]] = parseInt(values[1].replace(/[^0-9]/g, ''));
            valuesB[values[2][0]] = parseInt(values[2].replace(/[^0-9]/g, ''));
            var maxVal = 360;
            if (valuesB.hasOwnProperty('r')) {
                maxVal = 255;
            }
            for (var key in valuesB) {
                if (valuesB[key] > maxVal | valuesB[key] < 0) {
                    result = false;
                }
                if (key == 'h') {
                    maxVal = 100;
                }
            }
        }
    }
    return result;



};

ColorPicker.prototype.uiUpdate = function () {
    this.input.value = this.hsv.v * 100;
    this.crosshair.style.top = this.hsv.s * 100;
    this.crosshair.style.left = this.hsv.h;
};
/**
 * converting value to a choosen format
 * @param {type} format
 * @param {type} value
 * @return {objects(hsl,rgb,hsv)/strings(hex)}
 */
ColorPicker.prototype.convertToChoosen = function (format, value) {
    format = format.toLowerCase();
    if (typeof value === 'undefined') {
        value = this.hsv;
    }
    if (typeof format === 'undefined') {
        format = 'hex';
    }
    if (format === 'rgb') {
        this.currentColor = this.hsvToRgb(value);
    } else if (format === 'hsl') {
        this.currentColor = this.hsvToHsl(value);
    } else if (format === 'hex') {
        this.currentColor = this.hsvToHex(value);
    } else if (format === 'hsv') {
        this.currentColor = value;
    } else {
        this.currentColor = null;
    }
    return this.createString(this.currentColor);
};
/**
 * 
 */
ColorPicker.prototype.createString = function (value) {
    var key0, key1, key2;
    switch (this.format) {
        case 'hex':
            return '#' + value;
        case 'rgb':
            key0 = value.r;
            key1 = value.g;
            key2 = value.b;
            break;
        case 'hsl':
        case 'hsv':
            key0 = value.h;
            key1 = value.s * 100;
            if (this.format == 'hsl') {
                key2 = value.l * 100;
            } else {
                key2 = value.v * 100;
            }
            break;

    }
    return this.format[0] + '=' + Math.round(key0) + ' ' + this.format[1] + '=' + Math.round(key1) + ' ' + this.format[2] + '=' + Math.round(key2);

};
/**
 * 
 * @return {object} this.currentColor as an Object in 
 * RGB {r:r, g.g, b:b}, 
 * HSV{h:h, s:s, v:v}, 
 * HSL{h:h, s:s, l:l}
 * and as String in HEX {AAFF11} without '#'
 */
ColorPicker.prototype.getCurrentColor = function () {

    return this.currentColor;
};
/*
 * Converts hsv to hsl
 * @method hsvToHsl
 * @param {object} a hsv value like h: 1...360, s: 0...1, v: 0...1
 * @return {object} hsl with values h: 1...360, s: 0...1, l: 0...1
 */
ColorPicker.prototype.hsvToHsl = function (a) {
    var b = parseFloat(a.s),
        c = parseFloat(a.v),
        d = (2 - b) * c;
    return {
        h: a.h,
        s: b * c / (1 > d ? d : 2 - d) || 0,
        l: d / 2
    };
};
// http://de.wikipedia.org/wiki/HSV-Farbraum#Umrechnung_RGB_in_HSV
/**
 * Convert RGB to HSV values
 * @method rgbToHsv
 * @param {Object} input An object with attributes r/g/b as numbers 0..255
 * @return Object Object with attributes h/s/v as numbers 0..360/0..1/0..1
 */
ColorPicker.prototype.rgbToHsv = function (input) {
    var r,
        g,
        b;
    r = input.r / 255;
    g = input.g / 255;
    b = input.b / 255;
    var v = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    switch (v) {
        case min:
            break;
        case r:
            h = 60 * (g - b) / (v - min);
            break;
        case g:
            h = 60 * (2 + (b - r) / (v - min));
            break;
        case b:
            h = 60 * (4 + (r - g) / (v - min));
            break;
        default:
            break;
    }
    if (h < 0) {
        h += 360;
    }
    var s = v ? (1 - min / v) : 0;
    return {
        h: h,
        s: s,
        v: v
    };
};
// http://de.wikipedia.org/wiki/HSV-Farbraum#Umrechnung_HSV_in_RGB
/**
 * Convert HSV to RGB values
 * @method hsvToRgb
 * @param {Object} input An object with attributes h/s/v as numbers 0..255/0..1/0..1
 * @return Object Object with attributes r/g/b as integers 0..255
 */
ColorPicker.prototype.hsvToRgb = function (input) {
    var h = input.h;
    var s = input.s;
    var v = 255 * input.v;
    var hh = Math.floor(h / 60);
    var f = h / 60 - hh;
    var p = parseInt(v * (1 - s) + 0.5, 10);
    var q = parseInt(v * (1 - s * f) + 0.5, 10);
    var t = parseInt(v * (1 - s * (1 - f)) + 0.5, 10);
    v = parseInt(v + 0.5, 10);
    switch (hh) {
        case 1:
            return {
                r: q,
                g: v,
                b: p
            };
        case 2:
            return {
                r: p,
                g: v,
                b: t
            };
        case 3:
            return {
                r: p,
                g: q,
                b: v
            };
        case 4:
            return {
                r: t,
                g: p,
                b: v
            };
        case 5:
            return {
                r: v,
                g: p,
                b: q
            };
        default:
            return {
                r: v,
                g: t,
                b: p
            };
    }
};
/*
 * converts hsv to hex.
 * use the last selected color from the color picker ui if @param is undefined
 * @method  hsvToHex
 * @param {object} hsv Object with values h: 1...360, s: 0...1.0 , v: 0...1.0
 * @return hex code as String
 */
ColorPicker.prototype.hsvToHex = function (hsv) {
    if (typeof hsv == 'undefined') {
        hsv = this.hsv;
    }
    var rgb = this.hsvToRgb(hsv);
    var hexR = rgb.r.toString(16);
    if (hexR <= 15) {
        hexR = "0" + hexR;
    }
    var hexG = rgb.g.toString(16);
    if (hexG <= 15) {
        hexG = "0" + hexG;
    }
    var hexB = rgb.b.toString(16);
    if (hexB <= 15) {
        hexB = "0" + hexB;
    }

    var hex = hexR + '' + hexG + '' + hexB;
    return hex;
};
// http://ariya.blogspot.com/2008/07/converting-between-hsl-and-hsv.html
/**
 * Convert HSL to HSV values
 * @method hssToHsv
 * @param {Object} input An object with attributes h/s/l as numbers 0..255/0..1/0..1
 * @return Object Object with attributes h/s/v as numbers 0..255/0..1/0..1
 */
ColorPicker.prototype.hslToHsv = function (input) {
    var s = parseFloat(input.s);
    var l = parseFloat(input.l);
    l *= 2;
    if (l < 1) {
        s *= l;
    } else {
        s *= 2 - l;
    }
    return {
        h: input.h,
        s: 2 * s / (l + s) || 0,
        v: (l + s) / 2 || 0
    };
};
/**
 * 
 * @param {object} rgb  like {r:r, g:g, b:b}
 * @return {string} hex
 */
ColorPicker.prototype.rgbToHex = function (rgb) {
    if (typeof rgb == 'undefined') {
        rgb = this.rgb;
    }
    var hexR = rgb.r.toString(16);
    if (hexR <= 15) {
        hexR = "0" + hexR;
    }
    var hexG = rgb.g.toString(16);
    if (hexG <= 15) {
        hexG = "0" + hexG;
    }
    var hexB = rgb.b.toString(16);
    if (hexB <= 15) {
        hexB = "0" + hexB;
    }
    return hexR + "" + hexG + "" + hexB;
};
/**
 * 
 * @param {string} hex like F2AB88 ore f2ab88 but without '#'
 * @return {object} rgb {r:r, g:g; b:b}
 */
ColorPicker.prototype.hexToRgb = function (hex) {
    var rgb = {
        r: 0,
        g: 0,
        b: 0
    };
    rgb.r = parseInt(hex.substring(0, 2), 16);
    rgb.g = parseInt(hex.substring(2, 4), 16);
    rgb.b = parseInt(hex.substring(4, 6), 16);
    return rgb;
};
/**      * Convert HSVa to RGBa values
 * @method hsvToRgb
 * @param {Object} input An object with attributes h/s/v/a as numbers 0..255/0..1/0..1/0..1
 * @return Object Object with attributes r/g/b/a as numbers 0..255/0..255/0..255/0..1 where r/g/b are integers
 */
ColorPicker.prototype.hsvaToRgba = function (input) {
    var result = this.hsvToRgb(input);
    result.a = input.a;
    return result;
};
/**
 * Calculates a color's brightness according to http://www.poynton.com/notes/colour_and_gamma/ColorFAQ.html#RTFToC18
 * @param {String|Object} color Input color in any format (see {@link #normalizeColor})
 * @param {String|Object} background (optional) If color has an alpha channel, it is blended into <tt>background</tt>.
 * Note that background must be fully opaque;
 */
ColorPicker.prototype.calculateBrightness = function (color, background) {
    color = this.hsvaToRgba(this.normalizeColor(color));
    var brightness = (0.213 * color.r + 0.715 * color.g + 0.072 * color.b) / 255;
    if (background && color.hasOwnProperty('a') && color.a != 1) {
        background = this.hsvaToRgba(this.normalizeColor(background));
        brightness = color.a * brightness + (1 - color.a) * this.calculateBrightness(background);
    }
    return brightness;
};
/**
 * Converts a color in any given format to an HSVa object
 * @param {Object|String} input An RGB/RGBa/HSV/HSVa/HSL/HSLa object or a string as in {@link #parseColor}
 * @return Object See {@link rgbaToHsva}.
 */
ColorPicker.prototype.normalizeColor = function (input) {
    var result;
    if (typeof input == 'object') {
        if (input.hasOwnProperty('v')) { // hsv
            result = input;
        } else if (input.hasOwnProperty('l')) { // hsl
            result = this.hslToHsv(input);
        } else { // rgb
            result = this.rgbToHsv(input);
        }
        result.a = input.hasOwnProperty('a') ? input.a : 1;
    } else {
        result = this.parseColor(input);
    }
    return result;
};
/**
 * Convert any CSS color value to an HSVa object
 * @param {String} input A CSS color value as in <a href="http://www.w3.org/TR/css3-color/#colorunits">www.w3.org/TR/css3-color</a>.
 * Please note that the deprecated <a href="http://www.w3.org/TR/css3-color/#css-system">CSS2 system colors</a> are not supported.
 */
ColorPicker.prototype.parseColor = function (input) {
    if (!input) {
        return null;
    }
    if (/^rgba\(/.test(input)) {
        return this.parseRgba(input);
    } else if (/^rgb\(/.test(input)) {
        return this.parseRgb(input);
    } else if (/^hsla\(/.test(input)) {
        return this.parseHsla(input);
    } else if (/^hsl\(/.test(input)) {
        return this.parseHsl(input);
    } else if (/^#?([a-fA-F0-9]{3}){1,2}$/.test(input)) {
        return this.parseHex(input);
    } else if (/^[a-zA-Z]+$/.test(input)) {
        return this.parseColorName(input);
    }
    return null;
};
ColorPicker.prototype.alwaysActive = false;
ColorPicker.prototype.container = 'body';
ColorPicker.prototype.dye = 'body';
ColorPicker.prototype.view = '';
ColorPicker.prototype.format = "hsl";
ColorPicker.prototype.value = "51";
ColorPicker.prototype.aligen = 'bottom';
ColorPicker.prototype.hex = '000000';
ColorPicker.prototype.UI =
    '<div class="containTheColor containTheColor%timestamp%">' +
    '<img src="data:image/png;base64,' + background + '">' +
    '<div class="overlay overlay%timestamp%"></div>' +
    '<span class="crosshair crosshair%timestamp%"></span>' +
    '</div>' +
    '<input class="slide slide%timestamp%" type="range" min="0" max="100" value="" step="1">';
ColorPicker.prototype.painterInit = false;
ColorPicker.prototype.closeCallback = function () {};
ColorPicker.prototype.openCallback = function () {};
ColorPicker.prototype.oneStyleSheet = false;
ColorPicker.prototype.inputReader = true;
ColorPicker.setGlobalStyle = function (cssGlobalObject, a) {
    var globCss = {
        '.container': {
            height: '115px',
            position: 'absolute',
            width: '375px',
            '-webkit-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none',
            'z-index': '10000'
        },
        '.containTheColor': {
            position: 'relative',
            border: '7px solid white',
            'border-radius': '3px',
            'box-shadow': '1px 1px 10px #666',
            width: '361px',
            height: '101px'
        },
        'img, .overlay': {
            position: 'absolute',
            width: '361px',
            height: '101px'
        },
        '.overlay': {
            'background-color': 'black',
            cursor: 'crosshair',
            opacity: '.5'
        },
        'input[type="range"].slide': {
            width: '115px',
            transform: 'translate(340px, -70px) rotate(-90deg)'
        },
        '.crosshair': {
            background: 'transparent center center url("http://i.imgur.com/Y8FIYIk.gif") no-repeat scroll',
            display: 'block',
            width: '15px',
            height: '15px',
            'pointer-events': 'none',
            position: 'absolute'
        }

    };
    if (!document.querySelector('.GobalColorpickerStylesheet')) {
        globCss =  ColorPicker.prototype.cssOverride(globCss, cssGlobalObject);
        var css = ColorPicker.prototype.cssStringCreator(globCss, '');

        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        style.setAttribute('class', 'GobalColorpickerStylesheet');
        style.textContent = css;
        head.appendChild(style);
    }
};