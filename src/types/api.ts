export type Button = {
  label: string
  url: string
}

export type Image = {
  alternativeText: string
  url: string
}

export type SocialLinks = {
  title: string
  url: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: Button
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type TechIcon = {
  title: string
  icon: Image
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type Concepts = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: Button
}

export type Author = {
  name: string
  description: string
  role: string
  photo: Image
  socialLinks: SocialLinks[]
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  id: string
  name: string
  text: string
  photo: {
    url: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
  extraQuestion: Question
}

export type SectionFooterProps = {
  text: string
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
  sectionFooter: SectionFooterProps
}
