/**
 * Single content source for the Leverius site.
 * Copy lives here so sections stay purely presentational.
 */

export const SITE = {
  name: 'Leverius',
  tagline: 'Property, considered.',
  description:
    'Leverius is a private brokerage for architecturally significant homes. We represent a small number of residences at a time, and we know every one of them street by street.',
  email: 'office@leverius.com',
  phone: '+1 (503) 555 0142',
  address: ['Leverius House', '412 NW Couch Street', 'Portland, Oregon 97209'],
  hours: 'Mon to Fri, 9 to 6 Pacific',
  founded: 2014,
} as const

export const NAV_LINKS = [
  { id: 'residences', label: 'Residences' },
  { id: 'approach', label: 'Approach' },
  { id: 'services', label: 'Services' },
  { id: 'journal', label: 'Journal' },
  { id: 'contact', label: 'Contact' },
] as const

export type Region = 'all' | 'coast' | 'city' | 'wild'

export type Residence = {
  id: string
  name: string
  location: string
  region: Exclude<Region, 'all'>
  price: string
  priceValue: number
  beds: number
  baths: number
  sqft: string
  year: number
  architect: string
  image: string
  /** Two short sentences: the pitch, written like a caption, not an ad. */
  summary: string
  narrative: string
  features: readonly string[]
  status: 'Available' | 'New' | 'Under offer'
}

