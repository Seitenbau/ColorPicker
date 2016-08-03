# ColorPicker.js   
## Discription
---
ColorPicker.js is a awesome JavaScript-Plugin which creates a js colorPicker and awesome tools!   
Fuck Yeah! 

This is a guid to **install** and **use** the ColorPicker.   
 
> This is a Plugin writen without the use of JQuery. You dont need any other library
 >> but you can use them also.
___
---
## Find here

+ Discription
+ How to Install
  - What do you need?
  - What you need to do
    * Directory
    * Code
+ Getting started
+ Usage
+ style
  - Global Style
+ Input with keyboards
___
---
## How to Install   
### What do You Need?

+ This Library
+ I think you dont need more   

### What you need to do   
#### Directory

Add the ColorPicker.js file to your js-directory   

#### Code

use `<script src="path/to/colorPicker.js"></script>` above the Script-Tagin which you use the colorpicker
___
---
## Getting started   

This is a JavaScript-Class. Create a new Variable and instantiat the ColorPicker.
**NOTE:** the ColorPicker-attribute needs the 'append'-key with a class ore id from the Input you will appending the ColorPicker.
`var colorpicker = new ColorPicker({append: '#wherTheColorPickerOccures'})`
___
---
## Usage
|key|type|use|default|
|--:|---:|--:|------:|
|append|string|contains id ore class of the Input[type=text] the ColorPicker will append|NO Default! |
|view|string|id ore class where the Value will be shown| same as append|
|dye|string| id ore class of the item you will dye | same as append|
|css|string| a css property in js-Notation wich will be Painted|'backgroundColor'|
|format|string (case-insensetive)|choose between hex, rgb, hsl, hsv | 'hsl'|
|standard| string/object| the first color value wich will be painted (format-insensetive) |{h:207, s:1.0, v:0.51} |
|position|String | takes values around the input (top, right, bottom left) for top & bottom you can add a second value(left, right ore center) which moves the ColorPicker in this direction)   **NOTE:** the second value is center if is not set | 'bottom' / 'bottom center'|
|margin|string| a left and top margin value divided by a space and without px, moves the colorpicker, negativ values are allowed| '0 0'|
|alwaysActive|boolean|on true the colorPicker will be always Shown.   **NOTE:** the margin value will be Ignored, the close and open-funktion will never be triggered |false|
|customCss|object|description below| none |
|callback| function|a function runs on use| No Default Action |
|open| function| a function runs when colorpicker opens|No Default Action|
|close|finction| runs when the colorPicker close | No Default Action|
|painter|boolean|if true a button will be appand, click and you can dye every element|false|
|defined|Object|data: [[],[]] and switch: bolean| activates the second type of the colorpicker | none|

## StyleSheet
normaly ther is a posibility to style all colorPicker you are yousing by your own. therefore you can rewrite edit the css on a special way!   
use the customCss-poroperty, the object below contains the default Style, but you can edit this as you wish 
   `customCss:{`   
    `'.container': {`    
    `    height: '115px',`  
    `    position: 'absolute',`    
    `    width: '375px',`   
    `    '-webkit-user-select': 'none',`     
    `    '-moz-user-select': 'none',`   
    `    '-ms-user-select': 'none',`   
    `    'user-select': 'none',`   
    `    'z-index': '10000'`   
    `},`   
    `'.containTheColor': { `  
    `    position: 'relative',`   
    `    border: '7px solid white',`   
    `    'border-radius': '3px',`   
    `    'box-shadow': '1px 1px 10px #666',`   
    `    width: '361px',`   
    `    height: '101px'`   
    `},`   
    `'img, .overlay': {`   
    `    position: 'absolute',`   
    `    width: '361px',`   
    `    height: '101px'`   
    `},`   
    `'.overlay': { `  
    `    'background-color': 'black',`   
    `    cursor: 'crosshair',`   
    `    opacity: '.5'`   
    `},`   
    `'input[type="range"].slide': {`   
    `    width: '115px',`   
    `    transform: 'translate(340px, -70px) rotate(-90deg)',`   
    `},`   
    `'.crosshair': {`   
    `    background: 'transparent center center url("http://i.imgur.com/Y8FIYIk.gif") no-repeat scroll',`   
    `    display: 'block',`   
    `    width: '15px',`   
    `    height: '15px',`   
    `    'pointer-events': 'none',`   
    `    position: 'absolute'`   
    `}`   
`}` 
  
###Set a Global style!

with `ColorPicker.setGlobalStyle()` you are genarate a style which sets a head style one every Picker use first. Every ColorPicker looks for this Style if it exists it will not be generated again.    

This funktion takes the same object like the customCss-object.
___

---
## Input

if you clear the input you can write down a color in each formats.

hex:   
`hex=xxx` ore `hex=xxxxxx`


hsv:   
`h= xxx s=xxx v=xxx`

hsl:   
`h= xxx s=xxx l=xxx` 

rgb:   
`r= xxx g=xxx b=xxx`

It is possible to write in each format, but you should write in the format you have choosen in the config
___
