*, 
*::after, 
*::before {
	box-sizing: border-box;
}

ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
}

body { 
	@include fontSize($font-size-base);
	color: $base-grey;
}

button {
	background: none;
	border: 0;
	padding: 0;
}

.page-section {
	padding: 60px 0;
}

header {
	@include clearfix;
	overflow: hidden;
	position: relative;
	width: 100%;

	&:before {
		@include pseudo;
		background-color: $border-grey;
		height: 1px;
		width: 100vw;
	}

	h4 {
		float: right;
		margin-top: 5px;
	}
}

@include breakpoint(medium) {
	.page-section {
		padding: 80px 0;
	}

	header {
		h4 {
			margin-top: 10px;
		}
	}
}

@include breakpoint(large) {
	.page-section {
		padding: 100px 0;
	}
}

// Bootstrap
// =========

// Bootstrap can be removed entirely by deleting this line.

// @import "bootstrap/bootstrap";

@import "node_modules/furtive/scss/normalize";
// The easiest way to customise Bootstrap variables while
// being able to easily override the source files with new
// versions is to override the ones you want in another file.
//
// You can also add your own custom variables to this file for
// use in your site stylesheets.

@import "helpers/variables";
@import "helpers/mixins";

// Site Styles
// ===========
// Add your own site style includes here
@import "helpers/layout";

@import "helpers/fonts";
@import "helpers/icons";
@import "common";

// Sections
// ===========
@import "components/hero";
@import "components/web";
@import "components/about";
@import "components/contact";
@import "components/footer";
@import "components/slide-out";


.about-content {
	header {
		&:before {
			bottom: 20px;
			left: 25px;
		}
	}
}

.about-info {
	div {
		margin-top: 15px;
		padding-left: 25px;

		p {
			display: inline-block;
		}
	}
}

.about-skills {
	margin-top: 50px;

	div{
		padding: {
			left: 25px;
			top: 25px;
		};
	}

	li {
		@include dosis-regular;
		margin-top: 20px;
		padding-bottom: 15px;
		position: relative;

		$lengths: 100%, 100%, 75%, 60%, 80%;

		@for $i from 1 through 5 {
			&:nth-child(#{$i}) {
				@if ($i == 1) {
					margin-top: 0;
				}

				&:before {
					width: nth($lengths, $i);
				}
			}
		}

		&:before {
			@include pseudo;
			background-color: $light-grey;
			bottom: 0;
			height: 8px;
		}
	}
}

@include breakpoint(medium) {
	.about-section {
		.container {
			@include grid-row;
			justify-content: flex-end;
		}
	}

	.about-content {
		@include grid-row;
		justify-content: flex-end;

		header {
			&:before {
				bottom: 25px;
				left: 40px;
			}
		}
	}

	.about-info {
		div {
			@include column(5);
			padding-left: 0;
		}
	}

	.about-skills {
		@include column(5);

		div {
			padding-left: 40px;
			width: 100%;
		}

		li {
			@include fontSize(16px);
		}
	}
}

@include breakpoint(large) {
	.about-section {
		background: {
			image: url(/images/me.jpg);
			position: 3rem bottom;
			repeat: no-repeat;
		};

		.container {
			justify-content: flex-start;

			+ .container {
				justify-content: flex-end;
			}
		}
	}

	.about-content {
		header {
			&:before {
				bottom: 30px;
				left: 100px;
			}
		}
	}

	.about-info {
		@include column(4);

		div {
			max-width: 800px;
		}
	}

	.about-skills {
		@include column(3);
		margin-top: 120px;

		div {
			padding: {
				left: 100px;
				top: 50px;
			};
		}
	}
}

.contact-section {
	background-color: $base-grey;

	header {
		padding-bottom: 4px;

		&:before {
			bottom: 0;
			left: 53px;
		}
	}

	h3,
	p {
		color: #fff;
	}

	p {
		display: inline-block;
	}

	a {
		@include open-light;
		@include fontSize(18px);
		border: 1px solid #fff;
		color: #fff;
		display: inline-block;
		margin-top: 20px;
		padding: 16px 45px;
		text-decoration: none;
		transition: all linear 0.25s;

		&:hover { 
			background-color: #fff;
			color: $base-grey;
		}
	}
}

.contact-container {
	@include grid-row;
	justify-content: center;
}

.contact-content {
	@include column(6);

	div {
		margin: 20px auto 0;
		max-width: 500px;
		text-align: center;
	}

	p {

	}
}

@include breakpoint(medium) {
	.contact-section {
		header {
			padding-bottom: 6px;
		}
	}

	.contact-container {
		@include grid-row;
		justify-content: flex-start;
	}

	.contact-content {
		@include grid-row;
		@include column(5);
		justify-content: flex-end;
		padding: {
			left: #{(1 / 12) * 100 + '%'};
			right: #{(1 / 24) * 100 + '%'};
		};

		div {
			@include column(5);
			margin: {
				left: 0;
				right: 0;
			};
		}
	}
}

@include breakpoint(large) {
	.contact-container {
		justify-content: center;
	}

	.contact-content {
		@include column(4);
		justify-content: center;
		padding: 0;

		div {
			@include column(4);
			max-width: 580px;
		}
	}
}

footer {
	background-color: $dark-grey;
	text-align: center;

	li {
		margin-top: 15px;

		&:first-child {
			margin-top: 0;
		}
	}

	a {
		@include open-light;
		@include fontSize(15px);
		color: #fff;
		text-decoration: none;
		transition: color 0.25s linear;

		&:hover {
			color: $medium-grey;
		}
	}

	p {
		font-size: 12px;
		margin-top: 60px;
	}
}

@include breakpoint(medium) {
	footer {
		li {
			display: inline-block;
			margin: 0 15px;

			&:first-child {
				margin-left: 0;
			}

			&:last-child {
				margin-right: 0;
			}
		}
	}
}

@include breakpoint(large) {
	footer {
		li {
			margin: 0 20px;
		}
	}
}

.hero {
	height: 100vh;
	max-height: 600px;
	padding: 0;

	.container {
		height: 100%;
	}
}

.hero-content {
	height: 100%;
	position: relative;
	
	header {
		@include clearfix;
		bottom: 15%;
		overflow: hidden;
		position: absolute;
		width: 100%;

		&:before {
			@include pseudo;
			background-color: $border-grey;
			bottom: 20px;
			height: 1px;
			left: 130px;
			width: 100vw;
		}
	}

	h4 {
		float: right;
		margin-top: 10px;
	}
}

@include breakpoint(medium) {
	.hero {
		max-height: none;
	}

	.hero-content {
		header {
			bottom: 18%;

			&:before {
				bottom: 25px;
				left: 270px;
			}
		}

		h4 {
			margin-top: 15px;
		}
	}
}

@include breakpoint(large) {
	.hero-content {
		header {
			bottom: 20%;

			&:before {
				bottom: 30px;
				left: 340px;
			}
		}

		h4 {
			margin-top: 20px;
		}
	}
}

.slide-out {
	font-size: 0;
	height: 100vh;
	// left: -100%;
	overflow: auto;
	position: fixed;
	top: 0;
	width: 100vw;
	z-index: 999;

	&._active {
		// left: 0;
	}
}

.slide-out-container {
	@include grid-row;
	align-items: stretch;
	overflow: auto;
	position: relative;
	z-index: 10;
}

.slide-out-content {
	@include grid;
	background-color: #fff;
	padding: {
		bottom: 30px;
		top: 30px;
	};
	width: calc(100% - 40px);

	> header {
		&:before {
			display: none;
		}
	}

	article {
		margin-top: 45px;

		header {
			&:before {
				bottom: 0;
				left: 30px;
			}
		}

		> div {
			margin-top: 10px;

			p {
				display: inline-block;
			}
		}
	}
}

.technology-list {
	@include clearfix;

	li {
		@include fontSize(12px);
		float: left;
		margin-left: 5px;
		padding-left: 9px;
		position: relative;

		&:first-child {
			margin: 0;
			padding: 0;

			&:before {
				display: none;
			}
		}

		&:before {
			@include pseudo;
			content: '\2022';
			left: 0;
		}
	}
}

.screenshots-list {
	margin-top: 20px;

	li {
		margin-top: 15px;
		width: 100%;

		img {
			width: 100%;
		}
	}
}

.toolbar {
	perspective: 1000px;
	width: 40px;
}

.toolbar-wrapper {
	height: 100%;
	position: relative;
	// transform: rotateY(90deg);
	transform-style: preserve-3d;
	transition: 0.6s;	
	width: 100%;

	._active & {
		// transform: rotateY(0deg);
	}
}

.toolbar-front,
.toolbar-back {
	// backface-visibility: hidden;
	height: 100%;
	// left: -40px;
	position: absolute;
	top: 0;
	width: 100%;

	._active & {
		// left: 0;
	}
}

.toolbar-front {
	background-color: transparent;
	z-index: 2;
	/* for firefox 31 */
	transform: rotateY(180deg);
}

.toolbar-back {
	background-color: $dark-grey;
	
	transform: rotateY(0deg);

	div {
		position: fixed;
	}
}

.close-slide-out {
	display: block;
	margin: 30px auto 0;
	padding: 13px;
	position: relative;
	transition: opacity 0.25s linear;

	&:before,
	&:after {
		@include pseudo;
		background-color: #fff;
		height: 1px;
		left: 0;
		width: 100%;
	}

	&:before {
		transform: rotate(45deg);
	}

	&:after {
		transform: rotate(-45deg);
	}

	&:hover {
		opacity: 0.5;
	}
}

@include breakpoint(medium) {
	.slide-out-wrapper {
		position: relative;
		
		&:before {
			@include pseudo;
			background-color: #000;
			height: 100%;
			opacity: 0.7;
			width: 100%;
			z-index: 0;
		}
	}

	.slide-out-container {
		@include column(5);		
	}

	.slide-out-content {
		padding: {
			bottom: 100px;
			top: 100px;
		};

		article {
			margin-top: 70px;
		}
	}

	.close-slide-out {
		margin-top: 100px;
	}
}

.web-section {
	@include clearfix;
	@include grid-row;
	padding: 0;

	h3 {
		color: #fff;
	}
}

.web-site {
	@include webBlocks(2);
	@include column(3);
	height: 50vh;
	overflow: hidden;
	position: relative;

	&:nth-child(3),
	&:last-child {
		display: none;
	}

	header {
		&:before {
			display: none;
		}
	}
}

.web-site-wrapper,
.web-site-content-block  {
	height: 100%;
	position: relative;
}

.web-site-wrapper {
	&:before,
	&:after {
		@include pseudo;
	}

	&:before {
		height: 100%;
		top: 0;
		width: 100%;
	}
}

.website-screenshot {
	display: none;
	z-index: 1;
}

.web-site-content-block {
	z-index: 20;

	&:before,
	&:after {
		@include pseudo;
		left: 0;
	}

	&:before,
	&:after,
	.web-site-container:before {
		width: 100vw;
	}
}

.web-site-container {
	height: 100%;
	position: relative;

	&:before {
		@include pseudo;
	}
}

.web-site-content {
	height: 100%;
	padding: {
		bottom: 10px;
		left: 1rem;
		right: 10px;
		top: 1rem;
	};

	div {
		height: 100%;
		position: relative;
	}

	a {
		display: none;
	}
}

@include breakpoint(medium) {
	.web-site {
		flex: 1 50%;
		height: 100vh;

		&:nth-child(3),
		&:last-child {
			display: block;
		}

		&:hover {
			header {
				transform: translateX(-100%);
				transition: transform 0.25s linear;
			}

			.website-screenshot {
				img {
					-webkit-filter: grayscale(0);
					filter: grayscale(0);
				}
			}
		}
	}

	.web-site-wrapper {
		&:before,
		&:after {
			transition: top 0.5s cubic-bezier(.99,0,0,1) 0.25s;
			z-index: 10;
		}

		&:after {
			top: -20%;
			width: 100vw;
		}
	}

	.website-screenshot {
		box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 1.0);
		display: block;
		position: absolute;
		top: 0;
		width: 100%;

		img {
			display: block;
			width: 100%;
			-webkit-filter: grayscale(100%);
			filter: grayscale(100%);
			transition: -webkit-filter 0.25s linear 0.8s;
		}
	}

	.web-site-content {
		height: 100%;
		padding: {
			left: 3rem;
			top: 3rem;
		};

		a {
			@include hide-text;
			bottom: 0;
			display: block;
			opacity: 1;
			position: absolute;
			right: 0;
			transition: opacity 0.25s linear; 
			z-index: 1;

			&:before {
				@include icon(link);
				@include fontSize(33px);
				color: #fff;
				display: inline-block;
				height: 25px;
				vertical-align: baseline;
			}

			&:hover {
				opacity: 0.5;
			}
		}
	}

	header {
		transform: translateX(0);
		transition: transform 0.25s linear 0.8s;
	}
}

@include breakpoint(large) {
	.web-site {
		@include webBlocks(4);
		flex: 1 25%;
	}

	.web-site-wrapper {
		&:after {
			top: -40%;
		}
	}

	.web-site-content {
		height: 100%;
		padding-top: 3rem;

		a {
			&:before {
				@include fontSize(40px);
				height: 30px;
			}
		}
	}
}

@media (max-height: 580px) {
	.web-site-content {
		a {
			display: none;
		}
	}
}

@function twbs-font-path($path) {
  @return font-url($path, true);
}

@function twbs-image-path($path) {
  @return image-url($path, true);
}

$bootstrap-sass-asset-helper: true;

// Mincer asset helper functions
//
// This must be imported into a .css.ejs.scss file.
// Then, <% %>-interpolations will be parsed as strings by Sass, and evaluated by EJS after Sass compilation.


@function twbs-font-path($path) {
  // do something like following
  // from "path/to/font.ext#suffix" to "<%- asset_path(path/to/font.ext)) + #suffix %>"
  // from "path/to/font.ext?#suffix" to "<%- asset_path(path/to/font.ext)) + ?#suffix %>"
  // or from "path/to/font.ext" just "<%- asset_path(path/to/font.ext)) %>"
  @return "<%- asset_path('#{$path}'.replace(/[#?].*$/, '')) + '#{$path}'.replace(/(^[^#?]*)([#?]?.*$)/, '$2') %>";
}

@function twbs-image-path($file) {
  @return "<%- asset_path('#{$file}') %>";
}

$bootstrap-sass-asset-helper: true;

@function twbs-font-path($path) {
  @return font-path($path);
}

@function twbs-image-path($path) {
  @return image-path($path);
}

$bootstrap-sass-asset-helper: true;

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// Core variables and mixins
@import "bootstrap/variables";
@import "bootstrap/mixins";

// Reset and dependencies
@import "bootstrap/normalize";
@import "bootstrap/print";
@import "bootstrap/glyphicons";

// Core CSS
@import "bootstrap/scaffolding";
@import "bootstrap/type";
@import "bootstrap/code";
@import "bootstrap/grid";
@import "bootstrap/tables";
@import "bootstrap/forms";
@import "bootstrap/buttons";

// Components
@import "bootstrap/component-animations";
@import "bootstrap/dropdowns";
@import "bootstrap/button-groups";
@import "bootstrap/input-groups";
@import "bootstrap/navs";
@import "bootstrap/navbar";
@import "bootstrap/breadcrumbs";
@import "bootstrap/pagination";
@import "bootstrap/pager";
@import "bootstrap/labels";
@import "bootstrap/badges";
@import "bootstrap/jumbotron";
@import "bootstrap/thumbnails";
@import "bootstrap/alerts";
@import "bootstrap/progress-bars";
@import "bootstrap/media";
@import "bootstrap/list-group";
@import "bootstrap/panels";
@import "bootstrap/responsive-embed";
@import "bootstrap/wells";
@import "bootstrap/close";

// Components w/ JavaScript
@import "bootstrap/modals";
@import "bootstrap/tooltip";
@import "bootstrap/popovers";
@import "bootstrap/carousel";

// Utility classes
@import "bootstrap/utilities";
@import "bootstrap/responsive-utilities";

h1,
h2,
h3,
h4 {
	margin: 0;
}

h1 {
	@include open-extra-bold;
	@include fontSize(30px);
	color: $base-grey;
	line-height: 1;
	text-transform: uppercase;
}

h2 {
	@include open-extra-bold;
	@include fontSize(24px);
	color: $base-grey;
}

h3 {
	@include open-light;
	@include fontSize(18px);
}

h4 {
	@include dosis-light;
	@include fontSize(14px);
	color: $medium-grey;
}

h5 {
	@include open-extra-bold;
	@include fontSize(20px);
	letter-spacing: -0.5px;
	margin: 0;
}

p,
li {
	@include dosis-regular;
	@include fontSize(14px);
	color: $base-grey;
	line-height: 1.6;
}

@include breakpoint(medium) {
	h1 {
		@include fontSize(64px);
	}

	h2 {
		@include fontSize(36px);
	}

	p {
		@include fontSize(16px);
	}
}

@include breakpoint(large) {
	h1 {
		@include fontSize(80px);
	}

	h2 {
		@include fontSize(54px);
	}

	h4 {
		@include fontSize(16px);
	}
}

@font-face {
		font-family: 'portfolio';
		src: url('../../fonts/portfolio.eot.otf') format("opentype");
		src:  url('../../fonts/portfolio.eot?ojvsyk');
		src:  url('../../fonts/portfolio.eot?ojvsyk#iefix') format('embedded-opentype'),
			url('../../fonts/portfolio.ttf?ojvsyk') format('truetype'),
			url('../../fonts/portfolio.woff?ojvsyk') format('woff'),
			url('../../fonts/portfolio.svg?ojvsyk#portfolio') format('svg');
		font-weight: normal;
		font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
	/* use !important to prevent issues with browser extensions that change fonts */
	font-family: 'portfolio' !important;
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;

	/* Better Font Rendering =========== */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.icon-mail:before {
	content: "\e900";
}
.icon-printer:before {
	content: "\e901";
}
.icon-pdf:before {
	content: "\e902";
}
.icon-link:before {
	content: "\e903";
}

@import "node_modules/furtive/scss/grid";

// .grd {
// 		padding-left: 1rem;
// 		padding-right: 1rem;
// }

// .grd-row {
// 		box-sizing: border-box;
// 		display: flex;
// 		flex-direction: row;
// 		flex-wrap: wrap;
// 		max-width: 100%;
// }

// .grd-row-col-1-6 {
// 		max-width: 16.6666666667%;
// 		flex-basis: 16.6666666667%;
// }

// .grd-row-col-2-6 {
// 		max-width: 33.3333333333%;
// 		flex-basis: 33.3333333333%;
// }

// .grd-row-col-3-6 {
// 		max-width: 50%;
// 		flex-basis: 50%;
// }

// .grd-row-col-4-6 {
// 		max-width: 66.6666666667%;
// 		flex-basis: 66.6666666667%;
// }

// .grd-row-col-5-6 {
// 		max-width: 83.3333333333%;
// 		flex-basis: 83.3333333333%;
// }

// .grd-row-col-6 {
// 		max-width: 100%;
// 		flex-basis: 100%;
// }

// .grd-row-col-1-6,.grd-row-col-1-6--sm,.grd-row-col-1-6--md,.grd-row-col-1-6--lg,.grd-row-col-2-6,.grd-row-col-2-6--sm,.grd-row-col-2-6--md,.grd-row-col-2-6--lg,.grd-row-col-3-6,.grd-row-col-3-6--sm,.grd-row-col-3-6--md,.grd-row-col-3-6--lg,.grd-row-col-4-6,.grd-row-col-4-6--sm,.grd-row-col-4-6--md,.grd-row-col-4-6--lg,.grd-row-col-5-6,.grd-row-col-5-6--sm,.grd-row-col-5-6--md,.grd-row-col-5-6--lg,.grd-row-col-6,.grd-row-col-6--sm,.grd-row-col-6--md,.grd-row-col-6--lg {
// 		flex: 1;
// 		flex-direction: column;
// 		box-sizing: border-box;
// }

// .grd-row-col-1-6--sm,.grd-row-col-1-6--md,.grd-row-col-1-6--lg,.grd-row-col-2-6--sm,.grd-row-col-2-6--md,.grd-row-col-2-6--lg,.grd-row-col-3-6--sm,.grd-row-col-3-6--md,.grd-row-col-3-6--lg,.grd-row-col-4-6--sm,.grd-row-col-4-6--md,.grd-row-col-4-6--lg,.grd-row-col-5-6--sm,.grd-row-col-5-6--md,.grd-row-col-5-6--lg,.grd-row-col-6--sm,.grd-row-col-6--md,.grd-row-col-6--lg {
// 		max-width: 100%;
// 		flex-basis: 100%;
// }

// @media screen and (min-width: 32rem) {
// 		.grd-row-col-1-6--sm {
// 				max-width: 16.6666666667%;
// 				flex-basis: 16.6666666667%;
// 		}

// 		.grd-row-col-2-6--sm {
// 				max-width: 33.3333333333%;
// 				flex-basis: 33.3333333333%;
// 		}

// 		.grd-row-col-3-6--sm {
// 				max-width: 50%;
// 				flex-basis: 50%;
// 		}

// 		.grd-row-col-4-6--sm {
// 		max-width: 66.6666666667%;
// 				flex-basis: 66.6666666667%;
// 		}

// 		.grd-row-col-5-6--sm {
// 				max-width: 83.3333333333%;
// 				flex-basis: 83.3333333333%;
// 		}

// 		.grd-row-col-6--sm {
// 				max-width: 100%;
// 				flex-basis: 100%;
// 		}
// }

// @media screen and (min-width: 48rem) {
// 		.grd-row-col-1-6--md {
// 				max-width: 16.6666666667%;
// 				flex-basis: 16.6666666667%;
// 		}

// 		.grd-row-col-2-6--md {
// 				max-width: 33.3333333333%;
// 				flex-basis: 33.3333333333%;
// 		}

// 		.grd-row-col-3-6--md {
// 				max-width: 50%;
// 				flex-basis: 50%;
// 		}

// 		.grd-row-col-4-6--md {
// 				max-width: 66.6666666667%;
// 				flex-basis: 66.6666666667%;
// 		}

// 		.grd-row-col-5-6--md {
// 				max-width: 83.3333333333%;
// 				flex-basis: 83.3333333333%;
// 		}

// 		.grd-row-col-6--md {
// 				max-width: 100%;
// 				flex-basis: 100%;
// 		}
// }

// 		@media screen and (min-width: 64rem) {
// 		.grd-row-col-1-6--lg {
// 				max-width: 16.6666666667%;
// 				flex-basis: 16.6666666667%;
// 		}

// 		.grd-row-col-2-6--lg {
// 				max-width: 33.3333333333%;
// 				flex-basis: 33.3333333333%;
// 		}

// 		.grd-row-col-3-6--lg {
// 				max-width: 50%;
// 				flex-basis: 50%;
// 		}

// 		.grd-row-col-4-6--lg {
// 				max-width: 66.6666666667%;
// 				flex-basis: 66.6666666667%;
// 		}

// 		.grd-row-col-5-6--lg {
// 				max-width: 83.3333333333%;
// 				flex-basis: 83.3333333333%;
// 		}

// 		.grd-row-col-6--lg {
// 				max-width: 100%;
// 				flex-basis: 100%;
// 		}
// }
.container {
		@include grid;
}

// ************************************************************
// Clearfix
// ************************************************************
@mixin clearfix() {
	&:after {
	    content:'';
	    display: table;
	    clear: both;
	}
}

// ************************************************************
// Breakpoints
// ************************************************************
@mixin breakpoint($point) {
	@if $point == extra-large {
		@media (min-width: 1400px) { 
			@content;
		}
	} @else if $point == large {
		@media (min-width: 1024px) {
			@content;
		}
	} @else if $point == medium-max {
		@media (max-width: 1023px) {
			@content;
		}
	} @else if $point == medium {
		@media (min-width: 768px) {
			@content; 
		}
	} @else if $point == small {
		@media (max-width: 767px)  {
			@content; 
		}
	}
}

// ************************************************************
// Grid System
// ************************************************************
@mixin grid() {
	padding-left: 1rem;
	padding-right: 1rem;

	@include breakpoint(medium) {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	@include breakpoint(large) {
		margin: 0 auto;
		max-width: 1600px;
	}
}

@mixin grid-row() {
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

@mixin column($col) {
	$num: ($col / 6) * 100%;

	max-width: #{$num};
	flex-basis: #{$num};
}

// ************************************************************
// Helpers
// ************************************************************
@mixin pseudo() {
	content: '';
	display: block;
	position: absolute;
}

@function calculateRem($size) {
	$remSize: $size / 16px;
	@return #{$remSize}rem;
}

@mixin fontSize($size) {
	font-size: $size;
	font-size: calculateRem($size);
}

@mixin hide-text {
    font: 0/0 a;
    text-shadow: none;
    color: transparent;
}

// ************************************************************
// Fonts
// ************************************************************
@mixin dosis-light {
	font: {
		family: $dosis;
		weight: 300;
	};
}

@mixin dosis-regular {
	font: {
		family: $dosis;
		weight: 400;
	};
}

@mixin open-light {
	font: {
		family: $open;
		weight: 300;
	};
}

@mixin open-regular {
	font: {
		family: $open;
		weight: 400;
	};
}

@mixin open-bold {
	font: {
		family: $open;
		weight: 700;
	};
}

@mixin open-extra-bold {
	font: {
		family: $open;
		weight: 800;
	};
}

// ************************************************************
// Icons
// ************************************************************
@mixin icon($icon) {
	font-family: 'portfolio' !important;
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;

	/* Better Font Rendering =========== */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	&:before {
		@include pseudo;
		@extend .icon-#{$icon}:before;
	}
}

// ************************************************************
// Web Section
// ************************************************************
@mixin webBlocks($max) {
	$base-color: #4d4d4d;
	$borders: #c1b497, #0f8ec7, #a6c307, #007fb5;

	@for $i from 1 through 4 {
		$bottom: 0;
		$extra: 0;
		$height: 20%;
		$item: $i;

		@if ($i > $max) {
			$item: $i - 2;
		}

		@if ($max != 4) {
			$bottom: 10% * ($item - 1);
		} @else {
			$bottom: 10% * ($item - 1);
			$height: $height * 2;
		}

		@if ($item == 1) {
			$bottom: 0;
		}

		&:nth-child(#{$i}) {
			.web-site-wrapper {
				&:before {
					@if ($i == 1) {
						background-color: $base-color;
					} @else {
						background-color: darken($base-color, (2% * $i));
					}
				}

				&:after {
					@if ($i == 1) {
						background: linear-gradient(
							to top left, 
							$base-color 50%, 
							transparent 0
						);
					} @else {
						background: linear-gradient(
							to top left, 
							darken($base-color, (2% * $i)) 50%, 
							transparent 0
						);
					}
					height: $height;
				}
			}

			@include breakpoint(medium) {
				&:hover {
					.web-site-wrapper {
						&:before {
							top: 100% - $bottom;
						}

						&:after {
							top: 100% - ($height + $bottom);
						}
					}
				}
			}

			.web-site-content-block {
				&:before,
				&:after,
				.web-site-container:before {
					height: $height;
				}

				&:before {
					background: linear-gradient(
						to top left, 
						darken($base-color, (2% * ($i + 1))) 50%, 
						transparent 0
					);
					bottom: $bottom;
				}

				&:after {
					background-color: darken($base-color, (2% * ($i + 1)));
				}

				@if ($max != 4) {
					@if ($item != 1) {
						&:after {
							bottom: -$bottom;
						}
					}
				} @else {
					&:after {
						bottom: $bottom - $height;
					}
				}

				.web-site-container {
					&:before {
						background: linear-gradient(
							to top left, 
							transparent calc(50% - 1px), 
							nth($borders, $i) 50%, 
							transparent calc(50%)
						);
						bottom: $bottom;
					}
				}
			}
		}
	}
}

@import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800|Varela+Round|Dosis:300,400';

// Fonts
$font-size-base: 14px;

$dosis: 'Dosis', sans-serif;
$open: 'Open Sans', sans-serif;
$varela: 'Varela Round', sans-serif;

// Colors
$base-grey: #666;
$light-grey: #dfdfdf;
$medium-grey: #a0a0a0;
$dark-grey: #2e2e2e;
$border-grey: #959595;
$white: #dfdfdf;


//
// Alerts
// --------------------------------------------------


// Base styles
// -------------------------

.alert {
  padding: $alert-padding;
  margin-bottom: $line-height-computed;
  border: 1px solid transparent;
  border-radius: $alert-border-radius;

  // Headings for larger alerts
  h4 {
    margin-top: 0;
    // Specified for the h4 to prevent conflicts of changing $headings-color
    color: inherit;
  }

  // Provide class for links that match alerts
  .alert-link {
    font-weight: $alert-link-font-weight;
  }

  // Improve alignment and spacing of inner content
  > p,
  > ul {
    margin-bottom: 0;
  }

  > p + p {
    margin-top: 5px;
  }
}

// Dismissible alerts
//
// Expand the right padding and account for the close button's positioning.

.alert-dismissable, // The misspelled .alert-dismissable was deprecated in 3.2.0.
.alert-dismissible {
  padding-right: ($alert-padding + 20);

  // Adjust close link position
  .close {
    position: relative;
    top: -2px;
    right: -21px;
    color: inherit;
  }
}

// Alternate styles
//
// Generate contextual modifier classes for colorizing the alert.

.alert-success {
  @include alert-variant($alert-success-bg, $alert-success-border, $alert-success-text);
}

.alert-info {
  @include alert-variant($alert-info-bg, $alert-info-border, $alert-info-text);
}

.alert-warning {
  @include alert-variant($alert-warning-bg, $alert-warning-border, $alert-warning-text);
}

.alert-danger {
  @include alert-variant($alert-danger-bg, $alert-danger-border, $alert-danger-text);
}

//
// Badges
// --------------------------------------------------


// Base class
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: $font-size-small;
  font-weight: $badge-font-weight;
  color: $badge-color;
  line-height: $badge-line-height;
  vertical-align: middle;
  white-space: nowrap;
  text-align: center;
  background-color: $badge-bg;
  border-radius: $badge-border-radius;

  // Empty badges collapse automatically (not available in IE8)
  &:empty {
    display: none;
  }

  // Quick fix for badges in buttons
  .btn & {
    position: relative;
    top: -1px;
  }

  .btn-xs &,
  .btn-group-xs > .btn & {
    top: 0;
    padding: 1px 5px;
  }

  // [converter] extracted a& to a.badge

  // Account for badges in navs
  .list-group-item.active > &,
  .nav-pills > .active > a > & {
    color: $badge-active-color;
    background-color: $badge-active-bg;
  }

  .list-group-item > & {
    float: right;
  }

  .list-group-item > & + & {
    margin-right: 5px;
  }

  .nav-pills > li > a > & {
    margin-left: 3px;
  }
}

// Hover state, but only for links
a.badge {
  &:hover,
  &:focus {
    color: $badge-link-hover-color;
    text-decoration: none;
    cursor: pointer;
  }
}

//
// Breadcrumbs
// --------------------------------------------------


.breadcrumb {
  padding: $breadcrumb-padding-vertical $breadcrumb-padding-horizontal;
  margin-bottom: $line-height-computed;
  list-style: none;
  background-color: $breadcrumb-bg;
  border-radius: $border-radius-base;

  > li {
    display: inline-block;

    + li:before {
      content: "#{$breadcrumb-separator}\00a0"; // Unicode space added since inline-block means non-collapsing white-space
      padding: 0 5px;
      color: $breadcrumb-color;
    }
  }

  > .active {
    color: $breadcrumb-active-color;
  }
}

//
// Button groups
// --------------------------------------------------

// Make the div behave like a button
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle; // match .btn alignment given font-size hack above
  > .btn {
    position: relative;
    float: left;
    // Bring the "active" button to the front
    &:hover,
    &:focus,
    &:active,
    &.active {
      z-index: 2;
    }
  }
}

// Prevent double borders when buttons are next to each other
.btn-group {
  .btn + .btn,
  .btn + .btn-group,
  .btn-group + .btn,
  .btn-group + .btn-group {
    margin-left: -1px;
  }
}

// Optional: Group multiple button groups together for a toolbar
.btn-toolbar {
  margin-left: -5px; // Offset the first child's margin
  @include clearfix;

  .btn,
  .btn-group,
  .input-group {
    float: left;
  }
  > .btn,
  > .btn-group,
  > .input-group {
    margin-left: 5px;
  }
}

.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}

