# 改變網頁內容
### lesson1
![](./images/pic1.png)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Constructive &amp; Co.</title>
    <link rel="stylesheet" href="css/c01.css" />
  </head>
  <body>
    <h1>Constructive &amp; Co.</h1>
    <script src="js/add-content.js"></script>
    <p>For all orders and inquiries please call <em>555-3344</em></p>
  </body>
</html>
```


```css
@import url(http://fonts.googleapis.com/css?family=Open+Sans:800italic);

body { 
    font-family: "Courier New", Courier, monospace;
    background: url("../images/constructive-backdrop.jpg") no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    margin: 0;
    padding: 0;}

h1, h3, p {
    float: left;
    clear: left;
    width: 320px;
    background-color: #fff;
    color: #5a514c;
    text-align: center;}


h1 {
    margin: 50px 0 0 50px;
    height: 175px;
    background-image: url("../images/constructive-logo.gif");
    background-repeat: no-repeat;
    text-indent: -9999px;
    border-top: 1px solid #bcbdc0;
    border-left: 1px solid #bcbdc0;
    border-right: 1px solid #bcbdc0;}

h3 {
    margin: 0 0 0 50px;
    padding: 25px 0 0 0;
    font-family: 'Open Sans', arial, sans-serif;
    font-size: 1.8em;
    font-style: italic;
    font-weight: 800;
    line-height: 0.80em;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    border-left: 1px solid #bcbdc0;
    border-right: 1px solid #bcbdc0;}

p {
    margin: 0 0 0 50px;
    padding: 30px 0 25px 0;
    font-weight: bold;
    text-align: center;
    border-right: 1px solid #bcbdc0;
    border-bottom: 1px solid #bcbdc0;
    border-left: 1px solid #bcbdc0;}

/* Border under box when you move script in the last example */
p + script + h3 {
    padding-bottom: 20px;
    border-bottom: 1px solid #bcbdc0;}

/* Fix for full-screen background image: Chrome on Android */
html{
    height:100%;
    min-height:100%;}
body{
    min-height:100%;}
```

```javascript
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');
```

---





