#!/bin/sh
mkdir -p public/vendors;

cp node_modules/angular/angular.min.js public/vendors;
cp node_modules/angular/angular.min.js.map public/vendors;

cp node_modules/bootstrap/dist/css/bootstrap.min.css public/vendors;
cp node_modules/bootstrap/dist/css/bootstrap.min.css.map public/vendors;

cp node_modules/angular-route/angular-route.min.js public/vendors;
cp node_modules/angular-route/angular-route.min.js.map public/vendors;

cp node_modules/bootstrap/dist/js/bootstrap.min.js public/vendors;

cp node_modules/jquery/dist/jquery.min.js public/vendors;

cp node_modules/angular-animate/angular-animate.min.js public/vendors;