// Set corners individual because sometimes a single button can be in a .btn-group and we need :first-child and :last-child to both match
.btn-group > .btn:first-child {
  margin-left: 0;
  &:not(:last-child):not(.dropdown-toggle) {
    @include border-right-radius(0);
  }
}
// Need .dropdown-toggle since :last-child doesn't apply given a .dropdown-menu immediately after it
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  @include border-left-radius(0);
}

// Custom edits for including btn-groups within btn-groups (useful for including dropdown buttons within a btn-group)
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child:not(:last-child) {
  > .btn:last-child,
  > .dropdown-toggle {
    @include border-right-radius(0);
  }
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  @include border-left-radius(0);
}

// On active and open, don't show outline
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}


// Sizing
//
// Remix the default button sizing classes into new ones for easier manipulation.

.btn-group-xs > .btn { @extend .btn-xs; }
.btn-group-sm > .btn { @extend .btn-sm; }
.btn-group-lg > .btn { @extend .btn-lg; }


// Split button dropdowns
// ----------------------

// Give the line between buttons some depth
.btn-group > .btn + .dropdown-toggle {
  padding-left: 8px;
  padding-right: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-left: 12px;
  padding-right: 12px;
}

// The clickable button for toggling the menu
// Remove the gradient and set the same inset shadow as the :active state
.btn-group.open .dropdown-toggle {
  @include box-shadow(inset 0 3px 5px rgba(0,0,0,.125));

  // Show no shadow for `.btn-link` since it has no other button styles.
  &.btn-link {
    @include box-shadow(none);
  }
}


// Reposition the caret
.btn .caret {
  margin-left: 0;
}
// Carets in other button sizes
.btn-lg .caret {
  border-width: $caret-width-large $caret-width-large 0;
  border-bottom-width: 0;
}
// Upside down carets for .dropup
.dropup .btn-lg .caret {
  border-width: 0 $caret-width-large $caret-width-large;
}


// Vertical button groups
// ----------------------

.btn-group-vertical {
  > .btn,
  > .btn-group,
  > .btn-group > .btn {
    display: block;
    float: none;
    width: 100%;
    max-width: 100%;
  }

  // Clear floats so dropdown menus can be properly placed
  > .btn-group {
    @include clearfix;
    > .btn {
      float: none;
    }
  }

  > .btn + .btn,
  > .btn + .btn-group,
  > .btn-group + .btn,
  > .btn-group + .btn-group {
    margin-top: -1px;
    margin-left: 0;
  }
}

.btn-group-vertical > .btn {
  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  &:first-child:not(:last-child) {
    border-top-right-radius: $btn-border-radius-base;
    @include border-bottom-radius(0);
  }
  &:last-child:not(:first-child) {
    border-bottom-left-radius: $btn-border-radius-base;
    @include border-top-radius(0);
  }
}
.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group-vertical > .btn-group:first-child:not(:last-child) {
  > .btn:last-child,
  > .dropdown-toggle {
    @include border-bottom-radius(0);
  }
}
.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  @include border-top-radius(0);
}


// Justified button groups
// ----------------------

.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  > .btn,
  > .btn-group {
    float: none;
    display: table-cell;
    width: 1%;
  }
  > .btn-group .btn {
    width: 100%;
  }

  > .btn-group .dropdown-menu {
    left: auto;
  }
}


// Checkbox and radio options
//
// In order to support the browser's form validation feedback, powered by the
// `required` attribute, we have to "hide" the inputs via `clip`. We cannot use
// `display: none;` or `visibility: hidden;` as that also hides the popover.
// Simply visually hiding the inputs via `opacity` would leave them clickable in
// certain cases which is prevented by using `clip` and `pointer-events`.
// This way, we ensure a DOM element is visible to position the popover from.
//
// See https://github.com/twbs/bootstrap/pull/12794 and
// https://github.com/twbs/bootstrap/pull/14559 for more information.

[data-toggle="buttons"] {
  > .btn,
  > .btn-group > .btn {
    input[type="radio"],
    input[type="checkbox"] {
      position: absolute;
      clip: rect(0,0,0,0);
      pointer-events: none;
    }
  }
}

//
// Buttons
// --------------------------------------------------


// Base styles
// --------------------------------------------------

.btn {
  display: inline-block;
  margin-bottom: 0; // For input.btn
  font-weight: $btn-font-weight;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
  border: 1px solid transparent;
  white-space: nowrap;
  @include button-size($padding-base-vertical, $padding-base-horizontal, $font-size-base, $line-height-base, $btn-border-radius-base);
  @include user-select(none);

  &,
  &:active,
  &.active {
    &:focus,
    &.focus {
      @include tab-focus;
    }
  }

  &:hover,
  &:focus,
  &.focus {
    color: $btn-default-color;
    text-decoration: none;
  }

  &:active,
  &.active {
    outline: 0;
    background-image: none;
    @include box-shadow(inset 0 3px 5px rgba(0,0,0,.125));
  }

  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    cursor: $cursor-disabled;
    @include opacity(.65);
    @include box-shadow(none);
  }

  // [converter] extracted a& to a.btn
}

a.btn {
  &.disabled,
  fieldset[disabled] & {
    pointer-events: none; // Future-proof disabling of clicks on `<a>` elements
  }
}


// Alternate buttons
// --------------------------------------------------

.btn-default {
  @include button-variant($btn-default-color, $btn-default-bg, $btn-default-border);
}
.btn-primary {
  @include button-variant($btn-primary-color, $btn-primary-bg, $btn-primary-border);
}
// Success appears as green
.btn-success {
  @include button-variant($btn-success-color, $btn-success-bg, $btn-success-border);
}
// Info appears as blue-green
.btn-info {
  @include button-variant($btn-info-color, $btn-info-bg, $btn-info-border);
}
// Warning appears as orange
.btn-warning {
  @include button-variant($btn-warning-color, $btn-warning-bg, $btn-warning-border);
}
// Danger and error appear as red
.btn-danger {
  @include button-variant($btn-danger-color, $btn-danger-bg, $btn-danger-border);
}


// Link buttons
// -------------------------

// Make a button look and behave like a link
.btn-link {
  color: $link-color;
  font-weight: normal;
  border-radius: 0;

  &,
  &:active,
  &.active,
  &[disabled],
  fieldset[disabled] & {
    background-color: transparent;
    @include box-shadow(none);
  }
  &,
  &:hover,
  &:focus,
  &:active {
    border-color: transparent;
  }
  &:hover,
  &:focus {
    color: $link-hover-color;
    text-decoration: $link-hover-decoration;
    background-color: transparent;
  }
  &[disabled],
  fieldset[disabled] & {
    &:hover,
    &:focus {
      color: $btn-link-disabled-color;
      text-decoration: none;
    }
  }
}


// Button Sizes
// --------------------------------------------------

.btn-lg {
  // line-height: ensure even-numbered height of button next to large input
  @include button-size($padding-large-vertical, $padding-large-horizontal, $font-size-large, $line-height-large, $btn-border-radius-large);
}
.btn-sm {
  // line-height: ensure proper height of button next to small input
  @include button-size($padding-small-vertical, $padding-small-horizontal, $font-size-small, $line-height-small, $btn-border-radius-small);
}
.btn-xs {
  @include button-size($padding-xs-vertical, $padding-xs-horizontal, $font-size-small, $line-height-small, $btn-border-radius-small);
}


// Block button
// --------------------------------------------------

.btn-block {
  display: block;
  width: 100%;
}

// Vertically space out multiple block buttons
.btn-block + .btn-block {
  margin-top: 5px;
}

// Specificity overrides
input[type="submit"],
input[type="reset"],
input[type="button"] {
  &.btn-block {
    width: 100%;
  }
}

//
// Carousel
// --------------------------------------------------


// Wrapper for the slide container and indicators
.carousel {
  position: relative;
}

.carousel-inner {
  position: relative;
  overflow: hidden;
  width: 100%;

  > .item {
    display: none;
    position: relative;
    @include transition(.6s ease-in-out left);

    // Account for jankitude on images
    > img,
    > a > img {
      @include img-responsive;
      line-height: 1;
    }

    // WebKit CSS3 transforms for supported devices
    @media all and (transform-3d), (-webkit-transform-3d) {
      @include transition-transform(0.6s ease-in-out);
      @include backface-visibility(hidden);
      @include perspective(1000px);

      &.next,
      &.active.right {
        @include translate3d(100%, 0, 0);
        left: 0;
      }
      &.prev,
      &.active.left {
        @include translate3d(-100%, 0, 0);
        left: 0;
      }
      &.next.left,
      &.prev.right,
      &.active {
        @include translate3d(0, 0, 0);
        left: 0;
      }
    }
  }

  > .active,
  > .next,
  > .prev {
    display: block;
  }

  > .active {
    left: 0;
  }

  > .next,
  > .prev {
    position: absolute;
    top: 0;
    width: 100%;
  }

  > .next {
    left: 100%;
  }
  > .prev {
    left: -100%;
  }
  > .next.left,
  > .prev.right {
    left: 0;
  }

  > .active.left {
    left: -100%;
  }
  > .active.right {
    left: 100%;
  }

}

// Left/right controls for nav
// ---------------------------

.carousel-control {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: $carousel-control-width;
  @include opacity($carousel-control-opacity);
  font-size: $carousel-control-font-size;
  color: $carousel-control-color;
  text-align: center;
  text-shadow: $carousel-text-shadow;
  // We can't have this transition here because WebKit cancels the carousel
  // animation if you trip this while in the middle of another animation.

  // Set gradients for backgrounds
  &.left {
    @include gradient-horizontal($start-color: rgba(0,0,0,.5), $end-color: rgba(0,0,0,.0001));
  }
  &.right {
    left: auto;
    right: 0;
    @include gradient-horizontal($start-color: rgba(0,0,0,.0001), $end-color: rgba(0,0,0,.5));
  }

  // Hover/focus state
  &:hover,
  &:focus {
    outline: 0;
    color: $carousel-control-color;
    text-decoration: none;
    @include opacity(.9);
  }

  // Toggles
  .icon-prev,
  .icon-next,
  .glyphicon-chevron-left,
  .glyphicon-chevron-right {
    position: absolute;
    top: 50%;
    margin-top: -10px;
    z-index: 5;
    display: inline-block;
  }
  .icon-prev,
  .glyphicon-chevron-left {
    left: 50%;
    margin-left: -10px;
  }
  .icon-next,
  .glyphicon-chevron-right {
    right: 50%;
    margin-right: -10px;
  }
  .icon-prev,
  .icon-next {
    width:  20px;
    height: 20px;
    line-height: 1;
    font-family: serif;
  }


  .icon-prev {
    &:before {
      content: '\2039';// SINGLE LEFT-POINTING ANGLE QUOTATION MARK (U+2039)
    }
  }
  .icon-next {
    &:before {
      content: '\203a';// SINGLE RIGHT-POINTING ANGLE QUOTATION MARK (U+203A)
    }
  }
}

// Optional indicator pips
//
// Add an unordered list with the following class and add a list item for each
// slide your carousel holds.

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  margin-left: -30%;
  padding-left: 0;
  list-style: none;
  text-align: center;

  li {
    display: inline-block;
    width:  10px;
    height: 10px;
    margin: 1px;
    text-indent: -999px;
    border: 1px solid $carousel-indicator-border-color;
    border-radius: 10px;
    cursor: pointer;

    // IE8-9 hack for event handling
    //
    // Internet Explorer 8-9 does not support clicks on elements without a set
    // `background-color`. We cannot use `filter` since that's not viewed as a
    // background color by the browser. Thus, a hack is needed.
    // See https://developer.mozilla.org/en-US/docs/Web/Events/click#Internet_Explorer
    //
    // For IE8, we set solid black as it doesn't support `rgba()`. For IE9, we
    // set alpha transparency for the best results possible.
    background-color: #000 \9; // IE8
    background-color: rgba(0,0,0,0); // IE9
  }
  .active {
    margin: 0;
    width:  12px;
    height: 12px;
    background-color: $carousel-indicator-active-bg;
  }
}

// Optional captions
// -----------------------------
// Hidden by default for smaller viewports
.carousel-caption {
  position: absolute;
  left: 15%;
  right: 15%;
  bottom: 20px;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: $carousel-caption-color;
  text-align: center;
  text-shadow: $carousel-text-shadow;
  & .btn {
    text-shadow: none; // No shadow for button elements in carousel-caption
  }
}


// Scale up controls for tablets and up
@media screen and (min-width: $screen-sm-min) {

  // Scale up the controls a smidge
  .carousel-control {
    .glyphicon-chevron-left,
    .glyphicon-chevron-right,
    .icon-prev,
    .icon-next {
      width: 30px;
      height: 30px;
      margin-top: -15px;
      font-size: 30px;
    }
    .glyphicon-chevron-left,
    .icon-prev {
      margin-left: -15px;
    }
    .glyphicon-chevron-right,
    .icon-next {
      margin-right: -15px;
    }
  }

  // Show and left align the captions
  .carousel-caption {
    left: 20%;
    right: 20%;
    padding-bottom: 30px;
  }

  // Move up the indicators
  .carousel-indicators {
    bottom: 20px;
  }
}

//
// Close icons
// --------------------------------------------------


.close {
  float: right;
  font-size: ($font-size-base * 1.5);
  font-weight: $close-font-weight;
  line-height: 1;
  color: $close-color;
  text-shadow: $close-text-shadow;
  @include opacity(.2);

  &:hover,
  &:focus {
    color: $close-color;
    text-decoration: none;
    cursor: pointer;
    @include opacity(.5);
  }

  // [converter] extracted button& to button.close
}

// Additional properties for button version
// iOS requires the button element instead of an anchor tag.
// If you want the anchor version, it requires `href="#"`.
// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile
button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}

//
// Code (inline and block)
// --------------------------------------------------


// Inline and block code styles
code,
kbd,
pre,
samp {
  font-family: $font-family-monospace;
}

// Inline code
code {
  padding: 2px 4px;
  font-size: 90%;
  color: $code-color;
  background-color: $code-bg;
  border-radius: $border-radius-base;
}

// User input typically entered via keyboard
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: $kbd-color;
  background-color: $kbd-bg;
  border-radius: $border-radius-small;
  box-shadow: inset 0 -1px 0 rgba(0,0,0,.25);

  kbd {
    padding: 0;
    font-size: 100%;
    font-weight: bold;
    box-shadow: none;
  }
}

// Blocks of code
pre {
  display: block;
  padding: (($line-height-computed - 1) / 2);
  margin: 0 0 ($line-height-computed / 2);
  font-size: ($font-size-base - 1); // 14px to 13px
  line-height: $line-height-base;
  word-break: break-all;
  word-wrap: break-word;
  color: $pre-color;
  background-color: $pre-bg;
  border: 1px solid $pre-border-color;
  border-radius: $border-radius-base;

  // Account for some code outputs that place code tags in pre tags
  code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
    border-radius: 0;
  }
}

// Enable scrollable blocks of code
.pre-scrollable {
  max-height: $pre-scrollable-max-height;
  overflow-y: scroll;
}

//
// Component animations
// --------------------------------------------------

// Heads up!
//
// We don't use the `.opacity()` mixin here since it causes a bug with text
// fields in IE7-8. Source: https://github.com/twbs/bootstrap/pull/3552.

.fade {
  opacity: 0;
  @include transition(opacity .15s linear);
  &.in {
    opacity: 1;
  }
}

.collapse {
  display: none;

  &.in      { display: block; }
  // [converter] extracted tr&.in to tr.collapse.in
  // [converter] extracted tbody&.in to tbody.collapse.in
}

tr.collapse.in    { display: table-row; }

tbody.collapse.in { display: table-row-group; }

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  @include transition-property(height, visibility);
  @include transition-duration(.35s);
  @include transition-timing-function(ease);
}

//
// Dropdown menus
// --------------------------------------------------


// Dropdown arrow/caret
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top:   $caret-width-base dashed;
  border-top:   $caret-width-base solid \9; // IE8
  border-right: $caret-width-base solid transparent;
  border-left:  $caret-width-base solid transparent;
}

// The dropdown wrapper (div)
.dropup,
.dropdown {
  position: relative;
}

// Prevent the focus on the dropdown toggle when closing dropdowns
.dropdown-toggle:focus {
  outline: 0;
}

// The dropdown menu (ul)
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: $zindex-dropdown;
  display: none; // none by default, but block on "open" of the menu
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0; // override default ul
  list-style: none;
  font-size: $font-size-base;
  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)
  background-color: $dropdown-bg;
  border: 1px solid $dropdown-fallback-border; // IE8 fallback
  border: 1px solid $dropdown-border;
  border-radius: $border-radius-base;
  @include box-shadow(0 6px 12px rgba(0,0,0,.175));
  background-clip: padding-box;

  // Aligns the dropdown menu to right
  //
  // Deprecated as of 3.1.0 in favor of `.dropdown-menu-[dir]`
  &.pull-right {
    right: 0;
    left: auto;
  }

  // Dividers (basically an hr) within the dropdown
  .divider {
    @include nav-divider($dropdown-divider-bg);
  }

  // Links within the dropdown menu
  > li > a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: normal;
    line-height: $line-height-base;
    color: $dropdown-link-color;
    white-space: nowrap; // prevent links from randomly breaking onto new lines
  }
}

// Hover/Focus state
.dropdown-menu > li > a {
  &:hover,
  &:focus {
    text-decoration: none;
    color: $dropdown-link-hover-color;
    background-color: $dropdown-link-hover-bg;
  }
}

// Active state
.dropdown-menu > .active > a {
  &,
  &:hover,
  &:focus {
    color: $dropdown-link-active-color;
    text-decoration: none;
    outline: 0;
    background-color: $dropdown-link-active-bg;
  }
}

// Disabled state
//
// Gray out text and ensure the hover/focus state remains gray

.dropdown-menu > .disabled > a {
  &,
  &:hover,
  &:focus {
    color: $dropdown-link-disabled-color;
  }

  // Nuke hover/focus effects
  &:hover,
  &:focus {
    text-decoration: none;
    background-color: transparent;
    background-image: none; // Remove CSS gradient
    @include reset-filter;
    cursor: $cursor-disabled;
  }
}

// Open state for the dropdown
.open {
  // Show the menu
  > .dropdown-menu {
    display: block;
  }

  // Remove the outline when :focus is triggered
  > a {
    outline: 0;
  }
}

// Menu positioning
//
// Add extra class to `.dropdown-menu` to flip the alignment of the dropdown
// menu with the parent.
.dropdown-menu-right {
  left: auto; // Reset the default from `.dropdown-menu`
  right: 0;
}
// With v3, we enabled auto-flipping if you have a dropdown within a right
// aligned nav component. To enable the undoing of that, we provide an override
// to restore the default dropdown menu alignment.
//
// This is only for left-aligning a dropdown menu within a `.navbar-right` or
// `.pull-right` nav component.
.dropdown-menu-left {
  left: 0;
  right: auto;
}

// Dropdown section headers
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: $font-size-small;
  line-height: $line-height-base;
  color: $dropdown-header-color;
  white-space: nowrap; // as with > li > a
}

// Backdrop to catch body clicks on mobile, etc.
.dropdown-backdrop {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: ($zindex-dropdown - 10);
}

// Right aligned dropdowns
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}

// Allow for dropdowns to go bottom up (aka, dropup-menu)
//
// Just add .dropup after the standard .dropdown class and you're set, bro.
// TODO: abstract this so that the navbar fixed styles are not placed here?

.dropup,
.navbar-fixed-bottom .dropdown {
  // Reverse the caret
  .caret {
    border-top: 0;
    border-bottom: $caret-width-base dashed;
    border-bottom: $caret-width-base solid \9; // IE8
    content: "";
  }
  // Different positioning for bottom up menu
  .dropdown-menu {
    top: auto;
    bottom: 100%;
    margin-bottom: 2px;
  }
}


// Component alignment
//
// Reiterate per navbar.less and the modified component alignment there.

@media (min-width: $grid-float-breakpoint) {
  .navbar-right {
    .dropdown-menu {
      right: 0; left: auto;
    }
    // Necessary for overrides of the default right aligned menu.
    // Will remove come v4 in all likelihood.
    .dropdown-menu-left {
      left: 0; right: auto;
    }
  }
}

//
// Forms
// --------------------------------------------------


// Normalize non-controls
//
// Restyle and baseline non-control form elements.

fieldset {
  padding: 0;
  margin: 0;
  border: 0;
  // Chrome and Firefox set a `min-width: min-content;` on fieldsets,
  // so we reset that to ensure it behaves more like a standard block element.
  // See https://github.com/twbs/bootstrap/issues/12359.
  min-width: 0;
}

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: $line-height-computed;
  font-size: ($font-size-base * 1.5);
  line-height: inherit;
  color: $legend-color;
  border: 0;
  border-bottom: 1px solid $legend-border-color;
}

label {
  display: inline-block;
  max-width: 100%; // Force IE8 to wrap long content (see https://github.com/twbs/bootstrap/issues/13141)
  margin-bottom: 5px;
  font-weight: bold;
}


// Normalize form controls
//
// While most of our form styles require extra classes, some basic normalization
// is required to ensure optimum display with or without those classes to better
// address browser inconsistencies.

// Override content-box in Normalize (* isn't specific enough)
input[type="search"] {
  @include box-sizing(border-box);
}

// Position radios and checkboxes better
input[type="radio"],
input[type="checkbox"] {
  margin: 4px 0 0;
  margin-top: 1px \9; // IE8-9
  line-height: normal;
}

input[type="file"] {
  display: block;
}

// Make range inputs behave like textual form controls
input[type="range"] {
  display: block;
  width: 100%;
}

// Make multiple select elements height not fixed
select[multiple],
select[size] {
  height: auto;
}

// Focus for file, radio, and checkbox
input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  @include tab-focus;
}

// Adjust output element
output {
  display: block;
  padding-top: ($padding-base-vertical + 1);
  font-size: $font-size-base;
  line-height: $line-height-base;
  color: $input-color;
}


// Common form controls
//
// Shared size and type resets for form controls. Apply `.form-control` to any
// of the following form controls:
//
// select
// textarea
// input[type="text"]
// input[type="password"]
// input[type="datetime"]
// input[type="datetime-local"]
// input[type="date"]
// input[type="month"]
// input[type="time"]
// input[type="week"]
// input[type="number"]
// input[type="email"]
// input[type="url"]
// input[type="search"]
// input[type="tel"]
// input[type="color"]

.form-control {
  display: block;
  width: 100%;
  height: $input-height-base; // Make inputs at least the height of their button counterpart (base line-height + padding + border)
  padding: $padding-base-vertical $padding-base-horizontal;
  font-size: $font-size-base;
  line-height: $line-height-base;
  color: $input-color;
  background-color: $input-bg;
  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
  border: 1px solid $input-border;
  border-radius: $input-border-radius; // Note: This has no effect on <select>s in some browsers, due to the limited stylability of <select>s in CSS.
  @include box-shadow(inset 0 1px 1px rgba(0,0,0,.075));
  @include transition(border-color ease-in-out .15s, box-shadow ease-in-out .15s);

  // Customize the `:focus` state to imitate native WebKit styles.
  @include form-control-focus;

  // Placeholder
  @include placeholder;

  // Disabled and read-only inputs
  //
  // HTML5 says that controls under a fieldset > legend:first-child won't be
  // disabled if the fieldset is disabled. Due to implementation difficulty, we
  // don't honor that edge case; we style them as disabled anyway.
  &[disabled],
  &[readonly],
  fieldset[disabled] & {
    background-color: $input-bg-disabled;
    opacity: 1; // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655
  }

  &[disabled],
  fieldset[disabled] & {
    cursor: $cursor-disabled;
  }

  // [converter] extracted textarea& to textarea.form-control
}

// Reset height for `textarea`s
textarea.form-control {
  height: auto;
}


// Search inputs in iOS
//
// This overrides the extra rounded corners on search inputs in iOS so that our
// `.form-control` class can properly style them. Note that this cannot simply
// be added to `.form-control` as it's not specific enough. For details, see
// https://github.com/twbs/bootstrap/issues/11586.

input[type="search"] {
  -webkit-appearance: none;
}


// Special styles for iOS temporal inputs
//
// In Mobile Safari, setting `display: block` on temporal inputs causes the
// text within the input to become vertically misaligned. As a workaround, we
// set a pixel line-height that matches the given height of the input, but only
// for Safari. See https://bugs.webkit.org/show_bug.cgi?id=139848
//
// Note that as of 8.3, iOS doesn't support `datetime` or `week`.

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    &.form-control {
      line-height: $input-height-base;
    }

    &.input-sm,
    .input-group-sm & {
      line-height: $input-height-small;
    }

    &.input-lg,
    .input-group-lg & {
      line-height: $input-height-large;
    }
  }
}


