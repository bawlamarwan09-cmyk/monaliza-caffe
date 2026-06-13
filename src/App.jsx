import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  Clock,
  Coffee,
  Heart,
  Instagram,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Send,
  Sparkles,
  Star,
  Wifi,
  X,
} from 'lucide-react'
import heroCafe from './assets/monalisa-exterior.jpg'
import menuBoard from './assets/monalisa-menu-board.jpg'

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Menu', href: '#menu' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Contact', href: '#contact' },
]

const heroFeatures = [
  {
    icon: Coffee,
    title: 'Café premium',
    text: 'Grains sélectionnés avec soin.',
  },
  {
    icon: Heart,
    title: 'Fait avec passion',
    text: 'Préparé par nos baristas experts.',
  },
  {
    icon: Star,
    title: 'Espace confortable',
    text: 'Ambiance cosy pour se détendre.',
  },
  {
    icon: Wifi,
    title: 'Wifi gratuit',
    text: 'Restez connecté tout en savourant.',
  },
]

const stats = [
  { value: '+10', label: 'boissons signature' },
  { value: 'Terrasse', label: 'places lumineuses' },
  { value: 'Wifi', label: 'connexion rapide' },
  { value: 'Cosy', label: 'ambiance feutrée' },
]

const drinks = [
  {
    name: 'Monalisa Latte',
    description: 'Doux, crémeux et élégant avec une mousse satinée.',
    price: '28 DH',
    image:
      'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Caramel Macchiato',
    description: 'Caramel fondant, espresso intense et lait velouté.',
    price: '30 DH',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'White Mocha',
    description: 'Chocolat blanc, espresso doux et crème généreuse.',
    price: '30 DH',
    image:
      'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Monalisa Frappe',
    description: 'Le frappe signature de la maison, frais et gourmand.',
    price: '32 DH',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Matcha Latte',
    description: 'Énergie verte, texture douce et plaisir naturel.',
    price: '28 DH',
    image:
      'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Smoothie Fruits',
    description: 'Fruits frais mixés pour une pause légère et colorée.',
    price: '26 DH',
    image:
      'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Espresso',
    description: 'Un shot court, profond et parfaitement équilibré.',
    price: '15 DH',
    image:
      'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cappuccino',
    description: 'Espresso, lait chaud et mousse aérienne classique.',
    price: '24 DH',
    image:
      'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=80',
  },
]

const galleryItems = [
  {
    title: 'Façade Monalisa',
    image: heroCafe,
    className: 'md:col-span-2 md:row-span-2',
    fit: 'cover',
  },
  {
    title: 'Carte signature',
    image: menuBoard,
    className: 'md:col-span-2',
    fit: 'contain',
  },
  {
    title: 'Latte art',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
    className: '',
    fit: 'cover',
  },
  {
    title: 'Pause dessert',
    image:
      'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80',
    className: '',
    fit: 'cover',
  },
  {
    title: 'Ambiance cosy',
    image:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80',
    className: 'md:col-span-2',
    fit: 'cover',
  },
]

const infoCards = [
  {
    icon: MapPin,
    title: 'Adresse',
    text: 'Boulevard principal, quartier centre-ville',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    text: '+212 6 00 00 00 00',
  },
  {
    icon: Instagram,
    title: 'Instagram',
    text: '@monalisacoffee',
  },
  {
    icon: Clock,
    title: 'Horaires',
    text: 'Tous les jours, 08:00 - 23:00',
  },
]

const ease = [0.22, 1, 0.36, 1]

