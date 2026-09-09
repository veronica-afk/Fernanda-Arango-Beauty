import { 
  ServiceItem, 
  StyleLook, 
  TransformationItem, 
  TrendItem, 
  GalleryItem, 
  ReviewItem,
  LookbookHotspot 
} from '../types';

export const BRAND_INFO = {
  name: "FERNANDA ARANGO BEAUTY",
  tagline: "Studio de Belleza & Estilo",
  slogan: "Tu belleza. Tu estilo. Tu momento.",
  subtext: "Belleza personalizada para cada ocasión por Fernanda Arango. Nos adaptamos a ti: alta precisión, cosmética de lujo y atención exclusiva previa cita.",
  phone: "+34 612 345 678",
  whatsappNumber: "34612345678",
  whatsappMessage: "¡Hola Fernanda Arango Beauty! Me gustaría solicitar información y consultar disponibilidad para una cita.",
  email: "citas@fernandaarangobeauty.com",
  instagram: "@fernandaarango.beauty",
  address: "Paseo de la Elegancia 42, Atelier 3B",
  hours: "Lunes a Sábado: 08:30 – 20:30 | Domingos: Exclusivo eventos & novias",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'maquillaje',
    title: 'Maquillaje de Autor',
    subtitle: 'Social, Editorial, Novias & Eventos',
    category: 'maquillaje',
    description: 'Técnicas contemporáneas que realzan tu estructura ósea con acabados piel de cristal, fijación 16h y adaptación milimétrica a tu estilo.',
    longDescription: 'Desde un acabado natural etéreo hasta un glam cinematográfico de alto impacto. Evaluamos tu fototipo, tono de piel y el tipo de luz del evento para que luzcas impecable en persona y ante cámaras.',
    duration: '60 - 90 min',
    priceFrom: '65€',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    iconName: 'Sparkles',
    badge: 'Más Solicitado',
    features: [
      'Preparación de piel glow con sérums activos',
      'Pestañas individuales pelo a pelo a medida',
      'Fijación profesional resistente a lágrimas y clima',
      'Kit de retoque de emergencia de cortesía'
    ],
    includes: [
      'Diagnóstico de visagismo y colorimetría',
      'Tratamiento flash hidratante preparador',
      'Diseño de cejas y labios perfilados',
      'Fijador térmico anti-humedad'
    ],
    preparationTips: [
      'Asistir con la piel limpia y libre de maquillaje',
      'Evitar exfoliaciones químicas 48h antes',
      'Llevar fotos o moodboard de tus referencias preferidas'
    ]
  },
  {
    id: 'peinados',
    title: 'Peinados & Haute Coiffure',
    subtitle: 'Ondas Hollywood, Recogidos & Red Carpet',
    category: 'peinados',
    description: 'Arquitectura capilar con movimiento orgánico. Recogidos pulidos, ondas fluidas y trenzados de alta costura adaptados a tu escote.',
    longDescription: 'Trabajamos con calor controlado y productos termo-protectores de grado profesional. Diseñamos la silueta de tu peinado en armonía con tu vestuario, tocado y velo si es para novias.',
    duration: '50 - 80 min',
    priceFrom: '55€',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
    iconName: 'Scissors',
    badge: 'Tendencia 2025',
    features: [
      'Texturizado según grosor y densidad natural',
      'Colocación milimétrica de tocados o velos',
      'Sellado anti-frizz de ultra duración',
      'Accesorios invisibles de alta sujeción'
    ],
    includes: [
      'Brushing previo y preparación con proteína capilar',
      'Tratamiento de brillo espejo inmediato',
      'Técnicas de anclaje que no maltratan el cuero cabelludo'
    ],
    preparationTips: [
      'Lavar el cabello el día anterior o la mañana misma con champú neutro',
      'No aplicar mascarillas pesadas o aceites en la raíz',
      'Llevar blusa con botones o cremallera para no dañar el peinado al cambiarte'
    ]
  },
  {
    id: 'manicure',
    title: 'Manicure & Nail Art de Lujo',
    subtitle: 'Rusa, Gel Esculpido & Minimalista',
    category: 'manicure',
    description: 'Cuidado anatómico de la cutícula y esmaltado impecable. Desde el clásico nude aperlado hasta diseños vanguardistas de pasarela.',
    longDescription: 'Manicura rusa con torno de precisión y esmaltado semipermanente de alta pigmentación. El borde de la cutícula queda perfectamente limpio para un crecimiento invisible y hasta 4 semanas de duración.',
    duration: '60 - 75 min',
    priceFrom: '40€',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
    iconName: 'Gem',
    badge: 'Alta Precisión',
    features: [
      'Manicura combinada / rusa sin corte invasivo',
      'Nivelación con base rubber fortalecedora',
      'Pigmentos veganos libres de 10 tóxicos',
      'Hidratación de manos con velo de colágeno'
    ],
    includes: [
      'Exfoliación suave con micro-perlas',
      'Limado morfológico (almendra, cuadrada, oval)',
      'Diseño personalizado (chrome, french o nail art)'
    ],
    preparationTips: [
      'No retirar cutículas en casa en los días previos',
      'Indicar si requieres retiro de producto anterior al reservar'
    ]
  },
  {
    id: 'faciales',
    title: 'Faciales & Skin Glow Prep',
    subtitle: 'Oxigenación, Hidratación & Masaje Kobido',
    category: 'faciales',
    description: 'Rituales de desintoxicación y luminosidad que transforman la textura de la piel antes de un gran evento o como cuidado mensual.',
    longDescription: 'Combinamos drenaje linfático manual, esferas criogénicas descongestionantes y activos bio-fermentados para devolver la jugosidad, firmeza y turgencia a tu rostro.',
    duration: '45 - 75 min',
    priceFrom: '50€',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1512290900672-1f02e6b0f023?q=80&w=800&auto=format&fit=crop',
    iconName: 'Smile',
    badge: 'Bienestar Puro',
    features: [
      'Diagnóstico dérmico con luz Wood',
      'Doble limpieza japonesa con aceites botánicos',
      'Masaje escultor miofascial relajante',
      'Mascarilla hidroplástica de algas doradas'
    ],
    includes: [
      'Infusión de ácido hialurónico multimolecular',
      'Terapia con rodillo de jade y cryo-globes',
      'Fotoprotección mineral sedosa'
    ],
    preparationTips: [
      'Suspender ácidos exfoliantes o retinol 3 días antes',
      'Llegar 10 minutos antes para relajarte con nuestra infusión botánica'
    ]
  },
  {
    id: 'coloracion',
    title: 'Coloración & Balayage de Autor',
    subtitle: 'Babylights, Glossing & Transformación',
    category: 'coloracion',
    description: 'Especialistas en degradados sutiles que aportan dimensión y luminosidad sin efecto raíz, cuidando la fibra capilar con Olaplex.',
    longDescription: 'Formulaciones exclusivas personalizadas para realzar tu matiz de piel y ojos. Iluminaciones de ensueño: desde tonos avellana y beige cashmere hasta rubios nórdicos puros y cobrizos radiantes.',
    duration: '120 - 180 min',
    priceFrom: '85€',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
    iconName: 'Palette',
    badge: 'Técnica Exclusiva',
    features: [
      'Protección molecular durante todo el proceso',
      'Transiciones suaves sin líneas marcadas',
      'Baño de brillo glossing con pH equilibrado',
      'Protocolo anti-quiebre y sellado cuticular'
    ],
    includes: [
      'Test de mecha y evaluación de elasticidad',
      'Lavado sensorial con masaje craneal',
      'Peinado y estilismo final con secado editorial'
    ],
    preparationTips: [
      'Es ideal acudir con el cabello sin lavar de 24 horas',
      'Traer referencias visuales para afinar la tonalidad deseada'
    ]
  },
  {
    id: 'caritas-pintadas',
    title: 'Caritas Pintadas & Body Art',
    subtitle: 'Diseños Infantiles de Lujo & Festival Face Art',
    category: 'caritas-pintadas',
    description: 'Pintura artística hipoalergénica con cristales, purpurina biodegradable y trazos finos para cumpleaños, galas temáticas y festivales.',
    longDescription: 'Llevamos la magia a otro nivel: mariposas doradas, antifaces galácticos, criaturas de fantasía y diseños modernos para niños y adultos en fiestas privadas y producciones.',
    duration: '45 - 90 min',
    priceFrom: '45€',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    iconName: 'Wand2',
    badge: 'Creatividad Total',
    features: [
      'Pinturas base agua grado cosmético FDA / UE',
      'Gemas faciales y glitter holográfico ecológico',
      'Secado rápido en 60 segundos sin manchas',
      'Fácil remoción con agua tibia y jabón suave'
    ],
    includes: [
      'Catálogo interactivo con más de 40 diseños exclusivos',
      'Montaje de mini-tocador iluminado en eventos a domicilio',
      'Diseños express para grupos grandes'
    ],
    preparationTips: [
      'Rostro limpio y sin cremas aceitosas antes de la sesión',
      'Consultar por paquetes especiales para fiestas y aniversarios'
    ]
  }
];

