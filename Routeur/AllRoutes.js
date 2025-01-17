import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/carte", "La carte", "/pages/carte.html"),
    new Route("/allResa", "Vos réservations", "/pages/reservation/allResa.html"),
    new Route("/reserver", "Réserver", "/pages/reservation/reserver.html"),
    new Route("/signin", "connexion", "/pages/auth/signin.html", "/js/auth/signin.js"),
    new Route("/signup", "inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/account", "mon compte", "/pages/auth/account.html"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html"),
];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";