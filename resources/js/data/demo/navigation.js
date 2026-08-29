import { routes } from '../../config/routes';
export const navigation = [
 { id:'accueil', label:'Accueil', icon:'solar:home-angle-broken', href:routes.dashboard },
 { id:'annonces', label:'Annonces', icon:'solar:magnifer-broken', href:routes.listings, badge:'140+' },
 { id:'travail', label:'Travail', icon:'solar:case-minimalistic-broken', href:routes.work, badge:'48' },
 { id:'logement', label:'Logement', icon:'solar:buildings-broken', href:routes.housing, badge:'24' },
 { id:'vehicules', label:'Véhicules', icon:'solar:bus-broken', href:routes.vehicles, badge:'18' },
 { id:'evenements', label:'Événements', icon:'solar:calendar-broken', href:routes.events, badge:'6' },
 { id:'guide', label:'Guide', icon:'solar:book-broken', href:routes.guide },
 { id:'communaute', label:'Communauté', icon:'solar:users-group-rounded-broken', href:routes.community, badge:'2.4k' },
 { id:'messages', label:'Messages', icon:'solar:chat-round-dots-broken', href:routes.messages, badge:'14' },
 { id:'recherches', label:'Mes recherches', icon:'solar:compass-broken', href:routes.searches },
 { id:'favoris', label:'Mes favoris', icon:'solar:heart-broken', href:routes.favorites, badge:'3' },
 { id:'mes_annonces', label:'Mes annonces', icon:'solar:tag-broken', href:routes.myListings, badge:'1' },
];
export const mobileNavigation = navigation.filter(({id}) => ['accueil','annonces','messages'].includes(id));
