var gulp = require("gulp"),
minify = require("gulp-minify"),
concat = require("gulp-concat");

gulp.task("licence",function(){
	return gulp.src("LICENCE")
		.pipe(gulp.dest("dist"));
})

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
gulp.task("default",["minify","licence"],function(){
	console.log("#################################################");
	console.log("\nGulp Tasks: licence,minify");
	console.log("\n\nWatching JS Files...\n");
	console.log("\nCTRL+C to quit.\n");
	console.log("#################################################");
	gulp.watch("src/**.js",["minify"]);
});