"use client"

import { useState, useEffect } from "react"
import { CheckCircle } from "lucide-react"

interface NotificationData {
  name: string
  location: string
  timeAgo: string
  verificationSource: string
  coordinates: { lat: number; lng: number }
  flag: string
}

export function LiveSalesNotifications() {
  const [currentNotification, setCurrentNotification] = useState<NotificationData | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const names = [
    // English/American names
    "Michael",
    "Emma",
    "James",
    "Olivia",
    "William",
    "Sophia",
    "Benjamin",
    "Isabella",
    "Lucas",
    "Mia",
    "Alexander",
    "Charlotte",
    "Ethan",
    "Amelia",
    "Daniel",
    "Harper",
    "Matthew",
    "Evelyn",
    "Henry",
    "Abigail",
    "Jackson",
    "Emily",
    "Sebastian",
    "Elizabeth",
    "Jack",
    "Sofia",
    "Aiden",
    "Avery",
    "Owen",
    "Ella",
    "Samuel",
    "Scarlett",
    "David",
    "Grace",
    "Joseph",
    "Chloe",
    "Carter",
    "Victoria",
    "Wyatt",
    "Riley",

    // European names
    "Luca",
    "Giulia",
    "Marco",
    "Francesca",
    "Alessandro",
    "Chiara",
    "Matteo",
    "Valentina",
    "Lorenzo",
    "Giorgia",
    "Antoine",
    "Camille",
    "Louis",
    "Manon",
    "Hugo",
    "Léa",
    "Gabriel",
    "Chloé",
    "Raphaël",
    "Inès",
    "Maximilian",
    "Hannah",
    "Felix",
    "Lena",
    "Paul",
    "Mia",
    "Leon",
    "Emma",
    "Finn",
    "Sophia",
    "Oliver",
    "Amelia",
    "Harry",
    "Isla",
    "George",
    "Ava",
    "Noah",
    "Grace",
    "Jack",
    "Lily",
    "Pablo",
    "Lucía",
    "Alejandro",
    "Martina",
    "Diego",
    "Paula",
    "Adrián",
    "María",
    "Álvaro",
    "Daniela",
    "Lars",
    "Emma",
    "Erik",
    "Olivia",
    "Magnus",
    "Astrid",
    "Oskar",
    "Saga",
    "Axel",
    "Alma",

    // Asian names
    "Hiroshi",
    "Yuki",
    "Takeshi",
    "Sakura",
    "Kenji",
    "Aiko",
    "Ryo",
    "Hana",
    "Daiki",
    "Mei",
    "Wei",
    "Li",
    "Chen",
    "Wang",
    "Zhang",
    "Liu",
    "Yang",
    "Huang",
    "Zhao",
    "Wu",
    "Arjun",
    "Priya",
    "Rahul",
    "Ananya",
    "Vikram",
    "Kavya",
    "Rohan",
    "Isha",
    "Aditya",
    "Shreya",
    "Min-jun",
    "So-young",
    "Jae-hyun",
    "Ji-woo",
    "Seung-ho",
    "Ye-jin",
    "Dong-hyun",
    "Soo-jin",
    "Jun-seo",
    "Hye-jin",

    // Middle Eastern names
    "Ahmed",
    "Fatima",
    "Omar",
    "Aisha",
    "Ali",
    "Zara",
    "Hassan",
    "Layla",
    "Yusuf",
    "Nour",
    "Khalid",
    "Amira",
    "Samir",
    "Yasmin",
    "Tariq",
    "Rania",
    "Faisal",
    "Dina",
    "Nasser",
    "Lina",

    // African names
    "Kwame",
    "Ama",
    "Kofi",
    "Akosua",
    "Yaw",
    "Efua",
    "Kwaku",
    "Adwoa",
    "Kwabena",
    "Afia",
    "Sipho",
    "Nomsa",
    "Thabo",
    "Zanele",
    "Mandla",
    "Precious",
    "Lucky",
    "Beauty",
    "Gift",
    "Hope",
    "Amara",
    "Kemi",
    "Chidi",
    "Ngozi",
    "Emeka",
    "Adaora",
    "Ikenna",
    "Chioma",
    "Obinna",
    "Ifeoma",

    // Latin American names
    "Carlos",
    "María",
    "José",
    "Ana",
    "Luis",
    "Carmen",
    "Miguel",
    "Rosa",
    "Antonio",
    "Elena",
    "Diego",
    "Sofía",
    "Alejandro",
    "Isabella",
    "Fernando",
    "Valentina",
    "Ricardo",
    "Camila",
    "Andrés",
    "Natalia",
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "Carlos",
    "Beatriz",
    "Rafael",
    "Larissa",
    "Felipe",
    "Gabriela",

    // Additional global names
    "Raj",
    "Deepika",
    "Sanjay",
    "Meera",
    "Amit",
    "Pooja",
    "Suresh",
    "Kavita",
    "Ravi",
    "Sunita",
    "Ibrahim",
    "Khadija",
    "Mustafa",
    "Halima",
    "Ismail",
    "Safiya",
    "Bilal",
    "Maryam",
    "Usman",
    "Zahra",
  ]

  const locationsWithCoords = [
    // North America
    { name: "New York, USA", coordinates: { lat: 40.7128, lng: -74.006 }, flag: "🇺🇸" },
    { name: "Los Angeles, USA", coordinates: { lat: 34.0522, lng: -118.2437 }, flag: "🇺🇸" },
    { name: "Chicago, USA", coordinates: { lat: 41.8781, lng: -87.6298 }, flag: "🇺🇸" },
    { name: "Toronto, Canada", coordinates: { lat: 43.6532, lng: -79.3832 }, flag: "🇨🇦" },
    { name: "Vancouver, Canada", coordinates: { lat: 49.2827, lng: -123.1207 }, flag: "🇨🇦" },
    { name: "Mexico City, Mexico", coordinates: { lat: 19.4326, lng: -99.1332 }, flag: "🇲🇽" },

    // Europe
    { name: "London, UK", coordinates: { lat: 51.5074, lng: -0.1278 }, flag: "🇬🇧" },
    { name: "Berlin, Germany", coordinates: { lat: 52.52, lng: 13.405 }, flag: "🇩🇪" },
    { name: "Paris, France", coordinates: { lat: 48.8566, lng: 2.3522 }, flag: "🇫🇷" },
    { name: "Rome, Italy", coordinates: { lat: 41.9028, lng: 12.4964 }, flag: "🇮🇹" },
    { name: "Madrid, Spain", coordinates: { lat: 40.4168, lng: -3.7038 }, flag: "🇪🇸" },
    { name: "Amsterdam, Netherlands", coordinates: { lat: 52.3676, lng: 4.9041 }, flag: "🇳🇱" },
    { name: "Brussels, Belgium", coordinates: { lat: 50.8503, lng: 4.3517 }, flag: "🇧🇪" },
    { name: "Zurich, Switzerland", coordinates: { lat: 47.3769, lng: 8.5417 }, flag: "🇨🇭" },
    { name: "Vienna, Austria", coordinates: { lat: 48.2082, lng: 16.3738 }, flag: "🇦🇹" },
    { name: "Stockholm, Sweden", coordinates: { lat: 59.3293, lng: 18.0686 }, flag: "🇸🇪" },
    { name: "Oslo, Norway", coordinates: { lat: 59.9139, lng: 10.7522 }, flag: "🇳🇴" },
    { name: "Copenhagen, Denmark", coordinates: { lat: 55.6761, lng: 12.5683 }, flag: "🇩🇰" },
    { name: "Helsinki, Finland", coordinates: { lat: 60.1699, lng: 24.9384 }, flag: "🇫🇮" },
    { name: "Warsaw, Poland", coordinates: { lat: 52.2297, lng: 21.0122 }, flag: "🇵🇱" },
    { name: "Prague, Czech Republic", coordinates: { lat: 50.0755, lng: 14.4378 }, flag: "🇨🇿" },
    { name: "Budapest, Hungary", coordinates: { lat: 47.4979, lng: 19.0402 }, flag: "🇭🇺" },
    { name: "Lisbon, Portugal", coordinates: { lat: 38.7223, lng: -9.1393 }, flag: "🇵🇹" },
    { name: "Athens, Greece", coordinates: { lat: 37.9838, lng: 23.7275 }, flag: "🇬🇷" },
    { name: "Dublin, Ireland", coordinates: { lat: 53.3498, lng: -6.2603 }, flag: "🇮🇪" },

    // Asia
    { name: "Tokyo, Japan", coordinates: { lat: 35.6762, lng: 139.6503 }, flag: "🇯🇵" },
    { name: "Seoul, South Korea", coordinates: { lat: 37.5665, lng: 126.978 }, flag: "🇰🇷" },
    { name: "Beijing, China", coordinates: { lat: 39.9042, lng: 116.4074 }, flag: "🇨🇳" },
    { name: "Shanghai, China", coordinates: { lat: 31.2304, lng: 121.4737 }, flag: "🇨🇳" },
    { name: "Mumbai, India", coordinates: { lat: 19.076, lng: 72.8777 }, flag: "🇮🇳" },
    { name: "Delhi, India", coordinates: { lat: 28.7041, lng: 77.1025 }, flag: "🇮🇳" },
    { name: "Singapore", coordinates: { lat: 1.3521, lng: 103.8198 }, flag: "🇸🇬" },
    { name: "Kuala Lumpur, Malaysia", coordinates: { lat: 3.139, lng: 101.6869 }, flag: "🇲🇾" },
    { name: "Bangkok, Thailand", coordinates: { lat: 13.7563, lng: 100.5018 }, flag: "🇹🇭" },
    { name: "Manila, Philippines", coordinates: { lat: 14.5995, lng: 120.9842 }, flag: "🇵🇭" },
    { name: "Jakarta, Indonesia", coordinates: { lat: -6.2088, lng: 106.8456 }, flag: "🇮🇩" },
    { name: "Ho Chi Minh City, Vietnam", coordinates: { lat: 10.8231, lng: 106.6297 }, flag: "🇻🇳" },
    { name: "Taipei, Taiwan", coordinates: { lat: 25.033, lng: 121.5654 }, flag: "🇹🇼" },
    { name: "Hong Kong", coordinates: { lat: 22.3193, lng: 114.1694 }, flag: "🇭🇰" },

    // Middle East
    { name: "Dubai, UAE", coordinates: { lat: 25.2048, lng: 55.2708 }, flag: "🇦🇪" },
    { name: "Riyadh, Saudi Arabia", coordinates: { lat: 24.7136, lng: 46.6753 }, flag: "🇸🇦" },
    { name: "Doha, Qatar", coordinates: { lat: 25.2854, lng: 51.531 }, flag: "🇶🇦" },
    { name: "Kuwait City, Kuwait", coordinates: { lat: 29.3759, lng: 47.9774 }, flag: "🇰🇼" },
    { name: "Manama, Bahrain", coordinates: { lat: 26.0667, lng: 50.5577 }, flag: "🇧🇭" },
    { name: "Muscat, Oman", coordinates: { lat: 23.5859, lng: 58.4059 }, flag: "🇴🇲" },
    { name: "Amman, Jordan", coordinates: { lat: 31.9454, lng: 35.9284 }, flag: "🇯🇴" },
    { name: "Beirut, Lebanon", coordinates: { lat: 33.8938, lng: 35.5018 }, flag: "🇱🇧" },
    { name: "Tel Aviv, Israel", coordinates: { lat: 32.0853, lng: 34.7818 }, flag: "🇮🇱" },
    { name: "Istanbul, Turkey", coordinates: { lat: 41.0082, lng: 28.9784 }, flag: "🇹🇷" },
    { name: "Cairo, Egypt", coordinates: { lat: 30.0444, lng: 31.2357 }, flag: "🇪🇬" },

    // Africa
    { name: "Cape Town, South Africa", coordinates: { lat: -33.9249, lng: 18.4241 }, flag: "🇿🇦" },
    { name: "Johannesburg, South Africa", coordinates: { lat: -26.2041, lng: 28.0473 }, flag: "🇿🇦" },
    { name: "Lagos, Nigeria", coordinates: { lat: 6.5244, lng: 3.3792 }, flag: "🇳🇬" },
    { name: "Nairobi, Kenya", coordinates: { lat: -1.2921, lng: 36.8219 }, flag: "🇰🇪" },
    { name: "Accra, Ghana", coordinates: { lat: 5.6037, lng: -0.187 }, flag: "🇬🇭" },
    { name: "Casablanca, Morocco", coordinates: { lat: 33.5731, lng: -7.5898 }, flag: "🇲🇦" },
    { name: "Tunis, Tunisia", coordinates: { lat: 36.8065, lng: 10.1815 }, flag: "🇹🇳" },
    { name: "Algiers, Algeria", coordinates: { lat: 36.7538, lng: 3.0588 }, flag: "🇩🇿" },

    // Oceania
    { name: "Sydney, Australia", coordinates: { lat: -33.8688, lng: 151.2093 }, flag: "🇦🇺" },
    { name: "Melbourne, Australia", coordinates: { lat: -37.8136, lng: 144.9631 }, flag: "🇦🇺" },
    { name: "Brisbane, Australia", coordinates: { lat: -27.4698, lng: 153.0251 }, flag: "🇦🇺" },
    { name: "Perth, Australia", coordinates: { lat: -31.9505, lng: 115.8605 }, flag: "🇦🇺" },
    { name: "Auckland, New Zealand", coordinates: { lat: -36.8485, lng: 174.7633 }, flag: "🇳🇿" },
    { name: "Wellington, New Zealand", coordinates: { lat: -41.2865, lng: 174.7762 }, flag: "🇳🇿" },
    { name: "Suva, Fiji", coordinates: { lat: -18.1248, lng: 178.4501 }, flag: "🇫🇯" },

    // South America
    { name: "São Paulo, Brazil", coordinates: { lat: -23.5505, lng: -46.6333 }, flag: "🇧🇷" },
    { name: "Rio de Janeiro, Brazil", coordinates: { lat: -22.9068, lng: -43.1729 }, flag: "🇧🇷" },
    { name: "Buenos Aires, Argentina", coordinates: { lat: -34.6118, lng: -58.396 }, flag: "🇦🇷" },
    { name: "Santiago, Chile", coordinates: { lat: -33.4489, lng: -70.6693 }, flag: "🇨🇱" },
    { name: "Bogotá, Colombia", coordinates: { lat: 4.711, lng: -74.0721 }, flag: "🇨🇴" },
    { name: "Lima, Peru", coordinates: { lat: -12.0464, lng: -77.0428 }, flag: "🇵🇪" },
    { name: "Caracas, Venezuela", coordinates: { lat: 10.4806, lng: -66.9036 }, flag: "🇻🇪" },
    { name: "Quito, Ecuador", coordinates: { lat: -0.1807, lng: -78.4678 }, flag: "🇪🇨" },
    { name: "Montevideo, Uruguay", coordinates: { lat: -34.9011, lng: -56.1645 }, flag: "🇺🇾" },

    // Caribbean
    { name: "Kingston, Jamaica", coordinates: { lat: 17.9712, lng: -76.7936 }, flag: "🇯🇲" },
    { name: "Port of Spain, Trinidad", coordinates: { lat: 10.6596, lng: -61.5089 }, flag: "🇹🇹" },
    { name: "Bridgetown, Barbados", coordinates: { lat: 13.1939, lng: -59.5432 }, flag: "🇧🇧" },
    { name: "Nassau, Bahamas", coordinates: { lat: 25.0443, lng: -77.3504 }, flag: "🇧🇸" },
    { name: "Santo Domingo, Dominican Republic", coordinates: { lat: 18.4861, lng: -69.9312 }, flag: "🇩🇴" },
  ]

  const timeOptions = [
    "just now",
    "1 minute ago",
    "2 minutes ago",
    "3 minutes ago",
    "4 minutes ago",
    "5 minutes ago",
    "6 minutes ago",
    "7 minutes ago",
    "8 minutes ago",
    "9 minutes ago",
    "10 minutes ago",
    "12 minutes ago",
    "15 minutes ago",
    "18 minutes ago",
    "20 minutes ago",
    "25 minutes ago",
    "30 minutes ago",
    "35 minutes ago",
    "40 minutes ago",
    "45 minutes ago",
    "50 minutes ago",
    "1 hour ago",
    "2 hours ago",
    "3 hours ago",
    "4 hours ago",
    "5 hours ago",
    "6 hours ago",
    "8 hours ago",
    "12 hours ago",
    "1 day ago",
  ]

  const verificationSources = ["System", "Evidence", "Platform", "Security", "Verification"]

  const getRandomNotification = (): NotificationData => {
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomLocation = locationsWithCoords[Math.floor(Math.random() * locationsWithCoords.length)]
    const randomTime = timeOptions[Math.floor(Math.random() * timeOptions.length)]
    const randomSource = verificationSources[Math.floor(Math.random() * verificationSources.length)]

    return {
      name: randomName,
      location: randomLocation.name,
      timeAgo: randomTime,
      verificationSource: randomSource,
      coordinates: randomLocation.coordinates,
      flag: randomLocation.flag,
    }
  }

  const getRandomInterval = () => {
    // Random interval between 15-35 seconds
    return Math.floor(Math.random() * 20000) + 15000
  }

  const showNotification = () => {
    const notification = getRandomNotification()
    setCurrentNotification(notification)
    setIsVisible(true)

    // Hide notification after 6 seconds (slightly longer to appreciate the map)
    setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentNotification(null)
      }, 500)
    }, 6000)
  }

  useEffect(() => {
    // Show first notification after 3 seconds
    const initialTimeout = setTimeout(() => {
      showNotification()
    }, 3000)

    // Set up recurring notifications
    const scheduleNext = () => {
      const interval = getRandomInterval()
      setTimeout(() => {
        showNotification()
        scheduleNext()
      }, interval)
    }

    // Start the recurring cycle
    setTimeout(() => {
      scheduleNext()
    }, 9000)

    return () => {
      clearTimeout(initialTimeout)
    }
  }, [])

  if (!currentNotification) return null

  // Generate a simple map-like visualization with better coordinate mapping
  const generateMapSVG = (lat: number, lng: number) => {
    // Better coordinate normalization - ensure pins are visible and well-distributed
    const mapWidth = 80
    const mapHeight = 80
    const padding = 8

    // Normalize coordinates to fit in the map area with padding
    const normalizedLng = ((lng + 180) / 360) * (mapWidth - 2 * padding) + padding
    const normalizedLat = ((90 - lat) / 180) * (mapHeight - 2 * padding) + padding // Flip Y axis for SVG

    // Ensure pin is always visible within bounds
    const pinX = Math.max(padding, Math.min(mapWidth - padding, normalizedLng))
    const pinY = Math.max(padding, Math.min(mapHeight - padding, normalizedLat))

    return (
      <svg width="50" height="50" viewBox="0 0 80 80" className="rounded-full bg-blue-50 border-2 border-blue-200">
        {/* Background map-like pattern */}
        <defs>
          <pattern id="mapPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="#e0f2fe" />
            <path d="M0 8 L16 8 M8 0 L8 16" stroke="#bae6fd" strokeWidth="0.5" />
          </pattern>

          {/* Gradient for landmasses */}
          <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dcfce7" />
            <stop offset="100%" stopColor="#bbf7d0" />
          </linearGradient>
        </defs>

        {/* Ocean background */}
        <rect width="80" height="80" fill="url(#mapPattern)" />

        {/* Landmass shapes - more realistic */}
        <path
          d="M8 25 Q25 18 45 28 Q58 38 52 55 Q35 65 18 58 Q5 45 8 25"
          fill="url(#landGradient)"
          stroke="#86efac"
          strokeWidth="0.8"
        />
        <path
          d="M48 12 Q68 8 72 28 Q76 42 62 48 Q52 43 48 28 Q44 18 48 12"
          fill="url(#landGradient)"
          stroke="#86efac"
          strokeWidth="0.8"
        />
        <path
          d="M15 68 Q35 65 42 72 Q38 78 25 76 Q12 74 15 68"
          fill="url(#landGradient)"
          stroke="#86efac"
          strokeWidth="0.8"
        />

        {/* Location pin with shadow */}
        <circle cx={pinX} cy={pinY + 1} r="4" fill="#000000" opacity="0.2" />
        <circle cx={pinX} cy={pinY} r="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx={pinX} cy={pinY} r="2" fill="#ffffff" />

        {/* Pulse animation ring */}
        <circle cx={pinX} cy={pinY} r="6" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.6">
          <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    )
  }

  // Debug: Log coordinates for testing
  console.log(
    `Location: ${currentNotification.location}, Lat: ${currentNotification.coordinates.lat}, Lng: ${currentNotification.coordinates.lng}`,
  )

  return (
    <div
      className={`fixed z-50 transition-all duration-500 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      } 
      bottom-4 left-4 md:left-4 md:bottom-4 
      sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:bottom-4 md:transform-none md:translate-x-0`}
    >
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-sm mx-auto backdrop-blur-sm">
        <div className="flex items-start gap-3">
          {/* Map Visualization */}
          <div className="flex-shrink-0">
            {generateMapSVG(currentNotification.coordinates.lat, currentNotification.coordinates.lng)}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Name and Location with Flag */}
            <div className="flex items-center gap-1 mb-1 flex-wrap">
              <span className="font-bold text-gray-900 text-sm">{currentNotification.name}</span>
              <span className="text-gray-600 text-sm">from</span>
              <div className="flex items-center gap-1">
                <span className="text-lg">{currentNotification.flag}</span>
                <span className="font-bold text-gray-900 text-sm">{currentNotification.location}</span>
              </div>
            </div>

            {/* Action */}
            <div className="text-gray-700 text-sm mb-2">Just subscribed to AIBuysStocks.com</div>

            {/* Verification */}
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" style={{ color: "#27C48F" }} />
              <span className="text-xs text-gray-500">
                Verified by {currentNotification.verificationSource} {currentNotification.timeAgo}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