const reveal = {
  hidden: { opacity: 0, y: 44, rotateX: 7 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.85, ease },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

function scrollToTarget(href, closeMenu) {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  closeMenu?.()
}

function LogoMark({ dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`grid size-12 place-items-center rounded-full border ${
          dark
            ? 'border-coffee-700 bg-cream text-coffee-900'
            : 'border-cream/35 bg-cream/10 text-cream'
        }`}
      >
        <span className="font-display text-2xl font-bold">M</span>
      </div>
      <div>
        <p
          className={`font-display text-2xl font-bold leading-none tracking-[0.18em] ${
            dark ? 'text-coffee-950' : 'text-cream'
          }`}
        >
          MONALISA
        </p>
        <p
          className={`text-[0.62rem] font-semibold uppercase tracking-[0.46em] ${
            dark ? 'text-coffee-600' : 'text-gold'
          }`}
        >
          Coffee
        </p>
      </div>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -90, opacity: 0, rotateX: -18 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ duration: 0.9, ease }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3"
      style={{ perspective: 1200 }}
    >
      <nav className="premium-container glass-panel flex items-center justify-between rounded-full px-4 py-3 text-cream md:px-6">
        <button
          type="button"
          onClick={() => scrollToTarget('#accueil', () => setOpen(false))}
          className="text-left"
          aria-label="Retour à l'accueil"
        >
          <LogoMark />
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollToTarget(link.href)}
              className="text-xs font-bold uppercase tracking-[0.2em] text-cream/78 transition hover:text-gold"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToTarget('#contact')}
          className="hidden rounded-full bg-gold px-6 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-coffee-950 shadow-gold transition hover:-translate-y-0.5 hover:bg-cream md:inline-flex"
        >
          Réserver une table
        </button>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-full border border-cream/20 bg-cream/10 lg:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={20} /> : <MenuIcon size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ duration: 0.26 }}
            className="premium-container mt-3 rounded-3xl border border-cream/15 bg-coffee-950/92 p-4 text-cream shadow-2xl backdrop-blur lg:hidden"
          >
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollToTarget(link.href, () => setOpen(false))}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-bold uppercase tracking-[0.16em] transition hover:bg-cream/10 hover:text-gold"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollToTarget('#contact', () => setOpen(false))}
                className="mt-2 rounded-2xl bg-gold px-4 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-coffee-950"
              >
                Réserver une table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.35])

  return (
    <section
      id="accueil"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-coffee-950 text-cream"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.div
          initial={{ scale: 1.18 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 3.2, ease }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCafe})` }}
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-r from-black via-coffee-950/88 to-coffee-950/6"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-black/28" />
      <div className="soft-blur left-[9%] top-[28%] size-52 bg-gold" />
      <div className="soft-blur bottom-[13%] right-[17%] size-72 bg-coffee-300" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="premium-container relative z-10 flex min-h-screen items-center pt-28"
      >
        <div className="max-w-3xl">
          <motion.p
            variants={reveal}
            className="font-script text-4xl text-gold md:text-5xl"
          >
            Welcome to
          </motion.p>
          <motion.h1
            variants={reveal}
            className="mt-2 font-display text-6xl font-bold leading-[0.85] tracking-[0.08em] text-cream drop-shadow-2xl sm:text-7xl md:text-8xl lg:text-9xl"
          >
            MONALISA
            <span className="block text-beige">COFFEE</span>
          </motion.h1>
          <motion.div
            variants={reveal}
            className="my-7 h-px w-44 bg-gradient-to-r from-gold via-beige to-transparent"
          />
          <motion.p
            variants={reveal}
            className="max-w-xl text-base leading-8 text-cream/86 md:text-xl"
          >
            Un espace chaleureux où chaque tasse raconte une histoire.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <motion.button
              type="button"
              onClick={() => scrollToTarget('#menu')}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.8 }}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-coffee-950 shadow-gold"
            >
              <Coffee size={18} />
              Découvrir notre menu
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollToTarget('#apropos')}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-cream/32 bg-cream/5 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-cream backdrop-blur transition hover:border-gold hover:text-gold"
            >
              En savoir plus
            </motion.button>
          </motion.div>

          <motion.div
            variants={stagger}
            className="mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4"
          >
            {heroFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={reveal}
                  whileHover={{ rotateX: 6, rotateY: -7, y: -6 }}
                  className="glass-panel rounded-3xl p-4"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="mb-3 grid size-11 place-items-center rounded-full border border-gold/45 text-gold">
                    <Icon size={20} />
                  </div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em]">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-cream/72">
                    {feature.text}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>

      <FloatingCoffeeCards />
    </section>
  )
}

function FloatingCoffeeCards() {
  const cards = [
    { title: 'Signature Latte', price: '28 DH', top: '24%', right: '8%' },
    { title: 'Terrasse cosy', price: 'Open', top: '47%', right: '16%' },
    { title: 'Reserve Blend', price: '100%', top: '68%', right: '7%' },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, x: 80, rotateY: 40, rotateX: 18 }}
          animate={{
            opacity: 1,
            x: 0,
            rotateY: [0, index % 2 ? -7 : 7, 0],
            rotateX: [0, 5, 0],
            y: [0, -18, 0],
          }}
          transition={{
            delay: 0.8 + index * 0.22,
            duration: 4.2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          className="glass-panel absolute w-56 rounded-[2rem] p-4 text-cream"
          style={{
            top: card.top,
            right: card.right,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="flex items-center justify-between">
            <div className="grid size-12 place-items-center rounded-2xl bg-gold/18 text-gold">
              <Coffee size={23} />
            </div>
            <span className="font-display text-2xl font-bold text-beige">
              {card.price}
            </span>
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-cream/62">
            Monalisa
          </p>
          <p className="font-display text-2xl font-bold">{card.title}</p>
        </motion.div>
      ))}
    </div>
  )
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="font-script text-4xl text-gold">{eyebrow}</p>
      <h2
        className={`gold-line mt-1 font-display text-5xl font-bold uppercase tracking-[0.12em] md:text-6xl ${
          light ? 'text-cream' : 'text-coffee-950'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-9 text-base leading-8 ${
            light ? 'text-cream/72' : 'text-coffee-700'
          }`}
        >
          {text}
        </p>
      )}
    </motion.div>
  )
}

function About() {
  return (
    <section id="apropos" className="relative overflow-hidden bg-beige py-24">
      <div className="soft-blur -left-16 top-24 size-72 bg-gold" />
      <div className="soft-blur bottom-8 right-10 size-72 bg-coffee-500" />
      <div className="premium-container relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          className="relative"
        >
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border border-gold/35" />
          <div className="paper-texture relative overflow-hidden rounded-[2rem] p-4 shadow-paper">
            <img
              src={menuBoard}
              alt="Menu Monalisa Coffee"
              className="h-[520px] w-full rounded-[1.5rem] object-cover"
            />
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-8 left-8 rounded-3xl border border-cream/35 bg-coffee-950/82 p-5 text-cream backdrop-blur"
            >
              <p className="font-script text-3xl text-gold">Coffee Art</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                Good vibes daily
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p variants={reveal} className="font-script text-5xl text-gold">
            À propos
          </motion.p>
          <motion.h2
            variants={reveal}
            className="mt-2 font-display text-5xl font-bold uppercase leading-none tracking-[0.1em] text-coffee-950 md:text-7xl"
          >
            L'élégance du café au quotidien
          </motion.h2>
          <motion.p
            variants={reveal}
            className="mt-7 text-lg leading-9 text-coffee-800"
          >
            MONALISA COFFEE réunit l'esprit d'un café urbain premium et la
            chaleur d'un salon de quartier. Chaque détail, du grain sélectionné
            au confort de la terrasse, est pensé pour créer une pause raffinée,
            douce et mémorable.
          </motion.p>

          <motion.div
            variants={stagger}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {stats.map((item) => (
              <motion.div
                key={item.value}
                variants={reveal}
                whileHover={{ y: -8, rotateX: 5 }}
                className="rounded-[1.6rem] border border-coffee-200/80 bg-cream/72 p-6 shadow-paper backdrop-blur"
              >
                <p className="font-display text-4xl font-bold text-coffee-950">
                  {item.value}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-coffee-600">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function MenuSection() {
  const menuRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: menuRef,
    offset: ['start start', 'end end'],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 58,
    damping: 26,
    mass: 0.7,
    restDelta: 0.0004,
  })
  const pages = Array.from({ length: Math.ceil(drinks.length / 2) }, (_, index) =>
    drinks.slice(index * 2, index * 2 + 2),
  )

  return (
    <section
      id="menu"
      ref={menuRef}
      className="relative bg-cream py-24 lg:min-h-[420vh] lg:py-0"
    >
      <div className="soft-blur left-[8%] top-40 size-72 bg-gold" />
      <div className="soft-blur bottom-40 right-[8%] size-80 bg-coffee-400" />

      <div className="premium-container lg:sticky lg:top-20 lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
        <SectionTitle
          eyebrow="Nos spécialités"
          title="Menu"
          text="Faites défiler le livre: chaque page révèle une nouvelle sélection de boissons MONALISA COFFEE."
        />

        <div className="mt-8 hidden lg:block">
          <div className="book-frame relative mx-auto h-[48vh] min-h-[360px] max-h-[500px] max-w-6xl rounded-[2.4rem] bg-coffee-900 p-3 shadow-paper">
            <div className="absolute inset-3 rounded-[2rem] bg-coffee-950/20" />
            <div className="absolute bottom-3 left-1/2 top-3 z-20 w-[18px] -translate-x-1/2 rounded-full book-spine shadow-2xl" />

            <div className="paper-texture absolute bottom-3 left-3 top-3 w-[calc(50%_-_0.75rem)] overflow-hidden rounded-l-[2rem] p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-cream/90 via-cream/62 to-beige/78" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="font-script text-4xl text-gold">
                    Monalisa Coffee
                  </p>
                  <h3 className="mt-2 font-display text-4xl font-bold uppercase leading-none tracking-[0.12em] text-coffee-950">
                    Le livre des saveurs
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-coffee-700">
                    Tournez les pages en scrollant. Les textures papier, les
                    ombres et la rotation 3D donnent l'effet d'un vrai menu
                    imprimé.
                  </p>
                </div>
                <div className="overflow-hidden rounded-[1.4rem] border border-coffee-200">
                  <img
                    src={heroCafe}
                    alt="Extérieur Monalisa Coffee"
                    className="h-24 w-full object-cover xl:h-32"
                  />
                </div>
              </div>
            </div>

            {pages.map((pageDrinks, index) => (
              <BookPage
                key={index}
                drinks={pageDrinks}
                index={index}
                total={pages.length}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:hidden"
        >
          {drinks.map((drink) => (
            <MenuDrinkCard key={drink.name} drink={drink} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BookPage({ drinks: pageDrinks, index, total, progress }) {
  const isLastPage = index === total - 1
  const start = Math.max(0, index / total - 0.025)
  const mid = Math.min(start + 0.46 / total, 1)
  const end = isLastPage ? 1 : Math.min(start + 0.96 / total, 1)
  const rotateY = useTransform(
    progress,
    [start, mid, end],
    [0, isLastPage ? 0 : -74, isLastPage ? 0 : -158],
  )
  const rotateZ = useTransform(
    progress,
    [start, mid, end],
    [0, isLastPage ? 0 : -1.2, isLastPage ? 0 : -2.8],
  )
  const x = useTransform(
    progress,
    [start, mid, end],
    [0, isLastPage ? 0 : -10, isLastPage ? 0 : -30],
  )
  const scale = useTransform(
    progress,
    [start, end],
    [1, isLastPage ? 1 : 0.985],
  )
  const shadow = useTransform(
    progress,
    [start, end],
    [
      '0 30px 80px rgba(46, 27, 15, 0.16)',
      isLastPage
        ? '0 30px 80px rgba(46, 27, 15, 0.16)'
        : '28px 34px 90px rgba(19, 8, 4, 0.32)',
    ],
  )

  return (
    <motion.div
      className="book-page paper-texture absolute bottom-3 left-1/2 top-3 w-[calc(50%_-_0.75rem)] overflow-hidden rounded-r-[2rem] border-l border-coffee-200 p-5"
      style={{
        rotateY,
        rotateZ,
        x,
        scale,
        boxShadow: shadow,
        zIndex: total - index + 3,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream/95 to-beige/88" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-3 flex items-center justify-between border-b border-coffee-200 pb-3">
          <p className="font-display text-3xl font-bold text-coffee-950">
            Page {index + 1}
          </p>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-gold">
            Spécialités
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-5">
          {pageDrinks.map((drink) => (
            <MenuDrinkCard key={drink.name} drink={drink} compact />
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between text-[0.65rem] font-bold uppercase tracking-[0.22em] text-coffee-500">
          <span>MONALISA COFFEE</span>
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
      </div>
    </motion.div>
  )
}

function MenuDrinkCard({ drink, compact = false }) {
  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -10, rotateX: 4 }}
      className={`drink-card group rounded-[1.5rem] ${
        compact ? 'p-3' : 'p-4'
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className={`drink-image rounded-[1.1rem] bg-cover bg-center ${
          compact ? 'h-24 xl:h-28' : 'h-52'
        }`}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(19, 8, 4, 0.02), rgba(19, 8, 4, 0.12)), url(${drink.image})`,
        }}
      />
      <div className={compact ? 'pt-4' : 'pt-5'}>
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-display font-bold uppercase tracking-[0.08em] text-coffee-950 ${
              compact ? 'text-lg xl:text-xl' : 'text-2xl'
            }`}
          >
            {drink.name}
          </h3>
          <span className="rounded-full bg-gold px-3 py-1 text-xs font-extrabold text-coffee-950 shadow">
            {drink.price}
          </span>
        </div>
        <p
          className={`mt-3 leading-6 text-coffee-700 ${
            compact ? 'text-xs' : 'text-sm'
          }`}
        >
          {drink.description}
        </p>
      </div>
    </motion.article>
  )
}

