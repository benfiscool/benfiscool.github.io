'use client'

import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import PhotoAlbum from '@/components/PhotoAlbum'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <PhotoAlbum />
      <Projects />
      <Contact />
    </>
  )
}