export const STYLE_CHAMELEON_DATA: StyleLook[] = [
  {
    id: 'natural',
    name: 'Natural & Clean Girl',
    subtitle: 'Elegancia Orgánica & Dewy Skin',
    description: 'La belleza de no parecer maquillada. Piel traslúcida que respira, cejas laminadas peinadas hacia arriba, toques sutiles de bálsamo color cereza y rubor en crema.',
    vibe: 'Fresco, effortless, minimalista, radiante.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop',
    colorPalette: ['#E8D3C3', '#EFC3B6', '#D6A89F', '#8F655D'],
    highlights: ['Piel glow sin base pesada', 'Labios jugosos satinados', 'Cejas feather touch'],
    quote: '"Buscaba algo que resaltara mis facciones sin disfrazarme. El look Clean Girl fue un acierto absoluto."',
    photographerCredit: 'Editorial Studio Aura'
  },
  {
    id: 'glam',
    name: 'Glam Hollywood',
    subtitle: 'Impacto Cinematográfico & Alfombra Roja',
    description: 'Ojos almendrados con difuminado ahumado en tonos bronce, pestañas dimensionales, contouring escultórico y labios rojo carmín o nude aterciopelado.',
    vibe: 'Magnético, seductor, opulento, memorable.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    colorPalette: ['#992033', '#C5A059', '#3D1D24', '#F4E5D8'],
    highlights: ['Cat-eye difuminado en gel', 'Piel aterciopelada mate-luz', 'Iluminador champán en pómulos'],
    quote: '"Para mi gala benéfica necesitaba un look de alfombra roja. Todos elogiaron el acabado de mi maquillaje durante toda la noche."',
    photographerCredit: 'Campaña Red Carpet'
  },
  {
    id: 'dark-gothic',
    name: 'Dark & Gothic Chic',
    subtitle: 'Vamp Glamour, Misterio & Sofisticación',
    description: 'Inspiración alta costura gótica. Labios vino oscuro o ciruela profundo, delineados gráficos felinos, piel de porcelana mate y sombras carbón aterciopeladas.',
    vibe: 'Enigmático, vanguardista, rebelde, sensual.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
    colorPalette: ['#1C1417', '#421727', '#6F2232', '#CDB5B9'],
    highlights: ['Labios degradé ombré oscuro', 'Delineado geométrico de precisión', 'Piel de alabastro pulida'],
    quote: '"Demostraron que el estilo dark puede ser infinitamente elegante y chic. Rompieron todos los moldes convencionales."',
    photographerCredit: 'Colección Noir Nocturne'
  },
  {
    id: 'editorial',
    name: 'Editorial & High Fashion',
    subtitle: 'Vanguardia, Pasarela & Portadas de Moda',
    description: 'Texturas glossy en párpados, aplicaciones de pan de oro o perlas sutiles, monocromatismos audaces y líneas asimétricas concebidas para el lente fotográfico.',
    vibe: 'Artístico, conceptual, innovador, audaz.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop',
    colorPalette: ['#E6A15C', '#DDA7A5', '#7F3644', '#1E1B24'],
    highlights: ['Efecto wet-look en sombras', 'Perlas y micro-detalles en relieve', 'Estructura asimétrica'],
    quote: '"Para nuestra sesión de catálogo necesitábamos un maquillaje que hablara con la ropa. Entendieron la visión al 100%."',
    photographerCredit: 'Revista Estilo Magazine'
  },
  {
    id: 'fantasy',
    name: 'Fantasy & Temático',
    subtitle: 'Magia, Producciones Teatrales & Festivales',
    description: 'Creación de personajes, efectos etéreos de hada moderna, constelaciones faciales, purpurina holográfica y maquillaje para producciones audiovisuales o eventos temáticos.',
    vibe: 'Onírico, deslumbrante, libre, cinematográfico.',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1000&auto=format&fit=crop',
    colorPalette: ['#A06CD5', '#E1BEE7', '#F3C583', '#392B58'],
    highlights: ['Pigmentos cromáticos y neón', 'Gemas y micro-cristales engarzados', 'Trazos a mano alzada de fantasía'],
    quote: '"La fiesta temática requería algo fuera de serie. Mi maquillaje de ninfa estelar fue el centro de todas las miradas."',
    photographerCredit: 'Atelier Creative Lab'
  },
  {
    id: 'social',
    name: 'Contemporary Social',
    subtitle: 'Cóctel, Graduaciones & Invitada Perfecta',
    description: 'El equilibrio soñado entre frescura diurna y sofisticación nocturna. Tonos melocotón, dorados cálidos y un peinado semirrecogido que se mantiene perfecto durante horas.',
    vibe: 'Armónico, fotogénico, alegre, refinado.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
    colorPalette: ['#E5989B', '#B5838D', '#6D6875', '#FFCDB2'],
    highlights: ['Pestañas postizas en abanico', 'Rubor lifting en sienes', 'Labios nude jugosos'],
    quote: '"Fui la madrina de mi mejor amiga y el maquillaje aguantó abrazos, baile y calor sin un solo retoque."',
    photographerCredit: 'Celebración Jardines del Lago'
  }
];