function Gallery() {
  return (
    <section
      id="galerie"
      className="relative overflow-hidden bg-coffee-950 py-24 text-cream"
    >
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#fff8eb_1px,_transparent_1px)] [background-size:28px_28px]" />
      </div>
      <div className="premium-container relative z-10">
        <SectionTitle
          eyebrow="Galerie"
          title="Moments café"
          text="Un aperçu de la façade, des boissons et de l'ambiance premium inspirée de MONALISA COFFEE."
          light
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-14 grid auto-rows-[240px] gap-5 sm:auto-rows-[270px] md:grid-cols-4 md:auto-rows-[230px] lg:auto-rows-[250px]"
        >
          {galleryItems.map((item) => (
            <motion.article
              key={item.title}
              variants={reveal}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[1.6rem] border border-cream/12 bg-coffee-900 ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`h-full w-full transition duration-700 ${
                  item.fit === 'contain'
                    ? 'bg-cream/95 object-contain p-3 group-hover:scale-[1.03]'
                    : 'object-cover group-hover:scale-110'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/16 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-3xl font-bold">{item.title}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-gold">
                  MONALISA COFFEE
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-beige py-24">
      <div className="premium-container">
        <SectionTitle
          eyebrow="Contact"
          title="Réserver"
          text="Envoyez un message pour réserver une table ou organiser une pause café premium."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <motion.form
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="paper-texture rounded-[2rem] border border-coffee-200 p-6 shadow-paper md:p-8"
          >
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-coffee-700">
                  Nom
                </span>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="rounded-2xl border border-coffee-200 bg-cream/80 px-4 py-4 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-coffee-700">
                  Téléphone
                </span>
                <input
                  type="tel"
                  placeholder="+212 ..."
                  className="rounded-2xl border border-coffee-200 bg-cream/80 px-4 py-4 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-coffee-700">
                  Message
                </span>
                <textarea
                  rows="6"
                  placeholder="Votre message"
                  className="resize-none rounded-2xl border border-coffee-200 bg-cream/80 px-4 py-4 outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                />
              </label>
              <motion.button
                type="button"
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-coffee-950 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-cream shadow-gold transition hover:bg-coffee-800"
              >
                Envoyer
                <Send size={17} />
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="grid gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {infoCards.map((card) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.title}
                    variants={reveal}
                    whileHover={{ y: -6, rotateX: 4 }}
                    className="rounded-[1.6rem] border border-coffee-200 bg-cream/70 p-5 shadow-paper"
                  >
                    <div className="mb-4 grid size-12 place-items-center rounded-full bg-coffee-950 text-gold">
                      <Icon size={21} />
                    </div>
                    <p className="font-display text-2xl font-bold text-coffee-950">
                      {card.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-coffee-700">
                      {card.text}
                    </p>
                  </motion.div>
                )
              })}
            </div>
            <motion.div
              variants={reveal}
              className="map-grid relative min-h-[300px] overflow-hidden rounded-[2rem] border border-coffee-200 shadow-paper"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/18 via-transparent to-coffee-800/16" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center text-center"
              >
                <div className="grid size-20 place-items-center rounded-full bg-coffee-950 text-gold shadow-gold">
                  <MapPin size={34} />
                </div>
                <p className="mt-4 rounded-full bg-cream/85 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-coffee-800">
                  Google map placeholder
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-coffee-950 py-12 text-cream">
      <div className="premium-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <LogoMark />
          <p className="mt-4 max-w-md text-sm leading-7 text-cream/62">
            Un espace chaleureux où chaque tasse raconte une histoire.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollToTarget(link.href)}
              className="text-xs font-bold uppercase tracking-[0.18em] text-cream/64 transition hover:text-gold"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
      <div className="premium-container mt-9 border-t border-cream/10 pt-6 text-xs font-semibold uppercase tracking-[0.22em] text-cream/42">
        © 2026 MONALISA COFFEE. Tous droits réservés.
      </div>
    </footer>
  )
}

function FloatingDecorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -22, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="floating-bean absolute left-5 top-[38%] hidden h-16 w-9 rounded-full bg-gradient-to-br from-coffee-700 to-coffee-950 opacity-20 md:block"
      />
      <motion.div
        animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="floating-bean absolute bottom-[18%] right-8 hidden h-20 w-11 rounded-full bg-gradient-to-br from-gold to-coffee-500 opacity-20 md:block"
      />
      <motion.div
        animate={{ y: [0, -16, 0], opacity: [0.18, 0.3, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[14%] top-[22%] hidden text-gold/25 lg:block"
      >
        <Sparkles size={54} />
      </motion.div>
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <FloatingDecorations />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
