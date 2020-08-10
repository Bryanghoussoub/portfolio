export const copyright = `© 2015-${new Date().getFullYear()} X-tends S.A.R.L. - all rights reserved.`;

export const socialMediaLinks: Array<any> = [
  {
    icon: 'fab fa-linkedin-in',
    hoverClass: 'linkedin',
    url: 'https://www.linkedin.com/company/x-tends/',
  },
  {
    icon: 'fab fa-facebook-f',
    hoverClass: 'facebook',
    url: 'https://www.facebook.com/pg/xtends/about/',
  }
];

export const googleMapStyles: Array<any> = [
  {
    featureType: 'administrative',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
      {
        saturation: -100,
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
      {
        saturation: -100,
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
      {
        saturation: -10,
      },
      {
        lightness: 30,
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        saturation: -60,
      },
      {
        lightness: 10,
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        saturation: -60,
      },
      {
        lightness: 60,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
      {
        saturation: -100,
      },
      {
        lightness: 60,
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
      {
        saturation: -100,
      },
      {
        lightness: 60,
      },
    ],
  },
];

export const googleMapOptions: object = {
  lat: 33.897353,
  lng: 35.571229,
  zoom: 15.5,
  disableDefaultUI: true,
  keyboardShortcuts: false,
  zoomControl: false,
  scrollwheel: false,
  mapTypeId: 'roadmap',
  styles: googleMapStyles,
};

export const companyInfo: object = {
  lat: 33.899227,
  lng: 35.571002,
  address1: 'Zalka, Amaret Chalhoub, Amara 78, 1st Floor',
  // address2: 'Facing Hospital Rizk, Amara 78, First Floor',
  // tel: 'T: +961 4 776 889',
  mobile: 'M: +961 79 123 347',
  email: 'info@x-tends.com',
};