export const BEFORE_AFTER_DATA: TransformationItem[] = [
  {
    id: 'transformacion-maquillaje-glam',
    title: 'Transformación Novia Glow & Glam',
    category: 'Maquillaje & Visagismo',
    beforeImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
    technique: 'Corrección de tonos con aerógrafo, ojos almendrados y luz central',
    timeTaken: '75 min',
    description: 'Unificamos el tono con acabado segunda piel, iluminamos la mirada con tonos bronce cálido y definimos el marco de las cejas con técnica hair-by-hair.',
    lookDetails: [
      'Piel con acabado satinado resistente al agua',
      'Pestañas individuales graduadas en esquina externa',
      'Labios overline sutil con gloss voluminizador'
    ]
  },
  {
    id: 'transformacion-balayage-luz',
    title: 'Balayage Cashmere & Gloss Capilar',
    category: 'Coloración & Estilismo',
    beforeImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop',
    technique: 'Micro-veladuras a mano alzada y matiz aperlado con ácido hialurónico',
    timeTaken: '150 min',
    description: 'Transformación de un cabello apagado a una melena tridimensional con destellos dorados sutiles que iluminan el contorno del rostro de forma natural.',
    lookDetails: [
      'Degradado impecable sin marcas de crecimiento',
      'Sellado de puntas con tratamiento térmico',
      'Ondas deshechas efecto brisa marina'
    ]
  },
  {
    id: 'transformacion-manicure-rusa',
    title: 'Manicura Escultural & Glazed Almond',
    category: 'Nails & Cuidado',
    beforeImage: 'https://images.unsplash.com/photo-1519014816548-bf7805b6e8b4?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop',
    technique: 'Limpieza con torno diamantado, alargamiento en gel y polvo cromo perlado',
    timeTaken: '70 min',
    description: 'Recuperamos la arquitectura de la uña natural con forma almendrada suave y acabado irisado que refleja destellos rosas y dorados.',
    lookDetails: [
      'Borde de cutícula limpio y profundamente nutrido',
      'Resistencia superior sin grosor artificial',
      'Efecto perlado reflectivo de pasarela'
    ]
  }
];

