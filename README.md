# jquery.jscroll
A JavaScript/jQuery API which uses classes to enable elements to relatively change a browser's scroll location.

![Scrolling](https://i.imgur.com/pm9fVG1.png)

# Installation

This project is dependant on [jQuery](https://jquery.com/)

* Download all the [files in the `/dist` folder](https://github.com/mintymatt/jquery.jscroll/tree/master/dist)

* You can also recompile the project youself. Download or clone this repo, run `yarn install`, and then `gulp`. 
This requires that you have yarn installed and accessible within the same directory. The result will be compiled
into the `/dist/` folder.

Make sure to retain the LICENSE.

# Usage

This script allows any elements with a class name when clicked to scroll the browser window. 
Below is a basic overview, view `/src/test.html` for a preview of this script in action.

Example (using an anchor as our element of choice):

### Init:
To initialize an element for jscroll, simply add the class `jscroll`.

### Vertical Scroll Direction Up:
Optional (by default the scroll direction is down).

Allows you to change the scrolling direction.
`data-jscroll-direction="up"`
`data-jscroll-direction="down"`

### Vertical Scroll Multiplier:
Optional.

This allows you to specify a multipler of the scale `vh` (i.e. 1 == 100vh in your chosen direction).
If no (or 0) vertical scroll multiplier is specified, then the page will scroll to the end, in our chosen direction.

`data-jscroll-vh="2"` == 200vh

### Offset:
Optional.

This script already takes the relative position of the chosen element to the viewport into account. However, you may have
extra margins or padding which offsets the element. Here you can specify the aproximate offset in pixels.

`data-jscroll-offset="10"` == 10px

### RelativeTo:
Optional (by default, relative to clicked element).

This decides from what position the scrolling starts. By default it's from the clicked element.

Other relativeTo positions:

`data-jscroll-relativeTo="top"`			- Scrolling starts from top of page. ***Direction setting is ignored.***

`data-jscroll-relativeTo="bottom"`		- Scrolling is inverted, starts at bottom of page. ***Direction setting is ignored.***

`data-jscroll-relativeTo="element"`		-	 Scrolling starts at element position.

### Full Example:
This example will scroll the user 200vh downwards when clicked.

`<a href="#" class="jscroll" data-jscroll-vh="2">Go 200vh down</a>`

### Notes:
When the `jscroll` class is added to an element, the default `click` event is prevented.

## Licence

This project acts under the MIT Licence. Please retain the `LICENCE` file throughout any distribution of this project.
