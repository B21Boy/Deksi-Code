import distanceEdPhoto from '../assets/images/distance-ed-photo.webp'
import lotteryPreview from '../assets/images/lottery-preview.webp'
import pharmacyHome from '../assets/images/pharmacy/home.webp'
import pharmacyMenu from '../assets/images/pharmacy/menu.webp'
import pharmacyRegister from '../assets/images/pharmacy/register.webp'
import pharmacyDetails from '../assets/images/pharmacy/details.webp'
import pharmacyChat from '../assets/images/pharmacy/chat.webp'
import pharmacyReports from '../assets/images/pharmacy/reports.webp'
import pharmacyAudit from '../assets/images/pharmacy/audit.webp'

export const projectCards = [
  {
    title: 'Launch Studio',
    tags: ['Landing Page', 'UI & UX'],
    preview: 'studio',
    url: 'https://yaffet-lottery.vercel.app/',
    image: lotteryPreview,
    imageWidth: 585,
    imageHeight: 900,
  },
  {
    title: 'Commerce Dashboard',
    tags: ['Landing Page', 'UI & UX'],
    preview: 'dashboard',
  },
  {
    title: 'Mobile Banking App',
    tags: ['Landing Page', 'UI & UX'],
    preview: 'mobile',
  },
  {
    title: 'API Platform',
    tags: ['Landing Page', 'UI & UX'],
    preview: 'api',
  },
]

export const showcaseProjects = [
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
    photo: distanceEdPhoto,
    photoAlt: 'Deksiyos Yismaw',
    photoWidth: 340,
    photoHeight: 300,
    notice:
      "This project runs on a local XAMPP server and hasn't been deployed online, so there's no public link to open yet.",
  },
  {
    title: 'Honey Shop E-Commerce Website',
    description:
      'A full-stack e-commerce website for selling honey products, with product management, customer registration, a shopping cart, and order processing. A MySQL database and PHP backend handle the core site operations.',
    status: 'Runs on a local server',
    tags: ['PHP', 'MySQL'],
    preview: 'studio',
    notice:
      "This project is built with PHP and MySQL and runs on a local XAMPP server, so it hasn't been deployed online and there's no public link to open yet.",
  },
]