export const RESIDENCES: readonly Residence[] = [
  {
    id: 'oakridge',
    name: 'Oakridge House',
    location: 'Sea Ranch, California',
    region: 'coast',
    price: '$4,850,000',
    priceValue: 4850000,
    beds: 4,
    baths: 3,
    sqft: '3,200',
    year: 2021,
    architect: 'Halloran + Voss',
    image: '/images/listing-1.jpg',
    summary:
      'A cantilevered glass pavilion set above a private terrace, built to hold the horizon and nothing else.',
    narrative:
      'Two cypress trees frame the approach; beyond them the house opens in a single gesture of glass and pale plaster. The living wing slides away on a twelve-metre track, so the room and the terrace become the same volume. Mechanical systems are buried under the eastern slope, which is why the roofline stays unbroken across the whole span.',
    features: [
      'Cantilevered living pavilion',
      'Twelve-metre vanishing glass wall',
      'Infinity pool, salt filtration',
      'Copper roof, standing seam',
      'Two-acre cypress parcel',
    ],
    status: 'New',
  },
  {
    id: 'kestrel',
    name: 'Kestrel Point',
    location: 'Mendocino Headlands, California',
    region: 'coast',
    price: '$3,275,000',
    priceValue: 3275000,
    beds: 3,
    baths: 2,
    sqft: '2,100',
    year: 2019,
    architect: 'Ines Moreau',
    image: '/images/listing-2.jpg',
    summary:
      'A concrete shell that reads as a single curve against the headland, lit from within at dusk.',
    narrative:
      'Moreau drew the plan around a nine-metre window with no mullions, then wrapped the structure in board-formed concrete so the exterior would weather into the cliff rather than sit on it. Interiors are deliberately quiet: oak, linen, and one long hearth. The acoustics were tuned with the client\u2019s piano in mind.',
    features: [
      'Board-formed concrete shell',
      'Nine-metre unbroken glazing',
      'Masonry hearth, wood-fired',
      'Geothermal loop, closed system',
      'Deeded headland access',
    ],
    status: 'Available',
  },
  {
    id: 'meridian',
    name: 'The Meridian',
    location: 'Pearl District, Portland',
    region: 'city',
    price: '$5,400,000',
    priceValue: 5400000,
    beds: 3,
    baths: 3,
    sqft: '2,750',
    year: 2023,
    architect: 'Kjaer Studio',
    image: '/images/listing-3.jpg',
    summary:
      'A full-floor residence eleven storeys up, with ribbon balconies that wrap the entire perimeter.',
    narrative:
      'One unit per floor, reached by a keyed lift that opens into the residence itself. Kjaer pushed the structural columns to the glazing line so the plan reads as a continuous loft. Balconies step outward by three degrees each level, which is what gives the tower its soft edge from the street.',
    features: [
      'Full-floor, keyed lift entry',
      'Three-hundred-sixty-degree glazing',
      'Perimeter ribbon balconies',
      'Two secured parking bays',
      'Concierge, seven days',
    ],
    status: 'Available',
  },
  {
    id: 'juniper',
    name: 'Juniper Canyon',
    location: 'Paradise Valley, Arizona',
    region: 'wild',
    price: '$3,980,000',
    priceValue: 3980000,
    beds: 4,
    baths: 4,
    sqft: '3,640',
    year: 2022,
    architect: 'Teodoro Ash',
    image: '/images/listing-4.jpg',
    summary:
      'Desert modern in weathered timber and board concrete, arranged around a lit stone approach.',
    narrative:
      'The house turns its back on the road and opens entirely to the north, where the mountain sits. Ash detailed the entry as a sequence: gravel, then floating concrete treads, then a pivot door in white oak. Shade is structural rather than mechanical, with deep reveals on every western opening.',
    features: [
      'Pivot entry in white oak',
      'Deep shaded reveals, west elevation',
      'Native xeriscape, no irrigation',
      'Detached studio and carport',
      'Passive cooling chimney stack',
    ],
    status: 'New',
  },
  {
    id: 'larkspur',
    name: 'Larkspur A-Frame',
    location: 'Cascade Range, Oregon',
    region: 'wild',
    price: '$1,845,000',
    priceValue: 1845000,
    beds: 3,
    baths: 2,
    sqft: '1,980',
    year: 2018,
    architect: 'Bell & Rouse',
    image: '/images/partner-1.jpg',
    summary:
      'A steep-gabled timber cabin in old-growth forest, restored rather than replaced.',
    narrative:
      'Bell & Rouse kept the original 1974 frame and rebuilt everything inside it: a new stone chimney, a double-height glazed gable, and a deck that steps down to the treeline. The forest is protected on three sides, so the view is not a view for now but a view for good.',
    features: [
      'Original 1974 frame, rebuilt',
      'Double-height glazed gable',
      'Fieldstone chimney',
      'Protected old-growth border',
      'Six minutes to the trailhead',
    ],
    status: 'Under offer',
  },
  {
    id: 'ridgeline',
    name: 'Ridgeline Retreat',
    location: 'Flathead Valley, Montana',
    region: 'wild',
    price: '$2,610,000',
    priceValue: 2610000,
    beds: 4,
    baths: 3,
    sqft: '2,940',
    year: 2020,
    architect: 'Halloran + Voss',
    image: '/images/partner-2.jpg',
    summary:
      'Stacked timber and stone volumes stepping down a pine slope, west-facing for the long light.',
    narrative:
      'Built in three volumes, each a half-storey below the last, so every room gets both the valley and the ridge. The exterior is larch that has been left untreated to silver over time. It reads as five years old from the drive and fifty from the treeline, which was the point.',
    features: [
      'Three stepped volumes',
      'Untreated larch cladding',
      'Two-storey stone chimney',
      'Heated motor court',
      'Adjoins national forest',
    ],
    status: 'Available',
  },
  {
    id: 'terrace',
    name: 'The Terrace House',
    location: 'Willamette Heights, Portland',
    region: 'city',
    price: '$2,240,000',
    priceValue: 2240000,
    beds: 3,
    baths: 3,
    sqft: '2,380',
    year: 2017,
    architect: 'Ines Moreau',
    image: '/images/partner-3.jpg',
    summary:
      'A low meadow-set house with a deep timber canopy, built for a family that lives outdoors.',
    narrative:
      'The canopy runs the full length of the south elevation and does the work of a second room from April to October. Inside, the plan is a simple bar with a service spine along the north wall. Moreau calls it the least clever house she has drawn, which she means as the highest compliment.',
    features: [
      'Full-length timber canopy',
      'Meadow lot, 0.8 acre',
      'Radiant concrete slab',
      'Detached garden studio',
      'Twelve minutes to downtown',
    ],
    status: 'Available',
  },
] as const

export const REGION_TABS = [
  { value: 'all', label: 'All residences' },
  { value: 'coast', label: 'Coast' },
  { value: 'city', label: 'City' },
  { value: 'wild', label: 'Wild' },
] as const

export const STATS = [
  { value: '312', label: 'Residences placed', detail: 'Since 2014' },
  { value: '11', label: 'Days median', detail: 'Listing to offer' },
  { value: '98.4', label: 'Percent of ask', detail: 'Trailing twelve months', suffix: '%' },
  { value: '9', label: 'Advisors', detail: 'No junior staff' },
] as const

