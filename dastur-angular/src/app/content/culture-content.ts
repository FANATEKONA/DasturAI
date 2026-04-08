import { Lang } from '../translation.service';

export interface CultureSection {
  title: string;
  text: string;
}

export interface CultureTopicContent {
  title: string;
  teaser: string;
  summary: string;
  sections: CultureSection[];
}

export interface CultureTopic {
  slug: string;
  icon: string;
  image: string;
  content: Record<Lang, CultureTopicContent>;
}

export const CULTURE_TOPICS: CultureTopic[] = [
  {
    slug: 'music',
    icon: 'fas fa-music',
    image: 'assets/culture-music.svg',
    content: {
      kz: {
        title: 'Қазақ музыкасы',
        teaser: 'Домбыра, қобыз және күй арқылы халықтың жаны мен тарихы ашылады.',
        summary: 'Қазақ музыкасы тек өнер емес, ол ұлттың тарихи жады, дүниетанымы және эмоциялық тілі.',
        sections: [
          {
            title: 'Домбыра мәдениеті',
            text: 'Домбыра қазақ қоғамында тек музыкалық аспап емес, ұрпақтан ұрпаққа берілетін мәдени белгі. Ол арқылы жыр айтылып, шежіре сақталып, батырлық пен мұң қатар жеткізілген.',
          },
          {
            title: 'Күй дәстүрі',
            text: 'Күй сөзсіз әңгіме айту формасы ретінде қалыптасты. Әрбір күй тарихи оқиғаға, адамның ішкі күйіне немесе белгілі бір тұлғаның тағдырына байланысты туады.',
          },
          {
            title: 'Қобыз бен руханият',
            text: 'Қобыздың үні көбіне сакралды және терең рухани кеңістікпен байланысады. Бұл аспап бақсылық, мифология және халық жадындағы көне қабаттарды сақтайды.',
          },
        ],
      },
      ru: {
        title: 'Казахская музыка',
        teaser: 'Через домбру, кобыз и искусство кюя раскрываются память, настроение и история народа.',
        summary: 'Казахская музыка является не только искусством, но и способом сохранить коллективную память, мировоззрение и эмоциональный язык нации.',
        sections: [
          {
            title: 'Культура домбры',
            text: 'Домбра в казахской культуре выступает как музыкальный инструмент, символ идентичности и носитель устной традиции. Через неё передавались песни, легенды, наставления и личные переживания.',
          },
          {
            title: 'Традиция кюя',
            text: 'Кюй стал особой формой повествования без слов. Каждое произведение связано с событием, характером времени, судьбой человека или коллективным переживанием общества.',
          },
          {
            title: 'Кобыз и духовность',
            text: 'Кобыз занимает особое место в духовной культуре. Его звучание ассоциируется с древними пластами памяти, сакральностью и представлением о музыке как о проводнике между человеком и миром смыслов.',
          },
        ],
      },
      en: {
        title: 'Kazakh Music',
        teaser: 'Dombra, kobyz, and kuy reveal collective memory, emotion, and historical depth.',
        summary: 'Kazakh music functions as both art and a living archive of identity, worldview, and emotional expression.',
        sections: [
          {
            title: 'The Dombra Tradition',
            text: 'The dombra is more than an instrument. It carries oral storytelling, social memory, and personal expression across generations.',
          },
          {
            title: 'The Art of Kuy',
            text: 'Kuy became a wordless narrative form. Each composition can reflect an event, a person, a feeling, or a historical turning point.',
          },
          {
            title: 'Kobyz and Spiritual Meaning',
            text: 'The kobyz is connected with sacred depth, mythology, and older layers of cultural memory within Kazakh tradition.',
          },
        ],
      },
    },
  },
  {
    slug: 'craft',
    icon: 'fas fa-palette',
    image: 'assets/culture-craft.svg',
    content: {
      kz: {
        title: 'Қолөнер әлемі',
        teaser: 'Ою-өрнек, зергерлік және тұрмыстық бұйымдар қазақ эстетикасының тілін қалыптастырады.',
        summary: 'Қазақ қолөнері утилитарлық қажеттілік пен көркем ойлаудың тоғысқан нүктесі ретінде қалыптасқан.',
        sections: [
          {
            title: 'Ою-өрнек тілі',
            text: 'Әр өрнек белгілі бір мағына береді: өсім, қорғаныс, бірлік, береке. Сондықтан қолөнер бұйымдары тек әдемілік үшін емес, символдық жүкпен де жасалған.',
          },
          {
            title: 'Зергерлік дәстүр',
            text: 'Күміс әшекейлер әйелдің әлеуметтік мәртебесін, жас ерекшелігін және отбасы жағдайын білдіруі мүмкін. Зергерлік бұйымдар тұрмыс пен салт рәсімдерінде маңызды орын алған.',
          },
          {
            title: 'Киіз және тұрмыс',
            text: 'Киіз үй ішіндегі заттар, кілемдер, жүк аяқ, сандық және басқа да бұйымдар қазақ өмір салтының мобильді, бірақ эстетикалық бай жүйесін көрсетеді.',
          },
        ],
      },
      ru: {
        title: 'Мир ремёсел',
        teaser: 'Орнаменты, ювелирное дело и предметы быта формируют визуальный язык казахской культуры.',
        summary: 'Казахское ремесло возникло на стыке практической пользы, символики и эстетического мышления.',
        sections: [
          {
            title: 'Язык орнамента',
            text: 'Каждый орнамент несёт значение: рост, защиту, преемственность, достаток. Поэтому декоративный узор в казахской культуре всегда связан со смыслом, а не только с красотой.',
          },
          {
            title: 'Ювелирная традиция',
            text: 'Украшения из серебра могли указывать на возраст, статус и семейное положение. Они были важной частью и повседневности, и обрядовой культуры.',
          },
          {
            title: 'Войлок и предметный мир',
            text: 'Ковры, сундуки, утварь и элементы убранства юрты показывают, как кочевой образ жизни сочетался с высокой культурой формы и детали.',
          },
        ],
      },
      en: {
        title: 'Craft Tradition',
        teaser: 'Patterns, jewelry, and household objects shape the visual language of Kazakh culture.',
        summary: 'Kazakh craft developed at the intersection of function, symbolism, and refined visual thinking.',
        sections: [
          {
            title: 'The Meaning of Ornament',
            text: 'Patterns often communicate growth, protection, continuity, and prosperity. Ornament is visual meaning, not decoration alone.',
          },
          {
            title: 'Jewelry Culture',
            text: 'Silver jewelry could reflect age, status, and social role while also serving ritual and aesthetic purposes.',
          },
          {
            title: 'Felt and Material Space',
            text: 'Carpets, storage objects, and yurt interior elements show how a mobile way of life still produced a rich design system.',
          },
        ],
      },
    },
  },
  {
    slug: 'language',
    icon: 'fas fa-pen-nib',
    image: 'assets/culture-language.svg',
    content: {
      kz: {
        title: 'Тіл мен әдебиет',
        teaser: 'Қазақ тілі мен әдебиеті мәдени кодты, ойлау жүйесін және рухани сабақтастықты сақтайды.',
        summary: 'Тіл мен әдебиет ұлттың ішкі логикасын, құндылықтарын және тарихи өзін-өзі тануын жеткізетін басты арналардың бірі.',
        sections: [
          {
            title: 'Ауыз әдебиеті',
            text: 'Ертегі, жыр, терме, айтыс секілді жанрлар арқылы халық дүниетанымы мен этикалық қағидаларын таратып отырған. Бұл жанрлар білім беру функциясын да атқарған.',
          },
          {
            title: 'Жазба дәстүр',
            text: 'Абай, Шәкәрім, Мұхтар Әуезов сияқты тұлғалар қазақ ойының тереңдігін жазба әдебиет арқылы жаңа деңгейге көтерді.',
          },
          {
            title: 'Тілдің мәдени рөлі',
            text: 'Қазақ тіліндегі ұғымдар, туыстық атаулар, салтқа қатысты сөздер қоғам құрылымын және дүниетанымды нақты көрсетеді.',
          },
        ],
      },
      ru: {
        title: 'Язык и литература',
        teaser: 'Через язык и тексты сохраняются культурный код, способ мышления и связь поколений.',
        summary: 'Язык и литература остаются ключевыми каналами, через которые передаются ценности, память и самоописание народа.',
        sections: [
          {
            title: 'Устная словесность',
            text: 'Сказания, жыры, айтыс и другие формы устного слова выполняли одновременно художественную, образовательную и общественную функцию.',
          },
          {
            title: 'Письменная традиция',
            text: 'Авторы вроде Абая, Шакарима и Мухтара Ауэзова вывели казахскую мысль в большую литературную форму и сделали её частью модерного культурного разговора.',
          },
          {
            title: 'Культурная роль языка',
            text: 'Родственные термины, обрядовая лексика и устойчивые выражения отражают устройство общества и особенности мировосприятия.',
          },
        ],
      },
      en: {
        title: 'Language and Literature',
        teaser: 'Language and writing preserve the cultural code, worldview, and continuity between generations.',
        summary: 'Language and literature are major channels through which values, memory, and self-understanding are transmitted.',
        sections: [
          {
            title: 'Oral Tradition',
            text: 'Epic poetry, aitys, and oral storytelling carried artistic, educational, and social meaning at once.',
          },
          {
            title: 'Written Heritage',
            text: 'Writers such as Abai, Shakarim, and Mukhtar Auezov elevated Kazakh thought into major literary form.',
          },
          {
            title: 'Language as Cultural Structure',
            text: 'Kinship vocabulary, ritual terminology, and expressions reveal how society is organized and understood.',
          },
        ],
      },
    },
  },
  {
    slug: 'worldview',
    icon: 'fas fa-mountain',
    image: 'assets/culture-worldview.svg',
    content: {
      kz: {
        title: 'Дүниетаным мен философия',
        teaser: 'Қонақжайлық, жеті ата және үлкенді құрметтеу қазақ қоғамының этикалық өзегін құрайды.',
        summary: 'Қазақ дүниетанымы адам, табиғат, отбасы және қоғам арасындағы тепе-теңдікті сақтауға негізделеді.',
        sections: [
          {
            title: 'Жеті ата қағидасы',
            text: 'Жеті ата ұғымы тек туыстық шектеу емес, ол әлеуметтік жауапкершілік пен тарихи жадының құрылымы ретінде қызмет етеді.',
          },
          {
            title: 'Қонақжайлық',
            text: 'Қонақты құрметтеу дала мәдениетінде адамгершіліктің белгісі саналған. Бұл қағида қоғам ішіндегі өзара сенімді күшейткен.',
          },
          {
            title: 'Табиғатпен үндестік',
            text: 'Көшпелі өмір салты табиғатты бақылау мен оған бейімделуді талап етті. Сондықтан уақыт, кеңістік және маусым ұғымдары дүниетанымда ерекше орын алған.',
          },
        ],
      },
      ru: {
        title: 'Мировоззрение и философия',
        teaser: 'Гостеприимство, жеті ата и уважение к старшим составляют этическое ядро казахской культуры.',
        summary: 'Казахское мировоззрение строится на балансе между человеком, семьёй, обществом и природой.',
        sections: [
          {
            title: 'Принцип жеті ата',
            text: 'Жеті ата работает не только как правило родства, но и как механизм исторической памяти, социальной ответственности и представления о непрерывности рода.',
          },
          {
            title: 'Гостеприимство как норма',
            text: 'Принятие гостя в степной культуре считалось признаком достоинства и человечности. Эта ценность укрепляла доверие внутри сообщества.',
          },
          {
            title: 'Гармония с природой',
            text: 'Кочевой образ жизни требовал чуткого отношения к пространству, времени, сезонности и природным условиям. Это напрямую влияло на систему ценностей.',
          },
        ],
      },
      en: {
        title: 'Worldview and Philosophy',
        teaser: 'Hospitality, kinship ethics, and respect for elders form the core of Kazakh social philosophy.',
        summary: 'Kazakh worldview is based on balance between people, family, society, and nature.',
        sections: [
          {
            title: 'The Zheti Ata Principle',
            text: 'Zheti ata is both a kinship rule and a structure of memory, continuity, and social responsibility.',
          },
          {
            title: 'Hospitality as Ethics',
            text: 'Welcoming a guest has long been understood as a marker of dignity and moral maturity.',
          },
          {
            title: 'Harmony with Nature',
            text: 'Nomadic life required sensitivity to landscape, seasons, and movement, which shaped values and perception.',
          },
        ],
      },
    },
  },
];

export function findCultureTopic(slug: string): CultureTopic | undefined {
  return CULTURE_TOPICS.find(topic => topic.slug === slug);
}
