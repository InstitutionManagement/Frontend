import Dashboard from '../views/Dashboard/Dashboard';
import UserProfile from '../views/UserProfile/UserProfile';
import TableList from '../views/TableList/TableList';
// import Typography from 'views/Typography/Typography';
import Icons from '../views/Icons/Icons';
// import Maps from 'views/Maps/Maps';
// import Notifications from 'views/Notifications/Notifications';
import TrustListing from '../views/Trust/TrustListing/TrustListing';
import CreateTrust from '../views/Trust/CreateTrust/CreateTrust';
import CreateSuperAdmin from '../views/Users/SuperAdmin/CreateSuperAdmin/CreateSuperAdmin';
import SuperAdminListing from '../views/Users/SuperAdmin/SuperAdminListing/SuperAdminListing';

export const SUPER_ADMIN_ROUTES = [
  { path: '/dashboard', name: 'Dashboard', icon: 'pe-7s-graph', component: Dashboard },
  { path: '/create-trust', name: 'Create Trust', icon: 'pe-7s-user', component: CreateTrust },
  { path: '/trust-listing', name: 'Trust Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-super-admin', name: 'Create Super Admin', icon: 'pe-7s-user', component: CreateSuperAdmin},
  { path: '/super-admin-listing', name: 'Super Admin Listing', icon: 'pe-7s-user', component: SuperAdminListing },
  { path: '/create-trust-admin', name: 'Create Trust Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/trust-admin-listing', name: 'Trust Admin Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-institution-admin', name: 'Create Institution Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/institution-admin-listing', name: 'Trust Admin Listing', icon: 'pe-7s-user', component: TrustListing },


  // { path: '/table', name: 'Table List', icon: 'pe-7s-note2', component: TableList, children:true },
  // { path: '/icons', name: 'Icons', icon: 'pe-7s-science', component: Icons, children:true },
  // { path: '/table', name: 'Table List', icon: 'pe-7s-note2', component: TableList },
  // { path: '/typography', name: 'Typography', icon: 'pe-7s-news-paper', component: Typography },
  // { path: '/icons', name: 'Icons', icon: 'pe-7s-science', component: Icons },
  // { path: '/maps', name: 'Maps', icon: 'pe-7s-map-marker', component: Maps },
  // { path: '/notifications', name: 'Notifications', icon: 'pe-7s-bell', component: Notifications },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
];

export const TRUST_ADMIN_ROUTES = [
  { path: '/dashboard', name: 'Dashboard', icon: 'pe-7s-graph', component: Dashboard },
  { path: '/create-trust', name: 'Create Trust', icon: 'pe-7s-user', component: CreateTrust },
  { path: '/trust-listing', name: 'Trust Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-super-admin', name: 'Create Super Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/super-admin-listing', name: 'Super Admin Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-trust-admin', name: 'Create Trust Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/trust-admin-listing', name: 'Trust Admin Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-institution-admin', name: 'Create Institution Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/institution-admin-listing', name: 'Trust Admin Listing', icon: 'pe-7s-user', component: TrustListing },


  // { path: '/table', name: 'Table List', icon: 'pe-7s-note2', component: TableList, children:true },
  // { path: '/icons', name: 'Icons', icon: 'pe-7s-science', component: Icons, children:true },
  // { path: '/table', name: 'Table List', icon: 'pe-7s-note2', component: TableList },
  // { path: '/typography', name: 'Typography', icon: 'pe-7s-news-paper', component: Typography },
  // { path: '/icons', name: 'Icons', icon: 'pe-7s-science', component: Icons },
  // { path: '/maps', name: 'Maps', icon: 'pe-7s-map-marker', component: Maps },
  // { path: '/notifications', name: 'Notifications', icon: 'pe-7s-bell', component: Notifications },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
];