export const BEAUTY_TRENDS_DATA: TrendItem[] = [
  {
    id: 'siren-dewy-eyes',
    title: 'Siren Eyes & Dewy Glass: La mirada felina del momento',
    category: 'Tendencia Maquillaje',
    season: 'Primavera / Verano 2025',
    readTime: '3 min de lectura',
    excerpt: 'El delineado difuminado hacia las sienes combinado con piel húmeda ultra-hidratada sustituye al cat-eye tradicional de líneas duras.',
    fullContent: [
      'Esta temporada, la mirada busca alargarse de manera etérea y misteriosa. En lugar de delineadores líquidos negros de trazo rígido, la tendencia reina utiliza sombras chocolate y café grafito difuminadas en las esquinas exteriores con pincel biselado.',
      'El secreto reside en contrastarlo con una piel que no parezca empolvada: el iluminador líquido mezclado con crema hidratante crea el codiciado acabado "glass skin", haciendo que el rostro capte la luz con naturalidad celestial.'
    ],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop',
    keyProducts: ['Sombra en crema bronce', 'Delineador en gel marrón espresso', 'Bálsamo iluminador en barra'],
    proTip: 'Aplica el iluminador en el arco de cupido y en el hueso del pómulo antes de la base ligera para un brillo que nace desde dentro.'
  },
  {
    id: 'glazed-balletcore-nails',
    title: 'Balletcore & Chrome Glazed: Uñas etéreas de impacto sutil',
    category: 'Tendencia Uñas',
    season: 'Temporada Actual',
    readTime: '4 min de lectura',
    excerpt: 'Tonos rosa pastel translúcidos coronados por polvos cromados perlados que recrean las zapatillas de seda de satén.',
    fullContent: [
      'La fiebre por la manicura minimalista evoluciona hacia el universo "Balletcore". La uña se perfila en corte almendrado medio o squoval limpio, con una base en tono lechoso "milky pink".',
      'Sobre ella, se frota un pigmento perlado fino que reacciona a la luz del sol con destellos rosáceos y champán. Un look limpio pero hipnótico que combina tanto con vaqueros diarios como con trajes de gala.'
    ],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop',
    keyProducts: ['Polvo cromo blanco perla', 'Base niveladora milky blush', 'Aceite de jojoba orgánico'],
    proTip: 'Sellamos con un top coat flexible sin capa de dispersión para garantizar que el efecto espejo no pierda intensidad.'
  },
  {
    id: 'liquid-gloss-hair',
    title: 'Liquid Gloss & Ondas Deshechas: El cabello espejo',
    category: 'Tendencia Capilar',
    season: 'Edición Especial',
    readTime: '3 min de lectura',
    excerpt: 'El brillo de cristal es el nuevo lujo. Tratamientos de laminado y ondas abiertas que transmiten salud extrema y vitalidad.',
    fullContent: [
      'Atrás quedaron las melenas sobre-procesadas o tiesas por fijadores agresivos. El estilo "Liquid Hair" prioriza la sedosidad, el movimiento y un brillo reflectivo que parece agua en movimiento.',
      'Acompañado de ondas suaves modeladas con tenaza ancha y cepilladas con cuidado, este peinado aporta elegancia inmediata a cualquier estilismo sin dar la sensación de haber pasado horas frente al espejo.'
    ],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=900&auto=format&fit=crop',
    keyProducts: ['Sérum termoactivo de camelia', 'Tratamiento de ácido hialurónico capilar', 'Spray de brillo seco'],
    proTip: 'Un toque de aire frío en el secador al finalizar el peinado sella la cutícula y multiplica el reflejo lumínico.'
  },
  {
    id: 'face-gems-creative-art',
    title: 'Gemas Faciales & Festival Chic: La libertad creativa',
    category: 'Tendencia Artística',
    season: 'Novedad de Temporada',
    readTime: '5 min de lectura',
    excerpt: 'El auge de los festivales y eventos temáticos sitúa las aplicaciones de pedrería y delineados de fantasía en el centro de la escena.',
    fullContent: [
      'Ya no se reserva únicamente para disfraces: eventos de cumpleaños prémium, aniversarios, desfiles y festivales adoptan el arte facial como un accesorio de moda indispensable.',
      'Constelaciones de perlas alrededor de la sien, lágrimas de cristal iridiscente y detalles gráficos con purpurina biodegradable consiguen elevar la autoexpresión a una verdadera obra de arte portátil.'
    ],
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=900&auto=format&fit=crop',
    keyProducts: ['Cristales Swarovski termoadhesivos cosméticos', 'Glitter biodegradable en gel', 'Fijador de adherencia hipoalergénico'],
    proTip: 'Combinar perlas de diferentes diámetros (2mm y 4mm) aporta una tridimensionalidad mucho más rica y orgánica.'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Mirada ahumada en bronce cálido',
    category: 'maquillaje',
    categoryLabel: 'Maquillaje',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop',
    aspect: 'portrait',
    description: 'Sesión para invitada de honor con acabado piel de durazno y pestañas tridimensionales.',
    tags: ['Glow', 'Social', 'Bronce', 'Labios Nude']
  },
  {
    id: 'gal-2',
    title: 'Recogido nupcial romántico con trenza',
    category: 'peinados',
    categoryLabel: 'Peinados',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop',
    aspect: 'portrait',
    description: 'Moño bajo con textura deshecha y mechones libres enmarcando el rostro.',
    tags: ['Novia', 'Romántico', 'Recogido', 'Boho']
  },
  {
    id: 'gal-3',
    title: 'Manicura almendra con acabado perla cromo',
    category: 'manicure',
    categoryLabel: 'Manicure',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1000&auto=format&fit=crop',
    aspect: 'square',
    description: 'Esmaltado semipermanente de alta resistencia con reflejos tornasolados.',
    tags: ['Glazed', 'Chrome', 'Minimalista', 'Elegante']
  },
  {
    id: 'gal-4',
    title: 'Balayage avellana y ondas cinematográficas',
    category: 'coloracion',
    categoryLabel: 'Coloración',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1000&auto=format&fit=crop',
    aspect: 'portrait',
    description: 'Transición luminosa sin efecto raíz para aportar dimensión y movimiento a melenas largas.',
    tags: ['Balayage', 'Brillo Espejo', 'Miel', 'Ondas']
  },
  {
    id: 'gal-5',
    title: 'Ritual facial dérmico e iluminación con cryo',
    category: 'faciales',
    categoryLabel: 'Faciales',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop',
    aspect: 'landscape',
    description: 'Preparación de tez con activos botánicos y masaje descontracturante.',
    tags: ['Skin Prep', 'Glow', 'Relax', 'Hidratación']
  },
  {
    id: 'gal-6',
    title: 'Arte facial con gemas y constelaciones',
    category: 'caritas-pintadas',
    categoryLabel: 'Artístico',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop',
    aspect: 'portrait',
    description: 'Diseño para festival de música con piedras de cristal y pigmentos iridiscentes.',
    tags: ['Festival', 'Gemas', 'Glitter', 'Fantasía']
  },
  {
    id: 'gal-7',
    title: 'Gothic Glam con labios burdeos mate',
    category: 'tematico',
    categoryLabel: 'Temático / Dark',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
    aspect: 'portrait',
    description: 'Producción fotográfica con estética vamp chic y delineado rasgado al milímetro.',
    tags: ['Dark Chic', 'Vamp', 'Editorial', 'Bold Lips']
  },
  {
    id: 'gal-8',
    title: 'Clean Girl Look con peinado pulido slick back',
    category: 'maquillaje',
    categoryLabel: 'Maquillaje',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop',
    aspect: 'square',
    description: 'Simplicidad de alta gama: cejas peinadas hacia arriba y luminosidad pura.',
    tags: ['Clean Girl', 'Fresh', 'No-Makeup', 'Diario']
  },
  {
    id: 'gal-9',
    title: 'Ondas Hollywood clásicas de gala',
    category: 'peinados',
    categoryLabel: 'Peinados',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop',
    aspect: 'landscape',
    description: 'Estructura continua en forma de S con sellador de brillo anti-humedad.',
    tags: ['Red Carpet', 'Vintage', 'Ondas', 'Gala']
  },
  {
    id: 'gal-10',
    title: 'French manicure contemporánea con micropuntos',
    category: 'manicure',
    categoryLabel: 'Manicure',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1000&auto=format&fit=crop',
    aspect: 'portrait',
    description: 'Línea de sonrisa micro-delgada sobre base de camuflaje en tono pétalo.',
    tags: ['French', 'Nail Art', 'Geométrico', 'Chic']
  },
  {
    id: 'gal-11',
    title: 'Maquillaje editorial con toques dorados',
    category: 'tematico',
    categoryLabel: 'Editorial',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop',
    aspect: 'portrait',
    description: 'Pan de oro en párpado móvil y rubor en tonos terracota cálidos.',
    tags: ['Gold Leaf', 'Editorial', 'Pasarela', 'Creative']
  },
  {
    id: 'gal-12',
    title: 'Fantasía floral infantil para evento de gala',
    category: 'caritas-pintadas',
    categoryLabel: 'Caritas Pintadas',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    aspect: 'portrait',
    description: 'Trazos finos de acuarela cosmética y purpurina dorada biodegradable.',
    tags: ['Infantil', 'Flores', 'Fiestas', 'Delicado']
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Valentina Morales',
    role: 'Novia de Temporada',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    service: 'Maquillaje & Peinado Nupcial',
    modality: 'A Domicilio',
    comment: 'Llegaron a mi hotel puntuales con todo un set de iluminación y tocador profesional. El maquillaje me duró desde las 12 del mediodía hasta las 5 de la mañana intacto. Su trato calmado me transmitió una paz invaluable en un día tan emocionante.',
    date: 'Hace 2 semanas'
  },
  {
    id: 'rev-2',
    name: 'Sofía Carrión',
    role: 'Directora Creativa',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    service: 'Estilo Dark & Gothic Chic',
    modality: 'En Estudio',
    comment: 'Siempre me costó encontrar un salón que supiera hacer un look vamp/dark sin caer en lo exagerado o teatral. En Aura entendieron a la perfección la elegancia del estilo. El atelier es un santuario sensorial hermoso.',
    date: 'Hace 1 mes'
  },
  {
    id: 'rev-3',
    name: 'Camila Delgado',
    role: 'Cumpleaños & Evento Familiar',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    service: 'Caritas Pintadas & Manicure Express',
    modality: 'A Domicilio',
    comment: 'Contratamos el servicio a domicilio para el 15º cumpleaños de mi hija y sus amigas. Todas quedaron fascinadas con las gemas faciales y el glitter biodegradable. Profesionales, respetuosas e hipercreativas.',
    date: 'Hace 3 semanas'
  }
];