// Form groups
//
// Designed to help with the organization and spacing of vertical forms. For
// horizontal forms, use the predefined grid classes.

.form-group {
  margin-bottom: $form-group-margin-bottom;
}


// Checkboxes and radios
//
// Indent the labels to position radios/checkboxes as hanging controls.

.radio,
.checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;

  label {
    min-height: $line-height-computed; // Ensure the input doesn't jump when there is no text
    padding-left: 20px;
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;
  }
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-left: -20px;
  margin-top: 4px \9;
}

.radio + .radio,
.checkbox + .checkbox {
  margin-top: -5px; // Move up sibling radios or checkboxes for tighter spacing
}

// Radios and checkboxes on same line
.radio-inline,
.checkbox-inline {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  vertical-align: middle;
  font-weight: normal;
  cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px; // space out consecutive inline controls
}

// Apply same disabled cursor tweak as for inputs
// Some special care is needed because <label>s don't inherit their parent's `cursor`.
//
// Note: Neither radios nor checkboxes can be readonly.
input[type="radio"],
input[type="checkbox"] {
  &[disabled],
  &.disabled,
  fieldset[disabled] & {
    cursor: $cursor-disabled;
  }
}
// These classes are used directly on <label>s
.radio-inline,
.checkbox-inline {
  &.disabled,
  fieldset[disabled] & {
    cursor: $cursor-disabled;
  }
}
// These classes are used on elements with <label> descendants
.radio,
.checkbox {
  &.disabled,
  fieldset[disabled] & {
    label {
      cursor: $cursor-disabled;
    }
  }
}


// Static form control text
//
// Apply class to a `p` element to make any string of text align with labels in
// a horizontal form layout.

.form-control-static {
  // Size it appropriately next to real form controls
  padding-top: ($padding-base-vertical + 1);
  padding-bottom: ($padding-base-vertical + 1);
  // Remove default margin from `p`
  margin-bottom: 0;
  min-height: ($line-height-computed + $font-size-base);

  &.input-lg,
  &.input-sm {
    padding-left: 0;
    padding-right: 0;
  }
}


// Form control sizing
//
// Build on `.form-control` with modifier classes to decrease or increase the
// height and font-size of form controls.
//
// The `.form-group-* form-control` variations are sadly duplicated to avoid the
// issue documented in https://github.com/twbs/bootstrap/issues/15074.

@include input-size('.input-sm', $input-height-small, $padding-small-vertical, $padding-small-horizontal, $font-size-small, $line-height-small, $input-border-radius-small);
.form-group-sm {
  .form-control {
    height: $input-height-small;
    padding: $padding-small-vertical $padding-small-horizontal;
    font-size: $font-size-small;
    line-height: $line-height-small;
    border-radius: $input-border-radius-small;
  }
  select.form-control {
    height: $input-height-small;
    line-height: $input-height-small;
  }
  textarea.form-control,
  select[multiple].form-control {
    height: auto;
  }
  .form-control-static {
    height: $input-height-small;
    min-height: ($line-height-computed + $font-size-small);
    padding: ($padding-small-vertical + 1) $padding-small-horizontal;
    font-size: $font-size-small;
    line-height: $line-height-small;
  }
}

@include input-size('.input-lg', $input-height-large, $padding-large-vertical, $padding-large-horizontal, $font-size-large, $line-height-large, $input-border-radius-large);
.form-group-lg {
  .form-control {
    height: $input-height-large;
    padding: $padding-large-vertical $padding-large-horizontal;
    font-size: $font-size-large;
    line-height: $line-height-large;
    border-radius: $input-border-radius-large;
  }
  select.form-control {
    height: $input-height-large;
    line-height: $input-height-large;
  }
  textarea.form-control,
  select[multiple].form-control {
    height: auto;
  }
  .form-control-static {
    height: $input-height-large;
    min-height: ($line-height-computed + $font-size-large);
    padding: ($padding-large-vertical + 1) $padding-large-horizontal;
    font-size: $font-size-large;
    line-height: $line-height-large;
  }
}


// Form control feedback states
//
// Apply contextual and semantic states to individual form controls.

.has-feedback {
  // Enable absolute positioning
  position: relative;

  // Ensure icons don't overlap text
  .form-control {
    padding-right: ($input-height-base * 1.25);
  }
}
// Feedback icon (requires .glyphicon classes)
.form-control-feedback {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2; // Ensure icon is above input groups
  display: block;
  width: $input-height-base;
  height: $input-height-base;
  line-height: $input-height-base;
  text-align: center;
  pointer-events: none;
}
.input-lg + .form-control-feedback,
.input-group-lg + .form-control-feedback,
.form-group-lg .form-control + .form-control-feedback {
  width: $input-height-large;
  height: $input-height-large;
  line-height: $input-height-large;
}
.input-sm + .form-control-feedback,
.input-group-sm + .form-control-feedback,
.form-group-sm .form-control + .form-control-feedback {
  width: $input-height-small;
  height: $input-height-small;
  line-height: $input-height-small;
}

// Feedback states
.has-success {
  @include form-control-validation($state-success-text, $state-success-text, $state-success-bg);
}
.has-warning {
  @include form-control-validation($state-warning-text, $state-warning-text, $state-warning-bg);
}
.has-error {
  @include form-control-validation($state-danger-text, $state-danger-text, $state-danger-bg);
}

// Reposition feedback icon if input has visible label above
.has-feedback label {

  & ~ .form-control-feedback {
     top: ($line-height-computed + 5); // Height of the `label` and its margin
  }
  &.sr-only ~ .form-control-feedback {
     top: 0;
  }
}


// Help text
//
// Apply to any element you wish to create light text for placement immediately
// below a form control. Use for general help, formatting, or instructional text.

.help-block {
  display: block; // account for any element using help-block
  margin-top: 5px;
  margin-bottom: 10px;
  color: lighten($text-color, 25%); // lighten the text some for contrast
}


// Inline forms
//
// Make forms appear inline(-block) by adding the `.form-inline` class. Inline
// forms begin stacked on extra small (mobile) devices and then go inline when
// viewports reach <768px.
//
// Requires wrapping inputs and labels with `.form-group` for proper display of
// default HTML form controls and our custom form controls (e.g., input groups).
//
// Heads up! This is mixin-ed into `.navbar-form` in navbars.less.

// [converter] extracted from `.form-inline` for libsass compatibility
@mixin form-inline {

  // Kick in the inline
  @media (min-width: $screen-sm-min) {
    // Inline-block all the things for "inline"
    .form-group {
      display: inline-block;
      margin-bottom: 0;
      vertical-align: middle;
    }

    // In navbar-form, allow folks to *not* use `.form-group`
    .form-control {
      display: inline-block;
      width: auto; // Prevent labels from stacking above inputs in `.form-group`
      vertical-align: middle;
    }

    // Make static controls behave like regular ones
    .form-control-static {
      display: inline-block;
    }

    .input-group {
      display: inline-table;
      vertical-align: middle;

      .input-group-addon,
      .input-group-btn,
      .form-control {
        width: auto;
      }
    }

    // Input groups need that 100% width though
    .input-group > .form-control {
      width: 100%;
    }

    .control-label {
      margin-bottom: 0;
      vertical-align: middle;
    }

    // Remove default margin on radios/checkboxes that were used for stacking, and
    // then undo the floating of radios and checkboxes to match.
    .radio,
    .checkbox {
      display: inline-block;
      margin-top: 0;
      margin-bottom: 0;
      vertical-align: middle;

      label {
        padding-left: 0;
      }
    }
    .radio input[type="radio"],
    .checkbox input[type="checkbox"] {
      position: relative;
      margin-left: 0;
    }

    // Re-override the feedback icon.
    .has-feedback .form-control-feedback {
      top: 0;
    }
  }
}
// [converter] extracted as `@mixin form-inline` for libsass compatibility
.form-inline {
  @include form-inline;
}



// Horizontal forms
//
// Horizontal forms are built on grid classes and allow you to create forms with
// labels on the left and inputs on the right.

.form-horizontal {

  // Consistent vertical alignment of radios and checkboxes
  //
  // Labels also get some reset styles, but that is scoped to a media query below.
  .radio,
  .checkbox,
  .radio-inline,
  .checkbox-inline {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: ($padding-base-vertical + 1); // Default padding plus a border
  }
  // Account for padding we're adding to ensure the alignment and of help text
  // and other content below items
  .radio,
  .checkbox {
    min-height: ($line-height-computed + ($padding-base-vertical + 1));
  }

  // Make form groups behave like rows
  .form-group {
    @include make-row;
  }

  // Reset spacing and right align labels, but scope to media queries so that
  // labels on narrow viewports stack the same as a default form example.
  @media (min-width: $screen-sm-min) {
    .control-label {
      text-align: right;
      margin-bottom: 0;
      padding-top: ($padding-base-vertical + 1); // Default padding plus a border
    }
  }

  // Validation states
  //
  // Reposition the icon because it's now within a grid column and columns have
  // `position: relative;` on them. Also accounts for the grid gutter padding.
  .has-feedback .form-control-feedback {
    right: floor(($grid-gutter-width / 2));
  }

  // Form group sizes
  //
  // Quick utility class for applying `.input-lg` and `.input-sm` styles to the
  // inputs and labels within a `.form-group`.
  .form-group-lg {
    @media (min-width: $screen-sm-min) {
      .control-label {
        padding-top: (($padding-large-vertical * $line-height-large) + 1);
        font-size: $font-size-large;
      }
    }
  }
  .form-group-sm {
    @media (min-width: $screen-sm-min) {
      .control-label {
        padding-top: ($padding-small-vertical + 1);
        font-size: $font-size-small;
      }
    }
  }
}

//
// Glyphicons for Bootstrap
//
// Since icons are fonts, they can be placed anywhere text is placed and are
// thus automatically sized to match the surrounding child. To use, create an
// inline element with the appropriate classes, like so:
//
// <a href="#"><span class="glyphicon glyphicon-star"></span> Star</a>

@at-root {
  // Import the fonts
  @font-face {
    font-family: 'Glyphicons Halflings';
    src: url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.eot'), '#{$icon-font-path}#{$icon-font-name}.eot'));
    src: url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.eot?#iefix'), '#{$icon-font-path}#{$icon-font-name}.eot?#iefix')) format('embedded-opentype'),
         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.woff2'), '#{$icon-font-path}#{$icon-font-name}.woff2')) format('woff2'),
         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.woff'), '#{$icon-font-path}#{$icon-font-name}.woff')) format('woff'),
         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.ttf'), '#{$icon-font-path}#{$icon-font-name}.ttf')) format('truetype'),
         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.svg##{$icon-font-svg-id}'), '#{$icon-font-path}#{$icon-font-name}.svg##{$icon-font-svg-id}')) format('svg');
  }
}

// Catchall baseclass
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Individual icons
.glyphicon-asterisk               { &:before { content: "\2a"; } }
.glyphicon-plus                   { &:before { content: "\2b"; } }
.glyphicon-euro,
.glyphicon-eur                    { &:before { content: "\20ac"; } }
.glyphicon-minus                  { &:before { content: "\2212"; } }
.glyphicon-cloud                  { &:before { content: "\2601"; } }
.glyphicon-envelope               { &:before { content: "\2709"; } }
.glyphicon-pencil                 { &:before { content: "\270f"; } }
.glyphicon-glass                  { &:before { content: "\e001"; } }
.glyphicon-music                  { &:before { content: "\e002"; } }
.glyphicon-search                 { &:before { content: "\e003"; } }
.glyphicon-heart                  { &:before { content: "\e005"; } }
.glyphicon-star                   { &:before { content: "\e006"; } }
.glyphicon-star-empty             { &:before { content: "\e007"; } }
.glyphicon-user                   { &:before { content: "\e008"; } }
.glyphicon-film                   { &:before { content: "\e009"; } }
.glyphicon-th-large               { &:before { content: "\e010"; } }
.glyphicon-th                     { &:before { content: "\e011"; } }
.glyphicon-th-list                { &:before { content: "\e012"; } }
.glyphicon-ok                     { &:before { content: "\e013"; } }
.glyphicon-remove                 { &:before { content: "\e014"; } }
.glyphicon-zoom-in                { &:before { content: "\e015"; } }
.glyphicon-zoom-out               { &:before { content: "\e016"; } }
.glyphicon-off                    { &:before { content: "\e017"; } }
.glyphicon-signal                 { &:before { content: "\e018"; } }
.glyphicon-cog                    { &:before { content: "\e019"; } }
.glyphicon-trash                  { &:before { content: "\e020"; } }
.glyphicon-home                   { &:before { content: "\e021"; } }
.glyphicon-file                   { &:before { content: "\e022"; } }
.glyphicon-time                   { &:before { content: "\e023"; } }
.glyphicon-road                   { &:before { content: "\e024"; } }
.glyphicon-download-alt           { &:before { content: "\e025"; } }
.glyphicon-download               { &:before { content: "\e026"; } }
.glyphicon-upload                 { &:before { content: "\e027"; } }
.glyphicon-inbox                  { &:before { content: "\e028"; } }
.glyphicon-play-circle            { &:before { content: "\e029"; } }
.glyphicon-repeat                 { &:before { content: "\e030"; } }
.glyphicon-refresh                { &:before { content: "\e031"; } }
.glyphicon-list-alt               { &:before { content: "\e032"; } }
.glyphicon-lock                   { &:before { content: "\e033"; } }
.glyphicon-flag                   { &:before { content: "\e034"; } }
.glyphicon-headphones             { &:before { content: "\e035"; } }
.glyphicon-volume-off             { &:before { content: "\e036"; } }
.glyphicon-volume-down            { &:before { content: "\e037"; } }
.glyphicon-volume-up              { &:before { content: "\e038"; } }
.glyphicon-qrcode                 { &:before { content: "\e039"; } }
.glyphicon-barcode                { &:before { content: "\e040"; } }
.glyphicon-tag                    { &:before { content: "\e041"; } }
.glyphicon-tags                   { &:before { content: "\e042"; } }
.glyphicon-book                   { &:before { content: "\e043"; } }
.glyphicon-bookmark               { &:before { content: "\e044"; } }
.glyphicon-print                  { &:before { content: "\e045"; } }
.glyphicon-camera                 { &:before { content: "\e046"; } }
.glyphicon-font                   { &:before { content: "\e047"; } }
.glyphicon-bold                   { &:before { content: "\e048"; } }
.glyphicon-italic                 { &:before { content: "\e049"; } }
.glyphicon-text-height            { &:before { content: "\e050"; } }
.glyphicon-text-width             { &:before { content: "\e051"; } }
.glyphicon-align-left             { &:before { content: "\e052"; } }
.glyphicon-align-center           { &:before { content: "\e053"; } }
.glyphicon-align-right            { &:before { content: "\e054"; } }
.glyphicon-align-justify          { &:before { content: "\e055"; } }
.glyphicon-list                   { &:before { content: "\e056"; } }
.glyphicon-indent-left            { &:before { content: "\e057"; } }
.glyphicon-indent-right           { &:before { content: "\e058"; } }
.glyphicon-facetime-video         { &:before { content: "\e059"; } }
.glyphicon-picture                { &:before { content: "\e060"; } }
.glyphicon-map-marker             { &:before { content: "\e062"; } }
.glyphicon-adjust                 { &:before { content: "\e063"; } }
.glyphicon-tint                   { &:before { content: "\e064"; } }
.glyphicon-edit                   { &:before { content: "\e065"; } }
.glyphicon-share                  { &:before { content: "\e066"; } }
.glyphicon-check                  { &:before { content: "\e067"; } }
.glyphicon-move                   { &:before { content: "\e068"; } }
.glyphicon-step-backward          { &:before { content: "\e069"; } }
.glyphicon-fast-backward          { &:before { content: "\e070"; } }
.glyphicon-backward               { &:before { content: "\e071"; } }
.glyphicon-play                   { &:before { content: "\e072"; } }
.glyphicon-pause                  { &:before { content: "\e073"; } }
.glyphicon-stop                   { &:before { content: "\e074"; } }
.glyphicon-forward                { &:before { content: "\e075"; } }
.glyphicon-fast-forward           { &:before { content: "\e076"; } }
.glyphicon-step-forward           { &:before { content: "\e077"; } }
.glyphicon-eject                  { &:before { content: "\e078"; } }
.glyphicon-chevron-left           { &:before { content: "\e079"; } }
.glyphicon-chevron-right          { &:before { content: "\e080"; } }
.glyphicon-plus-sign              { &:before { content: "\e081"; } }
.glyphicon-minus-sign             { &:before { content: "\e082"; } }
.glyphicon-remove-sign            { &:before { content: "\e083"; } }
.glyphicon-ok-sign                { &:before { content: "\e084"; } }
.glyphicon-question-sign          { &:before { content: "\e085"; } }
.glyphicon-info-sign              { &:before { content: "\e086"; } }
.glyphicon-screenshot             { &:before { content: "\e087"; } }
.glyphicon-remove-circle          { &:before { content: "\e088"; } }
.glyphicon-ok-circle              { &:before { content: "\e089"; } }
.glyphicon-ban-circle             { &:before { content: "\e090"; } }
.glyphicon-arrow-left             { &:before { content: "\e091"; } }
.glyphicon-arrow-right            { &:before { content: "\e092"; } }
.glyphicon-arrow-up               { &:before { content: "\e093"; } }
.glyphicon-arrow-down             { &:before { content: "\e094"; } }
.glyphicon-share-alt              { &:before { content: "\e095"; } }
.glyphicon-resize-full            { &:before { content: "\e096"; } }
.glyphicon-resize-small           { &:before { content: "\e097"; } }
.glyphicon-exclamation-sign       { &:before { content: "\e101"; } }
.glyphicon-gift                   { &:before { content: "\e102"; } }
.glyphicon-leaf                   { &:before { content: "\e103"; } }
.glyphicon-fire                   { &:before { content: "\e104"; } }
.glyphicon-eye-open               { &:before { content: "\e105"; } }
.glyphicon-eye-close              { &:before { content: "\e106"; } }
.glyphicon-warning-sign           { &:before { content: "\e107"; } }
.glyphicon-plane                  { &:before { content: "\e108"; } }
.glyphicon-calendar               { &:before { content: "\e109"; } }
.glyphicon-random                 { &:before { content: "\e110"; } }
.glyphicon-comment                { &:before { content: "\e111"; } }
.glyphicon-magnet                 { &:before { content: "\e112"; } }
.glyphicon-chevron-up             { &:before { content: "\e113"; } }
.glyphicon-chevron-down           { &:before { content: "\e114"; } }
.glyphicon-retweet                { &:before { content: "\e115"; } }
.glyphicon-shopping-cart          { &:before { content: "\e116"; } }
.glyphicon-folder-close           { &:before { content: "\e117"; } }
.glyphicon-folder-open            { &:before { content: "\e118"; } }
.glyphicon-resize-vertical        { &:before { content: "\e119"; } }
.glyphicon-resize-horizontal      { &:before { content: "\e120"; } }
.glyphicon-hdd                    { &:before { content: "\e121"; } }
.glyphicon-bullhorn               { &:before { content: "\e122"; } }
.glyphicon-bell                   { &:before { content: "\e123"; } }
.glyphicon-certificate            { &:before { content: "\e124"; } }
.glyphicon-thumbs-up              { &:before { content: "\e125"; } }
.glyphicon-thumbs-down            { &:before { content: "\e126"; } }
.glyphicon-hand-right             { &:before { content: "\e127"; } }
.glyphicon-hand-left              { &:before { content: "\e128"; } }
.glyphicon-hand-up                { &:before { content: "\e129"; } }
.glyphicon-hand-down              { &:before { content: "\e130"; } }
.glyphicon-circle-arrow-right     { &:before { content: "\e131"; } }
.glyphicon-circle-arrow-left      { &:before { content: "\e132"; } }
.glyphicon-circle-arrow-up        { &:before { content: "\e133"; } }
.glyphicon-circle-arrow-down      { &:before { content: "\e134"; } }
.glyphicon-globe                  { &:before { content: "\e135"; } }
.glyphicon-wrench                 { &:before { content: "\e136"; } }
.glyphicon-tasks                  { &:before { content: "\e137"; } }
.glyphicon-filter                 { &:before { content: "\e138"; } }
.glyphicon-briefcase              { &:before { content: "\e139"; } }
.glyphicon-fullscreen             { &:before { content: "\e140"; } }
.glyphicon-dashboard              { &:before { content: "\e141"; } }
.glyphicon-paperclip              { &:before { content: "\e142"; } }
.glyphicon-heart-empty            { &:before { content: "\e143"; } }
.glyphicon-link                   { &:before { content: "\e144"; } }
.glyphicon-phone                  { &:before { content: "\e145"; } }
.glyphicon-pushpin                { &:before { content: "\e146"; } }
.glyphicon-usd                    { &:before { content: "\e148"; } }
.glyphicon-gbp                    { &:before { content: "\e149"; } }
.glyphicon-sort                   { &:before { content: "\e150"; } }
.glyphicon-sort-by-alphabet       { &:before { content: "\e151"; } }
.glyphicon-sort-by-alphabet-alt   { &:before { content: "\e152"; } }
.glyphicon-sort-by-order          { &:before { content: "\e153"; } }
.glyphicon-sort-by-order-alt      { &:before { content: "\e154"; } }
.glyphicon-sort-by-attributes     { &:before { content: "\e155"; } }
.glyphicon-sort-by-attributes-alt { &:before { content: "\e156"; } }
.glyphicon-unchecked              { &:before { content: "\e157"; } }
.glyphicon-expand                 { &:before { content: "\e158"; } }
.glyphicon-collapse-down          { &:before { content: "\e159"; } }
.glyphicon-collapse-up            { &:before { content: "\e160"; } }
.glyphicon-log-in                 { &:before { content: "\e161"; } }
.glyphicon-flash                  { &:before { content: "\e162"; } }
.glyphicon-log-out                { &:before { content: "\e163"; } }
.glyphicon-new-window             { &:before { content: "\e164"; } }
.glyphicon-record                 { &:before { content: "\e165"; } }
.glyphicon-save                   { &:before { content: "\e166"; } }
.glyphicon-open                   { &:before { content: "\e167"; } }
.glyphicon-saved                  { &:before { content: "\e168"; } }
.glyphicon-import                 { &:before { content: "\e169"; } }
.glyphicon-export                 { &:before { content: "\e170"; } }
.glyphicon-send                   { &:before { content: "\e171"; } }
.glyphicon-floppy-disk            { &:before { content: "\e172"; } }
.glyphicon-floppy-saved           { &:before { content: "\e173"; } }
.glyphicon-floppy-remove          { &:before { content: "\e174"; } }
.glyphicon-floppy-save            { &:before { content: "\e175"; } }
.glyphicon-floppy-open            { &:before { content: "\e176"; } }
.glyphicon-credit-card            { &:before { content: "\e177"; } }
.glyphicon-transfer               { &:before { content: "\e178"; } }
.glyphicon-cutlery                { &:before { content: "\e179"; } }
.glyphicon-header                 { &:before { content: "\e180"; } }
.glyphicon-compressed             { &:before { content: "\e181"; } }
.glyphicon-earphone               { &:before { content: "\e182"; } }
.glyphicon-phone-alt              { &:before { content: "\e183"; } }
.glyphicon-tower                  { &:before { content: "\e184"; } }
.glyphicon-stats                  { &:before { content: "\e185"; } }
.glyphicon-sd-video               { &:before { content: "\e186"; } }
.glyphicon-hd-video               { &:before { content: "\e187"; } }
.glyphicon-subtitles              { &:before { content: "\e188"; } }
.glyphicon-sound-stereo           { &:before { content: "\e189"; } }
.glyphicon-sound-dolby            { &:before { content: "\e190"; } }
.glyphicon-sound-5-1              { &:before { content: "\e191"; } }
.glyphicon-sound-6-1              { &:before { content: "\e192"; } }
.glyphicon-sound-7-1              { &:before { content: "\e193"; } }
.glyphicon-copyright-mark         { &:before { content: "\e194"; } }
.glyphicon-registration-mark      { &:before { content: "\e195"; } }
.glyphicon-cloud-download         { &:before { content: "\e197"; } }
.glyphicon-cloud-upload           { &:before { content: "\e198"; } }
.glyphicon-tree-conifer           { &:before { content: "\e199"; } }
.glyphicon-tree-deciduous         { &:before { content: "\e200"; } }
.glyphicon-cd                     { &:before { content: "\e201"; } }
.glyphicon-save-file              { &:before { content: "\e202"; } }
.glyphicon-open-file              { &:before { content: "\e203"; } }
.glyphicon-level-up               { &:before { content: "\e204"; } }
.glyphicon-copy                   { &:before { content: "\e205"; } }
.glyphicon-paste                  { &:before { content: "\e206"; } }
// The following 2 Glyphicons are omitted for the time being because
// they currently use Unicode codepoints that are outside the
// Basic Multilingual Plane (BMP). Older buggy versions of WebKit can't handle
// non-BMP codepoints in CSS string escapes, and thus can't display these two icons.
// Notably, the bug affects some older versions of the Android Browser.
// More info: https://github.com/twbs/bootstrap/issues/10106
// .glyphicon-door                   { &:before { content: "\1f6aa"; } }
// .glyphicon-key                    { &:before { content: "\1f511"; } }
.glyphicon-alert                  { &:before { content: "\e209"; } }
.glyphicon-equalizer              { &:before { content: "\e210"; } }
.glyphicon-king                   { &:before { content: "\e211"; } }
.glyphicon-queen                  { &:before { content: "\e212"; } }
.glyphicon-pawn                   { &:before { content: "\e213"; } }
.glyphicon-bishop                 { &:before { content: "\e214"; } }
.glyphicon-knight                 { &:before { content: "\e215"; } }
.glyphicon-baby-formula           { &:before { content: "\e216"; } }
.glyphicon-tent                   { &:before { content: "\26fa"; } }
.glyphicon-blackboard             { &:before { content: "\e218"; } }
.glyphicon-bed                    { &:before { content: "\e219"; } }
.glyphicon-apple                  { &:before { content: "\f8ff"; } }
.glyphicon-erase                  { &:before { content: "\e221"; } }
.glyphicon-hourglass              { &:before { content: "\231b"; } }
.glyphicon-lamp                   { &:before { content: "\e223"; } }
.glyphicon-duplicate              { &:before { content: "\e224"; } }
.glyphicon-piggy-bank             { &:before { content: "\e225"; } }
.glyphicon-scissors               { &:before { content: "\e226"; } }
.glyphicon-bitcoin                { &:before { content: "\e227"; } }
.glyphicon-btc                    { &:before { content: "\e227"; } }
.glyphicon-xbt                    { &:before { content: "\e227"; } }
.glyphicon-yen                    { &:before { content: "\00a5"; } }
.glyphicon-jpy                    { &:before { content: "\00a5"; } }
.glyphicon-ruble                  { &:before { content: "\20bd"; } }
.glyphicon-rub                    { &:before { content: "\20bd"; } }
.glyphicon-scale                  { &:before { content: "\e230"; } }
.glyphicon-ice-lolly              { &:before { content: "\e231"; } }
.glyphicon-ice-lolly-tasted       { &:before { content: "\e232"; } }
.glyphicon-education              { &:before { content: "\e233"; } }
.glyphicon-option-horizontal      { &:before { content: "\e234"; } }
.glyphicon-option-vertical        { &:before { content: "\e235"; } }
.glyphicon-menu-hamburger         { &:before { content: "\e236"; } }
.glyphicon-modal-window           { &:before { content: "\e237"; } }
.glyphicon-oil                    { &:before { content: "\e238"; } }
.glyphicon-grain                  { &:before { content: "\e239"; } }
.glyphicon-sunglasses             { &:before { content: "\e240"; } }
.glyphicon-text-size              { &:before { content: "\e241"; } }
.glyphicon-text-color             { &:before { content: "\e242"; } }
.glyphicon-text-background        { &:before { content: "\e243"; } }
.glyphicon-object-align-top       { &:before { content: "\e244"; } }
.glyphicon-object-align-bottom    { &:before { content: "\e245"; } }
.glyphicon-object-align-horizontal{ &:before { content: "\e246"; } }
.glyphicon-object-align-left      { &:before { content: "\e247"; } }
.glyphicon-object-align-vertical  { &:before { content: "\e248"; } }
.glyphicon-object-align-right     { &:before { content: "\e249"; } }
.glyphicon-triangle-right         { &:before { content: "\e250"; } }
.glyphicon-triangle-left          { &:before { content: "\e251"; } }
.glyphicon-triangle-bottom        { &:before { content: "\e252"; } }
.glyphicon-triangle-top           { &:before { content: "\e253"; } }
.glyphicon-console                { &:before { content: "\e254"; } }
.glyphicon-superscript            { &:before { content: "\e255"; } }
.glyphicon-subscript              { &:before { content: "\e256"; } }
.glyphicon-menu-left              { &:before { content: "\e257"; } }
.glyphicon-menu-right             { &:before { content: "\e258"; } }
.glyphicon-menu-down              { &:before { content: "\e259"; } }
.glyphicon-menu-up                { &:before { content: "\e260"; } }

