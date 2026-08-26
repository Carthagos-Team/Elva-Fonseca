export const en = {
  common: {
    nav: { home: 'Home', about: 'About', programs: 'Programs', volunteer: 'Volunteer' },
    header: { donateNow: 'Donate now', menu: 'Menu' },
    footer: {
      nav: {
        home: 'Home',
        about: 'About',
        programs: 'Programs',
        volunteer: 'Volunteer',
        donate: 'Donate',
        contact: 'Contact',
      },
      legal: { privacy: 'Privacy Policy', terms: 'Terms of Service' },
      donateLabel: 'Donate',
      credit: 'designed by',
    },
    languageSwitcher: { labelEn: 'English', labelEs: 'Español' },
    donateModal: {
      ariaLabel: 'Donate',
      heading: 'Scan to donate',
      body: 'Scan the QR code with your phone to donate directly through Givebutter, or share the campaign with friends and family.',
      qrAlt: 'QR code linking to the Givebutter donation page for Fundación Elva Fonseca',
      shareButtonLabel: 'Share on WhatsApp',
    },
    missionBandCard: {
      ourMission: {
        title: 'Our mission',
        body: 'With empathy and open hands, we work so no one is left behind. Our goal is to stand beside those who need it most.',
      },
      donationsUsage: {
        title: 'How we use your donations',
        allocations: {
          community: 'Community programs',
          operations: 'Operations',
          administration: 'Administration',
        },
      },
    },
  },
  home: {
    seo: {
      title: 'Support for Veracruz Communities',
      description:
        'The Elva Fonseca Foundation supports health, education, and nutrition programs for vulnerable communities in Veracruz, Mexico. Join our mission today.',
    },
    hero: {
      titleLines: ['A Legacy Crafted', 'by Hand.'],
      subcopy:
        "Elva Fonseca's legacy is one of care, courage, and generosity, transforming her community through everyday acts of love and solidarity.",
      imageAlt: 'Women working side by side in a community kitchen',
    },
    impactStats: {
      eyebrow: 'Our Social Impact',
      headingLines: ['Transforming lives,', 'step\u00A0by\u00A0step'],
      items: [
        { icon: 'users-round', value: '5500+', label: 'Children Benefited', bg: 'bg-studio', text: 'text-orchid' },
        { icon: 'graduation-cap', value: '200+', label: 'Youth Supported', bg: 'bg-brand', text: 'text-orchid' },
        { icon: 'cooking-pot', value: '3,000+', label: 'Breakfasts Delivered', bg: 'bg-corn', text: 'text-ink' },
        { icon: 'user-round', value: '950+', label: 'Seniors Served', bg: 'bg-salem', text: 'text-orchid' },
        { icon: 'hand-heart', value: '100+', label: 'Active Volunteers', bg: 'bg-corn', text: 'text-ink' },
      ],
    },
    ourPrograms: {
      heading: 'Our Programs',
      ctaLabel: 'Donate now',
      closeLabel: 'Close',
      items: [
        {
          key: 'education',
          bg: 'bg-cerulean-200',
          image: '/images/programs/education.webp',
          modalImage: '/images/programs/modals/education.webp',
          imageAlt: 'A Fundación Elva Fonseca educator leading a learning activity',
          titleLines: ['Education &', 'Technology'],
          description: 'School support, scholarships, and workshops for a better future.',
          modalBody: [
            { text: 'We provide ', strong: false },
            { text: 'classes, educational activities, and access to technology', strong: true },
            {
              text: ' that help children, youth, adults, and seniors learn new skills and create new opportunities.',
              strong: false,
            },
          ],
        },
        {
          key: 'mobility',
          bg: 'bg-malachite-200',
          image: '/images/programs/health.webp',
          modalImage: '/images/programs/modals/mobility.webp',
          imageAlt: 'A community member receiving an eye examination',
          titleLines: ['Mobility &', 'Health'],
          description: 'Medical campaigns, care, and prevention.',
          modalBody: [
            { text: 'We provide ', strong: false },
            { text: 'wheelchairs, walkers, crutches, and other mobility equipment', strong: true },
            { text: ' to help individuals maintain greater independence. We also offer ', strong: false },
            {
              text: 'vision and dental campaigns, health screenings, and basic nursing and caregiving classes.',
              strong: true,
            },
          ],
        },
        {
          key: 'development',
          bg: 'bg-buckthorn-200',
          image: '/images/programs/community.webp',
          modalImage: '/images/programs/modals/development.webp',
          imageAlt: 'Community members gathered at an outdoor workshop',
          titleLines: ['Community', 'Development'],
          description: 'Workshops and training to strengthen our community.',
          modalBody: [
            {
              text: 'We connect families with community resources, general legal guidance, parenting support, and educational workshops. We have a special commitment to families of children with special needs, helping parents access information, resources, and community support.',
              strong: false,
            },
          ],
        },
        {
          key: 'dining',
          bg: 'bg-corn-200',
          image: '/images/programs/nutrition.webp',
          modalImage: '/images/programs/modals/dining.webp',
          imageAlt: 'A prepared meal for a community nutrition program',
          titleLines: ['Community', 'Dining'],
          description: 'Nutrition programs for children and families.',
          modalBody: [
            { text: 'We provide ', strong: false },
            { text: 'free breakfasts and meals', strong: true },
            {
              text: ' to individuals and families experiencing poverty and extreme need, with special attention to ',
              strong: false,
            },
            { text: 'children and elders.', strong: true },
          ],
        },
        {
          key: 'art',
          bg: 'bg-studio-200',
          image: '/images/programs/art-culture.webp',
          modalImage: '/images/programs/modals/art.webp',
          imageAlt: 'Children taking part in an educational arts activity',
          titleLines: ['Art, Culture &', 'Environment'],
          description: 'Art classes and cultural activities.',
          modalBody: [
            { text: 'We offer ', strong: false },
            { text: 'art classes, cultural activities, and environmental programs', strong: true },
            {
              text: ' that encourage creativity, self-expression, community connection, and environmental awareness. Our activities are designed to be inclusive and welcome ',
              strong: false,
            },
            { text: 'children and individuals with special needs.', strong: true },
          ],
        },
      ],
      exploreImageAlt: 'A volunteer wearing a Fundación Elva Fonseca t-shirt',
      exploreLabel: 'Explore our programs',
    },
    faq: {
      heading: 'Frequently Asked Questions',
      subheading: 'Find answers to the most common questions about our foundation.',
      photoAlt: 'A community member wearing a Fundación Elva Fonseca t-shirt, standing outdoors',
      prevLabel: 'Previous questions',
      nextLabel: 'Next questions',
      carouselLabel: 'Frequently asked questions by category',
      categoryWord: 'Category',
      ofWord: 'of',
      categories: [
        {
          key: 'foundation',
          title: 'About the Foundation',
          items: [
            {
              q: 'What does Fundación Elva Fonseca do?',
              a: 'We support individuals and families through community programs focused on food assistance, mobility and health, community development, education and technology, and art, culture and the environment.',
            },
            {
              q: 'How can I contact Fundación Elva Fonseca?',
              a: {
                before: 'You can contact us directly through our ',
                linkLabel: 'website contact form',
                after:
                  ' or social media channels to learn more about programs, volunteering, donations, or partnerships.',
              },
            },
          ],
        },
        {
          key: 'donations',
          title: 'Donations and Support',
          items: [
            {
              q: 'How can I donate?',
              a: 'You can support Fundación Elva Fonseca through monetary donations, supplies, mobility equipment, food, educational materials, or other needed resources.',
            },
            {
              q: 'How are donations used?',
              a: 'Donations help us provide programs, resources, equipment, meals, educational opportunities, and direct community support to those who need it most.',
            },
          ],
        },
        {
          key: 'volunteering',
          title: 'Volunteering',
          items: [
            {
              q: 'How can I become a volunteer?',
              a: 'We welcome volunteers who want to contribute their time, knowledge, professional skills, or talents. Opportunities may include helping with events, community meals, educational activities, art classes, and programs supporting children and individuals with special needs.',
            },
            {
              q: 'Can I volunteer by teaching a class or workshop?',
              a: 'Yes. We welcome professionals and community members interested in sharing their knowledge through classes, workshops, arts, technology, health education, or other valuable skills.',
            },
          ],
        },
        {
          key: 'programs',
          title: 'Programs and Services',
          items: [
            {
              q: 'Who can participate in your programs?',
              a: 'Our programs serve children, families, older adults, individuals with special needs, and people experiencing financial hardship or extreme need. Eligibility may vary depending on the program.',
            },
            {
              q: 'Are your programs free?',
              a: 'Many of our programs and community activities are provided at no cost, thanks to the support of volunteers, donors, and community partners.',
            },
            {
              q: 'How can I receive assistance?',
              a: 'Contact our team to learn about available programs, upcoming events, and current resources. Availability may vary depending on the program and resources available.',
            },
          ],
        },
        {
          key: 'partnerships',
          title: 'Partnerships and Collaborations',
          items: [
            {
              q: 'Can my business or organization partner with the Foundation?',
              a: 'Absolutely. We welcome partnerships, sponsorships, and collaborations with businesses, professionals, nonprofits, schools, and community organizations that share our commitment to serving the community.',
            },
          ],
        },
      ],
    },
    ctaDonate: {
      titleLines: ['Donate or sponsor and', 'keep the mission alive.'],
      body: "Whether you're making a personal donation or supporting as a sponsor, you're not just offering resources. You're joining a story built on care, courage, and transformation. Every contribution, big or small, helps this mission grow and reach more lives, one generous act at a time.",
      ctaLabel: 'Donate now',
    },
    story: {
      eyebrow: 'About us',
      titleLines: ['Rooted in love,', 'grown through action.'],
      body: "The Elva Fonseca Foundation was born from one woman's strength, compassion, and commitment to her community. What started with small, selfless acts continues today as a legacy of care and opportunity for those who need it most.",
      imageAlt: 'Members of the community greeting each other at a shared meal',
      ctaLabel: 'Discover our story',
    },
    stories: {
      heading: 'Stories that inspire',
      items: [
        { img: '/images/stories/education.webp', category: 'Education', caption: 'María now dreams big.' },
        { img: '/images/stories/health.webp', category: 'Health', caption: "We provide care where it's needed most." },
        { img: '/images/stories/nutrition.webp', category: 'Nutrition', caption: 'A breakfast that changes their day.' },
        { img: '/images/stories/community.webp', category: 'Community', caption: 'Workshops that create opportunities.' },
        { img: '/images/stories/senior-adults.webp', category: 'Senior Adults', caption: 'We accompany with love and respect.' },
      ],
      tiersHeading: 'Your help changes lives',
      tiers: [
        { amount: '$10 USD', label: 'Feed a child' },
        { amount: '$25 USD', label: 'Support educational materials' },
        { amount: '$50 USD', label: 'Fund community workshops' },
        { amount: '$100 USD', label: 'Drive full programs' },
      ],
      ctaLabel: 'Support us',
      missionBand: {
        ctaTitle: 'Be part of the change',
        ctaBody: "Your support keeps Elva's legacy alive, turning compassion into action.",
        primaryLabel: 'Donate now',
        secondaryLabel: 'Become a volunteer',
      },
    },
    ctaVolunteer: {
      titleLines: ['There are many ways', 'to make a difference.'],
      subcopy:
        "Whether donating, volunteering, or sharing our message, you are part of something greater. Help us continue Elva's legacy of compassion and service.",
      imageAlt: 'A young girl standing in a doorway, holding a doll',
      primaryLabel: 'Donate now',
      secondaryLabel: 'Become a volunteer',
    },
    ctaBand: {
      titleLines: ['As a volunteer,', 'you can make a difference.'],
      body: [
        'There is wisdom in every hand and strength in every gesture. By offering your time and choosing to care, you become part of something greater.',
        'Sharing what life has taught you through action, presence, and generosity means joining a movement that builds, heals, and\u00A0uplifts\u00A0communities.',
      ],
      ctaLabel: 'Apply for Volunteering',
    },
  },
  about: {
    seo: {
      title: 'Our Story & Mission in Veracruz',
      description:
        "Discover the story of Elva Fonseca and how her legacy of compassion shaped a foundation dedicated to serving communities across Veracruz, Mexico.",
    },
    hero: {
      titleLines: ['A story of care'],
      subcopy: [
        'Fundación Elva Fonseca is a nonprofit organization working to support vulnerable communities, especially in rural areas of Veracruz, Mexico.',
        "We lead initiatives focused on health, education, environmental care, women's empowerment, and child development, always with a human-centered approach.",
      ],
      imageAlt: 'A person loading flatbreads into a traditional wood-fired oven',
      ctaLabel: 'Explore initiatives',
    },
    legacyStory: {
      section1HeadingLines: ['A life of quiet strength.'],
      section1Body:
        'Elva faced many challenges throughout her life. With scarce resources, she worked tirelessly, washing clothes for others to help provide for her family. Despite the hardships, she always found a way to share\u00A0what\u00A0little\u00A0she\u00A0had.',
      photo1Alt: 'Two children, an older sibling beside a younger one, in a sepia-toned portrait',
      section2Quote: "“Give what you have, not what's left over.”",
      illustrationAlt: 'Illustrated portrait of Elva Fonseca inside an oval frame, with her signature',
      section2Label: 'The heart of a family.',
      section2Body:
        'This is one of her most memorable sayings. Through her generosity, she taught us the true meaning of compassion and service, always giving selflessly to those in need, even when she herself had\u00A0very\u00A0little.',
      section3HeadingLines: ['From her hands, a legacy.'],
      photo3Alt: 'A girl in a floral dress, standing for a portrait',
      sealAlt: 'Seal: Del Sur de México',
      section3Body:
        'As her children — Rosa, Antonio, Juan, Leydi, and Adilene — grew, Elva remained the foundation of our family. She cared for her grandchildren and great-grandchildren with the same unconditional love and dedication that defined her\u00A0entire\u00A0life.',
      section4HeadingLines: ['A future shaped by her example.'],
      photo4Alt: 'An elderly woman wearing glasses and a Fundación Elva Fonseca t-shirt, outdoors',
      section4Body:
        'The Elva Fonseca Foundation was created to honor her life, her values, and the love she gave so freely. Our mission is to continue her legacy by serving those in need in our community, just as she did — with open hearts and hands. Her example lives on in everything\u00A0we\u00A0do.',
    },
    story: {
      paragraphs: [
        "This foundation is also a celebration of progress. It was inspired not only by Elva's life, but by the first generation of her grandchildren to gain access to higher education.",
        'We carry her dream forward by working to ensure that future generations — especially those from humble beginnings — have the resources and opportunities to grow, thrive, and transform their own lives.',
      ],
      photoAlt: 'Community members shaking hands around a table at a gathering',
    },
    ctaDonate: {
      titleLines: ['Our mission'],
      body: 'With empathy and open hands, we work to ensure that no one is left behind. Our goal is to stand beside those who need it, offering care, resources, and dignity to the most vulnerable members\u00A0of\u00A0our\u00A0community.',
      ctaLabel: 'Donate now',
    },
    team: {
      heading: 'our team',
      members: [
        {
          name: 'Manuel Toto',
          role: 'President',
          image: '/images/about/team/manuel-toto.webp',
          imageAlt: 'Portrait of Manuel Toto',
        },
        {
          name: 'Jocelyn Diaz',
          role: 'Programs Director',
          image: '/images/about/team/jocelyn-diaz.webp',
          imageAlt: 'Portrait of Jocelyn Diaz',
        },
        {
          name: 'Leydi Toto',
          role: 'Treasurer',
          image: '/images/about/team/leydi-toto.webp',
          imageAlt: 'Portrait of Leydi Toto',
        },
        {
          name: 'Norma Lopez',
          role: 'Secretary',
          image: '/images/about/team/norma-lopez.webp',
          imageAlt: 'Portrait of Norma Lopez',
        },
        {
          name: 'Isabel Ruíz',
          role: 'Volunteer',
          image: '/images/about/team/isabel-ruiz.webp',
          imageAlt: 'Portrait of Isabel Ruíz',
        },
        {
          name: 'Carlos Toto',
          role: 'Volunteer',
          image: '/images/about/team/carlos-toto.webp',
          imageAlt: 'Portrait of Carlos Toto',
        },
      ],
    },
    ctaBand: {
      titleLines: ['Ready to lend a hand?'],
      body: [
        "Your support helps us keep Elva's legacy alive, turning compassion into action, and small gestures into lasting change. Every contribution helps nourish, educate, and uplift those who need it most.",
      ],
      ctaLabel: 'Donate Now',
      secondaryLabel: 'Volunteer',
    },
  },
  programs: {
    seo: {
      title: 'Education, Health & Nutrition',
      description:
        "Explore the Elva Fonseca Foundation's community programs — health, education, nutrition, and support for families throughout Veracruz, Mexico.",
    },
    hero: {
      titleLines: ['Our Programs'],
      subcopy:
        "Elva Fonseca's legacy is one of care, courage, and generosity, transforming her community through everyday acts of love and solidarity.",
      imageAlt: 'A girl standing in a river holding recyclable containers',
    },
    slider: {
      prevLabel: 'Prev',
      nextLabel: 'Next',
      prevAriaLabel: 'Previous program',
      nextAriaLabel: 'Next program',
      dotsAriaLabel: 'Programs',
      slides: [
        {
          titleLines: ['Basic Needs &', 'Personal Growth'],
          imageAlt: 'A woman smiling warmly while shelling corn outdoors',
          cards: [
            { title: 'Community dining', desc: 'Daily meals served to elderly individuals and children ages 5–14.', value: '132,480', label: 'Meals served' },
            { title: 'Community kitchens', desc: 'Kitchens providing nutritious meals for families and individuals experiencing food insecurity.', value: '4,230', label: 'Families nourished' },
            { title: 'Direct support', desc: 'Food, clothing, scholarships, and vital resources donated to individuals and families in urgent need.', value: '18,720', label: 'Essential items donated' },
          ],
        },
        {
          titleLines: ['Health &', 'Mobility'],
          imageAlt: 'A colorful colonial street framed by a yellow archway',
          cards: [
            { title: 'Mobility support', desc: 'Distribution of wheelchairs, walkers, and canes to promote independence.', value: '1,045', label: 'Mobility aids delivered' },
            { title: 'Community health', desc: 'Free medical outreach, medication donations, physical activity and hygiene supply distributions.', value: '6,310', label: 'Health services provided' },
            { title: 'Elderly support program', desc: '"Solidarity for Seniors" offers care, connection, and essential aid to elderly individuals.', value: '895', label: 'Seniors supported' },
          ],
        },
        {
          titleLines: ['Education &', 'Technology'],
          imageAlt: 'A bright classroom with wooden desks and chairs',
          cards: [
            { title: 'Free access to technology and printing', desc: 'Computers and printing services available for schoolwork and essential tasks.', value: '3,680', label: 'Sessions' },
            { title: 'Digital classrooms', desc: 'Modern, inclusive education through digital resources — especially in underserved areas.', value: '2,140', label: 'Students reached' },
            { title: 'Sensory room and play area', desc: 'A specially designed space for children with different abilities to play and grow.', value: '510', label: 'Therapeutic sessions held' },
            { title: 'Education and culture', desc: 'Reading workshops, school supply donations, literacy events, and cultural festivals.', value: '115', label: 'Learning events hosted' },
          ],
        },
        {
          titleLines: ['Art, Culture', '& Environment'],
          imageAlt: 'Papel picado banners strung above a lively market street',
          cards: [
            { title: 'Cultural growth', desc: 'Free classes in painting, carpentry, hair cutting, and traditional music/dance workshops.', value: '320', label: 'Creative workshops conducted' },
            { title: 'Art workshops for children', desc: 'Drawing contests and art sessions that promote creativity and self-expression.', value: '740', label: 'Young artists engaged' },
            { title: 'Cause-based events', desc: 'Events like "Mano Solidaria Market" highlight local talent, promote recycling, and celebrate values.', value: '42', label: 'Community events held' },
            { title: 'Environment', desc: 'Tree planting, reforestation efforts, and community clean-up campaigns.', value: '8,700', label: 'Trees planted' },
          ],
        },
      ],
    },
    voices: {
      headingLines: ['Voices of', 'the community:'],
      thumbAriaLabel: "Show {name}'s testimonial",
      testimonials: [
        {
          name: 'Lillian Fernandez',
          role: 'Volunteer',
          quote: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt".',
          imageAlt: 'Lillian smiling outdoors, wearing a Fundación Elva Fonseca t-shirt',
        },
        {
          name: 'Marcos Herrera',
          role: 'Program Participant',
          quote: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip, ex ea".',
          imageAlt: 'Marcos standing outdoors, wearing a Fundación Elva Fonseca t-shirt',
        },
        {
          name: 'Carla Méndez',
          role: 'Community Coordinator',
          quote: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ut".',
          imageAlt: 'Carla standing outdoors, wearing a Fundación Elva Fonseca polo shirt',
        },
      ],
    },
    whatIsNext: {
      heading: 'What is next?',
      subheading:
        "We're just getting started. Guided by our values and inspired by Elva's legacy, we're committed to expanding our reach and deepening our impact in the communities that need it most.",
      cards: [
        {
          imageAlt: 'Community members joining hands',
          titleLines: ['Mobility', 'for all'],
          body: 'We plan to open new community dining spaces across the municipality, ensuring that more children and elderly individuals have consistent access to nourishing meals and shared connection.',
        },
        {
          imageAlt: 'A girl standing at the doorway of her home',
          titleLines: ['Growing skills,', 'growing futures'],
          body: "We're expanding our vocational training programs to help more individuals gain the tools and knowledge they need to build brighter, self-sustaining futures for themselves and their families.",
        },
        {
          imageAlt: 'Fresh cassava and vegetables in crates',
          titleLines: ['More meals,', 'more towns'],
          body: 'We plan to open new community dining spaces across the municipality, ensuring that more children and elderly individuals have consistent access to nourishing meals and shared connection.',
        },
      ],
    },
    ctaBand: {
      titleLines: ['Do you have a dream project that could benefit your community?'],
      body: [
        "Whether it's a ceramics workshop, cooking classes, a gardening club, or something entirely new, we'd love to hear it.",
      ],
      ctaLabel: 'Volunteer',
      secondaryLabel: 'Get in touch',
    },
  },
  stories: {
    seo: {
      title: 'Stories of Impact',
      description:
        'Read real stories from the communities the Elva Fonseca Foundation serves in Veracruz, Mexico, and see the impact of our programs firsthand.',
    },
    heading: 'Stories',
    body: 'Stories from the communities we serve.',
  },
  donate: {
    seo: {
      title: 'Donate to Support Our Mission',
      description:
        "Your donation helps fund health, education, and nutrition programs for families in Veracruz, Mexico. Give today and support Elva's lasting legacy.",
    },
    hero: {
      headlineLines: ['Ready to help?', 'Start here'],
      subcopy: 'Every contribution counts. Support our mission and make lasting impact today.',
      imageAlt: 'Volunteers in a circle joining hands together outdoors',
      givebutterAriaLabel: 'Givebutter donation form — coming soon',
      givebutterLiveAriaLabel: 'Donation form',
      givebutterText: 'Donation form (Givebutter) — coming soon',
    },
    impactIntro: {
      headingLines: ['Open hands,', 'meaningful changes.'],
      body: "Every donation is put to work across the causes that matter most to our community: education and scholarships, health campaigns, nutrition support, senior care, and workshops that strengthen the community as a whole. Your generosity becomes someone's opportunity.",
    },
    missionBand: {
      ctaTitle: 'Where the impact happens',
      ctaBody: 'See the programs your donation directly supports.',
      primaryLabel: 'Explore',
      secondaryLabel: 'Become a volunteer',
    },
    ctaBand: {
      titleLines: ['As a volunteer,', 'you can make a difference.'],
      body: [
        'Sharing what life has taught you through action, presence, and generosity means joining a movement that builds, heals, and\u00A0uplifts\u00A0communities.',
      ],
      ctaLabel: 'Apply for Volunteering',
    },
    sponsorship: {
      eyebrow: 'Sponsorship',
      titleLines: ['Every sponsor is a', 'seed of change.'],
      body: "Let's build something meaningful together. Get in touch to explore partnership opportunities, whether co-creating a program or supporting an existing initiative.",
      imageAlt: 'A community sponsor wearing a red cap outdoors',
      ctaLabel: 'Send a message',
    },
  },
  volunteer: {
    seo: {
      title: 'Volunteer in Veracruz, Mexico',
      description:
        'Volunteer with the Elva Fonseca Foundation and help serve communities in Veracruz, Mexico. Learn how to get involved and make a real difference.',
    },
    hero: {
      titleLines: ['Ready to help?', 'Start here'],
      subcopy: 'Every contribution counts. Support our mission and make lasting impact today.',
      imageAlt: 'Aerial view of the community at sunset, with a river winding through green fields and homes',
    },
    intro: {
      heading: "Volunteering isn't about having spare time. It's about giving what you can.",
      subheading: 'Follow these simple steps to start making a difference:',
    },
    steps: {
      items: [
        {
          title: 'Explore your cause',
          body: 'From supporting children to serving meals or planting trees, our programs offer many ways to help. Find the one that feels right for you.',
          imageAlt: 'A boy wading through a river, holding a cup and a bag of collected recyclables',
        },
        {
          title: 'Submit your application',
          body: 'Fill out the volunteer application form below. Let us know your interests and availability, and once we receive it, a member of our team will reach out to guide you through the next steps.',
          imageAlt: 'A young girl standing in a doorway',
        },
        {
          title: 'Join our training program',
          intro: 'All new volunteers go through a 5-day training journey:',
          subSteps: [
            { label: 'Days 1 & 2:', text: 'Introductory sessions to understand our values, safety protocols, and program goals.' },
            { label: 'Days 3 to 5:', text: "Hands-on shadowing and real-life experiences, tailored to the program you'll join." },
          ],
          imageAlt: 'A group of volunteers seated indoors during a training session',
        },
        {
          title: 'Start your journey with us',
          body: "After training, you'll officially become part of our volunteer team — ready to support, grow, and bring positive change to our community.",
          imageAlt: 'Volunteers and children gathered together outdoors under a tree',
        },
      ],
    },
    form: {
      heading: 'Ready to lend a hand?',
      body: "Leave your info below and we'll be in touch soon. We'd love to learn more about you and how you'd like to get involved.",
      photoAlt: 'A boy standing in a doorway',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Add a message',
      sendLabel: 'Send',
    },
  },
  contact: {
    seo: {
      title: 'Contact Us',
      description:
        "Have a question or want to get involved? Contact the Elva Fonseca Foundation — we'd love to hear from you and welcome your support.",
    },
    hero: {
      heading: 'Open inbox',
      body: 'Whether you have a question, want to get involved, or simply share your thoughts, your voice matters. Together, we can build stronger communities and brighter futures.',
      photoAlt: 'A community member the foundation supports',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'E-mail Address',
      interestLabel: 'Subject',
      selectPlaceholder: 'Select',
      interests: ['General inquiry', 'Volunteering', 'Donations & Support', 'Programs & Services', 'Partnerships & Collaborations'],
      sendLabel: 'Send',
    },
    ctaVolunteer: {
      titleLines: ['Transparency that builds trust.'],
      subcopy: 'Explore detailed results and impact in our Transparency Report — updated regularly for full accountability.',
      imageAlt: 'A community member wearing a Fundación Elva Fonseca t-shirt',
      primaryLabel: 'Read',
    },
    ctaBand: {
      titleLines: ['So many ways to', 'make a difference.'],
      body: [
        "Whether you're donating, volunteering, or simply spreading the word, you are part of something bigger. Help us continue Elva's legacy of compassion and service.",
      ],
      ctaLabel: 'Volunteer',
      secondaryLabel: 'Donate',
    },
  },
  thankYou: {
    seo: {
      title: 'Thank You',
      description:
        'Thank you for supporting the Elva Fonseca Foundation. Your generosity helps us continue serving communities across Veracruz, Mexico.',
    },
    ctaBand: {
      titleLines: ['Thank you for', 'supporting our mission.'],
      body: [
        "Your donation is on its way to becoming a meal, a mobility aid, a school supply, a moment of care — exactly where it's needed most. Elva Fonseca's legacy lives on because of people like you.",
      ],
      receipt: 'A receipt has been sent to your email.',
      prompt: 'Want to do even more?',
      ctaLabel: 'Become a volunteer',
      secondaryLabel: 'Share our cause',
    },
  },
} as const;

export type Dictionary = typeof en;
