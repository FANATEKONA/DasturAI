import { Lang } from '../translation.service';

export type TouristCategory = 'nature' | 'history' | 'city';

export interface TouristPlaceContent {
  title: string;
  region: string;
  teaser: string;
  full: string;
}

export interface TouristPlace {
  slug: string;
  category: TouristCategory;
  image: string;
  content: Record<Lang, TouristPlaceContent>;
}

export const TOURIST_PLACES: TouristPlace[] = [
  {
    slug: 'charyn',
    category: 'nature',
    image: 'assets/tourist-photos/charyn.jpg',
    content: {
      kz: {
        title: 'Шарын шатқалы',
        region: 'Алматы облысы',
        teaser: 'Қызыл жартастар мен терең шатқалдар Қазақстан табиғатының ең әсерлі көрінісін береді.',
        full: 'Шарын шатқалы Қазақстандағы ең әйгілі табиғи нысандардың бірі. Оның рельефі, түрлі түсті жартас қабаттары және ерекше ландшафты туристерді ғана емес, фотографтар мен зерттеушілерді де тартады. Бұл жерге көбіне бір күндік сапармен барып, шатқал бойымен серуендеп, табиғаттың геологиялық тарихын көзбен көруге болады.',
      },
      ru: {
        title: 'Чарынский каньон',
        region: 'Алматинская область',
        teaser: 'Красные скальные стены и глубокий каньон дают один из самых сильных природных пейзажей Казахстана.',
        full: 'Чарынский каньон считается одной из самых узнаваемых природных локаций Казахстана. Его сложный рельеф, цветовые переходы скал и ощущение масштаба делают место особенно популярным среди туристов, фотографов и любителей коротких экспедиций. Обычно сюда приезжают на однодневный маршрут с прогулкой по дну каньона.',
      },
      en: {
        title: 'Charyn Canyon',
        region: 'Almaty Region',
        teaser: 'Red cliffs and deep canyon formations create one of Kazakhstan’s most dramatic landscapes.',
        full: 'Charyn Canyon is one of the best-known natural destinations in Kazakhstan. Its layered rock formations, scale, and color make it a strong attraction for tourists, photographers, and nature-focused travel.',
      },
    },
  },
  {
    slug: 'burabay',
    category: 'nature',
    image: 'assets/tourist-photos/burabay.jpg',
    content: {
      kz: {
        title: 'Бурабай',
        region: 'Ақмола облысы',
        teaser: 'Көлдер, қарағайлы орман және жұмсақ тау бедері отбасылық туризмге өте қолайлы.',
        full: 'Бурабай курорттық аймағы Қазақстандағы ең жайлы туристік бағыттардың бірі саналады. Мұнда көл жағалауындағы демалыс, қайық серуені, жаяу маршруттар және таза орманды ауа бірігеді. Бурабай әсіресе табиғат аясында тынығуды қалайтындар үшін қолайлы бағыт.',
      },
      ru: {
        title: 'Бурабай',
        region: 'Акмолинская область',
        teaser: 'Озёра, сосновый лес и мягкий горный рельеф делают это место удобным для семейного туризма.',
        full: 'Бурабай — одна из самых комфортных туристических зон Казахстана. Здесь сочетаются озёра, прогулочные маршруты, сосновые леса и курортная атмосфера. Это направление подходит для спокойного отдыха, поездок на выходные и семейного туризма.',
      },
      en: {
        title: 'Burabay',
        region: 'Akmola Region',
        teaser: 'Lakes, pine forests, and gentle mountains make it ideal for comfortable nature tourism.',
        full: 'Burabay is one of Kazakhstan’s most accessible resort-style nature destinations, combining lakes, forest walks, and a calm landscape suitable for family travel.',
      },
    },
  },
  {
    slug: 'turkistan',
    category: 'history',
    image: 'assets/tourist-photos/turkistan.jpg',
    content: {
      kz: {
        title: 'Түркістан',
        region: 'Түркістан облысы',
        teaser: 'Қожа Ахмет Ясауи кесенесі мен тарихи орта рухани туризмнің басты нүктелерінің бірі.',
        full: 'Түркістан қаласы Қазақстанның тарихи және рухани орталықтарының бірі. Қожа Ахмет Ясауи кесенесі ЮНЕСКО мұрасына енген және қалаға ерекше мән береді. Бұл бағыт сәулет, тарих және рухани мәдениетке қызығатын туристер үшін маңызды.',
      },
      ru: {
        title: 'Туркестан',
        region: 'Туркестанская область',
        teaser: 'Мавзолей Ходжи Ахмеда Ясави и историческая среда делают город ключевой точкой духовного туризма.',
        full: 'Туркестан — один из важнейших исторических и духовных центров Казахстана. Мавзолей Ходжи Ахмеда Ясави, входящий в список ЮНЕСКО, формирует уникальный образ города. Это направление особенно ценно для тех, кто интересуется архитектурой, историей и культурной памятью региона.',
      },
      en: {
        title: 'Turkistan',
        region: 'Turkistan Region',
        teaser: 'The Yasawi Mausoleum and the city’s heritage make it a major spiritual tourism destination.',
        full: 'Turkistan is one of Kazakhstan’s most important historical and spiritual centers, known for the UNESCO-listed Mausoleum of Khoja Ahmed Yasawi.',
      },
    },
  },
  {
    slug: 'tamgaly',
    category: 'history',
    image: 'assets/tourist-photos/tamgaly.jpg',
    content: {
      kz: {
        title: 'Таңбалы',
        region: 'Жетісу маңы',
        teaser: 'Жартастағы көне суреттер арқылы ежелгі өркениеттердің ізі сақталған археологиялық орын.',
        full: 'Таңбалы петроглифтері Қазақстандағы ең маңызды археологиялық ескерткіштердің бірі. Мұнда мыңдаған жартас суреттері сақталған, олар көне қоғамдардың дүниетанымы, тұрмысы және діни түсінігі туралы мәлімет береді. Бұл орын тарихи туризм мен мәдени мұра бағыты үшін ерекше құнды.',
      },
      ru: {
        title: 'Тамгалы',
        region: 'Жетысуский район',
        teaser: 'Археологическая зона с древними петроглифами, показывающими следы ранних цивилизаций.',
        full: 'Петроглифы Тамгалы входят в число важнейших археологических памятников Казахстана. Тысячи изображений на скалах позволяют увидеть мировоззрение, повседневность и ритуальные практики древних обществ. Это сильная точка для культурного и исторического туризма.',
      },
      en: {
        title: 'Tamgaly',
        region: 'Zhetysu Area',
        teaser: 'An archaeological landscape with ancient rock carvings preserving early cultural memory.',
        full: 'Tamgaly is a major archaeological site known for its petroglyphs, offering insight into ancient ritual life, symbolism, and early cultural landscapes.',
      },
    },
  },
  {
    slug: 'almaty',
    category: 'city',
    image: 'assets/tourist-photos/almaty.jpg',
    content: {
      kz: {
        title: 'Алматы',
        region: 'Алматы қаласы',
        teaser: 'Қала мәдениеті, тау көрінісі және заманауи инфрақұрылым бір жерде тоғысқан мегаполис.',
        full: 'Алматы туристер үшін урбанистік және табиғи тәжірибені қатар ұсынатын қала. Мұнда мұражайлар, гастрономия, жаяу көшелер, мәдени алаңдар және тауға жақын орналасқан демалыс орындары бар. Қала қысқа сапарлар мен халықаралық қонақтар үшін өте ыңғайлы.',
      },
      ru: {
        title: 'Алматы',
        region: 'Город Алматы',
        teaser: 'Городская культура, горные виды и современная инфраструктура собраны в одном мегаполисе.',
        full: 'Алматы подходит тем, кто хочет совместить городской туризм с природным окружением. Здесь есть музеи, кофейни, гастрономические места, пешеходные зоны и быстрый доступ к горам. Это один из самых удобных городов страны для туристического маршрута.',
      },
      en: {
        title: 'Almaty',
        region: 'Almaty City',
        teaser: 'Urban culture, mountain views, and modern infrastructure meet in one travel-friendly city.',
        full: 'Almaty offers a blend of city life and nearby mountain escape, making it one of Kazakhstan’s easiest and richest destinations for mixed-format travel.',
      },
    },
  },
  {
    slug: 'astana',
    category: 'city',
    image: 'assets/tourist-photos/astana.jpg',
    content: {
      kz: {
        title: 'Астана',
        region: 'Астана қаласы',
        teaser: 'Заманауи сәулет пен астаналық атмосфера Қазақстанның жаңа урбанистік бейнесін көрсетеді.',
        full: 'Астана заманауи архитектурасы, кең қалалық кеңістігі және мемлекеттік орталық ретіндегі рөлімен ерекшеленеді. Бұл қалада туристер футуристік ғимараттарды, мұражайларды және жаңа қоғамдық кеңістіктерді көре алады. Астана қазіргі Қазақстанның урбанистік символдарының бірі.',
      },
      ru: {
        title: 'Астана',
        region: 'Город Астана',
        teaser: 'Современная архитектура и столичная атмосфера показывают новый урбанистический образ Казахстана.',
        full: 'Астана интересна прежде всего современной архитектурой, масштабом общественных пространств и ощущением новой столицы. Это подходящее направление для тех, кто хочет увидеть современное лицо Казахстана и знаковые здания страны.',
      },
      en: {
        title: 'Astana',
        region: 'Astana City',
        teaser: 'Contemporary architecture and capital-city scale define Kazakhstan’s modern urban image.',
        full: 'Astana is a strong destination for visitors interested in contemporary architecture, large civic spaces, and the modern state image of Kazakhstan.',
      },
    },
  },
];
