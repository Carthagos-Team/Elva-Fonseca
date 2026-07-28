import type { Dictionary } from './en';

export const es: Dictionary = {
  common: {
    nav: { home: 'Inicio', about: 'Nosotros', programs: 'Programas', volunteer: 'Voluntariado' },
    header: { donateNow: 'Donar ahora', menu: 'Menú' },
    footer: {
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        programs: 'Programas',
        volunteer: 'Voluntariado',
        donate: 'Donar',
        contact: 'Contacto',
      },
      legal: { privacy: 'Política de Privacidad', terms: 'Términos de Servicio' },
      donateLabel: 'Donar',
      credit: 'diseñado por',
    },
    languageSwitcher: { labelEn: 'English', labelEs: 'Español' },
    missionBandCard: {
      ourMission: {
        title: 'Nuestra misión',
        body: 'Con empatía y manos abiertas, trabajamos para que nadie se quede atrás. Nuestro objetivo es estar al lado de quienes más lo necesitan.',
      },
      donationsUsage: {
        title: 'Cómo usamos tus donativos',
        allocations: {
          community: 'Programas comunitarios',
          operations: 'Operaciones',
          administration: 'Administración',
        },
      },
    },
  },
  home: {
    seo: {
      title: 'Apoyo para las comunidades de Veracruz',
      description:
        'La Fundación Elva Fonseca apoya programas de salud, educación y nutrición para comunidades vulnerables en Veracruz, México. Únete a nuestra misión hoy.',
    },
    hero: {
      titleLines: ['Un legado forjado', 'a mano.'],
      subcopy:
        'El legado de Elva Fonseca es de cuidado, valentía y generosidad, transformando su comunidad a través de actos cotidianos de amor y solidaridad.',
      imageAlt: 'Mujeres trabajando lado a lado en una cocina comunitaria',
    },
    impactStats: {
      eyebrow: 'Nuestro Impacto Social',
      heading: 'Transformando vidas, paso a paso',
      items: [
        { icon: 'users-round', value: '5500+', label: 'Niños beneficiados', bg: 'bg-studio', text: 'text-orchid' },
        { icon: 'graduation-cap', value: '200+', label: 'Jóvenes apoyados', bg: 'bg-brand', text: 'text-orchid' },
        { icon: 'cooking-pot', value: '3,000+', label: 'Desayunos entregados', bg: 'bg-corn', text: 'text-ink' },
        { icon: 'user-round', value: '950+', label: 'Adultos mayores atendidos', bg: 'bg-salem', text: 'text-orchid' },
        { icon: 'hand-heart', value: '100+', label: 'Voluntarios activos', bg: 'bg-corn', text: 'text-ink' },
      ],
    },
    ourPrograms: {
      heading: 'Nuestros Programas',
      ctaLabel: 'Donar ahora',
      items: [
        {
          bg: 'bg-cerulean-200',
          image: '/images/programs/education.webp',
          imageAlt: 'Niños con trajes tradicionales caminando en un desfile comunitario',
          title: 'Educación',
          description: 'Apoyo escolar, becas y talleres para un futuro mejor.',
        },
        {
          bg: 'bg-malachite-200',
          image: '/images/programs/health.webp',
          imageAlt: 'Árboles frutales en un huerto comunitario',
          title: 'Salud',
          description: 'Campañas médicas, cuidado y prevención.',
        },
        {
          bg: 'bg-buckthorn-200',
          image: '/images/programs/community.webp',
          imageAlt: 'Miembros de la comunidad reunidos en un taller al aire libre',
          title: 'Desarrollo Comunitario',
          description: 'Talleres y capacitación para fortalecer nuestra comunidad.',
        },
        {
          bg: 'bg-corn-200',
          image: '/images/programs/nutrition.webp',
          imageAlt: 'Una comida preparada para un programa comunitario de nutrición',
          title: 'Nutrición',
          description: 'Programas de nutrición para niños y familias.',
        },
        {
          bg: 'bg-studio-200',
          image: '/images/programs/senior-adults.webp',
          imageAlt: 'Un adulto mayor de la comunidad en casa',
          title: 'Adultos Mayores',
          description: 'Compañía y actividades para su bienestar.',
        },
      ],
      exploreImageAlt: 'Un voluntario usando una playera de la Fundación Elva Fonseca',
      exploreLabel: 'Explora nuestros programas',
    },
    faq: {
      heading: 'Preguntas Frecuentes',
      subheading: 'Encuentra respuestas a las preguntas más comunes sobre nuestra fundación',
      photoAlt: 'Un miembro de la comunidad usando una playera de la Fundación Elva Fonseca, de pie al aire libre',
      prevLabel: 'Preguntas anteriores',
      nextLabel: 'Siguientes preguntas',
      carouselLabel: 'Preguntas frecuentes por categoría',
      categoryWord: 'Categoría',
      ofWord: 'de',
      questionWord: 'Pregunta',
      categories: [
        { key: 'foundation', title: 'Sobre la Fundación' },
        { key: 'donations', title: 'Donaciones y Apoyo' },
        { key: 'volunteering', title: 'Voluntariado' },
        { key: 'programs', title: 'Programas y Servicios' },
        { key: 'partnerships', title: 'Alianzas y Colaboraciones' },
      ],
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet in odio vel sollicitudin. Nam aliquet augue dolor, quis varius ligula aliquet nec.',
    },
    ctaDonate: {
      titleLines: ['Dona o patrocina y', 'mantén viva la misión.'],
      body: 'Ya sea que hagas una donación personal o apoyes como patrocinador, no solo estás ofreciendo recursos. Te unes a una historia construida con cuidado, valentía y transformación. Cada contribución, grande o pequeña, ayuda a que esta misión crezca y llegue a más vidas, un acto generoso a la vez.',
      ctaLabel: 'Donar ahora',
    },
    story: {
      eyebrow: 'Sobre nosotros',
      titleLines: ['Arraigado en el amor,', 'cultivado con acción.'],
      body: 'La Fundación Elva Fonseca nació de la fortaleza, la compasión y el compromiso de una mujer con su comunidad. Lo que comenzó como pequeños actos desinteresados continúa hoy como un legado de cuidado y oportunidad para quienes más lo necesitan.',
      imageAlt: 'Miembros de la comunidad saludándose en una comida compartida',
      ctaLabel: 'Descubre nuestra historia',
    },
    stories: {
      heading: 'Historias que inspiran',
      items: [
        { img: '/images/stories/education.webp', category: 'Educación', caption: 'María ahora sueña en grande.' },
        { img: '/images/stories/health.webp', category: 'Salud', caption: 'Brindamos cuidado donde más se necesita.' },
        { img: '/images/stories/nutrition.webp', category: 'Nutrición', caption: 'Un desayuno que cambia su día.' },
        { img: '/images/stories/community.webp', category: 'Comunidad', caption: 'Talleres que crean oportunidades.' },
        { img: '/images/stories/senior-adults.webp', category: 'Adultos Mayores', caption: 'Acompañamos con amor y respeto.' },
      ],
      tiersHeading: 'Tu ayuda cambia vidas',
      tiers: [
        { amount: '$10 USD', label: 'Alimenta a un niño' },
        { amount: '$25 USD', label: 'Apoya materiales educativos' },
        { amount: '$50 USD', label: 'Financia talleres comunitarios' },
        { amount: '$100 USD', label: 'Impulsa programas completos' },
      ],
      ctaLabel: 'Apóyanos',
      missionBand: {
        ctaTitle: 'Sé parte del cambio',
        ctaBody: 'Tu apoyo mantiene vivo el legado de Elva, convirtiendo la compasión en acción.',
        primaryLabel: 'Donar ahora',
        secondaryLabel: 'Sé voluntario',
      },
    },
    ctaVolunteer: {
      titleLines: ['Hay muchas formas', 'de hacer la diferencia.'],
      subcopy:
        'Ya sea donando, siendo voluntario o compartiendo nuestro mensaje, formas parte de algo más grande. Ayúdanos a continuar el legado de compasión y servicio de Elva.',
      imageAlt: 'Un miembro de la comunidad apoyado por la fundación',
      primaryLabel: 'Donar ahora',
      secondaryLabel: 'Sé voluntario',
    },
    ctaBand: {
      titleLines: ['Como voluntario,', 'puedes hacer la diferencia.'],
      body: [
        'Hay sabiduría en cada mano y fuerza en cada gesto. Al ofrecer tu tiempo y elegir cuidar, te vuelves parte de algo más grande.',
        'Compartir lo que la vida te ha enseñado a través de la acción, la presencia y la generosidad significa unirte a un movimiento que construye, sana y eleva comunidades.',
      ],
      ctaLabel: 'Aplica para ser voluntario',
    },
  },
  about: {
    seo: {
      title: 'Nuestra Historia y Misión en Veracruz',
      description:
        'Descubre la historia de Elva Fonseca y cómo su legado de compasión dio forma a una fundación dedicada a servir a comunidades en todo Veracruz, México.',
    },
    hero: {
      titleLines: ['Una historia de cuidado'],
      subcopy: [
        'La Fundación Elva Fonseca es una organización sin fines de lucro que trabaja para apoyar a comunidades vulnerables, especialmente en áreas rurales de Veracruz, México.',
        'Lideramos iniciativas centradas en la salud, la educación, el cuidado ambiental, el empoderamiento de las mujeres y el desarrollo infantil, siempre con un enfoque centrado en las personas.',
      ],
      imageAlt: 'Una persona colocando tortillas en un horno tradicional de leña',
      ctaLabel: 'Explorar iniciativas',
    },
    legacyStory: {
      section1Heading: 'Una vida de fortaleza silenciosa.',
      section1Body:
        'Elva enfrentó muchos desafíos a lo largo de su vida. Con recursos escasos, trabajó incansablemente lavando ropa para otros para ayudar a mantener a su familia. A pesar de las dificultades, siempre encontró la manera de compartir lo\u00A0poco\u00A0que\u00A0tenía.',
      photo1Alt: 'Dos niños, un hermano mayor junto a uno más pequeño, en un retrato en sepia',
      section2Quote: '«Da lo que tienes, no lo que te sobra.»',
      illustrationAlt: 'Retrato ilustrado de Elva Fonseca dentro de un marco ovalado, con su firma',
      section2Label: 'El corazón de una familia.',
      section2Body:
        'Este es uno de sus dichos más memorables. A través de su generosidad, nos enseñó el verdadero significado de la compasión y el servicio, dando siempre desinteresadamente a quienes lo necesitaban, incluso cuando ella misma tenía muy poco.',
      section3Heading: 'De sus manos, un legado.',
      photo3Alt: 'Una niña con un vestido floral, posando para un retrato',
      sealAlt: 'Sello: Del Sur de México',
      section3Body:
        'Mientras sus hijos —Rosa, Antonio, Juan, Leydi y Adilene— crecían, Elva siguió siendo el pilar de nuestra familia. Cuidó a sus nietos y bisnietos con el mismo amor incondicional y dedicación que definieron toda su vida.',
      section4Heading: 'Un futuro forjado por su ejemplo.',
      photo4Alt: 'Una mujer mayor con lentes y una playera de la Fundación Elva Fonseca, al aire libre',
      section4Body:
        'La Fundación Elva Fonseca fue creada para honrar su vida, sus valores y el amor que dio con tanta libertad. Nuestra misión es continuar su legado sirviendo a quienes lo necesitan en nuestra comunidad, tal como ella lo hizo, con corazones y manos abiertas. Su ejemplo vive en todo lo que hacemos.',
    },
    story: {
      paragraphs: [
        'Esta fundación es también una celebración del progreso. Se inspiró no solo en la vida de Elva, sino en la primera generación de sus nietos en acceder a la educación superior.',
        'Llevamos adelante su sueño trabajando para asegurar que las futuras generaciones —especialmente aquellas de origen humilde— tengan los recursos y las oportunidades para crecer, prosperar y transformar sus propias vidas.',
      ],
      photoAlt: 'Miembros de la comunidad estrechándose la mano alrededor de una mesa en una reunión',
    },
    ctaDonate: {
      titleLines: ['Nuestra misión'],
      body: 'Con empatía y manos abiertas, trabajamos para que nadie se quede atrás. Nuestro objetivo es estar al lado de quienes lo necesitan, ofreciendo cuidado, recursos y dignidad a los miembros más vulnerables de\u00A0nuestra\u00A0comunidad.',
      ctaLabel: 'Donar ahora',
    },
    team: {
      heading: 'nuestro equipo',
      members: [
        { name: 'Manuel Toto', role: 'Presidente' },
        { name: 'Alexia Díaz', role: 'Directora' },
        { name: 'Deidamia Reyes', role: 'Secretaria' },
        { name: 'Yasmín López', role: 'Tesorera' },
        { name: 'Isabel Ruíz', role: 'Voluntaria' },
        { name: 'Carlos Toto', role: 'Voluntario' },
      ],
    },
    ctaBand: {
      titleLines: ['¿Listo para echar una mano?'],
      body: [
        'Tu apoyo nos ayuda a mantener vivo el legado de Elva, convirtiendo la compasión en acción y los pequeños gestos en cambios duraderos. Cada contribución ayuda a nutrir, educar y elevar a quienes más lo necesitan.',
      ],
      ctaLabel: 'Donar ahora',
      secondaryLabel: 'Voluntariado',
    },
  },
  programs: {
    seo: {
      title: 'Educación, Salud y Nutrición',
      description:
        'Descubre los programas comunitarios de la Fundación Elva Fonseca — salud, educación, nutrición y apoyo a familias en todo Veracruz, México.',
    },
    hero: {
      titleLines: ['Nuestros Programas'],
      subcopy:
        'El legado de Elva Fonseca es de cuidado, valentía y generosidad, transformando su comunidad a través de actos cotidianos de amor y solidaridad.',
      imageAlt: 'Una niña de pie en un río sosteniendo recipientes reciclables',
    },
    slider: {
      prevLabel: 'Anterior',
      nextLabel: 'Siguiente',
      prevAriaLabel: 'Programa anterior',
      nextAriaLabel: 'Siguiente programa',
      dotsAriaLabel: 'Programas',
      slides: [
        {
          titleLines: ['Necesidades Básicas y', 'Crecimiento Personal'],
          imageAlt: 'Una mujer sonriendo cálidamente mientras desgrana maíz al aire libre',
          cards: [
            { title: 'Comedores comunitarios', desc: 'Comidas diarias servidas a personas mayores y niños de 5 a 14 años.', value: '132,480', label: 'Comidas servidas' },
            { title: 'Cocinas comunitarias', desc: 'Cocinas que brindan comidas nutritivas para familias y personas en situación de inseguridad alimentaria.', value: '4,230', label: 'Familias alimentadas' },
            { title: 'Apoyo directo', desc: 'Alimentos, ropa, becas y recursos vitales donados a personas y familias en necesidad urgente.', value: '18,720', label: 'Artículos esenciales donados' },
          ],
        },
        {
          titleLines: ['Salud y', 'Movilidad'],
          imageAlt: 'Una colorida calle colonial enmarcada por un arco amarillo',
          cards: [
            { title: 'Apoyo a la movilidad', desc: 'Distribución de sillas de ruedas, andaderas y bastones para promover la independencia.', value: '1,045', label: 'Ayudas de movilidad entregadas' },
            { title: 'Salud comunitaria', desc: 'Jornadas médicas gratuitas, donación de medicamentos, actividad física y distribución de insumos de higiene.', value: '6,310', label: 'Servicios de salud brindados' },
            { title: 'Programa de apoyo a adultos mayores', desc: '«Solidaridad para Adultos Mayores» ofrece cuidado, conexión y ayuda esencial a personas mayores.', value: '895', label: 'Adultos mayores apoyados' },
          ],
        },
        {
          titleLines: ['Educación y', 'Tecnología'],
          imageAlt: 'Un aula luminosa con escritorios y sillas de madera',
          cards: [
            { title: 'Acceso gratuito a tecnología e impresión', desc: 'Computadoras y servicios de impresión disponibles para tareas escolares y trámites esenciales.', value: '3,680', label: 'Sesiones' },
            { title: 'Aulas digitales', desc: 'Educación moderna e inclusiva a través de recursos digitales, especialmente en zonas desatendidas.', value: '2,140', label: 'Estudiantes alcanzados' },
            { title: 'Sala sensorial y área de juegos', desc: 'Un espacio especialmente diseñado para que niños con diferentes capacidades jueguen y crezcan.', value: '510', label: 'Sesiones terapéuticas realizadas' },
            { title: 'Educación y cultura', desc: 'Talleres de lectura, donación de útiles escolares, eventos de alfabetización y festivales culturales.', value: '115', label: 'Eventos educativos realizados' },
          ],
        },
        {
          titleLines: ['Arte, Cultura', 'y Medio Ambiente'],
          imageAlt: 'Banderines de papel picado colgados sobre una animada calle de mercado',
          cards: [
            { title: 'Crecimiento cultural', desc: 'Clases gratuitas de pintura, carpintería, corte de cabello y talleres de música y danza tradicional.', value: '320', label: 'Talleres creativos realizados' },
            { title: 'Talleres de arte para niños', desc: 'Concursos de dibujo y sesiones de arte que promueven la creatividad y la expresión personal.', value: '740', label: 'Jóvenes artistas participantes' },
            { title: 'Eventos con causa', desc: 'Eventos como el «Mercado Mano Solidaria» destacan el talento local, promueven el reciclaje y celebran valores.', value: '42', label: 'Eventos comunitarios realizados' },
            { title: 'Medio ambiente', desc: 'Plantación de árboles, esfuerzos de reforestación y campañas de limpieza comunitaria.', value: '8,700', label: 'Árboles plantados' },
          ],
        },
      ],
    },
    voices: {
      headingLines: ['Voces de', 'la comunidad:'],
      thumbAriaLabel: 'Mostrar el testimonio de {name}',
      testimonials: [
        {
          name: 'Lillian Fernandez',
          role: 'Voluntaria',
          quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt".',
          imageAlt: 'Lillian sonriendo al aire libre, usando una playera de la Fundación Elva Fonseca',
        },
        {
          name: 'Marcos Herrera',
          role: 'Participante del Programa',
          quote: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, ex ea".',
          imageAlt: 'Marcos de pie al aire libre, usando una playera de la Fundación Elva Fonseca',
        },
        {
          name: 'Carla Méndez',
          role: 'Coordinadora Comunitaria',
          quote: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ut".',
          imageAlt: 'Carla de pie al aire libre, usando una playera tipo polo de la Fundación Elva Fonseca',
        },
      ],
    },
    whatIsNext: {
      heading: '¿Qué sigue?',
      subheading:
        'Apenas estamos comenzando. Guiados por nuestros valores e inspirados por el legado de Elva, estamos comprometidos a ampliar nuestro alcance y profundizar nuestro impacto en las comunidades que más lo necesitan.',
      cards: [
        {
          imageAlt: 'Miembros de la comunidad tomados de la mano',
          titleLines: ['Movilidad', 'para todos'],
          body: 'Planeamos abrir nuevos espacios de comedor comunitario en todo el municipio, garantizando que más niños y adultos mayores tengan acceso constante a comidas nutritivas y conexión compartida.',
        },
        {
          imageAlt: 'Una niña de pie en la puerta de su casa',
          titleLines: ['Cultivando habilidades,', 'cultivando futuros'],
          body: 'Estamos ampliando nuestros programas de capacitación vocacional para ayudar a más personas a adquirir las herramientas y conocimientos que necesitan para construir futuros más brillantes y autosuficientes para ellas mismas y sus familias.',
        },
        {
          imageAlt: 'Yuca fresca y verduras en cajas',
          titleLines: ['Más comidas,', 'más pueblos'],
          body: 'Planeamos abrir nuevos espacios de comedor comunitario en todo el municipio, garantizando que más niños y adultos mayores tengan acceso constante a comidas nutritivas y conexión compartida.',
        },
      ],
    },
    ctaBand: {
      titleLines: ['¿Tienes un proyecto soñado que podría beneficiar a tu comunidad?'],
      body: [
        'Ya sea un taller de cerámica, clases de cocina, un club de jardinería o algo completamente nuevo, nos encantaría escucharlo.',
      ],
      ctaLabel: 'Voluntariado',
      secondaryLabel: 'Contáctanos',
    },
  },
  stories: {
    seo: {
      title: 'Historias de Impacto',
      description:
        'Lee historias reales de las comunidades a las que sirve la Fundación Elva Fonseca en Veracruz, México, y conoce de primera mano el impacto de nuestros programas.',
    },
    heading: 'Historias',
    body: 'Historias de las comunidades a las que servimos.',
  },
  donate: {
    seo: {
      title: 'Dona para Apoyar Nuestra Misión',
      description:
        'Tu donación ayuda a financiar programas de salud, educación y nutrición para familias en Veracruz, México. Dona hoy y apoya el legado duradero de Elva.',
    },
    hero: {
      headlineLines: ['¿Listo para ayudar?', 'Empieza aquí'],
      subcopy: 'Cada contribución cuenta. Apoya nuestra misión y genera un impacto duradero hoy.',
      imageAlt: 'Voluntarios formando un círculo, tomados de las manos al aire libre',
      givebutterAriaLabel: 'Formulario de donación Givebutter — próximamente',
      givebutterText: 'Formulario de donación (Givebutter) — próximamente',
    },
    impactIntro: {
      headingLines: ['Manos abiertas,', 'cambios significativos.'],
      body: 'Cada donación se pone a trabajar en las causas que más importan a nuestra comunidad: educación y becas, campañas de salud, apoyo nutricional, cuidado de adultos mayores y talleres que fortalecen a la comunidad en su conjunto. Tu generosidad se convierte en la oportunidad de alguien.',
    },
    missionBand: {
      ctaTitle: 'Donde ocurre el impacto',
      ctaBody: 'Conoce los programas que tu donación apoya directamente.',
      primaryLabel: 'Explorar',
      secondaryLabel: 'Sé voluntario',
    },
    ctaBand: {
      titleLines: ['Como voluntario,', 'puedes hacer la diferencia.'],
      body: [
        'Compartir lo que la vida te ha enseñado a través de la acción, la presencia y la generosidad significa unirte a un movimiento que construye, sana y eleva comunidades.',
      ],
      ctaLabel: 'Aplica para ser voluntario',
    },
    sponsorship: {
      eyebrow: 'Patrocinio',
      titleLines: ['Cada patrocinador es', 'una semilla de cambio.'],
      body: 'Construyamos algo significativo juntos. Ponte en contacto para explorar oportunidades de colaboración, ya sea co-creando un programa o apoyando una iniciativa existente.',
      imageAlt: 'Un patrocinador comunitario usando una gorra roja al aire libre',
      ctaLabel: 'Enviar un mensaje',
    },
  },
  volunteer: {
    seo: {
      title: 'Sé Voluntario en Veracruz, México',
      description:
        'Sé voluntario con la Fundación Elva Fonseca y ayuda a servir a comunidades en Veracruz, México. Aprende cómo participar y generar un cambio real.',
    },
    hero: {
      titleLines: ['¿Listo para ayudar?', 'Empieza aquí'],
      subcopy: 'Cada contribución cuenta. Apoya nuestra misión y genera un impacto duradero hoy.',
      imageAlt: 'Vista aérea de la comunidad al atardecer, con un río serpenteando entre campos verdes y casas',
    },
    intro: {
      heading: 'El voluntariado no se trata de tener tiempo libre. Se trata de dar lo que puedes.',
      subheading: 'Sigue estos sencillos pasos para empezar a marcar la diferencia:',
    },
    steps: {
      items: [
        {
          title: 'Explora tu causa',
          body: 'Desde apoyar a niños hasta servir comidas o plantar árboles, nuestros programas ofrecen muchas formas de ayudar. Encuentra la que sea adecuada para ti.',
          imageAlt: 'Un niño vadeando un río, sosteniendo un vaso y una bolsa de reciclables recolectados',
        },
        {
          title: 'Envía tu solicitud',
          body: 'Completa el formulario de solicitud de voluntariado a continuación. Cuéntanos tus intereses y disponibilidad, y en cuanto lo recibamos, un miembro de nuestro equipo se pondrá en contacto contigo para guiarte en los siguientes pasos.',
          imageAlt: 'Una niña de pie en el umbral de una puerta',
        },
        {
          title: 'Únete a nuestro programa de capacitación',
          intro: 'Todos los nuevos voluntarios pasan por un recorrido de capacitación de 5 días:',
          subSteps: [
            { label: 'Días 1 y 2:', text: 'Sesiones introductorias para entender nuestros valores, protocolos de seguridad y objetivos del programa.' },
            { label: 'Días 3 a 5:', text: 'Acompañamiento práctico y experiencias reales, adaptadas al programa al que te unirás.' },
          ],
          imageAlt: 'Un grupo de voluntarios sentados en un salón durante una sesión de capacitación',
        },
        {
          title: 'Comienza tu camino con nosotros',
          body: 'Después de la capacitación, te convertirás oficialmente en parte de nuestro equipo de voluntarios, listo para apoyar, crecer y traer un cambio positivo a nuestra comunidad.',
          imageAlt: 'Voluntarios y niños reunidos al aire libre bajo un árbol',
        },
      ],
    },
    form: {
      heading: '¿Listo para echar una mano?',
      body: 'Déjanos tus datos abajo y nos pondremos en contacto pronto. Nos encantaría saber más sobre ti y cómo te gustaría participar.',
      photoAlt: 'Un niño de pie en una puerta',
      nameLabel: 'Nombre',
      emailLabel: 'Correo electrónico',
      messageLabel: 'Agrega un mensaje',
      sendLabel: 'Enviar',
    },
  },
  contact: {
    seo: {
      title: 'Contáctanos',
      description:
        'Tienes una pregunta o quieres participar? Contacta a la Fundación Elva Fonseca — nos encantaría saber de ti y damos la bienvenida a tu apoyo.',
    },
    hero: {
      heading: 'Buzón abierto',
      body: 'Ya sea que tengas una pregunta, quieras participar o simplemente compartir tus ideas, tu voz importa. Juntos podemos construir comunidades más fuertes y futuros más brillantes.',
      photoAlt: 'Un miembro de la comunidad apoyado por la fundación',
      firstNameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      emailLabel: 'Correo electrónico',
      interestLabel: 'Asunto',
      selectPlaceholder: 'Selecciona',
      interests: ['Consulta general', 'Voluntariado', 'Donaciones y apoyo', 'Programas y servicios', 'Alianzas y colaboraciones'],
      sendLabel: 'Enviar',
    },
    ctaVolunteer: {
      titleLines: ['La transparencia genera confianza.'],
      subcopy: 'Explora resultados detallados e impacto en nuestro Informe de Transparencia, actualizado regularmente para una rendición de cuentas total.',
      imageAlt: 'Un miembro de la comunidad usando una playera de la Fundación Elva Fonseca',
      primaryLabel: 'Leer',
    },
    ctaBand: {
      titleLines: ['Tantas formas de', 'hacer la diferencia.'],
      body: [
        'Ya sea donando, siendo voluntario o simplemente corriendo la voz, formas parte de algo más grande. Ayúdanos a continuar el legado de compasión y servicio de Elva.',
      ],
      ctaLabel: 'Voluntariado',
      secondaryLabel: 'Donar',
    },
  },
  thankYou: {
    seo: {
      title: 'Gracias',
      description:
        'Gracias por apoyar a la Fundación Elva Fonseca. Tu generosidad nos ayuda a seguir sirviendo a comunidades en todo Veracruz, México.',
    },
    ctaBand: {
      titleLines: ['Gracias por', 'apoyar nuestra misión.'],
      body: [
        'Tu donación está en camino de convertirse en una comida, una ayuda de movilidad, un útil escolar, un momento de cuidado — exactamente donde más se necesita. El legado de Elva Fonseca vive gracias a personas como tú.',
      ],
      receipt: 'Se ha enviado un recibo a tu correo electrónico.',
      prompt: '¿Quieres hacer aún más?',
      ctaLabel: 'Sé voluntario',
      secondaryLabel: 'Comparte nuestra causa',
    },
  },
};
