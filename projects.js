import distanceEdHome from './distance-education/IMG_20261003_094720_244.png'
import distanceEdRequests from './distance-education/Screenshot_20261003-095703.jpg'
import distanceEdModules from './distance-education/Screenshot_20261003-095728.jpg'
import marketplaceLanding from './project-1/01-landing-page.png'
import marketplaceBuyerHome from './project-1/02-buyer-home.png'
import marketplaceBuyerShop from './project-1/03-buyer-shop.png'
import marketplaceSellerDashboard from './project-1/04-seller-dashboard.png'
import marketplaceSellerProducts from './project-1/05-seller-products.png'
import commerceScreenshotOne from './project-2/Screenshot_20261004-115612_1.jpg'
import commerceScreenshotTwo from './project-2/Screenshot_20261004-115633_1.jpg'
import commerceScreenshotThree from './project-2/Screenshot_20261004-115654_1.jpg'
import commerceScreenshotFour from './project-2/Screenshot_20261004-115719_1.jpg'
import commerceScreenshotFive from './project-2/Screenshot_20261004-115828_1.jpg'
import commerceScreenshotSix from './project-2/Screenshot_20261004-115857_1.jpg'
import portfolioHero from './project-3/01-hero.png'
import portfolioAbout from './project-3/02-about.png'
import portfolioSkills from './project-3/03-skills.png'
import portfolioProjects from './project-3/04-projects.png'
import portfolioExperience from './project-3/05-experience.png'
import portfolioContact from './project-3/06-contact.png'
import skillSwapLanding from './project-4/skillswap-portfolio-desktop.png'
import skillSwapBoard from './project-4/skillswap-board-list.png'
import skillSwapMessages from './project-4/skillswap-messages.png'
import skillSwapTrades from './project-4/skillswap-trades.png'
import honeyRegister from './honey-shop/file_0000000020788210b616bbf4d57f5dcf.png'
import honeyHome from './honey-shop/file_0000000072a08210925c011ec2956ebb.png'
import honeyProducts from './honey-shop/file_000000009e2881f48f9bab09f9fd642b.png'
import honeyBlog from './honey-shop/file_00000000f4f08210ab3b1e91d87dc019.png'
import honeyLogin from './honey-shop/file_00000000ff408210a7a1a3e86ecdd5c1.png'
import lotteryPreview from './lottery-preview.webp'
import pharmacyHome from './home.webp'
import pharmacyMenu from './menu.webp'
import pharmacyRegister from './register.webp'
import pharmacyDetails from './details.webp'
import pharmacyChat from './chat.webp'
import pharmacyReports from './reports.webp'
import pharmacyAudit from './audit.webp'

export const projectCards = [
  {
    title: 'Marketplace Platform',
    description:
      'A buyer and seller marketplace with product discovery, shop browsing, and seller tools for managing listings and activity.',
    tags: ['Web Application', 'UI & UX'],
    preview: 'marketplace',
    url: 'https://forge-online-electronics-shop.vercel.app',
    images: [
      marketplaceLanding,
      marketplaceBuyerHome,
      marketplaceBuyerShop,
      marketplaceSellerDashboard,
      marketplaceSellerProducts,
    ],
    screenTitles: ['Landing page', 'Buyer home', 'Shop', 'Seller dashboard', 'Seller products'],
    screenAspectRatios: ['2880 / 1306', '2880 / 1934', '2880 / 1898', '2880 / 1541', '2880 / 1233'],
  },
  {
    title: 'aureOS Desktop Environment',
    description:
      'Explore a desktop OS experience with a personalized workspace, file manager, terminal, lock screen, and guided setup. AureOS is still in development and is not yet complete; the live preview shows the current build as new features and refinements are added.',
    status: 'Work in progress',
    tags: ['Desktop UI', 'Operating System'],
    preview: 'dashboard',
    url: 'https://aureos-nu.vercel.app/',
    imagesLayout: 'screenshot-grid',
    images: [
      commerceScreenshotOne,
      commerceScreenshotTwo,
      commerceScreenshotThree,
      commerceScreenshotFour,
      commerceScreenshotFive,
      commerceScreenshotSix,
    ],
    screenTitles: ['Desktop home', 'File browser', 'Terminal', 'Lock screen', 'Account setup', 'Personalization'],
    screenAspectRatios: ['800 / 295', '800 / 298', '800 / 297', '800 / 300', '800 / 295', '800 / 301'],
  },
  {
    title: 'Developer Portfolio',
    description:
      'A personal developer portfolio that introduces the developer and brings skills, selected work, experience, and contact details into one site.',
    tags: ['Portfolio Website', 'UI & UX'],
    preview: 'portfolio',
    url: 'https://cinematic-3d-portfolio-a8ac.vercel.app/',
    imagesLayout: 'portfolio-grid',
    images: [
      portfolioHero,
      portfolioAbout,
      portfolioSkills,
      portfolioProjects,
      portfolioExperience,
      portfolioContact,
    ],
    screenTitles: ['Hero', 'About', 'Skills', 'Projects', 'Experience', 'Contact'],
    screenAspectRatios: Array(6).fill('16 / 9'),
  },
  {
    title: 'SkillSwap Community Marketplace',
    slug: 'skillswap',
    description:
      'A community marketplace for exchanging skills, with a public landing page, offer board, trade management, and messaging.',
    tags: ['Web Application', 'Marketplace'],
    preview: 'skillswap',
    url: 'https://skillswap-drab-two.vercel.app',
    imagesLayout: 'skillswap-grid',
    images: [skillSwapLanding, skillSwapBoard, skillSwapMessages, skillSwapTrades],
    screenTitles: ['Marketplace landing', 'Offer board', 'Messages', 'Trade management'],
    screenAspectRatios: Array(4).fill('8 / 5'),
  },
]

