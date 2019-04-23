'use strict'

import gulp         from 'gulp'
import htmlmin      from 'gulp-htmlmin'
import sass         from 'gulp-sass'
import concat       from 'gulp-concat'
import connect      from 'gulp-connect'
import gulpif       from 'gulp-if'
import uglify       from 'gulp-uglify'
import scssLint     from 'gulp-scss-lint'
import autoprefixer from 'gulp-autoprefixer'
import eslint       from 'gulp-eslint'
import rename       from "gulp-rename"
import sourcemaps   from 'gulp-sourcemaps'

import jsonmin      from 'gulp-jsonmin'
import jsStylish    from 'jshint-stylish'
import browserify   from 'browserify'
import watchify     from 'watchify'
import buffer       from 'vinyl-buffer'
import source       from 'vinyl-source-stream'
import babelify     from 'babelify'
import fs           from 'fs'
import { argv }     from 'yargs'


let dir = './site/'
let cssOutput = 'expanded'
let cssComments = true
let showSourcemaps = true
let minifyHMTL = false
let runConnect = ['connect']
let runWatch = []
let runTests = []
let compressJSON = []
let dataFile = 'data.json'

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir)
}

if (argv.prod) {
	cssOutput = 'compressed'
	cssComments = false
	minifyHMTL = true
	showSourcemaps = false
	compressJSON = ['minify']
}

if (argv.watch) {
	runWatch = ['watch']
}

if (argv.tests) {
	runTests = ['spec/helpers/*.js']
}

if (argv.deploy) {
	runConnect = []
}

let copyDataToSite = () => {
	fs.createReadStream(dataFile)
		.pipe(fs.createWriteStream(`./site/${dataFile}`))
}
copyDataToSite()

gulp.task('minify', function () {
	gulp.src(`./site/${dataFile}`)
		.pipe(jsonmin())
		.pipe(gulp.dest('./site'));
});

gulp.task('connect', () => {
	connect.server({
		root: dir,
		livereload: true
	})
})

gulp.task('html', () => {
	gulp.src('components/html/*.html')
		.pipe(htmlmin({
			collapseWhitespace: minifyHMTL
		}))
		.pipe(gulp.dest(dir))
		.pipe(connect.reload())
})

gulp.task('sass-lint', () => {
	gulp.src('components/sass/*.scss')
		.pipe(scssLint())
})

gulp.task('lint', () => {
	return gulp.src(['components/js/*.js', '!node_modules/**'])
		.pipe(eslint({
			"parserOptions": {
				"ecmaVersion": 6,
				"sourceType": "module",
				"ecmaFeatures": {
					"jsx": true
				}
			},
			"rules": {
				"no-extra-semi": "error"
			}
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
})

gulp.task('sass', () => {
	gulp.src('components/sass/styles.scss')
		.pipe(gulpif(showSourcemaps, sourcemaps.init()))
			.pipe(sass({
				outputStyle: cssOutput,
				sourceComments: cssComments
			}).on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: ['last 5 versions'],
				cascade: false
			}))
		.pipe(gulpif(showSourcemaps, sourcemaps.write()))
		.pipe(gulp.dest(dir))
		.pipe(connect.reload())
})

gulp.task('js', () => {
	let commonOpt = {
		toDOM: 'spec/helpers/toDOM.js',
		domJS: 'toDOM.built.js',
		helpers: './spec/helpers/built/',
		main: 'components/js/main.js'
	}

	let browserifyTaskOptions = [
		{
			entries: commonOpt.toDOM,
			debug: false,
			source: commonOpt.main,
			rename: commonOpt.domJS,
			dest: commonOpt.helpers
		},
		{
			entries: commonOpt.toDOM,
			debug: false,
			source: commonOpt.toDOM,
			rename: commonOpt.domJS,
			dest: commonOpt.helpers
		},
		{
			entries: commonOpt.main,
			debug: showSourcemaps,
			source: commonOpt.main,
			rename: 'js.js',
			dest: dir,
			reload: true
		}
	];

	browserifyTaskOptions.forEach(opt => {
		browserify({
			entries: opt.entries,
			debug: opt.debug,
			transform: [ babelify ]
		})
		.bundle()
		.pipe(source(opt.source))
		.pipe(buffer())
		.pipe(rename(opt.rename))
		.pipe(gulpif(!showSourcemaps, uglify()))
		.pipe(gulp.dest(opt.dest))
		.pipe(gulpif(opt.reload, connect.reload()))
	})
})

gulp.task('data', () => {
	copyDataToSite()

	browserify({ entries: dataFile })
		.bundle()
		.pipe(source(dataFile))
		.pipe(connect.reload())
})

gulp.task('watch', () => {
	console.log('\n\nWatching for changes...\n\n')
	gulp.watch('components/sass/**/*.scss', ['sass'])
	gulp.watch('components/html/**/*.html', ['html'])
	gulp.watch(['components/js/**/*.js', ...runTests], ['js', 'lint'])
	gulp.watch(`./${dataFile}`, ['data'])
})

gulp.task('default', ['html', 'sass', 'js', 'data', 'lint', ...compressJSON, ...runConnect, ...runWatch])
