export const HEADER_MENU_ITEMS = [`Автомобили`, `Контакты`, `Услуги`, `Вакансии`];

export const FOOTER_MENU_ITEMS = [`Корпоративным клиентам`, `Клиентам`, `Аренда авто`, `Каршеринг`, `Как продать авто`, `Traid-in`, `Test draiv`];

export const STARS = [`1`, `2`, `3`, `4`, `5`];

export const Key = {
  ESC: `Esc`,
  ESCAPE: `Escape`
};

export const Contact = {
  ADDRESS: {
    title: `Адрес`,
    value: {
      town: `Санкт-Петербург`,
      street: `набережная реки Карповки, дом 5`
    }
  },
  MODE: {
    title: `Режим работы`,
    value: `Ежедневно, с 10:00 до 21:00`
  },
  PHONE: {
    title: `Телефон`,
    value: `8 (800) 333-55-99`
  },
  EMAIL: {
    title: `E-mail`,
    value: `info@avto-moto.ru`
  },
};

export const SliderControl = {
  NEXT: `next`,
  BACK: `back`
};

export const Tab = {
  SPECIFICATION: `Характеристики`,
  REVIEWS: `Отзывы`,
  CONTACTS: `Контакты`
};

export const SpecificationAlias = {
  TRANSMISSION: `Трансмиссия`,
  POWER: `Мощность двигателя, л.с.`,
  TYPE: `Тип двигателя`,
  DRIVE: `Привод`,
  VOLUME: `Объем двигателя, л`,
  TORQUE: `Макс. крутящий момент`,
  CYLINDERS: `Количество цилиндров`
};

export const FormRequiredInput = {
  NAME: `username`,
  COMMENT: `comment`
};

export const defaultReview = {
  username: ``,
  rating: ``,
  advantages: ``,
  disadvantages: ``,
  comment: ``
};

export const defaultTouchedStatus = {
  username: false,
  comment: false,
};

export const defaultAnimation = {
  fadein: true,
  shake: false,
};

export const IconType = {
  BACK: {
    name: `arrow-back`,
    width: 20,
    height: 13,
  },
  NEXT: {
    name: `arrow-next`,
    width: 20,
    height: 13,
  },
  FUEL: {
    name: `gas`,
    width: 24,
    height: 22,
   },
  TRANSMISSION: {
    name: `manual`,
    width: 26,
    height: 24,
  },
  POWER: {
    name: `horse`,
    width: 32,
    height: 21,
  },
  VOLUME: {
    name: `motor`,
    width: 30,
    height: 23,
  },
  STAR: {
    name: `star`,
    width: 17,
    height: 16,
  },

  STAR_LARGE: {
    name: `star`,
    width: 27,
    height: 25,
  }
};

export const MapParam = {
  LATITUDE: `59.968`,
  LONGITUDE: `30.320`,
  WIDTH: 431,
  HEIGHT: 271,
  ZOOM: 15
};

export const PlacemarkParam = {
  LATITUDE: `59.968137`,
  LONGITUDE: `30.316263`,
  WIDTH: 32,
  HEIGHT: 40,
  IMAGE: `img/pin.svg`
};