export const FAQS_DATA = [
  {
    question: '¿Con cuánta antelación debo solicitar mi cita?',
    answer: 'Recomendamos reservar con al menos 48 a 72 horas de anticipación para citas individuales, y de 2 a 6 meses de antelación para bodas o producciones completas de eventos.'
  },
  {
    question: '¿Cómo funciona el servicio a domicilio?',
    answer: 'Nos desplazamos a tu residencia, hotel o lugar del evento con todo el equipamiento necesario: iluminación profesional, sillas portátiles ergonómicas, toallas esterilizadas y maletines cosméticos de marcas prémium.'
  },
  {
    question: '¿Qué marcas y productos utilizan?',
    answer: 'Trabajamos exclusivamente con cosmética de alta gama dermatológicamente testada, hipoalergénica y cruelty-free (como Charlotte Tilbury, Dior Backstage, NARS, Olaplex, Kérastase y fórmulas minerales de última generación).'
  },
  {
    question: '¿Puedo solicitar un estilo completamente personalizado o fuera de lo común?',
    answer: '¡Por supuesto! Es uno de nuestros sellos distintivos. Desde looks hipernaturales hasta creaciones góticas, temáticas de fantasía o de pasarela editorial, nuestro equipo diseña la propuesta a tu medida.'
  }
];