export const INSTITUTION_ADMIN_ROUTES = [
  { path: '/dashboard', name: 'Dashboard', icon: 'pe-7s-graph', component: Dashboard },
  { path: '/create-trust', name: 'Create Trust', icon: 'pe-7s-user', component: CreateTrust },
  { path: '/trust-listing', name: 'Trust Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-super-admin', name: 'Create Super Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/super-admin-listing', name: 'Super Admin Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-trust-admin', name: 'Create Trust Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/trust-admin-listing', name: 'Trust Admin Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-institution-admin', name: 'Create Institution Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/institution-admin-listing', name: 'Trust Admin Listing', icon: 'pe-7s-user', component: TrustListing },


  // { path: '/table', name: 'Table List', icon: 'pe-7s-note2', component: TableList, children:true },
  // { path: '/icons', name: 'Icons', icon: 'pe-7s-science', component: Icons, children:true },
  // { path: '/table', name: 'Table List', icon: 'pe-7s-note2', component: TableList },
  // { path: '/typography', name: 'Typography', icon: 'pe-7s-news-paper', component: Typography },
  // { path: '/icons', name: 'Icons', icon: 'pe-7s-science', component: Icons },
  // { path: '/maps', name: 'Maps', icon: 'pe-7s-map-marker', component: Maps },
  // { path: '/notifications', name: 'Notifications', icon: 'pe-7s-bell', component: Notifications },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
];

export const STAFF_ROUTES = [
  { path: '/dashboard', name: 'Dashboard', icon: 'pe-7s-graph', component: Dashboard },
  { path: '/create-trust', name: 'Create Trust', icon: 'pe-7s-user', component: CreateTrust },
  { path: '/trust-listing', name: 'Trust Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-super-admin', name: 'Create Super Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/super-admin-listing', name: 'Super Admin Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-trust-admin', name: 'Create Trust Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/trust-admin-listing', name: 'Trust Admin Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-institution-admin', name: 'Create Institution Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/institution-admin-listing', name: 'Trust Admin Listing', icon: 'pe-7s-user', component: TrustListing },


  // { path: '/table', name: 'Table List', icon: 'pe-7s-note2', component: TableList, children:true },
  // { path: '/icons', name: 'Icons', icon: 'pe-7s-science', component: Icons, children:true },
  // { path: '/table', name: 'Table List', icon: 'pe-7s-note2', component: TableList },
  // { path: '/typography', name: 'Typography', icon: 'pe-7s-news-paper', component: Typography },
  // { path: '/icons', name: 'Icons', icon: 'pe-7s-science', component: Icons },
  // { path: '/maps', name: 'Maps', icon: 'pe-7s-map-marker', component: Maps },
  // { path: '/notifications', name: 'Notifications', icon: 'pe-7s-bell', component: Notifications },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
];

export const STUDENT_ROUTES = [
  { path: '/dashboard', name: 'Dashboard', icon: 'pe-7s-graph', component: Dashboard },
  { path: '/create-trust', name: 'Create Trust', icon: 'pe-7s-user', component: CreateTrust },
  { path: '/trust-listing', name: 'Trust Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-super-admin', name: 'Create Super Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/super-admin-listing', name: 'Super Admin Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-trust-admin', name: 'Create Trust Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/trust-admin-listing', name: 'Trust Admin Listing', icon: 'pe-7s-user', component: TrustListing },
  { path: '/create-institution-admin', name: 'Create Institution Admin', icon: 'pe-7s-user', component: UserProfile},
  { path: '/institution-admin-listing', name: 'Trust Admin Listing', icon: 'pe-7s-user', component: TrustListing },


  // { path: '/table', name: 'Table List', icon: 'pe-7s-note2', component: TableList, children:true },
  // { path: '/icons', name: 'Icons', icon: 'pe-7s-science', component: Icons, children:true },
  // { path: '/table', name: 'Table List', icon: 'pe-7s-note2', component: TableList },
  // { path: '/typography', name: 'Typography', icon: 'pe-7s-news-paper', component: Typography },
  // { path: '/icons', name: 'Icons', icon: 'pe-7s-science', component: Icons },
  // { path: '/maps', name: 'Maps', icon: 'pe-7s-map-marker', component: Maps },
  // { path: '/notifications', name: 'Notifications', icon: 'pe-7s-bell', component: Notifications },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
];



