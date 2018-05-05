import Dashboard from '../views/Dashboard/Dashboard';
import UserProfile from '../views/UserProfile/UserProfile';
import TrustListing from '../views/Trust/TrustListing/TrustListing';
import CreateTrust from '../views/Trust/CreateTrust/CreateTrust';
import CreateSuperAdmin from '../views/Users/SuperAdmin/CreateSuperAdmin/CreateSuperAdmin';
import SuperAdminListing from '../views/Users/SuperAdmin/SuperAdminListing/SuperAdminListing';
import Login from '../views/Login/Login';
import TrustAdminListing from '../views/Users/TrustAdmin/TrustAdminListing/TrustAdminListing';
import InstitutionListing from '../views/Institution/InstitutionListing/InstitutionListing';
let Data = JSON.parse(localStorage.getItem('user'));
Data = Data ? Data.user : { user_type: {} };

const SUPER_ADMIN_SIDEBAR = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    component: Dashboard,
    visible: true
  },
  {
    path: null,
    name: 'User Management',
    icon: 'pe-7s-users',
    visible: true,
    children: [
      {
        path: '/create-super-admin',
        name: 'Create Super Admin',
        icon: 'pe-7s-add-user',
        component: CreateSuperAdmin,
        visible: true
      },
      {
        path: '/super-admin-listing',
        name: 'Super Admin Listing',
        icon: 'pe-7s-menu',
        component: SuperAdminListing,
        visible: true
      },
      {
        path: '/trust-admin-listing',
        name: 'Trust Admin Listing',
        icon: 'pe-7s-menu',
        component: TrustAdminListing,
        visible: true
      }
    ]
  },
  {
    path: null,
    name: 'Trust Management',
    icon: 'pe-7s-plugin',
    visible: true,
    children: [
      {
        path: '/create-trust',
        name: 'Create Trust',
        icon: 'pe-7s-home',
        component: CreateTrust,
        visible: true
      },
      {
        path: '/trust-listing',
        name: 'Trust Listing',
        icon: 'pe-7s-albums',
        component: TrustListing,
        visible: true
      },
      {
        path: '/institution-listing',
        name: 'Institution Listing',
        icon: 'pe-7s-culture',
        component: InstitutionListing,
        visible: true
      }
    ]
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: 'pe-7s-user',
    component: UserProfile,
    visible: false
  },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
];

let SUPER_ADMIN_ROUTES = [];
SUPER_ADMIN_SIDEBAR.forEach((prop, key) => {
  if (prop.path !== null) {
    SUPER_ADMIN_ROUTES.push(prop);
  } else if (prop.path == null && prop.children.length > 0) {
    prop.children.forEach((cprop, ckey) => {
      SUPER_ADMIN_ROUTES.push(cprop);
    });
  }
});

const TRUST_ADMIN_SIDEBAR = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    component: Dashboard
  },
  {
    path: '/create-trust',
    name: 'Create Trust',
    icon: 'pe-7s-user',
    component: CreateTrust
  },
  {
    path: '/trust-listing',
    name: 'Trust Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-super-admin',
    name: 'Create Super Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/super-admin-listing',
    name: 'Super Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-trust-admin',
    name: 'Create Trust Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/trust-admin-listing',
    name: 'Trust Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-institution-admin',
    name: 'Create Institution Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/institution-admin-listing',
    name: 'Trust Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
];

let TRUST_ADMIN_ROUTES = [];
TRUST_ADMIN_SIDEBAR.forEach((prop, key) => {
  if (prop.path !== null) {
    TRUST_ADMIN_ROUTES.push(prop);
  } else if (prop.path == null && prop.children.length > 0) {
    prop.children.forEach((cprop, ckey) => {
      TRUST_ADMIN_ROUTES.push(cprop);
    });
  }
});

const INSTITUTION_ADMIN_SIDEBAR = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    component: Dashboard
  },
  {
    path: '/create-trust',
    name: 'Create Trust',
    icon: 'pe-7s-user',
    component: CreateTrust
  },
  {
    path: '/trust-listing',
    name: 'Trust Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-super-admin',
    name: 'Create Super Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/super-admin-listing',
    name: 'Super Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-trust-admin',
    name: 'Create Trust Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/trust-admin-listing',
    name: 'Trust Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-institution-admin',
    name: 'Create Institution Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/institution-admin-listing',
    name: 'Trust Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
];

