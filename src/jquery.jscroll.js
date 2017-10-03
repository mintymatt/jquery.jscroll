// jquery.jscroll by Matthew Spence

// The MIT License (MIT)

// Copyright (c) 2013 Matthew Spence. https://matt-spence.com

// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

jQuery(document).ready(function($) {
	
	$(".jscroll").on("click",function(e){
		
		var dest_offset = 0,
		direction = "down",
		multiplier = 0,
		offset = 0,
		relativeTo = "element";

		if ($(this).attr("data-jscroll-vh") != null){
			multiplier = Number.parseInt($(this).attr("data-jscroll-vh"));
		}

		if ($(this).attr("data-jscroll-offset") != null){
			offset = Number.parseInt($(this).attr("data-jscroll-offset"));
		}

		if ($(this).attr("data-jscroll-relativeTo") != null){
			relativeTo = $(this).attr("data-jscroll-relativeTo");
		}

		if ($(this).attr("data-jscroll-direction") != null){
			direction = $(this).attr("data-jscroll-direction");
		}

		switch(relativeTo){
			default:
			case "element":
				console.log("yo");
				dest_offset = offset + (multiplier!=0? (window.innerHeight*multiplier) : $(document).height() );
				console.log(typeof dest_offset);
				dest_offset += $(this).offset().top-$(window).scrollTop(); //add window scroll offset.
				console.log(typeof dest_offset);

				break;
			case "top":
				dest_offset = $(window).scrollTop() - (offset + (multiplier!=0? (window.innerHeight*multiplier) : $(document).height() ) );
				dest_offset = -dest_offset;
				direction = "down";
				break;
			case "bottom":
				dest_offset = $(document).height() - (multiplier!=0? (window.innerHeight*multiplier) : $(document).height() );
				direction = "down";
				break;
		}

		switch (direction){
			default:
			case "down":
				break;
			case "up":
				dest_offset = -dest_offset;
		}

		console.log(dest_offset);
		console.log(direction);
		console.log(multiplier);
		console.log(offset);
		console.log(relativeTo);

		window.scrollBy({

			top: dest_offset,
			left: 0,
			behavior: "smooth"

		});

		e.preventDefault();

	});

	
});
