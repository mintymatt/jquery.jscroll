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

$(".jscroll").on("click",function(e){
	var top = 0;
	$(this).attr("data-jscroll-vh")!=null?top=window.innerHeight*Number.parseInt($(this).attr("data-jscroll-vh")):top=$(document).height();
	$(this).attr("data-jscroll-offset")!=null?top+=Number.parseInt($(this).attr("data-jscroll-offset")):0;
	top+=$(this).offset().top-$(window).scrollTop();
	$(this).attr("data-jscroll-up")!=null?top=-top:0;
	console.log(top);
	window.scrollBy({
		top: top, 
		left: 0, 
		behavior: 'smooth' 
	});
	e.preventDefault();

});