//
// Grid system
// --------------------------------------------------


// Container widths
//
// Set the container width, and override it for fixed navbars in media queries.

.container {
  @include container-fixed;

  @media (min-width: $screen-sm-min) {
    width: $container-sm;
  }
  @media (min-width: $screen-md-min) {
    width: $container-md;
  }
  @media (min-width: $screen-lg-min) {
    width: $container-lg;
  }
}


// Fluid container
//
// Utilizes the mixin meant for fixed width containers, but without any defined
// width for fluid, full width layouts.

.container-fluid {
  @include container-fixed;
}


// Row
//
// Rows contain and clear the floats of your columns.

.row {
  @include make-row;
}


// Columns
//
// Common styles for small and large grid columns

@include make-grid-columns;


// Extra small grid
//
// Columns, offsets, pushes, and pulls for extra small devices like
// smartphones.

@include make-grid(xs);


// Small grid
//
// Columns, offsets, pushes, and pulls for the small device range, from phones
// to tablets.

@media (min-width: $screen-sm-min) {
  @include make-grid(sm);
}


// Medium grid
//
// Columns, offsets, pushes, and pulls for the desktop device range.

@media (min-width: $screen-md-min) {
  @include make-grid(md);
}


// Large grid
//
// Columns, offsets, pushes, and pulls for the large desktop device range.

@media (min-width: $screen-lg-min) {
  @include make-grid(lg);
}

//
// Input groups
// --------------------------------------------------

// Base styles
// -------------------------
.input-group {
  position: relative; // For dropdowns
  display: table;
  border-collapse: separate; // prevent input groups from inheriting border styles from table cells when placed within a table

  // Undo padding and float of grid classes
  &[class*="col-"] {
    float: none;
    padding-left: 0;
    padding-right: 0;
  }

  .form-control {
    // Ensure that the input is always above the *appended* addon button for
    // proper border colors.
    position: relative;
    z-index: 2;

    // IE9 fubars the placeholder attribute in text inputs and the arrows on
    // select elements in input groups. To fix it, we float the input. Details:
    // https://github.com/twbs/bootstrap/issues/11561#issuecomment-28936855
    float: left;

    width: 100%;
    margin-bottom: 0;
  }
}

// Sizing options
//
// Remix the default form control sizing classes into new ones for easier
// manipulation.

.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  @extend .input-lg;
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  @extend .input-sm;
}


// Display as table-cell
// -------------------------
.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: table-cell;

  &:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
}
// Addon and addon wrapper for buttons
.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle; // Match the inputs
}

// Text input groups
// -------------------------
.input-group-addon {
  padding: $padding-base-vertical $padding-base-horizontal;
  font-size: $font-size-base;
  font-weight: normal;
  line-height: 1;
  color: $input-color;
  text-align: center;
  background-color: $input-group-addon-bg;
  border: 1px solid $input-group-addon-border-color;
  border-radius: $border-radius-base;

  // Sizing
  &.input-sm {
    padding: $padding-small-vertical $padding-small-horizontal;
    font-size: $font-size-small;
    border-radius: $border-radius-small;
  }
  &.input-lg {
    padding: $padding-large-vertical $padding-large-horizontal;
    font-size: $font-size-large;
    border-radius: $border-radius-large;
  }

  // Nuke default margins from checkboxes and radios to vertically center within.
  input[type="radio"],
  input[type="checkbox"] {
    margin-top: 0;
  }
}

// Reset rounded corners
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
  @include border-right-radius(0);
}
.input-group-addon:first-child {
  border-right: 0;
}
.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
  @include border-left-radius(0);
}
.input-group-addon:last-child {
  border-left: 0;
}

// Button input groups
// -------------------------
.input-group-btn {
  position: relative;
  // Jankily prevent input button groups from wrapping with `white-space` and
  // `font-size` in combination with `inline-block` on buttons.
  font-size: 0;
  white-space: nowrap;

  // Negative margin for spacing, position for bringing hovered/focused/actived
  // element above the siblings.
  > .btn {
    position: relative;
    + .btn {
      margin-left: -1px;
    }
    // Bring the "active" button to the front
    &:hover,
    &:focus,
    &:active {
      z-index: 2;
    }
  }

  // Negative margin to only have a 1px border between the two
  &:first-child {
    > .btn,
    > .btn-group {
      margin-right: -1px;
    }
  }
  &:last-child {
    > .btn,
    > .btn-group {
      z-index: 2;
      margin-left: -1px;
    }
  }
}

//
// Jumbotron
// --------------------------------------------------


.jumbotron {
  padding-top:    $jumbotron-padding;
  padding-bottom: $jumbotron-padding;
  margin-bottom: $jumbotron-padding;
  color: $jumbotron-color;
  background-color: $jumbotron-bg;

  h1,
  .h1 {
    color: $jumbotron-heading-color;
  }

  p {
    margin-bottom: ($jumbotron-padding / 2);
    font-size: $jumbotron-font-size;
    font-weight: 200;
  }

  > hr {
    border-top-color: darken($jumbotron-bg, 10%);
  }

  .container &,
  .container-fluid & {
    border-radius: $border-radius-large; // Only round corners at higher resolutions if contained in a container
  }

  .container {
    max-width: 100%;
  }

  @media screen and (min-width: $screen-sm-min) {
    padding-top:    ($jumbotron-padding * 1.6);
    padding-bottom: ($jumbotron-padding * 1.6);

    .container &,
    .container-fluid & {
      padding-left:  ($jumbotron-padding * 2);
      padding-right: ($jumbotron-padding * 2);
    }

    h1,
    .h1 {
      font-size: $jumbotron-heading-font-size;
    }
  }
}

//
// Labels
// --------------------------------------------------

.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: $label-color;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;

  // [converter] extracted a& to a.label

  // Empty labels collapse automatically (not available in IE8)
  &:empty {
    display: none;
  }

  // Quick fix for labels in buttons
  .btn & {
    position: relative;
    top: -1px;
  }
}

// Add hover effects, but only for links
a.label {
  &:hover,
  &:focus {
    color: $label-link-hover-color;
    text-decoration: none;
    cursor: pointer;
  }
}

// Colors
// Contextual variations (linked labels get darker on :hover)

.label-default {
  @include label-variant($label-default-bg);
}

.label-primary {
  @include label-variant($label-primary-bg);
}

.label-success {
  @include label-variant($label-success-bg);
}

.label-info {
  @include label-variant($label-info-bg);
}

.label-warning {
  @include label-variant($label-warning-bg);
}

.label-danger {
  @include label-variant($label-danger-bg);
}

//
// List groups
// --------------------------------------------------


// Base class
//
// Easily usable on <ul>, <ol>, or <div>.

.list-group {
  // No need to set list-style: none; since .list-group-item is block level
  margin-bottom: 20px;
  padding-left: 0; // reset padding because ul and ol
}


// Individual list items
//
// Use on `li`s or `div`s within the `.list-group` parent.

.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  // Place the border on the list items and negative margin up for better styling
  margin-bottom: -1px;
  background-color: $list-group-bg;
  border: 1px solid $list-group-border;

  // Round the first and last items
  &:first-child {
    @include border-top-radius($list-group-border-radius);
  }
  &:last-child {
    margin-bottom: 0;
    @include border-bottom-radius($list-group-border-radius);
  }
}


// Interactive list items
//
// Use anchor or button elements instead of `li`s or `div`s to create interactive items.
// Includes an extra `.active` modifier class for showing selected items.

a.list-group-item,
button.list-group-item {
  color: $list-group-link-color;

  .list-group-item-heading {
    color: $list-group-link-heading-color;
  }

  // Hover state
  &:hover,
  &:focus {
    text-decoration: none;
    color: $list-group-link-hover-color;
    background-color: $list-group-hover-bg;
  }
}

button.list-group-item {
  width: 100%;
  text-align: left;
}

.list-group-item {
  // Disabled state
  &.disabled,
  &.disabled:hover,
  &.disabled:focus {
    background-color: $list-group-disabled-bg;
    color: $list-group-disabled-color;
    cursor: $cursor-disabled;

    // Force color to inherit for custom content
    .list-group-item-heading {
      color: inherit;
    }
    .list-group-item-text {
      color: $list-group-disabled-text-color;
    }
  }

  // Active class on item itself, not parent
  &.active,
  &.active:hover,
  &.active:focus {
    z-index: 2; // Place active items above their siblings for proper border styling
    color: $list-group-active-color;
    background-color: $list-group-active-bg;
    border-color: $list-group-active-border;

    // Force color to inherit for custom content
    .list-group-item-heading,
    .list-group-item-heading > small,
    .list-group-item-heading > .small {
      color: inherit;
    }
    .list-group-item-text {
      color: $list-group-active-text-color;
    }
  }
}


// Contextual variants
//
// Add modifier classes to change text and background color on individual items.
// Organizationally, this must come after the `:hover` states.

@include list-group-item-variant(success, $state-success-bg, $state-success-text);
@include list-group-item-variant(info, $state-info-bg, $state-info-text);
@include list-group-item-variant(warning, $state-warning-bg, $state-warning-text);
@include list-group-item-variant(danger, $state-danger-bg, $state-danger-text);


// Custom content options
//
// Extra classes for creating well-formatted content within `.list-group-item`s.

.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}

.media {
  // Proper spacing between instances of .media
  margin-top: 15px;

  &:first-child {
    margin-top: 0;
  }
}

.media,
.media-body {
  zoom: 1;
  overflow: hidden;
}

.media-body {
  width: 10000px;
}

.media-object {
  display: block;

  // Fix collapse in webkit from max-width: 100% and display: table-cell.
  &.img-thumbnail {
    max-width: none;
  }
}

.media-right,
.media > .pull-right {
  padding-left: 10px;
}

.media-left,
.media > .pull-left {
  padding-right: 10px;
}

.media-left,
.media-right,
.media-body {
  display: table-cell;
  vertical-align: top;
}

.media-middle {
  vertical-align: middle;
}

.media-bottom {
  vertical-align: bottom;
}

// Reset margins on headings for tighter default spacing
.media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}

// Media list variation
//
// Undo default ul/ol styles
.media-list {
  padding-left: 0;
  list-style: none;
}

// Mixins
// --------------------------------------------------

// Utilities
@import "mixins/hide-text";
@import "mixins/opacity";
@import "mixins/image";
@import "mixins/labels";
@import "mixins/reset-filter";
@import "mixins/resize";
@import "mixins/responsive-visibility";
@import "mixins/size";
@import "mixins/tab-focus";
@import "mixins/reset-text";
@import "mixins/text-emphasis";
@import "mixins/text-overflow";
@import "mixins/vendor-prefixes";

// Components
@import "mixins/alerts";
@import "mixins/buttons";
@import "mixins/panels";
@import "mixins/pagination";
@import "mixins/list-group";
@import "mixins/nav-divider";
@import "mixins/forms";
@import "mixins/progress-bar";
@import "mixins/table-row";

// Skins
@import "mixins/background-variant";
@import "mixins/border-radius";
@import "mixins/gradients";

// Layout
@import "mixins/clearfix";
@import "mixins/center-block";
@import "mixins/nav-vertical-align";
@import "mixins/grid-framework";
@import "mixins/grid";

//
// Modals
// --------------------------------------------------

// .modal-open      - body class for killing the scroll
// .modal           - container to scroll within
// .modal-dialog    - positioning shell for the actual modal
// .modal-content   - actual modal w/ bg and corners and shit

// Kill the scroll on the body
.modal-open {
  overflow: hidden;
}

// Container that the modal scrolls within
.modal {
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $zindex-modal;
  -webkit-overflow-scrolling: touch;

  // Prevent Chrome on Windows from adding a focus outline. For details, see
  // https://github.com/twbs/bootstrap/pull/10951.
  outline: 0;

  // When fading in the modal, animate it to slide down
  &.fade .modal-dialog {
    @include translate(0, -25%);
    @include transition-transform(0.3s ease-out);
  }
  &.in .modal-dialog { @include translate(0, 0) }
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

// Shell div to position the modal with bottom padding
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}

// Actual modal
.modal-content {
  position: relative;
  background-color: $modal-content-bg;
  border: 1px solid $modal-content-fallback-border-color; //old browsers fallback (ie8 etc)
  border: 1px solid $modal-content-border-color;
  border-radius: $border-radius-large;
  @include box-shadow(0 3px 9px rgba(0,0,0,.5));
  background-clip: padding-box;
  // Remove focus outline from opened modal
  outline: 0;
}

// Modal background
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: $zindex-modal-background;
  background-color: $modal-backdrop-bg;
  // Fade for backdrop
  &.fade { @include opacity(0); }
  &.in { @include opacity($modal-backdrop-opacity); }
}

// Modal header
// Top section of the modal w/ title and dismiss
.modal-header {
  padding: $modal-title-padding;
  border-bottom: 1px solid $modal-header-border-color;
  min-height: ($modal-title-padding + $modal-title-line-height);
}
// Close icon
.modal-header .close {
  margin-top: -2px;
}

// Title text within header
.modal-title {
  margin: 0;
  line-height: $modal-title-line-height;
}

// Modal body
// Where all modal content resides (sibling of .modal-header and .modal-footer)
.modal-body {
  position: relative;
  padding: $modal-inner-padding;
}

// Footer (for actions)
.modal-footer {
  padding: $modal-inner-padding;
  text-align: right; // right align buttons
  border-top: 1px solid $modal-footer-border-color;
  @include clearfix; // clear it in case folks use .pull-* classes on buttons

  // Properly space out buttons
  .btn + .btn {
    margin-left: 5px;
    margin-bottom: 0; // account for input[type="submit"] which gets the bottom margin like all other inputs
  }
  // but override that for button groups
  .btn-group .btn + .btn {
    margin-left: -1px;
  }
  // and override it for block buttons as well
  .btn-block + .btn-block {
    margin-left: 0;
  }
}

// Measure scrollbar width for padding body during modal show/hide
.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

// Scale up the modal
@media (min-width: $screen-sm-min) {
  // Automatically set modal's width for larger viewports
  .modal-dialog {
    width: $modal-md;
    margin: 30px auto;
  }
  .modal-content {
    @include box-shadow(0 5px 15px rgba(0,0,0,.5));
  }

  // Modal sizes
  .modal-sm { width: $modal-sm; }
}

@media (min-width: $screen-md-min) {
  .modal-lg { width: $modal-lg; }
}

//
// Navbars
// --------------------------------------------------


// Wrapper and base class
//
// Provide a static navbar from which we expand to create full-width, fixed, and
// other navbar variations.

.navbar {
  position: relative;
  min-height: $navbar-height; // Ensure a navbar always shows (e.g., without a .navbar-brand in collapsed mode)
  margin-bottom: $navbar-margin-bottom;
  border: 1px solid transparent;

  // Prevent floats from breaking the navbar
  @include clearfix;

  @media (min-width: $grid-float-breakpoint) {
    border-radius: $navbar-border-radius;
  }
}


// Navbar heading
//
// Groups `.navbar-brand` and `.navbar-toggle` into a single component for easy
// styling of responsive aspects.

.navbar-header {
  @include clearfix;

  @media (min-width: $grid-float-breakpoint) {
    float: left;
  }
}


// Navbar collapse (body)
//
// Group your navbar content into this for easy collapsing and expanding across
// various device sizes. By default, this content is collapsed when <768px, but
// will expand past that for a horizontal display.
//
// To start (on mobile devices) the navbar links, forms, and buttons are stacked
// vertically and include a `max-height` to overflow in case you have too much
// content for the user's viewport.

.navbar-collapse {
  overflow-x: visible;
  padding-right: $navbar-padding-horizontal;
  padding-left:  $navbar-padding-horizontal;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
  @include clearfix;
  -webkit-overflow-scrolling: touch;

  &.in {
    overflow-y: auto;
  }

  @media (min-width: $grid-float-breakpoint) {
    width: auto;
    border-top: 0;
    box-shadow: none;

    &.collapse {
      display: block !important;
      height: auto !important;
      padding-bottom: 0; // Override default setting
      overflow: visible !important;
    }

    &.in {
      overflow-y: visible;
    }

    // Undo the collapse side padding for navbars with containers to ensure
    // alignment of right-aligned contents.
    .navbar-fixed-top &,
    .navbar-static-top &,
    .navbar-fixed-bottom & {
      padding-left: 0;
      padding-right: 0;
    }
  }
}

.navbar-fixed-top,
.navbar-fixed-bottom {
  .navbar-collapse {
    max-height: $navbar-collapse-max-height;

    @media (max-device-width: $screen-xs-min) and (orientation: landscape) {
      max-height: 200px;
    }
  }
}


// Both navbar header and collapse
//
// When a container is present, change the behavior of the header and collapse.

.container,
.container-fluid {
  > .navbar-header,
  > .navbar-collapse {
    margin-right: -$navbar-padding-horizontal;
    margin-left:  -$navbar-padding-horizontal;

    @media (min-width: $grid-float-breakpoint) {
      margin-right: 0;
      margin-left:  0;
    }
  }
}


//
// Navbar alignment options
//
// Display the navbar across the entirety of the page or fixed it to the top or
// bottom of the page.

// Static top (unfixed, but 100% wide) navbar
.navbar-static-top {
  z-index: $zindex-navbar;
  border-width: 0 0 1px;

  @media (min-width: $grid-float-breakpoint) {
    border-radius: 0;
  }
}

// Fix the top/bottom navbars when screen real estate supports it
.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: $zindex-navbar-fixed;

  // Undo the rounded corners
  @media (min-width: $grid-float-breakpoint) {
    border-radius: 0;
  }
}
.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
.navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0; // override .navbar defaults
  border-width: 1px 0 0;
}


// Brand/project name

.navbar-brand {
  float: left;
  padding: $navbar-padding-vertical $navbar-padding-horizontal;
  font-size: $font-size-large;
  line-height: $line-height-computed;
  height: $navbar-height;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  > img {
    display: block;
  }

  @media (min-width: $grid-float-breakpoint) {
    .navbar > .container &,
    .navbar > .container-fluid & {
      margin-left: -$navbar-padding-horizontal;
    }
  }
}


// Navbar toggle
//
// Custom button for toggling the `.navbar-collapse`, powered by the collapse
// JavaScript plugin.

.navbar-toggle {
  position: relative;
  float: right;
  margin-right: $navbar-padding-horizontal;
  padding: 9px 10px;
  @include navbar-vertical-align(34px);
  background-color: transparent;
  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
  border: 1px solid transparent;
  border-radius: $border-radius-base;

  // We remove the `outline` here, but later compensate by attaching `:hover`
  // styles to `:focus`.
  &:focus {
    outline: 0;
  }

  // Bars
  .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
  }
  .icon-bar + .icon-bar {
    margin-top: 4px;
  }

  @media (min-width: $grid-float-breakpoint) {
    display: none;
  }
}


// Navbar nav links
//
// Builds on top of the `.nav` components with its own modifier class to make
// the nav the full height of the horizontal nav (above 768px).

.navbar-nav {
  margin: ($navbar-padding-vertical / 2) (-$navbar-padding-horizontal);

  > li > a {
    padding-top:    10px;
    padding-bottom: 10px;
    line-height: $line-height-computed;
  }

  @media (max-width: $grid-float-breakpoint-max) {
    // Dropdowns get custom display when collapsed
    .open .dropdown-menu {
      position: static;
      float: none;
      width: auto;
      margin-top: 0;
      background-color: transparent;
      border: 0;
      box-shadow: none;
      > li > a,
      .dropdown-header {
        padding: 5px 15px 5px 25px;
      }
      > li > a {
        line-height: $line-height-computed;
        &:hover,
        &:focus {
          background-image: none;
        }
      }
    }
  }

  // Uncollapse the nav
  @media (min-width: $grid-float-breakpoint) {
    float: left;
    margin: 0;

    > li {
      float: left;
      > a {
        padding-top:    $navbar-padding-vertical;
        padding-bottom: $navbar-padding-vertical;
      }
    }
  }
}


// Navbar form
//
// Extension of the `.form-inline` with some extra flavor for optimum display in
// our navbars.

.navbar-form {
  margin-left: -$navbar-padding-horizontal;
  margin-right: -$navbar-padding-horizontal;
  padding: 10px $navbar-padding-horizontal;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  $shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 1px 0 rgba(255,255,255,.1);
  @include box-shadow($shadow);

  // Mixin behavior for optimum display
  @include form-inline;

  .form-group {
    @media (max-width: $grid-float-breakpoint-max) {
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  // Vertically center in expanded, horizontal navbar
  @include navbar-vertical-align($input-height-base);

  // Undo 100% width for pull classes
  @media (min-width: $grid-float-breakpoint) {
    width: auto;
    border: 0;
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    @include box-shadow(none);
  }
}


// Dropdown menus

// Menu position and menu carets
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  @include border-top-radius(0);
}
// Menu position and menu caret support for dropups via extra dropup class
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  margin-bottom: 0;
  @include border-top-radius($navbar-border-radius);
  @include border-bottom-radius(0);
}


// Buttons in navbars
//
// Vertically center a button within a navbar (when *not* in a form).

.navbar-btn {
  @include navbar-vertical-align($input-height-base);

  &.btn-sm {
    @include navbar-vertical-align($input-height-small);
  }
  &.btn-xs {
    @include navbar-vertical-align(22);
  }
}


// Text in navbars
//
// Add a class to make any element properly align itself vertically within the navbars.

.navbar-text {
  @include navbar-vertical-align($line-height-computed);

  @media (min-width: $grid-float-breakpoint) {
    float: left;
    margin-left: $navbar-padding-horizontal;
    margin-right: $navbar-padding-horizontal;
  }
}


// Component alignment
//
// Repurpose the pull utilities as their own navbar utilities to avoid specificity
// issues with parents and chaining. Only do this when the navbar is uncollapsed
// though so that navbar contents properly stack and align in mobile.
//
// Declared after the navbar components to ensure more specificity on the margins.

@media (min-width: $grid-float-breakpoint) {
  .navbar-left {
    float: left !important;
  }
  .navbar-right {
    float: right !important;
  margin-right: -$navbar-padding-horizontal;

    ~ .navbar-right {
      margin-right: 0;
    }
  }
}


// Alternate navbars
// --------------------------------------------------

// Default navbar
.navbar-default {
  background-color: $navbar-default-bg;
  border-color: $navbar-default-border;

  .navbar-brand {
    color: $navbar-default-brand-color;
    &:hover,
    &:focus {
      color: $navbar-default-brand-hover-color;
      background-color: $navbar-default-brand-hover-bg;
    }
  }

  .navbar-text {
    color: $navbar-default-color;
  }

  .navbar-nav {
    > li > a {
      color: $navbar-default-link-color;

      &:hover,
      &:focus {
        color: $navbar-default-link-hover-color;
        background-color: $navbar-default-link-hover-bg;
      }
    }
    > .active > a {
      &,
      &:hover,
      &:focus {
        color: $navbar-default-link-active-color;
        background-color: $navbar-default-link-active-bg;
      }
    }
    > .disabled > a {
      &,
      &:hover,
      &:focus {
        color: $navbar-default-link-disabled-color;
        background-color: $navbar-default-link-disabled-bg;
      }
    }
  }

  .navbar-toggle {
    border-color: $navbar-default-toggle-border-color;
    &:hover,
    &:focus {
      background-color: $navbar-default-toggle-hover-bg;
    }
    .icon-bar {
      background-color: $navbar-default-toggle-icon-bar-bg;
    }
  }

  .navbar-collapse,
  .navbar-form {
    border-color: $navbar-default-border;
  }

  // Dropdown menu items
  .navbar-nav {
    // Remove background color from open dropdown
    > .open > a {
      &,
      &:hover,
      &:focus {
        background-color: $navbar-default-link-active-bg;
        color: $navbar-default-link-active-color;
      }
    }

    @media (max-width: $grid-float-breakpoint-max) {
      // Dropdowns get custom display when collapsed
      .open .dropdown-menu {
        > li > a {
          color: $navbar-default-link-color;
          &:hover,
          &:focus {
            color: $navbar-default-link-hover-color;
            background-color: $navbar-default-link-hover-bg;
          }
        }
        > .active > a {
          &,
          &:hover,
          &:focus {
            color: $navbar-default-link-active-color;
            background-color: $navbar-default-link-active-bg;
          }
        }
        > .disabled > a {
          &,
          &:hover,
          &:focus {
            color: $navbar-default-link-disabled-color;
            background-color: $navbar-default-link-disabled-bg;
          }
        }
      }
    }
  }


  // Links in navbars
  //
  // Add a class to ensure links outside the navbar nav are colored correctly.

  .navbar-link {
    color: $navbar-default-link-color;
    &:hover {
      color: $navbar-default-link-hover-color;
    }
  }

  .btn-link {
    color: $navbar-default-link-color;
    &:hover,
    &:focus {
      color: $navbar-default-link-hover-color;
    }
    &[disabled],
    fieldset[disabled] & {
      &:hover,
      &:focus {
        color: $navbar-default-link-disabled-color;
      }
    }
  }
}

// Inverse navbar

.navbar-inverse {
  background-color: $navbar-inverse-bg;
  border-color: $navbar-inverse-border;

  .navbar-brand {
    color: $navbar-inverse-brand-color;
    &:hover,
    &:focus {
      color: $navbar-inverse-brand-hover-color;
      background-color: $navbar-inverse-brand-hover-bg;
    }
  }

  .navbar-text {
    color: $navbar-inverse-color;
  }

  .navbar-nav {
    > li > a {
      color: $navbar-inverse-link-color;

      &:hover,
      &:focus {
        color: $navbar-inverse-link-hover-color;
        background-color: $navbar-inverse-link-hover-bg;
      }
    }
    > .active > a {
      &,
      &:hover,
      &:focus {
        color: $navbar-inverse-link-active-color;
        background-color: $navbar-inverse-link-active-bg;
      }
    }
    > .disabled > a {
      &,
      &:hover,
      &:focus {
        color: $navbar-inverse-link-disabled-color;
        background-color: $navbar-inverse-link-disabled-bg;
      }
    }
  }

  // Darken the responsive nav toggle
  .navbar-toggle {
    border-color: $navbar-inverse-toggle-border-color;
    &:hover,
    &:focus {
      background-color: $navbar-inverse-toggle-hover-bg;
    }
    .icon-bar {
      background-color: $navbar-inverse-toggle-icon-bar-bg;
    }
  }

  .navbar-collapse,
  .navbar-form {
    border-color: darken($navbar-inverse-bg, 7%);
  }

  // Dropdowns
  .navbar-nav {
    > .open > a {
      &,
      &:hover,
      &:focus {
        background-color: $navbar-inverse-link-active-bg;
        color: $navbar-inverse-link-active-color;
      }
    }

    @media (max-width: $grid-float-breakpoint-max) {
      // Dropdowns get custom display
      .open .dropdown-menu {
        > .dropdown-header {
          border-color: $navbar-inverse-border;
        }
        .divider {
          background-color: $navbar-inverse-border;
        }
        > li > a {
          color: $navbar-inverse-link-color;
          &:hover,
          &:focus {
            color: $navbar-inverse-link-hover-color;
            background-color: $navbar-inverse-link-hover-bg;
          }
        }
        > .active > a {
          &,
          &:hover,
          &:focus {
            color: $navbar-inverse-link-active-color;
            background-color: $navbar-inverse-link-active-bg;
          }
        }
        > .disabled > a {
          &,
          &:hover,
          &:focus {
            color: $navbar-inverse-link-disabled-color;
            background-color: $navbar-inverse-link-disabled-bg;
          }
        }
      }
    }
  }

  .navbar-link {
    color: $navbar-inverse-link-color;
    &:hover {
      color: $navbar-inverse-link-hover-color;
    }
  }

  .btn-link {
    color: $navbar-inverse-link-color;
    &:hover,
    &:focus {
      color: $navbar-inverse-link-hover-color;
    }
    &[disabled],
    fieldset[disabled] & {
      &:hover,
      &:focus {
        color: $navbar-inverse-link-disabled-color;
      }
    }
  }
}

//
// Navs
// --------------------------------------------------


// Base class
// --------------------------------------------------

