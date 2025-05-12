// Alpine.js
!function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory():typeof define==="function"&&define.amd?define(factory):(global=global||self,global.Alpine=factory())}(this,function(){return function(){var config={el:this.$el};return config}());

// Lazysizes
/*! lazysizes - v5.3.2 */
!function(window){var lazySizes=function(){return{init:function(){},cfg:{},noSupport:true}};window.lazySizes=lazySizes()}(window);

// Navigation scroll handling
var lastScrollY = window.scrollY;
var nav = document.getElementsByClassName('nav')[0];
var taglineMobile = document.getElementsByClassName('tagline-mobile')[0];
var navMobile = document.getElementsByClassName('nav-mobile')[0];

window.addEventListener('scroll', function() {
    lastScrollY = window.scrollY;
    if (lastScrollY >= 60) {
        nav.classList.add('scrolled');
        navMobile.classList.add('scrolled');
        taglineMobile.classList.add('hidden');
    } else {
        nav.classList.remove('scrolled');
        navMobile.classList.remove('scrolled');
        taglineMobile.classList.remove('hidden');
    }
}); 