export const APPROACH = [
  {
    number: '01',
    title: 'We start with the building',
    body: 'Before a price, before a showing, one of our advisors writes an assessment of the architecture: what it is, who drew it, what has been changed and what that costs later. You get it whether or not you buy.',
  },
  {
    number: '02',
    title: 'Then the numbers, honestly',
    body: 'We model the sale three ways: the ask, the likely, and the floor. If the floor is wrong for you, we say so on the first call rather than the fortieth showing.',
  },
  {
    number: '03',
    title: 'One advisor, start to finish',
    body: 'The person who takes your first call is the person at the closing table. We do not hand files between teams, and we do not put a junior on the paperwork.',
  },
] as const

export const SERVICES = [
  {
    value: 'buying',
    title: 'Private acquisition',
    body: 'Off-market search across the Pacific Northwest, the coast and the high desert. Roughly a third of what we sell never appears on a public listing, and we show those first. You get a written brief each month: what came up, what we passed on, and why.',
    meta: 'Retained search · 3 to 9 months',
  },
  {
    value: 'selling',
    title: 'Representation',
    body: 'Architectural photography, a printed monograph of the house, and a shortlist of buyers rather than a broadcast. We cap the number of listings we take at any one time so that each one gets an advisor whose attention is not divided.',
    meta: 'Exclusive · 2.5% at close',
  },
  {
    value: 'advising',
    title: 'Building advisory',
    body: 'For buyers considering land or a house that needs work: structural read, planning constraints, a realistic restoration budget, and the names of the builders we would actually use. Delivered as a document you can take to a lender.',
    meta: 'Fixed fee · 3 weeks',
  },
  {
    value: 'stewarding',
    title: 'Estate stewardship',
    body: 'For owners of significant houses: an annual condition survey, a maintenance calendar keyed to the materials in the building, and a record of every intervention. We hold the history so the next owner inherits it.',
    meta: 'Annual · by invitation',
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'They talked us out of the first house we loved, in writing, with reasons. The second one we still live in eight years later. That is the whole review.',
    name: 'Marguerite and Daniel Osei',
    detail: 'Bought in Willamette Heights, 2017',
  },
  {
    quote:
      'The monograph they produced for our house was better than anything we had seen from a gallery. It sold in nine days, above ask, to someone who had never set foot in Oregon.',
    name: 'Priya Raghunathan',
    detail: 'Sold in Sea Ranch, 2024',
  },
  {
    quote:
      'I have bought six properties in my life and this is the only time an advisor told me the truth about a foundation. I did not buy that house. I have used them twice since.',
    name: 'Charles Whitfield',
    detail: 'Client since 2019',
  },
] as const

export const JOURNAL = [
  {
    id: 'silver-larch',
    title: 'Why we let larch go silver',
    category: 'Materials',
    date: 'March 2026',
    readTime: '6 min',
    excerpt:
      'A treated facade fails loudly. An untreated one fails slowly, then stops. On the case for weather over warranty.',
    image: '/images/partner-2.jpg',
  },
  {
    id: 'second-life',
    title: 'The second life of a 1974 A-frame',
    category: 'Restoration',
    date: 'February 2026',
    readTime: '9 min',
    excerpt:
      'What you keep when you rebuild everything. Notes from a two-year restoration in the Cascades, including the three things we got wrong.',
    image: '/images/partner-1.jpg',
  },
  {
    id: 'glass-problem',
    title: 'The problem with a very large window',
    category: 'Engineering',
    date: 'January 2026',
    readTime: '7 min',
    excerpt:
      'Everyone wants nine metres of unbroken glass. Almost nobody budgets for what nine metres of glass does to a room in August.',
    image: '/images/listing-2.jpg',
  },
] as const

export const PRESS = [
  'Architectural Digest',
  'Dwell',
  'Wallpaper*',
  'Monocle',
  'Financial Times',
  'Dezeen',
  'The Architect\u2019s Newspaper',
  'Kinfolk',
] as const

export const REGIONS = [
  { name: 'Pacific Coast', detail: 'Sea Ranch to Mendocino' },
  { name: 'Willamette Valley', detail: 'Portland and the wine country' },
  { name: 'Cascade Range', detail: 'Timber and alpine parcels' },
  { name: 'High Desert', detail: 'Bend, Sisters, and east' },
] as const