.nav {
  margin-bottom: 0;
  padding-left: 0; // Override default ul/ol
  list-style: none;
  @include clearfix;

  > li {
    position: relative;
    display: block;

    > a {
      position: relative;
      display: block;
      padding: $nav-link-padding;
      &:hover,
      &:focus {
        text-decoration: none;
        background-color: $nav-link-hover-bg;
      }
    }

    // Disabled state sets text to gray and nukes hover/tab effects
    &.disabled > a {
      color: $nav-disabled-link-color;

      &:hover,
      &:focus {
        color: $nav-disabled-link-hover-color;
        text-decoration: none;
        background-color: transparent;
        cursor: $cursor-disabled;
      }
    }
  }

  // Open dropdowns
  .open > a {
    &,
    &:hover,
    &:focus {
      background-color: $nav-link-hover-bg;
      border-color: $link-color;
    }
  }

  // Nav dividers (deprecated with v3.0.1)
  //
  // This should have been removed in v3 with the dropping of `.nav-list`, but
  // we missed it. We don't currently support this anywhere, but in the interest
  // of maintaining backward compatibility in case you use it, it's deprecated.
  .nav-divider {
    @include nav-divider;
  }

  // Prevent IE8 from misplacing imgs
  //
  // See https://github.com/h5bp/html5-boilerplate/issues/984#issuecomment-3985989
  > li > a > img {
    max-width: none;
  }
}


// Tabs
// -------------------------

// Give the tabs something to sit on
.nav-tabs {
  border-bottom: 1px solid $nav-tabs-border-color;
  > li {
    float: left;
    // Make the list-items overlay the bottom border
    margin-bottom: -1px;

    // Actual tabs (as links)
    > a {
      margin-right: 2px;
      line-height: $line-height-base;
      border: 1px solid transparent;
      border-radius: $border-radius-base $border-radius-base 0 0;
      &:hover {
        border-color: $nav-tabs-link-hover-border-color $nav-tabs-link-hover-border-color $nav-tabs-border-color;
      }
    }

    // Active state, and its :hover to override normal :hover
    &.active > a {
      &,
      &:hover,
      &:focus {
        color: $nav-tabs-active-link-hover-color;
        background-color: $nav-tabs-active-link-hover-bg;
        border: 1px solid $nav-tabs-active-link-hover-border-color;
        border-bottom-color: transparent;
        cursor: default;
      }
    }
  }
  // pulling this in mainly for less shorthand
  &.nav-justified {
    @extend .nav-justified;
    @extend .nav-tabs-justified;
  }
}


// Pills
// -------------------------
.nav-pills {
  > li {
    float: left;

    // Links rendered as pills
    > a {
      border-radius: $nav-pills-border-radius;
    }
    + li {
      margin-left: 2px;
    }

    // Active state
    &.active > a {
      &,
      &:hover,
      &:focus {
        color: $nav-pills-active-link-hover-color;
        background-color: $nav-pills-active-link-hover-bg;
      }
    }
  }
}


// Stacked pills
.nav-stacked {
  > li {
    float: none;
    + li {
      margin-top: 2px;
      margin-left: 0; // no need for this gap between nav items
    }
  }
}


// Nav variations
// --------------------------------------------------

// Justified nav links
// -------------------------

.nav-justified {
  width: 100%;

  > li {
    float: none;
    > a {
      text-align: center;
      margin-bottom: 5px;
    }
  }

  > .dropdown .dropdown-menu {
    top: auto;
    left: auto;
  }

  @media (min-width: $screen-sm-min) {
    > li {
      display: table-cell;
      width: 1%;
      > a {
        margin-bottom: 0;
      }
    }
  }
}

// Move borders to anchors instead of bottom of list
//
// Mixin for adding on top the shared `.nav-justified` styles for our tabs
.nav-tabs-justified {
  border-bottom: 0;

  > li > a {
    // Override margin from .nav-tabs
    margin-right: 0;
    border-radius: $border-radius-base;
  }

  > .active > a,
  > .active > a:hover,
  > .active > a:focus {
    border: 1px solid $nav-tabs-justified-link-border-color;
  }

  @media (min-width: $screen-sm-min) {
    > li > a {
      border-bottom: 1px solid $nav-tabs-justified-link-border-color;
      border-radius: $border-radius-base $border-radius-base 0 0;
    }
    > .active > a,
    > .active > a:hover,
    > .active > a:focus {
      border-bottom-color: $nav-tabs-justified-active-link-border-color;
    }
  }
}


// Tabbable tabs
// -------------------------

// Hide tabbable panes to start, show them when `.active`
.tab-content {
  > .tab-pane {
    display: none;
  }
  > .active {
    display: block;
  }
}


// Dropdowns
// -------------------------

// Specific dropdowns
.nav-tabs .dropdown-menu {
  // make dropdown border overlap tab border
  margin-top: -1px;
  // Remove the top rounded corners here since there is a hard edge above the menu
  @include border-top-radius(0);
}

/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */

//
// 1. Set default font family to sans-serif.
// 2. Prevent iOS and IE text size adjust after device orientation change,
//    without disabling user zoom.
//

html {
  font-family: sans-serif; // 1
  -ms-text-size-adjust: 100%; // 2
  -webkit-text-size-adjust: 100%; // 2
}

//
// Remove default margin.
//

body {
  margin: 0;
}

// HTML5 display definitions
// ==========================================================================

//
// Correct `block` display not defined for any HTML5 element in IE 8/9.
// Correct `block` display not defined for `details` or `summary` in IE 10/11
// and Firefox.
// Correct `block` display not defined for `main` in IE 11.
//

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

//
// 1. Correct `inline-block` display not defined in IE 8/9.
// 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.
//

audio,
canvas,
progress,
video {
  display: inline-block; // 1
  vertical-align: baseline; // 2
}

//
// Prevent modern browsers from displaying `audio` without controls.
// Remove excess height in iOS 5 devices.
//

audio:not([controls]) {
  display: none;
  height: 0;
}

//
// Address `[hidden]` styling not present in IE 8/9/10.
// Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.
//

[hidden],
template {
  display: none;
}

// Links
// ==========================================================================

//
// Remove the gray background color from active links in IE 10.
//

a {
  background-color: transparent;
}

//
// Improve readability of focused elements when they are also in an
// active/hover state.
//

a:active,
a:hover {
  outline: 0;
}

// Text-level semantics
// ==========================================================================

//
// Address styling not present in IE 8/9/10/11, Safari, and Chrome.
//

abbr[title] {
  border-bottom: 1px dotted;
}

//
// Address style set to `bolder` in Firefox 4+, Safari, and Chrome.
//

b,
strong {
  font-weight: bold;
}

//
// Address styling not present in Safari and Chrome.
//

dfn {
  font-style: italic;
}

//
// Address variable `h1` font-size and margin within `section` and `article`
// contexts in Firefox 4+, Safari, and Chrome.
//

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

//
// Address styling not present in IE 8/9.
//

mark {
  background: #ff0;
  color: #000;
}

//
// Address inconsistent and variable font size in all browsers.
//

small {
  font-size: 80%;
}

//
// Prevent `sub` and `sup` affecting `line-height` in all browsers.
//

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

// Embedded content
// ==========================================================================

//
// Remove border when inside `a` element in IE 8/9/10.
//

img {
  border: 0;
}

//
// Correct overflow not hidden in IE 9/10/11.
//

svg:not(:root) {
  overflow: hidden;
}

// Grouping content
// ==========================================================================

//
// Address margin not present in IE 8/9 and Safari.
//

figure {
  margin: 1em 40px;
}

//
// Address differences between Firefox and other browsers.
//

hr {
  box-sizing: content-box;
  height: 0;
}

//
// Contain overflow in all browsers.
//

pre {
  overflow: auto;
}

//
// Address odd `em`-unit font size rendering in all browsers.
//

code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

// Forms
// ==========================================================================

//
// Known limitation: by default, Chrome and Safari on OS X allow very limited
// styling of `select`, unless a `border` property is set.
//

//
// 1. Correct color not being inherited.
//    Known issue: affects color of disabled elements.
// 2. Correct font properties not being inherited.
// 3. Address margins set differently in Firefox 4+, Safari, and Chrome.
//

button,
input,
optgroup,
select,
textarea {
  color: inherit; // 1
  font: inherit; // 2
  margin: 0; // 3
}

//
// Address `overflow` set to `hidden` in IE 8/9/10/11.
//

button {
  overflow: visible;
}

//
// Address inconsistent `text-transform` inheritance for `button` and `select`.
// All other form control elements do not inherit `text-transform` values.
// Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.
// Correct `select` style inheritance in Firefox.
//

button,
select {
  text-transform: none;
}

//
// 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
//    and `video` controls.
// 2. Correct inability to style clickable `input` types in iOS.
// 3. Improve usability and consistency of cursor style between image-type
//    `input` and others.
//

button,
html input[type="button"], // 1
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button; // 2
  cursor: pointer; // 3
}

//
// Re-set default cursor for disabled elements.
//

button[disabled],
html input[disabled] {
  cursor: default;
}

//
// Remove inner padding and border in Firefox 4+.
//

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}

//
// Address Firefox 4+ setting `line-height` on `input` using `!important` in
// the UA stylesheet.
//

input {
  line-height: normal;
}

//
// It's recommended that you don't attempt to style these elements.
// Firefox's implementation doesn't respect box-sizing, padding, or width.
//
// 1. Address box sizing set to `content-box` in IE 8/9/10.
// 2. Remove excess padding in IE 8/9/10.
//

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box; // 1
  padding: 0; // 2
}

//
// Fix the cursor style for Chrome's increment/decrement buttons. For certain
// `font-size` values of the `input`, it causes the cursor style of the
// decrement button to change from `default` to `text`.
//

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

//
// 1. Address `appearance` set to `searchfield` in Safari and Chrome.
// 2. Address `box-sizing` set to `border-box` in Safari and Chrome.
//

input[type="search"] {
  -webkit-appearance: textfield; // 1
  box-sizing: content-box; //2
}

//
// Remove inner padding and search cancel button in Safari and Chrome on OS X.
// Safari (but not Chrome) clips the cancel button when the search input has
// padding (and `textfield` appearance).
//

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

//
// Define consistent border, margin, and padding.
//

fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}

//
// 1. Correct `color` not being inherited in IE 8/9/10/11.
// 2. Remove padding so people aren't caught out if they zero out fieldsets.
//

legend {
  border: 0; // 1
  padding: 0; // 2
}

//
// Remove default vertical scrollbar in IE 8/9/10/11.
//

textarea {
  overflow: auto;
}

//
// Don't inherit the `font-weight` (applied by a rule above).
// NOTE: the default cannot safely be changed in Chrome and Safari on OS X.
//

optgroup {
  font-weight: bold;
}

// Tables
// ==========================================================================

//
// Remove most spacing between table cells.
//

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

//
// Pager pagination
// --------------------------------------------------


.pager {
  padding-left: 0;
  margin: $line-height-computed 0;
  list-style: none;
  text-align: center;
  @include clearfix;
  li {
    display: inline;
    > a,
    > span {
      display: inline-block;
      padding: 5px 14px;
      background-color: $pager-bg;
      border: 1px solid $pager-border;
      border-radius: $pager-border-radius;
    }

    > a:hover,
    > a:focus {
      text-decoration: none;
      background-color: $pager-hover-bg;
    }
  }

  .next {
    > a,
    > span {
      float: right;
    }
  }

  .previous {
    > a,
    > span {
      float: left;
    }
  }

  .disabled {
    > a,
    > a:hover,
    > a:focus,
    > span {
      color: $pager-disabled-color;
      background-color: $pager-bg;
      cursor: $cursor-disabled;
    }
  }
}

//
// Pagination (multiple pages)
// --------------------------------------------------
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: $line-height-computed 0;
  border-radius: $border-radius-base;

  > li {
    display: inline; // Remove list-style and block-level defaults
    > a,
    > span {
      position: relative;
      float: left; // Collapse white-space
      padding: $padding-base-vertical $padding-base-horizontal;
      line-height: $line-height-base;
      text-decoration: none;
      color: $pagination-color;
      background-color: $pagination-bg;
      border: 1px solid $pagination-border;
      margin-left: -1px;
    }
    &:first-child {
      > a,
      > span {
        margin-left: 0;
        @include border-left-radius($border-radius-base);
      }
    }
    &:last-child {
      > a,
      > span {
        @include border-right-radius($border-radius-base);
      }
    }
  }

  > li > a,
  > li > span {
    &:hover,
    &:focus {
      z-index: 3;
      color: $pagination-hover-color;
      background-color: $pagination-hover-bg;
      border-color: $pagination-hover-border;
    }
  }

  > .active > a,
  > .active > span {
    &,
    &:hover,
    &:focus {
      z-index: 2;
      color: $pagination-active-color;
      background-color: $pagination-active-bg;
      border-color: $pagination-active-border;
      cursor: default;
    }
  }

  > .disabled {
    > span,
    > span:hover,
    > span:focus,
    > a,
    > a:hover,
    > a:focus {
      color: $pagination-disabled-color;
      background-color: $pagination-disabled-bg;
      border-color: $pagination-disabled-border;
      cursor: $cursor-disabled;
    }
  }
}

// Sizing
// --------------------------------------------------

// Large
.pagination-lg {
  @include pagination-size($padding-large-vertical, $padding-large-horizontal, $font-size-large, $line-height-large, $border-radius-large);
}

// Small
.pagination-sm {
  @include pagination-size($padding-small-vertical, $padding-small-horizontal, $font-size-small, $line-height-small, $border-radius-small);
}

//
// Panels
// --------------------------------------------------


// Base class
.panel {
  margin-bottom: $line-height-computed;
  background-color: $panel-bg;
  border: 1px solid transparent;
  border-radius: $panel-border-radius;
  @include box-shadow(0 1px 1px rgba(0,0,0,.05));
}

// Panel contents
.panel-body {
  padding: $panel-body-padding;
  @include clearfix;
}

// Optional heading
.panel-heading {
  padding: $panel-heading-padding;
  border-bottom: 1px solid transparent;
  @include border-top-radius(($panel-border-radius - 1));

  > .dropdown .dropdown-toggle {
    color: inherit;
  }
}

// Within heading, strip any `h*` tag of its default margins for spacing.
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: ceil(($font-size-base * 1.125));
  color: inherit;

  > a,
  > small,
  > .small,
  > small > a,
  > .small > a {
    color: inherit;
  }
}

// Optional footer (stays gray in every modifier class)
.panel-footer {
  padding: $panel-footer-padding;
  background-color: $panel-footer-bg;
  border-top: 1px solid $panel-inner-border;
  @include border-bottom-radius(($panel-border-radius - 1));
}


// List groups in panels
//
// By default, space out list group content from panel headings to account for
// any kind of custom content between the two.

.panel {
  > .list-group,
  > .panel-collapse > .list-group {
    margin-bottom: 0;

    .list-group-item {
      border-width: 1px 0;
      border-radius: 0;
    }

    // Add border top radius for first one
    &:first-child {
      .list-group-item:first-child {
        border-top: 0;
        @include border-top-radius(($panel-border-radius - 1));
      }
    }

    // Add border bottom radius for last one
    &:last-child {
      .list-group-item:last-child {
        border-bottom: 0;
        @include border-bottom-radius(($panel-border-radius - 1));
      }
    }
  }
  > .panel-heading + .panel-collapse > .list-group {
    .list-group-item:first-child {
      @include border-top-radius(0);
    }
  }
}
// Collapse space between when there's no additional content.
.panel-heading + .list-group {
  .list-group-item:first-child {
    border-top-width: 0;
  }
}
.list-group + .panel-footer {
  border-top-width: 0;
}

// Tables in panels
//
// Place a non-bordered `.table` within a panel (not within a `.panel-body`) and
// watch it go full width.

.panel {
  > .table,
  > .table-responsive > .table,
  > .panel-collapse > .table {
    margin-bottom: 0;

    caption {
      padding-left: $panel-body-padding;
      padding-right: $panel-body-padding;
    }
  }
  // Add border top radius for first one
  > .table:first-child,
  > .table-responsive:first-child > .table:first-child {
    @include border-top-radius(($panel-border-radius - 1));

    > thead:first-child,
    > tbody:first-child {
      > tr:first-child {
        border-top-left-radius: ($panel-border-radius - 1);
        border-top-right-radius: ($panel-border-radius - 1);

        td:first-child,
        th:first-child {
          border-top-left-radius: ($panel-border-radius - 1);
        }
        td:last-child,
        th:last-child {
          border-top-right-radius: ($panel-border-radius - 1);
        }
      }
    }
  }
  // Add border bottom radius for last one
  > .table:last-child,
  > .table-responsive:last-child > .table:last-child {
    @include border-bottom-radius(($panel-border-radius - 1));

    > tbody:last-child,
    > tfoot:last-child {
      > tr:last-child {
        border-bottom-left-radius: ($panel-border-radius - 1);
        border-bottom-right-radius: ($panel-border-radius - 1);

        td:first-child,
        th:first-child {
          border-bottom-left-radius: ($panel-border-radius - 1);
        }
        td:last-child,
        th:last-child {
          border-bottom-right-radius: ($panel-border-radius - 1);
        }
      }
    }
  }
  > .panel-body + .table,
  > .panel-body + .table-responsive,
  > .table + .panel-body,
  > .table-responsive + .panel-body {
    border-top: 1px solid $table-border-color;
  }
  > .table > tbody:first-child > tr:first-child th,
  > .table > tbody:first-child > tr:first-child td {
    border-top: 0;
  }
  > .table-bordered,
  > .table-responsive > .table-bordered {
    border: 0;
    > thead,
    > tbody,
    > tfoot {
      > tr {
        > th:first-child,
        > td:first-child {
          border-left: 0;
        }
        > th:last-child,
        > td:last-child {
          border-right: 0;
        }
      }
    }
    > thead,
    > tbody {
      > tr:first-child {
        > td,
        > th {
          border-bottom: 0;
        }
      }
    }
    > tbody,
    > tfoot {
      > tr:last-child {
        > td,
        > th {
          border-bottom: 0;
        }
      }
    }
  }
  > .table-responsive {
    border: 0;
    margin-bottom: 0;
  }
}


// Collapsable panels (aka, accordion)
//
// Wrap a series of panels in `.panel-group` to turn them into an accordion with
// the help of our collapse JavaScript plugin.

.panel-group {
  margin-bottom: $line-height-computed;

  // Tighten up margin so it's only between panels
  .panel {
    margin-bottom: 0;
    border-radius: $panel-border-radius;

    + .panel {
      margin-top: 5px;
    }
  }

  .panel-heading {
    border-bottom: 0;

    + .panel-collapse > .panel-body,
    + .panel-collapse > .list-group {
      border-top: 1px solid $panel-inner-border;
    }
  }

  .panel-footer {
    border-top: 0;
    + .panel-collapse .panel-body {
      border-bottom: 1px solid $panel-inner-border;
    }
  }
}


// Contextual variations
.panel-default {
  @include panel-variant($panel-default-border, $panel-default-text, $panel-default-heading-bg, $panel-default-border);
}
.panel-primary {
  @include panel-variant($panel-primary-border, $panel-primary-text, $panel-primary-heading-bg, $panel-primary-border);
}
.panel-success {
  @include panel-variant($panel-success-border, $panel-success-text, $panel-success-heading-bg, $panel-success-border);
}
.panel-info {
  @include panel-variant($panel-info-border, $panel-info-text, $panel-info-heading-bg, $panel-info-border);
}
.panel-warning {
  @include panel-variant($panel-warning-border, $panel-warning-text, $panel-warning-heading-bg, $panel-warning-border);
}
.panel-danger {
  @include panel-variant($panel-danger-border, $panel-danger-text, $panel-danger-heading-bg, $panel-danger-border);
}

//
// Popovers
// --------------------------------------------------


.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: $zindex-popover;
  display: none;
  max-width: $popover-max-width;
  padding: 1px;
  // Our parent element can be arbitrary since popovers are by default inserted as a sibling of their target element.
  // So reset our font and text properties to avoid inheriting weird values.
  @include reset-text;
  font-size: $font-size-base;

  background-color: $popover-bg;
  background-clip: padding-box;
  border: 1px solid $popover-fallback-border-color;
  border: 1px solid $popover-border-color;
  border-radius: $border-radius-large;
  @include box-shadow(0 5px 10px rgba(0,0,0,.2));

  // Offset the popover to account for the popover arrow
  &.top     { margin-top: -$popover-arrow-width; }
  &.right   { margin-left: $popover-arrow-width; }
  &.bottom  { margin-top: $popover-arrow-width; }
  &.left    { margin-left: -$popover-arrow-width; }
}

.popover-title {
  margin: 0; // reset heading margin
  padding: 8px 14px;
  font-size: $font-size-base;
  background-color: $popover-title-bg;
  border-bottom: 1px solid darken($popover-title-bg, 5%);
  border-radius: ($border-radius-large - 1) ($border-radius-large - 1) 0 0;
}

.popover-content {
  padding: 9px 14px;
}

// Arrows
//
// .arrow is outer, .arrow:after is inner

.popover > .arrow {
  &,
  &:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
}
.popover > .arrow {
  border-width: $popover-arrow-outer-width;
}
.popover > .arrow:after {
  border-width: $popover-arrow-width;
  content: "";
}

.popover {
  &.top > .arrow {
    left: 50%;
    margin-left: -$popover-arrow-outer-width;
    border-bottom-width: 0;
    border-top-color: $popover-arrow-outer-fallback-color; // IE8 fallback
    border-top-color: $popover-arrow-outer-color;
    bottom: -$popover-arrow-outer-width;
    &:after {
      content: " ";
      bottom: 1px;
      margin-left: -$popover-arrow-width;
      border-bottom-width: 0;
      border-top-color: $popover-arrow-color;
    }
  }
  &.right > .arrow {
    top: 50%;
    left: -$popover-arrow-outer-width;
    margin-top: -$popover-arrow-outer-width;
    border-left-width: 0;
    border-right-color: $popover-arrow-outer-fallback-color; // IE8 fallback
    border-right-color: $popover-arrow-outer-color;
    &:after {
      content: " ";
      left: 1px;
      bottom: -$popover-arrow-width;
      border-left-width: 0;
      border-right-color: $popover-arrow-color;
    }
  }
  &.bottom > .arrow {
    left: 50%;
    margin-left: -$popover-arrow-outer-width;
    border-top-width: 0;
    border-bottom-color: $popover-arrow-outer-fallback-color; // IE8 fallback
    border-bottom-color: $popover-arrow-outer-color;
    top: -$popover-arrow-outer-width;
    &:after {
      content: " ";
      top: 1px;
      margin-left: -$popover-arrow-width;
      border-top-width: 0;
      border-bottom-color: $popover-arrow-color;
    }
  }

  &.left > .arrow {
    top: 50%;
    right: -$popover-arrow-outer-width;
    margin-top: -$popover-arrow-outer-width;
    border-right-width: 0;
    border-left-color: $popover-arrow-outer-fallback-color; // IE8 fallback
    border-left-color: $popover-arrow-outer-color;
    &:after {
      content: " ";
      right: 1px;
      border-right-width: 0;
      border-left-color: $popover-arrow-color;
      bottom: -$popover-arrow-width;
    }
  }
}

/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */

// ==========================================================================
// Print styles.
// Inlined to avoid the additional HTTP request: h5bp.com/r
// ==========================================================================

@media print {
    *,
    *:before,
    *:after {
        background: transparent !important;
        color: #000 !important; // Black prints faster: h5bp.com/s
        box-shadow: none !important;
        text-shadow: none !important;
    }

    a,
    a:visited {
        text-decoration: underline;
    }

    a[href]:after {
        content: " (" attr(href) ")";
    }

    abbr[title]:after {
        content: " (" attr(title) ")";
    }

    // Don't show links that are fragment identifiers,
    // or use the `javascript:` pseudo protocol
    a[href^="#"]:after,
    a[href^="javascript:"]:after {
        content: "";
    }

    pre,
    blockquote {
        border: 1px solid #999;
        page-break-inside: avoid;
    }

    thead {
        display: table-header-group; // h5bp.com/t
    }

    tr,
    img {
        page-break-inside: avoid;
    }

    img {
        max-width: 100% !important;
    }

    p,
    h2,
    h3 {
        orphans: 3;
        widows: 3;
    }

    h2,
    h3 {
        page-break-after: avoid;
    }

    // Bootstrap specific changes start

    // Bootstrap components
    .navbar {
        display: none;
    }
    .btn,
    .dropup > .btn {
        > .caret {
            border-top-color: #000 !important;
        }
    }
    .label {
        border: 1px solid #000;
    }

    .table {
        border-collapse: collapse !important;

        td,
        th {
            background-color: #fff !important;
        }
    }
    .table-bordered {
        th,
        td {
            border: 1px solid #ddd !important;
        }
    }

    // Bootstrap specific changes end
}

//
// Progress bars
// --------------------------------------------------


// Bar animations
// -------------------------

// WebKit
@-webkit-keyframes progress-bar-stripes {
  from  { background-position: 40px 0; }
  to    { background-position: 0 0; }
}

// Spec and IE10+
@keyframes progress-bar-stripes {
  from  { background-position: 40px 0; }
  to    { background-position: 0 0; }
}


// Bar itself
// -------------------------

// Outer container
.progress {
  overflow: hidden;
  height: $line-height-computed;
  margin-bottom: $line-height-computed;
  background-color: $progress-bg;
  border-radius: $progress-border-radius;
  @include box-shadow(inset 0 1px 2px rgba(0,0,0,.1));
}

// Bar of progress
.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: $font-size-small;
  line-height: $line-height-computed;
  color: $progress-bar-color;
  text-align: center;
  background-color: $progress-bar-bg;
  @include box-shadow(inset 0 -1px 0 rgba(0,0,0,.15));
  @include transition(width .6s ease);
}

// Striped bars
//
// `.progress-striped .progress-bar` is deprecated as of v3.2.0 in favor of the
// `.progress-bar-striped` class, which you just add to an existing
// `.progress-bar`.
.progress-striped .progress-bar,
.progress-bar-striped {
  @include gradient-striped;
  background-size: 40px 40px;
}

// Call animation for the active one
//
// `.progress.active .progress-bar` is deprecated as of v3.2.0 in favor of the
// `.progress-bar.active` approach.
.progress.active .progress-bar,
.progress-bar.active {
  @include animation(progress-bar-stripes 2s linear infinite);
}


// Variations
// -------------------------

.progress-bar-success {
  @include progress-bar-variant($progress-bar-success-bg);
}

.progress-bar-info {
  @include progress-bar-variant($progress-bar-info-bg);
}

.progress-bar-warning {
  @include progress-bar-variant($progress-bar-warning-bg);
}

.progress-bar-danger {
  @include progress-bar-variant($progress-bar-danger-bg);
}

// Embeds responsive
//
// Credit: Nicolas Gallagher and SUIT CSS.

.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;

  .embed-responsive-item,
  iframe,
  embed,
  object,
  video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    border: 0;
  }
}

// Modifier class for 16:9 aspect ratio
.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}

// Modifier class for 4:3 aspect ratio
.embed-responsive-4by3 {
  padding-bottom: 75%;
}

//
// Responsive: Utility classes
// --------------------------------------------------


// IE10 in Windows (Phone) 8
//
// Support for responsive views via media queries is kind of borked in IE10, for
// Surface/desktop in split view and for Windows Phone 8. This particular fix
// must be accompanied by a snippet of JavaScript to sniff the user agent and
// apply some conditional CSS to *only* the Surface/desktop Windows 8. Look at
// our Getting Started page for more information on this bug.
//
// For more information, see the following:
//
// Issue: https://github.com/twbs/bootstrap/issues/10497
// Docs: http://getbootstrap.com/getting-started/#support-ie10-width
// Source: http://timkadlec.com/2013/01/windows-phone-8-and-device-width/
// Source: http://timkadlec.com/2012/10/ie10-snap-mode-and-responsive-design/

@at-root {
  @-ms-viewport {
    width: device-width;
  }
}


// Visibility utilities
// Note: Deprecated .visible-xs, .visible-sm, .visible-md, and .visible-lg as of v3.2.0

@include responsive-invisibility('.visible-xs');
@include responsive-invisibility('.visible-sm');
@include responsive-invisibility('.visible-md');
@include responsive-invisibility('.visible-lg');

.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-sm-block,
.visible-sm-inline,
.visible-sm-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-lg-block,
.visible-lg-inline,
.visible-lg-inline-block {
  display: none !important;
}

