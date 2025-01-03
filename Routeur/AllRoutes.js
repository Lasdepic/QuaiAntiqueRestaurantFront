import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Galerie", "Galerie", "/pages/galerie.html"),
    new Route("/La carte", "La carte", "/pages/lacarte.html"),
    new Route("/les réservations", "les réservations", "/pages/lesréservations.html"),
    new Route("/les réservations", "les réservations", "/pages/lesréservations.html")
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";