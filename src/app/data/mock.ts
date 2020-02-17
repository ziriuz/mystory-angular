import { Story } from '../model/story';
import { Product } from '../model/product';
export const STORIES: Story[] = [
  { id: 11, title: 'Dr Nice', author:'user1', drawing: 'http://rs557.ru/photo/2014-01-vangogh/20140104_145323.jpg' },
  { id: 12, title: 'Narco', author:'user1', drawing: 'http://rs557.ru/photo/2014-01-vangogh/20140104_145539.jpg'},
  { id: 13, title: 'Bombasto', author:'user1', drawing: 'http://rs557.ru/photo/2014-01-vangogh/20140104_150612.jpg'},
  { id: 14, title: 'Celeritas', author:'user1', drawing: 'http://rs557.ru/photo/2014-01-vangogh/20140104_150416.jpg'},
  { id: 15, title: 'Magneta', author:'user1', drawing: 'http://rs557.ru/photo/2014-01-vangogh/20140104_150535.jpg'},
  { id: 16, title: 'RubberMan', author:'user1', drawing: 'http://rs557.ru/photo/2014-01-vangogh/20140104_145714.jpg'},
  { id: 17, title: 'Dynama', author:'user1', drawing: 'http://rs557.ru/photo/2014-01-vangogh/20140104_150557.jpg'},
  { id: 18, title: 'Dr IQ', author:'user1', drawing: 'http://rs557.ru/photo/2014-01-vangogh/20140104_145635.jpg'},
  { id: 19, title: 'Magma', author:'user1', drawing: 'http://rs557.ru/photo/2014-01-vangogh/20140104_145450.jpg'},
  { id: 20, title: 'Tornado', author:'user1', drawing: 'http://rs557.ru/photo/2014-01-vangogh/20140104_150322.jpg'}
];

export const PRODUCTS: Product[] = 
  [
    {
      id: 101, sku:'8000', catalog_id: 1, name: "Подушка Зайка", image: "https://cdn.shopify.com/s/files/1/1706/3635/products/kluvonos_rabbit2_160x.png", isNew:false
    },
    {
      id: 102, sku:'8000', catalog_id: 1, name: "Подушка Лиса", image: "https://cdn.shopify.com/s/files/1/1706/3635/products/lisa_160x.png", isNew:true
    },
    {
      id: 103, sku:'8000', catalog_id: 1, name: "Подушка Мишка", image: "https://cdn.shopify.com/s/files/1/1706/3635/products/kluvonos_bear_160x.png", isNew:true
    },
    {
      id: 201, sku:'8000', catalog_id: 2, name: "Клювонос Мяу", image: "https://cdn.shopify.com/s/files/1/1706/3635/products/cat_red_2_160x.png", isNew:true
    },
    {
      id: 202, sku:'8000', catalog_id: 2, name: "Клювонос голубой со звездами", image: "https://cdn.shopify.com/s/files/1/1706/3635/products/IMG_7703_160x.jpg", isNew:false
    },
    {
      id: 203, sku:'8000', catalog_id: 2, name: "Клювонос Птицы", image: "https://cdn.shopify.com/s/files/1/1706/3635/products/kluvonos_birds2_160x.png", isNew:false
    },
    {
      id: 301, sku:'8000', catalog_id: 3, name: "Фиксатор ремней безопасности", image: "https://cdn.shopify.com/s/files/1/1706/3635/products/kreplenie4_160x.png", isNew:false
    },
    {
      id: 302, sku:'8000', catalog_id: 3, name: "Фиксатор для клювоноса", image: "https://cdn.shopify.com/s/files/1/1706/3635/products/2017-03-09_1.58.59_160x.png", isNew:false
    },
    {
      id: 401, sku:'8000', catalog_id: 4, name: "Одеяло для автокресла",  image: "https://cdn.shopify.com/s/files/1/1706/3635/products/cover_160x.png", isNew:true
    }
  ];

  export const FILES: any = [
    // tslint:disable-next-line: max-line-length
    {
      url:
        "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
      name: "Perfect",
      artist: " Ed Sheeran"
    },
    {
      // tslint:disable-next-line: max-line-length
      url:
        "https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3",
      name: "Man Atkeya Beparwah",
      artist: "Nusrat Fateh Ali Khan"
    },
    {
      url:"https://ia800707.us.archive.org/8/items/alice_in_wonderland_librivox/wonderland_ch_01.mp3",
      name: "Alice's Adventures in Wonderland",
      artist: "Lewis Carroll"
    }
  ];  
  //"https://ia801503.us.archive.org/15/items/TheBeatlesPennyLane_201805/The%20Beatles%20-%20Penny%20Lane.mp3"