const featuredShowcaseProjects = projectCards.map((project) => ({
  ...project,
  status: project.status || 'Web project',
  screens: project.images.map((src, index) => ({
    id: `${project.title}-${index + 1}`,
    src,
    title: project.screenTitles[index],
    text: `${project.screenTitles[index]} view from the ${project.title} project.`,
    alt: `${project.title} ${project.screenTitles[index]} screenshot`,
    isDesktop: true,
    aspectRatio: project.screenAspectRatios[index],
  })),
}))

export const showcaseProjects = [
  ...featuredShowcaseProjects,
  {
    title: 'Pharmacy Medicine Management System',
    description:
      'A Flutter mobile app for managing pharmacy medicine inventory and daily operations, with medicine tracking, stock management and an AI assistant for quick medicine lookups. Firebase keeps data in sync, with a simple, friendly interface for pharmacy staff.',
    status: 'Flutter mobile app',
    tags: ['Flutter', 'Firebase'],
    preview: 'mobile',
    featured: ['chat', 'home', 'details'],
    screens: [
      {
        id: 'home',
        src: pharmacyHome,
        title: 'Medicine inventory',
        text: 'Search medicines and filter them by category, with stock and price visible at a glance.',
        alt: 'Pharmacy Manager home screen listing medicines with search and category filters',
      },
      {
        id: 'menu',
        src: pharmacyMenu,
        title: 'Navigation menu',
        text: 'A side drawer with quick access to registering medicines, notifications for new reports and out-of-stock items, support, recently deleted items, help and settings.',
        alt: 'Pharmacy Manager side menu with Register, Notifications, Contact, Trash, Help and Settings',
      },
      {
        id: 'register',
        src: pharmacyRegister,
        title: 'Register a medicine',
        text: 'Add a medicine with its name, category, barcode, quantity, and buy and sell prices, plus a photo from the camera or gallery.',
        alt: 'Register Medicine form with name, category, barcode, quantity and pricing fields',
      },
      {
        id: 'details',
        src: pharmacyDetails,
        title: 'Details and analytics',
        text: 'Track remaining stock, profit per unit, total revenue, total cost and real profit, with a 7-day profit trend and recent sales.',
        alt: 'Medicine details screen with financial analytics cards and a profit trend chart',
      },
      {
        id: 'chat',
        src: pharmacyChat,
        title: 'AI medicine assistant',
        text: 'Ask about a medicine by name or barcode. The assistant suggests close matches and replies with remaining stock, total sold, profit, last sold date and whether to reorder.',
        alt: 'Medicine Assistant chat suggesting a close match and showing stock, sales and profit details',
      },
      {
        id: 'reports',
        src: pharmacyReports,
        title: 'Sales reports',
        text: 'Review sales for today, this week, this month or this year, and search reports by medicine or date.',
        alt: 'Reports screen with period filters, search and a list of sales grouped by date',
      },
      {
        id: 'audit',
        src: pharmacyAudit,
        title: 'Audit dashboard',
        text: 'See total revenue, items sold, top medicine, unique medicines and total profit, with a sales chart and data export.',
        alt: 'Audit dashboard with revenue and profit cards and a sales by medicine chart',
      },
    ],
  },
  {
    title: 'Distance Education Management System',
    description:
      'A web-based platform for organizing distance education, with responsive interfaces for managing students, courses, and educational information. Firebase powers real-time storage, and dynamic JavaScript keeps it interactive.',
    status: 'Runs on a local server',
    tags: ['JavaScript', 'Firebase'],
    preview: 'dashboard',
    screensLayout: 'desktop',
    featured: ['home', 'requests', 'modules'],
    screens: [
      {
        id: 'home',
        src: distanceEdHome,
        title: 'Education portal',
        text: 'The public portal brings announcements, academic information, registration and service links together.',
        alt: 'Distance Education portal homepage with university information and announcements',
        isDesktop: true,
      },
      {
        id: 'requests',
        src: distanceEdRequests,
        title: 'Student dashboard',
        text: 'Students can review new requests, academic updates and their account information from one dashboard.',
        alt: 'Student dashboard showing academic requests, calendar and student profile',
        isDesktop: true,
      },
      {
        id: 'modules',
        src: distanceEdModules,
        title: 'Course materials',
        text: 'The course area organizes modules and provides controls for students to download or submit materials.',
        alt: 'Course module table with download and upload controls',
        isDesktop: true,
      },
    ],
    notice:
      "This project currently runs on a local XAMPP server and isn't available as a public live demo yet.",
  },
  {
    title: 'Honey Shop E-Commerce Website',
    description:
      'A full-stack e-commerce website for selling honey products, with product management, customer registration, a shopping cart, and order processing. A MySQL database and PHP backend handle the core site operations.',
    status: 'Runs on a local server',
    tags: ['PHP', 'MySQL'],
    preview: 'honey-shop',
    screensLayout: 'desktop-grid',
    featured: ['home', 'products', 'blog', 'register'],
    screens: [
      {
        id: 'home',
        src: honeyHome,
        title: 'HoneyShop homepage',
        text: 'A storefront landing page that introduces the honey range and highlights product benefits.',
        alt: 'HoneyShop homepage with product categories, honey benefits and featured offers',
        isDesktop: true,
        aspectRatio: '3 / 2',
      },
      {
        id: 'products',
        src: honeyProducts,
        title: 'Product catalogue',
        text: 'Customers can browse honey varieties, filter products and compare prices from the catalogue.',
        alt: 'Honey product catalogue with category, price and rating filters',
        isDesktop: true,
        aspectRatio: '3 / 2',
      },
      {
        id: 'blog',
        src: honeyBlog,
        title: 'Honey journal',
        text: 'The blog area shares honey guides, recipes and beekeeping articles.',
        alt: 'HoneyShop blog page with article cards and category navigation',
        isDesktop: true,
        aspectRatio: '3 / 2',
      },
      {
        id: 'register',
        src: honeyRegister,
        title: 'Create an account',
        text: 'New customers can register with contact details and account credentials.',
        alt: 'HoneyShop customer registration page with account and contact fields',
        isDesktop: true,
        aspectRatio: '3 / 2',
      },
      {
        id: 'login',
        src: honeyLogin,
        title: 'Customer sign in',
        text: 'Returning shoppers can sign in to continue their shopping experience.',
        alt: 'HoneyShop sign-in page with email, password and account recovery options',
        isDesktop: true,
        aspectRatio: '3 / 2',
      },
    ],
    notice:
      "This PHP and MySQL project currently runs on a local XAMPP server and isn't available as a public live demo yet.",
  },
  {
    title: 'Yaffet Lottery Platform',
    description:
      'A lottery ticket experience for browsing the current round, choosing ticket numbers, uploading payment proof, and checking results and ticket history.',
    status: 'Lottery ticket platform',
    tags: ['Web Application', 'Payment Proof'],
    preview: 'lottery',
    imagesLayout: 'lottery-grid',
    images: Array(4).fill(lotteryPreview),
    url: 'https://yaffet-lottery.vercel.app/',
  },
]
