/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji'

export interface Config {
  auth: {
    users: UserAuthOperations
  }
  blocks: {}
  collections: {
    users: User
    media: Media
    pages: Page
    header: Header
    services: Service
    'payload-locked-documents': PayloadLockedDocument
    'payload-preferences': PayloadPreference
    'payload-migrations': PayloadMigration
  }
  collectionsJoins: {}
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>
    media: MediaSelect<false> | MediaSelect<true>
    pages: PagesSelect<false> | PagesSelect<true>
    header: HeaderSelect<false> | HeaderSelect<true>
    services: ServicesSelect<false> | ServicesSelect<true>
    'payload-locked-documents':
      | PayloadLockedDocumentsSelect<false>
      | PayloadLockedDocumentsSelect<true>
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>
  }
  db: {
    defaultIDType: number
  }
  globals: {}
  globalsSelect: {}
  locale: null
  user: User & {
    collection: 'users'
  }
  jobs: {
    tasks: unknown
    workflows: unknown
  }
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string
    password: string
  }
  login: {
    email: string
    password: string
  }
  registerFirstUser: {
    email: string
    password: string
  }
  unlock: {
    email: string
    password: string
  }
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number
  updatedAt: string
  createdAt: string
  email: string
  resetPasswordToken?: string | null
  resetPasswordExpiration?: string | null
  salt?: string | null
  hash?: string | null
  loginAttempts?: number | null
  lockUntil?: string | null
  password?: string | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number
  alt: string
  updatedAt: string
  createdAt: string
  url?: string | null
  thumbnailURL?: string | null
  filename?: string | null
  mimeType?: string | null
  filesize?: number | null
  width?: number | null
  height?: number | null
  focalX?: number | null
  focalY?: number | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number
  title: string
  /**
   * Auto-generated from title if left empty
   */
  slug?: string | null
  content?: (HeroBlock | HowItWorks | Statistic)[] | null
  isHomePage?: boolean | null
  status?: ('draft' | 'published') | null
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock".
 */
export interface HeroBlock {
  heading?: string | null
  subheading?: string | null
  heroImage: number | Media
  id?: string | null
  blockName?: string | null
  blockType: 'hero'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "How It Works".
 */
export interface HowItWorks {
  cards?:
    | {
        heading?: string | null
        subheading?: string | null
        cardImage: number | Media
        id?: string | null
      }[]
    | null
  id?: string | null
  blockName?: string | null
  blockType: 'how-it-work'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Statistic".
 */
export interface Statistic {
  cards?:
    | {
        total?: number | null
        title?: string | null
        /**
         *  Please upload  SVG or PNG
         */
        cardIcon: number | Media
        id?: string | null
      }[]
    | null
  id?: string | null
  blockName?: string | null
  blockType: 'statistic'
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number
  title?: string | null
  headerLogo: number | Media
  customerLogo?: (number | null) | Media
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: number
  title?: string | null
  /**
   * Auto-generated from title if left empty
   */
  slug?: string | null
  description?: string | null
  serviceImage: number | Media
  benefits?:
    | {
        title?: string | null
        id?: string | null
      }[]
    | null
  advantages?:
    | {
        title?: string | null
        description?: string | null
        id?: string | null
      }[]
    | null
  features?: {
    description?: string | null
    images?:
      | {
          image: number | Media
          id?: string | null
        }[]
      | null
    featureList?:
      | {
          title?: string | null
          id?: string | null
        }[]
      | null
  }
  /**
   * Please upload  at leatsr 4 images
   */
  inspirationImages?:
    | {
        image: number | Media
        id?: string | null
      }[]
    | null
  /**
   * Please enter the questions and answers in the JSON format
   */
  questions?:
    | {
        [k: string]: unknown
      }
    | unknown[]
    | string
    | number
    | boolean
    | null
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number
  document?:
    | ({
        relationTo: 'users'
        value: number | User
      } | null)
    | ({
        relationTo: 'media'
        value: number | Media
      } | null)
    | ({
        relationTo: 'pages'
        value: number | Page
      } | null)
    | ({
        relationTo: 'header'
        value: number | Header
      } | null)
    | ({
        relationTo: 'services'
        value: number | Service
      } | null)
  globalSlug?: string | null
  user: {
    relationTo: 'users'
    value: number | User
  }
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number
  user: {
    relationTo: 'users'
    value: number | User
  }
  key?: string | null
  value?:
    | {
        [k: string]: unknown
      }
    | unknown[]
    | string
    | number
    | boolean
    | null
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number
  name?: string | null
  batch?: number | null
  updatedAt: string
  createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T
  createdAt?: T
  email?: T
  resetPasswordToken?: T
  resetPasswordExpiration?: T
  salt?: T
  hash?: T
  loginAttempts?: T
  lockUntil?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T
  updatedAt?: T
  createdAt?: T
  url?: T
  thumbnailURL?: T
  filename?: T
  mimeType?: T
  filesize?: T
  width?: T
  height?: T
  focalX?: T
  focalY?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T
  slug?: T
  content?:
    | T
    | {
        hero?: T | HeroBlockSelect<T>
        'how-it-work'?: T | HowItWorksSelect<T>
        statistic?: T | StatisticSelect<T>
      }
  isHomePage?: T
  status?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock_select".
 */
export interface HeroBlockSelect<T extends boolean = true> {
  heading?: T
  subheading?: T
  heroImage?: T
  id?: T
  blockName?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "How It Works_select".
 */
export interface HowItWorksSelect<T extends boolean = true> {
  cards?:
    | T
    | {
        heading?: T
        subheading?: T
        cardImage?: T
        id?: T
      }
  id?: T
  blockName?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Statistic_select".
 */
export interface StatisticSelect<T extends boolean = true> {
  cards?:
    | T
    | {
        total?: T
        title?: T
        cardIcon?: T
        id?: T
      }
  id?: T
  blockName?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header_select".
 */
export interface HeaderSelect<T extends boolean = true> {
  title?: T
  headerLogo?: T
  customerLogo?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services_select".
 */
export interface ServicesSelect<T extends boolean = true> {
  title?: T
  slug?: T
  description?: T
  serviceImage?: T
  benefits?:
    | T
    | {
        title?: T
        id?: T
      }
  advantages?:
    | T
    | {
        title?: T
        description?: T
        id?: T
      }
  features?:
    | T
    | {
        description?: T
        images?:
          | T
          | {
              image?: T
              id?: T
            }
        featureList?:
          | T
          | {
              title?: T
              id?: T
            }
      }
  inspirationImages?:
    | T
    | {
        image?: T
        id?: T
      }
  questions?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T
  globalSlug?: T
  user?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T
  key?: T
  value?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T
  batch?: T
  updatedAt?: T
  createdAt?: T
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown
}

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
