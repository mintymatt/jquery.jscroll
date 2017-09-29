var gulp = require("gulp"),
minify = require("gulp-minify"),
concat = require("gulp-concat");

gulp.task("minify",function(){
	return gulp.src("src/**.js")
		.pipe(concat("jquery.jscroll.js"))
		.pipe(minify({
			ext: {
				src: ".js",
				min: ".min.js"
			}
		}))
		.pipe(gulp.dest("dist"));
})
gulp.task("default",["minify"],function(){
	gulp.watch("src/**.js",["minify"]);
});