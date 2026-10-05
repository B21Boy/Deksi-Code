import { lazy } from 'react'

// Inner pages are code-split: they download only when needed (and are prefetched when idle).
export const loadProjectsPage = () => import('./ProjectsPage.jsx')
export const loadProcessPage = () => import('./ProcessPage.jsx')

export const ProjectsPage = lazy(loadProjectsPage)
export const ProcessPage = lazy(loadProcessPage)