@media (max-width: $screen-xs-max) {
  @include responsive-visibility('.visible-xs');
}
.visible-xs-block {
  @media (max-width: $screen-xs-max) {
    display: block !important;
  }
}
.visible-xs-inline {
  @media (max-width: $screen-xs-max) {
    display: inline !important;
  }
}
.visible-xs-inline-block {
  @media (max-width: $screen-xs-max) {
    display: inline-block !important;
  }
}

@media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {
  @include responsive-visibility('.visible-sm');
}
.visible-sm-block {
  @media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {
    display: block !important;
  }
}
.visible-sm-inline {
  @media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {
    display: inline !important;
  }
}
.visible-sm-inline-block {
  @media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {
    display: inline-block !important;
  }
}

@media (min-width: $screen-md-min) and (max-width: $screen-md-max) {
  @include responsive-visibility('.visible-md');
}
.visible-md-block {
  @media (min-width: $screen-md-min) and (max-width: $screen-md-max) {
    display: block !important;
  }
}
.visible-md-inline {
  @media (min-width: $screen-md-min) and (max-width: $screen-md-max) {
    display: inline !important;
  }
}
.visible-md-inline-block {
  @media (min-width: $screen-md-min) and (max-width: $screen-md-max) {
    display: inline-block !important;
  }
}

@media (min-width: $screen-lg-min) {
  @include responsive-visibility('.visible-lg');
}
.visible-lg-block {
  @media (min-width: $screen-lg-min) {
    display: block !important;
  }
}
.visible-lg-inline {
  @media (min-width: $screen-lg-min) {
    display: inline !important;
  }
}
.visible-lg-inline-block {
  @media (min-width: $screen-lg-min) {
    display: inline-block !important;
  }
}

@media (max-width: $screen-xs-max) {
  @include responsive-invisibility('.hidden-xs');
}

@media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {
  @include responsive-invisibility('.hidden-sm');
}

@media (min-width: $screen-md-min) and (max-width: $screen-md-max) {
  @include responsive-invisibility('.hidden-md');
}

@media (min-width: $screen-lg-min) {
  @include responsive-invisibility('.hidden-lg');
}


// Print utilities
//
// Media queries are placed on the inside to be mixin-friendly.

// Note: Deprecated .visible-print as of v3.2.0

@include responsive-invisibility('.visible-print');

@media print {
  @include responsive-visibility('.visible-print');
}
.visible-print-block {
  display: none !important;

  @media print {
    display: block !important;
  }
}
.visible-print-inline {
  display: none !important;

  @media print {
    display: inline !important;
  }
}
.visible-print-inline-block {
  display: none !important;

  @media print {
    display: inline-block !important;
  }
}

@media print {
  @include responsive-invisibility('.hidden-print');
}

//
// Scaffolding
// --------------------------------------------------


// Reset the box-sizing
//
// Heads up! This reset may cause conflicts with some third-party widgets.
// For recommendations on resolving such conflicts, see
// http://getbootstrap.com/getting-started/#third-box-sizing
* {
  @include box-sizing(border-box);
}
*:before,
*:after {
  @include box-sizing(border-box);
}


// Body reset

html {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

body {
  font-family: $font-family-base;
  font-size: $font-size-base;
  line-height: $line-height-base;
  color: $text-color;
  background-color: $body-bg;
}

// Reset fonts for relevant elements
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}


// Links

a {
  color: $link-color;
  text-decoration: none;

  &:hover,
  &:focus {
    color: $link-hover-color;
    text-decoration: $link-hover-decoration;
  }

  &:focus {
    @include tab-focus;
  }
}


// Figures
//
// We reset this here because previously Normalize had no `figure` margins. This
// ensures we don't break anyone's use of the element.

figure {
  margin: 0;
}


// Images

img {
  vertical-align: middle;
}

// Responsive images (ensure images don't scale beyond their parents)
.img-responsive {
  @include img-responsive;
}

// Rounded corners
.img-rounded {
  border-radius: $border-radius-large;
}

// Image thumbnails
//
// Heads up! This is mixin-ed into thumbnails.less for `.thumbnail`.
.img-thumbnail {
  padding: $thumbnail-padding;
  line-height: $line-height-base;
  background-color: $thumbnail-bg;
  border: 1px solid $thumbnail-border;
  border-radius: $thumbnail-border-radius;
  @include transition(all .2s ease-in-out);

  // Keep them at most 100% wide
  @include img-responsive(inline-block);
}

// Perfect circle
.img-circle {
  border-radius: 50%; // set radius in percents
}


// Horizontal rules

hr {
  margin-top:    $line-height-computed;
  margin-bottom: $line-height-computed;
  border: 0;
  border-top: 1px solid $hr-border;
}


// Only display content to screen readers
//
// See: http://a11yproject.com/posts/how-to-hide-content/

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

// Use in conjunction with .sr-only to only display content when it's focused.
// Useful for "Skip to main content" links; see http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1
// Credit: HTML5 Boilerplate

.sr-only-focusable {
  &:active,
  &:focus {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto;
  }
}


// iOS "clickable elements" fix for role="button"
//
// Fixes "clickability" issue (and more generally, the firing of events such as focus as well)
// for traditionally non-focusable elements with role="button"
// see https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile

[role="button"] {
  cursor: pointer;
}

//
// Tables
// --------------------------------------------------


table {
  background-color: $table-bg;
}
caption {
  padding-top: $table-cell-padding;
  padding-bottom: $table-cell-padding;
  color: $text-muted;
  text-align: left;
}
th {
  text-align: left;
}


// Baseline styles

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: $line-height-computed;
  // Cells
  > thead,
  > tbody,
  > tfoot {
    > tr {
      > th,
      > td {
        padding: $table-cell-padding;
        line-height: $line-height-base;
        vertical-align: top;
        border-top: 1px solid $table-border-color;
      }
    }
  }
  // Bottom align for column headings
  > thead > tr > th {
    vertical-align: bottom;
    border-bottom: 2px solid $table-border-color;
  }
  // Remove top border from thead by default
  > caption + thead,
  > colgroup + thead,
  > thead:first-child {
    > tr:first-child {
      > th,
      > td {
        border-top: 0;
      }
    }
  }
  // Account for multiple tbody instances
  > tbody + tbody {
    border-top: 2px solid $table-border-color;
  }

  // Nesting
  .table {
    background-color: $body-bg;
  }
}


// Condensed table w/ half padding

.table-condensed {
  > thead,
  > tbody,
  > tfoot {
    > tr {
      > th,
      > td {
        padding: $table-condensed-cell-padding;
      }
    }
  }
}


// Bordered version
//
// Add borders all around the table and between all the columns.

.table-bordered {
  border: 1px solid $table-border-color;
  > thead,
  > tbody,
  > tfoot {
    > tr {
      > th,
      > td {
        border: 1px solid $table-border-color;
      }
    }
  }
  > thead > tr {
    > th,
    > td {
      border-bottom-width: 2px;
    }
  }
}


// Zebra-striping
//
// Default zebra-stripe styles (alternating gray and transparent backgrounds)

.table-striped {
  > tbody > tr:nth-of-type(odd) {
    background-color: $table-bg-accent;
  }
}


// Hover effect
//
// Placed here since it has to come after the potential zebra striping

.table-hover {
  > tbody > tr:hover {
    background-color: $table-bg-hover;
  }
}


// Table cell sizing
//
// Reset default table behavior

table col[class*="col-"] {
  position: static; // Prevent border hiding in Firefox and IE9-11 (see https://github.com/twbs/bootstrap/issues/11623)
  float: none;
  display: table-column;
}
table {
  td,
  th {
    &[class*="col-"] {
      position: static; // Prevent border hiding in Firefox and IE9-11 (see https://github.com/twbs/bootstrap/issues/11623)
      float: none;
      display: table-cell;
    }
  }
}


// Table backgrounds
//
// Exact selectors below required to override `.table-striped` and prevent
// inheritance to nested tables.

// Generate the contextual variants
@include table-row-variant('active', $table-bg-active);
@include table-row-variant('success', $state-success-bg);
@include table-row-variant('info', $state-info-bg);
@include table-row-variant('warning', $state-warning-bg);
@include table-row-variant('danger', $state-danger-bg);


// Responsive tables
//
// Wrap your tables in `.table-responsive` and we'll make them mobile friendly
// by enabling horizontal scrolling. Only applies <768px. Everything above that
// will display normally.

.table-responsive {
  overflow-x: auto;
  min-height: 0.01%; // Workaround for IE9 bug (see https://github.com/twbs/bootstrap/issues/14837)

  @media screen and (max-width: $screen-xs-max) {
    width: 100%;
    margin-bottom: ($line-height-computed * 0.75);
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid $table-border-color;

    // Tighten up spacing
    > .table {
      margin-bottom: 0;

      // Ensure the content doesn't wrap
      > thead,
      > tbody,
      > tfoot {
        > tr {
          > th,
          > td {
            white-space: nowrap;
          }
        }
      }
    }

    // Special overrides for the bordered tables
    > .table-bordered {
      border: 0;

      // Nuke the appropriate borders so that the parent can handle them
      > thead,
      > tbody,
      > tfoot {
        > tr {
          > th:first-child,
          > td:first-child {
            border-left: 0;
          }
          > th:last-child,
          > td:last-child {
            border-right: 0;
          }
        }
      }

      // Only nuke the last row's bottom-border in `tbody` and `tfoot` since
      // chances are there will be only one `tr` in a `thead` and that would
      // remove the border altogether.
      > tbody,
      > tfoot {
        > tr:last-child {
          > th,
          > td {
            border-bottom: 0;
          }
        }
      }

    }
  }
}

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

//
// Load core variables and mixins
// --------------------------------------------------

@import "variables";
@import "mixins";


//
// Buttons
// --------------------------------------------------

// Common styles
.btn-default,
.btn-primary,
.btn-success,
.btn-info,
.btn-warning,
.btn-danger {
  text-shadow: 0 -1px 0 rgba(0,0,0,.2);
  $shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 1px 1px rgba(0,0,0,.075);
  @include box-shadow($shadow);

  // Reset the shadow
  &:active,
  &.active {
    @include box-shadow(inset 0 3px 5px rgba(0,0,0,.125));
  }

  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    @include box-shadow(none);
  }

  .badge {
    text-shadow: none;
  }
}

// Mixin for generating new styles
@mixin btn-styles($btn-color: #555) {
  @include gradient-vertical($start-color: $btn-color, $end-color: darken($btn-color, 12%));
  @include reset-filter; // Disable gradients for IE9 because filter bleeds through rounded corners; see https://github.com/twbs/bootstrap/issues/10620
  background-repeat: repeat-x;
  border-color: darken($btn-color, 14%);

  &:hover,
  &:focus  {
    background-color: darken($btn-color, 12%);
    background-position: 0 -15px;
  }

  &:active,
  &.active {
    background-color: darken($btn-color, 12%);
    border-color: darken($btn-color, 14%);
  }

  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    &,
    &:hover,
    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: darken($btn-color, 12%);
      background-image: none;
    }
  }
}

// Common styles
.btn {
  // Remove the gradient for the pressed/active state
  &:active,
  &.active {
    background-image: none;
  }
}

// Apply the mixin to the buttons
.btn-default { @include btn-styles($btn-default-bg); text-shadow: 0 1px 0 #fff; border-color: #ccc; }
.btn-primary { @include btn-styles($btn-primary-bg); }
.btn-success { @include btn-styles($btn-success-bg); }
.btn-info    { @include btn-styles($btn-info-bg); }
.btn-warning { @include btn-styles($btn-warning-bg); }
.btn-danger  { @include btn-styles($btn-danger-bg); }


//
// Images
// --------------------------------------------------

.thumbnail,
.img-thumbnail {
  @include box-shadow(0 1px 2px rgba(0,0,0,.075));
}


//
// Dropdowns
// --------------------------------------------------

.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  @include gradient-vertical($start-color: $dropdown-link-hover-bg, $end-color: darken($dropdown-link-hover-bg, 5%));
  background-color: darken($dropdown-link-hover-bg, 5%);
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  @include gradient-vertical($start-color: $dropdown-link-active-bg, $end-color: darken($dropdown-link-active-bg, 5%));
  background-color: darken($dropdown-link-active-bg, 5%);
}


//
// Navbar
// --------------------------------------------------

// Default navbar
.navbar-default {
  @include gradient-vertical($start-color: lighten($navbar-default-bg, 10%), $end-color: $navbar-default-bg);
  @include reset-filter; // Remove gradient in IE<10 to fix bug where dropdowns don't get triggered
  border-radius: $navbar-border-radius;
  $shadow: inset 0 1px 0 rgba(255,255,255,.15), 0 1px 5px rgba(0,0,0,.075);
  @include box-shadow($shadow);

  .navbar-nav > .open > a,
  .navbar-nav > .active > a {
    @include gradient-vertical($start-color: darken($navbar-default-link-active-bg, 5%), $end-color: darken($navbar-default-link-active-bg, 2%));
    @include box-shadow(inset 0 3px 9px rgba(0,0,0,.075));
  }
}
.navbar-brand,
.navbar-nav > li > a {
  text-shadow: 0 1px 0 rgba(255,255,255,.25);
}

// Inverted navbar
.navbar-inverse {
  @include gradient-vertical($start-color: lighten($navbar-inverse-bg, 10%), $end-color: $navbar-inverse-bg);
  @include reset-filter; // Remove gradient in IE<10 to fix bug where dropdowns don't get triggered; see https://github.com/twbs/bootstrap/issues/10257
  border-radius: $navbar-border-radius;
  .navbar-nav > .open > a,
  .navbar-nav > .active > a {
    @include gradient-vertical($start-color: $navbar-inverse-link-active-bg, $end-color: lighten($navbar-inverse-link-active-bg, 2.5%));
    @include box-shadow(inset 0 3px 9px rgba(0,0,0,.25));
  }

  .navbar-brand,
  .navbar-nav > li > a {
    text-shadow: 0 -1px 0 rgba(0,0,0,.25);
  }
}

// Undo rounded corners in static and fixed navbars
.navbar-static-top,
.navbar-fixed-top,
.navbar-fixed-bottom {
  border-radius: 0;
}

// Fix active state of dropdown items in collapsed mode
@media (max-width: $grid-float-breakpoint-max) {
  .navbar .navbar-nav .open .dropdown-menu > .active > a {
    &,
    &:hover,
    &:focus {
      color: #fff;
      @include gradient-vertical($start-color: $dropdown-link-active-bg, $end-color: darken($dropdown-link-active-bg, 5%));
    }
  }
}


//
// Alerts
// --------------------------------------------------

// Common styles
.alert {
  text-shadow: 0 1px 0 rgba(255,255,255,.2);
  $shadow: inset 0 1px 0 rgba(255,255,255,.25), 0 1px 2px rgba(0,0,0,.05);
  @include box-shadow($shadow);
}

// Mixin for generating new styles
@mixin alert-styles($color) {
  @include gradient-vertical($start-color: $color, $end-color: darken($color, 7.5%));
  border-color: darken($color, 15%);
}

// Apply the mixin to the alerts
.alert-success    { @include alert-styles($alert-success-bg); }
.alert-info       { @include alert-styles($alert-info-bg); }
.alert-warning    { @include alert-styles($alert-warning-bg); }
.alert-danger     { @include alert-styles($alert-danger-bg); }


//
// Progress bars
// --------------------------------------------------

// Give the progress background some depth
.progress {
  @include gradient-vertical($start-color: darken($progress-bg, 4%), $end-color: $progress-bg)
}

// Mixin for generating new styles
@mixin progress-bar-styles($color) {
  @include gradient-vertical($start-color: $color, $end-color: darken($color, 10%));
}

// Apply the mixin to the progress bars
.progress-bar            { @include progress-bar-styles($progress-bar-bg); }
.progress-bar-success    { @include progress-bar-styles($progress-bar-success-bg); }
.progress-bar-info       { @include progress-bar-styles($progress-bar-info-bg); }
.progress-bar-warning    { @include progress-bar-styles($progress-bar-warning-bg); }
.progress-bar-danger     { @include progress-bar-styles($progress-bar-danger-bg); }

// Reset the striped class because our mixins don't do multiple gradients and
// the above custom styles override the new `.progress-bar-striped` in v3.2.0.
.progress-bar-striped {
  @include gradient-striped;
}


//
// List groups
// --------------------------------------------------

.list-group {
  border-radius: $border-radius-base;
  @include box-shadow(0 1px 2px rgba(0,0,0,.075));
}
.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  text-shadow: 0 -1px 0 darken($list-group-active-bg, 10%);
  @include gradient-vertical($start-color: $list-group-active-bg, $end-color: darken($list-group-active-bg, 7.5%));
  border-color: darken($list-group-active-border, 7.5%);

  .badge {
    text-shadow: none;
  }
}


//
// Panels
// --------------------------------------------------

// Common styles
.panel {
  @include box-shadow(0 1px 2px rgba(0,0,0,.05));
}

// Mixin for generating new styles
@mixin panel-heading-styles($color) {
  @include gradient-vertical($start-color: $color, $end-color: darken($color, 5%));
}

// Apply the mixin to the panel headings only
.panel-default > .panel-heading   { @include panel-heading-styles($panel-default-heading-bg); }
.panel-primary > .panel-heading   { @include panel-heading-styles($panel-primary-heading-bg); }
.panel-success > .panel-heading   { @include panel-heading-styles($panel-success-heading-bg); }
.panel-info > .panel-heading      { @include panel-heading-styles($panel-info-heading-bg); }
.panel-warning > .panel-heading   { @include panel-heading-styles($panel-warning-heading-bg); }
.panel-danger > .panel-heading    { @include panel-heading-styles($panel-danger-heading-bg); }


//
// Wells
// --------------------------------------------------

.well {
  @include gradient-vertical($start-color: darken($well-bg, 5%), $end-color: $well-bg);
  border-color: darken($well-bg, 10%);
  $shadow: inset 0 1px 3px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);
  @include box-shadow($shadow);
}

//
// Thumbnails
// --------------------------------------------------


// Mixin and adjust the regular image class
.thumbnail {
  display: block;
  padding: $thumbnail-padding;
  margin-bottom: $line-height-computed;
  line-height: $line-height-base;
  background-color: $thumbnail-bg;
  border: 1px solid $thumbnail-border;
  border-radius: $thumbnail-border-radius;
  @include transition(border .2s ease-in-out);

  > img,
  a > img {
    @include img-responsive;
    margin-left: auto;
    margin-right: auto;
  }

  // [converter] extracted a&:hover, a&:focus, a&.active to a.thumbnail:hover, a.thumbnail:focus, a.thumbnail.active

  // Image captions
  .caption {
    padding: $thumbnail-caption-padding;
    color: $thumbnail-caption-color;
  }
}

// Add a hover state for linked versions only
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: $link-color;
}

//
// Tooltips
// --------------------------------------------------


// Base class
.tooltip {
  position: absolute;
  z-index: $zindex-tooltip;
  display: block;
  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.
  // So reset our font and text properties to avoid inheriting weird values.
  @include reset-text;
  font-size: $font-size-small;

  @include opacity(0);

  &.in     { @include opacity($tooltip-opacity); }
  &.top    { margin-top:  -3px; padding: $tooltip-arrow-width 0; }
  &.right  { margin-left:  3px; padding: 0 $tooltip-arrow-width; }
  &.bottom { margin-top:   3px; padding: $tooltip-arrow-width 0; }
  &.left   { margin-left: -3px; padding: 0 $tooltip-arrow-width; }
}

// Wrapper for the tooltip content
.tooltip-inner {
  max-width: $tooltip-max-width;
  padding: 3px 8px;
  color: $tooltip-color;
  text-align: center;
  background-color: $tooltip-bg;
  border-radius: $border-radius-base;
}

// Arrows
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
// Note: Deprecated .top-left, .top-right, .bottom-left, and .bottom-right as of v3.3.1
.tooltip {
  &.top .tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -$tooltip-arrow-width;
    border-width: $tooltip-arrow-width $tooltip-arrow-width 0;
    border-top-color: $tooltip-arrow-color;
  }
  &.top-left .tooltip-arrow {
    bottom: 0;
    right: $tooltip-arrow-width;
    margin-bottom: -$tooltip-arrow-width;
    border-width: $tooltip-arrow-width $tooltip-arrow-width 0;
    border-top-color: $tooltip-arrow-color;
  }
  &.top-right .tooltip-arrow {
    bottom: 0;
    left: $tooltip-arrow-width;
    margin-bottom: -$tooltip-arrow-width;
    border-width: $tooltip-arrow-width $tooltip-arrow-width 0;
    border-top-color: $tooltip-arrow-color;
  }
  &.right .tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: -$tooltip-arrow-width;
    border-width: $tooltip-arrow-width $tooltip-arrow-width $tooltip-arrow-width 0;
    border-right-color: $tooltip-arrow-color;
  }
  &.left .tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: -$tooltip-arrow-width;
    border-width: $tooltip-arrow-width 0 $tooltip-arrow-width $tooltip-arrow-width;
    border-left-color: $tooltip-arrow-color;
  }
  &.bottom .tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: -$tooltip-arrow-width;
    border-width: 0 $tooltip-arrow-width $tooltip-arrow-width;
    border-bottom-color: $tooltip-arrow-color;
  }
  &.bottom-left .tooltip-arrow {
    top: 0;
    right: $tooltip-arrow-width;
    margin-top: -$tooltip-arrow-width;
    border-width: 0 $tooltip-arrow-width $tooltip-arrow-width;
    border-bottom-color: $tooltip-arrow-color;
  }
  &.bottom-right .tooltip-arrow {
    top: 0;
    left: $tooltip-arrow-width;
    margin-top: -$tooltip-arrow-width;
    border-width: 0 $tooltip-arrow-width $tooltip-arrow-width;
    border-bottom-color: $tooltip-arrow-color;
  }
}

//
// Typography
// --------------------------------------------------


// Headings
// -------------------------

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: $headings-font-family;
  font-weight: $headings-font-weight;
  line-height: $headings-line-height;
  color: $headings-color;

  small,
  .small {
    font-weight: normal;
    line-height: 1;
    color: $headings-small-color;
  }
}

h1, .h1,
h2, .h2,
h3, .h3 {
  margin-top: $line-height-computed;
  margin-bottom: ($line-height-computed / 2);

  small,
  .small {
    font-size: 65%;
  }
}
h4, .h4,
h5, .h5,
h6, .h6 {
  margin-top: ($line-height-computed / 2);
  margin-bottom: ($line-height-computed / 2);

  small,
  .small {
    font-size: 75%;
  }
}

h1, .h1 { font-size: $font-size-h1; }
h2, .h2 { font-size: $font-size-h2; }
h3, .h3 { font-size: $font-size-h3; }
h4, .h4 { font-size: $font-size-h4; }
h5, .h5 { font-size: $font-size-h5; }
h6, .h6 { font-size: $font-size-h6; }


// Body text
// -------------------------

p {
  margin: 0 0 ($line-height-computed / 2);
}

.lead {
  margin-bottom: $line-height-computed;
  font-size: floor(($font-size-base * 1.15));
  font-weight: 300;
  line-height: 1.4;

  @media (min-width: $screen-sm-min) {
    font-size: ($font-size-base * 1.5);
  }
}


// Emphasis & misc
// -------------------------

// Ex: (12px small font / 14px base font) * 100% = about 85%
small,
.small {
  font-size: floor((100% * $font-size-small / $font-size-base));
}

mark,
.mark {
  background-color: $state-warning-bg;
  padding: .2em;
}

// Alignment
.text-left           { text-align: left; }
.text-right          { text-align: right; }
.text-center         { text-align: center; }
.text-justify        { text-align: justify; }
.text-nowrap         { white-space: nowrap; }

// Transformation
.text-lowercase      { text-transform: lowercase; }
.text-uppercase      { text-transform: uppercase; }
.text-capitalize     { text-transform: capitalize; }

// Contextual colors
.text-muted {
  color: $text-muted;
}

@include text-emphasis-variant('.text-primary', $brand-primary);

@include text-emphasis-variant('.text-success', $state-success-text);

@include text-emphasis-variant('.text-info', $state-info-text);

@include text-emphasis-variant('.text-warning', $state-warning-text);

@include text-emphasis-variant('.text-danger', $state-danger-text);

// Contextual backgrounds
// For now we'll leave these alongside the text classes until v4 when we can
// safely shift things around (per SemVer rules).
.bg-primary {
  // Given the contrast here, this is the only class to have its color inverted
  // automatically.
  color: #fff;
}
@include bg-variant('.bg-primary', $brand-primary);

@include bg-variant('.bg-success', $state-success-bg);

@include bg-variant('.bg-info', $state-info-bg);

@include bg-variant('.bg-warning', $state-warning-bg);

@include bg-variant('.bg-danger', $state-danger-bg);


// Page header
// -------------------------

.page-header {
  padding-bottom: (($line-height-computed / 2) - 1);
  margin: ($line-height-computed * 2) 0 $line-height-computed;
  border-bottom: 1px solid $page-header-border-color;
}


// Lists
// -------------------------

// Unordered and Ordered lists
ul,
ol {
  margin-top: 0;
  margin-bottom: ($line-height-computed / 2);
  ul,
  ol {
    margin-bottom: 0;
  }
}

// List options

// [converter] extracted from `.list-unstyled` for libsass compatibility
@mixin list-unstyled {
  padding-left: 0;
  list-style: none;
}
// [converter] extracted as `@mixin list-unstyled` for libsass compatibility
.list-unstyled {
  @include list-unstyled;
}


// Inline turns list items into inline-block
.list-inline {
  @include list-unstyled;
  margin-left: -5px;

  > li {
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
  }
}

// Description Lists
dl {
  margin-top: 0; // Remove browser default
  margin-bottom: $line-height-computed;
}
dt,
dd {
  line-height: $line-height-base;
}
dt {
  font-weight: bold;
}
dd {
  margin-left: 0; // Undo browser default
}

// Horizontal description lists
//
// Defaults to being stacked without any of the below styles applied, until the
// grid breakpoint is reached (default of ~768px).

.dl-horizontal {
  dd {
    @include clearfix; // Clear the floated `dt` if an empty `dd` is present
  }

  @media (min-width: $grid-float-breakpoint) {
    dt {
      float: left;
      width: ($dl-horizontal-offset - 20);
      clear: left;
      text-align: right;
      @include text-overflow;
    }
    dd {
      margin-left: $dl-horizontal-offset;
    }
  }
}


// Misc
// -------------------------

// Abbreviations and acronyms
abbr[title],
// Add data-* attribute to help out our tooltip plugin, per https://github.com/twbs/bootstrap/issues/5257
abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted $abbr-border-color;
}
.initialism {
  font-size: 90%;
  @extend .text-uppercase;
}

// Blockquotes
blockquote {
  padding: ($line-height-computed / 2) $line-height-computed;
  margin: 0 0 $line-height-computed;
  font-size: $blockquote-font-size;
  border-left: 5px solid $blockquote-border-color;

  p,
  ul,
  ol {
    &:last-child {
      margin-bottom: 0;
    }
  }

  // Note: Deprecated small and .small as of v3.1.0
  // Context: https://github.com/twbs/bootstrap/issues/11660
  footer,
  small,
  .small {
    display: block;
    font-size: 80%; // back to default font-size
    line-height: $line-height-base;
    color: $blockquote-small-color;

    &:before {
      content: '\2014 \00A0'; // em dash, nbsp
    }
  }
}

// Opposite alignment of blockquote
//
// Heads up: `blockquote.pull-right` has been deprecated as of v3.1.0.
.blockquote-reverse,
blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  border-right: 5px solid $blockquote-border-color;
  border-left: 0;
  text-align: right;

  // Account for citation
  footer,
  small,
  .small {
    &:before { content: ''; }
    &:after {
      content: '\00A0 \2014'; // nbsp, em dash
    }
  }
}

// Addresses
address {
  margin-bottom: $line-height-computed;
  font-style: normal;
  line-height: $line-height-base;
}

//
// Utility classes
// --------------------------------------------------


// Floats
// -------------------------

.clearfix {
  @include clearfix;
}
.center-block {
  @include center-block;
}
.pull-right {
  float: right !important;
}
.pull-left {
  float: left !important;
}


// Toggling content
// -------------------------

// Note: Deprecated .hide in favor of .hidden or .sr-only (as appropriate) in v3.0.1
.hide {
  display: none !important;
}
.show {
  display: block !important;
}
.invisible {
  visibility: hidden;
}
.text-hide {
  @include text-hide;
}


// Hide from screenreaders and browsers
//
// Credit: HTML5 Boilerplate

.hidden {
  display: none !important;
}


// For Affix plugin
// -------------------------

.affix {
  position: fixed;
}

$bootstrap-sass-asset-helper: false !default;
//
// Variables
// --------------------------------------------------


