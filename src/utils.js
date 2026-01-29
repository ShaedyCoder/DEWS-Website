export const ROUTES = {
  Home: "/Home",
  About: "/About",
  Solutions: "/Solutions",
  ROSystems: "/ROSystems",
  DesalinatedWater: "/DesalinatedWater",
  FreshwaterSolutions: "/FreshwaterSolutions",
  Fleet: "/Fleet",
  News: "/News",
  Contact: "/Contact",
}

export function createPageUrl(pageName) {
  return ROUTES[pageName] || `/${pageName}`
}