export const LOOKBOOK_HOTSPOTS: LookbookHotspot[] = [
  {
    id: 'spot-eyes',
    x: 46,
    y: 34,
    title: 'Siren Eyes & Soft Smoke',
    category: 'Maquillaje de Ojos',
    technique: 'Delineado difuminado con sombra café expreso y pestañas individuales en abanico.',
    serviceId: 'maquillaje',
    description: 'Estructura almendrada que abre la mirada sin dureza.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'spot-skin',
    x: 36,
    y: 44,
    title: 'Piel Porcelana Dewy',
    category: 'Skin Prep & Fondo',
    technique: 'Preparación dérmica con ácido hialurónico multimolecular y base translúcida satinada.',
    serviceId: 'faciales',
    description: 'Luz tridimensional que respira y aguanta 16 horas intacta.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'spot-lips',
    x: 48,
    y: 56,
    title: 'Labios Velvet Nude Plump',
    category: 'Labios de Autor',
    technique: 'Perfilado degradado con subtono canela y toque central de gloss voluminizador.',
    serviceId: 'maquillaje',
    description: 'Volumen natural óptico de textura sedosa sin sensación pegajosa.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'spot-hair',
    x: 68,
    y: 28,
    title: 'Ondas Hollywood con Brillo Líquido',
    category: 'Haute Coiffure',
    technique: 'Ondas con tenacilla ancha en plano continuo y sellador anti-humedad térmico.',
    serviceId: 'peinados',
    description: 'Caída sedosa con rebote natural y tacto aterciopelado.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'spot-nails',
    x: 30,
    y: 72,
    title: 'Glazed Chrome Almond Nails',
    category: 'Manicura Escultural',
    technique: 'Nivelación con rubber base y pigmento perlado tornasol frotado a mano.',
    serviceId: 'manicure',
    description: 'El toque de lujo discreto que armoniza cualquier atuendo.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=600&auto=format&fit=crop'
  }
];

export const EDITORIAL_STORIES = [
  {
    id: 'story-craft',
    title: 'EL ARTE DE LA PRECISIÓN',
    subtitle: 'Nuestra Obsesión por el Detalle',
    text: 'Igual que los grandes talleres de alta costura, cada rostro y cada melena es un lienzo irrepetible. No aplicamos plantillas: estudiamos tu visagismo, tu tono dérmico y la temperatura de la luz donde celebrarás tu momento.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1200&auto=format&fit=crop',
    tag: 'Manifesto de Atelier'
  },
  {
    id: 'story-products',
    title: 'FÓRMULAS DE GRADO CINEMATOGRÁFICO',
    subtitle: 'Cosmética Sin Concesiones',
    text: 'Charlotte Tilbury, Dior Backstage, NARS, Kérastase y fórmulas veganas de alta pureza. Pigmentos micro-molidos que lucen celestiales a 10 centímetros de distancia y bajo el lente 4K.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    tag: 'Selección de Lujo'
  }
];