//== Colors
//
//## Gray and brand colors for use across Bootstrap.

$gray-base:              #000 !default;
$gray-darker:            lighten($gray-base, 13.5%) !default; // #222
$gray-dark:              lighten($gray-base, 20%) !default;   // #333
$gray:                   lighten($gray-base, 33.5%) !default; // #555
$gray-light:             lighten($gray-base, 46.7%) !default; // #777
$gray-lighter:           lighten($gray-base, 93.5%) !default; // #eee

$brand-primary:         darken(#428bca, 6.5%) !default; // #337ab7
$brand-success:         #5cb85c !default;
$brand-info:            #5bc0de !default;
$brand-warning:         #f0ad4e !default;
$brand-danger:          #d9534f !default;


//== Scaffolding
//
//## Settings for some of the most global styles.

//** Background color for `<body>`.
$body-bg:               #fff !default;
//** Global text color on `<body>`.
$text-color:            $gray-dark !default;

//** Global textual link color.
$link-color:            $brand-primary !default;
//** Link hover color set via `darken()` function.
$link-hover-color:      darken($link-color, 15%) !default;
//** Link hover decoration.
$link-hover-decoration: underline !default;


//== Typography
//
//## Font, line-height, and color for body text, headings, and more.

$font-family-sans-serif:  "Helvetica Neue", Helvetica, Arial, sans-serif !default;
$font-family-serif:       Georgia, "Times New Roman", Times, serif !default;
//** Default monospace fonts for `<code>`, `<kbd>`, and `<pre>`.
$font-family-monospace:   Menlo, Monaco, Consolas, "Courier New", monospace !default;
$font-family-base:        $font-family-sans-serif !default;

$font-size-base:          14px !default;
$font-size-large:         ceil(($font-size-base * 1.25)) !default; // ~18px
$font-size-small:         ceil(($font-size-base * 0.85)) !default; // ~12px

$font-size-h1:            floor(($font-size-base * 2.6)) !default; // ~36px
$font-size-h2:            floor(($font-size-base * 2.15)) !default; // ~30px
$font-size-h3:            ceil(($font-size-base * 1.7)) !default; // ~24px
$font-size-h4:            ceil(($font-size-base * 1.25)) !default; // ~18px
$font-size-h5:            $font-size-base !default;
$font-size-h6:            ceil(($font-size-base * 0.85)) !default; // ~12px

//** Unit-less `line-height` for use in components like buttons.
$line-height-base:        1.428571429 !default; // 20/14
//** Computed "line-height" (`font-size` * `line-height`) for use with `margin`, `padding`, etc.
$line-height-computed:    floor(($font-size-base * $line-height-base)) !default; // ~20px

//** By default, this inherits from the `<body>`.
$headings-font-family:    inherit !default;
$headings-font-weight:    500 !default;
$headings-line-height:    1.1 !default;
$headings-color:          inherit !default;


//== Iconography
//
//## Specify custom location and filename of the included Glyphicons icon font. Useful for those including Bootstrap via Bower.

//** Load fonts from this directory.

// [converter] If $bootstrap-sass-asset-helper if used, provide path relative to the assets load path.
// [converter] This is because some asset helpers, such as Sprockets, do not work with file-relative paths.
$icon-font-path: if($bootstrap-sass-asset-helper, "bootstrap/", "../fonts/bootstrap/") !default;

//** File name for all font files.
$icon-font-name:          "glyphicons-halflings-regular" !default;
//** Element ID within SVG icon file.
$icon-font-svg-id:        "glyphicons_halflingsregular" !default;


//== Components
//
//## Define common padding and border radius sizes and more. Values based on 14px text and 1.428 line-height (~20px to start).

$padding-base-vertical:     6px !default;
$padding-base-horizontal:   12px !default;

$padding-large-vertical:    10px !default;
$padding-large-horizontal:  16px !default;

$padding-small-vertical:    5px !default;
$padding-small-horizontal:  10px !default;

$padding-xs-vertical:       1px !default;
$padding-xs-horizontal:     5px !default;

$line-height-large:         1.3333333 !default; // extra decimals for Win 8.1 Chrome
$line-height-small:         1.5 !default;

$border-radius-base:        4px !default;
$border-radius-large:       6px !default;
$border-radius-small:       3px !default;

//** Global color for active items (e.g., navs or dropdowns).
$component-active-color:    #fff !default;
//** Global background color for active items (e.g., navs or dropdowns).
$component-active-bg:       $brand-primary !default;

//** Width of the `border` for generating carets that indicator dropdowns.
$caret-width-base:          4px !default;
//** Carets increase slightly in size for larger components.
$caret-width-large:         5px !default;


//== Tables
//
//## Customizes the `.table` component with basic values, each used across all table variations.

//** Padding for `<th>`s and `<td>`s.
$table-cell-padding:            8px !default;
//** Padding for cells in `.table-condensed`.
$table-condensed-cell-padding:  5px !default;

//** Default background color used for all tables.
$table-bg:                      transparent !default;
//** Background color used for `.table-striped`.
$table-bg-accent:               #f9f9f9 !default;
//** Background color used for `.table-hover`.
$table-bg-hover:                #f5f5f5 !default;
$table-bg-active:               $table-bg-hover !default;

//** Border color for table and cell borders.
$table-border-color:            #ddd !default;


//== Buttons
//
//## For each of Bootstrap's buttons, define text, background and border color.

$btn-font-weight:                normal !default;

$btn-default-color:              #333 !default;
$btn-default-bg:                 #fff !default;
$btn-default-border:             #ccc !default;

$btn-primary-color:              #fff !default;
$btn-primary-bg:                 $brand-primary !default;
$btn-primary-border:             darken($btn-primary-bg, 5%) !default;

$btn-success-color:              #fff !default;
$btn-success-bg:                 $brand-success !default;
$btn-success-border:             darken($btn-success-bg, 5%) !default;

$btn-info-color:                 #fff !default;
$btn-info-bg:                    $brand-info !default;
$btn-info-border:                darken($btn-info-bg, 5%) !default;

$btn-warning-color:              #fff !default;
$btn-warning-bg:                 $brand-warning !default;
$btn-warning-border:             darken($btn-warning-bg, 5%) !default;

$btn-danger-color:               #fff !default;
$btn-danger-bg:                  $brand-danger !default;
$btn-danger-border:              darken($btn-danger-bg, 5%) !default;

$btn-link-disabled-color:        $gray-light !default;

// Allows for customizing button radius independently from global border radius
$btn-border-radius-base:         $border-radius-base !default;
$btn-border-radius-large:        $border-radius-large !default;
$btn-border-radius-small:        $border-radius-small !default;


//== Forms
//
//##

//** `<input>` background color
$input-bg:                       #fff !default;
//** `<input disabled>` background color
$input-bg-disabled:              $gray-lighter !default;

//** Text color for `<input>`s
$input-color:                    $gray !default;
//** `<input>` border color
$input-border:                   #ccc !default;

// TODO: Rename `$input-border-radius` to `$input-border-radius-base` in v4
//** Default `.form-control` border radius
// This has no effect on `<select>`s in some browsers, due to the limited stylability of `<select>`s in CSS.
$input-border-radius:            $border-radius-base !default;
//** Large `.form-control` border radius
$input-border-radius-large:      $border-radius-large !default;
//** Small `.form-control` border radius
$input-border-radius-small:      $border-radius-small !default;

//** Border color for inputs on focus
$input-border-focus:             #66afe9 !default;

//** Placeholder text color
$input-color-placeholder:        #999 !default;

//** Default `.form-control` height
$input-height-base:              ($line-height-computed + ($padding-base-vertical * 2) + 2) !default;
//** Large `.form-control` height
$input-height-large:             (ceil($font-size-large * $line-height-large) + ($padding-large-vertical * 2) + 2) !default;
//** Small `.form-control` height
$input-height-small:             (floor($font-size-small * $line-height-small) + ($padding-small-vertical * 2) + 2) !default;

//** `.form-group` margin
$form-group-margin-bottom:       15px !default;

$legend-color:                   $gray-dark !default;
$legend-border-color:            #e5e5e5 !default;

//** Background color for textual input addons
$input-group-addon-bg:           $gray-lighter !default;
//** Border color for textual input addons
$input-group-addon-border-color: $input-border !default;

//** Disabled cursor for form controls and buttons.
$cursor-disabled:                not-allowed !default;


//== Dropdowns
//
//## Dropdown menu container and contents.

//** Background for the dropdown menu.
$dropdown-bg:                    #fff !default;
//** Dropdown menu `border-color`.
$dropdown-border:                rgba(0,0,0,.15) !default;
//** Dropdown menu `border-color` **for IE8**.
$dropdown-fallback-border:       #ccc !default;
//** Divider color for between dropdown items.
$dropdown-divider-bg:            #e5e5e5 !default;

//** Dropdown link text color.
$dropdown-link-color:            $gray-dark !default;
//** Hover color for dropdown links.
$dropdown-link-hover-color:      darken($gray-dark, 5%) !default;
//** Hover background for dropdown links.
$dropdown-link-hover-bg:         #f5f5f5 !default;

//** Active dropdown menu item text color.
$dropdown-link-active-color:     $component-active-color !default;
//** Active dropdown menu item background color.
$dropdown-link-active-bg:        $component-active-bg !default;

//** Disabled dropdown menu item background color.
$dropdown-link-disabled-color:   $gray-light !default;

//** Text color for headers within dropdown menus.
$dropdown-header-color:          $gray-light !default;

//** Deprecated `$dropdown-caret-color` as of v3.1.0
$dropdown-caret-color:           #000 !default;


//-- Z-index master list
//
// Warning: Avoid customizing these values. They're used for a bird's eye view
// of components dependent on the z-axis and are designed to all work together.
//
// Note: These variables are not generated into the Customizer.

$zindex-navbar:            1000 !default;
$zindex-dropdown:          1000 !default;
$zindex-popover:           1060 !default;
$zindex-tooltip:           1070 !default;
$zindex-navbar-fixed:      1030 !default;
$zindex-modal-background:  1040 !default;
$zindex-modal:             1050 !default;


//== Media queries breakpoints
//
//## Define the breakpoints at which your layout will change, adapting to different screen sizes.

// Extra small screen / phone
//** Deprecated `$screen-xs` as of v3.0.1
$screen-xs:                  480px !default;
//** Deprecated `$screen-xs-min` as of v3.2.0
$screen-xs-min:              $screen-xs !default;
//** Deprecated `$screen-phone` as of v3.0.1
$screen-phone:               $screen-xs-min !default;

// Small screen / tablet
//** Deprecated `$screen-sm` as of v3.0.1
$screen-sm:                  768px !default;
$screen-sm-min:              $screen-sm !default;
//** Deprecated `$screen-tablet` as of v3.0.1
$screen-tablet:              $screen-sm-min !default;

// Medium screen / desktop
//** Deprecated `$screen-md` as of v3.0.1
$screen-md:                  992px !default;
$screen-md-min:              $screen-md !default;
//** Deprecated `$screen-desktop` as of v3.0.1
$screen-desktop:             $screen-md-min !default;

// Large screen / wide desktop
//** Deprecated `$screen-lg` as of v3.0.1
$screen-lg:                  1200px !default;
$screen-lg-min:              $screen-lg !default;
//** Deprecated `$screen-lg-desktop` as of v3.0.1
$screen-lg-desktop:          $screen-lg-min !default;

// So media queries don't overlap when required, provide a maximum
$screen-xs-max:              ($screen-sm-min - 1) !default;
$screen-sm-max:              ($screen-md-min - 1) !default;
$screen-md-max:              ($screen-lg-min - 1) !default;


//== Grid system
//
//## Define your custom responsive grid.

//** Number of columns in the grid.
$grid-columns:              12 !default;
//** Padding between columns. Gets divided in half for the left and right.
$grid-gutter-width:         30px !default;
// Navbar collapse
//** Point at which the navbar becomes uncollapsed.
$grid-float-breakpoint:     $screen-sm-min !default;
//** Point at which the navbar begins collapsing.
$grid-float-breakpoint-max: ($grid-float-breakpoint - 1) !default;


//== Container sizes
//
//## Define the maximum width of `.container` for different screen sizes.

// Small screen / tablet
$container-tablet:             (720px + $grid-gutter-width) !default;
//** For `$screen-sm-min` and up.
$container-sm:                 $container-tablet !default;

// Medium screen / desktop
$container-desktop:            (940px + $grid-gutter-width) !default;
//** For `$screen-md-min` and up.
$container-md:                 $container-desktop !default;

// Large screen / wide desktop
$container-large-desktop:      (1140px + $grid-gutter-width) !default;
//** For `$screen-lg-min` and up.
$container-lg:                 $container-large-desktop !default;


//== Navbar
//
//##

// Basics of a navbar
$navbar-height:                    50px !default;
$navbar-margin-bottom:             $line-height-computed !default;
$navbar-border-radius:             $border-radius-base !default;
$navbar-padding-horizontal:        floor(($grid-gutter-width / 2)) !default;
$navbar-padding-vertical:          (($navbar-height - $line-height-computed) / 2) !default;
$navbar-collapse-max-height:       340px !default;

$navbar-default-color:             #777 !default;
$navbar-default-bg:                #f8f8f8 !default;
$navbar-default-border:            darken($navbar-default-bg, 6.5%) !default;

// Navbar links
$navbar-default-link-color:                #777 !default;
$navbar-default-link-hover-color:          #333 !default;
$navbar-default-link-hover-bg:             transparent !default;
$navbar-default-link-active-color:         #555 !default;
$navbar-default-link-active-bg:            darken($navbar-default-bg, 6.5%) !default;
$navbar-default-link-disabled-color:       #ccc !default;
$navbar-default-link-disabled-bg:          transparent !default;

// Navbar brand label
$navbar-default-brand-color:               $navbar-default-link-color !default;
$navbar-default-brand-hover-color:         darken($navbar-default-brand-color, 10%) !default;
$navbar-default-brand-hover-bg:            transparent !default;

// Navbar toggle
$navbar-default-toggle-hover-bg:           #ddd !default;
$navbar-default-toggle-icon-bar-bg:        #888 !default;
$navbar-default-toggle-border-color:       #ddd !default;


//=== Inverted navbar
// Reset inverted navbar basics
$navbar-inverse-color:                      lighten($gray-light, 15%) !default;
$navbar-inverse-bg:                         #222 !default;
$navbar-inverse-border:                     darken($navbar-inverse-bg, 10%) !default;

// Inverted navbar links
$navbar-inverse-link-color:                 lighten($gray-light, 15%) !default;
$navbar-inverse-link-hover-color:           #fff !default;
$navbar-inverse-link-hover-bg:              transparent !default;
$navbar-inverse-link-active-color:          $navbar-inverse-link-hover-color !default;
$navbar-inverse-link-active-bg:             darken($navbar-inverse-bg, 10%) !default;
$navbar-inverse-link-disabled-color:        #444 !default;
$navbar-inverse-link-disabled-bg:           transparent !default;

// Inverted navbar brand label
$navbar-inverse-brand-color:                $navbar-inverse-link-color !default;
$navbar-inverse-brand-hover-color:          #fff !default;
$navbar-inverse-brand-hover-bg:             transparent !default;

// Inverted navbar toggle
$navbar-inverse-toggle-hover-bg:            #333 !default;
$navbar-inverse-toggle-icon-bar-bg:         #fff !default;
$navbar-inverse-toggle-border-color:        #333 !default;


//== Navs
//
//##

//=== Shared nav styles
$nav-link-padding:                          10px 15px !default;
$nav-link-hover-bg:                         $gray-lighter !default;

$nav-disabled-link-color:                   $gray-light !default;
$nav-disabled-link-hover-color:             $gray-light !default;

//== Tabs
$nav-tabs-border-color:                     #ddd !default;

$nav-tabs-link-hover-border-color:          $gray-lighter !default;

$nav-tabs-active-link-hover-bg:             $body-bg !default;
$nav-tabs-active-link-hover-color:          $gray !default;
$nav-tabs-active-link-hover-border-color:   #ddd !default;

$nav-tabs-justified-link-border-color:            #ddd !default;
$nav-tabs-justified-active-link-border-color:     $body-bg !default;

//== Pills
$nav-pills-border-radius:                   $border-radius-base !default;
$nav-pills-active-link-hover-bg:            $component-active-bg !default;
$nav-pills-active-link-hover-color:         $component-active-color !default;


//== Pagination
//
//##

$pagination-color:                     $link-color !default;
$pagination-bg:                        #fff !default;
$pagination-border:                    #ddd !default;

$pagination-hover-color:               $link-hover-color !default;
$pagination-hover-bg:                  $gray-lighter !default;
$pagination-hover-border:              #ddd !default;

$pagination-active-color:              #fff !default;
$pagination-active-bg:                 $brand-primary !default;
$pagination-active-border:             $brand-primary !default;

$pagination-disabled-color:            $gray-light !default;
$pagination-disabled-bg:               #fff !default;
$pagination-disabled-border:           #ddd !default;


//== Pager
//
//##

$pager-bg:                             $pagination-bg !default;
$pager-border:                         $pagination-border !default;
$pager-border-radius:                  15px !default;

$pager-hover-bg:                       $pagination-hover-bg !default;

$pager-active-bg:                      $pagination-active-bg !default;
$pager-active-color:                   $pagination-active-color !default;

$pager-disabled-color:                 $pagination-disabled-color !default;


//== Jumbotron
//
//##

$jumbotron-padding:              30px !default;
$jumbotron-color:                inherit !default;
$jumbotron-bg:                   $gray-lighter !default;
$jumbotron-heading-color:        inherit !default;
$jumbotron-font-size:            ceil(($font-size-base * 1.5)) !default;
$jumbotron-heading-font-size:    ceil(($font-size-base * 4.5)) !default;


//== Form states and alerts
//
//## Define colors for form feedback states and, by default, alerts.

$state-success-text:             #3c763d !default;
$state-success-bg:               #dff0d8 !default;
$state-success-border:           darken(adjust-hue($state-success-bg, -10), 5%) !default;

$state-info-text:                #31708f !default;
$state-info-bg:                  #d9edf7 !default;
$state-info-border:              darken(adjust-hue($state-info-bg, -10), 7%) !default;

$state-warning-text:             #8a6d3b !default;
$state-warning-bg:               #fcf8e3 !default;
$state-warning-border:           darken(adjust-hue($state-warning-bg, -10), 5%) !default;

$state-danger-text:              #a94442 !default;
$state-danger-bg:                #f2dede !default;
$state-danger-border:            darken(adjust-hue($state-danger-bg, -10), 5%) !default;


//== Tooltips
//
//##

//** Tooltip max width
$tooltip-max-width:           200px !default;
//** Tooltip text color
$tooltip-color:               #fff !default;
//** Tooltip background color
$tooltip-bg:                  #000 !default;
$tooltip-opacity:             .9 !default;

//** Tooltip arrow width
$tooltip-arrow-width:         5px !default;
//** Tooltip arrow color
$tooltip-arrow-color:         $tooltip-bg !default;


//== Popovers
//
//##

//** Popover body background color
$popover-bg:                          #fff !default;
//** Popover maximum width
$popover-max-width:                   276px !default;
//** Popover border color
$popover-border-color:                rgba(0,0,0,.2) !default;
//** Popover fallback border color
$popover-fallback-border-color:       #ccc !default;

//** Popover title background color
$popover-title-bg:                    darken($popover-bg, 3%) !default;

//** Popover arrow width
$popover-arrow-width:                 10px !default;
//** Popover arrow color
$popover-arrow-color:                 $popover-bg !default;

//** Popover outer arrow width
$popover-arrow-outer-width:           ($popover-arrow-width + 1) !default;
//** Popover outer arrow color
$popover-arrow-outer-color:           fade_in($popover-border-color, 0.05) !default;
//** Popover outer arrow fallback color
$popover-arrow-outer-fallback-color:  darken($popover-fallback-border-color, 20%) !default;


//== Labels
//
//##

//** Default label background color
$label-default-bg:            $gray-light !default;
//** Primary label background color
$label-primary-bg:            $brand-primary !default;
//** Success label background color
$label-success-bg:            $brand-success !default;
//** Info label background color
$label-info-bg:               $brand-info !default;
//** Warning label background color
$label-warning-bg:            $brand-warning !default;
//** Danger label background color
$label-danger-bg:             $brand-danger !default;

//** Default label text color
$label-color:                 #fff !default;
//** Default text color of a linked label
$label-link-hover-color:      #fff !default;


//== Modals
//
//##

//** Padding applied to the modal body
$modal-inner-padding:         15px !default;

//** Padding applied to the modal title
$modal-title-padding:         15px !default;
//** Modal title line-height
$modal-title-line-height:     $line-height-base !default;

//** Background color of modal content area
$modal-content-bg:                             #fff !default;
//** Modal content border color
$modal-content-border-color:                   rgba(0,0,0,.2) !default;
//** Modal content border color **for IE8**
$modal-content-fallback-border-color:          #999 !default;

//** Modal backdrop background color
$modal-backdrop-bg:           #000 !default;
//** Modal backdrop opacity
$modal-backdrop-opacity:      .5 !default;
//** Modal header border color
$modal-header-border-color:   #e5e5e5 !default;
//** Modal footer border color
$modal-footer-border-color:   $modal-header-border-color !default;

$modal-lg:                    900px !default;
$modal-md:                    600px !default;
$modal-sm:                    300px !default;


//== Alerts
//
//## Define alert colors, border radius, and padding.

$alert-padding:               15px !default;
$alert-border-radius:         $border-radius-base !default;
$alert-link-font-weight:      bold !default;

$alert-success-bg:            $state-success-bg !default;
$alert-success-text:          $state-success-text !default;
$alert-success-border:        $state-success-border !default;

$alert-info-bg:               $state-info-bg !default;
$alert-info-text:             $state-info-text !default;
$alert-info-border:           $state-info-border !default;

$alert-warning-bg:            $state-warning-bg !default;
$alert-warning-text:          $state-warning-text !default;
$alert-warning-border:        $state-warning-border !default;

$alert-danger-bg:             $state-danger-bg !default;
$alert-danger-text:           $state-danger-text !default;
$alert-danger-border:         $state-danger-border !default;


//== Progress bars
//
//##

//** Background color of the whole progress component
$progress-bg:                 #f5f5f5 !default;
//** Progress bar text color
$progress-bar-color:          #fff !default;
//** Variable for setting rounded corners on progress bar.
$progress-border-radius:      $border-radius-base !default;

//** Default progress bar color
$progress-bar-bg:             $brand-primary !default;
//** Success progress bar color
$progress-bar-success-bg:     $brand-success !default;
//** Warning progress bar color
$progress-bar-warning-bg:     $brand-warning !default;
//** Danger progress bar color
$progress-bar-danger-bg:      $brand-danger !default;
//** Info progress bar color
$progress-bar-info-bg:        $brand-info !default;


//== List group
//
//##

//** Background color on `.list-group-item`
$list-group-bg:                 #fff !default;
//** `.list-group-item` border color
$list-group-border:             #ddd !default;
//** List group border radius
$list-group-border-radius:      $border-radius-base !default;

//** Background color of single list items on hover
$list-group-hover-bg:           #f5f5f5 !default;
//** Text color of active list items
$list-group-active-color:       $component-active-color !default;
//** Background color of active list items
$list-group-active-bg:          $component-active-bg !default;
//** Border color of active list elements
$list-group-active-border:      $list-group-active-bg !default;
//** Text color for content within active list items
$list-group-active-text-color:  lighten($list-group-active-bg, 40%) !default;

//** Text color of disabled list items
$list-group-disabled-color:      $gray-light !default;
//** Background color of disabled list items
$list-group-disabled-bg:         $gray-lighter !default;
//** Text color for content within disabled list items
$list-group-disabled-text-color: $list-group-disabled-color !default;

$list-group-link-color:         #555 !default;
$list-group-link-hover-color:   $list-group-link-color !default;
$list-group-link-heading-color: #333 !default;


//== Panels
//
//##

$panel-bg:                    #fff !default;
$panel-body-padding:          15px !default;
$panel-heading-padding:       10px 15px !default;
$panel-footer-padding:        $panel-heading-padding !default;
$panel-border-radius:         $border-radius-base !default;

//** Border color for elements within panels
$panel-inner-border:          #ddd !default;
$panel-footer-bg:             #f5f5f5 !default;

$panel-default-text:          $gray-dark !default;
$panel-default-border:        #ddd !default;
$panel-default-heading-bg:    #f5f5f5 !default;

$panel-primary-text:          #fff !default;
$panel-primary-border:        $brand-primary !default;
$panel-primary-heading-bg:    $brand-primary !default;

$panel-success-text:          $state-success-text !default;
$panel-success-border:        $state-success-border !default;
$panel-success-heading-bg:    $state-success-bg !default;

$panel-info-text:             $state-info-text !default;
$panel-info-border:           $state-info-border !default;
$panel-info-heading-bg:       $state-info-bg !default;

$panel-warning-text:          $state-warning-text !default;
$panel-warning-border:        $state-warning-border !default;
$panel-warning-heading-bg:    $state-warning-bg !default;

$panel-danger-text:           $state-danger-text !default;
$panel-danger-border:         $state-danger-border !default;
$panel-danger-heading-bg:     $state-danger-bg !default;


//== Thumbnails
//
//##

//** Padding around the thumbnail image
$thumbnail-padding:           4px !default;
//** Thumbnail background color
$thumbnail-bg:                $body-bg !default;
//** Thumbnail border color
$thumbnail-border:            #ddd !default;
//** Thumbnail border radius
$thumbnail-border-radius:     $border-radius-base !default;

//** Custom text color for thumbnail captions
$thumbnail-caption-color:     $text-color !default;
//** Padding around the thumbnail caption
$thumbnail-caption-padding:   9px !default;


//== Wells
//
//##

$well-bg:                     #f5f5f5 !default;
$well-border:                 darken($well-bg, 7%) !default;


//== Badges
//
//##

$badge-color:                 #fff !default;
//** Linked badge text color on hover
$badge-link-hover-color:      #fff !default;
$badge-bg:                    $gray-light !default;

//** Badge text color in active nav link
$badge-active-color:          $link-color !default;
//** Badge background color in active nav link
$badge-active-bg:             #fff !default;

$badge-font-weight:           bold !default;
$badge-line-height:           1 !default;
$badge-border-radius:         10px !default;


//== Breadcrumbs
//
//##

$breadcrumb-padding-vertical:   8px !default;
$breadcrumb-padding-horizontal: 15px !default;
//** Breadcrumb background color
$breadcrumb-bg:                 #f5f5f5 !default;
//** Breadcrumb text color
$breadcrumb-color:              #ccc !default;
//** Text color of current page in the breadcrumb
$breadcrumb-active-color:       $gray-light !default;
//** Textual separator for between breadcrumb elements
$breadcrumb-separator:          "/" !default;


//== Carousel
//
//##

$carousel-text-shadow:                        0 1px 2px rgba(0,0,0,.6) !default;

$carousel-control-color:                      #fff !default;
$carousel-control-width:                      15% !default;
$carousel-control-opacity:                    .5 !default;
$carousel-control-font-size:                  20px !default;

$carousel-indicator-active-bg:                #fff !default;
$carousel-indicator-border-color:             #fff !default;

$carousel-caption-color:                      #fff !default;


//== Close
//
//##

$close-font-weight:           bold !default;
$close-color:                 #000 !default;
$close-text-shadow:           0 1px 0 #fff !default;


//== Code
//
//##

$code-color:                  #c7254e !default;
$code-bg:                     #f9f2f4 !default;

$kbd-color:                   #fff !default;
$kbd-bg:                      #333 !default;

$pre-bg:                      #f5f5f5 !default;
$pre-color:                   $gray-dark !default;
$pre-border-color:            #ccc !default;
$pre-scrollable-max-height:   340px !default;


//== Type
//
//##

//** Horizontal offset for forms and lists.
$component-offset-horizontal: 180px !default;
//** Text muted color
$text-muted:                  $gray-light !default;
//** Abbreviations and acronyms border color
$abbr-border-color:           $gray-light !default;
//** Headings small color
$headings-small-color:        $gray-light !default;
//** Blockquote small color
$blockquote-small-color:      $gray-light !default;
//** Blockquote font size
$blockquote-font-size:        ($font-size-base * 1.25) !default;
//** Blockquote border color
$blockquote-border-color:     $gray-lighter !default;
//** Page header border color
$page-header-border-color:    $gray-lighter !default;
//** Width of horizontal description list titles
$dl-horizontal-offset:        $component-offset-horizontal !default;
//** Horizontal line color.
$hr-border:                   $gray-lighter !default;

//
// Wells
// --------------------------------------------------


// Base class
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: $well-bg;
  border: 1px solid $well-border;
  border-radius: $border-radius-base;
  @include box-shadow(inset 0 1px 1px rgba(0,0,0,.05));
  blockquote {
    border-color: #ddd;
    border-color: rgba(0,0,0,.15);
  }
}

