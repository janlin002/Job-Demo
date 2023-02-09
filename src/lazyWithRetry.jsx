import { lazy } from 'react'

const lazyWithRetry = (componentImport) => lazy(async () => {
  const pageHasAlreadyBeenForceRefreshed = JSON.parse(
    window.localStorage.getItem(
      'page-has-been-force-refreshed',
    ) || 'false',
  )

  try {
    const component = await componentImport()

    window.localStorage.setItem(
      'page-has-been-force-refreshed',
      'false',
    )

    return component
  } catch (error) {
    if (!pageHasAlreadyBeenForceRefreshed) {
      // 如果發現 chunkLoadingError 就強制 re-render
      window.localStorage.setItem(
        'page-has-been-force-refreshed',
        'true',
      )
      return window.location.reload()
    }
    throw error
  }
})

export default lazyWithRetry