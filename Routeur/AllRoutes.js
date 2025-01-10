import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/carte", "La carte", "/pages/carte.html"),
    new Route("/reservation", "les réservations", "/pages/reservation.html"),
    new Route("/les réservations", "les réservations", "/pages/lesréservations.html"),
];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";