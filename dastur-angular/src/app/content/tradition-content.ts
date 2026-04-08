import { Lang } from '../translation.service';

export type TraditionCategory = 'wedding' | 'child' | 'festival' | 'social';

export interface TraditionContent {
  title: string;
  teaser: string;
  full: string;
}

export interface TraditionCard {
  slug: string;
  icon: string;
  category: TraditionCategory;
  content: Record<Lang, TraditionContent>;
}

export const TRADITIONS: TraditionCard[] = [
  {
    slug: 'betashar',
    icon: 'fas fa-ring',
    category: 'wedding',
    content: {
      kz: {
        title: 'Беташар',
        teaser: 'Келінді жаңа әулетке таныстыратын маңызды салт.',
        full: 'Беташар — қазақтың үйлену дәстүріндегі ең маңызды рәсімдердің бірі. Бұл кезде келін жаңа ортаға ресми түрде таныстырылады, үлкендерге сәлем береді және жаңа әулеттің ішкі құрылымымен танысады. Рәсім тек отбасылық таныстыру емес, келіннің жаңа әлеуметтік рөлге қадам басуын білдіреді.',
      },
      ru: {
        title: 'Беташар',
        teaser: 'Обряд знакомства невесты с новой семьёй и родом.',
        full: 'Беташар — один из центральных свадебных обрядов в казахской традиции. Во время церемонии невесту знакомят с родственниками жениха, она приветствует старших, а сообщество символически принимает её в новую семью. Этот обряд обозначает не только переход в другой дом, но и вхождение в новую социальную роль.',
      },
      en: {
        title: 'Betashar',
        teaser: 'A ceremony introducing the bride to her new family.',
        full: 'Betashar is a key wedding ritual in Kazakh tradition. The bride is introduced to her new relatives, greets elders, and is symbolically accepted into the family and community.',
      },
    },
  },
  {
    slug: 'tusaukeser',
    icon: 'fas fa-shoe-prints',
    category: 'child',
    content: {
      kz: {
        title: 'Тұсаукесер',
        teaser: 'Бала алғаш қадам басқанда жасалатын рәсім.',
        full: 'Тұсаукесер бала тәй-тәй басып жүрген шақта өткізіледі. Баланың аяғына ала жіп байланып, сыйлы, жүрісі шапшаң, жолы ашық адам оны кеседі. Бұл рәсім баланың болашағы ашық, жолы жеңіл болсын деген ырымдық тілекпен жасалады.',
      },
      ru: {
        title: 'Тұсаукесер',
        teaser: 'Обряд, связанный с первыми шагами ребёнка.',
        full: 'Тұсаукесер проводят, когда ребёнок начинает ходить. Ноги ребёнка символически перевязывают, а затем уважаемый и активный человек разрезает путы. Смысл обряда — пожелание лёгкого пути, удачной судьбы и уверенного жизненного движения.',
      },
      en: {
        title: 'Tusaukeser',
        teaser: 'A ritual marking a child’s first steps.',
        full: 'Tusaukeser is held when a child begins to walk. A symbolic cord is cut to wish the child an open, confident, and successful life path.',
      },
    },
  },
  {
    slug: 'besikke-salu',
    icon: 'fas fa-baby',
    category: 'child',
    content: {
      kz: {
        title: 'Бесікке салу',
        teaser: 'Нәрестені бесікке бөлеуге арналған салт.',
        full: 'Бесікке салу рәсімі жаңа туған сәбиді бесікке алғаш бөлеу кезінде жасалады. Рәсімді әдетте жасы үлкен, тәжірибелі ана немесе әже атқарады. Бұл салт тазалық, тәртіп, ұрпақ сабақтастығы және балаға деген ізгі тілекпен тығыз байланысты.',
      },
      ru: {
        title: 'Бесікке салу',
        teaser: 'Традиция первого укладывания младенца в колыбель.',
        full: 'Бесікке салу — обряд, во время которого младенца впервые укладывают в бесик. Обычно это делает опытная женщина старшего возраста. Обряд связан с заботой о ребёнке, пожеланием здоровья, порядка и правильного жизненного начала.',
      },
      en: {
        title: 'Besikke Salu',
        teaser: 'The first placement of a baby into a cradle.',
        full: 'Besikke Salu is the ritual of placing a newborn into the cradle for the first time. It symbolizes care, blessing, and continuity between generations.',
      },
    },
  },
  {
    slug: 'shildekhana',
    icon: 'fas fa-moon',
    category: 'child',
    content: {
      kz: {
        title: 'Шілдехана',
        teaser: 'Нәресте дүниеге келгенде өткізілетін қуаныш кеші.',
        full: 'Шілдехана сәби туған алғашқы күндері ұйымдастырылады. Жақындар жиналып, ән айтып, тілек білдіріп, жас ананы қолдайды. Бұл дәстүр жаңа өмірдің басталуын қуанышпен қарсы алып, отбасы мен қауымның қатысуын білдіреді.',
      },
      ru: {
        title: 'Шілдехана',
        teaser: 'Праздничный вечер в честь рождения ребёнка.',
        full: 'Шілдехана проводится в первые дни после рождения младенца. Родные и близкие собираются, поздравляют семью, поют, выражают добрые пожелания. Обряд подчёркивает ценность новой жизни и участие сообщества в этом событии.',
      },
      en: {
        title: 'Shildekhana',
        teaser: 'A celebration held after a child is born.',
        full: 'Shildekhana is an early celebration of a newborn child. Relatives gather to congratulate the family and welcome new life into the community.',
      },
    },
  },
  {
    slug: 'nauryz',
    icon: 'fas fa-sun',
    category: 'festival',
    content: {
      kz: {
        title: 'Наурыз',
        teaser: 'Жаңару мен бірліктің көктемгі мейрамы.',
        full: 'Наурыз — көктемнің, жаңарудың және тепе-теңдіктің мерекесі. Бұл күні адамдар бір-біріне ізгі тілек айтып, үйлерін тазалап, наурыз көже әзірлейді. Мейрам табиғаттың жаңаруын ғана емес, қоғамдық келісім мен жаңа бастаманы да білдіреді.',
      },
      ru: {
        title: 'Наурыз',
        teaser: 'Весенний праздник обновления, равновесия и общности.',
        full: 'Наурыз — один из самых значимых праздников в казахской культуре. Он символизирует обновление природы, новый жизненный цикл и гармонию. В этот день люди навещают друг друга, готовят наурыз-коже и подчеркивают ценность единства и добрых намерений.',
      },
      en: {
        title: 'Nauryz',
        teaser: 'A spring celebration of renewal and harmony.',
        full: 'Nauryz marks renewal, balance, and the arrival of spring. It combines festive food, social connection, and symbolic new beginnings.',
      },
    },
  },
  {
    slug: 'korimdik',
    icon: 'fas fa-gift',
    category: 'social',
    content: {
      kz: {
        title: 'Көрімдік',
        teaser: 'Жаңа қуанышқа байланысты берілетін сый.',
        full: 'Көрімдік — жақсы жаңалыққа байланысты берілетін сый немесе ақшалай қолдау. Жаңа туған бала, жаңа түскен келін немесе басқа да қуанышты сәттерде ұсынылады. Бұл дәстүр қуанышқа ортақтасу мен әлеуметтік байланысты нығайтудың белгісі.',
      },
      ru: {
        title: 'Көрімдік',
        teaser: 'Подарок или знак участия по случаю радостного события.',
        full: 'Көрімдік дают по случаю хорошей новости: рождения ребёнка, появления невесты в доме и других радостных событий. Это не просто материальный подарок, а способ выразить участие, признание и поддержку.',
      },
      en: {
        title: 'Korimdik',
        teaser: 'A gift given on the occasion of joyful news.',
        full: 'Korimdik is a gift or symbolic offering made in response to a happy event, expressing support, recognition, and shared joy.',
      },
    },
  },
];