// Sizes
.well-lg {
  padding: 24px;
  border-radius: $border-radius-large;
}
.well-sm {
  padding: 9px;
  border-radius: $border-radius-small;
}

// Alerts

@mixin alert-variant($background, $border, $text-color) {
  background-color: $background;
  border-color: $border;
  color: $text-color;

  hr {
    border-top-color: darken($border, 5%);
  }
  .alert-link {
    color: darken($text-color, 10%);
  }
}

// Contextual backgrounds

// [converter] $parent hack
@mixin bg-variant($parent, $color) {
  #{$parent} {
    background-color: $color;
  }
  a#{$parent}:hover,
  a#{$parent}:focus {
    background-color: darken($color, 10%);
  }
}

// Single side border-radius

@mixin border-top-radius($radius) {
  border-top-right-radius: $radius;
   border-top-left-radius: $radius;
}
@mixin border-right-radius($radius) {
  border-bottom-right-radius: $radius;
     border-top-right-radius: $radius;
}
@mixin border-bottom-radius($radius) {
  border-bottom-right-radius: $radius;
   border-bottom-left-radius: $radius;
}
@mixin border-left-radius($radius) {
  border-bottom-left-radius: $radius;
     border-top-left-radius: $radius;
}

// Button variants
//
// Easily pump out default styles, as well as :hover, :focus, :active,
// and disabled options for all buttons

@mixin button-variant($color, $background, $border) {
  color: $color;
  background-color: $background;
  border-color: $border;

  &:focus,
  &.focus {
    color: $color;
    background-color: darken($background, 10%);
        border-color: darken($border, 25%);
  }
  &:hover {
    color: $color;
    background-color: darken($background, 10%);
        border-color: darken($border, 12%);
  }
  &:active,
  &.active,
  .open > &.dropdown-toggle {
    color: $color;
    background-color: darken($background, 10%);
        border-color: darken($border, 12%);

    &:hover,
    &:focus,
    &.focus {
      color: $color;
      background-color: darken($background, 17%);
          border-color: darken($border, 25%);
    }
  }
  &:active,
  &.active,
  .open > &.dropdown-toggle {
    background-image: none;
  }
  &.disabled,
  &[disabled],
  fieldset[disabled] & {
    &,
    &:hover,
    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: $background;
          border-color: $border;
    }
  }

  .badge {
    color: $background;
    background-color: $color;
  }
}

// Button sizes
@mixin button-size($padding-vertical, $padding-horizontal, $font-size, $line-height, $border-radius) {
  padding: $padding-vertical $padding-horizontal;
  font-size: $font-size;
  line-height: $line-height;
  border-radius: $border-radius;
}

// Center-align a block level element

@mixin center-block() {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

// Clearfix
//
// For modern browsers
// 1. The space content is one way to avoid an Opera bug when the
//    contenteditable attribute is included anywhere else in the document.
//    Otherwise it causes space to appear at the top and bottom of elements
//    that are clearfixed.
// 2. The use of `table` rather than `block` is only necessary if using
//    `:before` to contain the top-margins of child elements.
//
// Source: http://nicolasgallagher.com/micro-clearfix-hack/

@mixin clearfix() {
  &:before,
  &:after {
    content: " "; // 1
    display: table; // 2
  }
  &:after {
    clear: both;
  }
}

// Form validation states
//
// Used in forms.less to generate the form validation CSS for warnings, errors,
// and successes.

@mixin form-control-validation($text-color: #555, $border-color: #ccc, $background-color: #f5f5f5) {
  // Color the label and help text
  .help-block,
  .control-label,
  .radio,
  .checkbox,
  .radio-inline,
  .checkbox-inline,
  &.radio label,
  &.checkbox label,
  &.radio-inline label,
  &.checkbox-inline label  {
    color: $text-color;
  }
  // Set the border and box shadow on specific inputs to match
  .form-control {
    border-color: $border-color;
    @include box-shadow(inset 0 1px 1px rgba(0,0,0,.075)); // Redeclare so transitions work
    &:focus {
      border-color: darken($border-color, 10%);
      $shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px lighten($border-color, 20%);
      @include box-shadow($shadow);
    }
  }
  // Set validation states also for addons
  .input-group-addon {
    color: $text-color;
    border-color: $border-color;
    background-color: $background-color;
  }
  // Optional feedback icon
  .form-control-feedback {
    color: $text-color;
  }
}


// Form control focus state
//
// Generate a customized focus state and for any input with the specified color,
// which defaults to the `$input-border-focus` variable.
//
// We highly encourage you to not customize the default value, but instead use
// this to tweak colors on an as-needed basis. This aesthetic change is based on
// WebKit's default styles, but applicable to a wider range of browsers. Its
// usability and accessibility should be taken into account with any change.
//
// Example usage: change the default blue border and shadow to white for better
// contrast against a dark gray background.
@mixin form-control-focus($color: $input-border-focus) {
  $color-rgba: rgba(red($color), green($color), blue($color), .6);
  &:focus {
    border-color: $color;
    outline: 0;
    @include box-shadow(inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px $color-rgba);
  }
}

// Form control sizing
//
// Relative text size, padding, and border-radii changes for form controls. For
// horizontal sizing, wrap controls in the predefined grid classes. `<select>`
// element gets special love because it's special, and that's a fact!
// [converter] $parent hack
@mixin input-size($parent, $input-height, $padding-vertical, $padding-horizontal, $font-size, $line-height, $border-radius) {
  #{$parent} {
    height: $input-height;
    padding: $padding-vertical $padding-horizontal;
    font-size: $font-size;
    line-height: $line-height;
    border-radius: $border-radius;
  }

  select#{$parent} {
    height: $input-height;
    line-height: $input-height;
  }

  textarea#{$parent},
  select[multiple]#{$parent} {
    height: auto;
  }
}

// Gradients



// Horizontal gradient, from left to right
//
// Creates two color stops, start and end, by specifying a color and position for each color stop.
// Color stops are not available in IE9 and below.
@mixin gradient-horizontal($start-color: #555, $end-color: #333, $start-percent: 0%, $end-percent: 100%) {
  background-image: -webkit-linear-gradient(left, $start-color $start-percent, $end-color $end-percent); // Safari 5.1-6, Chrome 10+
  background-image: -o-linear-gradient(left, $start-color $start-percent, $end-color $end-percent); // Opera 12
  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=1); // IE9 and down
}

// Vertical gradient, from top to bottom
//
// Creates two color stops, start and end, by specifying a color and position for each color stop.
// Color stops are not available in IE9 and below.
@mixin gradient-vertical($start-color: #555, $end-color: #333, $start-percent: 0%, $end-percent: 100%) {
  background-image: -webkit-linear-gradient(top, $start-color $start-percent, $end-color $end-percent);  // Safari 5.1-6, Chrome 10+
  background-image: -o-linear-gradient(top, $start-color $start-percent, $end-color $end-percent);  // Opera 12
  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=0); // IE9 and down
}

@mixin gradient-directional($start-color: #555, $end-color: #333, $deg: 45deg) {
  background-repeat: repeat-x;
  background-image: -webkit-linear-gradient($deg, $start-color, $end-color); // Safari 5.1-6, Chrome 10+
  background-image: -o-linear-gradient($deg, $start-color, $end-color); // Opera 12
  background-image: linear-gradient($deg, $start-color, $end-color); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+
}
@mixin gradient-horizontal-three-colors($start-color: #00b3ee, $mid-color: #7a43b6, $color-stop: 50%, $end-color: #c3325f) {
  background-image: -webkit-linear-gradient(left, $start-color, $mid-color $color-stop, $end-color);
  background-image: -o-linear-gradient(left, $start-color, $mid-color $color-stop, $end-color);
  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);
  background-repeat: no-repeat;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=1); // IE9 and down, gets no color-stop at all for proper fallback
}
@mixin gradient-vertical-three-colors($start-color: #00b3ee, $mid-color: #7a43b6, $color-stop: 50%, $end-color: #c3325f) {
  background-image: -webkit-linear-gradient($start-color, $mid-color $color-stop, $end-color);
  background-image: -o-linear-gradient($start-color, $mid-color $color-stop, $end-color);
  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);
  background-repeat: no-repeat;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=0); // IE9 and down, gets no color-stop at all for proper fallback
}
@mixin gradient-radial($inner-color: #555, $outer-color: #333) {
  background-image: -webkit-radial-gradient(circle, $inner-color, $outer-color);
  background-image: radial-gradient(circle, $inner-color, $outer-color);
  background-repeat: no-repeat;
}
@mixin gradient-striped($color: rgba(255,255,255,.15), $angle: 45deg) {
  background-image: -webkit-linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);
  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);
}

// Framework grid generation
//
// Used only by Bootstrap to generate the correct number of grid classes given
// any value of `$grid-columns`.

// [converter] This is defined recursively in LESS, but Sass supports real loops
@mixin make-grid-columns($i: 1, $list: ".col-xs-#{$i}, .col-sm-#{$i}, .col-md-#{$i}, .col-lg-#{$i}") {
  @for $i from (1 + 1) through $grid-columns {
    $list: "#{$list}, .col-xs-#{$i}, .col-sm-#{$i}, .col-md-#{$i}, .col-lg-#{$i}";
  }
  #{$list} {
    position: relative;
    // Prevent columns from collapsing when empty
    min-height: 1px;
    // Inner gutter via padding
    padding-left:  ceil(($grid-gutter-width / 2));
    padding-right: floor(($grid-gutter-width / 2));
  }
}


// [converter] This is defined recursively in LESS, but Sass supports real loops
@mixin float-grid-columns($class, $i: 1, $list: ".col-#{$class}-#{$i}") {
  @for $i from (1 + 1) through $grid-columns {
    $list: "#{$list}, .col-#{$class}-#{$i}";
  }
  #{$list} {
    float: left;
  }
}


@mixin calc-grid-column($index, $class, $type) {
  @if ($type == width) and ($index > 0) {
    .col-#{$class}-#{$index} {
      width: percentage(($index / $grid-columns));
    }
  }
  @if ($type == push) and ($index > 0) {
    .col-#{$class}-push-#{$index} {
      left: percentage(($index / $grid-columns));
    }
  }
  @if ($type == push) and ($index == 0) {
    .col-#{$class}-push-0 {
      left: auto;
    }
  }
  @if ($type == pull) and ($index > 0) {
    .col-#{$class}-pull-#{$index} {
      right: percentage(($index / $grid-columns));
    }
  }
  @if ($type == pull) and ($index == 0) {
    .col-#{$class}-pull-0 {
      right: auto;
    }
  }
  @if ($type == offset) {
    .col-#{$class}-offset-#{$index} {
      margin-left: percentage(($index / $grid-columns));
    }
  }
}

// [converter] This is defined recursively in LESS, but Sass supports real loops
@mixin loop-grid-columns($columns, $class, $type) {
  @for $i from 0 through $columns {
    @include calc-grid-column($i, $class, $type);
  }
}


// Create grid for specific class
@mixin make-grid($class) {
  @include float-grid-columns($class);
  @include loop-grid-columns($grid-columns, $class, width);
  @include loop-grid-columns($grid-columns, $class, pull);
  @include loop-grid-columns($grid-columns, $class, push);
  @include loop-grid-columns($grid-columns, $class, offset);
}

// Grid system
//
// Generate semantic grid columns with these mixins.

// Centered container element
@mixin container-fixed($gutter: $grid-gutter-width) {
  margin-right: auto;
  margin-left: auto;
  padding-left:  ($gutter / 2);
  padding-right: ($gutter / 2);
  @include clearfix;
}

// Creates a wrapper for a series of columns
@mixin make-row($gutter: $grid-gutter-width) {
  margin-left:  ceil(($gutter / -2));
  margin-right: floor(($gutter / -2));
  @include clearfix;
}

// Generate the extra small columns
@mixin make-xs-column($columns, $gutter: $grid-gutter-width) {
  position: relative;
  float: left;
  width: percentage(($columns / $grid-columns));
  min-height: 1px;
  padding-left:  ($gutter / 2);
  padding-right: ($gutter / 2);
}
@mixin make-xs-column-offset($columns) {
  margin-left: percentage(($columns / $grid-columns));
}
@mixin make-xs-column-push($columns) {
  left: percentage(($columns / $grid-columns));
}
@mixin make-xs-column-pull($columns) {
  right: percentage(($columns / $grid-columns));
}

// Generate the small columns
@mixin make-sm-column($columns, $gutter: $grid-gutter-width) {
  position: relative;
  min-height: 1px;
  padding-left:  ($gutter / 2);
  padding-right: ($gutter / 2);

  @media (min-width: $screen-sm-min) {
    float: left;
    width: percentage(($columns / $grid-columns));
  }
}
@mixin make-sm-column-offset($columns) {
  @media (min-width: $screen-sm-min) {
    margin-left: percentage(($columns / $grid-columns));
  }
}
@mixin make-sm-column-push($columns) {
  @media (min-width: $screen-sm-min) {
    left: percentage(($columns / $grid-columns));
  }
}
@mixin make-sm-column-pull($columns) {
  @media (min-width: $screen-sm-min) {
    right: percentage(($columns / $grid-columns));
  }
}

// Generate the medium columns
@mixin make-md-column($columns, $gutter: $grid-gutter-width) {
  position: relative;
  min-height: 1px;
  padding-left:  ($gutter / 2);
  padding-right: ($gutter / 2);

  @media (min-width: $screen-md-min) {
    float: left;
    width: percentage(($columns / $grid-columns));
  }
}
@mixin make-md-column-offset($columns) {
  @media (min-width: $screen-md-min) {
    margin-left: percentage(($columns / $grid-columns));
  }
}
@mixin make-md-column-push($columns) {
  @media (min-width: $screen-md-min) {
    left: percentage(($columns / $grid-columns));
  }
}
@mixin make-md-column-pull($columns) {
  @media (min-width: $screen-md-min) {
    right: percentage(($columns / $grid-columns));
  }
}

// Generate the large columns
@mixin make-lg-column($columns, $gutter: $grid-gutter-width) {
  position: relative;
  min-height: 1px;
  padding-left:  ($gutter / 2);
  padding-right: ($gutter / 2);

  @media (min-width: $screen-lg-min) {
    float: left;
    width: percentage(($columns / $grid-columns));
  }
}
@mixin make-lg-column-offset($columns) {
  @media (min-width: $screen-lg-min) {
    margin-left: percentage(($columns / $grid-columns));
  }
}
@mixin make-lg-column-push($columns) {
  @media (min-width: $screen-lg-min) {
    left: percentage(($columns / $grid-columns));
  }
}
@mixin make-lg-column-pull($columns) {
  @media (min-width: $screen-lg-min) {
    right: percentage(($columns / $grid-columns));
  }
}

// CSS image replacement
//
// Heads up! v3 launched with only `.hide-text()`, but per our pattern for
// mixins being reused as classes with the same name, this doesn't hold up. As
// of v3.0.1 we have added `.text-hide()` and deprecated `.hide-text()`.
//
// Source: https://github.com/h5bp/html5-boilerplate/commit/aa0396eae757

// Deprecated as of v3.0.1 (will be removed in v4)
@mixin hide-text() {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

// New mixin to use as of v3.0.1
@mixin text-hide() {
  @include hide-text;
}

// Image Mixins
// - Responsive image
// - Retina image


// Responsive image
//
// Keep images from scaling beyond the width of their parents.
@mixin img-responsive($display: block) {
  display: $display;
  max-width: 100%; // Part 1: Set a maximum relative to the parent
  height: auto; // Part 2: Scale the height according to the width, otherwise you get stretching
}


// Retina image
//
// Short retina mixin for setting background-image and -size. Note that the
// spelling of `min--moz-device-pixel-ratio` is intentional.
@mixin img-retina($file-1x, $file-2x, $width-1x, $height-1x) {
  background-image: url(if($bootstrap-sass-asset-helper, twbs-image-path("#{$file-1x}"), "#{$file-1x}"));

  @media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (   min--moz-device-pixel-ratio: 2),
  only screen and (     -o-min-device-pixel-ratio: 2/1),
  only screen and (        min-device-pixel-ratio: 2),
  only screen and (                min-resolution: 192dpi),
  only screen and (                min-resolution: 2dppx) {
    background-image: url(if($bootstrap-sass-asset-helper, twbs-image-path("#{$file-2x}"), "#{$file-2x}"));
    background-size: $width-1x $height-1x;
  }
}

// Labels

@mixin label-variant($color) {
  background-color: $color;

  &[href] {
    &:hover,
    &:focus {
      background-color: darken($color, 10%);
    }
  }
}

// List Groups

@mixin list-group-item-variant($state, $background, $color) {
  .list-group-item-#{$state} {
    color: $color;
    background-color: $background;

    // [converter] extracted a&, button& to a.list-group-item-#{$state}, button.list-group-item-#{$state}
  }

  a.list-group-item-#{$state},
  button.list-group-item-#{$state} {
    color: $color;

    .list-group-item-heading {
      color: inherit;
    }

    &:hover,
    &:focus {
      color: $color;
      background-color: darken($background, 5%);
    }
    &.active,
    &.active:hover,
    &.active:focus {
      color: #fff;
      background-color: $color;
      border-color: $color;
    }
  }
}

// Horizontal dividers
//
// Dividers (basically an hr) within dropdowns and nav lists

@mixin nav-divider($color: #e5e5e5) {
  height: 1px;
  margin: (($line-height-computed / 2) - 1) 0;
  overflow: hidden;
  background-color: $color;
}

// Navbar vertical align
//
// Vertically center elements in the navbar.
// Example: an element has a height of 30px, so write out `.navbar-vertical-align(30px);` to calculate the appropriate top margin.

@mixin navbar-vertical-align($element-height) {
  margin-top: (($navbar-height - $element-height) / 2);
  margin-bottom: (($navbar-height - $element-height) / 2);
}

// Opacity

@mixin opacity($opacity) {
  opacity: $opacity;
  // IE8 filter
  $opacity-ie: ($opacity * 100);
  filter: alpha(opacity=$opacity-ie);
}

// Pagination

@mixin pagination-size($padding-vertical, $padding-horizontal, $font-size, $line-height, $border-radius) {
  > li {
    > a,
    > span {
      padding: $padding-vertical $padding-horizontal;
      font-size: $font-size;
      line-height: $line-height;
    }
    &:first-child {
      > a,
      > span {
        @include border-left-radius($border-radius);
      }
    }
    &:last-child {
      > a,
      > span {
        @include border-right-radius($border-radius);
      }
    }
  }
}

// Panels

@mixin panel-variant($border, $heading-text-color, $heading-bg-color, $heading-border) {
  border-color: $border;

  & > .panel-heading {
    color: $heading-text-color;
    background-color: $heading-bg-color;
    border-color: $heading-border;

    + .panel-collapse > .panel-body {
      border-top-color: $border;
    }
    .badge {
      color: $heading-bg-color;
      background-color: $heading-text-color;
    }
  }
  & > .panel-footer {
    + .panel-collapse > .panel-body {
      border-bottom-color: $border;
    }
  }
}

// Progress bars

@mixin progress-bar-variant($color) {
  background-color: $color;

  // Deprecated parent class requirement as of v3.2.0
  .progress-striped & {
    @include gradient-striped;
  }
}

// Reset filters for IE
//
// When you need to remove a gradient background, do not forget to use this to reset
// the IE filter for IE9 and below.

@mixin reset-filter() {
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
}

@mixin reset-text() {
  font-family: $font-family-base;
  // We deliberately do NOT reset font-size.
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: $line-height-base;
  text-align: left; // Fallback for where `start` is not supported
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
}

// Resize anything

@mixin resizable($direction) {
  resize: $direction; // Options: horizontal, vertical, both
  overflow: auto; // Per CSS3 UI, `resize` only applies when `overflow` isn't `visible`
}

// Responsive utilities

//
// More easily include all the states for responsive-utilities.less.
// [converter] $parent hack
@mixin responsive-visibility($parent) {
  #{$parent} {
    display: block !important;
  }
  table#{$parent}  { display: table !important; }
  tr#{$parent}     { display: table-row !important; }
  th#{$parent},
  td#{$parent}     { display: table-cell !important; }
}

// [converter] $parent hack
@mixin responsive-invisibility($parent) {
  #{$parent} {
    display: none !important;
  }
}

// Sizing shortcuts

@mixin size($width, $height) {
  width: $width;
  height: $height;
}

@mixin square($size) {
  @include size($size, $size);
}

// WebKit-style focus

@mixin tab-focus() {
  // Default
  outline: thin dotted;
  // WebKit
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

// Tables

@mixin table-row-variant($state, $background) {
  // Exact selectors below required to override `.table-striped` and prevent
  // inheritance to nested tables.
  .table > thead > tr,
  .table > tbody > tr,
  .table > tfoot > tr {
    > td.#{$state},
    > th.#{$state},
    &.#{$state} > td,
    &.#{$state} > th {
      background-color: $background;
    }
  }

  // Hover states for `.table-hover`
  // Note: this is not available for cells or rows within `thead` or `tfoot`.
  .table-hover > tbody > tr {
    > td.#{$state}:hover,
    > th.#{$state}:hover,
    &.#{$state}:hover > td,
    &:hover > .#{$state},
    &.#{$state}:hover > th {
      background-color: darken($background, 5%);
    }
  }
}

// Typography

// [converter] $parent hack
@mixin text-emphasis-variant($parent, $color) {
  #{$parent} {
    color: $color;
  }
  a#{$parent}:hover,
  a#{$parent}:focus {
    color: darken($color, 10%);
  }
}

// Text overflow
// Requires inline-block or block for proper styling

@mixin text-overflow() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// Vendor Prefixes
//
// All vendor mixins are deprecated as of v3.2.0 due to the introduction of
// Autoprefixer in our Gruntfile. They will be removed in v4.

// - Animations
// - Backface visibility
// - Box shadow
// - Box sizing
// - Content columns
// - Hyphens
// - Placeholder text
// - Transformations
// - Transitions
// - User Select


// Animations
@mixin animation($animation) {
  -webkit-animation: $animation;
       -o-animation: $animation;
          animation: $animation;
}
@mixin animation-name($name) {
  -webkit-animation-name: $name;
          animation-name: $name;
}
@mixin animation-duration($duration) {
  -webkit-animation-duration: $duration;
          animation-duration: $duration;
}
@mixin animation-timing-function($timing-function) {
  -webkit-animation-timing-function: $timing-function;
          animation-timing-function: $timing-function;
}
@mixin animation-delay($delay) {
  -webkit-animation-delay: $delay;
          animation-delay: $delay;
}
@mixin animation-iteration-count($iteration-count) {
  -webkit-animation-iteration-count: $iteration-count;
          animation-iteration-count: $iteration-count;
}
@mixin animation-direction($direction) {
  -webkit-animation-direction: $direction;
          animation-direction: $direction;
}
@mixin animation-fill-mode($fill-mode) {
  -webkit-animation-fill-mode: $fill-mode;
          animation-fill-mode: $fill-mode;
}

// Backface visibility
// Prevent browsers from flickering when using CSS 3D transforms.
// Default value is `visible`, but can be changed to `hidden`

@mixin backface-visibility($visibility){
  -webkit-backface-visibility: $visibility;
     -moz-backface-visibility: $visibility;
          backface-visibility: $visibility;
}

// Drop shadows
//
// Note: Deprecated `.box-shadow()` as of v3.1.0 since all of Bootstrap's
// supported browsers that have box shadow capabilities now support it.

@mixin box-shadow($shadow...) {
  -webkit-box-shadow: $shadow; // iOS <4.3 & Android <4.1
          box-shadow: $shadow;
}

// Box sizing
@mixin box-sizing($boxmodel) {
  -webkit-box-sizing: $boxmodel;
     -moz-box-sizing: $boxmodel;
          box-sizing: $boxmodel;
}

// CSS3 Content Columns
@mixin content-columns($column-count, $column-gap: $grid-gutter-width) {
  -webkit-column-count: $column-count;
     -moz-column-count: $column-count;
          column-count: $column-count;
  -webkit-column-gap: $column-gap;
     -moz-column-gap: $column-gap;
          column-gap: $column-gap;
}

// Optional hyphenation
@mixin hyphens($mode: auto) {
  word-wrap: break-word;
  -webkit-hyphens: $mode;
     -moz-hyphens: $mode;
      -ms-hyphens: $mode; // IE10+
       -o-hyphens: $mode;
          hyphens: $mode;
}

// Placeholder text
@mixin placeholder($color: $input-color-placeholder) {
  // Firefox
  &::-moz-placeholder {
    color: $color;
    opacity: 1; // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526
  }
  &:-ms-input-placeholder { color: $color; } // Internet Explorer 10+
  &::-webkit-input-placeholder  { color: $color; } // Safari and Chrome
}

// Transformations
@mixin scale($ratio...) {
  -webkit-transform: scale($ratio);
      -ms-transform: scale($ratio); // IE9 only
       -o-transform: scale($ratio);
          transform: scale($ratio);
}

@mixin scaleX($ratio) {
  -webkit-transform: scaleX($ratio);
      -ms-transform: scaleX($ratio); // IE9 only
       -o-transform: scaleX($ratio);
          transform: scaleX($ratio);
}
@mixin scaleY($ratio) {
  -webkit-transform: scaleY($ratio);
      -ms-transform: scaleY($ratio); // IE9 only
       -o-transform: scaleY($ratio);
          transform: scaleY($ratio);
}
@mixin skew($x, $y) {
  -webkit-transform: skewX($x) skewY($y);
      -ms-transform: skewX($x) skewY($y); // See https://github.com/twbs/bootstrap/issues/4885; IE9+
       -o-transform: skewX($x) skewY($y);
          transform: skewX($x) skewY($y);
}
@mixin translate($x, $y) {
  -webkit-transform: translate($x, $y);
      -ms-transform: translate($x, $y); // IE9 only
       -o-transform: translate($x, $y);
          transform: translate($x, $y);
}
@mixin translate3d($x, $y, $z) {
  -webkit-transform: translate3d($x, $y, $z);
          transform: translate3d($x, $y, $z);
}
@mixin rotate($degrees) {
  -webkit-transform: rotate($degrees);
      -ms-transform: rotate($degrees); // IE9 only
       -o-transform: rotate($degrees);
          transform: rotate($degrees);
}
@mixin rotateX($degrees) {
  -webkit-transform: rotateX($degrees);
      -ms-transform: rotateX($degrees); // IE9 only
       -o-transform: rotateX($degrees);
          transform: rotateX($degrees);
}
@mixin rotateY($degrees) {
  -webkit-transform: rotateY($degrees);
      -ms-transform: rotateY($degrees); // IE9 only
       -o-transform: rotateY($degrees);
          transform: rotateY($degrees);
}
@mixin perspective($perspective) {
  -webkit-perspective: $perspective;
     -moz-perspective: $perspective;
          perspective: $perspective;
}
@mixin perspective-origin($perspective) {
  -webkit-perspective-origin: $perspective;
     -moz-perspective-origin: $perspective;
          perspective-origin: $perspective;
}
@mixin transform-origin($origin) {
  -webkit-transform-origin: $origin;
     -moz-transform-origin: $origin;
      -ms-transform-origin: $origin; // IE9 only
          transform-origin: $origin;
}


// Transitions

@mixin transition($transition...) {
  -webkit-transition: $transition;
       -o-transition: $transition;
          transition: $transition;
}
@mixin transition-property($transition-property...) {
  -webkit-transition-property: $transition-property;
          transition-property: $transition-property;
}
@mixin transition-delay($transition-delay) {
  -webkit-transition-delay: $transition-delay;
          transition-delay: $transition-delay;
}
@mixin transition-duration($transition-duration...) {
  -webkit-transition-duration: $transition-duration;
          transition-duration: $transition-duration;
}
@mixin transition-timing-function($timing-function) {
  -webkit-transition-timing-function: $timing-function;
          transition-timing-function: $timing-function;
}
@mixin transition-transform($transition...) {
  -webkit-transition: -webkit-transform $transition;
     -moz-transition: -moz-transform $transition;
       -o-transition: -o-transform $transition;
          transition: transform $transition;
}


// User select
// For selecting text on the page

@mixin user-select($select) {
  -webkit-user-select: $select;
     -moz-user-select: $select;
      -ms-user-select: $select; // IE10+
          user-select: $select;
}
