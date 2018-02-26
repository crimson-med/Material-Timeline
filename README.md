# Material-Timeline

A responsive material timeline simple to use and easily color customizable.

## Planned Updates

 - Add Color Customisation
 - Add Animation Customisation
 - Add JSON as data entry

## Instructions

Copy the following files:

 - `css/materialTimeline.css`

 - `js/fadeinTimeline.js`

 - `js/materialTimeline.js`

 Have JQuery on your website or copy it from: `js/jquery.js`

## Usage

Data should be coming in as an array.

```js
var myDates = [
  {"date": "1994","content":"Release of <b>Pulp Fiction</b> and the release of <b>Leon the professional</b>"},
  {"date": "2018","content":"Current year and the big stets to our life on Mars!"}
];
```

Include this div where you want to display the timeline.
```html
<div id="timeline"></div>
```

Call the function to render the timeline.

```js
renderTimeline(myDates);
```

Don't forget to include the **.css** and the **.js** files in your html.


```html
<link rel="stylesheet" type="text/css" href="css/materialTimeline.css">
<script src="js/jquery.js"></script>
<script src="js/materialTimeline.js"></script>
<script src="js/fadeinTimeline.js"></script>
```

Final example:

```html
<link rel="stylesheet" type="text/css" href="css/materialTimeline.css">
<script src="js/jquery.js"></script>
<script src="js/materialTimeline.js"></script>
<script type="text/javascript">
var myDates = [
    {"date": "1959","content":"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."},
    {"date": "1991","content":"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."},
    {"date": "1994","content":"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."},
    {"date": "2000","content":"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."},
    {"date": "2004","content":"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."},
    {"date": "2018","content":"Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam."}
];
renderTimeline(myDates);
</script>
<script src="js/fadeinTimeline.js"></script>
```

## Screens

![Preview](/readme/timeline_animated.gif)

![Preview Full](/readme/timeline_full.png)

![Preview Full](/readme/timeline_mobile.png)
