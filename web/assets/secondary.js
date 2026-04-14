function toggleNav() {
    var topNav = document.getElementById("top-nav");
    var homeLink = document.getElementById("home-link");

    var topNavClasses = "main-nav flex justify-between items-center py-6 md:space-x-10";
    var homeLinkClasses = "home text-base font-bold text-gray-300 hover:text-secondary";

    if (topNav.className === topNavClasses) {
        topNav.className = "main-nav responsive";
    } else {
        topNav.className = topNavClasses;
    }

    if (homeLink.className === homeLinkClasses) {
        homeLink.className += " responsive";
    } else {
        homeLink.className = homeLinkClasses;
    }
}