let INSTITUTION_ADMIN_ROUTES = [];
INSTITUTION_ADMIN_SIDEBAR.forEach((prop, key) => {
  if (prop.path !== null) {
    INSTITUTION_ADMIN_ROUTES.push(prop);
  } else if (prop.path == null && prop.children.length > 0) {
    prop.children.forEach((cprop, ckey) => {
      INSTITUTION_ADMIN_ROUTES.push(cprop);
    });
  }
});

const STAFF_SIDEBAR = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    component: Dashboard
  },
  {
    path: '/create-trust',
    name: 'Create Trust',
    icon: 'pe-7s-user',
    component: CreateTrust
  },
  {
    path: '/trust-listing',
    name: 'Trust Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-super-admin',
    name: 'Create Super Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/super-admin-listing',
    name: 'Super Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-trust-admin',
    name: 'Create Trust Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/trust-admin-listing',
    name: 'Trust Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-institution-admin',
    name: 'Create Institution Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/institution-admin-listing',
    name: 'Trust Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
];

let STAFF_ROUTES = [];
STAFF_SIDEBAR.forEach((prop, key) => {
  if (prop.path !== null) {
    STAFF_ROUTES.push(prop);
  } else if (prop.path == null && prop.children.length > 0) {
    prop.children.forEach((cprop, ckey) => {
      STAFF_ROUTES.push(cprop);
    });
  }
});

const STUDENT_SIDEBAR = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'pe-7s-graph',
    component: Dashboard
  },
  {
    path: '/create-trust',
    name: 'Create Trust',
    icon: 'pe-7s-user',
    component: CreateTrust
  },
  {
    path: '/trust-listing',
    name: 'Trust Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-super-admin',
    name: 'Create Super Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/super-admin-listing',
    name: 'Super Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-trust-admin',
    name: 'Create Trust Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/trust-admin-listing',
    name: 'Trust Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  {
    path: '/create-institution-admin',
    name: 'Create Institution Admin',
    icon: 'pe-7s-user',
    component: UserProfile
  },
  {
    path: '/institution-admin-listing',
    name: 'Trust Admin Listing',
    icon: 'pe-7s-user',
    component: TrustListing
  },
  { redirect: true, path: '/', to: '/dashboard', name: 'Dashboard' }
];

let STUDENT_ROUTES = [];
STUDENT_SIDEBAR.forEach((prop, key) => {
  if (prop.path !== null) {
    STUDENT_ROUTES.push(prop);
  } else if (prop.path == null && prop.children.length > 0) {
    prop.children.forEach((cprop, ckey) => {
      STUDENT_ROUTES.push(cprop);
    });
  }
});

let Routes, SidebarRoutes;

switch (Data.user_type) {
  case 'SuperAdmin':
    Routes = SUPER_ADMIN_ROUTES;
    SidebarRoutes = SUPER_ADMIN_SIDEBAR;
    break;
  case 'TrustAdmin':
    Routes = TRUST_ADMIN_ROUTES;
    SidebarRoutes = TRUST_ADMIN_SIDEBAR;
    break;
  case 'InstitutionAdmin':
    Routes = INSTITUTION_ADMIN_ROUTES;
    SidebarRoutes = INSTITUTION_ADMIN_SIDEBAR;
    break;
  case 'Staff':
    Routes = STAFF_ROUTES;
    SidebarRoutes = STAFF_SIDEBAR;
    break;
  case 'Student':
    Routes = STUDENT_ROUTES;
    SidebarRoutes = STUDENT_SIDEBAR;
    break;
  default:
    Routes = [{ path: '/login', name: 'Logout', icon: 'pe-7s-power', component: Login }];
    SidebarRoutes = [{ path: '/login', name: 'Logout', icon: 'pe-7s-power', component: Login }];
    break;
}

export { Routes, SidebarRoutes };
